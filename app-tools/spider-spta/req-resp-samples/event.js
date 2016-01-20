if (!window.zk) {
//ZK, Copyright 2009 Potix Corporation, LGPL
//jQuery, (c) John Resig, MIT
//Sizzle, (c) The Dojo Foundation, MIT
//jQuery Mousewheel, (c) Brandon Aaron, MIT

    window.$eval = function (s) {
        return eval(s);
    };
    (function (a0, aD) {
        var af, w, az = typeof aD, aI = a0.location, l = a0.document, bU = l.documentElement, X = {}, a4 = [], s = "1.10.2", aF = a4.concat, al = a4.push, a2 = a4.slice, aJ = a4.indexOf, y = X.toString, S = X.hasOwnProperty, aN = s.trim, bH = function (e, b2) {
            return new bH.fn.init(e, b2, w)
        }, by = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Z = /\S+/g, B = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bp = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, bf = /^[\],:{}\s]*$/, bh = /(?:^|:|,)(?:\s*\[)+/g, bE = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, aW = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, bQ = /^-ms-/, aS = /-([\da-z])/gi, J = function (e, b2) {
            return b2.toUpperCase()
        }, bV = function (e) {
            if (l.addEventListener || e.type === "load" || l.readyState === "complete") {
                bi();
                bH.ready()
            }
        }, bi = function () {
            if (l.addEventListener) {
                l.removeEventListener("DOMContentLoaded", bV, false);
                a0.removeEventListener("load", bV, false)
            } else {
                l.detachEvent("onreadystatechange", bV);
                a0.detachEvent("onload", bV)
            }
        };
        bH.fn = bH.prototype = {
            jquery: s, constructor: bH, init: function (e, b4, b3) {
                var b2, b5;
                if (!e) {
                    return this
                }
                if (typeof e === "string") {
                    if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                        b2 = [null, e, null]
                    } else {
                        b2 = bp.exec(e)
                    }
                    if (b2 && (b2[1] || !b4)) {
                        if (b2[1]) {
                            b4 = b4 instanceof bH ? b4[0] : b4;
                            bH.merge(this, bH.parseHTML(b2[1], b4 && b4.nodeType ? b4.ownerDocument || b4 : l, true));
                            if (a.test(b2[1]) && bH.isPlainObject(b4)) {
                                for (b2 in b4) {
                                    if (bH.isFunction(this[b2])) {
                                        this[b2](b4[b2])
                                    } else {
                                        this.attr(b2, b4[b2])
                                    }
                                }
                            }
                            return this
                        } else {
                            b5 = l.getElementById(b2[2]);
                            if (b5 && b5.parentNode) {
                                if (b5.id !== b2[2]) {
                                    return b3.find(e)
                                }
                                this.length = 1;
                                this[0] = b5
                            }
                            this.context = l;
                            this.selector = e;
                            return this
                        }
                    } else {
                        if (!b4 || b4.jquery) {
                            return (b4 || b3).find(e)
                        } else {
                            return this.constructor(b4).find(e)
                        }
                    }
                } else {
                    if (e.nodeType) {
                        this.context = this[0] = e;
                        this.length = 1;
                        return this
                    } else {
                        if (bH.isFunction(e)) {
                            return b3.ready(e)
                        }
                    }
                }
                if (e.selector !== aD) {
                    this.selector = e.selector;
                    this.context = e.context
                }
                return bH.makeArray(e, this)
            }, selector: "", length: 0, toArray: function () {
                return a2.call(this)
            }, get: function (e) {
                return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
            }, pushStack: function (e) {
                var b2 = bH.merge(this.constructor(), e);
                b2.prevObject = this;
                b2.context = this.context;
                return b2
            }, each: function (b2, e) {
                return bH.each(this, b2, e)
            }, ready: function (e) {
                bH.ready.promise().done(e);
                return this
            }, slice: function () {
                return this.pushStack(a2.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (b3) {
                var e = this.length, b2 = +b3 + (b3 < 0 ? e : 0);
                return this.pushStack(b2 >= 0 && b2 < e ? [this[b2]] : [])
            }, map: function (e) {
                return this.pushStack(bH.map(this, function (b3, b2) {
                    return e.call(b3, b2, b3)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: al, sort: [].sort, splice: [].splice
        };
        bH.fn.init.prototype = bH.fn;
        bH.extend = bH.fn.extend = function () {
            var e, b7, b2, b3, ca, b8, b6 = arguments[0] || {}, b5 = 1, b4 = arguments.length, b9 = false;
            if (typeof b6 === "boolean") {
                b9 = b6;
                b6 = arguments[1] || {};
                b5 = 2
            }
            if (typeof b6 !== "object" && !bH.isFunction(b6)) {
                b6 = {}
            }
            if (b4 === b5) {
                b6 = this;
                --b5
            }
            for (; b5 < b4; b5++) {
                if ((ca = arguments[b5]) != null) {
                    for (b3 in ca) {
                        e = b6[b3];
                        b2 = ca[b3];
                        if (b6 === b2) {
                            continue
                        }
                        if (b9 && b2 && (bH.isPlainObject(b2) || (b7 = bH.isArray(b2)))) {
                            if (b7) {
                                b7 = false;
                                b8 = e && bH.isArray(e) ? e : []
                            } else {
                                b8 = e && bH.isPlainObject(e) ? e : {}
                            }
                            b6[b3] = bH.extend(b9, b8, b2)
                        } else {
                            if (b2 !== aD) {
                                b6[b3] = b2
                            }
                        }
                    }
                }
            }
            return b6
        };
        bH.extend({
            expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""), noConflict: function (e) {
                return bH
            }, isReady: false, readyWait: 1, holdReady: function (e) {
                if (e) {
                    bH.readyWait++
                } else {
                    bH.ready(true)
                }
            }, ready: function (e) {
                if (e === true ? --bH.readyWait : bH.isReady) {
                    return
                }
                if (!l.body) {
                    return setTimeout(bH.ready)
                }
                bH.isReady = true;
                if (e !== true && --bH.readyWait > 0) {
                    return
                }
                af.resolveWith(l, [bH]);
                if (bH.fn.trigger) {
                    bH(l).trigger("ready").off("ready")
                }
            }, isFunction: function (e) {
                return bH.type(e) === "function"
            }, isArray: Array.isArray || function (e) {
                return bH.type(e) === "array"
            }, isWindow: function (e) {
                return e != null && e == e.window
            }, isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, type: function (e) {
                if (e == null) {
                    return String(e)
                }
                return typeof e === "object" || typeof e === "function" ? X[y.call(e)] || "object" : typeof e
            }, isPlainObject: function (b4) {
                var b2;
                if (!b4 || bH.type(b4) !== "object" || b4.nodeType || bH.isWindow(b4)) {
                    return false
                }
                try {
                    if (b4.constructor && !S.call(b4, "constructor") && !S.call(b4.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (b3) {
                    return false
                }
                if (bH.support.ownLast) {
                    for (b2 in b4) {
                        return S.call(b4, b2)
                    }
                }
                for (b2 in b4) {
                }
                return b2 === aD || S.call(b4, b2)
            }, isEmptyObject: function (b2) {
                var e;
                for (e in b2) {
                    return false
                }
                return true
            }, error: function (e) {
                throw new Error(e)
            }, parseHTML: function (b5, b3, b4) {
                if (!b5 || typeof b5 !== "string") {
                    return null
                }
                if (typeof b3 === "boolean") {
                    b4 = b3;
                    b3 = false
                }
                b3 = b3 || l;
                var b2 = a.exec(b5), e = !b4 && [];
                if (b2) {
                    return [b3.createElement(b2[1])]
                }
                b2 = bH.buildFragment([b5], b3, e);
                if (e) {
                    bH(e).remove()
                }
                return bH.merge([], b2.childNodes)
            }, parseJSON: function (e) {
                if (a0.JSON && a0.JSON.parse) {
                    return a0.JSON.parse(e)
                }
                if (e === null) {
                    return e
                }
                if (typeof e === "string") {
                    e = bH.trim(e);
                    if (e) {
                        if (bf.test(e.replace(bE, "@").replace(aW, "]").replace(bh, ""))) {
                            return (new Function("return " + e))()
                        }
                    }
                }
                bH.error("Invalid JSON: " + e)
            }, parseXML: function (b4) {
                var b2, b3;
                if (!b4 || typeof b4 !== "string") {
                    return null
                }
                try {
                    if (a0.DOMParser) {
                        b3 = new DOMParser();
                        b2 = b3.parseFromString(b4, "text/xml")
                    } else {
                        b2 = new ActiveXObject("Microsoft.XMLDOM");
                        b2.async = "false";
                        b2.loadXML(b4)
                    }
                } catch (b5) {
                    b2 = aD
                }
                if (!b2 || !b2.documentElement || b2.getElementsByTagName("parsererror").length) {
                    bH.error("Invalid XML: " + b4)
                }
                return b2
            }, noop: function () {
            }, globalEval: function (e) {
                if (e && bH.trim(e)) {
                    (a0.execScript || function (b2) {
                        a0["eval"].call(a0, b2)
                    })(e)
                }
            }, camelCase: function (e) {
                return e.replace(bQ, "ms-").replace(aS, J)
            }, nodeName: function (b2, e) {
                return b2.nodeName && b2.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (b6, b7, b2) {
                var b5, b3 = 0, b4 = b6.length, e = Y(b6);
                if (b2) {
                    if (e) {
                        for (; b3 < b4; b3++) {
                            b5 = b7.apply(b6[b3], b2);
                            if (b5 === false) {
                                break
                            }
                        }
                    } else {
                        for (b3 in b6) {
                            b5 = b7.apply(b6[b3], b2);
                            if (b5 === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (e) {
                        for (; b3 < b4; b3++) {
                            b5 = b7.call(b6[b3], b3, b6[b3]);
                            if (b5 === false) {
                                break
                            }
                        }
                    } else {
                        for (b3 in b6) {
                            b5 = b7.call(b6[b3], b3, b6[b3]);
                            if (b5 === false) {
                                break
                            }
                        }
                    }
                }
                return b6
            }, trim: aN && !aN.call("\uFEFF\xA0") ? function (e) {
                return e == null ? "" : aN.call(e)
            } : function (e) {
                return e == null ? "" : (e + "").replace(B, "")
            }, makeArray: function (e, b3) {
                var b2 = b3 || [];
                if (e != null) {
                    if (Y(Object(e))) {
                        bH.merge(b2, typeof e === "string" ? [e] : e)
                    } else {
                        al.call(b2, e)
                    }
                }
                return b2
            }, inArray: function (b4, b2, b3) {
                var e;
                if (b2) {
                    if (aJ) {
                        return aJ.call(b2, b4, b3)
                    }
                    e = b2.length;
                    b3 = b3 ? b3 < 0 ? Math.max(0, e + b3) : b3 : 0;
                    for (; b3 < e; b3++) {
                        if (b3 in b2 && b2[b3] === b4) {
                            return b3
                        }
                    }
                }
                return -1
            }, merge: function (b5, b3) {
                var e = b3.length, b4 = b5.length, b2 = 0;
                if (typeof e === "number") {
                    for (; b2 < e; b2++) {
                        b5[b4++] = b3[b2]
                    }
                } else {
                    while (b3[b2] !== aD) {
                        b5[b4++] = b3[b2++]
                    }
                }
                b5.length = b4;
                return b5
            }, grep: function (b2, b7, e) {
                var b6, b3 = [], b4 = 0, b5 = b2.length;
                e = !!e;
                for (; b4 < b5; b4++) {
                    b6 = !!b7(b2[b4], b4);
                    if (e !== b6) {
                        b3.push(b2[b4])
                    }
                }
                return b3
            }, map: function (b3, b8, e) {
                var b7, b5 = 0, b6 = b3.length, b2 = Y(b3), b4 = [];
                if (b2) {
                    for (; b5 < b6; b5++) {
                        b7 = b8(b3[b5], b5, e);
                        if (b7 != null) {
                            b4[b4.length] = b7
                        }
                    }
                } else {
                    for (b5 in b3) {
                        b7 = b8(b3[b5], b5, e);
                        if (b7 != null) {
                            b4[b4.length] = b7
                        }
                    }
                }
                return aF.apply([], b4)
            }, guid: 1, proxy: function (b5, b4) {
                var e, b3, b2;
                if (typeof b4 === "string") {
                    b2 = b5[b4];
                    b4 = b5;
                    b5 = b2
                }
                if (!bH.isFunction(b5)) {
                    return aD
                }
                e = a2.call(arguments, 2);
                b3 = function () {
                    return b5.apply(b4 || this, e.concat(a2.call(arguments)))
                };
                b3.guid = b5.guid = b5.guid || bH.guid++;
                return b3
            }, access: function (e, b6, b8, b7, b4, ca, b9) {
                var b3 = 0, b2 = e.length, b5 = b8 == null;
                if (bH.type(b8) === "object") {
                    b4 = true;
                    for (b3 in b8) {
                        bH.access(e, b6, b3, b8[b3], true, ca, b9)
                    }
                } else {
                    if (b7 !== aD) {
                        b4 = true;
                        if (!bH.isFunction(b7)) {
                            b9 = true
                        }
                        if (b5) {
                            if (b9) {
                                b6.call(e, b7);
                                b6 = null
                            } else {
                                b5 = b6;
                                b6 = function (cc, cb, cd) {
                                    return b5.call(bH(cc), cd)
                                }
                            }
                        }
                        if (b6) {
                            for (; b3 < b2; b3++) {
                                b6(e[b3], b8, b9 ? b7 : b7.call(e[b3], b3, b6(e[b3], b8)))
                            }
                        }
                    }
                }
                return b4 ? e : b5 ? b6.call(e) : b2 ? b6(e[0], b8) : ca
            }, now: function () {
                return (new Date()).getTime()
            }, swap: function (b6, b5, b7, b4) {
                var b3, b2, e = {};
                for (b2 in b5) {
                    e[b2] = b6.style[b2];
                    b6.style[b2] = b5[b2]
                }
                b3 = b7.apply(b6, b4 || []);
                for (b2 in b5) {
                    b6.style[b2] = e[b2]
                }
                return b3
            }
        });
        bH.ready.promise = function (b5) {
            if (!af) {
                af = bH.Deferred();
                if (l.readyState === "complete") {
                    setTimeout(bH.ready)
                } else {
                    if (l.addEventListener) {
                        l.addEventListener("DOMContentLoaded", bV, false);
                        a0.addEventListener("load", bV, false)
                    } else {
                        l.attachEvent("onreadystatechange", bV);
                        a0.attachEvent("onload", bV);
                        var b4 = false;
                        try {
                            b4 = a0.frameElement == null && l.documentElement
                        } catch (b3) {
                        }
                        if (b4 && b4.doScroll) {
                            (function b2() {
                                if (!bH.isReady) {
                                    try {
                                        b4.doScroll("left")
                                    } catch (b6) {
                                        return setTimeout(b2, 50)
                                    }
                                    bi();
                                    bH.ready()
                                }
                            })()
                        }
                    }
                }
            }
            return af.promise(b5)
        };
        bH.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (b2, e) {
            X["[object " + e + "]"] = e.toLowerCase()
        });
        function Y(b3) {
            var b2 = b3.length, e = bH.type(b3);
            if (bH.isWindow(b3)) {
                return false
            }
            if (b3.nodeType === 1 && b2) {
                return true
            }
            return e === "array" || e !== "function" && (b2 === 0 || typeof b2 === "number" && b2 > 0 && (b2 - 1) in b3)
        }

        w = bH(l);
        (function (db, cg) {
            var cv, de, cb, cl, cE, cH, cS, di, cF, cV, cz, cm, c4, cZ, dc, ca, cC, c6 = "sizzle" + -(new Date()), cG = db.document, df = 0, c0 = 0, b5 = cx(), c5 = cx(), cD = cx(), cT = false, cB = function (dj, e) {
                if (dj === e) {
                    cT = true;
                    return 0
                }
                return 0
            }, da = typeof cg, cN = 1 << 31, cL = ({}).hasOwnProperty, c8 = [], c9 = c8.pop, cJ = c8.push, b3 = c8.push, ck = c8.slice, b9 = c8.indexOf || function (dk) {
                    var dj = 0, e = this.length;
                    for (; dj < e; dj++) {
                        if (this[dj] === dk) {
                            return dj
                        }
                    }
                    return -1
                }, b4 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cn = "[\\x20\\t\\r\\n\\f]", b2 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", cI = b2.replace("w", "w#"), c2 = "\\[" + cn + "*(" + b2 + ")" + cn + "*(?:([*^$|!~]?=)" + cn + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cI + ")|)|)" + cn + "*\\]", ci = ":(" + b2 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + c2.replace(3, 8) + ")*)|.*)\\)|)", cp = new RegExp("^" + cn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cn + "+$", "g"), cs = new RegExp("^" + cn + "*," + cn + "*"), cy = new RegExp("^" + cn + "*([>+~]|" + cn + ")" + cn + "*"), cX = new RegExp(cn + "*[+~]"), cr = new RegExp("=" + cn + "*([^\\]'\"]*)" + cn + "*\\]", "g"), cP = new RegExp(ci), cQ = new RegExp("^" + cI + "$"), cY = {
                ID: new RegExp("^#(" + b2 + ")"),
                CLASS: new RegExp("^\\.(" + b2 + ")"),
                ZID: /^\$((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                TAG: new RegExp("^(" + b2.replace("w", "w*") + ")"),
                ZTAG: /^((?:[@\w\u00c0-\uFFFF\*-]|\\.)+)/,
                ATTR: new RegExp("^" + c2),
                PSEUDO: new RegExp("^" + ci),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cn + "*(even|odd|(([+-]|)(\\d*)n|)" + cn + "*(?:([+-]|)" + cn + "*(\\d+)|))" + cn + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + b4 + ")$", "i"),
                needsContext: new RegExp("^" + cn + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cn + "*((?:-\\d)?\\d*)" + cn + "*\\)|)(?=[^-]|$)", "i")
            }, cM = /^[^{]+\{\s*\[native \w/, cO = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, b8 = /^(?:input|select|textarea|button)$/i, cj = /^h\d$/i, cK = /'|\\/g, cq = new RegExp("\\\\([\\da-f]{1,6}" + cn + "?|(" + cn + ")|.)", "ig"), c1 = function (e, dl, dj) {
                var dk = "0x" + dl - 65536;
                return dk !== dk || dj ? dl : dk < 0 ? String.fromCharCode(dk + 65536) : String.fromCharCode(dk >> 10 | 55296, dk & 1023 | 56320)
            };
            try {
                b3.apply((c8 = ck.call(cG.childNodes)), cG.childNodes);
                c8[cG.childNodes.length].nodeType
            } catch (cA) {
                b3 = {
                    apply: c8.length ? function (dj, e) {
                        cJ.apply(dj, ck.call(e))
                    } : function (dl, dk) {
                        var e = dl.length, dj = 0;
                        while ((dl[e++] = dk[dj++])) {
                        }
                        dl.length = e - 1
                    }
                }
            }
            function ct(dr, dj, dv, dx) {
                var dw, dn, dp, dt, du, dm, dl, e, dk, ds;
                if ((dj ? dj.ownerDocument || dj : cG) !== cz) {
                    cV(dj)
                }
                dj = dj || cz;
                dv = dv || [];
                if (!dr || typeof dr !== "string") {
                    return dv
                }
                if ((dt = dj.nodeType) !== 1 && dt !== 9) {
                    return []
                }
                if (c4 && !dx) {
                    if ((dw = cO.exec(dr))) {
                        if ((dp = dw[1])) {
                            if (dt === 9) {
                                dn = dj.getElementById(dp);
                                if (dn && dn.parentNode) {
                                    if (dn.id === dp) {
                                        dv.push(dn);
                                        return dv
                                    }
                                } else {
                                    return dv
                                }
                            } else {
                                if (dj.ownerDocument && (dn = dj.ownerDocument.getElementById(dp)) && cC(dj, dn) && dn.id === dp) {
                                    dv.push(dn);
                                    return dv
                                }
                            }
                        } else {
                            if (dw[2]) {
                                b3.apply(dv, dj.getElementsByTagName(dr));
                                return dv
                            } else {
                                if ((dp = dw[3]) && de.getElementsByClassName && dj.getElementsByClassName) {
                                    b3.apply(dv, dj.getElementsByClassName(dp));
                                    return dv
                                }
                            }
                        }
                    }
                    if (de.qsa && (!cZ || !cZ.test(dr))) {
                        e = dl = c6;
                        dk = dj;
                        ds = dt === 9 && dr;
                        if (dt === 1 && dj.nodeName.toLowerCase() !== "object") {
                            dm = ce(dr);
                            if ((dl = dj.getAttribute("id"))) {
                                e = dl.replace(cK, "\\$&")
                            } else {
                                dj.setAttribute("id", e)
                            }
                            e = "[id='" + e + "'] ";
                            du = dm.length;
                            while (du--) {
                                dm[du] = e + cf(dm[du])
                            }
                            dk = cX.test(dr) && dj.parentNode || dj;
                            ds = dm.join(",")
                        }
                        if (ds) {
                            try {
                                b3.apply(dv, dk.querySelectorAll(ds));
                                return dv
                            } catch (dq) {
                            } finally {
                                if (!dl) {
                                    dj.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return dd(dr.replace(cp, "$1"), dj, dv, dx)
            }

            function cx() {
                var dj = [];

                function e(dk, dl) {
                    if (dj.push(dk += " ") > cl.cacheLength) {
                        delete e[dj.shift()]
                    }
                    return (e[dk] = dl)
                }

                return e
            }

            function ch(e) {
                e[c6] = true;
                return e
            }

            function cc(dj) {
                var dl = cz.createElement("div");
                try {
                    return !!dj(dl)
                } catch (dk) {
                    return false
                } finally {
                    if (dl.parentNode) {
                        dl.parentNode.removeChild(dl)
                    }
                    dl = null
                }
            }

            function dg(dj, dl) {
                var e = dj.split("|"), dk = dj.length;
                while (dk--) {
                    cl.attrHandle[e[dk]] = dl
                }
            }

            function b6(dj, e) {
                var dl = e && dj, dk = dl && dj.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cN) - (~dj.sourceIndex || cN);
                if (dk) {
                    return dk
                }
                if (dl) {
                    while ((dl = dl.nextSibling)) {
                        if (dl === e) {
                            return -1
                        }
                    }
                }
                return dj ? 1 : -1
            }

            function cu(e) {
                return function (dk) {
                    var dj = dk.nodeName.toLowerCase();
                    return dj === "input" && dk.type === e
                }
            }

            function b7(e) {
                return function (dk) {
                    var dj = dk.nodeName.toLowerCase();
                    return (dj === "input" || dj === "button") && dk.type === e
                }
            }

            function c3(e) {
                return ch(function (dj) {
                    dj = +dj;
                    return ch(function (dk, dp) {
                        var dm, dl = e([], dk.length, dj), dn = dl.length;
                        while (dn--) {
                            if (dk[(dm = dl[dn])]) {
                                dk[dm] = !(dp[dm] = dk[dm])
                            }
                        }
                    })
                })
            }

            cH = ct.isXML = function (e) {
                var dj = e && (e.ownerDocument || e).documentElement;
                return dj ? dj.nodeName !== "HTML" : false
            };
            de = ct.support = {};
            cV = ct.setDocument = function (dj) {
                var dk = dj ? dj.ownerDocument || dj : cG, e = dk.defaultView;
                if (dk === cz || dk.nodeType !== 9 || !dk.documentElement) {
                    return cz
                }
                cz = dk;
                cm = dk.documentElement;
                c4 = !cH(dk);
                if (e && e.attachEvent && e !== e.top) {
                    e.attachEvent("onbeforeunload", function () {
                        cV()
                    })
                }
                de.attributes = cc(function (dl) {
                    dl.className = "i";
                    return !dl.getAttribute("className")
                });
                de.getElementsByTagName = cc(function (dl) {
                    dl.appendChild(dk.createComment(""));
                    return !dl.getElementsByTagName("*").length
                });
                de.getElementsByClassName = cc(function (dl) {
                    dl.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    dl.firstChild.className = "i";
                    return dl.getElementsByClassName("i").length === 2
                });
                de.getById = cc(function (dl) {
                    cm.appendChild(dl).id = c6;
                    return !dk.getElementsByName || !dk.getElementsByName(c6).length
                });
                if (de.getById) {
                    cl.find.ID = function (dn, dm) {
                        if (typeof dm.getElementById !== da && c4) {
                            var dl = dm.getElementById(dn);
                            return dl && dl.parentNode ? [dl] : []
                        }
                    };
                    cl.filter.ID = function (dm) {
                        var dl = dm.replace(cq, c1);
                        return function (dn) {
                            return dn.getAttribute("id") === dl
                        }
                    }
                } else {
                    delete cl.find.ID;
                    cl.filter.ID = function (dm) {
                        var dl = dm.replace(cq, c1);
                        return function (dp) {
                            var dn = typeof dp.getAttributeNode !== da && dp.getAttributeNode("id");
                            return dn && dn.value === dl
                        }
                    }
                }
                cl.find.TAG = de.getElementsByTagName ? function (dl, dm) {
                    if (typeof dm.getElementsByTagName !== da) {
                        return dm.getElementsByTagName(dl)
                    }
                } : function (dl, dq) {
                    var dr, dp = [], dn = 0, dm = dq.getElementsByTagName(dl);
                    if (dl === "*") {
                        while ((dr = dm[dn++])) {
                            if (dr.nodeType === 1) {
                                dp.push(dr)
                            }
                        }
                        return dp
                    }
                    return dm
                };
                cl.find.CLASS = de.getElementsByClassName && function (dm, dl) {
                    if (typeof dl.getElementsByClassName !== da && c4) {
                        return dl.getElementsByClassName(dm)
                    }
                };
                cl.find.ZID = function (dl, dm) {
                    return dm == db || dm == cz ? zk.Widget.getElementsById(dl) : jq.grep(zk.Widget.getElementsById(dl), function (dn) {
                        return jq.isAncestor(dm, dn)
                    })
                };
                cl.find.ZTAG = function (dl, dm) {
                    return dm == db || dm == cz ? zk.Widget.getElementsByName(dl.substring(1)) : jq.grep(zk.Widget.getElementsByName(dl.substring(1)), function (dn) {
                        return jq.isAncestor(dm, dn)
                    })
                };
                dc = [];
                cZ = [];
                if ((de.qsa = cM.test(dk.querySelectorAll))) {
                    cc(function (dl) {
                        dl.innerHTML = "<select><option selected=''></option></select>";
                        if (!dl.querySelectorAll("[selected]").length) {
                            cZ.push("\\[" + cn + "*(?:value|" + b4 + ")")
                        }
                        if (!dl.querySelectorAll(":checked").length) {
                            cZ.push(":checked")
                        }
                    });
                    cc(function (dm) {
                        var dl = dk.createElement("input");
                        dl.setAttribute("type", "hidden");
                        dm.appendChild(dl).setAttribute("t", "");
                        if (dm.querySelectorAll("[t^='']").length) {
                            cZ.push("[*^$]=" + cn + "*(?:''|\"\")")
                        }
                        if (!dm.querySelectorAll(":enabled").length) {
                            cZ.push(":enabled", ":disabled")
                        }
                        dm.querySelectorAll("*,:x");
                        cZ.push(",.*:")
                    })
                }
                if ((de.matchesSelector = cM.test((ca = cm.webkitMatchesSelector || cm.mozMatchesSelector || cm.oMatchesSelector || cm.msMatchesSelector)))) {
                    cc(function (dl) {
                        de.disconnectedMatch = ca.call(dl, "div");
                        ca.call(dl, "[s!='']:x");
                        dc.push("!=", ci)
                    })
                }
                cZ = cZ.length && new RegExp(cZ.join("|"));
                dc = dc.length && new RegExp(dc.join("|"));
                cC = cM.test(cm.contains) || cm.compareDocumentPosition ? function (dm, dl) {
                    var dp = dm.nodeType === 9 ? dm.documentElement : dm, dn = dl && dl.parentNode;
                    return dm === dn || !!(dn && dn.nodeType === 1 && (dp.contains ? dp.contains(dn) : dm.compareDocumentPosition && dm.compareDocumentPosition(dn) & 16))
                } : function (dm, dl) {
                    if (dl) {
                        while ((dl = dl.parentNode)) {
                            if (dl === dm) {
                                return true
                            }
                        }
                    }
                    return false
                };
                cB = cm.compareDocumentPosition ? function (dm, dl) {
                    if (dm === dl) {
                        cT = true;
                        return 0
                    }
                    var dn = dl.compareDocumentPosition && dm.compareDocumentPosition && dm.compareDocumentPosition(dl);
                    if (dn) {
                        if (dn & 1 || (!de.sortDetached && dl.compareDocumentPosition(dm) === dn)) {
                            if (dm === dk || cC(cG, dm)) {
                                return -1
                            }
                            if (dl === dk || cC(cG, dl)) {
                                return 1
                            }
                            return cF ? (b9.call(cF, dm) - b9.call(cF, dl)) : 0
                        }
                        return dn & 4 ? -1 : 1
                    }
                    return dm.compareDocumentPosition ? -1 : 1
                } : function (dm, dl) {
                    var dt, dq = 0, ds = dm.parentNode, dp = dl.parentNode, dn = [dm], dr = [dl];
                    if (dm === dl) {
                        cT = true;
                        return 0
                    } else {
                        if (!ds || !dp) {
                            return dm === dk ? -1 : dl === dk ? 1 : ds ? -1 : dp ? 1 : cF ? (b9.call(cF, dm) - b9.call(cF, dl)) : 0
                        } else {
                            if (ds === dp) {
                                return b6(dm, dl)
                            }
                        }
                    }
                    dt = dm;
                    while ((dt = dt.parentNode)) {
                        dn.unshift(dt)
                    }
                    dt = dl;
                    while ((dt = dt.parentNode)) {
                        dr.unshift(dt)
                    }
                    while (dn[dq] === dr[dq]) {
                        dq++
                    }
                    return dq ? b6(dn[dq], dr[dq]) : dn[dq] === cG ? -1 : dr[dq] === cG ? 1 : 0
                };
                return dk
            };
            ct.matches = function (dj, e) {
                return ct(dj, null, null, e)
            };
            ct.matchesSelector = function (dk, dm) {
                if ((dk.ownerDocument || dk) !== cz) {
                    cV(dk)
                }
                dm = dm.replace(cr, "='$1']");
                if (de.matchesSelector && c4 && (!dc || !dc.test(dm)) && (!cZ || !cZ.test(dm))) {
                    try {
                        var dj = ca.call(dk, dm);
                        if (dj || de.disconnectedMatch || dk.document && dk.document.nodeType !== 11) {
                            return dj
                        }
                    } catch (dl) {
                    }
                }
                return ct(dm, cz, null, [dk]).length > 0
            };
            ct.contains = function (e, dj) {
                if ((e.ownerDocument || e) !== cz) {
                    cV(e)
                }
                return cC(e, dj)
            };
            ct.attr = function (dk, e) {
                if ((dk.ownerDocument || dk) !== cz) {
                    cV(dk)
                }
                var dj = cl.attrHandle[e.toLowerCase()], dl = dj && cL.call(cl.attrHandle, e.toLowerCase()) ? dj(dk, e, !c4) : cg;
                return dl === cg ? de.attributes || !c4 ? dk.getAttribute(e) : (dl = dk.getAttributeNode(e)) && dl.specified ? dl.value : null : dl
            };
            ct.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            ct.uniqueSort = function (dk) {
                var dl, dm = [], e = 0, dj = 0;
                cT = !de.detectDuplicates;
                cF = !de.sortStable && dk.slice(0);
                dk.sort(cB);
                if (cT) {
                    while ((dl = dk[dj++])) {
                        if (dl === dk[dj]) {
                            e = dm.push(dj)
                        }
                    }
                    while (e--) {
                        dk.splice(dm[e], 1)
                    }
                }
                return dk
            };
            cE = ct.getText = function (dm) {
                var dl, dj = "", dk = 0, e = dm.nodeType;
                if (!e) {
                    for (; (dl = dm[dk]); dk++) {
                        dj += cE(dl)
                    }
                } else {
                    if (e === 1 || e === 9 || e === 11) {
                        if (typeof dm.textContent === "string") {
                            return dm.textContent
                        } else {
                            for (dm = dm.firstChild; dm; dm = dm.nextSibling) {
                                dj += cE(dm)
                            }
                        }
                    } else {
                        if (e === 3 || e === 4) {
                            return dm.nodeValue
                        }
                    }
                }
                return dj
            };
            cl = ct.selectors = {
                cacheLength: 50,
                createPseudo: ch,
                match: cY,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: true},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: true},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        e[1] = e[1].replace(cq, c1);
                        e[3] = (e[4] || e[5] || "").replace(cq, c1);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    }, CHILD: function (e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                ct.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +((e[7] + e[8]) || e[3] === "odd")
                        } else {
                            if (e[3]) {
                                ct.error(e[0])
                            }
                        }
                        return e
                    }, PSEUDO: function (dj) {
                        var e, dk = !dj[5] && dj[2];
                        if (cY.CHILD.test(dj[0])) {
                            return null
                        }
                        if (dj[3] && dj[4] !== cg) {
                            dj[2] = dj[4]
                        } else {
                            if (dk && cP.test(dk) && (e = ce(dk, true)) && (e = dk.indexOf(")", dk.length - e) - dk.length)) {
                                dj[0] = dj[0].slice(0, e);
                                dj[2] = dk.slice(0, e)
                            }
                        }
                        return dj.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function (dj) {
                        var e = dj.replace(cq, c1).toLowerCase();
                        return dj === "*" ? function () {
                            return true
                        } : function (dk) {
                            return dk.nodeName && dk.nodeName.toLowerCase() === e
                        }
                    }, ZTAG: function (dj) {
                        var e = dj.substring(1);
                        return function (dm, dl, dk, dn) {
                            dn = dn ? dn : zk.Widget.$(dm, {exact: true}) || false;
                            return dn && dn.className.toLowerCase().endsWith(e)
                        }
                    }, ZID: function (e) {
                        var dj = e.startsWith("$") ? e.substring(1) : e;
                        return function (dm, dl, dk, dn) {
                            dn = dn ? dn : zk.Widget.$(dm);
                            return dn ? dn.id === dj : false
                        }
                    }, CLASS: function (e) {
                        var dj = b5[e + " "];
                        return dj || (dj = new RegExp("(^|" + cn + ")" + e + "(" + cn + "|$)")) && b5(e, function (dk) {
                                return dj.test(typeof dk.className === "string" && dk.className || typeof dk.getAttribute !== da && dk.getAttribute("class") || "")
                            })
                    }, ATTR: function (dk, dj, e) {
                        return function (dm) {
                            var dl = ct.attr(dm, dk);
                            if (!dl) {
                                var dn = zk.Widget.$(dm, {exact: 1});
                                if (dn) {
                                    dl = dn.get(dk) || dl
                                }
                            }
                            if (dl == null) {
                                return dj === "!="
                            }
                            if (!dj) {
                                return true
                            }
                            dl += "";
                            return dj === "=" ? dl === e : dj === "!=" ? dl !== e : dj === "^=" ? e && dl.indexOf(e) === 0 : dj === "*=" ? e && dl.indexOf(e) > -1 : dj === "$=" ? e && dl.slice(-e.length) === e : dj === "~=" ? (" " + dl + " ").indexOf(e) > -1 : dj === "|=" ? dl === e || dl.slice(0, e.length + 1) === e + "-" : false
                        }
                    }, CHILD: function (dj, dm, dl, dn, dk) {
                        var dq = dj.slice(0, 3) !== "nth", e = dj.slice(-4) !== "last", dp = dm === "of-type";
                        return dn === 1 && dk === 0 ? function (dr) {
                            return !!dr.parentNode
                        } : function (dx, dv, dA) {
                            var dr, dD, dy, dC, dz, du, dw = dq !== e ? "nextSibling" : "previousSibling", dB = dx.parentNode, dt = dp && dx.nodeName.toLowerCase(), ds = !dA && !dp;
                            if (dB) {
                                if (dq) {
                                    while (dw) {
                                        dy = dx;
                                        while ((dy = dy[dw])) {
                                            if (dp ? dy.nodeName.toLowerCase() === dt : dy.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        du = dw = dj === "only" && !du && "nextSibling"
                                    }
                                    return true
                                }
                                du = [e ? dB.firstChild : dB.lastChild];
                                if (e && ds) {
                                    dD = dB[c6] || (dB[c6] = {});
                                    dr = dD[dj] || [];
                                    dz = dr[0] === df && dr[1];
                                    dC = dr[0] === df && dr[2];
                                    dy = dz && dB.childNodes[dz];
                                    while ((dy = ++dz && dy && dy[dw] || (dC = dz = 0) || du.pop())) {
                                        if (dy.nodeType === 1 && ++dC && dy === dx) {
                                            dD[dj] = [df, dz, dC];
                                            break
                                        }
                                    }
                                } else {
                                    if (ds && (dr = (dx[c6] || (dx[c6] = {}))[dj]) && dr[0] === df) {
                                        dC = dr[1]
                                    } else {
                                        while ((dy = ++dz && dy && dy[dw] || (dC = dz = 0) || du.pop())) {
                                            if ((dp ? dy.nodeName.toLowerCase() === dt : dy.nodeType === 1) && ++dC) {
                                                if (ds) {
                                                    (dy[c6] || (dy[c6] = {}))[dj] = [df, dC]
                                                }
                                                if (dy === dx) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                dC -= dk;
                                return dC === dn || (dC % dn === 0 && dC / dn >= 0)
                            }
                        }
                    }, PSEUDO: function (dl, dk) {
                        var e, dj = cl.pseudos[dl] || cl.setFilters[dl.toLowerCase()] || ct.error("unsupported pseudo: " + dl);
                        if (dj[c6]) {
                            return dj(dk)
                        }
                        if (dj.length > 1) {
                            e = [dl, dl, "", dk];
                            return cl.setFilters.hasOwnProperty(dl.toLowerCase()) ? ch(function (dp, dr) {
                                var dn, dm = dj(dp, dk), dq = dm.length;
                                while (dq--) {
                                    dn = b9.call(dp, dm[dq]);
                                    dp[dn] = !(dr[dn] = dm[dq])
                                }
                            }) : function (dm) {
                                return dj(dm, 0, e)
                            }
                        }
                        return dj
                    }
                },
                pseudos: {
                    not: ch(function (e) {
                        var dj = [], dk = [], dl = cS(e.replace(cp, "$1"));
                        return dl[c6] ? ch(function (dn, dt, dr, dp) {
                            var ds, dm = dl(dn, null, dp, []), dq = dn.length;
                            while (dq--) {
                                if ((ds = dm[dq])) {
                                    dn[dq] = !(dt[dq] = ds)
                                }
                            }
                        }) : function (dp, dn, dm) {
                            dj[0] = dp;
                            dl(dj, null, dm, dk);
                            return !dk.pop()
                        }
                    }), has: ch(function (e) {
                        return function (dj) {
                            return ct(e, dj).length > 0
                        }
                    }), contains: ch(function (e) {
                        return function (dj) {
                            return (dj.textContent || dj.innerText || cE(dj)).indexOf(e) > -1
                        }
                    }), lang: ch(function (e) {
                        if (!cQ.test(e || "")) {
                            ct.error("unsupported lang: " + e)
                        }
                        e = e.replace(cq, c1).toLowerCase();
                        return function (dk) {
                            var dj;
                            do {
                                if ((dj = c4 ? dk.lang : dk.getAttribute("xml:lang") || dk.getAttribute("lang"))) {
                                    dj = dj.toLowerCase();
                                    return dj === e || dj.indexOf(e + "-") === 0
                                }
                            } while ((dk = dk.parentNode) && dk.nodeType === 1);
                            return false
                        }
                    }), target: function (e) {
                        var dj = db.location && db.location.hash;
                        return dj && dj.slice(1) === e.id
                    }, root: function (e) {
                        return e === cm
                    }, focus: function (e) {
                        return e === cz.activeElement && (!cz.hasFocus || cz.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === false
                    }, disabled: function (e) {
                        return e.disabled === true
                    }, checked: function (e) {
                        var dj = e.nodeName.toLowerCase();
                        return (dj === "input" && !!e.checked) || (dj === "option" && !!e.selected)
                    }, selected: function (e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                                return false
                            }
                        }
                        return true
                    }, parent: function (e) {
                        return !cl.pseudos.empty(e)
                    }, header: function (e) {
                        return cj.test(e.nodeName)
                    }, input: function (e) {
                        return b8.test(e.nodeName)
                    }, button: function (dj) {
                        var e = dj.nodeName.toLowerCase();
                        return e === "input" && dj.type === "button" || e === "button"
                    }, text: function (dj) {
                        var e;
                        return dj.nodeName.toLowerCase() === "input" && dj.type === "text" && ((e = dj.getAttribute("type")) == null || e.toLowerCase() === dj.type)
                    }, first: c3(function () {
                        return [0]
                    }), last: c3(function (e, dj) {
                        return [dj - 1]
                    }), eq: c3(function (e, dk, dj) {
                        return [dj < 0 ? dj + dk : dj]
                    }), even: c3(function (e, dk) {
                        var dj = 0;
                        for (; dj < dk; dj += 2) {
                            e.push(dj)
                        }
                        return e
                    }), odd: c3(function (e, dk) {
                        var dj = 1;
                        for (; dj < dk; dj += 2) {
                            e.push(dj)
                        }
                        return e
                    }), lt: c3(function (e, dl, dk) {
                        var dj = dk < 0 ? dk + dl : dk;
                        for (; --dj >= 0;) {
                            e.push(dj)
                        }
                        return e
                    }), gt: c3(function (e, dl, dk) {
                        var dj = dk < 0 ? dk + dl : dk;
                        for (; ++dj < dl;) {
                            e.push(dj)
                        }
                        return e
                    })
                }
            };
            cl.pseudos.nth = cl.pseudos.eq;
            for (cv in {radio: true, checkbox: true, file: true, password: true, image: true}) {
                cl.pseudos[cv] = cu(cv)
            }
            for (cv in {submit: true, reset: true}) {
                cl.pseudos[cv] = b7(cv)
            }
            function cR() {
            }

            cR.prototype = cl.filters = cl.pseudos;
            cl.setFilters = new cR();
            function ce(dm, ds) {
                var dj, dn, dq, dr, dp, dk, e, dl = c5[dm + " "];
                if (dl) {
                    return ds ? 0 : dl.slice(0)
                }
                dp = dm;
                dk = [];
                e = cl.preFilter;
                while (dp) {
                    if (!dj || (dn = cs.exec(dp))) {
                        if (dn) {
                            dp = dp.slice(dn[0].length) || dp
                        }
                        dk.push(dq = [])
                    }
                    dj = false;
                    if ((dn = cy.exec(dp))) {
                        dj = dn.shift();
                        dq.push({value: dj, type: dn[0].replace(cp, " ")});
                        dp = dp.slice(dj.length)
                    }
                    for (dr in cl.filter) {
                        if ((dn = cY[dr].exec(dp)) && (!e[dr] || (dn = e[dr](dn)))) {
                            dj = dn.shift();
                            dq.push({value: dj, type: dr, matches: dn});
                            dp = dp.slice(dj.length)
                        }
                    }
                    if (!dj) {
                        break
                    }
                }
                return ds ? dp.length : dp ? ct.error(dm) : c5(dm, dk).slice(0)
            }

            function cf(dl) {
                var dk = 0, dj = dl.length, e = "";
                for (; dk < dj; dk++) {
                    e += dl[dk].value
                }
                return e
            }

            function co(dm, dj, e, dl) {
                var dk = dj.dir, dr = e && dk === "parentNode", dq = /@/.test(dl), dp = /\$/.test(dl), dn = c0++;
                return dj.first ? function (dv, du, dt) {
                    if (dq || dp) {
                        var dw = zk.Widget.$(dv), ds = function (dx) {
                            if (dk === "parentNode") {
                                return dx.parent
                            } else {
                                return dx[dk]
                            }
                        };
                        while ((dw = ds(dw)) && (dv = zk.isLoaded("zul.sel") && dw.$instanceof(zul.sel.Treechildren, zul.sel.Treeitem) ? dv : dw.$n())) {
                            if (dm(dv, du, dt, dw)) {
                                return true
                            }
                        }
                    } else {
                        dv = dv[dk];
                        while (dv) {
                            if (dv.nodeType === 1 || dr) {
                                return dm(dv, du, dt)
                            }
                            if (dk == "parentNode") {
                                dv = zk(dv).vparentNode(true)
                            } else {
                                dv = dv[dk]
                            }
                        }
                    }
                } : function (du, dt, dx) {
                    var dw, ds, dz, dy = df + " " + dn;
                    if (dq || dp) {
                        var dA = zk.Widget.$(du), dv = function (dB) {
                            if (dk === "parentNode") {
                                return dB.parent
                            } else {
                                return dB[dk]
                            }
                        };
                        while ((dA = dv(dA)) && (du = dA.isRealElement() ? dA.$n() : du)) {
                            if (dm(du, dt, dx, dA)) {
                                return true
                            }
                        }
                    } else {
                        if (dx) {
                            while ((du = du[dk])) {
                                if (du.nodeType === 1 || dr) {
                                    if (dm(du, dt, dx)) {
                                        return true
                                    }
                                }
                            }
                        } else {
                            du = du[dk];
                            while (du) {
                                if (du.nodeType === 1 || dr) {
                                    dz = du[c6] || (du[c6] = {});
                                    if ((ds = dz[dk]) && ds[0] === dy) {
                                        if ((dw = ds[1]) === true || dw === cb) {
                                            return dw === true
                                        }
                                    } else {
                                        ds = dz[dk] = [dy];
                                        ds[1] = dm(du, dt, dx) || cb;
                                        if (ds[1] === true) {
                                            return true
                                        }
                                    }
                                }
                                if (dk == "parentNode") {
                                    du = zk(du).vparentNode(true)
                                } else {
                                    du = du[dk]
                                }
                            }
                        }
                    }
                }
            }

            function dh(e) {
                return e.length > 1 ? function (dm, dl, dj, dn) {
                    var dk = e.length;
                    while (dk--) {
                        if (!e[dk](dm, dl, dj, dn)) {
                            return false
                        }
                    }
                    return true
                } : e[0]
            }

            function cW(e, dj, dk, dl, dp) {
                var dm, ds = [], dn = 0, dq = e.length, dr = dj != null;
                for (; dn < dq; dn++) {
                    if ((dm = e[dn])) {
                        if (!dk || dk(dm, dl, dp)) {
                            ds.push(dm);
                            if (dr) {
                                dj.push(dn)
                            }
                        }
                    }
                }
                return ds
            }

            function cd(dk, dj, dm, dl, dn, e) {
                if (dl && !dl[c6]) {
                    dl = cd(dl)
                }
                if (dn && !dn[c6]) {
                    dn = cd(dn, e)
                }
                return ch(function (dz, dw, dr, dy) {
                    var dB, dx, dt, ds = [], dA = [], dq = dw.length, dp = dz || cw(dj || "*", dr.nodeType ? [dr] : dr, []), du = dk && (dz || !dj) ? cW(dp, ds, dk, dr, dy) : dp, dv = dm ? dn || (dz ? dk : dq || dl) ? [] : dw : du;
                    if (dm) {
                        dm(du, dv, dr, dy)
                    }
                    if (dl) {
                        dB = cW(dv, dA);
                        dl(dB, [], dr, dy);
                        dx = dB.length;
                        while (dx--) {
                            if ((dt = dB[dx])) {
                                dv[dA[dx]] = !(du[dA[dx]] = dt)
                            }
                        }
                    }
                    if (dz) {
                        if (dn || dk) {
                            if (dn) {
                                dB = [];
                                dx = dv.length;
                                while (dx--) {
                                    if ((dt = dv[dx])) {
                                        dB.push((du[dx] = dt))
                                    }
                                }
                                dn(null, (dv = []), dB, dy)
                            }
                            dx = dv.length;
                            while (dx--) {
                                if ((dt = dv[dx]) && (dB = dn ? b9.call(dz, dt) : ds[dx]) > -1) {
                                    dz[dB] = !(dw[dB] = dt)
                                }
                            }
                        }
                    } else {
                        dv = cW(dv === dw ? dv.splice(dq, dv.length) : dv);
                        if (dn) {
                            dn(null, dw, dv, dy)
                        } else {
                            b3.apply(dw, dv)
                        }
                    }
                })
            }

            function c7(dq, dk) {
                var dj, dn, dl, dp = dq.length, dt = cl.relative[dq[0].type], du = dt || cl.relative[" "], dm = dt ? 1 : 0, dr = co(function (dv) {
                    return dv === dj
                }, du, true, dk), ds = co(function (dv) {
                    return b9.call(dj, dv) > -1
                }, du, true, dk), e = [function (dx, dw, dv) {
                    return (!dt && (dv || dw !== di)) || ((dj = dw).nodeType ? dr(dx, dw, dv) : ds(dx, dw, dv))
                }];
                for (; dm < dp; dm++) {
                    if ((dn = cl.relative[dq[dm].type])) {
                        e = [co(dh(e), dn, false, dk)]
                    } else {
                        dn = cl.filter[dq[dm].type].apply(null, dq[dm].matches);
                        if (dn[c6]) {
                            dl = ++dm;
                            for (; dl < dp; dl++) {
                                if (cl.relative[dq[dl].type]) {
                                    break
                                }
                            }
                            return cd(dm > 1 && dh(e), dm > 1 && cf(dq.slice(0, dm - 1).concat({value: dq[dm - 2].type === " " ? "*" : ""})).replace(cp, "$1"), dn, dm < dl && c7(dq.slice(dm, dl)), dl < dp && c7((dq = dq.slice(dl))), dl < dp && cf(dq))
                        }
                        e.push(dn)
                    }
                }
                return dh(e)
            }

            function cU(dl, dk) {
                var dn = 0, e = dk.length > 0, dm = dl.length > 0, dj = function (dy, ds, dx, dw, dE) {
                    var dt, du, dz, dD = [], dC = 0, dv = "0", dp = dy && [], dA = dE != null, dB = di, dr = dy || dm && cl.find.TAG("*", dE && ds.parentNode || ds), dq = (df += dB == null ? 1 : Math.random() || 0.1);
                    if (dA) {
                        di = ds !== cz && ds;
                        cb = dn
                    }
                    for (; (dt = dr[dv]) != null; dv++) {
                        if (dm && dt) {
                            du = 0;
                            while ((dz = dl[du++])) {
                                if (dz(dt, ds, dx)) {
                                    dw.push(dt);
                                    break
                                }
                            }
                            if (dA) {
                                df = dq;
                                cb = ++dn
                            }
                        }
                        if (e) {
                            if ((dt = !dz && dt)) {
                                dC--
                            }
                            if (dy) {
                                dp.push(dt)
                            }
                        }
                    }
                    dC += dv;
                    if (e && dv !== dC) {
                        du = 0;
                        while ((dz = dk[du++])) {
                            dz(dp, dD, ds, dx)
                        }
                        if (dy) {
                            if (dC > 0) {
                                while (dv--) {
                                    if (!(dp[dv] || dD[dv])) {
                                        dD[dv] = c9.call(dw)
                                    }
                                }
                            }
                            dD = cW(dD)
                        }
                        b3.apply(dw, dD);
                        if (dA && !dy && dD.length > 0 && (dC + dk.length) > 1) {
                            ct.uniqueSort(dw)
                        }
                    }
                    if (dA) {
                        df = dq;
                        di = dB
                    }
                    return dp
                };
                return e ? ch(dj) : dj
            }

            cS = ct.compile = function (e, dn) {
                var dk, dj = [], dm = [], dl = cD[e + " "];
                if (!dl) {
                    if (!dn) {
                        dn = ce(e)
                    }
                    dk = dn.length;
                    while (dk--) {
                        dl = c7(dn[dk], e);
                        if (dl[c6]) {
                            dj.push(dl)
                        } else {
                            dm.push(dl)
                        }
                    }
                    dl = cD(e, cU(dm, dj))
                }
                return dl
            };
            function cw(dj, dm, dl) {
                var dk = 0, e = dm.length;
                for (; dk < e; dk++) {
                    ct(dj, dm[dk], dl)
                }
                return dl
            }

            function dd(dk, e, dl, dp) {
                var dm, dr, dj, ds, dq, dn = ce(dk);
                if (!dp) {
                    if (dn.length === 1) {
                        dr = dn[0] = dn[0].slice(0);
                        if (dr.length > 2 && (dj = dr[0]).type === "ID" && de.getById && e.nodeType === 9 && c4 && cl.relative[dr[1].type]) {
                            e = (cl.find.ID(dj.matches[0].replace(cq, c1), e) || [])[0];
                            if (!e) {
                                return dl
                            }
                            dk = dk.slice(dr.shift().value.length)
                        }
                        dm = cY.needsContext.test(dk) ? 0 : dr.length;
                        while (dm--) {
                            dj = dr[dm];
                            if (cl.relative[(ds = dj.type)]) {
                                break
                            }
                            if ((dq = cl.find[ds])) {
                                if ((dp = dq(dj.matches[0].replace(cq, c1), cX.test(dr[0].type) && e.parentNode || e))) {
                                    dr.splice(dm, 1);
                                    dk = dp.length && cf(dr);
                                    if (!dk) {
                                        b3.apply(dl, dp);
                                        return dl
                                    }
                                    break
                                }
                            }
                        }
                    }
                }
                cS(dk, dn)(dp, e, !c4, dl, cX.test(dk));
                return dl
            }

            de.sortStable = c6.split("").sort(cB).join("") === c6;
            de.detectDuplicates = cT;
            cV();
            de.sortDetached = cc(function (e) {
                return e.compareDocumentPosition(cz.createElement("div")) & 1
            });
            if (!cc(function (e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                dg("type|href|height|width", function (dj, e, dk) {
                    if (!dk) {
                        return dj.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!de.attributes || !cc(function (e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                dg("value", function (dj, e, dk) {
                    if (!dk && dj.nodeName.toLowerCase() === "input") {
                        return dj.defaultValue
                    }
                })
            }
            if (!cc(function (e) {
                    return e.getAttribute("disabled") == null
                })) {
                dg(b4, function (dj, e, dl) {
                    var dk;
                    if (!dl) {
                        return (dk = dj.getAttributeNode(e)) && dk.specified ? dk.value : dj[e] === true ? e.toLowerCase() : null
                    }
                })
            }
            bH.find = ct;
            bH.expr = ct.selectors;
            bH.expr[":"] = bH.expr.pseudos;
            bH.unique = ct.uniqueSort;
            bH.text = ct.getText;
            bH.isXMLDoc = ct.isXML;
            bH.contains = ct.contains
        })(a0);
        var bX = {};

        function ab(b2) {
            var e = bX[b2] = {};
            bH.each(b2.match(Z) || [], function (b4, b3) {
                e[b3] = true
            });
            return e
        }

        bH.Callbacks = function (cb) {
            cb = typeof cb === "string" ? (bX[cb] || ab(cb)) : bH.extend({}, cb);
            var b5, b4, e, b6, b7, b3, b8 = [], b9 = !cb.once && [], b2 = function (cc) {
                b4 = cb.memory && cc;
                e = true;
                b7 = b3 || 0;
                b3 = 0;
                b6 = b8.length;
                b5 = true;
                for (; b8 && b7 < b6; b7++) {
                    if (b8[b7].apply(cc[0], cc[1]) === false && cb.stopOnFalse) {
                        b4 = false;
                        break
                    }
                }
                b5 = false;
                if (b8) {
                    if (b9) {
                        if (b9.length) {
                            b2(b9.shift())
                        }
                    } else {
                        if (b4) {
                            b8 = []
                        } else {
                            ca.disable()
                        }
                    }
                }
            }, ca = {
                add: function () {
                    if (b8) {
                        var cd = b8.length;
                        (function cc(ce) {
                            bH.each(ce, function (cg, cf) {
                                var ch = bH.type(cf);
                                if (ch === "function") {
                                    if (!cb.unique || !ca.has(cf)) {
                                        b8.push(cf)
                                    }
                                } else {
                                    if (cf && cf.length && ch !== "string") {
                                        cc(cf)
                                    }
                                }
                            })
                        })(arguments);
                        if (b5) {
                            b6 = b8.length
                        } else {
                            if (b4) {
                                b3 = cd;
                                b2(b4)
                            }
                        }
                    }
                    return this
                }, remove: function () {
                    if (b8) {
                        bH.each(arguments, function (ce, cc) {
                            var cd;
                            while ((cd = bH.inArray(cc, b8, cd)) > -1) {
                                b8.splice(cd, 1);
                                if (b5) {
                                    if (cd <= b6) {
                                        b6--
                                    }
                                    if (cd <= b7) {
                                        b7--
                                    }
                                }
                            }
                        })
                    }
                    return this
                }, has: function (cc) {
                    return cc ? bH.inArray(cc, b8) > -1 : !!(b8 && b8.length)
                }, empty: function () {
                    b8 = [];
                    b6 = 0;
                    return this
                }, disable: function () {
                    b8 = b9 = b4 = aD;
                    return this
                }, disabled: function () {
                    return !b8
                }, lock: function () {
                    b9 = aD;
                    if (!b4) {
                        ca.disable()
                    }
                    return this
                }, locked: function () {
                    return !b9
                }, fireWith: function (cd, cc) {
                    if (b8 && (!e || b9)) {
                        cc = cc || [];
                        cc = [cd, cc.slice ? cc.slice() : cc];
                        if (b5) {
                            b9.push(cc)
                        } else {
                            b2(cc)
                        }
                    }
                    return this
                }, fire: function () {
                    ca.fireWith(this, arguments);
                    return this
                }, fired: function () {
                    return !!e
                }
            };
            return ca
        };
        bH.extend({
            Deferred: function (b3) {
                var b2 = [["resolve", "done", bH.Callbacks("once memory"), "resolved"], ["reject", "fail", bH.Callbacks("once memory"), "rejected"], ["notify", "progress", bH.Callbacks("memory")]], b4 = "pending", b5 = {
                    state: function () {
                        return b4
                    }, always: function () {
                        e.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var b6 = arguments;
                        return bH.Deferred(function (b7) {
                            bH.each(b2, function (b9, b8) {
                                var cb = b8[0], ca = bH.isFunction(b6[b9]) && b6[b9];
                                e[b8[1]](function () {
                                    var cc = ca && ca.apply(this, arguments);
                                    if (cc && bH.isFunction(cc.promise)) {
                                        cc.promise().done(b7.resolve).fail(b7.reject).progress(b7.notify)
                                    } else {
                                        b7[cb + "With"](this === b5 ? b7.promise() : this, ca ? [cc] : arguments)
                                    }
                                })
                            });
                            b6 = null
                        }).promise()
                    }, promise: function (b6) {
                        return b6 != null ? bH.extend(b6, b5) : b5
                    }
                }, e = {};
                b5.pipe = b5.then;
                bH.each(b2, function (b7, b6) {
                    var b9 = b6[2], b8 = b6[3];
                    b5[b6[1]] = b9.add;
                    if (b8) {
                        b9.add(function () {
                            b4 = b8
                        }, b2[b7 ^ 1][2].disable, b2[2][2].lock)
                    }
                    e[b6[0]] = function () {
                        e[b6[0] + "With"](this === e ? b5 : this, arguments);
                        return this
                    };
                    e[b6[0] + "With"] = b9.fireWith
                });
                b5.promise(e);
                if (b3) {
                    b3.call(e, e)
                }
                return e
            }, when: function (b5) {
                var b3 = 0, b7 = a2.call(arguments), e = b7.length, b2 = e !== 1 || (b5 && bH.isFunction(b5.promise)) ? e : 0, ca = b2 === 1 ? b5 : bH.Deferred(), b4 = function (cc, cd, cb) {
                    return function (ce) {
                        cd[cc] = this;
                        cb[cc] = arguments.length > 1 ? a2.call(arguments) : ce;
                        if (cb === b9) {
                            ca.notifyWith(cd, cb)
                        } else {
                            if (!(--b2)) {
                                ca.resolveWith(cd, cb)
                            }
                        }
                    }
                }, b9, b6, b8;
                if (e > 1) {
                    b9 = new Array(e);
                    b6 = new Array(e);
                    b8 = new Array(e);
                    for (; b3 < e; b3++) {
                        if (b7[b3] && bH.isFunction(b7[b3].promise)) {
                            b7[b3].promise().done(b4(b3, b8, b7)).fail(ca.reject).progress(b4(b3, b6, b9))
                        } else {
                            --b2
                        }
                    }
                }
                if (!b2) {
                    ca.resolveWith(b8, b7)
                }
                return ca.promise()
            }
        });
        bH.support = (function (cd) {
            var cc, ca, b9, cb, b8, b4, b6, b3, b5, b2 = l.createElement("div");
            b2.setAttribute("className", "t");
            b2.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            cc = b2.getElementsByTagName("*") || [];
            ca = b2.getElementsByTagName("a")[0];
            if (!ca || !ca.style || !cc.length) {
                return cd
            }
            cb = l.createElement("select");
            b4 = cb.appendChild(l.createElement("option"));
            b9 = b2.getElementsByTagName("input")[0];
            ca.style.cssText = "top:1px;float:left;opacity:.5";
            cd.getSetAttribute = b2.className !== "t";
            cd.leadingWhitespace = b2.firstChild.nodeType === 3;
            cd.tbody = !b2.getElementsByTagName("tbody").length;
            cd.htmlSerialize = !!b2.getElementsByTagName("link").length;
            cd.style = /top/.test(ca.getAttribute("style"));
            cd.hrefNormalized = ca.getAttribute("href") === "/a";
            cd.opacity = /^0.5/.test(ca.style.opacity);
            cd.cssFloat = !!ca.style.cssFloat;
            cd.checkOn = !!b9.value;
            cd.optSelected = b4.selected;
            cd.enctype = !!l.createElement("form").enctype;
            cd.html5Clone = l.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
            cd.inlineBlockNeedsLayout = false;
            cd.shrinkWrapBlocks = false;
            cd.pixelPosition = false;
            cd.deleteExpando = true;
            cd.noCloneEvent = true;
            cd.reliableMarginRight = true;
            cd.boxSizingReliable = true;
            b9.checked = true;
            cd.noCloneChecked = b9.cloneNode(true).checked;
            cb.disabled = true;
            cd.optDisabled = !b4.disabled;
            try {
                delete b2.test
            } catch (b7) {
                cd.deleteExpando = false
            }
            b9 = l.createElement("input");
            b9.setAttribute("value", "");
            cd.input = b9.getAttribute("value") === "";
            b9.value = "t";
            b9.setAttribute("type", "radio");
            cd.radioValue = b9.value === "t";
            b9.setAttribute("checked", "t");
            b9.setAttribute("name", "t");
            b8 = l.createDocumentFragment();
            b8.appendChild(b9);
            cd.appendChecked = b9.checked;
            cd.checkClone = b8.cloneNode(true).cloneNode(true).lastChild.checked;
            if (b2.attachEvent) {
                b2.attachEvent("onclick", function () {
                    cd.noCloneEvent = false
                });
                b2.cloneNode(true).click()
            }
            for (b5 in {submit: true, change: true, focusin: true}) {
                b2.setAttribute(b6 = "on" + b5, "t");
                cd[b5 + "Bubbles"] = b6 in a0 || b2.attributes[b6].expando === false
            }
            b2.style.backgroundClip = "content-box";
            b2.cloneNode(true).style.backgroundClip = "";
            cd.clearCloneStyle = b2.style.backgroundClip === "content-box";
            for (b5 in bH(cd)) {
                break
            }
            cd.ownLast = b5 !== "0";
            bH(function () {
                var ce, ch, cg, cf = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e = l.getElementsByTagName("body")[0];
                if (!e) {
                    return
                }
                ce = l.createElement("div");
                ce.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
                e.appendChild(ce).appendChild(b2);
                b2.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                cg = b2.getElementsByTagName("td");
                cg[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                b3 = (cg[0].offsetHeight === 0);
                cg[0].style.display = "";
                cg[1].style.display = "none";
                cd.reliableHiddenOffsets = b3 && (cg[0].offsetHeight === 0);
                b2.innerHTML = "";
                b2.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                bH.swap(e, e.style.zoom != null ? {zoom: 1} : {}, function () {
                    cd.boxSizing = b2.offsetWidth === 4
                });
                if (a0.getComputedStyle) {
                    cd.pixelPosition = (a0.getComputedStyle(b2, null) || {}).top !== "1%";
                    cd.boxSizingReliable = (a0.getComputedStyle(b2, null) || {width: "4px"}).width === "4px";
                    ch = b2.appendChild(l.createElement("div"));
                    ch.style.cssText = b2.style.cssText = cf;
                    ch.style.marginRight = ch.style.width = "0";
                    b2.style.width = "1px";
                    cd.reliableMarginRight = !parseFloat((a0.getComputedStyle(ch, null) || {}).marginRight)
                }
                if (typeof b2.style.zoom !== az) {
                    b2.innerHTML = "";
                    b2.style.cssText = cf + "width:1px;padding:1px;display:inline;zoom:1";
                    cd.inlineBlockNeedsLayout = (b2.offsetWidth === 3);
                    b2.style.display = "block";
                    b2.innerHTML = "<div></div>";
                    b2.firstChild.style.width = "5px";
                    cd.shrinkWrapBlocks = (b2.offsetWidth !== 3);
                    if (cd.inlineBlockNeedsLayout) {
                        e.style.zoom = 1
                    }
                }
                e.removeChild(ce);
                ce = b2 = cg = ch = null
            });
            cc = cb = b8 = b4 = ca = b9 = null;
            return cd
        })({});
        var bu = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, aK = /([A-Z])/g;

        function a8(b4, b2, b6, b5) {
            if (!bH.acceptData(b4)) {
                return
            }
            var b8, b7, b9 = bH.expando, ca = b4.nodeType, e = ca ? bH.cache : b4, b3 = ca ? b4[b9] : b4[b9] && b9;
            if ((!b3 || !e[b3] || (!b5 && !e[b3].data)) && b6 === aD && typeof b2 === "string") {
                return
            }
            if (!b3) {
                if (ca) {
                    b3 = b4[b9] = a4.pop() || bH.guid++
                } else {
                    b3 = b9
                }
            }
            if (!e[b3]) {
                e[b3] = ca ? {} : {toJSON: bH.noop}
            }
            if (typeof b2 === "object" || typeof b2 === "function") {
                if (b5) {
                    e[b3] = bH.extend(e[b3], b2)
                } else {
                    e[b3].data = bH.extend(e[b3].data, b2)
                }
            }
            b7 = e[b3];
            if (!b5) {
                if (!b7.data) {
                    b7.data = {}
                }
                b7 = b7.data
            }
            if (b6 !== aD) {
                b7[bH.camelCase(b2)] = b6
            }
            if (typeof b2 === "string") {
                b8 = b7[b2];
                if (b8 == null) {
                    b8 = b7[bH.camelCase(b2)]
                }
            } else {
                b8 = b7
            }
            return b8
        }

        function W(b5, b3, e) {
            if (!bH.acceptData(b5)) {
                return
            }
            var b7, b4, b6 = b5.nodeType, b2 = b6 ? bH.cache : b5, b8 = b6 ? b5[bH.expando] : bH.expando;
            if (!b2[b8]) {
                return
            }
            if (b3) {
                b7 = e ? b2[b8] : b2[b8].data;
                if (b7) {
                    if (!bH.isArray(b3)) {
                        if (b3 in b7) {
                            b3 = [b3]
                        } else {
                            b3 = bH.camelCase(b3);
                            if (b3 in b7) {
                                b3 = [b3]
                            } else {
                                b3 = b3.split(" ")
                            }
                        }
                    } else {
                        b3 = b3.concat(bH.map(b3, bH.camelCase))
                    }
                    b4 = b3.length;
                    while (b4--) {
                        delete b7[b3[b4]]
                    }
                    if (e ? !K(b7) : !bH.isEmptyObject(b7)) {
                        return
                    }
                }
            }
            if (!e) {
                delete b2[b8].data;
                if (!K(b2[b8])) {
                    return
                }
            }
            if (b6) {
                bH.cleanData([b5], true)
            } else {
                if (bH.support.deleteExpando || b2 != b2.window) {
                    delete b2[b8]
                } else {
                    b2[b8] = null
                }
            }
        }

        bH.extend({
            cache: {},
            noData: {applet: true, embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (e) {
                e = e.nodeType ? bH.cache[e[bH.expando]] : e[bH.expando];
                return !!e && !K(e)
            },
            data: function (b2, e, b3) {
                return a8(b2, e, b3)
            },
            removeData: function (b2, e) {
                return W(b2, e)
            },
            _data: function (b2, e, b3) {
                return a8(b2, e, b3, true)
            },
            _removeData: function (b2, e) {
                return W(b2, e, true)
            },
            acceptData: function (b2) {
                if (b2.nodeType && b2.nodeType !== 1 && b2.nodeType !== 9) {
                    return false
                }
                var e = b2.nodeName && bH.noData[b2.nodeName.toLowerCase()];
                return !e || e !== true && b2.getAttribute("classid") === e
            }
        });
        bH.fn.extend({
            data: function (b4, b7) {
                var b2, e, b6 = null, b3 = 0, b5 = this[0];
                if (b4 === aD) {
                    if (this.length) {
                        b6 = bH.data(b5);
                        if (b5.nodeType === 1 && !bH._data(b5, "parsedAttrs")) {
                            b2 = b5.attributes;
                            for (; b3 < b2.length; b3++) {
                                e = b2[b3].name;
                                if (e.indexOf("data-") === 0) {
                                    e = bH.camelCase(e.slice(5));
                                    bw(b5, e, b6[e])
                                }
                            }
                            bH._data(b5, "parsedAttrs", true)
                        }
                    }
                    return b6
                }
                if (typeof b4 === "object") {
                    return this.each(function () {
                        bH.data(this, b4)
                    })
                }
                return arguments.length > 1 ? this.each(function () {
                    bH.data(this, b4, b7)
                }) : b5 ? bw(b5, b4, bH.data(b5, b4)) : null
            }, removeData: function (e) {
                return this.each(function () {
                    bH.removeData(this, e)
                })
            }
        });
        function bw(b4, b3, b5) {
            if (b5 === aD && b4.nodeType === 1) {
                var b2 = "data-" + b3.replace(aK, "-$1").toLowerCase();
                b5 = b4.getAttribute(b2);
                if (typeof b5 === "string") {
                    try {
                        b5 = b5 === "true" ? true : b5 === "false" ? false : b5 === "null" ? null : +b5 + "" === b5 ? +b5 : bu.test(b5) ? bH.parseJSON(b5) : b5
                    } catch (b6) {
                    }
                    bH.data(b4, b3, b5)
                } else {
                    b5 = aD
                }
            }
            return b5
        }

        function K(b2) {
            var e;
            for (e in b2) {
                if (e === "data" && bH.isEmptyObject(b2[e])) {
                    continue
                }
                if (e !== "toJSON") {
                    return false
                }
            }
            return true
        }

        bH.extend({
            queue: function (b3, b2, b4) {
                var e;
                if (b3) {
                    b2 = (b2 || "fx") + "queue";
                    e = bH._data(b3, b2);
                    if (b4) {
                        if (!e || bH.isArray(b4)) {
                            e = bH._data(b3, b2, bH.makeArray(b4))
                        } else {
                            e.push(b4)
                        }
                    }
                    return e || []
                }
            }, dequeue: function (b6, b5) {
                b5 = b5 || "fx";
                var b2 = bH.queue(b6, b5), b7 = b2.length, b4 = b2.shift(), e = bH._queueHooks(b6, b5), b3 = function () {
                    bH.dequeue(b6, b5)
                };
                if (b4 === "inprogress") {
                    b4 = b2.shift();
                    b7--
                }
                if (b4) {
                    if (b5 === "fx") {
                        b2.unshift("inprogress")
                    }
                    delete e.stop;
                    b4.call(b6, b3, e)
                }
                if (!b7 && e) {
                    e.empty.fire()
                }
            }, _queueHooks: function (b3, b2) {
                var e = b2 + "queueHooks";
                return bH._data(b3, e) || bH._data(b3, e, {
                        empty: bH.Callbacks("once memory").add(function () {
                            bH._removeData(b3, b2 + "queue");
                            bH._removeData(b3, e)
                        })
                    })
            }
        });
        bH.fn.extend({
            queue: function (e, b2) {
                var b3 = 2;
                if (typeof e !== "string") {
                    b2 = e;
                    e = "fx";
                    b3--
                }
                if (arguments.length < b3) {
                    return bH.queue(this[0], e)
                }
                return b2 === aD ? this : this.each(function () {
                    var b4 = bH.queue(this, e, b2);
                    bH._queueHooks(this, e);
                    if (e === "fx" && b4[0] !== "inprogress") {
                        bH.dequeue(this, e)
                    }
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    bH.dequeue(this, e)
                })
            }, delay: function (b2, e) {
                b2 = bH.fx ? bH.fx.speeds[b2] || b2 : b2;
                e = e || "fx";
                return this.queue(e, function (b4, b3) {
                    var b5 = setTimeout(b4, b2);
                    b3.stop = function () {
                        clearTimeout(b5)
                    }
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (b3, b7) {
                var b2, b4 = 1, b8 = bH.Deferred(), b6 = this, e = this.length, b5 = function () {
                    if (!(--b4)) {
                        b8.resolveWith(b6, [b6])
                    }
                };
                if (typeof b3 !== "string") {
                    b7 = b3;
                    b3 = aD
                }
                b3 = b3 || "fx";
                while (e--) {
                    b2 = bH._data(b6[e], b3 + "queueHooks");
                    if (b2 && b2.empty) {
                        b4++;
                        b2.empty.add(b5)
                    }
                }
                b5();
                return b8.promise(b7)
            }
        });
        function bk(b2, e) {
            if (b2.className != e) {
                b2.className = e
            }
        }

        var a6, bY, bK = /[\t\r\n\f]/g, ag = /\r/g, aC = /^(?:input|select|textarea|button|object)$/i, C = /^(?:a|area)$/i, an = /^(?:checked|selected)$/i, bN = bH.support.getSetAttribute, bD = bH.support.input;
        bH.fn.extend({
            attr: function (e, b2) {
                return bH.access(this, bH.attr, e, b2, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    bH.removeAttr(this, e)
                })
            }, prop: function (e, b2) {
                return bH.access(this, bH.prop, e, b2, arguments.length > 1)
            }, removeProp: function (e) {
                e = bH.propFix[e] || e;
                return this.each(function () {
                    try {
                        this[e] = aD;
                        delete this[e]
                    } catch (b2) {
                    }
                })
            }, addClass: function (b8) {
                var b2, e, b9, b5, b3, b4 = 0, b6 = this.length, b7 = typeof b8 === "string" && b8;
                if (bH.isFunction(b8)) {
                    return this.each(function (ca) {
                        bH(this).addClass(b8.call(this, ca, this.className))
                    })
                }
                if (b7) {
                    b2 = (b8 || "").match(Z) || [];
                    for (; b4 < b6; b4++) {
                        e = this[b4];
                        b9 = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bK, " ") : " ");
                        if (b9) {
                            b3 = 0;
                            while ((b5 = b2[b3++])) {
                                if (b9.indexOf(" " + b5 + " ") < 0) {
                                    b9 += b5 + " "
                                }
                            }
                            bk(e, bH.trim(b9))
                        }
                    }
                }
                return this
            }, removeClass: function (b8) {
                var b2, e, b9, b5, b3, b4 = 0, b6 = this.length, b7 = arguments.length === 0 || typeof b8 === "string" && b8;
                if (bH.isFunction(b8)) {
                    return this.each(function (ca) {
                        bH(this).removeClass(b8.call(this, ca, this.className))
                    })
                }
                if (b7) {
                    b2 = (b8 || "").match(Z) || [];
                    for (; b4 < b6; b4++) {
                        e = this[b4];
                        b9 = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bK, " ") : "");
                        if (b9) {
                            b3 = 0;
                            while ((b5 = b2[b3++])) {
                                while (b9.indexOf(" " + b5 + " ") >= 0) {
                                    b9 = b9.replace(" " + b5 + " ", " ")
                                }
                            }
                            bk(e, b8 ? bH.trim(b9) : "")
                        }
                    }
                }
                return this
            }, toggleClass: function (b3, e) {
                var b2 = typeof b3;
                if (typeof e === "boolean" && b2 === "string") {
                    return e ? this.addClass(b3) : this.removeClass(b3)
                }
                if (bH.isFunction(b3)) {
                    return this.each(function (b4) {
                        bH(this).toggleClass(b3.call(this, b4, this.className, e), e)
                    })
                }
                return this.each(function () {
                    if (b2 === "string") {
                        var b6, b5 = 0, b4 = bH(this), b7 = b3.match(Z) || [];
                        while ((b6 = b7[b5++])) {
                            if (b4.hasClass(b6)) {
                                b4.removeClass(b6)
                            } else {
                                b4.addClass(b6)
                            }
                        }
                    } else {
                        if (b2 === az || b2 === "boolean") {
                            if (this.className) {
                                bH._data(this, "__className__", this.className)
                            }
                            this.className = this.className || b3 === false ? "" : bH._data(this, "__className__") || ""
                        }
                    }
                })
            }, hasClass: function (e) {
                var b4 = " " + e + " ", b3 = 0, b2 = this.length;
                for (; b3 < b2; b3++) {
                    if (this[b3].nodeType === 1 && (" " + this[b3].className + " ").replace(bK, " ").indexOf(b4) >= 0) {
                        return true
                    }
                }
                return false
            }, val: function (b4) {
                var b2, e, b5, b3 = this[0];
                if (!arguments.length) {
                    if (b3) {
                        e = bH.valHooks[b3.type] || bH.valHooks[b3.nodeName.toLowerCase()];
                        if (e && "get" in e && (b2 = e.get(b3, "value")) !== aD) {
                            return b2
                        }
                        b2 = b3.value;
                        return typeof b2 === "string" ? b2.replace(ag, "") : b2 == null ? "" : b2
                    }
                    return
                }
                b5 = bH.isFunction(b4);
                return this.each(function (b6) {
                    var b7;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (b5) {
                        b7 = b4.call(this, b6, bH(this).val())
                    } else {
                        b7 = b4
                    }
                    if (b7 == null) {
                        b7 = ""
                    } else {
                        if (typeof b7 === "number") {
                            b7 += ""
                        } else {
                            if (bH.isArray(b7)) {
                                b7 = bH.map(b7, function (b8) {
                                    return b8 == null ? "" : b8 + ""
                                })
                            }
                        }
                    }
                    e = bH.valHooks[this.type] || bH.valHooks[this.nodeName.toLowerCase()];
                    if (!e || !("set" in e) || e.set(this, b7, "value") === aD) {
                        this.value = b7
                    }
                })
            }
        });
        bH.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var b2 = bH.find.attr(e, "value");
                        return b2 != null ? b2 : e.text
                    }
                }, select: {
                    get: function (e) {
                        var b7, b3, b9 = e.options, b5 = e.selectedIndex, b4 = e.type === "select-one" || b5 < 0, b8 = b4 ? null : [], b6 = b4 ? b5 + 1 : b9.length, b2 = b5 < 0 ? b6 : b4 ? b5 : 0;
                        for (; b2 < b6; b2++) {
                            b3 = b9[b2];
                            if ((b3.selected || b2 === b5) && (bH.support.optDisabled ? !b3.disabled : b3.getAttribute("disabled") === null) && (!b3.parentNode.disabled || !bH.nodeName(b3.parentNode, "optgroup"))) {
                                b7 = bH(b3).val();
                                if (b4) {
                                    return b7
                                }
                                b8.push(b7)
                            }
                        }
                        return b8
                    }, set: function (b5, b6) {
                        var b7, b4, b2 = b5.options, e = bH.makeArray(b6), b3 = b2.length;
                        while (b3--) {
                            b4 = b2[b3];
                            if ((b4.selected = bH.inArray(bH(b4).val(), e) >= 0)) {
                                b7 = true
                            }
                        }
                        if (!b7) {
                            b5.selectedIndex = -1
                        }
                        return e
                    }
                }
            }, attr: function (b5, b4, b6) {
                var e, b3, b2 = b5.nodeType;
                if (!b5 || b2 === 3 || b2 === 8 || b2 === 2) {
                    return
                }
                if (typeof b5.getAttribute === az) {
                    return bH.prop(b5, b4, b6)
                }
                if (b2 !== 1 || !bH.isXMLDoc(b5)) {
                    b4 = b4.toLowerCase();
                    e = bH.attrHooks[b4] || (bH.expr.match.bool.test(b4) ? bY : a6)
                }
                if (b6 !== aD) {
                    if (b6 === null) {
                        bH.removeAttr(b5, b4)
                    } else {
                        if (e && "set" in e && (b3 = e.set(b5, b6, b4)) !== aD) {
                            return b3
                        } else {
                            b5.setAttribute(b4, b6 + "");
                            return b6
                        }
                    }
                } else {
                    if (e && "get" in e && (b3 = e.get(b5, b4)) !== null) {
                        return b3
                    } else {
                        b3 = bH.find.attr(b5, b4);
                        return b3 == null ? aD : b3
                    }
                }
            }, removeAttr: function (b3, b5) {
                var e, b4, b2 = 0, b6 = b5 && b5.match(Z);
                if (b6 && b3.nodeType === 1) {
                    while ((e = b6[b2++])) {
                        b4 = bH.propFix[e] || e;
                        if (bH.expr.match.bool.test(e)) {
                            if (bD && bN || !an.test(e)) {
                                b3[b4] = false
                            } else {
                                b3[bH.camelCase("default-" + e)] = b3[b4] = false
                            }
                        } else {
                            bH.attr(b3, e, "")
                        }
                        b3.removeAttribute(bN ? e : b4)
                    }
                }
            }, attrHooks: {
                type: {
                    set: function (e, b2) {
                        if (!bH.support.radioValue && b2 === "radio" && bH.nodeName(e, "input")) {
                            var b3 = e.value;
                            e.setAttribute("type", b2);
                            if (b3) {
                                e.value = b3
                            }
                            return b2
                        }
                    }
                }
            }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (b6, b4, b7) {
                var b3, e, b5, b2 = b6.nodeType;
                if (!b6 || b2 === 3 || b2 === 8 || b2 === 2) {
                    return
                }
                b5 = b2 !== 1 || !bH.isXMLDoc(b6);
                if (b5) {
                    b4 = bH.propFix[b4] || b4;
                    e = bH.propHooks[b4]
                }
                if (b7 !== aD) {
                    return e && "set" in e && (b3 = e.set(b6, b7, b4)) !== aD ? b3 : (b6[b4] = b7)
                } else {
                    return e && "get" in e && (b3 = e.get(b6, b4)) !== null ? b3 : b6[b4]
                }
            }, propHooks: {
                tabIndex: {
                    get: function (b2) {
                        var e = bH.find.attr(b2, "tabindex");
                        return e ? parseInt(e, 10) : aC.test(b2.nodeName) || C.test(b2.nodeName) && b2.href ? 0 : -1
                    }
                }
            }
        });
        bY = {
            set: function (b2, b3, e) {
                if (b3 === false) {
                    bH.removeAttr(b2, e)
                } else {
                    if (bD && bN || !an.test(e)) {
                        b2.setAttribute(!bN && bH.propFix[e] || e, e)
                    } else {
                        b2[bH.camelCase("default-" + e)] = b2[e] = true
                    }
                }
                return e
            }
        };
        bH.each(bH.expr.match.bool.source.match(/\w+/g), function (b3, b2) {
            var e = bH.expr.attrHandle[b2] || bH.find.attr;
            bH.expr.attrHandle[b2] = bD && bN || !an.test(b2) ? function (b7, b5, b8) {
                var b6 = bH.expr.attrHandle[b5], b4 = b8 ? aD : (bH.expr.attrHandle[b5] = aD) != e(b7, b5, b8) ? b5.toLowerCase() : null;
                bH.expr.attrHandle[b5] = b6;
                return b4
            } : function (b5, b4, b6) {
                return b6 ? aD : b5[bH.camelCase("default-" + b4)] ? b4.toLowerCase() : null
            }
        });
        if (!bD || !bN) {
            bH.attrHooks.value = {
                set: function (b2, b3, e) {
                    if (bH.nodeName(b2, "input")) {
                        b2.defaultValue = b3
                    } else {
                        return a6 && a6.set(b2, b3, e)
                    }
                }
            }
        }
        if (!bN) {
            a6 = {
                set: function (b3, b4, b2) {
                    var e = b3.getAttributeNode(b2);
                    if (!e) {
                        b3.setAttributeNode((e = b3.ownerDocument.createAttribute(b2)))
                    }
                    e.value = b4 += "";
                    return b2 === "value" || b4 === b3.getAttribute(b2) ? b4 : aD
                }
            };
            bH.expr.attrHandle.id = bH.expr.attrHandle.name = bH.expr.attrHandle.coords = function (b3, b2, b4) {
                var e;
                return b4 ? aD : (e = b3.getAttributeNode(b2)) && e.value !== "" ? e.value : null
            };
            bH.valHooks.button = {
                get: function (b3, b2) {
                    var e = b3.getAttributeNode(b2);
                    return e && e.specified ? e.value : aD
                }, set: a6.set
            };
            bH.attrHooks.contenteditable = {
                set: function (b2, b3, e) {
                    a6.set(b2, b3 === "" ? false : b3, e)
                }
            };
            bH.each(["width", "height"], function (b2, e) {
                bH.attrHooks[e] = {
                    set: function (b3, b4) {
                        if (b4 === "") {
                            b3.setAttribute(e, "auto");
                            return b4
                        }
                    }
                }
            })
        }
        if (!bH.support.hrefNormalized) {
            bH.each(["href", "src"], function (b2, e) {
                bH.propHooks[e] = {
                    get: function (b3) {
                        return b3.getAttribute(e, 4)
                    }
                }
            })
        }
        if (!bH.support.style) {
            bH.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || aD
                }, set: function (e, b2) {
                    return (e.style.cssText = b2 + "")
                }
            }
        }
        if (!bH.support.optSelected) {
            bH.propHooks.selected = {
                get: function (b2) {
                    var e = b2.parentNode;
                    if (e) {
                        e.selectedIndex;
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                    }
                    return null
                }
            }
        }
        bH.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            bH.propFix[this.toLowerCase()] = this
        });
        if (!bH.support.enctype) {
            bH.propFix.enctype = "encoding"
        }
        bH.each(["radio", "checkbox"], function () {
            bH.valHooks[this] = {
                set: function (e, b2) {
                    if (bH.isArray(b2)) {
                        return (e.checked = bH.inArray(bH(e).val(), b2) >= 0)
                    }
                }
            };
            if (!bH.support.checkOn) {
                bH.valHooks[this].get = function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var bF = /^(?:input|select|textarea)$/i, a1 = /^key/, bL = /^(?:mouse|contextmenu)|click/, bz = /^(?:focusinfocus|focusoutblur)$/, bs = /^([^.]*)(?:\.(.+)|)$/;

        function O() {
            return true
        }

        function U() {
            return false
        }

        function ah() {
            try {
                return l.activeElement
            } catch (e) {
            }
        }

        bH.event = {
            global: {},
            add: function (b5, ca, cf, b7, b6) {
                var b8, cg, ch, b3, cc, b9, ce, b4, cd, e, b2, cb = bH._data(b5);
                if (!cb) {
                    return
                }
                if (cf.handler) {
                    b3 = cf;
                    cf = b3.handler;
                    b6 = b3.selector
                }
                if (!cf.guid) {
                    cf.guid = bH.guid++
                }
                if (!(cg = cb.events)) {
                    cg = cb.events = {}
                }
                if (!(b9 = cb.handle)) {
                    b9 = cb.handle = function (ci) {
                        return typeof bH !== az && (!ci || bH.event.triggered !== ci.type) ? bH.event.dispatch.apply(b9.elem, arguments) : aD
                    };
                    b9.elem = b5
                }
                ca = (ca || "").match(Z) || [""];
                ch = ca.length;
                while (ch--) {
                    b8 = bs.exec(ca[ch]) || [];
                    cd = b2 = b8[1];
                    e = (b8[2] || "").split(".").sort();
                    if (!cd) {
                        continue
                    }
                    cc = bH.event.special[cd] || {};
                    cd = (b6 ? cc.delegateType : cc.bindType) || cd;
                    cc = bH.event.special[cd] || {};
                    ce = bH.extend({
                        type: cd,
                        origType: b2,
                        data: b7,
                        handler: cf,
                        guid: cf.guid,
                        selector: b6,
                        needsContext: b6 && bH.expr.match.needsContext.test(b6),
                        namespace: e.join(".")
                    }, b3);
                    if (!(b4 = cg[cd])) {
                        b4 = cg[cd] = [];
                        b4.delegateCount = 0;
                        if (!cc.setup || cc.setup.call(b5, b7, e, b9) === false) {
                            if (b5.addEventListener) {
                                b5.addEventListener(cd, b9, false)
                            } else {
                                if (b5.attachEvent) {
                                    b5.attachEvent("on" + cd, b9)
                                }
                            }
                        }
                    }
                    if (cc.add) {
                        cc.add.call(b5, ce);
                        if (!ce.handler.guid) {
                            ce.handler.guid = cf.guid
                        }
                    }
                    if (b6) {
                        b4.splice(b4.delegateCount++, 0, ce)
                    } else {
                        b4.push(ce)
                    }
                    bH.event.global[cd] = true
                }
                b5 = null
            },
            remove: function (b4, ca, ch, b5, b9) {
                var b7, ce, b8, b6, cg, cf, cc, b3, cd, e, b2, cb = bH.hasData(b4) && bH._data(b4);
                if (!cb || !(cf = cb.events)) {
                    return
                }
                ca = (ca || "").match(Z) || [""];
                cg = ca.length;
                while (cg--) {
                    b8 = bs.exec(ca[cg]) || [];
                    cd = b2 = b8[1];
                    e = (b8[2] || "").split(".").sort();
                    if (!cd) {
                        for (cd in cf) {
                            bH.event.remove(b4, cd + ca[cg], ch, b5, true)
                        }
                        continue
                    }
                    cc = bH.event.special[cd] || {};
                    cd = (b5 ? cc.delegateType : cc.bindType) || cd;
                    b3 = cf[cd] || [];
                    b8 = b8[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    b6 = b7 = b3.length;
                    while (b7--) {
                        ce = b3[b7];
                        if ((b9 || b2 === ce.origType) && (!ch || ch.guid === ce.guid) && (!b8 || b8.test(ce.namespace)) && (!b5 || b5 === ce.selector || b5 === "**" && ce.selector)) {
                            b3.splice(b7, 1);
                            if (ce.selector) {
                                b3.delegateCount--
                            }
                            if (cc.remove) {
                                cc.remove.call(b4, ce)
                            }
                        }
                    }
                    if (b6 && !b3.length) {
                        if (!cc.teardown || cc.teardown.call(b4, e, cb.handle) === false) {
                            bH.removeEvent(b4, cd, cb.handle)
                        }
                        delete cf[cd]
                    }
                }
                if (bH.isEmptyObject(cf)) {
                    delete cb.handle;
                    bH._removeData(b4, "events")
                }
            },
            trigger: function (b2, b9, b5, cg) {
                var ca, b4, ce, cf, cc, b8, b7, b6 = [b5 || l], cd = S.call(b2, "type") ? b2.type : b2, b3 = S.call(b2, "namespace") ? b2.namespace.split(".") : [];
                ce = b8 = b5 = b5 || l;
                if (b5.nodeType === 3 || b5.nodeType === 8) {
                    return
                }
                if (bz.test(cd + bH.event.triggered)) {
                    return
                }
                if (cd.indexOf(".") >= 0) {
                    b3 = cd.split(".");
                    cd = b3.shift();
                    b3.sort()
                }
                b4 = cd.indexOf(":") < 0 && "on" + cd;
                b2 = b2[bH.expando] ? b2 : new bH.Event(cd, typeof b2 === "object" && b2);
                b2.isTrigger = cg ? 2 : 3;
                b2.namespace = b3.join(".");
                b2.namespace_re = b2.namespace ? new RegExp("(^|\\.)" + b3.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                b2.result = aD;
                if (!b2.target) {
                    b2.target = b5
                }
                b9 = b9 == null ? [b2] : bH.makeArray(b9, [b2]);
                cc = bH.event.special[cd] || {};
                if (!cg && cc.trigger && cc.trigger.apply(b5, b9) === false) {
                    return
                }
                if (!cg && !cc.noBubble && !bH.isWindow(b5)) {
                    cf = cc.delegateType || cd;
                    if (!bz.test(cf + cd)) {
                        ce = ce.parentNode
                    }
                    for (; ce; ce = ce.parentNode) {
                        b6.push(ce);
                        b8 = ce
                    }
                    if (b8 === (b5.ownerDocument || l)) {
                        b6.push(b8.defaultView || b8.parentWindow || a0)
                    }
                }
                b7 = 0;
                while ((ce = b6[b7++]) && !b2.isPropagationStopped()) {
                    b2.type = b7 > 1 ? cf : cc.bindType || cd;
                    ca = (bH._data(ce, "events") || {})[b2.type] && bH._data(ce, "handle");
                    if (ca) {
                        ca.apply(ce, b9)
                    }
                    ca = b4 && ce[b4];
                    if (ca && bH.acceptData(ce) && ca.apply && ca.apply(ce, b9) === false) {
                        b2.preventDefault()
                    }
                }
                b2.type = cd;
                if (!cg && !b2.isDefaultPrevented()) {
                    if ((!cc._default || cc._default.apply(b6.pop(), b9) === false) && bH.acceptData(b5)) {
                        if (b4 && b5[cd] && !bH.isWindow(b5)) {
                            b8 = b5[b4];
                            if (b8) {
                                b5[b4] = null
                            }
                            bH.event.triggered = cd;
                            try {
                                b5[cd]()
                            } catch (cb) {
                            }
                            bH.event.triggered = aD;
                            if (b8) {
                                b5[b4] = b8
                            }
                        }
                    }
                }
                return b2.result
            },
            dispatch: function (e) {
                e = bH.event.fix(e);
                var b5, b6, ca, b2, b4, b9 = [], b8 = a2.call(arguments), b3 = (bH._data(this, "events") || {})[e.type] || [], b7 = bH.event.special[e.type] || {};
                b8[0] = e;
                e.delegateTarget = this;
                if (b7.preDispatch && b7.preDispatch.call(this, e) === false) {
                    return
                }
                b9 = bH.event.handlers.call(this, e, b3);
                b5 = 0;
                while ((b2 = b9[b5++]) && !e.isPropagationStopped()) {
                    e.currentTarget = b2.elem;
                    b4 = 0;
                    while ((ca = b2.handlers[b4++]) && !e.isImmediatePropagationStopped()) {
                        if (!e.namespace_re || e.namespace_re.test(ca.namespace)) {
                            e.handleObj = ca;
                            e.data = ca.data;
                            b6 = ((bH.event.special[ca.origType] || {}).handle || ca.handler).apply(b2.elem, b8);
                            if (b6 !== aD) {
                                if ((e.result = b6) === false) {
                                    e.preventDefault();
                                    e.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (b7.postDispatch) {
                    b7.postDispatch.call(this, e)
                }
                return e.result
            },
            handlers: function (e, b3) {
                var b2, b8, b6, b5, b7 = [], b4 = b3.delegateCount, b9 = e.target;
                if (b4 && b9.nodeType && (!e.button || e.type !== "click")) {
                    for (; b9 != this; b9 = b9.parentNode || this) {
                        if (b9.nodeType === 1 && (b9.disabled !== true || e.type !== "click")) {
                            b6 = [];
                            for (b5 = 0; b5 < b4; b5++) {
                                b8 = b3[b5];
                                b2 = b8.selector + " ";
                                if (b6[b2] === aD) {
                                    b6[b2] = b8.needsContext ? bH(b2, this).index(b9) >= 0 : bH.find(b2, this, null, [b9]).length
                                }
                                if (b6[b2]) {
                                    b6.push(b8)
                                }
                            }
                            if (b6.length) {
                                b7.push({elem: b9, handlers: b6})
                            }
                        }
                    }
                }
                if (b4 < b3.length) {
                    b7.push({elem: this, handlers: b3.slice(b4)})
                }
                return b7
            },
            fix: function (b4) {
                if (b4[bH.expando]) {
                    return b4
                }
                var b2, b7, b6, b3 = b4.type, e = b4, b5 = this.fixHooks[b3];
                if (!b5) {
                    this.fixHooks[b3] = b5 = bL.test(b3) ? this.mouseHooks : a1.test(b3) ? this.keyHooks : {}
                }
                b6 = b5.props ? this.props.concat(b5.props) : this.props;
                b4 = new bH.Event(e);
                b2 = b6.length;
                while (b2--) {
                    b7 = b6[b2];
                    b4[b7] = e[b7]
                }
                if (!b4.target) {
                    b4.target = e.srcElement || l
                }
                if (b4.target.nodeType === 3) {
                    b4.target = b4.target.parentNode
                }
                b4.metaKey = !!b4.metaKey;
                return b5.filter ? b5.filter(b4, e) : b4
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (b2, e) {
                    if (b2.which == null) {
                        b2.which = e.charCode != null ? e.charCode : e.keyCode
                    }
                    return b2
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (b4, b3) {
                    var e, b5, b6, b2 = b3.button, b7 = b3.fromElement;
                    if (b4.pageX == null && b3.clientX != null) {
                        b5 = b4.target.ownerDocument || l;
                        b6 = b5.documentElement;
                        e = b5.body;
                        b4.pageX = b3.clientX + (b6 && b6.scrollLeft || e && e.scrollLeft || 0) - (b6 && b6.clientLeft || e && e.clientLeft || 0);
                        b4.pageY = b3.clientY + (b6 && b6.scrollTop || e && e.scrollTop || 0) - (b6 && b6.clientTop || e && e.clientTop || 0)
                    }
                    if (!b4.relatedTarget && b7) {
                        b4.relatedTarget = b7 === b4.target ? b3.toElement : b7
                    }
                    if (!b4.which && b2 !== aD) {
                        b4.which = (b2 & 1 ? 1 : (b2 & 2 ? 3 : (b2 & 4 ? 2 : 0)))
                    }
                    return b4
                }
            },
            special: {
                load: {noBubble: true}, focus: {
                    trigger: function () {
                        if (this !== ah() && this.focus) {
                            try {
                                this.focus();
                                return false
                            } catch (b2) {
                            }
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === ah() && this.blur) {
                            this.blur();
                            return false
                        }
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (bH.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                            this.click();
                            return false
                        }
                    }, _default: function (e) {
                        return bH.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        if (e.result !== aD) {
                            e.originalEvent.returnValue = e.result
                        }
                    }
                }
            },
            simulate: function (b3, b5, b4, b2) {
                var b6 = bH.extend(new bH.Event(), b4, {type: b3, isSimulated: true, originalEvent: {}});
                if (b2) {
                    bH.event.trigger(b6, null, b5)
                } else {
                    bH.event.dispatch.call(b5, b6)
                }
                if (b6.isDefaultPrevented()) {
                    b4.preventDefault()
                }
            }
        };
        bH.removeEvent = l.removeEventListener ? function (b2, e, b3) {
            if (b2.removeEventListener) {
                b2.removeEventListener(e, b3, false)
            }
        } : function (b3, b2, b4) {
            var e = "on" + b2;
            if (b3.detachEvent) {
                if (typeof b3[e] === az) {
                    b3[e] = null
                }
                b3.detachEvent(e, b4)
            }
        };
        bH.Event = function (b2, e) {
            if (!(this instanceof bH.Event)) {
                return new bH.Event(b2, e)
            }
            if (b2 && b2.type) {
                this.originalEvent = b2;
                this.type = b2.type;
                this.isDefaultPrevented = (b2.defaultPrevented || b2.returnValue === false || b2.getPreventDefault && b2.getPreventDefault()) ? O : U
            } else {
                this.type = b2
            }
            if (e) {
                bH.extend(this, e)
            }
            this.timeStamp = b2 && b2.timeStamp || bH.now();
            this[bH.expando] = true
        };
        bH.Event.prototype = {
            isDefaultPrevented: U,
            isPropagationStopped: U,
            isImmediatePropagationStopped: U,
            preventDefault: function () {
                var b2 = this.originalEvent;
                this.isDefaultPrevented = O;
                if (!b2) {
                    return
                }
                if (b2.preventDefault) {
                    b2.preventDefault()
                } else {
                    b2.returnValue = false
                }
            },
            stopPropagation: function () {
                var b2 = this.originalEvent;
                this.isPropagationStopped = O;
                if (!b2) {
                    return
                }
                if (b2.stopPropagation) {
                    b2.stopPropagation()
                }
                b2.cancelBubble = true
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = O;
                this.stopPropagation()
            }
        };
        bH.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (b2, e) {
            bH.event.special[b2] = {
                delegateType: e, bindType: e, handle: function (b5) {
                    var b3, b7 = this, b6 = b5.relatedTarget, b4 = b5.handleObj;
                    if (!b6 || (b6 !== b7 && !bH.contains(b7, b6))) {
                        b5.type = b4.origType;
                        b3 = b4.handler.apply(this, arguments);
                        b5.type = e
                    }
                    return b3
                }
            }
        });
        if (!bH.support.submitBubbles) {
            bH.event.special.submit = {
                setup: function () {
                    if (bH.nodeName(this, "form")) {
                        return false
                    }
                    bH.event.add(this, "click._submit keypress._submit", function (b4) {
                        var b3 = b4.target, b2 = bH.nodeName(b3, "input") || bH.nodeName(b3, "button") ? b3.form : aD;
                        if (b2 && !bH._data(b2, "submitBubbles")) {
                            bH.event.add(b2, "submit._submit", function (e) {
                                e._submit_bubble = true
                            });
                            bH._data(b2, "submitBubbles", true)
                        }
                    })
                }, postDispatch: function (e) {
                    if (e._submit_bubble) {
                        delete e._submit_bubble;
                        if (this.parentNode && !e.isTrigger) {
                            bH.event.simulate("submit", this.parentNode, e, true)
                        }
                    }
                }, teardown: function () {
                    if (bH.nodeName(this, "form")) {
                        return false
                    }
                    bH.event.remove(this, "._submit")
                }
            }
        }
        if (!bH.support.changeBubbles) {
            bH.event.special.change = {
                setup: function () {
                    if (bF.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") {
                            bH.event.add(this, "propertychange._change", function (e) {
                                if (e.originalEvent.propertyName === "checked") {
                                    this._just_changed = true
                                }
                            });
                            bH.event.add(this, "click._change", function (e) {
                                if (this._just_changed && !e.isTrigger) {
                                    this._just_changed = false
                                }
                                bH.event.simulate("change", this, e, true)
                            })
                        }
                        return false
                    }
                    bH.event.add(this, "beforeactivate._change", function (b3) {
                        var b2 = b3.target;
                        if (bF.test(b2.nodeName) && !bH._data(b2, "changeBubbles")) {
                            bH.event.add(b2, "change._change", function (e) {
                                if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                    bH.event.simulate("change", this.parentNode, e, true)
                                }
                            });
                            bH._data(b2, "changeBubbles", true)
                        }
                    })
                }, handle: function (b2) {
                    var e = b2.target;
                    if (this !== e || b2.isSimulated || b2.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                        return b2.handleObj.handler.apply(this, arguments)
                    }
                }, teardown: function () {
                    bH.event.remove(this, "._change");
                    return !bF.test(this.nodeName)
                }
            }
        }
        if (!bH.support.focusinBubbles) {
            bH.each({focus: "focusin", blur: "focusout"}, function (b4, e) {
                var b2 = 0, b3 = function (b5) {
                    bH.event.simulate(e, b5.target, bH.event.fix(b5), true)
                };
                bH.event.special[e] = {
                    setup: function () {
                        if (b2++ === 0) {
                            l.addEventListener(b4, b3, true)
                        }
                    }, teardown: function () {
                        if (--b2 === 0) {
                            l.removeEventListener(b4, b3, true)
                        }
                    }
                }
            })
        }
        bH.fn.extend({
            on: function (b3, e, b6, b5, b2) {
                var b4, b7;
                if (typeof b3 === "object") {
                    if (typeof e !== "string") {
                        b6 = b6 || e;
                        e = aD
                    }
                    for (b4 in b3) {
                        this.on(b4, e, b6, b3[b4], b2)
                    }
                    return this
                }
                if (b6 == null && b5 == null) {
                    b5 = e;
                    b6 = e = aD
                } else {
                    if (b5 == null) {
                        if (typeof e === "string") {
                            b5 = b6;
                            b6 = aD
                        } else {
                            b5 = b6;
                            b6 = e;
                            e = aD
                        }
                    }
                }
                if (b5 === false) {
                    b5 = U
                } else {
                    if (!b5) {
                        return this
                    }
                }
                if (b2 === 1) {
                    b7 = b5;
                    b5 = function (b8) {
                        bH().off(b8);
                        return b7.apply(this, arguments)
                    };
                    b5.guid = b7.guid || (b7.guid = bH.guid++)
                }
                return this.each(function () {
                    bH.event.add(this, b3, b5, b6, e)
                })
            }, one: function (b2, e, b4, b3) {
                return this.on(b2, e, b4, b3, 1)
            }, off: function (b3, e, b5) {
                var b2, b4;
                if (b3 && b3.preventDefault && b3.handleObj) {
                    b2 = b3.handleObj;
                    bH(b3.delegateTarget).off(b2.namespace ? b2.origType + "." + b2.namespace : b2.origType, b2.selector, b2.handler);
                    return this
                }
                if (typeof b3 === "object") {
                    for (b4 in b3) {
                        this.off(b4, e, b3[b4])
                    }
                    return this
                }
                if (e === false || typeof e === "function") {
                    b5 = e;
                    e = aD
                }
                if (b5 === false) {
                    b5 = U
                }
                return this.each(function () {
                    bH.event.remove(this, b3, b5, e)
                })
            }, trigger: function (e, b2) {
                return this.each(function () {
                    bH.event.trigger(e, b2, this)
                })
            }, triggerHandler: function (e, b3) {
                var b2 = this[0];
                if (b2) {
                    return bH.event.trigger(e, b3, b2, true)
                }
            }
        });
        var ak = /^.[^:#\[\.,]*$/, br = /^(?:parents|prev(?:Until|All))/, x = bH.expr.match.needsContext, bv = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
        bH.fn.extend({
            find: function (b2) {
                var b5, b4 = [], b3 = this, e = b3.length;
                if (typeof b2 !== "string") {
                    return this.pushStack(bH(b2).filter(function () {
                        for (b5 = 0; b5 < e; b5++) {
                            if (bH.contains(b3[b5], this)) {
                                return true
                            }
                        }
                    }))
                }
                for (b5 = 0; b5 < e; b5++) {
                    bH.find(b2, b3[b5], b4)
                }
                b4 = this.pushStack(e > 1 ? bH.unique(b4) : b4);
                b4.selector = this.selector ? this.selector + " " + b2 : b2;
                return b4
            }, has: function (b4) {
                var b3, b2 = bH(b4, this), e = b2.length;
                return this.filter(function () {
                    for (b3 = 0; b3 < e; b3++) {
                        if (bH.contains(this, b2[b3])) {
                            return true
                        }
                    }
                })
            }, not: function (e) {
                return this.pushStack(aL(this, e || [], true))
            }, filter: function (e) {
                return this.pushStack(aL(this, e || [], false))
            }, is: function (e) {
                return !!aL(this, typeof e === "string" && x.test(e) ? bH(e) : e || [], false).length
            }, closest: function (b5, b4) {
                var b6, b3 = 0, e = this.length, b2 = [], b7 = x.test(b5) || typeof b5 !== "string" ? bH(b5, b4 || this.context) : 0;
                for (; b3 < e; b3++) {
                    for (b6 = this[b3]; b6 && b6 !== b4; b6 = b6.parentNode) {
                        if (b6.nodeType < 11 && (b7 ? b7.index(b6) > -1 : b6.nodeType === 1 && bH.find.matchesSelector(b6, b5))) {
                            b6 = b2.push(b6);
                            break
                        }
                    }
                }
                return this.pushStack(b2.length > 1 ? bH.unique(b2) : b2)
            }, index: function (e) {
                if (!e) {
                    return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return bH.inArray(this[0], bH(e))
                }
                return bH.inArray(e.jquery ? e[0] : e, this)
            }, add: function (e, b2) {
                var b4 = typeof e === "string" ? bH(e, b2) : bH.makeArray(e && e.nodeType ? [e] : e), b3 = bH.merge(this.get(), b4);
                return this.pushStack(bH.unique(b3))
            }, addBack: function (e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });
        function aU(b2, e) {
            do {
                b2 = b2[e]
            } while (b2 && b2.nodeType !== 1);
            return b2
        }

        bH.each({
            parent: function (b2) {
                var e = b2.parentNode;
                return e && e.nodeType !== 11 ? e : null
            }, parents: function (e) {
                return bH.dir(e, "parentNode")
            }, parentsUntil: function (b2, e, b3) {
                return bH.dir(b2, "parentNode", b3)
            }, next: function (e) {
                return aU(e, "nextSibling")
            }, prev: function (e) {
                return aU(e, "previousSibling")
            }, nextAll: function (e) {
                return bH.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return bH.dir(e, "previousSibling")
            }, nextUntil: function (b2, e, b3) {
                return bH.dir(b2, "nextSibling", b3)
            }, prevUntil: function (b2, e, b3) {
                return bH.dir(b2, "previousSibling", b3)
            }, siblings: function (e) {
                return bH.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return bH.sibling(e.firstChild)
            }, contents: function (e) {
                return bH.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bH.merge([], e.childNodes)
            }
        }, function (e, b2) {
            bH.fn[e] = function (b5, b3) {
                var b4 = bH.map(this, b2, b5);
                if (e.slice(-5) !== "Until") {
                    b3 = b5
                }
                if (b3 && typeof b3 === "string") {
                    b4 = bH.filter(b3, b4)
                }
                if (this.length > 1) {
                    if (!bv[e]) {
                        b4 = bH.unique(b4)
                    }
                    if (br.test(e)) {
                        b4 = b4.reverse()
                    }
                }
                return this.pushStack(b4)
            }
        });
        bH.extend({
            filter: function (b4, e, b3) {
                var b2 = e[0];
                if (b3) {
                    b4 = ":not(" + b4 + ")"
                }
                return e.length === 1 && b2.nodeType === 1 ? bH.find.matchesSelector(b2, b4) ? [b2] : [] : bH.find.matches(b4, bH.grep(e, function (b5) {
                    return b5.nodeType === 1
                }))
            }, dir: function (b3, b2, b5) {
                var e = [], b4 = b3[b2];
                while (b4 && b4.nodeType !== 9 && (b5 === aD || b4.nodeType !== 1 || !bH(b4).is(b5))) {
                    if (b4.nodeType === 1) {
                        e.push(b4)
                    }
                    b4 = b4[b2]
                }
                return e
            }, sibling: function (b3, b2) {
                var e = [];
                for (; b3; b3 = b3.nextSibling) {
                    if (b3.nodeType === 1 && b3 !== b2) {
                        e.push(b3)
                    }
                }
                return e
            }
        });
        function aL(b3, e, b2) {
            if (bH.isFunction(e)) {
                return bH.grep(b3, function (b5, b4) {
                    return !!e.call(b5, b4, b5) !== b2
                })
            }
            if (e.nodeType) {
                return bH.grep(b3, function (b4) {
                    return (b4 === e) !== b2
                })
            }
            if (typeof e === "string") {
                if (ak.test(e)) {
                    return bH.filter(e, b3, b2)
                }
                e = bH.filter(e, b3)
            }
            return bH.grep(b3, function (b4) {
                return (bH.inArray(b4, e) >= 0) !== b2
            })
        }

        function z(e) {
            var b3 = d.split("|"), b2 = e.createDocumentFragment();
            if (b2.createElement) {
                while (b3.length) {
                    b2.createElement(b3.pop())
                }
            }
            return b2
        }

        var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ax = / jQuery\d+="(?:null|\d+)"/g, H = new RegExp("<(?:" + d + ")[\\s/>]", "i"), b1 = /^\s+/, aA = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, m = /<([\w:]+)/, bW = /<tbody/i, G = /<|&#?\w+;/, ai = /<(?:script|style|link)/i, q = /^(?:checkbox|radio)$/i, bS = /checked\s*(?:[^=]|=\s*.checked.)/i, bx = /^$|\/(?:java|ecma)script/i, ao = /^true\/(.*)/, aH = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Q = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: bH.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, aP = z(l), j = aP.appendChild(l.createElement("div"));
        Q.optgroup = Q.option;
        Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead;
        Q.th = Q.td;
        bH.fn.extend({
            text: function (e) {
                return bH.access(this, function (b2) {
                    return b2 === aD ? bH.text(this) : this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(b2))
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var b2 = aY(this, e);
                        b2.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var b2 = aY(this, e);
                        b2.insertBefore(e, b2.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }
                })
            }, remove: function (e, b5) {
                var b4, b2 = e ? bH.filter(e, this) : this, b3 = 0;
                for (; (b4 = b2[b3]) != null; b3++) {
                    if (!b5 && b4.nodeType === 1) {
                        bH.cleanData(k(b4))
                    }
                    if (b4.parentNode) {
                        if (b5 && bH.contains(b4.ownerDocument, b4)) {
                            bq(k(b4, "script"))
                        }
                        b4.parentNode.removeChild(b4)
                    }
                }
                return this
            }, empty: function () {
                var b2, e = 0;
                for (; (b2 = this[e]) != null; e++) {
                    if (b2.nodeType === 1) {
                        bH.cleanData(k(b2, false))
                    }
                    while (b2.firstChild) {
                        b2.removeChild(b2.firstChild)
                    }
                    if (b2.options && bH.nodeName(b2, "select")) {
                        b2.options.length = 0
                    }
                }
                return this
            }, clone: function (b2, e) {
                b2 = b2 == null ? false : b2;
                e = e == null ? b2 : e;
                return this.map(function () {
                    return bH.clone(this, b2, e)
                })
            }, html: function (e) {
                return bH.access(this, function (b5) {
                    var b4 = this[0] || {}, b3 = 0, b2 = this.length;
                    if (b5 === aD) {
                        return b4.nodeType === 1 ? b4.innerHTML.replace(ax, "") : aD
                    }
                    if (typeof b5 === "string" && !ai.test(b5) && (bH.support.htmlSerialize || !H.test(b5)) && (bH.support.leadingWhitespace || !b1.test(b5)) && !Q[(m.exec(b5) || ["", ""])[1].toLowerCase()]) {
                        b5 = b5.replace(aA, "<$1></$2>");
                        try {
                            for (; b3 < b2; b3++) {
                                b4 = this[b3] || {};
                                if (b4.nodeType === 1) {
                                    bH.cleanData(k(b4, false));
                                    b4.innerHTML = b5
                                }
                            }
                            b4 = 0
                        } catch (b6) {
                        }
                    }
                    if (b4) {
                        this.empty().append(b5)
                    }
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = bH.map(this, function (b3) {
                    return [b3.nextSibling, b3.parentNode]
                }), b2 = 0;
                this.domManip(arguments, function (b5) {
                    var b4 = e[b2++], b3 = e[b2++];
                    if (b3) {
                        if (b4 && b4.parentNode !== b3) {
                            b4 = this.nextSibling
                        }
                        bH(this).remove();
                        b3.insertBefore(b5, b4)
                    }
                }, true);
                return b2 ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, true)
            }, domManip: function (ca, cf, b3) {
                ca = aF.apply([], ca);
                var b8, b4, e, b6, cd, b9, b7 = 0, b5 = this.length, cc = this, ce = b5 - 1, cb = ca[0], b2 = bH.isFunction(cb);
                if (b2 || !(b5 <= 1 || typeof cb !== "string" || bH.support.checkClone || !bS.test(cb))) {
                    return this.each(function (ch) {
                        var cg = cc.eq(ch);
                        if (b2) {
                            ca[0] = cb.call(this, ch, cg.html())
                        }
                        cg.domManip(ca, cf, b3)
                    })
                }
                if (b5) {
                    b9 = bH.buildFragment(ca, this[0].ownerDocument, false, !b3 && this);
                    b8 = b9.firstChild;
                    if (b9.childNodes.length === 1) {
                        b9 = b8
                    }
                    if (b8) {
                        b6 = bH.map(k(b9, "script"), t);
                        e = b6.length;
                        for (; b7 < b5; b7++) {
                            b4 = b9;
                            if (b7 !== ce) {
                                b4 = bH.clone(b4, true, true);
                                if (e) {
                                    bH.merge(b6, k(b4, "script"))
                                }
                            }
                            cf.call(this[b7], b4, b7)
                        }
                        if (e) {
                            cd = b6[b6.length - 1].ownerDocument;
                            bH.map(b6, bb);
                            for (b7 = 0; b7 < e; b7++) {
                                b4 = b6[b7];
                                if (bx.test(b4.type || "") && !bH._data(b4, "globalEval") && bH.contains(cd, b4)) {
                                    if (b4.src) {
                                        bH._evalUrl(b4.src)
                                    } else {
                                        bH.globalEval((b4.text || b4.textContent || b4.innerHTML || "").replace(aH, ""))
                                    }
                                }
                            }
                        }
                        b9 = b8 = null
                    }
                }
                return this
            }
        });
        function aY(b2, e) {
            return bH.nodeName(b2, "table") && bH.nodeName(e.nodeType === 1 ? e : e.firstChild, "tr") ? b2.getElementsByTagName("tbody")[0] || b2.appendChild(b2.ownerDocument.createElement("tbody")) : b2
        }

        function t(e) {
            e.type = (bH.find.attr(e, "type") !== null) + "/" + e.type;
            return e
        }

        function bb(b2) {
            var e = ao.exec(b2.type);
            if (e) {
                b2.type = e[1]
            } else {
                b2.removeAttribute("type")
            }
            return b2
        }

        function bq(e, b3) {
            var b4, b2 = 0;
            for (; (b4 = e[b2]) != null; b2++) {
                bH._data(b4, "globalEval", !b3 || bH._data(b3[b2], "globalEval"))
            }
        }

        function ap(b8, b2) {
            if (b2.nodeType !== 1 || !bH.hasData(b8)) {
                return
            }
            var b5, b4, e, b7 = bH._data(b8), b6 = bH._data(b2, b7), b3 = b7.events;
            if (b3) {
                delete b6.handle;
                b6.events = {};
                for (b5 in b3) {
                    for (b4 = 0, e = b3[b5].length; b4 < e; b4++) {
                        bH.event.add(b2, b5, b3[b5][b4])
                    }
                }
            }
            if (b6.data) {
                b6.data = bH.extend({}, b6.data)
            }
        }

        function N(b5, b2) {
            var b6, b4, b3;
            if (b2.nodeType !== 1) {
                return
            }
            b6 = b2.nodeName.toLowerCase();
            if (!bH.support.noCloneEvent && b2[bH.expando]) {
                b3 = bH._data(b2);
                for (b4 in b3.events) {
                    bH.removeEvent(b2, b4, b3.handle)
                }
                b2.removeAttribute(bH.expando)
            }
            if (b6 === "script" && b2.text !== b5.text) {
                t(b2).text = b5.text;
                bb(b2)
            } else {
                if (b6 === "object") {
                    if (b2.parentNode) {
                        b2.outerHTML = b5.outerHTML
                    }
                    if (bH.support.html5Clone && (b5.innerHTML && !bH.trim(b2.innerHTML))) {
                        b2.innerHTML = b5.innerHTML
                    }
                } else {
                    if (b6 === "input" && q.test(b5.type)) {
                        b2.defaultChecked = b2.checked = b5.checked;
                        if (b2.value !== b5.value) {
                            b2.value = b5.value
                        }
                    } else {
                        if (b6 === "option") {
                            b2.defaultSelected = b2.selected = b5.defaultSelected
                        } else {
                            if (b6 === "input" || b6 === "textarea") {
                                b2.defaultValue = b5.defaultValue
                            }
                        }
                    }
                }
            }
        }

        bH.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, b2) {
            bH.fn[e] = function (b3) {
                var b4, b6 = 0, b5 = [], b8 = bH(b3), b7 = b8.length - 1;
                for (; b6 <= b7; b6++) {
                    b4 = b6 === b7 ? this : this.clone(true);
                    bH(b8[b6])[b2](b4);
                    al.apply(b5, b4.get())
                }
                return this.pushStack(b5)
            }
        });
        function k(b4, e) {
            var b2, b5, b3 = 0, b6 = typeof b4.getElementsByTagName !== az ? b4.getElementsByTagName(e || "*") : typeof b4.querySelectorAll !== az ? b4.querySelectorAll(e || "*") : aD;
            if (!b6) {
                for (b6 = [], b2 = b4.childNodes || b4; (b5 = b2[b3]) != null; b3++) {
                    if (!e || bH.nodeName(b5, e)) {
                        b6.push(b5)
                    } else {
                        bH.merge(b6, k(b5, e))
                    }
                }
            }
            return e === aD || e && bH.nodeName(b4, e) ? bH.merge([b4], b6) : b6
        }

        function bT(e) {
            if (q.test(e.type)) {
                e.defaultChecked = e.checked
            }
        }

        bH.extend({
            clone: function (b2, b4, e) {
                var b6, b3, b9, b5, b7, b8 = bH.contains(b2.ownerDocument, b2);
                if (bH.support.html5Clone || bH.isXMLDoc(b2) || !H.test("<" + b2.nodeName + ">")) {
                    b9 = b2.cloneNode(true)
                } else {
                    j.innerHTML = b2.outerHTML;
                    j.removeChild(b9 = j.firstChild)
                }
                if ((!bH.support.noCloneEvent || !bH.support.noCloneChecked) && (b2.nodeType === 1 || b2.nodeType === 11) && !bH.isXMLDoc(b2)) {
                    b6 = k(b9);
                    b7 = k(b2);
                    for (b5 = 0; (b3 = b7[b5]) != null; ++b5) {
                        if (b6[b5]) {
                            N(b3, b6[b5])
                        }
                    }
                }
                if (b4) {
                    if (e) {
                        b7 = b7 || k(b2);
                        b6 = b6 || k(b9);
                        for (b5 = 0; (b3 = b7[b5]) != null; b5++) {
                            ap(b3, b6[b5])
                        }
                    } else {
                        ap(b2, b9)
                    }
                }
                b6 = k(b9, "script");
                if (b6.length > 0) {
                    bq(b6, !b8 && k(b2, "script"))
                }
                b6 = b7 = b3 = null;
                return b9
            }, buildFragment: function (b2, b4, b9, ce) {
                var ca, b6, b8, cd, cf, cc, b3, b7 = b2.length, b5 = z(b4), e = [], cb = 0;
                for (; cb < b7; cb++) {
                    b6 = b2[cb];
                    if (b6 || b6 === 0) {
                        if (bH.type(b6) === "object") {
                            bH.merge(e, b6.nodeType ? [b6] : b6)
                        } else {
                            if (!G.test(b6)) {
                                e.push(b4.createTextNode(b6))
                            } else {
                                cd = cd || b5.appendChild(b4.createElement("div"));
                                cf = (m.exec(b6) || ["", ""])[1].toLowerCase();
                                b3 = Q[cf] || Q._default;
                                cd.innerHTML = b3[1] + b6.replace(aA, "<$1></$2>") + b3[2];
                                ca = b3[0];
                                while (ca--) {
                                    cd = cd.lastChild
                                }
                                if (!bH.support.leadingWhitespace && b1.test(b6)) {
                                    e.push(b4.createTextNode(b1.exec(b6)[0]))
                                }
                                if (!bH.support.tbody) {
                                    b6 = cf === "table" && !bW.test(b6) ? cd.firstChild : b3[1] === "<table>" && !bW.test(b6) ? cd : 0;
                                    ca = b6 && b6.childNodes.length;
                                    while (ca--) {
                                        if (bH.nodeName((cc = b6.childNodes[ca]), "tbody") && !cc.childNodes.length) {
                                            b6.removeChild(cc)
                                        }
                                    }
                                }
                                bH.merge(e, cd.childNodes);
                                cd.textContent = "";
                                while (cd.firstChild) {
                                    cd.removeChild(cd.firstChild)
                                }
                                cd = b5.lastChild
                            }
                        }
                    }
                }
                if (cd) {
                    b5.removeChild(cd)
                }
                if (!bH.support.appendChecked) {
                    bH.grep(k(e, "input"), bT)
                }
                cb = 0;
                while ((b6 = e[cb++])) {
                    if (ce && bH.inArray(b6, ce) !== -1) {
                        continue
                    }
                    b8 = bH.contains(b6.ownerDocument, b6);
                    cd = k(b5.appendChild(b6), "script");
                    if (b8) {
                        bq(cd)
                    }
                    if (b9) {
                        ca = 0;
                        while ((b6 = cd[ca++])) {
                            if (bx.test(b6.type || "")) {
                                b9.push(b6)
                            }
                        }
                    }
                }
                cd = null;
                return b5
            }, cleanData: function (b2, ca) {
                var b4, b9, b3, b5, b6 = 0, cb = bH.expando, e = bH.cache, b7 = bH.support.deleteExpando, b8 = bH.event.special;
                for (; (b4 = b2[b6]) != null; b6++) {
                    if (ca || bH.acceptData(b4)) {
                        b3 = b4[cb];
                        b5 = b3 && e[b3];
                        if (b5) {
                            if (b5.events) {
                                for (b9 in b5.events) {
                                    if (b8[b9]) {
                                        bH.event.remove(b4, b9)
                                    } else {
                                        bH.removeEvent(b4, b9, b5.handle)
                                    }
                                }
                            }
                            if (e[b3]) {
                                delete e[b3];
                                if (b7) {
                                    delete b4[cb]
                                } else {
                                    if (typeof b4.removeAttribute !== az) {
                                        b4.removeAttribute(cb)
                                    } else {
                                        b4[cb] = null
                                    }
                                }
                                a4.push(b3)
                            }
                        }
                    }
                }
            }, _evalUrl: function (e) {
                return bH.ajax({url: e, type: "GET", dataType: "script", async: false, global: false, "throws": true})
            }
        });
        bH.fn.extend({
            wrapAll: function (e) {
                if (bH.isFunction(e)) {
                    return this.each(function (b3) {
                        bH(this).wrapAll(e.call(this, b3))
                    })
                }
                if (this[0]) {
                    var b2 = bH(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        b2.insertBefore(this[0])
                    }
                    b2.map(function () {
                        var b3 = this;
                        while (b3.firstChild && b3.firstChild.nodeType === 1) {
                            b3 = b3.firstChild
                        }
                        return b3
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                if (bH.isFunction(e)) {
                    return this.each(function (b2) {
                        bH(this).wrapInner(e.call(this, b2))
                    })
                }
                return this.each(function () {
                    var b2 = bH(this), b3 = b2.contents();
                    if (b3.length) {
                        b3.wrapAll(e)
                    } else {
                        b2.append(e)
                    }
                })
            }, wrap: function (e) {
                var b2 = bH.isFunction(e);
                return this.each(function (b3) {
                    bH(this).wrapAll(b2 ? e.call(this, b3) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    if (!bH.nodeName(this, "body")) {
                        bH(this).replaceWith(this.childNodes)
                    }
                }).end()
            }
        });
        var aB, bm, D, be = /alpha\([^)]*\)/i, aQ = /opacity\s*=\s*([^)]*)/, bl = /^(top|right|bottom|left)$/, E = /^(none|table(?!-c[ea]).+)/, aV = /^margin/, a7 = new RegExp("^(" + by + ")(.*)$", "i"), T = new RegExp("^(" + by + ")(?!px)[a-z%]+$", "i"), P = new RegExp("^([+-])=(" + by + ")", "i"), bg = {BODY: "block"}, ba = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, bA = {
            letterSpacing: 0,
            fontWeight: 400
        }, bR = ["Top", "Right", "Bottom", "Left"], ar = ["Webkit", "O", "Moz", "ms"];

        function b(b4, b2) {
            if (b2 in b4) {
                return b2
            }
            var b5 = b2.charAt(0).toUpperCase() + b2.slice(1), e = b2, b3 = ar.length;
            while (b3--) {
                b2 = ar[b3] + b5;
                if (b2 in b4) {
                    return b2
                }
            }
            return e
        }

        function M(b2, e) {
            b2 = e || b2;
            return bH.css(b2, "display") === "none" || !bH.contains(b2.ownerDocument, b2)
        }

        function p(b7, e) {
            var b8, b5, b6, b2 = [], b3 = 0, b4 = b7.length;
            for (; b3 < b4; b3++) {
                b5 = b7[b3];
                if (!b5.style) {
                    continue
                }
                b2[b3] = bH._data(b5, "olddisplay");
                b8 = b5.style.display;
                if (e) {
                    if (!b2[b3] && b8 === "none") {
                        b5.style.display = ""
                    }
                    if (b5.style.display === "" && M(b5)) {
                        b2[b3] = bH._data(b5, "olddisplay", bC(b5.nodeName))
                    }
                } else {
                    if (!b2[b3]) {
                        b6 = M(b5);
                        if (b8 && b8 !== "none" || !b6) {
                            bH._data(b5, "olddisplay", b6 ? b8 : bH.css(b5, "display"))
                        }
                    }
                }
            }
            for (b3 = 0; b3 < b4; b3++) {
                b5 = b7[b3];
                if (!b5.style) {
                    continue
                }
                if (!e || b5.style.display === "none" || b5.style.display === "") {
                    b5.style.display = e ? b2[b3] || "" : "none"
                }
            }
            return b7
        }

        bH.fn.extend({
            css: function (e, b2) {
                return bH.access(this, function (b7, b4, b8) {
                    var b3, b6, b9 = {}, b5 = 0;
                    if (bH.isArray(b4)) {
                        b6 = bm(b7);
                        b3 = b4.length;
                        for (; b5 < b3; b5++) {
                            b9[b4[b5]] = bH.css(b7, b4[b5], false, b6)
                        }
                        return b9
                    }
                    return b8 !== aD ? bH.style(b7, b4, b8) : bH.css(b7, b4)
                }, e, b2, arguments.length > 1)
            }, show: function () {
                return p(this, true)
            }, hide: function () {
                return p(this)
            }, toggle: function (e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide()
                }
                return this.each(function () {
                    if (M(this)) {
                        bH(this).show()
                    } else {
                        bH(this).hide()
                    }
                })
            }
        });
        bH.extend({
            cssHooks: {
                opacity: {
                    get: function (b3, b2) {
                        if (b2) {
                            var e = D(b3, "opacity");
                            return e === "" ? "1" : e
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: true,
                fillOpacity: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {"float": bH.support.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (b4, b3, ca, b5) {
                if (!b4 || b4.nodeType === 3 || b4.nodeType === 8 || !b4.style) {
                    return
                }
                var b8, b9, cb, b6 = bH.camelCase(b3), b2 = b4.style;
                b3 = bH.cssProps[b6] || (bH.cssProps[b6] = b(b2, b6));
                cb = bH.cssHooks[b3] || bH.cssHooks[b6];
                if (ca !== aD) {
                    b9 = typeof ca;
                    if (b9 === "string" && (b8 = P.exec(ca))) {
                        ca = (b8[1] + 1) * b8[2] + parseFloat(bH.css(b4, b3));
                        b9 = "number"
                    }
                    if (ca == null || b9 === "number" && isNaN(ca)) {
                        return
                    }
                    if (b9 === "number" && !bH.cssNumber[b6]) {
                        ca += "px"
                    }
                    if (!bH.support.clearCloneStyle && ca === "" && b3.indexOf("background") === 0) {
                        b2[b3] = "inherit"
                    }
                    if (!cb || !("set" in cb) || (ca = cb.set(b4, ca, b5)) !== aD) {
                        try {
                            b2[b3] = ca
                        } catch (b7) {
                        }
                    }
                } else {
                    if (cb && "get" in cb && (b8 = cb.get(b4, false, b5)) !== aD) {
                        return b8
                    }
                    return b2[b3]
                }
            },
            css: function (b7, b5, b2, b6) {
                var b4, b8, e, b3 = bH.camelCase(b5);
                b5 = bH.cssProps[b3] || (bH.cssProps[b3] = b(b7.style, b3));
                e = bH.cssHooks[b5] || bH.cssHooks[b3];
                if (e && "get" in e) {
                    b8 = e.get(b7, true, b2)
                }
                if (b8 === aD) {
                    b8 = D(b7, b5, b6)
                }
                if (b8 === "normal" && b5 in bA) {
                    b8 = bA[b5]
                }
                if (b2 === "" || b2) {
                    b4 = parseFloat(b8);
                    return b2 === true || bH.isNumeric(b4) ? b4 || 0 : b8
                }
                return b8
            }
        });
        if (a0.getComputedStyle) {
            bm = function (e) {
                return a0.getComputedStyle(e, null)
            };
            D = function (b5, b3, b7) {
                var b4, b2, b9, b6 = b7 || bm(b5), b8 = b6 ? b6.getPropertyValue(b3) || b6[b3] : aD, e = b5.style;
                if (b6) {
                    if (b8 === "" && !bH.contains(b5.ownerDocument, b5)) {
                        b8 = bH.style(b5, b3)
                    }
                    if (T.test(b8) && aV.test(b3)) {
                        b4 = e.width;
                        b2 = e.minWidth;
                        b9 = e.maxWidth;
                        e.minWidth = e.maxWidth = e.width = b8;
                        b8 = b6.width;
                        e.width = b4;
                        e.minWidth = b2;
                        e.maxWidth = b9
                    }
                }
                return b8
            }
        } else {
            if (l.documentElement.currentStyle) {
                bm = function (e) {
                    return e.currentStyle
                };
                D = function (b4, b2, b7) {
                    var b3, b6, b8, b5 = b7 || bm(b4), b9 = b5 ? b5[b2] : aD, e = b4.style;
                    if (b9 == null && e && e[b2]) {
                        b9 = e[b2]
                    }
                    if (T.test(b9) && !bl.test(b2)) {
                        b3 = e.left;
                        b6 = b4.runtimeStyle;
                        b8 = b6 && b6.left;
                        if (b8) {
                            b6.left = b4.currentStyle.left
                        }
                        e.left = b2 === "fontSize" ? "1em" : b9;
                        b9 = e.pixelLeft + "px";
                        e.left = b3;
                        if (b8) {
                            b6.left = b8
                        }
                    }
                    return b9 === "" ? "auto" : b9
                }
            }
        }
        function aG(e, b3, b4) {
            var b2 = a7.exec(b3);
            return b2 ? Math.max(0, b2[1] - (b4 || 0)) + (b2[2] || "px") : b3
        }

        function at(b5, b2, e, b7, b4) {
            var b3 = e === (b7 ? "border" : "content") ? 4 : b2 === "width" ? 1 : 0, b6 = 0;
            for (; b3 < 4; b3 += 2) {
                if (e === "margin") {
                    b6 += bH.css(b5, e + bR[b3], true, b4)
                }
                if (b7) {
                    if (e === "content") {
                        b6 -= bH.css(b5, "padding" + bR[b3], true, b4)
                    }
                    if (e !== "margin") {
                        b6 -= bH.css(b5, "border" + bR[b3] + "Width", true, b4)
                    }
                } else {
                    b6 += bH.css(b5, "padding" + bR[b3], true, b4);
                    if (e !== "padding") {
                        b6 += bH.css(b5, "border" + bR[b3] + "Width", true, b4)
                    }
                }
            }
            return b6
        }

        function u(b5, b2, e) {
            var b4 = true, b6 = b2 === "width" ? b5.offsetWidth : b5.offsetHeight, b3 = bm(b5), b7 = bH.support.boxSizing && bH.css(b5, "boxSizing", false, b3) === "border-box";
            if (b6 <= 0 || b6 == null) {
                b6 = D(b5, b2, b3);
                if (b6 < 0 || b6 == null) {
                    b6 = b5.style[b2]
                }
                if (T.test(b6)) {
                    return b6
                }
                b4 = b7 && (bH.support.boxSizingReliable || b6 === b5.style[b2]);
                b6 = parseFloat(b6) || 0
            }
            return (b6 + at(b5, b2, e || (b7 ? "border" : "content"), b4, b3)) + "px"
        }

        function bC(b3) {
            var b2 = l, e = bg[b3];
            if (!e) {
                e = aZ(b3, b2);
                if (e === "none" || !e) {
                    aB = (aB || bH("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b2.documentElement);
                    b2 = (aB[0].contentWindow || aB[0].contentDocument).document;
                    b2.write("<!doctype html><html><body>");
                    b2.close();
                    e = aZ(b3, b2);
                    aB.detach()
                }
                bg[b3] = e
            }
            return e
        }

        function aZ(e, b4) {
            var b2 = bH(b4.createElement(e)).appendTo(b4.body), b3 = bH.css(b2[0], "display");
            b2.remove();
            return b3
        }

        bH.each(["height", "width"], function (b2, e) {
            bH.cssHooks[e] = {
                get: function (b5, b4, b3) {
                    if (b4) {
                        return b5.offsetWidth === 0 && E.test(bH.css(b5, "display")) ? bH.swap(b5, ba, function () {
                            return u(b5, e, b3)
                        }) : u(b5, e, b3)
                    }
                }, set: function (b5, b6, b3) {
                    var b4 = b3 && bm(b5);
                    return aG(b5, b6, b3 ? at(b5, e, b3, bH.support.boxSizing && bH.css(b5, "boxSizing", false, b4) === "border-box", b4) : 0)
                }
            }
        });
        if (!bH.support.opacity) {
            bH.cssHooks.opacity = {
                get: function (b2, e) {
                    return aQ.test((e && b2.currentStyle ? b2.currentStyle.filter : b2.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
                }, set: function (b5, b6) {
                    var b4 = b5.style, b2 = b5.currentStyle, e = bH.isNumeric(b6) ? "alpha(opacity=" + b6 * 100 + ")" : "", b3 = b2 && b2.filter || b4.filter || "";
                    b4.zoom = 1;
                    if ((b6 >= 1 || b6 === "") && bH.trim(b3.replace(be, "")) === "" && b4.removeAttribute) {
                        b4.removeAttribute("filter");
                        if (b6 === "" || b2 && !b2.filter) {
                            return
                        }
                    }
                    b4.filter = be.test(b3) ? b3.replace(be, e) : b3 + " " + e
                }
            }
        }
        bH(function () {
            if (!bH.support.reliableMarginRight) {
                bH.cssHooks.marginRight = {
                    get: function (b2, e) {
                        if (e) {
                            return bH.swap(b2, {display: "inline-block"}, D, [b2, "marginRight"])
                        }
                    }
                }
            }
            if (!bH.support.pixelPosition && bH.fn.position) {
                bH.each(["top", "left"], function (e, b2) {
                    bH.cssHooks[b2] = {
                        get: function (b4, b3) {
                            if (b3) {
                                b3 = D(b4, b2);
                                return T.test(b3) ? bH(b4).position()[b2] + "px" : b3
                            }
                        }
                    }
                })
            }
        });
        if (bH.expr && bH.expr.filters) {
            bH.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bH.support.reliableHiddenOffsets && ((e.style && e.style.display) || bH.css(e, "display")) === "none")
            };
            bH.expr.filters.visible = function (e) {
                return !bH.expr.filters.hidden(e)
            }
        }
        bH.each({margin: "", padding: "", border: "Width"}, function (e, b2) {
            bH.cssHooks[e + b2] = {
                expand: function (b5) {
                    var b4 = 0, b3 = {}, b6 = typeof b5 === "string" ? b5.split(" ") : [b5];
                    for (; b4 < 4; b4++) {
                        b3[e + bR[b4] + b2] = b6[b4] || b6[b4 - 2] || b6[0]
                    }
                    return b3
                }
            };
            if (!aV.test(e)) {
                bH.cssHooks[e + b2].set = aG
            }
        });
        var bt = /%20/g, aO = /\[\]$/, R = /\r?\n/g, c = /^(?:submit|button|image|reset|file)$/i, aq = /^(?:input|select|textarea|keygen)/i;
        bH.fn.extend({
            serialize: function () {
                return bH.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = bH.prop(this, "elements");
                    return e ? bH.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !bH(this).is(":disabled") && aq.test(this.nodeName) && !c.test(e) && (this.checked || !q.test(e))
                }).map(function (e, b2) {
                    var b3 = bH(this).val();
                    return b3 == null ? null : bH.isArray(b3) ? bH.map(b3, function (b4) {
                        return {name: b2.name, value: b4.replace(R, "\r\n")}
                    }) : {name: b2.name, value: b3.replace(R, "\r\n")}
                }).get()
            }
        });
        bH.param = function (e, b3) {
            var b4, b2 = [], b5 = function (b6, b7) {
                b7 = bH.isFunction(b7) ? b7() : (b7 == null ? "" : b7);
                b2[b2.length] = encodeURIComponent(b6) + "=" + encodeURIComponent(b7)
            };
            if (b3 === aD) {
                b3 = bH.ajaxSettings && bH.ajaxSettings.traditional
            }
            if (bH.isArray(e) || (e.jquery && !bH.isPlainObject(e))) {
                bH.each(e, function () {
                    b5(this.name, this.value)
                })
            } else {
                for (b4 in e) {
                    i(b4, e[b4], b3, b5)
                }
            }
            return b2.join("&").replace(bt, "+")
        };
        function i(b3, b5, b2, b4) {
            var e;
            if (bH.isArray(b5)) {
                bH.each(b5, function (b7, b6) {
                    if (b2 || aO.test(b3)) {
                        b4(b3, b6)
                    } else {
                        i(b3 + "[" + (typeof b6 === "object" ? b7 : "") + "]", b6, b2, b4)
                    }
                })
            } else {
                if (!b2 && bH.type(b5) === "object") {
                    for (e in b5) {
                        i(b3 + "[" + e + "]", b5[e], b2, b4)
                    }
                } else {
                    b4(b3, b5)
                }
            }
        }

        bH.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (b2, e) {
            bH.fn[e] = function (b4, b3) {
                return arguments.length > 0 ? this.on(e, null, b4, b3) : this.trigger(e)
            }
        });
        bH.fn.extend({
            hover: function (e, b2) {
                return this.mouseenter(e).mouseleave(b2 || e)
            }, bind: function (e, b3, b2) {
                return this.on(e, null, b3, b2)
            }, unbind: function (e, b2) {
                return this.off(e, null, b2)
            }, delegate: function (e, b2, b4, b3) {
                return this.on(b2, e, b4, b3)
            }, undelegate: function (e, b2, b3) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(b2, e || "**", b3)
            }
        });
        var b0, V, bM = bH.now(), aw = /\?/, am = /#.*$/, L = /([?&])_=[^&]*/, ac = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, A = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, o = /^(?:GET|HEAD)$/, aE = /^\/\//, aR = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, bZ = bH.fn.load, v = {}, a5 = {}, aT = "*/".concat("*");
        try {
            V = aI.href
        } catch (bd) {
            V = l.createElement("a");
            V.href = "";
            V = V.href
        }
        b0 = aR.exec(V.toLowerCase()) || [];
        function bJ(e) {
            return function (b5, b6) {
                if (typeof b5 !== "string") {
                    b6 = b5;
                    b5 = "*"
                }
                var b2, b3 = 0, b4 = b5.toLowerCase().match(Z) || [];
                if (bH.isFunction(b6)) {
                    while ((b2 = b4[b3++])) {
                        if (b2[0] === "+") {
                            b2 = b2.slice(1) || "*";
                            (e[b2] = e[b2] || []).unshift(b6)
                        } else {
                            (e[b2] = e[b2] || []).push(b6)
                        }
                    }
                }
            }
        }

        function n(e, b3, b7, b4) {
            var b2 = {}, b5 = (e === a5);

            function b6(b8) {
                var b9;
                b2[b8] = true;
                bH.each(e[b8] || [], function (cb, ca) {
                    var cc = ca(b3, b7, b4);
                    if (typeof cc === "string" && !b5 && !b2[cc]) {
                        b3.dataTypes.unshift(cc);
                        b6(cc);
                        return false
                    } else {
                        if (b5) {
                            return !(b9 = cc)
                        }
                    }
                });
                return b9
            }

            return b6(b3.dataTypes[0]) || !b2["*"] && b6("*")
        }

        function r(b3, b4) {
            var e, b2, b5 = bH.ajaxSettings.flatOptions || {};
            for (b2 in b4) {
                if (b4[b2] !== aD) {
                    (b5[b2] ? b3 : (e || (e = {})))[b2] = b4[b2]
                }
            }
            if (e) {
                bH.extend(true, b3, e)
            }
            return b3
        }

        bH.fn.load = function (b4, b7, b8) {
            if (typeof b4 !== "string" && bZ) {
                return bZ.apply(this, arguments)
            }
            var e, b3, b5, b2 = this, b6 = b4.indexOf(" ");
            if (b6 >= 0) {
                e = b4.slice(b6, b4.length);
                b4 = b4.slice(0, b6)
            }
            if (bH.isFunction(b7)) {
                b8 = b7;
                b7 = aD
            } else {
                if (b7 && typeof b7 === "object") {
                    b5 = "POST"
                }
            }
            if (b2.length > 0) {
                bH.ajax({url: b4, type: b5, dataType: "html", data: b7}).done(function (b9) {
                    b3 = arguments;
                    b2.html(e ? bH("<div>").append(bH.parseHTML(b9)).find(e) : b9)
                }).complete(b8 && function (ca, b9) {
                    b2.each(b8, b3 || [ca.responseText, b9, ca])
                })
            }
            return this
        };
        bH.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, b2) {
            bH.fn[b2] = function (b3) {
                return this.on(b2, b3)
            }
        });
        bH.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: V,
                type: "GET",
                isLocal: A.test(b0[1]),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": aT,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": true, "text json": bH.parseJSON, "text xml": bH.parseXML},
                flatOptions: {url: true, context: true}
            },
            ajaxSetup: function (b2, e) {
                return e ? r(r(b2, bH.ajaxSettings), e) : r(bH.ajaxSettings, b2)
            },
            ajaxPrefilter: bJ(v),
            ajaxTransport: bJ(a5),
            ajax: function (b6, cl, b2) {
                if (typeof b6 === "object") {
                    options = b6;
                    b6 = aD
                }
                options = options || {};
                var cf, ch, b7, cn, cb, b3, ci, b4, ca = bH.ajaxSetup({}, options), cp = ca.context || ca, cd = ca.context && (cp.nodeType || cp.jquery) ? bH(cp) : bH.event, co = bH.Deferred(), ck = bH.Callbacks("once memory"), b8 = ca.statusCode || {}, ce = {}, cm = {}, b5 = 0, b9 = "canceled", cg = {
                    readyState: 0,
                    getResponseHeader: function (cq) {
                        var e;
                        if (b5 === 2) {
                            if (!b4) {
                                b4 = {};
                                while ((e = ac.exec(cn))) {
                                    b4[e[1].toLowerCase()] = e[2]
                                }
                            }
                            e = b4[cq.toLowerCase()]
                        }
                        return e == null ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return b5 === 2 ? cn : null
                    },
                    setRequestHeader: function (cq, cr) {
                        var e = cq.toLowerCase();
                        if (!b5) {
                            cq = cm[e] = cm[e] || cq;
                            ce[cq] = cr
                        }
                        return this
                    },
                    overrideMimeType: function (e) {
                        if (!b5) {
                            ca.mimeType = e
                        }
                        return this
                    },
                    statusCode: function (cq) {
                        var e;
                        if (cq) {
                            if (b5 < 2) {
                                for (e in cq) {
                                    b8[e] = [b8[e], cq[e]]
                                }
                            } else {
                                cg.always(cq[cg.status])
                            }
                        }
                        return this
                    },
                    abort: function (cq) {
                        var e = cq || b9;
                        if (ci) {
                            ci.abort(e)
                        }
                        cc(0, e);
                        return this
                    }
                };
                co.promise(cg).complete = ck.add;
                cg.success = cg.done;
                cg.error = cg.fail;
                ca.url = ((b6 || ca.url || V) + "").replace(am, "").replace(aE, b0[1] + "//");
                ca.type = options.method || options.type || ca.method || ca.type;
                ca.dataTypes = bH.trim(ca.dataType || "*").toLowerCase().match(Z) || [""];
                if (ca.crossDomain == null) {
                    cf = aR.exec(ca.url.toLowerCase());
                    ca.crossDomain = !!(cf && (cf[1] !== b0[1] || cf[2] !== b0[2] || (cf[3] || (cf[1] === "http:" ? "80" : "443")) !== (b0[3] || (b0[1] === "http:" ? "80" : "443"))))
                }
                if (ca.data && ca.processData && typeof ca.data !== "string") {
                    ca.data = bH.param(ca.data, ca.traditional)
                }
                n(v, ca, options, cg);
                if (b5 === 2) {
                    return cg
                }
                b3 = ca.global;
                if (b3 && bH.active++ === 0) {
                    bH.event.trigger("ajaxStart")
                }
                ca.type = ca.type.toUpperCase();
                ca.hasContent = !o.test(ca.type);
                b7 = ca.url;
                if (!ca.hasContent) {
                    if (ca.data) {
                        b7 = (ca.url += (aw.test(b7) ? "&" : "?") + ca.data);
                        delete ca.data
                    }
                    if (ca.cache === false) {
                        ca.url = L.test(b7) ? b7.replace(L, "$1_=" + bM++) : b7 + (aw.test(b7) ? "&" : "?") + "_=" + bM++
                    }
                }
                if (ca.ifModified) {
                    if (bH.lastModified[b7]) {
                        cg.setRequestHeader("If-Modified-Since", bH.lastModified[b7])
                    }
                    if (bH.etag[b7]) {
                        cg.setRequestHeader("If-None-Match", bH.etag[b7])
                    }
                }
                if (ca.data && ca.hasContent && ca.contentType !== false || options.contentType) {
                    cg.setRequestHeader("Content-Type", ca.contentType)
                }
                cg.setRequestHeader("Accept", ca.dataTypes[0] && ca.accepts[ca.dataTypes[0]] ? ca.accepts[ca.dataTypes[0]] + (ca.dataTypes[0] !== "*" ? ", " + aT + "; q=0.01" : "") : ca.accepts["*"]);
                for (ch in ca.headers) {
                    cg.setRequestHeader(ch, ca.headers[ch])
                }
                if (ca.beforeSend && (ca.beforeSend.call(cp, cg, ca) === false || b5 === 2)) {
                    return cg.abort()
                }
                b9 = "abort";
                for (ch in {success: 1, error: 1, complete: 1}) {
                    cg[ch](ca[ch])
                }
                ci = n(a5, ca, options, cg);
                if (!ci) {
                    cc(-1, "No Transport")
                } else {
                    cg.readyState = 1;
                    if (b3) {
                        cd.trigger("ajaxSend", [cg, ca])
                    }
                    if (ca.async && ca.timeout > 0) {
                        cb = setTimeout(function () {
                            cg.abort("timeout")
                        }, ca.timeout)
                    }
                    try {
                        b5 = 1;
                        ci.send(ce, cc, b2)
                    } catch (cj) {
                        if (b5 < 2) {
                            cc(-1, cj)
                        } else {
                            throw cj
                        }
                    }
                }
                function cc(cu, cq, cv, cs) {
                    var e, cy, cw, ct, cx, cr = cq;
                    if (b5 === 2) {
                        return
                    }
                    b5 = 2;
                    if (cb) {
                        clearTimeout(cb)
                    }
                    ci = aD;
                    cn = cs || "";
                    cg.readyState = cu > 0 ? 4 : 0;
                    e = cu >= 200 && cu < 300 || cu === 304;
                    if (cv) {
                        ct = g(ca, cg, cv)
                    }
                    ct = ad(ca, ct, cg, e);
                    if (e) {
                        if (ca.ifModified) {
                            cx = cg.getResponseHeader("Last-Modified");
                            if (cx) {
                                bH.lastModified[b7] = cx
                            }
                            cx = cg.getResponseHeader("etag");
                            if (cx) {
                                bH.etag[b7] = cx
                            }
                        }
                        if (cu === 204 || ca.type === "HEAD") {
                            cr = "nocontent"
                        } else {
                            if (cu === 304) {
                                cr = "notmodified"
                            } else {
                                cr = ct.state;
                                cy = ct.data;
                                cw = ct.error;
                                e = !cw
                            }
                        }
                    } else {
                        cw = cr;
                        if (cu || !cr) {
                            cr = "error";
                            if (cu < 0) {
                                cu = 0
                            }
                        }
                    }
                    cg.status = cu;
                    cg.statusText = (cq || cr) + "";
                    if (e) {
                        co.resolveWith(cp, [cy, cr, cg])
                    } else {
                        co.rejectWith(cp, [cg, cr, cw])
                    }
                    cg.statusCode(b8);
                    b8 = aD;
                    if (b3) {
                        cd.trigger(e ? "ajaxSuccess" : "ajaxError", [cg, ca, e ? cy : cw])
                    }
                    ck.fireWith(cp, [cg, cr]);
                    if (b3) {
                        cd.trigger("ajaxComplete", [cg, ca]);
                        if (!(--bH.active)) {
                            bH.event.trigger("ajaxStop")
                        }
                    }
                }

                return cg
            },
            getJSON: function (e, b2, b3) {
                return bH.get(e, b2, b3, "json")
            },
            getScript: function (e, b2) {
                return bH.get(e, aD, b2, "script")
            }
        });
        bH.each(["get", "post"], function (e, b2) {
            bH[b2] = function (b3, b5, b6, b4) {
                if (bH.isFunction(b5)) {
                    b4 = b4 || b6;
                    b6 = b5;
                    b5 = aD
                }
                return bH.ajax({url: b3, type: b2, dataType: b4, data: b5, success: b6})
            }
        });
        function g(b9, b8, b5) {
            var e, b4, b3, b6, b2 = b9.contents, b7 = b9.dataTypes;
            while (b7[0] === "*") {
                b7.shift();
                if (b4 === aD) {
                    b4 = b9.mimeType || b8.getResponseHeader("Content-Type")
                }
            }
            if (b4) {
                for (b6 in b2) {
                    if (b2[b6] && b2[b6].test(b4)) {
                        b7.unshift(b6);
                        break
                    }
                }
            }
            if (b7[0] in b5) {
                b3 = b7[0]
            } else {
                for (b6 in b5) {
                    if (!b7[0] || b9.converters[b6 + " " + b7[0]]) {
                        b3 = b6;
                        break
                    }
                    if (!e) {
                        e = b6
                    }
                }
                b3 = b3 || e
            }
            if (b3) {
                if (b3 !== b7[0]) {
                    b7.unshift(b3)
                }
                return b5[b3]
            }
        }

        function ad(cd, b5, ca, b3) {
            var b2, b8, cb, b6, b4, cc = {}, b9 = cd.dataTypes.slice();
            if (b9[1]) {
                for (cb in cd.converters) {
                    cc[cb.toLowerCase()] = cd.converters[cb]
                }
            }
            b8 = b9.shift();
            while (b8) {
                if (cd.responseFields[b8]) {
                    ca[cd.responseFields[b8]] = b5
                }
                if (!b4 && b3 && cd.dataFilter) {
                    b5 = cd.dataFilter(b5, cd.dataType)
                }
                b4 = b8;
                b8 = b9.shift();
                if (b8) {
                    if (b8 === "*") {
                        b8 = b4
                    } else {
                        if (b4 !== "*" && b4 !== b8) {
                            cb = cc[b4 + " " + b8] || cc["* " + b8];
                            if (!cb) {
                                for (b2 in cc) {
                                    b6 = b2.split(" ");
                                    if (b6[1] === b8) {
                                        cb = cc[b4 + " " + b6[0]] || cc["* " + b6[0]];
                                        if (cb) {
                                            if (cb === true) {
                                                cb = cc[b2]
                                            } else {
                                                if (cc[b2] !== true) {
                                                    b8 = b6[0];
                                                    b9.unshift(b6[1])
                                                }
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            if (cb !== true) {
                                if (cb && cd["throws"]) {
                                    b5 = cb(b5)
                                } else {
                                    try {
                                        b5 = cb(b5)
                                    } catch (b7) {
                                        return {
                                            state: "parsererror",
                                            error: cb ? b7 : "No conversion from " + b4 + " to " + b8
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {state: "success", data: b5}
        }

        bH.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    bH.globalEval(e);
                    return e
                }
            }
        });
        bH.ajaxPrefilter("script", function (e) {
            if (e.cache === aD) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET";
                e.global = false
            }
        });
        bH.ajaxTransport("script", function (b3) {
            if (b3.crossDomain) {
                var e, b2 = l.head || bH("head")[0] || l.documentElement;
                return {
                    send: function (b4, b5) {
                        e = l.createElement("script");
                        e.async = true;
                        if (b3.scriptCharset) {
                            e.charset = b3.scriptCharset
                        }
                        e.src = b3.url;
                        e.onload = e.onreadystatechange = function (b7, b6) {
                            if (b6 || !e.readyState || /loaded|complete/.test(e.readyState)) {
                                e.onload = e.onreadystatechange = null;
                                if (e.parentNode) {
                                    e.parentNode.removeChild(e)
                                }
                                e = null;
                                if (!b6) {
                                    b5(200, "success")
                                }
                            }
                        };
                        b2.insertBefore(e, b2.firstChild)
                    }, abort: function () {
                        if (e) {
                            e.onload(aD, true)
                        }
                    }
                }
            }
        });
        var bo = [], a3 = /(=)\?(?=&|$)|\?\?/;
        bH.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = bo.pop() || (bH.expando + "_" + (bM++));
                this[e] = true;
                return e
            }
        });
        bH.ajaxPrefilter("json jsonp", function (b4, e, b5) {
            var b7, b2, b3, b6 = b4.jsonp !== false && (a3.test(b4.url) ? "url" : typeof b4.data === "string" && !(b4.contentType || "").indexOf("application/x-www-form-urlencoded") && a3.test(b4.data) && "data");
            if (b6 || b4.dataTypes[0] === "jsonp") {
                b7 = b4.jsonpCallback = bH.isFunction(b4.jsonpCallback) ? b4.jsonpCallback() : b4.jsonpCallback;
                if (b6) {
                    b4[b6] = b4[b6].replace(a3, "$1" + b7)
                } else {
                    if (b4.jsonp !== false) {
                        b4.url += (aw.test(b4.url) ? "&" : "?") + b4.jsonp + "=" + b7
                    }
                }
                b4.converters["script json"] = function () {
                    if (!b3) {
                        bH.error(b7 + " was not called")
                    }
                    return b3[0]
                };
                b4.dataTypes[0] = "json";
                b2 = a0[b7];
                a0[b7] = function () {
                    b3 = arguments
                };
                b5.always(function () {
                    a0[b7] = b2;
                    if (b4[b7]) {
                        b4.jsonpCallback = e.jsonpCallback;
                        bo.push(b7)
                    }
                    if (b3 && bH.isFunction(b2)) {
                        b2(b3[0])
                    }
                    b3 = b2 = aD
                });
                return "script"
            }
        });
        var ae, au, av = 0, aM = a0.ActiveXObject && function () {
                var e;
                for (e in ae) {
                    ae[e](aD, true)
                }
            };

        function bB() {
            try {
                return new a0.XMLHttpRequest()
            } catch (b2) {
            }
        }

        function bc() {
            try {
                return new a0.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b2) {
            }
        }

        bH.ajaxSettings.xhr = a0.ActiveXObject ? function () {
            return !this.isLocal && bB() || bc()
        } : bB;
        au = bH.ajaxSettings.xhr();
        bH.support.cors = !!au && ("withCredentials" in au);
        au = bH.support.ajax = !!au;
        if (au) {
            bH.ajaxTransport(function (e) {
                if (!e.crossDomain || bH.support.cors) {
                    var b2;
                    return {
                        send: function (b8, b3, b9) {
                            var b6, b4, b7 = e.xhr();
                            if (e.username) {
                                b7.open(e.type, e.url, e.async, e.username, e.password)
                            } else {
                                b7.open(e.type, e.url, e.async)
                            }
                            if (e.xhrFields) {
                                for (b4 in e.xhrFields) {
                                    b7[b4] = e.xhrFields[b4]
                                }
                            }
                            if (e.mimeType && b7.overrideMimeType) {
                                b7.overrideMimeType(e.mimeType)
                            }
                            if (!e.crossDomain && !b8["X-Requested-With"]) {
                                b8["X-Requested-With"] = "XMLHttpRequest"
                            }
                            try {
                                for (b4 in b8) {
                                    b7.setRequestHeader(b4, b8[b4])
                                }
                            } catch (b5) {
                            }
                            b7.send((e.hasContent && e.data) || null);
                            b2 = function (cc, cb) {
                                var ca, cd, cg, ce;
                                try {
                                    if (b2 && (cb || b7.readyState === 4)) {
                                        b2 = aD;
                                        if (b6) {
                                            b7.onreadystatechange = bH.noop;
                                            if (aM) {
                                                delete ae[b6]
                                            }
                                        }
                                        if (cb) {
                                            if (b7.readyState !== 4) {
                                                b7.abort()
                                            }
                                        } else {
                                            ce = {};
                                            ca = b7.status;
                                            cd = b7.getAllResponseHeaders();
                                            if (typeof b7.responseText === "string") {
                                                ce.text = b7.responseText
                                            }
                                            try {
                                                cg = b7.statusText
                                            } catch (cf) {
                                                cg = ""
                                            }
                                            if (!ca && e.isLocal && !e.crossDomain) {
                                                ca = ce.text ? 200 : 404
                                            } else {
                                                if (ca === 1223) {
                                                    ca = 204
                                                }
                                            }
                                        }
                                    }
                                } catch (ch) {
                                    if (!cb) {
                                        b3(-1, ch)
                                    }
                                }
                                if (ce) {
                                    b3(ca, cg, ce, cd)
                                }
                            };
                            if (!e.async) {
                                b2()
                            } else {
                                if (b7.readyState === 4) {
                                    setTimeout(b2)
                                } else {
                                    b6 = ++av;
                                    if (aM) {
                                        if (!ae) {
                                            ae = {};
                                            bH(a0).unload(aM)
                                        }
                                        ae[b6] = b2
                                    }
                                    if (!b9) {
                                        b7.onreadystatechange = b2
                                    }
                                }
                            }
                        }, abort: function () {
                            if (b2) {
                                b2(aD, true)
                            }
                        }
                    }
                }
            })
        }
        var I, aa, bP = /^(?:toggle|show|hide)$/, bI = new RegExp("^(?:([+-])=|)(" + by + ")([a-z%]*)$", "i"), bO = /queueHooks$/, ay = [h], aX = {
            "*": [function (e, b7) {
                var b9 = this.createTween(e, b7), b5 = b9.cur(), b4 = bI.exec(b7), b8 = b4 && b4[3] || (bH.cssNumber[e] ? "" : "px"), b2 = (bH.cssNumber[e] || b8 !== "px" && +b5) && bI.exec(bH.css(b9.elem, e)), b3 = 1, b6 = 20;
                if (b2 && b2[3] !== b8) {
                    b8 = b8 || b2[3];
                    b4 = b4 || [];
                    b2 = +b5 || 1;
                    do {
                        b3 = b3 || ".5";
                        b2 = b2 / b3;
                        bH.style(b9.elem, e, b2 + b8)
                    } while (b3 !== (b3 = b9.cur() / b5) && b3 !== 1 && --b6)
                }
                if (b4) {
                    b2 = b9.start = +b2 || +b5 || 0;
                    b9.unit = b8;
                    b9.end = b4[1] ? b2 + (b4[1] + 1) * b4[2] : +b4[2]
                }
                return b9
            }]
        };

        function bj() {
            setTimeout(function () {
                I = aD
            });
            return (I = bH.now())
        }

        function a9(b5, b7, b4) {
            var b2, b6 = (aX[b7] || []).concat(aX["*"]), e = 0, b3 = b6.length;
            for (; e < b3; e++) {
                if ((b2 = b6[e].call(b4, b7, b5))) {
                    return b2
                }
            }
        }

        function f(b3, b7, ca) {
            var cb, e, b6 = 0, b2 = ay.length, b9 = bH.Deferred().always(function () {
                delete b5.elem
            }), b5 = function () {
                if (e) {
                    return false
                }
                var ch = I || bj(), ce = Math.max(0, b4.startTime + b4.duration - ch), cc = ce / b4.duration || 0, cg = 1 - cc, cd = 0, cf = b4.tweens.length;
                for (; cd < cf; cd++) {
                    b4.tweens[cd].run(cg)
                }
                b9.notifyWith(b3, [b4, cg, ce]);
                if (cg < 1 && cf) {
                    return ce
                } else {
                    b9.resolveWith(b3, [b4]);
                    return false
                }
            }, b4 = b9.promise({
                elem: b3,
                props: bH.extend({}, b7),
                opts: bH.extend(true, {specialEasing: {}}, ca),
                originalProperties: b7,
                originalOptions: ca,
                startTime: I || bj(),
                duration: ca.duration,
                tweens: [],
                createTween: function (ce, cc) {
                    var cd = bH.Tween(b3, b4.opts, ce, cc, b4.opts.specialEasing[ce] || b4.opts.easing);
                    b4.tweens.push(cd);
                    return cd
                },
                stop: function (cd) {
                    var cc = 0, ce = cd ? b4.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    e = true;
                    for (; cc < ce; cc++) {
                        b4.tweens[cc].run(1)
                    }
                    if (cd) {
                        b9.resolveWith(b3, [b4, cd])
                    } else {
                        b9.rejectWith(b3, [b4, cd])
                    }
                    return this
                }
            }), b8 = b4.props;
            aj(b8, b4.opts.specialEasing);
            for (; b6 < b2; b6++) {
                cb = ay[b6].call(b4, b3, b8, b4.opts);
                if (cb) {
                    return cb
                }
            }
            bH.map(b8, a9, b4);
            if (bH.isFunction(b4.opts.start)) {
                b4.opts.start.call(b3, b4)
            }
            bH.fx.timer(bH.extend(b5, {elem: b3, anim: b4, queue: b4.opts.queue}));
            return b4.progress(b4.opts.progress).done(b4.opts.done, b4.opts.complete).fail(b4.opts.fail).always(b4.opts.always)
        }

        function aj(b4, b6) {
            var b3, b2, b7, b5, e;
            for (b3 in b4) {
                b2 = bH.camelCase(b3);
                b7 = b6[b2];
                b5 = b4[b3];
                if (bH.isArray(b5)) {
                    b7 = b5[1];
                    b5 = b4[b3] = b5[0]
                }
                if (b3 !== b2) {
                    b4[b2] = b5;
                    delete b4[b3]
                }
                e = bH.cssHooks[b2];
                if (e && "expand" in e) {
                    b5 = e.expand(b5);
                    delete b4[b2];
                    for (b3 in b5) {
                        if (!(b3 in b4)) {
                            b4[b3] = b5[b3];
                            b6[b3] = b7
                        }
                    }
                } else {
                    b6[b2] = b7
                }
            }
        }

        bH.Animation = bH.extend(f, {
            tweener: function (b2, b5) {
                if (bH.isFunction(b2)) {
                    b5 = b2;
                    b2 = ["*"]
                } else {
                    b2 = b2.split(" ")
                }
                var b4, e = 0, b3 = b2.length;
                for (; e < b3; e++) {
                    b4 = b2[e];
                    aX[b4] = aX[b4] || [];
                    aX[b4].unshift(b5)
                }
            }, prefilter: function (b2, e) {
                if (e) {
                    ay.unshift(b2)
                } else {
                    ay.push(b2)
                }
            }
        });
        function h(b4, b8, e) {
            var b3, ca, b6, cd, ce, cb, b5 = this, b9 = {}, b2 = b4.style, b7 = b4.nodeType && M(b4), cc = bH._data(b4, "fxshow");
            if (!e.queue) {
                ce = bH._queueHooks(b4, "fx");
                if (ce.unqueued == null) {
                    ce.unqueued = 0;
                    cb = ce.empty.fire;
                    ce.empty.fire = function () {
                        if (!ce.unqueued) {
                            cb()
                        }
                    }
                }
                ce.unqueued++;
                b5.always(function () {
                    b5.always(function () {
                        ce.unqueued--;
                        if (!bH.queue(b4, "fx").length) {
                            ce.empty.fire()
                        }
                    })
                })
            }
            if (b4.nodeType === 1 && ("height" in b8 || "width" in b8)) {
                e.overflow = [b2.overflow, b2.overflowX, b2.overflowY];
                if (bH.css(b4, "display") === "inline" && bH.css(b4, "float") === "none") {
                    if (!bH.support.inlineBlockNeedsLayout || bC(b4.nodeName) === "inline") {
                        b2.display = "inline-block"
                    } else {
                        b2.zoom = 1
                    }
                }
            }
            if (e.overflow) {
                b2.overflow = "hidden";
                if (!bH.support.shrinkWrapBlocks) {
                    b5.always(function () {
                        b2.overflow = e.overflow[0];
                        b2.overflowX = e.overflow[1];
                        b2.overflowY = e.overflow[2]
                    })
                }
            }
            for (b3 in b8) {
                ca = b8[b3];
                if (bP.exec(ca)) {
                    delete b8[b3];
                    b6 = b6 || ca === "toggle";
                    if (ca === (b7 ? "hide" : "show")) {
                        continue
                    }
                    b9[b3] = cc && cc[b3] || bH.style(b4, b3)
                }
            }
            if (!bH.isEmptyObject(b9)) {
                if (cc) {
                    if ("hidden" in cc) {
                        b7 = cc.hidden
                    }
                } else {
                    cc = bH._data(b4, "fxshow", {})
                }
                if (b6) {
                    cc.hidden = !b7
                }
                if (b7) {
                    bH(b4).show()
                } else {
                    b5.done(function () {
                        bH(b4).hide()
                    })
                }
                b5.done(function () {
                    var cf;
                    bH._removeData(b4, "fxshow");
                    for (cf in b9) {
                        bH.style(b4, cf, b9[cf])
                    }
                });
                for (b3 in b9) {
                    cd = a9(b7 ? cc[b3] : 0, b3, b5);
                    if (!(b3 in cc)) {
                        cc[b3] = cd.start;
                        if (b7) {
                            cd.end = cd.start;
                            cd.start = b3 === "width" || b3 === "height" ? 1 : 0
                        }
                    }
                }
            }
        }

        function F(b3, b2, b5, e, b4) {
            return new F.prototype.init(b3, b2, b5, e, b4)
        }

        bH.Tween = F;
        F.prototype = {
            constructor: F, init: function (b4, b2, b6, e, b5, b3) {
                this.elem = b4;
                this.prop = b6;
                this.easing = b5 || "swing";
                this.options = b2;
                this.start = this.now = this.cur();
                this.end = e;
                this.unit = b3 || (bH.cssNumber[b6] ? "" : "px")
            }, cur: function () {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            }, run: function (b3) {
                var b2, e = F.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = b2 = bH.easing[this.easing](b3, this.options.duration * b3, 0, 1, this.options.duration)
                } else {
                    this.pos = b2 = b3
                }
                this.now = (this.end - this.start) * b2 + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (e && e.set) {
                    e.set(this)
                } else {
                    F.propHooks._default.set(this)
                }
                return this
            }
        };
        F.prototype.init.prototype = F.prototype;
        F.propHooks = {
            _default: {
                get: function (b2) {
                    var e;
                    if (b2.elem[b2.prop] != null && (!b2.elem.style || b2.elem.style[b2.prop] == null)) {
                        return b2.elem[b2.prop]
                    }
                    e = bH.css(b2.elem, b2.prop, "");
                    return !e || e === "auto" ? 0 : e
                }, set: function (e) {
                    if (bH.fx.step[e.prop]) {
                        bH.fx.step[e.prop](e)
                    } else {
                        if (e.elem.style && (e.elem.style[bH.cssProps[e.prop]] != null || bH.cssHooks[e.prop])) {
                            bH.style(e.elem, e.prop, e.now + e.unit)
                        } else {
                            e.elem[e.prop] = e.now
                        }
                    }
                }
            }
        };
        F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function (e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        bH.each(["toggle", "show", "hide"], function (b2, e) {
            var b3 = bH.fn[e];
            bH.fn[e] = function (b4, b6, b5) {
                return b4 == null || typeof b4 === "boolean" ? b3.apply(this, arguments) : this.animate(bG(e, true), b4, b6, b5)
            }
        });
        bH.fn.extend({
            fadeTo: function (e, b4, b3, b2) {
                return this.filter(M).css("opacity", 0).show().end().animate({opacity: b4}, e, b3, b2)
            }, animate: function (b7, b4, b6, b5) {
                var b3 = bH.isEmptyObject(b7), e = bH.speed(b4, b6, b5), b2 = function () {
                    var b8 = f(this, bH.extend({}, b7), e);
                    if (b3 || bH._data(this, "finish")) {
                        b8.stop(true)
                    }
                };
                b2.finish = b2;
                return b3 || e.queue === false ? this.each(b2) : this.queue(e.queue, b2)
            }, stop: function (b3, b2, e) {
                var b4 = function (b5) {
                    var b6 = b5.stop;
                    delete b5.stop;
                    b6(e)
                };
                if (typeof b3 !== "string") {
                    e = b2;
                    b2 = b3;
                    b3 = aD
                }
                if (b2 && b3 !== false) {
                    this.queue(b3 || "fx", [])
                }
                return this.each(function () {
                    var b8 = true, b5 = b3 != null && b3 + "queueHooks", b7 = bH.timers, b6 = bH._data(this);
                    if (b5) {
                        if (b6[b5] && b6[b5].stop) {
                            b4(b6[b5])
                        }
                    } else {
                        for (b5 in b6) {
                            if (b6[b5] && b6[b5].stop && bO.test(b5)) {
                                b4(b6[b5])
                            }
                        }
                    }
                    for (b5 = b7.length; b5--;) {
                        if (b7[b5].elem === this && (b3 == null || b7[b5].queue === b3)) {
                            b7[b5].anim.stop(e);
                            b8 = false;
                            b7.splice(b5, 1)
                        }
                    }
                    if (b8 || !e) {
                        bH.dequeue(this, b3)
                    }
                })
            }, finish: function (e) {
                if (e !== false) {
                    e = e || "fx"
                }
                return this.each(function () {
                    var b4, b7 = bH._data(this), b3 = b7[e + "queue"], b2 = b7[e + "queueHooks"], b6 = bH.timers, b5 = b3 ? b3.length : 0;
                    b7.finish = true;
                    bH.queue(this, e, []);
                    if (b2 && b2.stop) {
                        b2.stop.call(this, true)
                    }
                    for (b4 = b6.length; b4--;) {
                        if (b6[b4].elem === this && b6[b4].queue === e) {
                            b6[b4].anim.stop(true);
                            b6.splice(b4, 1)
                        }
                    }
                    for (b4 = 0; b4 < b5; b4++) {
                        if (b3[b4] && b3[b4].finish) {
                            b3[b4].finish.call(this)
                        }
                    }
                    delete b7.finish
                })
            }
        });
        function bG(b3, b5) {
            var b4, e = {height: b3}, b2 = 0;
            b5 = b5 ? 1 : 0;
            for (; b2 < 4; b2 += 2 - b5) {
                b4 = bR[b2];
                e["margin" + b4] = e["padding" + b4] = b3
            }
            if (b5) {
                e.opacity = e.width = b3
            }
            return e
        }

        bH.each({
            slideDown: bG("show"),
            slideUp: bG("hide"),
            slideToggle: bG("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, b2) {
            bH.fn[e] = function (b3, b5, b4) {
                return this.animate(b2, b3, b5, b4)
            }
        });
        bH.speed = function (b3, b4, b2) {
            var e = b3 && typeof b3 === "object" ? bH.extend({}, b3) : {
                complete: b2 || !b2 && b4 || bH.isFunction(b3) && b3,
                duration: b3,
                easing: b2 && b4 || b4 && !bH.isFunction(b4) && b4
            };
            e.duration = bH.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bH.fx.speeds ? bH.fx.speeds[e.duration] : bH.fx.speeds._default;
            if (e.queue == null || e.queue === true) {
                e.queue = "fx"
            }
            e.old = e.complete;
            e.complete = function () {
                if (bH.isFunction(e.old)) {
                    e.old.call(this)
                }
                if (e.queue) {
                    bH.dequeue(this, e.queue)
                }
            };
            return e
        };
        bH.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2
            }
        };
        bH.timers = [];
        bH.fx = F.prototype.init;
        bH.fx.tick = function () {
            var b3, b2 = bH.timers, e = 0;
            I = bH.now();
            for (; e < b2.length; e++) {
                b3 = b2[e];
                if (!b3() && b2[e] === b3) {
                    b2.splice(e--, 1)
                }
            }
            if (!b2.length) {
                bH.fx.stop()
            }
            I = aD
        };
        bH.fx.timer = function (e) {
            if (e() && bH.timers.push(e)) {
                bH.fx.start()
            }
        };
        bH.fx.interval = 13;
        bH.fx.start = function () {
            if (!aa) {
                aa = setInterval(bH.fx.tick, bH.fx.interval)
            }
        };
        bH.fx.stop = function () {
            clearInterval(aa);
            aa = null
        };
        bH.fx.speeds = {slow: 600, fast: 200, _default: 400};
        bH.fx.step = {};
        if (bH.expr && bH.expr.filters) {
            bH.expr.filters.animated = function (e) {
                return bH.grep(bH.timers, function (b2) {
                    return e === b2.elem
                }).length
            }
        }
        bH.fn.offset = function (b2) {
            if (arguments.length) {
                return b2 === aD ? this : this.each(function (b7) {
                    bH.offset.setOffset(this, b2, b7)
                })
            }
            var e, b6, b4 = {top: 0, left: 0}, b3 = this[0], b5 = b3 && b3.ownerDocument;
            if (!b5) {
                return
            }
            e = b5.documentElement;
            if (!bH.contains(e, b3)) {
                return b4
            }
            if (typeof b3.getBoundingClientRect !== az) {
                b4 = b3.getBoundingClientRect()
            }
            b6 = bn(b5);
            return {
                top: b4.top + (b6.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: b4.left + (b6.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        };
        bH.offset = {
            setOffset: function (b4, cd, b7) {
                var b8 = bH.css(b4, "position");
                if (b8 === "static") {
                    b4.style.position = "relative"
                }
                var b6 = bH(b4), b2 = b6.offset(), e = bH.css(b4, "top"), cb = bH.css(b4, "left"), cc = (b8 === "absolute" || b8 === "fixed") && bH.inArray("auto", [e, cb]) > -1, ca = {}, b9 = {}, b3, b5;
                if (cc) {
                    b9 = b6.position();
                    b3 = b9.top;
                    b5 = b9.left
                } else {
                    b3 = parseFloat(e) || 0;
                    b5 = parseFloat(cb) || 0
                }
                if (bH.isFunction(cd)) {
                    cd = cd.call(b4, b7, b2)
                }
                if (cd.top != null) {
                    ca.top = (cd.top - b2.top) + b3
                }
                if (cd.left != null) {
                    ca.left = (cd.left - b2.left) + b5
                }
                if ("using" in cd) {
                    cd.using.call(b4, ca)
                } else {
                    b6.css(ca)
                }
            }
        };
        bH.fn.extend({
            position: function () {
                if (!this[0]) {
                    return
                }
                var b3, b4, e = {top: 0, left: 0}, b2 = this[0];
                if (bH.css(b2, "position") === "fixed") {
                    b4 = b2.getBoundingClientRect()
                } else {
                    b3 = this.offsetParent();
                    b4 = this.offset();
                    if (!bH.nodeName(b3[0], "html")) {
                        e = b3.offset()
                    }
                    e.top += bH.css(b3[0], "borderTopWidth", true);
                    e.left += bH.css(b3[0], "borderLeftWidth", true)
                }
                return {
                    top: b4.top - e.top - bH.css(b2, "marginTop", true),
                    left: b4.left - e.left - bH.css(b2, "marginLeft", true)
                }
            }, offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent || bU;
                    while (e && (!bH.nodeName(e, "html") && bH.css(e, "position") === "static")) {
                        e = e.offsetParent
                    }
                    return e || bU
                })
            }
        });
        bH.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b3, b2) {
            var e = /Y/.test(b2);
            bH.fn[b3] = function (b4) {
                return bH.access(this, function (b5, b8, b7) {
                    var b6 = bn(b5);
                    if (b7 === aD) {
                        return b6 ? (b2 in b6) ? b6[b2] : b6.document.documentElement[b8] : b5[b8]
                    }
                    if (b6) {
                        b6.scrollTo(!e ? b7 : bH(b6).scrollLeft(), e ? b7 : bH(b6).scrollTop())
                    } else {
                        b5[b8] = b7
                    }
                }, b3, b4, arguments.length, null)
            }
        });
        function bn(e) {
            return bH.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
        }

        bH.each({Height: "height", Width: "width"}, function (e, b2) {
            bH.each({padding: "inner" + e, content: b2, "": "outer" + e}, function (b3, b4) {
                bH.fn[b4] = function (b8, b7) {
                    var b6 = arguments.length && (b3 || typeof b8 !== "boolean"), b5 = b3 || (b8 === true || b7 === true ? "margin" : "border");
                    return bH.access(this, function (ca, b9, cb) {
                        var cc;
                        if (bH.isWindow(ca)) {
                            return ca.document.documentElement["client" + e]
                        }
                        if (ca.nodeType === 9) {
                            cc = ca.documentElement;
                            return Math.max(ca.body["scroll" + e], cc["scroll" + e], ca.body["offset" + e], cc["offset" + e], cc["client" + e])
                        }
                        return cb === aD ? bH.css(ca, b9, b5) : bH.style(ca, b9, cb, b5)
                    }, b2, b6 ? b8 : aD, b6, null)
                }
            })
        });
        bH.fn.size = function () {
            return this.length
        };
        bH.fn.andSelf = bH.fn.addBack;
        if (typeof module === "object" && module && typeof module.exports === "object") {
            module.exports = bH
        } else {
            if (!a0.jQuery) {
                a0.jQuery = a0.$ = bH
            }
            a0.jq = bH;
            if (typeof define === "function" && define.amd) {
                define("jquery", [], function () {
                    return bH
                })
            }
        }
    })(window);
    (zk = function (a) {
        return jq(a, zk).zk
    }).copy = function (d, c, a) {
        d = d || {};
        for (var b in c) {
            if (a) {
                a[b] = d[b]
            }
            d[b] = c[b]
        }
        return d
    };
    (function () {
        var d = 0, j = 0, r, n = [], a = jq.now();

        function i(y) {
            var x = function () {
                if (!x.$copied) {
                    x.$copied = true;
                    var B = x.$copyf;
                    delete x.$copyf;
                    B()
                }
                this.$oid = ++d;
                this.$init.apply(this, arguments);
                var A = this._$ais;
                if (A) {
                    delete this._$ais;
                    for (var z = A.length; z--;) {
                        A[z].call(this)
                    }
                }
            };
            x.$copyf = y;
            x.$copied = !x.$copyf;
            return x
        }

        function t(x, z) {
            var y = x.$oid = ++d;
            zk.classes[y] = x;
            x.prototype.$class = x;
            x.$class = zk.Class;
            (x._$extds = (x.superclass = z) ? zk.copy({}, z._$extds) : {})[y] = x;
            return x
        }

        function v(x) {
            return new Function("return this." + x + ";")
        }

        function c(x) {
            return function (y) {
                this[x] = y;
                return this
            }
        }

        function b(x, y) {
            return function (z, A) {
                var B = this[x];
                this[x] = z;
                if (B !== z || (A && A.force)) {
                    this.__fname__ = x.substring(1);
                    y.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        }

        function l(x, y) {
            return function () {
                this.__fname__ = x.substring(1);
                this[x] = y.apply(this, arguments);
                delete this.__fname__;
                return this
            }
        }

        function k(x, y, z) {
            return function (A, B) {
                var C = this[x];
                this.__fname__ = x.substring(1);
                this[x] = A = y.apply(this, arguments);
                if (C !== A || (B && B.force)) {
                    z.apply(this, arguments)
                }
                delete this.__fname__;
                return this
            }
        }

        function p() {
            if (jq.isReady || zk.Page.contained.length) {
                e(true, zk.pi ? "z-initing" : null)
            } else {
                setTimeout(p, 10)
            }
        }

        function w() {
            e(zk.processMask)
        }

        function e(x, y) {
            var z;
            if (zk.processing && !(z = jq("#zk_proc")).length && !jq("#zk_showBusy").length) {
                zUtl.progressbox("zk_proc", window.msgzk ? msgzk.PLEASE_WAIT : "Processing...", x, y)
            } else {
                if (y == "z-initing") {
                    var z = z || jq("#zk_proc");
                    if (z.length && z.hasClass("z-loading") && (z = z.parent()).hasClass("z-temp")) {
                        z.append('<div class="z-initing"></div>')
                    }
                }
            }
        }

        function m(x) {
            var y = x.widgetName;
            return y + (x.id ? "$" + x.id : "") + "#" + x.uuid + "$" + x.$oid
        }

        function g(C, E) {
            var x = [], F = zk.Widget;
            for (var B = 0, D = C.length; B < D; B++) {
                if (x.length) {
                    x.push(", ")
                }
                var z = C[B];
                if (z && (jq.isArray(z) || z.zk)) {
                    x.push("[" + g(z, E) + "]")
                } else {
                    if (F && F.isInstance(z)) {
                        x.push(m(z))
                    } else {
                        if (z && z.nodeType) {
                            var G = F && F.$(z);
                            if (G) {
                                x.push(jq.nodeName(z), (z != G.$n() ? "#" + z.id + "." + z.className : ""), ":", m(G))
                            } else {
                                x.push(jq.nodeName(z), "#", z.id)
                            }
                        } else {
                            if (E && z && (typeof z == "object") && !z.nodeType) {
                                var I = ["{\n"];
                                for (var H in z) {
                                    I.push(H, ":", z[H], ",\n")
                                }
                                if (I[I.length - 1] == ",\n") {
                                    I.pop()
                                }
                                I.push("\n}");
                                x.push(I.join(""))
                            } else {
                                if (typeof z == "function") {
                                    var I = "" + z, y = I.indexOf("{"), A = y < 0 ? I.indexOf("\n") : -1;
                                    x.push(I.substring(0, y > 0 ? y : A > 0 ? A : I.length))
                                } else {
                                    x.push("" + z)
                                }
                            }
                        }
                    }
                }
            }
            return x.join("")
        }

        function u() {
            if (r) {
                var x = jq("#zk_log");
                if (!x.length) {
                    jq(document.body).append('<div id="zk_logbox" class="z-log"><button class="z-button" onclick="jq(\'#zk_logbox\').remove()">X</button><br/><textarea id="zk_log" rows="10"></textarea></div>');
                    x = jq("#zk_log")
                }
                x = x[0];
                x.value += r;
                x.scrollTop = x.scrollHeight;
                r = null
            }
        }

        function q() {
            if (zk.mounting) {
                return zk.afterMount(q)
            }
            zk.stamp("ending");
            zk.stamp()
        }

        function h(D, x, z, C, y) {
            for (var B = D._$subs, A = B ? B.length : 0; --A >= 0;) {
                var E = B[A];
                if (E[x] === z) {
                    if (y) {
                        E["$" + x] = z
                    }
                    E[x] = C;
                    h(E, x, z, C, y)
                }
            }
        }

        zk.copy(zk, {
            classes: {},
            isClass: function (x) {
                return x && x.$class == zk.Class
            },
            isObject: function (x) {
                return x && x.$supers != null
            },
            procDelay: 900,
            tipDelay: 800,
            resendTimeout: 200,
            clickPointer: [0, 0],
            currentPointer: [0, 0],
            loading: 0,
            busy: 0,
            appName: "ZK",
            cut: function (z, x) {
                var y;
                if (z) {
                    y = z[x];
                    delete z[x]
                }
                return y
            },
            $package: function (x, B, D) {
                for (var C = 0, z = window; ;) {
                    var A = x.indexOf(".", C), F = A >= 0 ? x.substring(C, A) : x.substring(C);
                    var y = z[F], E;
                    if (E = !y) {
                        y = z[F] = {}
                    }
                    if (A < 0) {
                        if (E && B !== false) {
                            zk.setLoaded(x)
                        }
                        if (D) {
                            y.$wv = true
                        }
                        return y
                    }
                    z = y;
                    C = A + 1
                }
            },
            $import: function (B, C) {
                for (var A = 0, D = window; ;) {
                    var z = B.indexOf(".", A), x = z >= 0 ? B.substring(A, z) : B.substring(A);
                    var y = D[x];
                    if (z < 0 || !y) {
                        if (C) {
                            if (y) {
                                C(y)
                            } else {
                                zk.load(B.substring(0, B.lastIndexOf(".")), function () {
                                    C(zk.$import(B))
                                })
                            }
                        }
                        return y
                    }
                    D = y;
                    A = z + 1
                }
            },
            $extends: function (F, B, C) {
                if (!F) {
                    throw"unknown superclass"
                }
                var A = !(zk.feature && zk.feature.ee), x = F.prototype, E = i(function () {
                    if (F.$copyf && !F.$copied) {
                        F.$copyf();
                        F.$copied = true
                    }
                    var L = B["$define"], G = F.prototype, I = E.prototype;
                    if (L) {
                        delete B["$define"]
                    }
                    var K = zk.feature;
                    if (!(K && K.ee)) {
                        for (var J in G) {
                            var H = "|" + J + "|";
                            if ("|_$super|_$subs|$class|_$extds|superclass|className|widgetName|blankPreserved|".indexOf(H) < 0) {
                                I[J] = G[J]
                            } else {
                                if (I[J] == undefined && "|className|widgetName|blankPreserved|".indexOf(H) >= 0) {
                                    I[J] = G[J]
                                }
                            }
                        }
                    }
                    zk.define(E, L);
                    zk.copy(I, B)
                }), z = E.prototype;
                if (A) {
                    E.$copyf();
                    E.$copied = true
                } else {
                    function D() {
                        this.constructor = E
                    }

                    D.prototype = F.prototype;
                    E.prototype = new D();
                    z = E.prototype
                }
                for (var y in F) {
                    if ("|prototype|$copyf|$copied|".indexOf("|" + y + "|") < 0) {
                        E[y] = F[y]
                    }
                }
                zk.copy(E, C);
                z["_$super"] = x;
                z._$subs = [];
                x._$subs.push(z);
                return t(E, F)
            },
            $default: function (x, z) {
                x = x || {};
                for (var y in z) {
                    if (x[y] === undefined) {
                        x[y] = z[y]
                    }
                }
                return x
            },
            override: function (E, A, D) {
                var B = E.$class;
                if (B && B.$copied === false) {
                    var C = B.$copyf;
                    B.$copyf = function () {
                        C();
                        B.$copied = true;
                        zk.override(E, A, D)
                    };
                    return E
                }
                var z = !(zk.feature && zk.feature.ee);
                switch (typeof A) {
                    case"function":
                        var y = E;
                        E = A;
                        return y;
                    case"string":
                        if (z) {
                            h(E, A, E["$" + A] = E[A], E[A] = D, true)
                        } else {
                            E["$" + A] = E[A];
                            E[A] = D
                        }
                        return E
                }
                if (z) {
                    for (var x in D) {
                        h(E, x, A[x] = E[x], E[x] = D[x])
                    }
                } else {
                    for (var x in D) {
                        A[x] = E[x];
                        E[x] = D[x]
                    }
                }
                return E
            },
            define: function (y, B) {
                for (var x in B) {
                    var A = "_" + x, z = x.charAt(0).toUpperCase() + x.substring(1), D = y.prototype, E = B[x], C = null;
                    if (jq.isArray(E)) {
                        C = E.length ? E[0] : null;
                        E = E.length > 1 ? E[1] : null
                    }
                    D["set" + z] = C ? E ? k(A, C, E) : l(A, C) : E ? b(A, E) : c(A);
                    D["get" + z] = D["is" + z] = v(A)
                }
                return y
            },
            $void: function () {
                return false
            },
            parseInt: function (y, x) {
                return y && !isNaN(y = parseInt(y, x || 10)) ? y : 0
            },
            parseFloat: function (x) {
                return x && !isNaN(x = parseFloat(x)) ? x : 0
            },
            set: function (y, x, E, A) {
                if (typeof x == "string") {
                    zk._set(y, x, E, A)
                } else {
                    for (var C = 0, D = E.length, B, z, F; C < D;) {
                        z = E[C++];
                        B = x["get" + z.charAt(0).toUpperCase() + z.substring(1)];
                        if (!A || B || x[z] !== undefined) {
                            zk._set(y, z, B ? B.call(x) : x[z])
                        }
                    }
                }
                return y
            },
            _set: function (A, y, z, x) {
                zk._set2(A, A["set" + y.charAt(0).toUpperCase() + y.substring(1)], y, z, x)
            },
            _set2: function (B, z, y, A, x) {
                if (z) {
                    if (x !== undefined) {
                        z.call(B, A, x)
                    } else {
                        z.call(B, A)
                    }
                } else {
                    B[y] = A
                }
            },
            get: function (A, z) {
                var y = z.charAt(0).toUpperCase() + z.substring(1), x = A["get" + y];
                if (x) {
                    return x.call(A)
                }
                x = A["is" + y];
                if (x) {
                    return x.call(A)
                }
                return A[z]
            },
            startProcessing: function (x) {
                zk.processing = true;
                setTimeout(jq.isReady ? w : p, x > 0 ? x : 0)
            },
            endProcessing: function () {
                zk.processing = false;
                zUtl.destroyProgressbox("zk_proc")
            },
            disableESC: function () {
                ++zk._noESC
            },
            enableESC: function () {
                --zk._noESC
            },
            _noESC: 0,
            error: function (x) {
                zAu.send(new zk.Event(null, "error", {message: x}, {ignorable: true}), 800);
                zk._Erbx.push(x)
            },
            errorDismiss: function () {
                zk._Erbx.remove()
            },
            log: function (x) {
                var y = g((x !== zk) ? arguments : (function (B) {
                    var z = [];
                    for (var A = B.length; --A > 0;) {
                        z.unshift(B[A])
                    }
                    return z
                })(arguments), (x === zk));
                r = (r ? r + y : y) + "\n";
                if (zk.mobile) {
                    console.log(r);
                    r = null
                } else {
                    setTimeout(function () {
                        jq(u)
                    }, 300)
                }
            },
            stamp: function (x, A) {
                if (x) {
                    if (!A && !n.length) {
                        setTimeout(q, 0)
                    }
                    n.push({n: x, t: jq.now()})
                } else {
                    if (n.length) {
                        var z = a;
                        for (var y; (y = n.shift());) {
                            zk.log(y.n + ": " + (y.t - a));
                            a = y.t
                        }
                        zk.log("total: " + (a - z))
                    }
                }
            },
            ajaxURI: function (z, x) {
                var F = zk.Desktop.$(x ? x.desktop : null), y = x && x.au;
                F = (F ? F : zk)[y ? "updateURI" : "contextURI"];
                z = z || "";
                var G = z.charAt(0) == "/";
                if (y && !G) {
                    G = true;
                    if (z) {
                        z = "/" + z
                    }
                }
                var C = F.indexOf(";"), B = F.lastIndexOf("?");
                if (C < 0 && B < 0) {
                    return G ? F + z : z
                }
                if (B >= 0 && (C < 0 || B < C)) {
                    C = B
                }
                var D = G ? F.substring(0, C) : "";
                if (x && x.ignoreSession) {
                    return D + z
                }
                var E = F.substring(C), A = z.indexOf("?");
                return A >= 0 ? B >= 0 ? D + z.substring(0, A) + E + "&" + z.substring(A + 1) : D + z.substring(0, A) + E + z.substring(A) : D + z + E
            },
            stateless: function (z, B, x, y) {
                var C = zk.Desktop, A;
                z = z || ("z_auto" + j++);
                A = C.all[z];
                if (A && !A.stateless) {
                    throw"Desktop conflict"
                }
                if (zk.updateURI == null) {
                    zk.updateURI = x
                }
                if (zk.contextURI == null) {
                    zk.contextURI = B
                }
                return A || new C(z, B, x, y, true)
            }
        });
        (function () {
            function z(C) {
                return parseFloat(C) || C
            }

            jq.uaMatch = function (D) {
                D = D.toLowerCase();
                var C = /(chrome)[ \/]([\w.]+)/.exec(D) || /(webkit)[ \/]([\w.]+)/.exec(D) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(D) || /(msie) ([\w.]+)/.exec(D) || D.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(D) || [];
                return {browser: C[1] || "", version: C[2] || "0"}
            };
            if (!jq.browser) {
                matched = jq.uaMatch(navigator.userAgent);
                A = {};
                if (matched.browser) {
                    A[matched.browser] = true;
                    A.version = matched.version
                }
                if (A.chrome) {
                    A.webkit = true
                } else {
                    if (A.webkit) {
                        A.safari = true
                    }
                }
                jq.browser = A
            }
            var A = jq.browser, B = zk.agent = navigator.userAgent.toLowerCase();
            zk.opera = A.opera && z(A.version);
            zk.ff = zk.gecko = A.mozilla && (B.indexOf("trident") < 0) && z(A.version);
            zk.linux = B.indexOf("linux") >= 0;
            zk.mac = !zk.ios && B.indexOf("mac") >= 0;
            zk.webkit = A.webkit;
            zk.chrome = A.chrome;
            zk.safari = A.webkit && !zk.chrome;
            zk.ios = zk.webkit && /iphone|ipad|ipod/.test(B);
            zk.android = zk.webkit && (B.indexOf("android") >= 0);
            zk.mobile = zk.ios || zk.android;
            zk.css3 = true;
            var y = A.mozilla && (B.indexOf("trident") >= 0) && z(A.version);
            zk.vendor = zk.webkit ? "webkit" : "";
            var x;
            if (zk.ff) {
                if (zk.ff < 5 && (x = B.indexOf("firefox/")) > 0) {
                    zk.ff = zk.gecko = z(B.substring(x + 8))
                }
                x = "gecko gecko" + Math.floor(zk.ff);
                zk.vendor = "Moz"
            } else {
                if (zk.opera) {
                    x = "opera";
                    zk.vendor = "O"
                } else {
                    zk.iex = A.msie && z(A.version);
                    if (!zk.iex && y) {
                        zk.iex = y
                    }
                    if (zk.iex) {
                        if ((zk.ie = document.documentMode || zk.iex) < 6) {
                            zk.ie = 6
                        }
                        if (zk.ie < 11 && zk.ie > 6) {
                            zk.ie7 = zk.ie >= 7;
                            zk.ie8 = zk.ie >= 8;
                            zk.ie9 = zk.ie >= 9;
                            zk.ie10 = zk.ie >= 10
                        }
                        zk["ie" + zk.ie + "_"] = true;
                        zk.css3 = zk.ie >= 9;
                        x = "ie ie" + Math.floor(zk.ie);
                        zk.vendor = "ms"
                    } else {
                        if (zk.webkit) {
                            x = "webkit webkit" + Math.floor(zk.webkit)
                        }
                        if (zk.mobile) {
                            x = (x || "") + " mobile";
                            if (zk.ios) {
                                x = (x || "") + " ios"
                            } else {
                                x = (x || "") + " android"
                            }
                        }
                    }
                }
            }
            if ((zk.air = B.indexOf("adobeair") >= 0) && zk.webkit) {
                x = (x || "") + " air"
            }
            if (x) {
                jq(function () {
                    jq(document.body).addClass(x)
                })
            }
            zk.vendor_ = zk.vendor.toLowerCase()
        })();
        function f(y, x) {
            return function () {
                return x.apply(y, arguments)
            }
        }

        zk.Class = function () {
        };
        t(zk.Object = i());
        zk.Object.prototype = {
            $init: zk.$void, afterInit: function (x) {
                (this._$ais = this._$ais || []).unshift(x)
            }, $instanceof: function () {
                if (this.$class) {
                    for (var A = this.$class._$extds, z = arguments, y = z.length, x; y--;) {
                        if ((x = z[y]) && A[x.$oid]) {
                            return true
                        }
                    }
                }
                return false
            }, $super: function (y, x) {
                if (typeof y != "string") {
                    return this.$supers(y, x, [].slice.call(arguments, 2))
                }
                return this.$supers(y, [].slice.call(arguments, 1))
            }, $supers: function (z, B, E) {
                var C = this._$supers;
                if (!C) {
                    C = this._$supers = {}
                }
                if (typeof z != "string") {
                    var A = C[B], D;
                    if (!(D = z.prototype._$super) || !(z = D[B])) {
                        throw B + " not in superclass"
                    }
                    C[B] = D;
                    try {
                        return z.apply(this, E)
                    } finally {
                        C[B] = A
                    }
                }
                var A = C[z], y, D, x;
                if (A) {
                    x = A[z];
                    D = A
                } else {
                    x = this[z];
                    D = this
                }
                while (D = D._$super) {
                    if (x != D[z]) {
                        y = D[z];
                        if (y) {
                            C[z] = D
                        }
                        break
                    }
                }
                if (!y) {
                    throw z + " not in superclass"
                }
                try {
                    return y.apply(this, B)
                } finally {
                    C[z] = A
                }
            }, _$subs: [], proxy: function (y) {
                var z = this._$proxies, x;
                if (!z) {
                    this._$proxies = z = {}
                } else {
                    if (x = z[y]) {
                        return x
                    }
                }
                return z[y] = f(this, y)
            }
        };
        _zkf = {
            isInstance: function (x) {
                return x && x.$instanceof && x.$instanceof(this)
            }, isAssignableFrom: function (x) {
                return x && (x = x._$extds) && x[this.$oid] != null
            }
        };
        zk.copy(zk.Object, _zkf);
        zk.copy(t(zk.Class, zk.Object), _zkf);
        var o, s = 0;
        zk._Erbx = zk.$extends(zk.Object, {
            $init: function (B) {
                var D = "zk_err", A = "#" + D, y = zk.mobild ? " ontouchstart" : " onclick", x = ['<div class="z-error" id="', D, '">', '<div id="', D, '-p">', '<div class="errornumbers">', ++s, " Errors</div>", '<div class="button"', y, '="zk._Erbx.remove()">', '<i class="z-icon-times"></i></div>', '<div class="button"', y, '="zk._Erbx.redraw()">', '<i class="z-icon-refresh"></i></div></div>', '<div class="messagecontent"><div class="messages">', zUtl.encodeXML(B, {multiline: true}), "</div></div></div>"];
                jq(document.body).append(x.join(""));
                o = this;
                this.id = D;
                try {
                    var C;
                    this.dg = new zk.Draggable(null, C = jq(A)[0], {
                        handle: jq(A + "-p")[0],
                        zIndex: C.style.zIndex,
                        starteffect: zk.$void,
                        starteffect: zk.$void,
                        endeffect: zk.$void
                    })
                } catch (z) {
                }
                jq(A).slideDown(1000)
            }, destroy: function () {
                o = null;
                s = 0;
                if (this.dg) {
                    this.dg.destroy()
                }
                jq("#" + this.id).remove()
            }
        }, {
            redraw: function () {
                zk.errorDismiss();
                zAu.send(new zk.Event(null, "redraw"))
            }, push: function (x) {
                if (!o) {
                    return new zk._Erbx(x)
                }
                var y = o.id;
                jq("#" + y + " .errornumbers").html(++s + " Errors");
                jq("#" + y + " .messages").append('<div class="newmessage">' + x + "</hr></div>");
                jq("#" + y + " .newmessage").removeClass("newmessage").addClass("message").slideDown(600)
            }, remove: function () {
                if (o) {
                    o.destroy()
                }
            }
        })
    })();
    if (!zk.feature)zk.feature = {standard: true, ee: true};
    zk.copy(String.prototype, {
        startsWith: function (a) {
            return this.substring(0, a.length) == a
        }, endsWith: function (a) {
            return this.substring(this.length - a.length) == a
        }, trim: function () {
            return jq.trim(this)
        }, $camel: function () {
            var d = this.split("-"), a = d.length;
            if (a == 1) {
                return d[0]
            }
            var c = this.charAt(0) == "-" ? d[0].charAt(0).toUpperCase() + d[0].substring(1) : d[0];
            for (var b = 1; b < a; b++) {
                c += d[b].charAt(0).toUpperCase() + d[b].substring(1)
            }
            return c
        }, $inc: function (a) {
            return String.fromCharCode(this.charCodeAt(0) + a)
        }, $sub: function (a) {
            return this.charCodeAt(0) - a.charCodeAt(0)
        }
    });
    zk.copy(Array.prototype, {
        $indexOf: function (a) {
            return jq.inArray(a, this)
        }, $contains: function (a) {
            return this.$indexOf(a) >= 0
        }, $equals: function (c) {
            if (jq.isArray(c) && c.length == this.length) {
                for (var a = this.length; a--;) {
                    var b = this[a];
                    if (b != c[a] && (!jq.isArray(b) || !b.$equals(c[a]))) {
                        return false
                    }
                }
                return true
            }
        }, $remove: function (d) {
            for (var c = jq.isArray(d), b = 0, a = this.length; b < a; ++b) {
                if (d == this[b] || (c && d.$equals(this[b]))) {
                    this.splice(b, 1);
                    return true
                }
            }
            return false
        }, $addAll: function (a) {
            return this.push.apply(this, a)
        }, $clone: function () {
            return [].concat(this)
        }
    });
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (c) {
            for (var b = 0, a = this.length; b < a; b++) {
                if (this[b] == c) {
                    return b
                }
            }
            return -1
        }
    }
    ;
    zjq = function (a) {
        this.jq = a
    };
    (function (t, k) {
        var g = {}, y = ["font-family", "font-size", "font-weight", "font-style", "letter-spacing", "line-height", "text-align", "text-decoration", "text-indent", "text-shadow", "text-transform", "text-overflow", "direction", "word-spacing", "white-space"], n, m, c = ["color", "background-color", "background"], p = [], q = 0, w = 0, r;

        function u(E, D) {
            var C = D && D !== zk ? zk.Widget.$(D) : null, B;
            return (B = C || zk.Desktop.sync()) && (B = B.$f(E, !C)) ? B.$n() : null
        }

        function s(B) {
            if (B.offsetParent) {
                return B.offsetParent
            }
            if (B == t.body) {
                return B
            }
            while ((B = B.parentNode) && B != t.body) {
                if (B.style && jq(B).css("position") != "static") {
                    return B
                }
            }
            return t.body
        }

        function i(C) {
            if (--q <= 0) {
                for (var B = p.length; B--;) {
                    p[B].zsync(C)
                }
            }
        }

        function d(B) {
            zk.afterAnimate(function () {
                try {
                    B.focus();
                    var C = zk.Widget.$(B);
                    if (C) {
                        zk.currentFocus = C
                    }
                    zjq.fixInput(B)
                } catch (D) {
                }
            }, -1)
        }

        function a(C) {
            try {
                C.select()
            } catch (B) {
            }
        }

        function x() {
            if (this.submit) {
                jq.Event.fire(this, "submit");
                this.submit()
            }
        }

        function e() {
            this.style.MozUserSelect = "none"
        }

        function A() {
            this.style.MozUserSelect = ""
        }

        function b(M, N, D, H) {
            if (M && N) {
                var I = zk(M).revisedOffset(), C = D ? D.oft : zk(N).revisedOffset(), J = C[1] - I[1] + (M == h() ? 0 : M.scrollTop), E = C[0] - I[0] + (M == h() ? 0 : M.scrollLeft), L = D ? D.h : N.offsetHeight, F = D ? D.w : N.offsetWidth, K = E + F, B = J + L, G;
                if (M.scrollTop > J) {
                    M.scrollTop = J;
                    G = true
                } else {
                    if (B > M.clientHeight + M.scrollTop) {
                        M.scrollTop = !D ? B : B - (M.clientHeight + (N.parentNode == M ? 0 : M.scrollTop));
                        G = true
                    }
                }
                if (!H) {
                    if (M.scrollLeft > E) {
                        M.scrollLeft = E;
                        G = true
                    } else {
                        if (K > M.clientWidth + M.scrollLeft) {
                            M.scrollLeft = !D ? K : K - (M.clientWidth + (N.parentNode == M ? 0 : M.scrollLeft));
                            G = true
                        }
                    }
                }
                if (G || !D) {
                    if (!D) {
                        D = {oft: C, h: N.offsetHeight, w: N.offsetWidth, el: N}
                    } else {
                        D.oft = zk(D.el).revisedOffset()
                    }
                }
                return D
            }
        }

        function v(H) {
            var E = 0, B = 0, G;
            if (zk.gecko) {
                var I = H.parentNode;
                while (I && I != t.body && I.nodeType === 1) {
                    var C = jq(I), F = C.css("position");
                    if (F == "relative" || F == "absolute") {
                        E += zk.parseInt(C.css("border-top-width"));
                        B += zk.parseInt(C.css("border-left-width"))
                    }
                    I = I.offsetParent
                }
            }
            do {
                var D = jq(H);
                if (D.css("position") == "fixed") {
                    E += jq.innerY() + H.offsetTop;
                    B += jq.innerX() + H.offsetLeft;
                    break
                } else {
                    if (zk.opera) {
                        if (G && jq.nodeName(H, "div") && H.scrollTop != 0) {
                            E += H.scrollTop || 0
                        }
                        G = jq.nodeName(H, "span", "input")
                    }
                    E += H.offsetTop || 0;
                    B += H.offsetLeft || 0;
                    H = zk.gecko && H != t.body ? s(H) : H.offsetParent
                }
            } while (H);
            return [B, E]
        }

        function o(D) {
            if (zk.webkit && jq.nodeName(D, "tr") && D.cells.length) {
                D = D.cells[0]
            }
            var C = 0, B = 0;
            do {
                C += D.offsetTop || 0;
                B += D.offsetLeft || 0;
                D = zk.gecko && D != t.body ? s(D) : D.offsetParent;
                if (D) {
                    if (jq.nodeName(D, "body")) {
                        break
                    }
                    var E = jq(D).css("position");
                    if (E == "relative" || E == "absolute") {
                        break
                    }
                }
            } while (D);
            return [B, C]
        }

        function z(E, D, B) {
            if (B) {
                var C = E.revisedOffset();
                D.left = C[0];
                D.top = C[1]
            } else {
                D.left = E.offsetLeft();
                D.top = E.offsetTop()
            }
            return D
        }

        var j = [];

        function l() {
            if (j.length) {
                for (var B; B = j.pop();) {
                    try {
                        zjq._fixCSS(B)
                    } catch (C) {
                    }
                }
                setTimeout(l)
            }
        }

        var f = (function () {
            var B;
            return function () {
                if (B === undefined) {
                    if (t.doctype === null) {
                        return false
                    }
                    var D = t.doctype;
                    var C = "<!DOCTYPE " + D.name + (D.publicId ? ' PUBLIC"' + D.publicId + '"' : "") + (!D.publicId && D.systemId ? " SYSTEM" : "") + (D.systemId ? ' "' + D.systemId + '"' : "") + ">";
                    B = C === "<!DOCTYPE html>"
                }
                return B
            }
        })();
        var h = (function () {
            var B, C = function () {
                return B = (zk.webkit || zk.opera) ? t.body : t.documentElement
            };
            return function () {
                return B || C()
            }
        })();
        zk.copy(zjq, {
            minWidth: (!zk.ie11_) ? function (B) {
                return zk(B).offsetWidth()
            } : function (B) {
                return zk(B).offsetWidth() + 1
            },
            fixInput: zk.$void,
            _fixCSS: function (B) {
                B.className += " ";
                if (B.offsetHeight) {
                }
                B.className.trim()
            },
            _cleanVisi: function (B) {
                B.style.visibility = "inherit"
            },
            _fixClick: zk.$void,
            _fixedVParent: zk.$void,
            _fixIframe: zk.$void,
            src0: "",
            eventTypes: {
                zmousedown: "mousedown",
                zmouseup: "mouseup",
                zmousemove: "mousemove",
                zdblclick: "dblclick",
                zcontextmenu: "contextmenu"
            }
        });
        jq.fn.zbind = jq.fn.bind;
        jq.fn.zunbind = jq.fn.unbind;
        zk.override(jq.fn, g, {
            init: function (E, B) {
                if (B === zk) {
                    if (typeof E == "string" && zUtl.isChar(E.charAt(0), {digit: 1, upper: 1, lower: 1, _: 1})) {
                        var D = t.getElementById(E);
                        if (!D || D.id == E) {
                            var C = jq(D || []);
                            C.context = t;
                            C.selector = "#" + E;
                            C.zk = new zjq(C);
                            return C
                        }
                        E = "#" + E
                    }
                    B = null
                }
                if (zk.Widget && zk.Widget.isInstance(E)) {
                    E = E.$n() || "#" + E.uuid
                }
                var C = g.init.apply(this, arguments);
                C.zk = new zjq(C);
                return C
            }, replaceWith: function (B, E, C) {
                if (!zk.Widget.isInstance(B)) {
                    return g.replaceWith.apply(this, arguments)
                }
                var D = this[0];
                if (D) {
                    B.replaceHTML(D, E, C)
                }
                return this
            }, bind: function (C, D, B) {
                C = zjq.eventTypes[C] || C;
                return this.zbind.apply(this, arguments)
            }, unbind: function (C, B) {
                C = zjq.eventTypes[C] || C;
                return this.zunbind.apply(this, arguments)
            }
        });
        jq.fn.init.prototype = jq.fn;
        jq.each(["remove", "empty", "show", "hide"], function (C, B) {
            g[B] = jq.fn[B];
            jq.fn[B] = function () {
                return !this.selector && this[0] === t ? this : g[B].apply(this, arguments)
            }
        });
        jq.each(["before", "after", "append", "prepend"], function (C, B) {
            g[B] = jq.fn[B];
            jq.fn[B] = function (D, F) {
                if (!zk.Widget.isInstance(D)) {
                    return g[B].apply(this, arguments)
                }
                if (!this.length) {
                    return this
                }
                if (!zk.Desktop._ndt) {
                    zk.stateless()
                }
                var E = g[B].call(this, D.redrawHTML_());
                if (!D.z_rod) {
                    D.bind(F);
                    zUtl.fireSized(D)
                }
                return E
            }
        });
        zjq.prototype = {
            cleanVisibility: function () {
                return this.jq.each(function () {
                    zjq._cleanVisi(this)
                })
            }, isVisible: function (B) {
                var C = this.jq[0];
                return C && (!C.style || (C.style.display != "none" && (!B || C.style.visibility != "hidden")))
            }, isRealVisible: function (B) {
                var C = this.jq[0];
                return C && this.isVisible(B) && (C.offsetWidth > 0 || C.offsetHeight > 0 || (!C.firstChild && (!(C = C.parentNode) || C == t.body || zk(C).isRealVisible(B))))
            }, scrollTo: function () {
                if (this.jq.length) {
                    var B = this.cmOffset();
                    scrollTo(B[0], B[1])
                }
                return this
            }, scrollIntoView: function (C) {
                var H = this.jq[0];
                if (H) {
                    var G = jq("#" + H.id + "-real")[0];
                    if (G) {
                        H = G
                    }
                    if (!this.isScrollIntoView()) {
                        var E = C, D = H;
                        if (!E) {
                            do {
                                if (D == t.body) {
                                    break
                                }
                                if (jq(D).css("position") == "absolute") {
                                    E = true;
                                    break
                                }
                            } while (D = D.offsetParent)
                        }
                        if (!E && zk.isLoaded("zul.sel")) {
                            var B = zk.Widget.$(H);
                            E = B && B.$instanceof(zul.sel.ItemWidget)
                        }
                        if (E) {
                            var C = C || t.documentElement;
                            for (var D = H, F; (D = D.parentNode) && H != C; H = D) {
                                F = b(D, H, F, true)
                            }
                        } else {
                            setTimeout(function () {
                                H.scrollIntoView()
                            }, 20)
                        }
                    }
                }
                return this
            }, isScrollIntoView: (function () {
                function B(D, E) {
                    var G = D.jq[0], H, F, C = [];
                    do {
                        if (!H) {
                            if (G == h() || G.style.overflow == "auto" || G.style.overflowY == "auto" || jq(G).css("overflow-y") == "auto") {
                                H = G
                            }
                        }
                        if (!F) {
                            if (G == h() || G == t.body || G.style.overflow == "auto" || G.style.overflowX == "auto" || jq(G).css("overflow-x") == "auto") {
                                F = G
                            }
                        }
                        if (H && F) {
                            C.push([F, H]);
                            if (!E) {
                                break
                            }
                            H = F = null
                        }
                        G = G.parentNode
                    } while (G && (G != t));
                    return C
                }

                return function (E) {
                    var I = this.viewportOffset(), N = I[0], L = I[1], P = this.jq[0].offsetWidth, J = this.jq[0].offsetHeight, D = N + P, M = L + J;
                    if (N >= 0 && L >= 0 && D <= jq.innerWidth() && M <= jq.innerHeight()) {
                        var H = B(this, E), K = true;
                        for (var G = 0; G < H.length; G++) {
                            var F = H[G], C = zk(this.jq[0] == F[0] ? F[0].parentNode : F[0]).viewportOffset()[0], O = zk(this.jq[0] == F[1] ? F[1].parentNode : F[1]).viewportOffset()[1];
                            K = (N >= C && D <= C + F[0].offsetWidth && L >= O && M <= O + F[1].offsetHeight);
                            if (!K) {
                                return K
                            }
                        }
                        return K
                    }
                    return false
                }
            })(), hasVScroll: function () {
                var B;
                if ((B = this.$()) && B._scrollbar) {
                    return B._scrollbar.hasVScroll()
                }
                var D, C;
                return (D = this.jq[0]) && (C = D.clientWidth) && (C = D.offsetWidth - C) > 11 ? C : 0
            }, hasHScroll: function () {
                var B;
                if ((B = this.$()) && B._scrollbar) {
                    return B._scrollbar.hasHScroll()
                }
                var D, C;
                return (D = this.jq[0]) && (C = D.clientHeight) && (C = D.offsetHeight - C) > 11 ? C : 0
            }, isOverlapped: function (C, B) {
                var D;
                if (D = this.jq[0]) {
                    return jq.isOverlapped(this.revisedOffset(), [D.offsetWidth, D.offsetHeight], zk(C).revisedOffset(), [C.offsetWidth, C.offsetHeight], B)
                }
            }, sumStyles: function (D, F) {
                var H = 0;
                for (var E = 0, B = D.length, G = this.jq; E < B; E++) {
                    var C = Math.round(zk.parseFloat(G.css(F[D.charAt(E)])));
                    if (!isNaN(C)) {
                        H += C
                    }
                }
                return H
            }, revisedOffset: function (G) {
                var F = this.jq[0];
                if (!G) {
                    if (F.getBoundingClientRect) {
                        var E, D;
                        if (zk.ie < 11 && F.style.display == "none") {
                            D = (E = F.style).visibility;
                            E.visibility = "hidden";
                            E.display = ""
                        }
                        var B = F.getBoundingClientRect();
                        B = [B.left + jq.innerX() - F.ownerDocument.documentElement.clientLeft, B.top + jq.innerY() - F.ownerDocument.documentElement.clientTop];
                        if (E) {
                            E.display = "none";
                            E.visibility = D
                        }
                        B[0] = Math.ceil(B[0]);
                        B[1] = Math.ceil(B[1]);
                        return B
                    }
                    G = this.cmOffset()
                }
                var C = zk(F.parentNode).scrollOffset();
                C[0] -= jq.innerX();
                C[1] -= jq.innerY();
                return [G[0] - C[0], G[1] - C[1]]
            }, revisedWidth: function (B, C) {
                if (this.jq.css("box-sizing") != "border-box") {
                    B -= this.padBorderWidth()
                }
                if (B > 0 && C) {
                    B -= this.marginWidth()
                }
                return B < 0 ? 0 : B
            }, revisedHeight: function (B, C) {
                if (this.jq.css("box-sizing") != "border-box") {
                    B -= this.padBorderHeight()
                }
                if (B > 0 && C) {
                    B -= this.marginHeight()
                }
                return B < 0 ? 0 : B
            }, contentWidth: function (C) {
                var B = this.jq[0].offsetWidth;
                B -= this.padBorderWidth();
                if (B > 0 && C) {
                    B -= this.marginWidth()
                }
                return B < 0 ? 0 : B
            }, contentHeight: function (C) {
                var B = this.jq[0].offsetHeight;
                B -= this.padBorderHeight();
                if (B > 0 && C) {
                    B -= this.marginHeight()
                }
                return B < 0 ? 0 : B
            }, marginWidth: function () {
                return this.sumStyles("lr", jq.margins)
            }, marginHeight: function () {
                return this.sumStyles("tb", jq.margins)
            }, borderWidth: function () {
                return this.sumStyles("lr", jq.borders)
            }, borderHeight: function () {
                return this.sumStyles("tb", jq.borders)
            }, paddingWidth: function () {
                return this.sumStyles("lr", jq.paddings)
            }, paddingHeight: function () {
                return this.sumStyles("tb", jq.paddings)
            }, padBorderWidth: function () {
                return this.borderWidth() + this.paddingWidth()
            }, padBorderHeight: function () {
                return this.borderHeight() + this.paddingHeight()
            }, vflexHeight: function () {
                var C = this.jq[0], B = C.parentNode.clientHeight;
                for (var D = C; D = D.previousSibling;) {
                    if (D.offsetHeight && zk(D).isVisible()) {
                        B -= D.offsetHeight
                    }
                }
                for (var D = C; D = D.nextSibling;) {
                    if (D.offsetHeight && zk(D).isVisible()) {
                        B -= D.offsetHeight
                    }
                }
                return B
            }, cellIndex: function () {
                var B = this.jq[0];
                return B ? B.cellIndex : 0
            }, ncols: function (H) {
                var I = this.jq[0], F = 0, E;
                if (I && (E = I.cells)) {
                    for (var D = 0, C = E.length; D < C; ++D) {
                        var B = E[D];
                        if (!H || zk(B).isVisible()) {
                            var G = B.colSpan;
                            if (G >= 1) {
                                F += G
                            } else {
                                ++F
                            }
                        }
                    }
                }
                return F
            }, toStyleOffset: function (J, I) {
                var D = this.jq[0], F = D.style.left, E = D.style.top, G = zk.webkit || zk.opera || zk.air || zk.ie > 7;
                if (G || D.style.left == "" || D.style.left == "auto") {
                    D.style.left = "0"
                }
                if (G || D.style.top == "" || D.style.top == "auto") {
                    D.style.top = "0"
                }
                var C = this.cmOffset(), B = zk.parseInt(D.style.left), H = zk.parseInt(D.style.top);
                C = [J - C[0] + B, I - C[1] + H];
                D.style.left = F;
                D.style.top = E;
                return C
            }, center: function (C) {
                var B = this.jq[0], E = this.offsetWidth(), F = this.offsetHeight();
                if ((!E || !F) && !this.isVisible()) {
                    B.style.left = B.style.top = "-10000px";
                    B.style.display = "block";
                    E = this.offsetWidth();
                    F = this.offsetHeight(), B.style.display = "none"
                }
                var D = jq.innerX(), K = jq.innerY();
                var L, J, I, H;
                E = jq.innerWidth() - E;
                if (!C) {
                    L = D + E / 2
                } else {
                    if (C.indexOf("left") >= 0) {
                        L = D
                    } else {
                        if (C.indexOf("right") >= 0) {
                            L = D + E - 1
                        } else {
                            if (C.indexOf("center") >= 0) {
                                L = D + E / 2
                            } else {
                                L = 0;
                                I = true
                            }
                        }
                    }
                }
                F = jq.innerHeight() - F;
                if (!C) {
                    J = K + F / 2
                } else {
                    if (C.indexOf("top") >= 0) {
                        J = K
                    } else {
                        if (C.indexOf("bottom") >= 0) {
                            J = K + F - 1
                        } else {
                            if (C.indexOf("center") >= 0) {
                                J = K + F / 2
                            } else {
                                J = 0;
                                H = true
                            }
                        }
                    }
                }
                if (L < D) {
                    L = D
                }
                if (J < K) {
                    J = K
                }
                var G = this.toStyleOffset(L, J);
                if (!I) {
                    B.style.left = jq.px(G[0])
                }
                if (!H) {
                    B.style.top = jq.px(G[1])
                }
                return this
            }, position: function (U, O, P) {
                O = O || "overlap";
                if (!U) {
                    var C = jq("body")[0];
                    U = {left: 0, top: 0, width: C.offsetWidth, height: C.offsetHeight}
                }
                if (U.nodeType) {
                    U = zk(U).dimension(true)
                }
                var M = U.left, J = U.top, I = this.dimension(), H = I.height;
                I = I.width;
                switch (O) {
                    case"before_start":
                        J -= H;
                        break;
                    case"before_center":
                        J -= H;
                        M += (U.width - I) / 2 | 0;
                        break;
                    case"before_end":
                        J -= H;
                        M += U.width - I;
                        break;
                    case"after_start":
                        J += U.height;
                        break;
                    case"after_center":
                        J += U.height;
                        M += (U.width - I) / 2 | 0;
                        break;
                    case"after_end":
                        J += U.height;
                        M += U.width - I;
                        break;
                    case"start_before":
                        M -= I;
                        break;
                    case"start_center":
                        M -= I;
                        J += (U.height - H) / 2 | 0;
                        break;
                    case"start_after":
                        M -= I;
                        J += U.height - H;
                        break;
                    case"end_before":
                        M += U.width;
                        break;
                    case"end_center":
                        M += U.width;
                        J += (U.height - H) / 2 | 0;
                        break;
                    case"end_after":
                        M += U.width;
                        J += U.height - H;
                        break;
                    case"at_pointer":
                        var D = zk.currentPointer;
                        M = D[0];
                        J = D[1];
                        break;
                    case"after_pointer":
                        var D = zk.currentPointer;
                        M = D[0];
                        J = D[1] + 20;
                        break;
                    case"top_right":
                    case"overlap_end":
                        M += U.width - I;
                        break;
                    case"top_center":
                        M += (U.width - I) / 2 | 0;
                        break;
                    case"middle_left":
                        J += (U.height - H) / 2 | 0;
                        break;
                    case"middle_center":
                        M += (U.width - I) / 2 | 0;
                        J += (U.height - H) / 2 | 0;
                        break;
                    case"middle_right":
                        M += U.width - I;
                        J += (U.height - H) / 2 | 0;
                        break;
                    case"bottom_left":
                    case"overlap_before":
                        J += U.height - H;
                        break;
                    case"bottom_center":
                        M += (U.width - I) / 2 | 0;
                        J += U.height - H;
                        break;
                    case"bottom_right":
                    case"overlap_after":
                        M += U.width - I;
                        J += U.height - H;
                        break;
                    default:
                }
                if (!P || !P.overflow) {
                    var N = jq.innerX(), K = jq.innerY(), G = N + jq.innerWidth(), E = K + jq.innerHeight();
                    if (M + I > G) {
                        M = G - I
                    }
                    if (M < N) {
                        M = N
                    }
                    if (J + H > E) {
                        J = E - H
                    }
                    if (J < K) {
                        J = K
                    }
                }
                if (P && P.dodgeRef) {
                    var T = U.left, Q = U.top, R = T + U.width, V = Q + U.height;
                    if (M + I > T && M < R && J + H > Q && J < V) {
                        if (P.overflow) {
                            M = R
                        } else {
                            var N = jq.innerX(), G = N + jq.innerWidth(), F = G - R, L = T - N;
                            if (F >= I || F >= L) {
                                M = Math.min(R, G - I)
                            } else {
                                M = Math.max(T - I, N)
                            }
                        }
                    }
                }
                var B = this.jq[0], S = this.toStyleOffset(M, J);
                B.style.left = jq.px(S[0]);
                B.style.top = jq.px(S[1]);
                return this
            }, scrollOffset: function () {
                var D = this.jq[0], C = 0, B = 0;
                do {
                    C += D.scrollTop || 0;
                    B += D.scrollLeft || 0;
                    D = D.parentNode
                } while (D);
                return [B, C]
            }, cmOffset: function () {
                var B = this.jq[0];
                if (zk.webkit && jq.nodeName(B, "tr") && B.cells.length) {
                    B = B.cells[0]
                }
                if (!(zk.gecko || zk.webkit) || this.isVisible() || this.offsetWidth()) {
                    return v(B)
                }
                B.style.display = "";
                var C = v(B);
                B.style.display = "none";
                return C
            }, $: function () {
                return zk.Widget.$(this.jq[0])
            }, absolutize: function () {
                var C = this.jq[0];
                if (C.style.position == "absolute") {
                    return this
                }
                var D = o(C), F = D[0], E = D[1], B = C.style;
                C._$orgLeft = F - parseFloat(B.left || 0);
                C._$orgTop = E - parseFloat(B.top || 0);
                B.position = "absolute";
                B.top = jq.px(E);
                B.left = jq.px(F);
                return this
            }, relativize: function () {
                var C = this.jq[0];
                if (C.style.position == "relative") {
                    return this
                }
                var B = C.style;
                B.position = "relative";
                var E = parseFloat(B.top || 0) - (C._$orgTop || 0), D = parseFloat(B.left || 0) - (C._$orgLeft || 0);
                B.top = jq.px(E);
                B.left = jq.px(D);
                return this
            }, offsetWidth: function () {
                return this.jq[0].offsetWidth
            }, offsetHeight: function () {
                var C = this.jq[0];
                if (f() && jq.nodeName(C, "SPAN") && this.jq.css("display") != "block") {
                    var B = C.outerHTML;
                    if (zk.Widget.$(C, {exact: 1})) {
                        B = B.replace(/id="[^"]*"/g, "")
                    }
                    return zk(t.body).textSize(B)[1]
                }
                return C.offsetHeight
            }, offsetTop: function () {
                return this.jq[0].offsetTop
            }, offsetLeft: function () {
                return this.jq[0].offsetLeft
            }, viewportOffset: function () {
                var C = 0, B = 0, D = this.jq[0], E = D;
                do {
                    C += E.offsetTop || 0;
                    B += E.offsetLeft || 0;
                    if (E.offsetParent == t.body) {
                        if (jq(E).css("position") == "absolute") {
                            break
                        }
                    }
                } while (E = E.offsetParent);
                while (D = D.parentNode) {
                    C -= D.scrollTop || 0;
                    B -= D.scrollLeft || 0
                }
                return [B, C]
            }, textSize: (function () {
                var C = [], E, B = "left:-1000px;top:-1000px;position:absolute;visibility:hidden;border:none;display:none;", D = {};
                return function (H) {
                    var M = this.jq;
                    H = H || M[0].innerHTML;
                    if (!E) {
                        E = t.createElement("div");
                        E.style.cssText = B;
                        t.body.appendChild(E);
                        for (var K = y, I = K.length; I--;) {
                            C[I] = K[I].$camel()
                        }
                    }
                    var L = "";
                    for (var K = C, I = K.length; I--;) {
                        var G = K[I];
                        L += y[I] + ":" + M.css(G) + ";"
                    }
                    var F, J = L + H;
                    if (!(F = D[J])) {
                        E.innerHTML = H.replace(/name="[^"]*"/g, "");
                        E.style.cssText = B + L;
                        E.style.display = "";
                        F = D[J] = [E.offsetWidth, E.offsetHeight];
                        E.style.display = "none";
                        E.innerHTML = ""
                    }
                    return F
                }
            })(), dimension: function (D) {
                var E = this.jq.css("display");
                if (E != "none" && E != null) {
                    return z(this, {width: this.offsetWidth(), height: this.offsetHeight()}, D)
                }
                var C = this.jq[0].style, B = {};
                zk.copy(C, {visibility: "hidden", position: "absolute", display: "block"}, B);
                try {
                    return z(this, {width: this.offsetWidth(), height: this.offsetHeight()}, D)
                } finally {
                    zk.copy(C, B)
                }
            }, redoCSS: function (I, B) {
                if (B && B.fixFontIcon) {
                    if (zk.ie8_) {
                        var J = t.getElementsByTagName("head")[0], C = t.createElement("style"), E = this.jq[0], M = B.selector, L = E ? E.className : "", K = E ? (E.id ? "#" + E.id : "." + L) : "", G = M ? M : "*";
                        if (K == "" && G == "*") {
                            return this
                        }
                        C.type = "text/css";
                        C.styleSheet.cssText = K + " " + G + ':before{content:"" !important';
                        var D = t.documentElement.scrollTop, F = t.documentElement.scrollLeft;
                        J.appendChild(C);
                        setTimeout(function () {
                            J.removeChild(C);
                            t.documentElement.scrollTop = D;
                            t.documentElement.scrollLeft = F
                        }, 0);
                        return this
                    } else {
                        return this
                    }
                }
                if (I == -1) {
                    for (var H = this.jq.length; H--;) {
                        zjq._fixCSS(this.jq[H])
                    }
                } else {
                    for (var H = this.jq.length; H--;) {
                        j.push(this.jq[H])
                    }
                    setTimeout(l, I >= 0 ? I : 100)
                }
                return this
            }, redoSrc: function () {
                for (var B = this.jq.length; B--;) {
                    var C = this.jq[B], D = C.src;
                    C.src = zjq.src0;
                    C.src = D
                }
                return this
            }, vparentNode: function (D) {
                var C = this.jq[0];
                if (C) {
                    var B = C.z_vp;
                    if (B) {
                        return jq("#" + B)[0]
                    }
                    B = C.z_vpagt;
                    if (B && (B = jq("#" + B)[0])) {
                        return B.parentNode
                    }
                    if (D) {
                        return C.parentNode
                    }
                }
            }, makeVParent: function () {
                var D = this.jq[0], E = D.parentNode;
                if (D.z_vp || D.z_vpagt || E == t.body) {
                    return this
                }
                var C = D.nextSibling, F = t.createElement("span");
                F.id = D.z_vpagt = "_z_vpagt" + w++;
                F.style.display = "none";
                zjq._fixedVParent(D, true);
                if (C) {
                    E.insertBefore(F, C)
                } else {
                    E.appendChild(F)
                }
                D.z_vp = E.id;
                var B = D.style;
                if (!B.top) {
                    B.top = "0"
                }
                t.body.appendChild(D);
                return this
            }, undoVParent: function () {
                var D = this.jq[0];
                if (D.z_vp || D.z_vpagt) {
                    var F = D.z_vp, G = D.z_vpagt, B = jq("#" + G);
                    D.z_vp = D.z_vpagt = null;
                    G = B[0];
                    F = F ? jq("#" + F)[0] : G ? G.parentNode : null;
                    if (F) {
                        zjq._fixedVParent(D);
                        if (G) {
                            F.insertBefore(D, G);
                            B.remove()
                        } else {
                            F.appendChild(D)
                        }
                        var E, F, C;
                        if ((zk.ff || zk.opera) && (E = zk._prevFocus) && (F = zk.Widget.$(D)) && zUtl.isAncestor(F, E)) {
                            if (E.getInputNode) {
                                jq(E.getInputNode()).trigger("blur")
                            } else {
                                if ((C = E.$n("a")) && jq.nodeName(C, "button", "input", "textarea", "a", "select", "iframe")) {
                                    jq(C).trigger("blur")
                                } else {
                                    if (E.$instanceof(zul.wgt.Button)) {
                                        jq(E.$n("btn") || E.$n()).trigger("blur")
                                    }
                                }
                            }
                        }
                    }
                }
                return this
            }, beforeHideOnUnbind: zk.$void, focus: function (B) {
                var C = this.jq[0];
                if (!C || !C.focus) {
                    return false
                }
                if (!jq.nodeName(C, "button", "input", "textarea", "a", "select", "iframe")) {
                    return false
                }
                if (B >= 0) {
                    setTimeout(function () {
                        d(C)
                    }, B)
                } else {
                    d(C)
                }
                return true
            }, select: function (B) {
                var C = this.jq[0];
                if (!C || typeof C.select != "function") {
                    return false
                }
                if (B >= 0) {
                    setTimeout(function () {
                        a(C)
                    }, B)
                } else {
                    a(C)
                }
                return true
            }, getSelectionRange: function () {
                var E = this.jq[0];
                try {
                    if (t.selection != null && E.selectionStart == null) {
                        var C = t.selection.createRange();
                        var B = E.createTextRange();
                        var D = "";
                        if (E.type.toLowerCase() == "text") {
                            D = B.duplicate()
                        } else {
                            D = C.duplicate();
                            D.moveToElementText(E)
                        }
                        D.setEndPoint("EndToEnd", C);
                        var G = D.text.length - C.text.length;
                        return [G, G + C.text.length]
                    } else {
                        return [E.selectionStart, E.selectionEnd]
                    }
                } catch (F) {
                    return [0, 0]
                }
            }, setSelectionRange: function (F, C) {
                var E = this.jq[0], B = E.value.length;
                if (F == null || F < 0) {
                    F = 0
                }
                if (F > B) {
                    F = B
                }
                if (C == null || C > B) {
                    C = B
                }
                if (C < 0) {
                    C = 0
                }
                if (E.setSelectionRange) {
                    E.setSelectionRange(F, C)
                } else {
                    if (E.createTextRange) {
                        var D = E.createTextRange();
                        if (F != C) {
                            D.moveEnd("character", C - D.text.length);
                            D.moveStart("character", F)
                        } else {
                            D.move("character", F)
                        }
                        D.select()
                    }
                }
                return this
            }, submit: function () {
                this.jq.each(x);
                return this
            }, disableSelection: function () {
                this.jq.each(e);
                return this
            }, enableSelection: function () {
                this.jq.each(A);
                return this
            }, setStyles: function (B) {
                this.jq.css(B);
                return this
            }, clearStyles: function () {
                var C = this.jq[0];
                if (C && (C = C.style)) {
                    for (var B in C) {
                        if ((!(zk.ie < 11) || B != "accelerator") && C[B] && typeof C[B] == "string") {
                            try {
                                C[B] = ""
                            } catch (D) {
                            }
                        }
                    }
                }
                return this
            }, detachChildren: function () {
                var D = this.jq[0];
                if (D) {
                    var B = [], C;
                    while (C = D.firstChild) {
                        B.push(C);
                        D.removeChild(C)
                    }
                    return B
                }
                return null
            }, isInput: function () {
                var F = this.jq, C = F.length, E = ["text", "password", "number", "tel", "url", "email"];
                for (var D = C, B, G; D--;) {
                    if ((B = jq.nodeName(G = F[D])) != "textarea" && (B != "input" || (jq.inArray(G.type, E) == -1))) {
                        return false
                    }
                }
                return C > 0
            }
        };
        zk.copy(jq, {
            nodeName: function (D) {
                var B = D && D.nodeName ? D.nodeName.toLowerCase() : "", C = arguments.length;
                if (C <= 1) {
                    return B
                }
                while (--C) {
                    if (B == arguments[C].toLowerCase()) {
                        return true
                    }
                }
                return false
            },
            px: function (B) {
                return (B || 0) + "px"
            },
            px0: function (B) {
                return Math.max(B || 0, 0) + "px"
            },
            $$: function (C, B) {
                return typeof C == "string" ? C ? t.getElementsByName(C + (B ? "-" + B : "")) : null : C
            },
            isAncestor: function (B, C) {
                if (!B) {
                    return true
                }
                for (; C; C = zk(C).vparentNode(true)) {
                    if (B == C) {
                        return true
                    }
                }
                return false
            },
            innerX: function () {
                return k.pageXOffset || h().scrollLeft || 0
            },
            innerY: function () {
                return k.pageYOffset || h().scrollTop || 0
            },
            innerWidth: function () {
                return jq(k).width()
            },
            innerHeight: function () {
                return jq(k).height()
            },
            margins: {l: "margin-left", r: "margin-right", t: "margin-top", b: "margin-bottom"},
            borders: {l: "border-left-width", r: "border-right-width", t: "border-top-width", b: "border-bottom-width"},
            paddings: {l: "padding-left", r: "padding-right", t: "padding-top", b: "padding-bottom"},
            scrollbarWidth: function () {
                if (!r) {
                    r = t.createElement("div");
                    r.style.cssText = "top:-1000px;left:-1000px;position:absolute;visibility:hidden;border:none;width:50px;height:50px;overflow:scroll;";
                    t.body.appendChild(r)
                }
                return r._value || (r._value = r.offsetWidth - r.clientWidth)
            },
            isOverlapped: function (D, J, C, H, L) {
                var M = D[0], K = J[0] + M, F = D[1], E = J[1] + F;
                var B = C[0], N = H[0] + B, I = C[1], G = H[1] + I;
                if (L) {
                    return B <= K && N >= M && I <= E && G >= F && K - B > L && N - M > L && E - I > L && G - F > L
                } else {
                    return B <= K && N >= M && I <= E && G >= F
                }
            },
            clearSelection: function () {
                try {
                    if (k.getSelection) {
                        if (zk.webkit) {
                            k.getSelection().collapse()
                        } else {
                            k.getSelection().removeAllRanges()
                        }
                    } else {
                        if (t.selection) {
                            if (t.selection.empty) {
                                t.selection.empty()
                            } else {
                                if (t.selection.clear) {
                                    t.selection.clear()
                                }
                            }
                        }
                    }
                    return true
                } catch (B) {
                    return false
                }
            },
            filterTextStyle: function (G, I) {
                if (typeof G == "string") {
                    var H = "";
                    if (G) {
                        for (var E = 0, D = 0; D >= 0; E = D + 1) {
                            D = G.indexOf(";", E);
                            var F = D >= 0 ? G.substring(E, D) : G.substring(E), C = F.indexOf(":"), B = C < 0 ? F.trim() : F.substring(0, C).trim();
                            if (B && (y.$contains(B) || c.$contains(B) || (I && I.$contains(B)))) {
                                H += F + ";"
                            }
                        }
                    }
                    return H
                }
                var H = {};
                for (var B in G) {
                    if (y.$contains(B) || c.$contains(B) || (I && I.$contains(B))) {
                        H[B] = G[B]
                    }
                }
                return H
            },
            parseStyle: function (F) {
                var H = {};
                if (F) {
                    var G = F.split(";");
                    for (var E = 0, C = G.length; E < C;) {
                        var D = G[E++].split(":"), B = D.length > 0 ? D[0].trim() : "";
                        if (B) {
                            H[B] = D.length > 1 ? D[1].trim() : ""
                        }
                    }
                }
                return H
            },
            newFrame: function (E, D, C) {
                if (!D) {
                    D = zjq.src0
                }
                var B = '<iframe id="' + E + '" name="' + E + '" src="' + D + '"';
                if (C == null) {
                    C = "display:none"
                }
                B += ' style="' + C + '"></iframe>';
                jq(t.body).append(B);
                return zk(E).jq[0]
            },
            newStackup: function (C, E, B) {
                C = jq(C || [], zk)[0];
                var D = t.createElement("iframe");
                D.id = E || (C ? C.id + "-ifrstk" : "z_ifrstk");
                D.style.cssText = "position:absolute;overflow:hidden;opacity:0;filter:alpha(opacity=0)";
                D.frameBorder = "no";
                D.tabIndex = -1;
                D.src = zjq.src0;
                if (C) {
                    D.style.width = C.offsetWidth + "px";
                    D.style.height = C.offsetHeight + "px";
                    D.style.top = C.style.top;
                    D.style.left = C.style.left;
                    D.style.zIndex = C.style.zIndex;
                    C.parentNode.insertBefore(D, B || C)
                }
                return D
            },
            newHidden: function (B, E, C) {
                var D = t.createElement("input");
                D.type = "hidden";
                D.name = B;
                D.value = E;
                if (C) {
                    C.appendChild(D)
                }
                return D
            },
            head: function () {
                return t.getElementsByTagName("head")[0] || t.documentElement
            },
            confirm: function (C) {
                zk.alerting = true;
                try {
                    return confirm(C)
                } finally {
                    try {
                        zk.alerting = false
                    } catch (B) {
                    }
                }
            },
            alert: function (C) {
                zk.alerting = true;
                try {
                    alert(C)
                } finally {
                    try {
                        zk.alerting = false
                    } catch (B) {
                    }
                }
            },
            onzsync: function (B) {
                p.unshift(B)
            },
            unzsync: function (B) {
                p.$remove(B)
            },
            zsync: function (B) {
                ++q;
                setTimeout(function () {
                    i(B)
                }, 50)
            },
            focusOut: zk.ie < 11 ? function () {
                k.focus()
            } : function () {
                var B = jq("#z_focusOut")[0];
                if (!B) {
                    jq(t.body).append('<a href="javascript:;" style="position:absolute;left:' + zk.clickPointer[0] + "px;top:" + zk.clickPointer[1] + 'px;" id="z_focusOut"/>');
                    B = jq("#z_focusOut")[0]
                }
                B.focus();
                setTimeout(function () {
                    jq(B).remove()
                }, 500)
            },
            _syncScroll: {},
            onSyncScroll: function (C) {
                var B = this._syncScroll;
                if (!B[C.id]) {
                    B[C.id] = C
                }
            },
            doSyncScroll: function () {
                var B = this._syncScroll;
                for (var C in B) {
                    B[C].doResizeScroll_();
                    delete B[C]
                }
            },
            unSyncScroll: function (B) {
                delete this._syncScroll[B.id]
            }
        });
        zk.copy(jq.Event.prototype, {
            stop: function () {
                this.preventDefault();
                this.stopPropagation()
            }, mouseData: function () {
                return zk.copy({pageX: this.pageX, pageY: this.pageY}, this.metaData())
            }, keyData: function () {
                return zk.copy({keyCode: this.keyCode, charCode: this.charCode}, this.metaData())
            }, metaData: function () {
                var B = {};
                if (this.altKey) {
                    B.altKey = true
                }
                if (this.ctrlKey) {
                    B.ctrlKey = true
                }
                if (this.shiftKey) {
                    B.shiftKey = true
                }
                if (this.metaKey) {
                    B.metaKey = true
                }
                B.which = this.which || 0;
                return B
            }
        });
        zk.copy(jq.Event, {
            fire: t.createEvent ? function (C, D) {
                var B = t.createEvent("HTMLEvents");
                B.initEvent(D, false, false);
                C.dispatchEvent(B)
            } : function (B, C) {
                B.fireEvent("on" + C)
            }, stop: function (B) {
                B.stop()
            }, filterMetaData: function (C) {
                var B = {};
                if (C.altKey) {
                    B.altKey = true
                }
                if (C.ctrlKey) {
                    B.ctrlKey = true
                }
                if (C.shiftKey) {
                    B.shiftKey = true
                }
                if (C.metaKey) {
                    B.metaKey = true
                }
                B.which = C.which || 0;
                return B
            }, zk: function (B, F) {
                var C = B.type, E = zk.Widget.$(B) || F, D;
                if (C.startsWith("mouse")) {
                    if (C.length > 5) {
                        C = "Mouse" + C.charAt(5).toUpperCase() + C.substring(6)
                    }
                    D = B.mouseData()
                } else {
                    if (C.startsWith("key")) {
                        if (C.length > 3) {
                            C = "Key" + C.charAt(3).toUpperCase() + C.substring(4)
                        }
                        D = B.keyData()
                    } else {
                        if (C == "dblclick") {
                            D = B.mouseData();
                            C = "DoubleClick"
                        } else {
                            if (C == "click") {
                                D = B.mouseData()
                            }
                            C = C.charAt(0).toUpperCase() + C.substring(1)
                        }
                    }
                }
                return new zk.Event(E, "on" + C, D, {}, B)
            }
        })
    })(document, window);
    zk.Event = zk.$extends(zk.Object, {
        $init: function (e, a, d, c, b) {
            this.currentTarget = this.target = e;
            this.name = a;
            this.data = d;
            if (d && typeof d == "object" && !jq.isArray(d)) {
                zk.$default(this, d)
            }
            this.opts = c || {rtags: {}};
            if (this.domEvent = b) {
                this.domTarget = b.target
            }
        }, addOptions: function (a) {
            this.opts = zk.copy(this.opts, a)
        }, stop: function (c) {
            var a = !c || !c.revoke;
            if (!c || c.propagation) {
                this.stopped = a
            }
            if (!c || c.dom) {
                this.domStopped = a
            }
            if (c && c.au) {
                this.auStopped = a
            }
        }
    });
    zWatch = (function () {
        var e = {
            onFitSize: true,
            onSize: true,
            onShow: true,
            onHide: true,
            beforeSize: true
        }, m = {}, f, c = zk.$extends(zk.Object, {
            $init: function (s, u, r, v, t) {
                this.name = s;
                this.xinfs = u;
                this.args = r;
                this.origin = v;
                this.fns = t
            }, fire: function (u) {
                var r, t, z, s = this.name, x = this.xinfs, y = this.args, A = this.fns;
                if (u) {
                    for (var w = 0, v = x.length; w < v; ++w) {
                        if (x[w][0] == u) {
                            r = x[w][1];
                            x.splice(w--, 1);
                            --v;
                            n(s, r, u, y, A)
                        }
                    }
                } else {
                    while (z = x.shift()) {
                        n(s, z[1], z[0], y, A)
                    }
                }
            }, fireDown: function (r) {
                if (!r || r.bindLevel == null) {
                    this.fire(r)
                }
                (new c(this.name, d(this.name, this.xinfs, r, true), this.args, this.origin, this.fns)).fire()
            }
        });

        function n(t, r, u, y, z) {
            for (var w = 0, v = r.length; w < v;) {
                var x = g(r[w++], u, t);
                if (z) {
                    z.push([x, u])
                } else {
                    x.apply(u, y)
                }
            }
            if (t == "onSize") {
                var s = u.onAfterSize;
                if (s) {
                    s.apply(u, y)
                }
            }
        }

        function b(r, s) {
            return s.isWatchable_ && s.isWatchable_(r)
        }

        function i(t, u, v, s) {
            for (var r = v; r; r = r.parent) {
                if (u == r) {
                    return !s || v.isWatchable_(t, u, s)
                }
            }
            return false
        }

        function d(s, y, t, x) {
            var C = [], z = t.bindLevel, r = e[s] && {}, v;
            if (t.isWatchable_) {
                for (var w = y.length; w--;) {
                    var B = y[w], u = B[0], A = z > u.bindLevel;
                    if (A) {
                        break
                    }
                    if (!v && r) {
                        if (!(v = b(s, t))) {
                            break
                        }
                        r[t.uuid] = true
                    }
                    if (i(s, t, u, r)) {
                        if (x) {
                            y.splice(w, 1)
                        }
                        C.unshift(B)
                    }
                }
            }
            return C
        }

        function q(s, t) {
            t = t.$clone();
            if (e[s]) {
                for (var r = t.length; r--;) {
                    if (!b(s, t[r][0])) {
                        t.splice(r, 1)
                    }
                }
            }
            return t
        }

        function a(r) {
            return jq.isArray(r) ? r[0] : r
        }

        function g(t, u, r) {
            var s = jq.isArray(t) ? t[1] : u[r];
            if (!s) {
                throw (u.className || u) + ":" + r + " not found"
            }
            return s
        }

        function h() {
            if (!f) {
                return
            }
            f = false;
            for (var r in m) {
                var s = m[r];
                if (s.length && s[0][0].bindLevel != null) {
                    s.sort(k)
                }
            }
        }

        function l(r) {
            return (r = r.bindLevel) == null || isNaN(r) ? -1 : r
        }

        function k(s, r) {
            return l(s[0]) - l(r[0])
        }

        zk._zsyncFns = function (r, s) {
            if (r == "onSize" || r == "onShow" || r == "onHide") {
                jq.zsync(s);
                if (r == "onSize") {
                    setTimeout("zk.doAfterResize()", 20)
                }
            }
            if (r == "onResponse") {
                jq.doSyncScroll()
            }
        };
        function p(w, t) {
            if (w) {
                for (var s = w.length, r = s - 1, v, y, u, x; s >= 0;) {
                    if (--s < 0 || (u != (x = w[s][1].parent) && u)) {
                        for (v = s; ++v <= r;) {
                            y = w[v];
                            y[0].apply(y[1], t)
                        }
                        r = s
                    }
                    u = x
                }
            }
        }

        function o(s, B, r, A) {
            var v = m[s];
            if (v && v.length) {
                var x = r && r.down && B.bindLevel != null;
                if (x) {
                    h()
                }
                var w = [], z = r && r.reverse ? [] : null, y = new c(s, x ? d(s, v, B) : q(s, v), w, B, z);
                w.push(y);
                for (var u = 2, t = A.length; u < t;) {
                    w.push(A[u++])
                }
                if (r && r.timeout >= 0) {
                    setTimeout(function () {
                        y.fire();
                        p(z, w);
                        zk._zsyncFns(s, B)
                    }, r.timeout)
                } else {
                    y.fire();
                    p(z, w);
                    zk._zsyncFns(s, B)
                }
            } else {
                zk._zsyncFns(s, B)
            }
        }

        function j(s, u) {
            if (s) {
                if (jq.isArray(u)) {
                    var r = false;
                    for (var t = s.length; t > 0; t--) {
                        if (jq.isArray(s[t]) && s[t].$equals(u)) {
                            r = true;
                            break
                        }
                    }
                    return r
                }
                return s.$contains(u)
            }
            return false
        }

        return {
            listen: function (v) {
                for (var u in v) {
                    var t = m[u], w = v[u], y = a(w), x = [y, [w]];
                    if (t) {
                        var r = y.bindLevel;
                        if (r != null) {
                            for (var s = t.length; ;) {
                                if (--s < 0) {
                                    t.unshift(x);
                                    break
                                }
                                if (t[s][0] == y) {
                                    if (!j(t[s][1], w)) {
                                        t[s][1].push(w)
                                    }
                                    break
                                }
                                if (r >= t[s][0].bindLevel) {
                                    t.splice(s + 1, 0, x);
                                    break
                                }
                            }
                        } else {
                            for (var s = t.length; ;) {
                                if (--s < 0) {
                                    t.push(x);
                                    break
                                }
                                if (t[s][0] == y) {
                                    t[s][1].push(w);
                                    break
                                }
                            }
                        }
                    } else {
                        m[u] = [x]
                    }
                }
            }, unlisten: function (u) {
                for (var t in u) {
                    var s = m[t];
                    if (s) {
                        var v = u[t], w = a(v);
                        for (var r = s.length; r--;) {
                            if (s[r][0] == w) {
                                s[r][1].$remove(v);
                                if (!s[r][1].length) {
                                    s.splice(r, 1)
                                }
                                break
                            }
                        }
                    }
                }
            }, unlistenAll: function (r) {
                delete m[r]
            }, fire: function (r, t, s) {
                o(r, t, s, arguments)
            }, fireDown: function (r, t, s) {
                o(r, t, zk.copy(s, {down: true}), arguments)
            }, onBindLevelMove: function () {
                f = true
            }
        }
    })();
    zWatch.listen({onBindLevelMove: zWatch});
    (function () {
        var a = [], h = jq.fx.stop;
        jq.fx.stop = function () {
            h();
            for (var i; i = a.shift();) {
                i()
            }
        };
        function g(k, j) {
            var i = zk._anique[k];
            if (!i) {
                i = zk._anique[k] = []
            }
            i.push(j)
        }

        function e(l) {
            var i = zk._anique[l];
            if (i) {
                var k = i.length;
                while (k) {
                    var j = i.shift();
                    if (jq(j.el).is(":animated")) {
                        i.unshift(j);
                        break
                    }
                    zk(j.el)[j.anima](j.wgt, j.opts);
                    k--
                }
                if (!k) {
                    delete zk._anique[l]
                }
            }
        }

        function c(j, m) {
            var l = j.jq;
            for (var k = m.length; k--;) {
                if (m[k] !== null) {
                    l.data("zk.cache." + m[k], l[0].style[m[k]])
                }
            }
            return j
        }

        function d(j, m) {
            var l = j.jq;
            for (var k = m.length; k--;) {
                if (m[k] !== null) {
                    l.css(m[k], l.data("zk.cache." + m[k]))
                }
            }
            return j
        }

        function b(i, l, j, k) {
            if (i.jq.is(":animated")) {
                g(l.uuid, {el: i.jq[0], wgt: l, opts: j, anima: k});
                return true
            }
            return false
        }

        function f(i, j) {
            var k = i.jq.css("position");
            if (!k || k == "static") {
                j.position = "relative"
            }
            return i
        }

        zk.copy(zk, {
            animating: function () {
                return !!jq.timers.length
            }, afterAnimate: function (j, i) {
                if (zk.animating()) {
                    a.push(j)
                } else {
                    if (i < 0) {
                        j();
                        return true
                    } else {
                        setTimeout(j, i)
                    }
                }
            }, _anique: {}
        });
        zk.copy(zjq.prototype, {
            getAnimationSpeed: function (i) {
                var k = jq(this.$().$n()).data("animationspeed"), j = $.fx.speeds;
                if (typeof k === "string") {
                    if (j[k]) {
                        return j[k]
                    } else {
                        k = parseInt(k)
                    }
                }
                return typeof k === "number" && !isNaN(k) ? k + 1 : (i || j._default)
            }, slideDown: function (n, k) {
                if (b(this, n, k, "slideDown")) {
                    return this
                }
                var i = k ? k.anchor || "t" : "t", o = ["top", "left", "height", "width", "overflow", "position"], l = {}, j = {overflow: "hidden"}, m = this.dimension();
                k = k || {};
                f(c(this, o), j);
                switch (i) {
                    case"t":
                        j.height = "0";
                        l.height = jq.px0(m.height);
                        break;
                    case"b":
                        j.height = "0";
                        j.top = jq.px(m.top + m.height);
                        l.height = jq.px0(m.height);
                        l.top = jq.px(m.top);
                        break;
                    case"l":
                        j.width = "0";
                        l.width = jq.px0(m.width);
                        break;
                    case"r":
                        j.width = "0";
                        j.left = jq.px(m.left + m.width);
                        l.width = jq.px0(m.width);
                        l.left = jq.px(m.left);
                        break
                }
                return this.defaultAnimaOpts(n, k, o, true).jq.css(j).show().animate(l, {
                    queue: false,
                    easing: k.easing,
                    duration: this.getAnimationSpeed(k.duration || 250),
                    complete: k.afterAnima
                })
            }, slideUp: function (n, k) {
                if (b(this, n, k, "slideUp")) {
                    return this
                }
                var i = k ? k.anchor || "t" : "t", o = ["top", "left", "height", "width", "overflow", "position"], l = {}, j = {overflow: "hidden"}, m = this.dimension();
                k = k || {};
                f(c(this, o), j);
                switch (i) {
                    case"t":
                        l.height = "hide";
                        break;
                    case"b":
                        j.height = jq.px0(m.height);
                        l.height = "hide";
                        l.top = jq.px(m.top + m.height);
                        break;
                    case"l":
                        l.width = "hide";
                        break;
                    case"r":
                        j.width = jq.px0(m.width);
                        l.width = "hide";
                        l.left = jq.px(m.left + m.width);
                        break
                }
                return this.defaultAnimaOpts(n, k, o).jq.css(j).animate(l, {
                    queue: false,
                    easing: k.easing,
                    duration: this.getAnimationSpeed(k.duration || 250),
                    complete: k.afterAnima
                })
            }, slideOut: function (n, k) {
                if (b(this, n, k, "slideOut")) {
                    return this
                }
                var i = k ? k.anchor || "t" : "t", o = ["top", "left", "position"], l = {}, j = {}, m = this.dimension();
                k = k || {};
                f(c(this, o), j);
                switch (i) {
                    case"t":
                        l.top = jq.px(m.top - m.height);
                        break;
                    case"b":
                        l.top = jq.px(m.top + m.height);
                        break;
                    case"l":
                        l.left = jq.px(m.left - m.width);
                        break;
                    case"r":
                        l.left = jq.px(m.left + m.width);
                        break
                }
                return this.defaultAnimaOpts(n, k, o).jq.css(j).animate(l, {
                    queue: false,
                    easing: k.easing,
                    duration: this.getAnimationSpeed(k.duration || 350),
                    complete: k.afterAnima
                })
            }, slideIn: function (n, k) {
                if (b(this, n, k, "slideIn")) {
                    return this
                }
                var i = k ? k.anchor || "t" : "t", o = ["top", "left", "position"], l = {}, j = {}, m = this.dimension();
                k = k || {};
                f(c(this, o), j);
                switch (i) {
                    case"t":
                        j.top = jq.px(m.top - m.height);
                        l.top = jq.px(m.top);
                        break;
                    case"b":
                        j.top = jq.px(m.top + m.height);
                        l.top = jq.px(m.top);
                        break;
                    case"l":
                        j.left = jq.px(m.left - m.width);
                        l.left = jq.px(m.left);
                        break;
                    case"r":
                        j.left = jq.px(m.left + m.width);
                        l.left = jq.px(m.left);
                        break
                }
                return this.defaultAnimaOpts(n, k, o, true).jq.css(j).show().animate(l, {
                    queue: false,
                    easing: k.easing,
                    duration: this.getAnimationSpeed(k.duration || 350),
                    complete: k.afterAnima
                })
            }, _updateProp: function (i) {
                c(this, i)
            }, defaultAnimaOpts: function (m, k, n, l) {
                var i = this;
                jq.timers.push(function () {
                    if (!l) {
                        zWatch.fireDown("onHide", m)
                    }
                    if (k.beforeAnima) {
                        k.beforeAnima.call(m, i)
                    }
                });
                var j = k.afterAnima;
                k.afterAnima = function () {
                    if (n) {
                        d(i, n)
                    }
                    if (l) {
                        if (zk.ie == 8 || zk.ie == 10) {
                            zk(i.jq[0]).redoCSS()
                        }
                        zUtl.fireShown(m)
                    } else {
                        i.jq.hide()
                    }
                    if (j) {
                        j.call(m, i.jq.context)
                    }
                    m.afterAnima_(l);
                    setTimeout(function () {
                        e(m.uuid)
                    })
                };
                return this
            }
        })
    })();
    (function () {
        var q = [], o = {}, l, c, n, a, k, h, g;

        function f(s, t, r) {
            l = setTimeout(function () {
                l = null;
                if (!(zk.ie < 11) || !n || n.node == s.node) {
                    n = s
                }
            }, s.opts.delay);
            a = r
        }

        function b() {
            n = null;
            if (k) {
                setTimeout(function () {
                    k = null
                }, 0)
            }
        }

        function j(t) {
            if (!n || n.dead) {
                return
            }
            var r = jq.Event.zk(t), s = [r.pageX, r.pageY];
            if (h && h[0] == s[0] && h[1] == s[1]) {
                return
            }
            h = s;
            n._updateDrag(s, r);
            t.stop()
        }

        function m(t) {
            if (l) {
                clearTimeout(l);
                l = null
            }
            var r = jq.Event.zk(t), s = n;
            if (!s) {
                if (r.which == 1) {
                    k = null
                }
                return
            }
            h = n = null;
            s._endDrag(r);
            if (r.domStopped) {
                t.stop()
            }
            if (s._suicide) {
                s._suicide = false;
                s.destroy()
            }
        }

        function e(r) {
            if (n) {
                n._keypress(r)
            }
        }

        function i(s) {
            var r = s.node;
            r._$opacity = jq(r).css("opacity");
            o[r] = true;
            new zk.eff.Opacity(r, {duration: 0.2, from: r._$opacity, to: 0.7})
        }

        function d(t) {
            var s = t.node, r = typeof s._$opacity == "number" ? s._$opacity : 1;
            new zk.eff.Opacity(s, {
                duration: 0.2,
                from: 0.7,
                to: r,
                queue: {scope: "_draggable", position: "end"},
                afterFinish: function () {
                    delete o[s]
                }
            })
        }

        function p(w, x) {
            var t, s;
            if ((t = x[0]) || (s = x[1])) {
                var v = w.node, r = v.style.position, u = Math.sqrt(Math.abs(s ^ 2) + Math.abs(t ^ 2)) * 0.02;
                new zk.eff.Move(v, {
                    x: -t,
                    y: -s,
                    duration: u,
                    queue: {scope: "_draggable", position: "end"},
                    afterFinish: function () {
                        v.style.position = r
                    }
                })
            }
        }

        zk.Draggable = zk.$extends(zk.Object, {
            $init: function (t, s, r) {
                if (!c) {
                    jq(c = jq.newStackup(null, "z_ddstkup")).hide();
                    document.body.appendChild(c)
                }
                this.control = t;
                this.node = s = s ? jq(s, zk)[0] : t.node || (t.$n ? t.$n() : null);
                if (!s) {
                    throw"Handle required for " + t
                }
                r = zk.$default(r, {
                    scrollSensitivity: 20,
                    scrollSpeed: 15,
                    initSensitivity: 3,
                    delay: 0,
                    fireOnMove: true
                });
                if (r.reverteffect == null) {
                    r.reverteffect = p
                }
                if (r.endeffect == null) {
                    r.endeffect = d;
                    if (r.starteffect == null) {
                        r.starteffect = i
                    }
                }
                if (r.handle) {
                    this.handle = jq(r.handle, zk)[0]
                }
                if (!this.handle) {
                    this.handle = s
                }
                if (r.scroll && !r.scroll.scrollTo && !r.scroll.outerHTML) {
                    r.scroll = jq(r.scroll, zk)[0];
                    this._isScrollChild = zUtl.isAncestor(r.scroll, s)
                }
                this.delta = this._currentDelta();
                this.opts = r;
                this.dragging = false;
                jq(this.handle).bind("zmousedown", this.proxy(this._mousedown));
                if (q.length == 0) {
                    jq(document).bind("zmouseup", m).bind("zmousemove", j).keypress(e)
                }
                q.push(this)
            }, destroy: function () {
                if (this.dragging) {
                    this._suicide = true;
                    return
                }
                jq(this.handle).unbind("zmousedown", this.proxy(this._mousedown));
                q.$remove(this);
                if (q.length == 0) {
                    jq(document).unbind("zmouseup", m).unbind("zmousemove", j).unbind("keypress", e)
                }
                if (n == this) {
                    n = null
                }
                this.node = this.control = this.handle = null;
                this.dead = true
            }, _currentDelta: function () {
                var r = jq(this.node);
                return [zk.parseInt(r.css("left")), zk.parseInt(r.css("top"))]
            }, _startDrag: function (r) {
                zWatch.fire("onStartDrag", this, r);
                zk(document.body).disableSelection();
                jq.clearSelection();
                if (this.opts.overlay) {
                    var v = document.createElement("div");
                    document.body.appendChild(v);
                    v.className = "z-dd-stackup";
                    zk(v).disableSelection();
                    var u = (this.stackup = v).style;
                    u.width = jq.px0(jq(document).width());
                    u.height = jq.px0(jq(document).height())
                }
                zk.dragging = this.dragging = true;
                var x = this.node, w;
                if (w = this.opts.ghosting) {
                    if (typeof w == "function") {
                        this.delta = this._currentDelta();
                        this.orgnode = this.node;
                        var s = zk(this.node), y = s.cmOffset();
                        this.z_scrl = s.scrollOffset();
                        this.z_scrl[0] -= jq.innerX();
                        this.z_scrl[1] -= jq.innerY();
                        y[0] -= this.z_scrl[0];
                        y[1] -= this.z_scrl[1];
                        x = this.node = w(this, y, r)
                    } else {
                        this._clone = jq(x).clone()[0];
                        this.z_orgpos = x.style.position;
                        if (this.z_orgpos != "absolute") {
                            jq(x).absolutize()
                        }
                        x.parentNode.insertBefore(this._clone, x)
                    }
                }
                if (this.opts.stackup) {
                    if (zk(c).isVisible()) {
                        this._stackup = jq.newStackup(x, x.id + "-ddstk")
                    } else {
                        this._stackup = c;
                        this._syncStackup();
                        x.parentNode.insertBefore(c, x)
                    }
                }
                this.orgZ = -1;
                if (w = this.opts.zIndex) {
                    if (typeof w == "function") {
                        w = w(this)
                    }
                    if (w >= 0) {
                        this.orgZ = zk.parseInt(jq(x).css("z-index"));
                        x.style.zIndex = w
                    }
                }
                if (this.opts.scroll) {
                    if (this.opts.scroll == window) {
                        var t = this._getWndScroll(this.opts.scroll);
                        this.orgScrlLeft = t.left;
                        this.orgScrlTop = t.top
                    } else {
                        this.orgScrlLeft = this.opts.scroll.scrollLeft;
                        this.orgScrlTop = this.opts.scroll.scrollTop
                    }
                }
                if (this.opts.starteffect) {
                    this.opts.starteffect(this, r)
                }
            }, _syncStackup: function () {
                if (this._stackup) {
                    var s = this.node, r = this._stackup.style;
                    r.display = "block";
                    r.left = s.offsetLeft + "px";
                    r.top = s.offsetTop + "px";
                    r.width = s.offsetWidth + "px";
                    r.height = s.offsetHeight + "px"
                }
            }, _updateDrag: function (w, r) {
                if (!this.dragging) {
                    var s = this.opts.initSensitivity;
                    if (s && w[0] <= a[0] + s && w[0] >= a[0] - s && w[1] <= a[1] + s && w[1] >= a[1] - s) {
                        return
                    }
                    this._startDrag(r)
                }
                this._updateInnerOfs();
                this._draw(w, r);
                if (this.opts.change) {
                    this.opts.change(this, w, r)
                }
                this._syncStackup();
                if (this.opts.scroll) {
                    this._stopScrolling();
                    var u;
                    if (this.opts.scroll == window) {
                        var x = this._getWndScroll(this.opts.scroll);
                        u = [x.left, x.top, x.left + x.width, x.top + x.height]
                    } else {
                        u = zk(this.opts.scroll).viewportOffset();
                        u[0] += this.opts.scroll.scrollLeft + this._innerOfs[0];
                        u[1] += this.opts.scroll.scrollTop + this._innerOfs[1];
                        u.push(u[0] + this.opts.scroll.offsetWidth);
                        u.push(u[1] + this.opts.scroll.offsetHeight)
                    }
                    var t = [0, 0], s = this.opts.scrollSensitivity;
                    if (w[0] < (u[0] + s)) {
                        t[0] = w[0] - (u[0] + s)
                    }
                    if (w[1] < (u[1] + s)) {
                        t[1] = w[1] - (u[1] + s)
                    }
                    if (w[0] > (u[2] - s)) {
                        t[0] = w[0] - (u[2] - s)
                    }
                    if (w[1] > (u[3] - s)) {
                        t[1] = w[1] - (u[3] - s)
                    }
                    this._startScrolling(t)
                }
                if (navigator.appVersion.indexOf("AppleWebKit") > 0) {
                    window.scrollBy(0, 0)
                }
                r.stop()
            }, _finishDrag: function (w, x) {
                this.dragging = false;
                if (this.stackup) {
                    jq(this.stackup).remove();
                    delete this.stackup
                }
                zk(document.body).enableSelection();
                setTimeout(jq.clearSelection, 0);
                var t = this._stackup;
                if (t) {
                    if (t == c) {
                        jq(t).hide()
                    } else {
                        jq(t).remove()
                    }
                    delete this._stackup
                }
                var s = this.node;
                if (this.opts.ghosting) {
                    if (typeof this.opts.ghosting == "function") {
                        if (this.opts.endghosting) {
                            this.opts.endghosting(this, this.orgnode)
                        }
                        if (s != this.orgnode) {
                            jq(s).remove();
                            this.node = this.orgnode
                        }
                        delete this.orgnode
                    } else {
                        if (this.z_orgpos != "absolute") {
                            zk(this.node).relativize();
                            s.style.position = this.z_orgpos
                        }
                        jq(this._clone).remove();
                        this._clone = null
                    }
                }
                var A = [w.pageX, w.pageY];
                var v = this.opts.revert;
                if (v && typeof v == "function") {
                    v = v(this, A, w)
                }
                var u = this._currentDelta(), r = this.delta;
                if (v && this.opts.reverteffect) {
                    this.opts.reverteffect(this, [u[0] - this.delta[0], u[1] - this.delta[1]])
                } else {
                    this.delta = u
                }
                if (this.orgZ != -1) {
                    s.style.zIndex = this.orgZ
                }
                if (this.opts.endeffect) {
                    this.opts.endeffect(this, w)
                }
                var z = this.control;
                if (this.opts.fireOnMove && zk.Widget.isInstance(z)) {
                    if (u[0] != r[0] || u[1] != r[1]) {
                        z.fire("onMove", zk.copy({left: s.style.left, top: s.style.top}, w.data), {ignorable: true})
                    }
                }
                b(this);
                var y = this;
                setTimeout(function () {
                    zk.dragging = false;
                    zWatch.fire("onEndDrag", y, w)
                }, zk.ios ? 500 : 0)
            }, _mousedown: function (y) {
                var t = this.node, r = jq.Event.zk(y), x = y.target;
                if (l || o[t] || r.which != 1 || (zk.webkit && jq.nodeName(x, "select")) || (zk(x).isInput() && this.control != zk.Widget.$(x))) {
                    return
                }
                var w = [r.pageX, r.pageY];
                if (this.opts.ignoredrag && this.opts.ignoredrag(this, w, r)) {
                    if (r.domStopped) {
                        y.stop()
                    }
                    return
                }
                var z = zk(t).cmOffset(), u = [w[0] - z[0], w[1] - z[1]], s;
                if ((s = t.clientWidth) && u[0] > s && t.offsetWidth > s + 3 || (s = t.clientHeight) && u[1] > s && t.offsetHeight > s + 3) {
                    return
                }
                this.offset = u;
                f(this, y, w);
                if ((!(zk.ie < 11) || zk.ie8) && !zk.mobile) {
                    if (!zk.Draggable.ignoreStop(x)) {
                        y.stop();
                        zWatch.fire("onFloatUp", r.target)
                    }
                    k = jq.Event.zk(y, this.control)
                }
            }, _keypress: function (r) {
                if (r.keyCode == 27) {
                    this._finishDrag(jq.Event.zk(r), false);
                    r.stop()
                }
            }, _endDrag: function (r) {
                if (this.dragging) {
                    this._stopScrolling();
                    this._finishDrag(r, true);
                    r.stop()
                } else {
                    b(this)
                }
            }, _draw: function (C, E) {
                var x = this.node, w = zk(x), A = w.cmOffset(), s = this.opts;
                if (s.ghosting) {
                    var t = w.scrollOffset();
                    A[0] += t[0] - this._innerOfs[0];
                    A[1] += t[1] - this._innerOfs[1]
                }
                var z = this._currentDelta(), B = s.scroll;
                A[0] -= z[0];
                A[1] -= z[1];
                if (B && (B != window && this._isScrollChild)) {
                    A[0] -= B.scrollLeft - this.orgScrlLeft;
                    A[1] -= B.scrollTop - this.orgScrlTop
                }
                var v = [C[0] - A[0] - this.offset[0], C[1] - A[1] - this.offset[1]], y = s.snap;
                if (y) {
                    if (typeof y == "function") {
                        v = y(this, v)
                    } else {
                        if (y instanceof Array) {
                            v = [Math.round(v[0] / y[0]) * y[0], Math.round(v[1] / y[1]) * y[1]]
                        } else {
                            v = [Math.round(v[0] / y) * y, Math.round(v[1] / y) * y]
                        }
                    }
                }
                if (this.z_scrl) {
                    v[0] -= this.z_scrl[0];
                    v[1] -= this.z_scrl[1]
                }
                var u = x.style;
                if (typeof s.draw == "function") {
                    s.draw(this, this.snap_(v, s), E)
                } else {
                    if (typeof s.constraint == "function") {
                        var D = s.constraint(this, v, E);
                        if (D) {
                            v = D
                        }
                        v = this.snap_(v, s);
                        u.left = jq.px(v[0]);
                        u.top = jq.px(v[1])
                    } else {
                        v = this.snap_(v, s);
                        if ((!s.constraint) || (s.constraint == "horizontal")) {
                            u.left = jq.px(v[0])
                        }
                        if ((!s.constraint) || (s.constraint == "vertical")) {
                            u.top = jq.px(v[1])
                        }
                    }
                }
                if (u.visibility == "hidden") {
                    u.visibility = ""
                }
            }, _stopScrolling: function () {
                if (this.scrollInterval) {
                    clearInterval(this.scrollInterval);
                    this.scrollInterval = null;
                    g = null
                }
            }, _startScrolling: function (r) {
                if (r[0] || r[1]) {
                    this.scrollSpeed = [r[0] * this.opts.scrollSpeed, r[1] * this.opts.scrollSpeed];
                    this.lastScrolled = new Date();
                    this.scrollInterval = setInterval(this.proxy(this._scroll), 10)
                }
            }, _scroll: function () {
                var s = new Date(), w = s - this.lastScrolled;
                this.lastScrolled = s;
                if (this.opts.scroll == window) {
                    if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
                        var v = this._getWndScroll(this.opts.scroll), u = w / 1000;
                        this.opts.scroll.scrollTo(v.left + u * this.scrollSpeed[0], v.top + u * this.scrollSpeed[1])
                    }
                } else {
                    this.opts.scroll.scrollLeft += this.scrollSpeed[0] * w / 1000;
                    this.opts.scroll.scrollTop += this.scrollSpeed[1] * w / 1000
                }
                this._updateInnerOfs();
                if (this._isScrollChild) {
                    g = g || h;
                    g[0] += this.scrollSpeed[0] * w / 1000;
                    g[1] += this.scrollSpeed[1] * w / 1000;
                    if (g[0] < 0) {
                        g[0] = 0
                    }
                    if (g[1] < 0) {
                        g[1] = 0
                    }
                    this._draw(g)
                }
                if (this.opts.change) {
                    var t = window.event ? jq.event.fix(window.event) : null, r = t ? jq.Event.zk(t) : null;
                    this.opts.change(this, r ? [r.pageX, r.pageY] : h, r)
                }
            }, _updateInnerOfs: function () {
                this._innerOfs = [jq.innerX(), jq.innerY()]
            }, _getWndScroll: function (t) {
                var u, s, r, v, x = t.document, y = x.documentElement;
                if (y && y.scrollTop) {
                    u = y.scrollTop;
                    s = y.scrollLeft
                } else {
                    if (t.document.body) {
                        u = x.body.scrollTop;
                        s = x.body.scrollLeft
                    }
                }
                if (t.innerWidth) {
                    r = t.innerWidth;
                    v = t.innerHeight
                } else {
                    if (y && y.clientWidth) {
                        r = y.clientWidth;
                        v = y.clientHeight
                    } else {
                        r = x.body.offsetWidth;
                        v = x.body.offsetHeight
                    }
                }
                return {top: u, left: s, width: r, height: v}
            }, snap_: function (s, r) {
                if (!r.snap && s[1] < 0) {
                    s[1] = 0
                }
                return s
            }
        }, {
            ignoreMouseUp: function () {
                return zk.dragging ? true : k
            }, ignoreClick: function () {
                return zk.dragging
            }, ignoreStop: function (r) {
                return zk(r).isInput() || ((zk.ie > 8 || zk.chrome || zk.opera) && jq.nodeName(r, "select")) || jq.nodeName(r, "span") || jq.nodeName(r, "a") || jq.nodeName(r, "option")
            }
        })
    })();
    (function () {
        var b, c;
        zk.eff = {
            shallStackup: function () {
                return c
            }, _skuOpts: function (d) {
                return zk.$default(d, b || (b = {stackup: zk.eff.shallStackup()}))
            }, _onVParent: function (d, e) {
                if (e && (sdw = e.shadow) && (stackup = sdw.stackup)) {
                    var f = jq(stackup);
                    if (f.parent()[0] != document.body) {
                    }
                    f.insertBefore(sdw.node)
                }
            }
        };
        zk.eff.Shadow = zk.$extends(zk.Object, {
            $init: function (d, e) {
                this.wgt = zk.Widget.$(d.id);
                this.opts = zk.eff._skuOpts(e);
                this.node = d;
                zWatch.listen({onVParent: [this.node, zk.eff._onVParent]})
            }, destroy: function () {
                jq(this.stackup).remove();
                jq(this.node).removeClass(this.wgt.getZclass() + "-shadow");
                this.wgt = this.node = this.stackup = null;
                zWatch.unlisten({onVParent: [this.node, zk.eff._onVParent]})
            }, hide: function () {
                jq(this.stackup).hide();
                jq(this.node).removeClass(this.wgt.getZclass() + "-shadow")
            }, sync: function () {
                var f = this.node, e = jq(f);
                if (!f || !e.zk.isVisible(true)) {
                    if (this.opts.stackup && f) {
                        if (!this.stackup) {
                            this.stackup = jq.newStackup(f, f.id + "-sdwstk", f)
                        }
                    }
                    this.hide();
                    return false
                }
                e.addClass(this.wgt.getZclass() + "-shadow");
                var d = this.opts, g = f.offsetLeft, n = f.offsetTop, k = f.offsetWidth, i = f.offsetHeight, j = this.stackup;
                if (d.stackup) {
                    if (!j) {
                        j = this.stackup = jq.newStackup(f, f.id + "-sdwstk", f)
                    }
                    var m = j.style;
                    m.left = jq.px(g);
                    m.top = jq.px(n);
                    m.width = jq.px0(k);
                    m.height = jq.px0(i);
                    m.zIndex = zk.parseInt(e.css("zIndex"));
                    m.display = "block"
                }
                return true
            }, getBottomElement: function () {
                return this.stackup
            }
        });
        function a() {
            var f = this.mask, d = f.style;
            if (d.display != "none") {
                var e = zk(f).toStyleOffset(jq.innerX(), jq.innerY());
                d.left = jq.px(e[0]);
                d.top = jq.px(e[1]);
                d.width = jq.px0(jq.innerWidth());
                d.height = jq.px0(jq.innerHeight());
                if (f = this.stackup) {
                    zk.set(f.style, d, ["left", "top", "width", "height"])
                }
            }
        }

        zk.eff.FullMask = zk.$extends(zk.Object, {
            $init: function (h) {
                h = zk.eff._skuOpts(h);
                var e = this.mask = jq(h.mask || [], zk)[0];
                if (this.mask) {
                    if (h.anchor) {
                        h.anchor.parentNode.insertBefore(e, h.anchor)
                    }
                    if (h.id) {
                        e.id = h.id
                    }
                    if (h.zIndex != null) {
                        e.style.zIndex = h.zIndex
                    }
                    if (h.visible == false) {
                        e.style.display = "none"
                    }
                } else {
                    var d = h.id || "z_mask", g = '<div id="' + d + '" class="z-modal-mask"';
                    if (h.zIndex != null || h.visible == false) {
                        g += ' style="';
                        if (h.zIndex != null) {
                            g += "z-index:" + h.zIndex
                        }
                        if (h.visible == false) {
                            g += ";display:none"
                        }
                        g += '"'
                    }
                    g += "></div>";
                    if (h.anchor) {
                        jq(h.anchor, zk).before(g)
                    } else {
                        jq(document.body).append(g)
                    }
                    e = this.mask = jq(d, zk)[0]
                }
                if (h.stackup) {
                    this.stackup = jq.newStackup(e, e.id + "-mkstk")
                }
                a.call(this);
                var i;
                jq(e).click(jq.Event.stop);
                jq(window).resize(i = this.proxy(a)).scroll(i)
            }, destroy: function () {
                var d = this.mask, e;
                jq(d).unbind("click", jq.Event.stop).remove();
                jq(window).unbind("resize", e = this.proxy(a)).unbind("scroll", e);
                jq(this.stackup).remove();
                this.mask = this.stackup = null
            }, hide: function () {
                this.mask.style.display = "none";
                if (this.stackup) {
                    this.stackup.style.display = "none"
                }
            }, sync: function (e) {
                if (!zk(e).isVisible(true)) {
                    this.hide();
                    return
                }
                if (this.mask.nextSibling != e) {
                    var f = e.parentNode;
                    f.insertBefore(this.mask, e);
                    if (this.stackup) {
                        f.insertBefore(this.stackup, this.mask)
                    }
                }
                var d = this.mask.style;
                d.display = "block";
                d.zIndex = e.style.zIndex;
                a.call(this, true);
                if (this.stackup) {
                    d = this.stackup.style;
                    d.display = "block";
                    d.zIndex = e.style.zIndex
                }
            }
        });
        zk.eff.Mask = zk.$extends(zk.Object, {
            $init: function (d) {
                d = d || {};
                var m = zk(d.anchor);
                if (!m.jq.length || !m.isRealVisible(true)) {
                    return
                }
                this._opts = d;
                var i = d.id || "z_applymask", j = jq(i, zk)[0];
                if (j) {
                    return this
                }
                var f = d.message || ((window.msgzk ? msgzk.LOADING : "Loading") + "..."), e = document.createElement("div");
                document.body.appendChild(e);
                var l = d.offset || m.revisedOffset(), k = d.width || m.offsetWidth(), g = d.height || m.offsetHeight();
                jq(e).replaceWith('<div id="' + i + '" style="display:none"><div class="z-apply-mask" style="display:block;top:' + l[1] + "px;left:" + l[0] + "px;width:" + k + "px;height:" + g + 'px;"></div><div id="' + i + '-z_loading" class="z-apply-loading"><div class="z-apply-loading-indicator"><span class="z-apply-loading-icon"></span> ' + f + "</div></div></div>");
                this.mask = jq(i, zk)[0];
                this.wgt = zk.Widget.$(d.anchor);
                if (this.wgt) {
                    zWatch.listen({onHide: [this.wgt, this.onHide], onSize: [this.wgt, this.onSize]});
                    this.wgt.__mask = this
                }
                this.sync()
            }, hide: function () {
                this.mask.style.display = "none"
            }, onHide: function () {
                this.__mask.hide()
            }, sync: function () {
                var t = zk(this._opts.anchor);
                if (!t.isVisible(true)) {
                    this.hide();
                    return
                }
                var d = this._opts, q = this.mask.firstChild.style, s = d.offset || t.revisedOffset(), o = d.width || t.offsetWidth(), i = d.height || t.offsetHeight();
                q.top = jq.px(s[1]);
                q.left = jq.px(s[0]);
                q.width = jq.px(o);
                q.height = jq.px(i);
                var k = document.body, j = k.parentNode, m = t.jq, r = "auto", l, g;
                for (var p = m.offsetParent(); p[0] != k && p[0] != j; p = p.offsetParent()) {
                    if ((l = p.css("z-index")) && l != "auto") {
                        r = zk.parseInt(l);
                        m = p[0]
                    }
                }
                for (var e = m[0]; e && e.style; e = e.parentNode) {
                    if (e.tagName == "HTML" && zk.webkit) {
                        e.style.zIndex = "auto"
                    }
                    var l = e.style.zIndex || jq(e).css("z-index");
                    if (l && l != "auto") {
                        g = zk.parseInt(l);
                        if (r == "auto" || g > r) {
                            r = g
                        }
                    }
                }
                if (r != "auto") {
                    q.zIndex = r;
                    this.mask.lastChild.style.zIndex = r
                }
                this.mask.style.display = "block";
                var f = jq(this.mask.id + "-z_loading", zk)[0];
                if (f) {
                    if (f.offsetHeight > i) {
                        f.style.height = jq.px0(zk(f).revisedHeight(i))
                    }
                    if (f.offsetWidth > o) {
                        f.style.width = jq.px0(zk(f).revisedWidth(o))
                    }
                    f.style.top = jq.px0(s[1] + ((i - f.offsetHeight) / 2));
                    f.style.left = jq.px0(s[0] + ((o - f.offsetWidth) / 2))
                }
                this.mask.style.visibility = ""
            }, onSize: function () {
                this.__mask.sync()
            }, destroy: function () {
                jq(this.mask).remove();
                if (this.wgt) {
                    zWatch.unlisten({onHide: [this.wgt, this.onHide], onSize: [this.wgt, this.onSize]});
                    delete this.wgt.__mask
                }
                this.mask = this.wgt = null
            }
        });
        zk.eff.Actions = {
            slideDown: function (e, d) {
                zk(e).slideDown(this, d)
            }, slideUp: function (e, d) {
                zk(e).slideUp(this, d)
            }, slideIn: function (e, d) {
                zk(e).slideIn(this, d)
            }, slideOut: function (e, d) {
                zk(e).slideOut(this, d)
            }
        };
        jq(function () {
            var g, i = 0, e;

            function h(j) {
                var k = j.origin;
                ++i;
                setTimeout(function () {
                    if (!--i) {
                        if (k) {
                            k = k.getTopWidget()
                        }
                        if (k != g) {
                            g = k;
                            zk._wgtutl.autohide()
                        }
                    }
                }, 120)
            }

            function f() {
                g = false;
                ++i;
                setTimeout(function () {
                    if (!--i) {
                        zk._wgtutl.autohide()
                    }
                }, 100)
            }

            c = zk.useStackup;
            if (c == "auto" || (e = c == "auto/gecko")) {
                if (zk.gecko && e) {
                    c = false
                } else {
                    e = zk.webkit || zk.opera;
                    c = !e || zk.ie
                }
            } else {
                if (c == null) {
                    c = zk.ie
                }
            }
            var d = function (j) {
                if (j == "onSize" || j == "onMove" || j == "onShow" || j == "onHide" || j == "onResponse") {
                    f()
                }
            };
            zk.override(zWatch, e = {}, {
                fire: function (j) {
                    e.fire.apply(this, arguments);
                    d(j)
                }, fireDown: function (j) {
                    e.fireDown.apply(this, arguments);
                    d(j)
                }
            });
            zWatch.listen({onFloatUp: ["", h]})
        })
    })();
    zk.BigDecimal = zk.$extends(zk.Object, {
        _precision: 0, setPrecision: (function (a) {
            return function (b) {
                this[a] = b;
                return this
            }
        })("_precision"), getPrecision: _zkf$ = function () {
            return this._precision
        }, isPrecision: _zkf$, $init: function (d) {
            d = d ? "" + d : "0";
            var c = -1;
            for (var b = 0, a = d.length; b < a; ++b) {
                var e = d.charAt(b);
                if (((e < "0" || e > "9") && e != "-" && e != "+") || (b && (e == "-" || e == "+"))) {
                    if (c < 0 && e == ".") {
                        c = b
                    } else {
                        d = d.substring(0, b);
                        break
                    }
                }
            }
            if (c >= 0) {
                d = d.substring(0, c) + d.substring(c + 1);
                this._precision = d.length - c;
                this._dot = true
            }
            this._value = d
        }, $toNumber: function () {
            var a = parseFloat(this._value), b;
            if (b = this._precision) {
                a /= Math.pow(10, b)
            }
            return a
        }, $toString: function () {
            if (this._value.length == 0) {
                return ""
            }
            var b = this._value.length - this._precision, c = "";
            if (b < 0) {
                for (var a = -b; a-- > 0;) {
                    c += "0"
                }
            }
            return this._value.substring(0, b) + (this._dot || this._precision ? "." + c + this._value.substring(b) : "")
        }, $toLocaleString: function () {
            if (this._value.length == 0) {
                return ""
            }
            var b = this._value.length - this._precision;
            if (b <= 0) {
                var c = "";
                for (var a = -b; a-- > 0;) {
                    c += "0"
                }
                return "0" + (this._precision ? zk.DECIMAL + c + this._value : "")
            }
            return this._value.substring(0, b) + (this._precision ? zk.DECIMAL + this._value.substring(b) : "")
        }
    });
    zk.Long = zk.$extends(zk.Object, {
        $init: function (d) {
            d = d ? "" + d : "0";
            var a = d.length;
            for (var b = 0; b < a; ++b) {
                var f = d.charAt(b);
                if ((f < "0" || f > "9") && (b > 0 || (f != "-" && f != "+"))) {
                    d = d.substring(0, b);
                    break
                }
            }
            if (a == 1) {
                var e = d.charAt(0);
                if (f < "0" || f > "9") {
                    d = "NaN"
                }
            }
            this._value = d
        }, scale: function (a) {
            var b = this._value || "", c = b.length;
            if (c) {
                if (a > 0) {
                    if (c > 1 || b.charAt(0) != "0") {
                        while (a-- > 0) {
                            b += "0"
                        }
                    }
                } else {
                    if (a < 0) {
                        this._value = (c += a) <= 0 ? "0" : b.substring(0, c)
                    }
                }
            }
        }, $toNumber: function () {
            return parseFloat(this._value)
        }, $toString: zkf = function () {
            return this._value
        }, $toLocaleString: zkf
    });
    (function () {
        var c = {lt: "<", gt: ">", amp: "&", quot: '"'}, f = {};
        for (var b in c) {
            f[c[b]] = b
        }
        function g(k) {
            var i = k.indexOf("//");
            if (i > 0) {
                i = k.indexOf("/", i + 2);
                if (i > 0) {
                    return k.substring(i)
                }
            }
        }

        function a(o, m) {
            o.push(m);
            for (var i = m.frames, n = 0, k = i.length; n < k; ++n) {
                a(o, i[n])
            }
        }

        function h(o) {
            var j = o, n = j, m = -1;
            for (; n && n._hflex == "min"; n = n.parent) {
                delete n._hflexsz;
                j = n;
                ++m;
                if (n.ignoreFlexSize_("w")) {
                    break
                }
            }
            var i = o, l = i, k = -1;
            for (; l && l._vflex == "min"; l = l.parent) {
                delete l._vflexsz;
                i = l;
                ++k;
                if (l.ignoreFlexSize_("h")) {
                    break
                }
            }
            return m > 0 || k > 0 ? m > k ? j : i : o
        }

        zUtl = {
            isChar: function (j, i) {
                return (i.digit && j >= "0" && j <= "9") || (i.upper && j >= "A" && j <= "Z") || (i.lower && j >= "a" && j <= "z") || (i.whitespace && (j == " " || j == "\t" || j == "\n" || j == "\r")) || i[j]
            },
            parseMap: function (r, n, j) {
                var k = {};
                if (r) {
                    var i = r.split(n || ",");
                    if (j) {
                        var m = [], u = new RegExp(j, "g"), q = "", s, l;
                        while ((s = i.shift()) !== undefined) {
                            if ((l = (q += s).match(u)) && l.length != 1) {
                                if (q) {
                                    m.push(q)
                                }
                                q = ""
                            } else {
                                q += n
                            }
                        }
                        i = m
                    }
                    for (var p = i.length; p--;) {
                        var q = i[p].trim(), o = q.indexOf("=");
                        if (o != -1) {
                            k[q.substring(0, o)] = q.substring(o + 1, q.length).trim()
                        }
                    }
                }
                return k
            },
            encodeXML: function (t, i) {
                t = t != null ? String(t) : "";
                var u = t.length, o = i && i.pre, m = o || (i && i.multiline), l = i ? i.maxlength : 0;
                if (!m && l && u > l) {
                    var r = l;
                    while (r > 0 && t.charAt(r - 1) == " ") {
                        --r
                    }
                    i.maxlength = 0;
                    return zUtl.encodeXML(t.substring(0, r) + "...", i)
                }
                var s = [], p = 0, q;
                if (m || o) {
                    for (var r = 0; r < u; ++r) {
                        var n = t.charAt(r);
                        if (q = f[n]) {
                            s.push(t.substring(p, r), "&", q, ";");
                            p = r + 1
                        } else {
                            if (m && n == "\n") {
                                s.push(t.substring(p, r), "<br/>\n");
                                p = r + 1
                            } else {
                                if (o && (n == " " || n == "\t")) {
                                    s.push(t.substring(p, r), "&nbsp;");
                                    if (n == "\t") {
                                        s.push("&nbsp;&nbsp;&nbsp;")
                                    }
                                    p = r + 1
                                }
                            }
                        }
                    }
                } else {
                    for (var r = 0; r < u; ++r) {
                        if (q = f[t.charAt(r)]) {
                            s.push(t.substring(p, r), "&", q, ";");
                            p = r + 1
                        }
                    }
                }
                if (!p) {
                    return t
                }
                if (p < u) {
                    s.push(t.substring(p))
                }
                return s.join("")
            },
            decodeXML: function (i) {
                var q = "";
                if (!i) {
                    return q
                }
                var o = 0, n = i.length;
                for (var p = 0; p < n; ++p) {
                    var s = i.charAt(p);
                    if (s == "&") {
                        var m = i.indexOf(";", p + 1);
                        if (m >= 0) {
                            var r = i.charAt(p + 1) == "#" ? String.fromCharCode(i.charAt(p + 2).toLowerCase() == "x" ? parseInt(i.substring(p + 3, m), 16) : parseInt(i.substring(p + 2, m), 10)) : c[i.substring(p + 1, m)];
                            if (r) {
                                q += i.substring(o, p) + r;
                                o = (p = m) + 1
                            }
                        }
                    }
                }
                return !o ? i : o < n ? q + i.substring(o) : q
            },
            cellps0: ' cellpadding="0" cellspacing="0" border="0"',
            img0: '<img style="height:0;width:0"/>',
            i0: '<i style="height:0;width:0"/>',
            now: jq.now,
            today: function (i) {
                var o = new Date(), m = 0, k = 0, l = 0, n = 0;
                if (typeof i == "string") {
                    var j = i.toLowerCase();
                    if (j.indexOf("h") >= 0 || j.indexOf("k") >= 0) {
                        m = o.getHours()
                    }
                    if (i.indexOf("m") >= 0) {
                        k = o.getMinutes()
                    }
                    if (i.indexOf("s") >= 0) {
                        l = o.getSeconds()
                    }
                    if (i.indexOf("S") >= 0) {
                        n = o.getMilliseconds()
                    }
                } else {
                    if (i) {
                        return o
                    }
                }
                return new Date(o.getFullYear(), o.getMonth(), o.getDate(), m, k, l, n)
            },
            isAncestor: function (i, j) {
                if (!i) {
                    return true
                }
                for (; j; j = j.getParent ? j.getParent() : j.parent) {
                    if (i == j) {
                        return true
                    }
                }
                return false
            },
            progressbox: function (z, l, D, G, i) {
                if (D && zk.Page.contained.length) {
                    for (var I = zk.Page.contained.length, H = zk.Page.contained[--I]; H; H = zk.Page.contained[--I]) {
                        if (!H._applyMask) {
                            H._applyMask = new zk.eff.Mask({id: H.uuid + "-mask", message: l, anchor: H.$n()})
                        }
                    }
                    return
                }
                if (i && i.busy) {
                    zk.busy++;
                    jq.focusOut()
                }
                var r = jq.innerX(), q = jq.innerY(), E = ' style="left:' + r + "px;top:" + q + 'px"', k = z + "-t", F = z + "-m", s = '<div id="' + z + '"';
                if (D) {
                    s += '><div id="' + F + '" class="z-modal-mask"' + E + "></div"
                }
                s += '><div id="' + k + '" class="z-loading"' + E + '><div class="z-loading-indicator"><span class="z-loading-icon"></span> ' + l + "</div></div>";
                if (G) {
                    s += '<div class="' + G + '"></div>'
                }
                jq(document.body).append(s + "</div>");
                var J = jq(z, zk), B = J[0], K = jq(k, zk), t = K[0], C = t.style;
                if (D) {
                    var w = K.css("z-index");
                    if (w == "auto") {
                        w = 1
                    }
                    B.z_mask = new zk.eff.FullMask({mask: jq(F, zk)[0], zIndex: w - 1})
                }
                if (D && K.length) {
                    C.left = jq.px((jq.innerWidth() - t.offsetWidth) / 2 + r);
                    C.top = jq.px((jq.innerHeight() - t.offsetHeight) / 2 + q)
                } else {
                    var o = zk.progPos;
                    if (o) {
                        var j, u, A = jq.innerWidth(), v = jq.innerHeight(), L = A - zk(t).offsetWidth(), p = v - zk(t).offsetHeight();
                        if (o.indexOf("mouse") >= 0) {
                            var m = zk.currentPointer;
                            j = m[0] + 10;
                            u = m[1] + 10
                        } else {
                            if (o.indexOf("left") >= 0) {
                                j = r
                            } else {
                                if (o.indexOf("right") >= 0) {
                                    j = r + L - 1
                                } else {
                                    if (o.indexOf("center") >= 0) {
                                        j = r + L / 2
                                    } else {
                                        j = 0
                                    }
                                }
                            }
                            if (o.indexOf("top") >= 0) {
                                u = q
                            } else {
                                if (o.indexOf("bottom") >= 0) {
                                    u = q + p - 1
                                } else {
                                    if (o.indexOf("center") >= 0) {
                                        u = q + p / 2
                                    } else {
                                        u = 0
                                    }
                                }
                            }
                            j = j < r ? r : j;
                            u = u < q ? q : u
                        }
                        C.left = jq.px(j);
                        C.top = jq.px(u)
                    }
                }
                J.zk.cleanVisibility()
            },
            destroyProgressbox: function (o, i) {
                if (i && i.busy && --zk.busy < 0) {
                    zk.busy = 0
                }
                var j = jq(o, zk), m;
                if (j.length) {
                    if (m = j[0].z_mask) {
                        m.destroy()
                    }
                    j.remove()
                }
                for (var l = zk.Page.contained.length, k = zk.Page.contained[--l]; k; k = zk.Page.contained[--l]) {
                    if (k._applyMask) {
                        k._applyMask.destroy();
                        k._applyMask = null
                    }
                }
            },
            go: function (m, n) {
                n = n || {};
                if (n.target) {
                    open(m, n.target)
                } else {
                    if (n.overwrite) {
                        location.replace(m ? m : location.href)
                    } else {
                        if (m) {
                            location.href = m;
                            var l = m.indexOf("#");
                            if (l < 0) {
                                return
                            }
                            var i = l >= 0 ? m.substring(0, l) : m, k = g(location.href);
                            l = k.indexOf("#");
                            if (l >= 0) {
                                k = k.substring(0, l)
                            }
                            if (k != i) {
                                return
                            }
                        }
                        location.reload()
                    }
                }
            },
            frames: function (i) {
                var j = [];
                a(j, i);
                return j
            },
            intsToString: function (m) {
                if (!m) {
                    return ""
                }
                var n = [];
                for (var l = 0, i = m.length; l < i; ++l) {
                    n.push(m[l])
                }
                return n.join()
            },
            stringToInts: function (p, i) {
                if (p == null) {
                    return null
                }
                var o = [];
                for (var m = 0; ;) {
                    var l = p.indexOf(",", m), n = (l >= 0 ? p.substring(m, l) : p.substring(m)).trim();
                    if (n.length == 0) {
                        if (l < 0) {
                            break
                        }
                        o.push(i)
                    } else {
                        o.push(zk.parseInt(n))
                    }
                    if (l < 0) {
                        break
                    }
                    m = l + 1
                }
                return o
            },
            mapToString: function (m, j, l) {
                j = j || "=";
                l = l || " ";
                var k = [];
                for (var i in m) {
                    k.push(l, i, j, m[i])
                }
                k[0] = "";
                return k.join("")
            },
            appendAttr: function (i, k, j) {
                return k || j ? " " + i + '="' + k + '"' : ""
            },
            fireSized: function (j, k) {
                if (j.desktop) {
                    if (zUtl.isImageLoading() || zk.clientinfo) {
                        var i = arguments.callee;
                        setTimeout(function () {
                            return i(j, k)
                        }, 20);
                        return
                    }
                    j = h(j);
                    if (!(k < 0)) {
                        zWatch.fireDown("beforeSize", j, null, k > 0)
                    }
                    zWatch.fireDown("onFitSize", j, {reverse: true});
                    zWatch.fireDown("onSize", j)
                }
            },
            fireShown: function (i, j) {
                zWatch.fireDown("onShow", i);
                zUtl.fireSized(i, j)
            },
            loadImage: function (i) {
                if (!e[i]) {
                    e[i] = true;
                    d(i)
                }
            },
            isImageLoading: function () {
                for (var i in e) {
                    return true
                }
                return false
            }
        };
        var e = {};

        function d(j) {
            var i = new Image(), k = function () {
                delete e[j]
            };
            i.onerror = i.onload = k;
            i.src = j
        }
    })();
    (function (r) {
        var Y = {}, R = {}, aa = [], L = 0, ag = {}, j = {onDoubleClick: "dblclick"}, h = {}, K = [], T, ae, u, M = [], e, l, i = /\"/g;

        function ac(aq) {
            var ap;
            return aq && aq.nodeType == 3 && (ap = aq.nodeValue) && !ap.trim().length
        }

        function ab(av, au, ar, aq) {
            if (typeof ar != "function") {
                if (!ar && !(ar = ag[au])) {
                    ag[au] = ar = "_do" + au.substring(2)
                }
                var at = av[ar];
                if (!at) {
                    throw"Listener " + ar + " not found in " + av.className
                }
                ar = at
            }
            var ap = j[au];
            if (!ap) {
                ap = j[au] = au.substring(2).toLowerCase()
            }
            return [ap, J(av, ar, au, aq)]
        }

        function J(av, ar, au, ap) {
            var at = av._$evproxs, aq;
            if (!at) {
                av._$evproxs = at = {}
            }
            if (ap) {
                ar.__keyword = ap
            } else {
                if (aq = at[ar]) {
                    return aq
                }
            }
            return at[ar] = p(av, ar, ap)
        }

        function p(ar, aq, ap) {
            return function (at) {
                var aw = at;
                at = jq.Event.zk(aw, ar);
                switch (aw.type) {
                    case"focus":
                        if (ar.canActivate()) {
                            zk.currentFocus = ar;
                            zWatch.fire("onFloatUp", ar, {triggerByFocus: true});
                            break
                        }
                        return;
                    case"blur":
                        if (!zk._cfByMD) {
                            zk.currentFocus = null
                        }
                        break;
                    case"click":
                    case"dblclick":
                    case"mouseup":
                        if (zk.Draggable.ignoreClick()) {
                            return
                        }
                }
                var av;
                if (ap) {
                    av = [].slice.call(arguments);
                    av.push(ap)
                } else {
                    av = arguments
                }
                var au = aq.apply(ar, av);
                if (au === r) {
                    au = at.returnValue
                }
                if (at.domStopped) {
                    aw.stop()
                }
                return aw.type == "dblclick" && au === r ? false : au
            }
        }

        function W(aq, at) {
            var ap = at.previousSibling, ar = at.nextSibling;
            if (ap) {
                ap.nextSibling = ar
            } else {
                aq.firstChild = ar
            }
            if (ar) {
                ar.previousSibling = ap
            } else {
                aq.lastChild = ap
            }
            at.nextSibling = at.previousSibling = at.parent = null;
            --aq.nChildren
        }

        function ad(at, ar) {
            var aq = ar.parent = at.parent, ap = ar.previousSibling = at.previousSibling;
            if (ap) {
                ap.nextSibling = ar
            } else {
                if (aq) {
                    aq.firstChild = ar
                }
            }
            ap = ar.nextSibling = at.nextSibling;
            if (ap) {
                ap.previousSibling = ar
            } else {
                if (aq) {
                    aq.lastChild = ar
                }
            }
        }

        function E(ap) {
            Y[ap.uuid] = ap;
            if (ap.id) {
                U(ap)
            }
        }

        function ah(ap) {
            if (ap.id) {
                k(ap)
            }
            delete Y[ap.uuid];
            ap.desktop = null;
            ap.clearCache()
        }

        function x(ap) {
            E(ap);
            if (!ap.z_rod) {
                ap.z_rod = 9
            }
            for (var aq = ap.firstChild; aq; aq = aq.nextSibling) {
                x(aq)
            }
        }

        function c(aq, ap) {
            ah(aq);
            if (!ap || aq.z_rod === 9) {
                delete aq.z_rod;
                for (var ar = aq.firstChild; ar; ar = ar.nextSibling) {
                    c(ar, true);
                    if (ar.$instanceof(zk.Native)) {
                        zAu._storeStub(ar)
                    }
                }
            }
        }

        function D(aq, ap) {
            aq.bindLevel = ap++;
            for (aq = aq.firstChild; aq; aq = aq.nextSibling) {
                D(aq, ap)
            }
        }

        function I(aq) {
            if (aq._fellows) {
                aq._fellows[aq.id] = aq
            }
            var ap = aq.parent;
            if (ap) {
                ap = ap.$o();
                if (ap) {
                    ap._fellows[aq.id] = aq
                }
            }
        }

        function t(aq) {
            if (aq._fellows) {
                delete aq._fellows[aq.id]
            }
            var ap = aq.parent;
            if (ap) {
                ap = ap.$o();
                if (ap) {
                    delete ap._fellows[aq.id]
                }
            }
        }

        function z(aq) {
            var ap = aq.parent;
            ap = ap ? ap.$o() : null;
            if (ap) {
                y(aq, ap)
            }
        }

        function y(aq, ap) {
            if (aq.id) {
                ap._fellows[aq.id] = aq
            }
            if (!aq._fellows) {
                for (aq = aq.firstChild; aq; aq = aq.nextSibling) {
                    y(aq, ap)
                }
            }
        }

        function F(aq) {
            var ap = aq.parent;
            ap = ap ? ap.$o() : null;
            if (ap) {
                w(aq, ap)
            }
        }

        function w(aq, ap) {
            if (aq.id) {
                delete ap._fellows[aq.id]
            }
            if (!aq._fellows) {
                for (aq = aq.firstChild; aq; aq = aq.nextSibling) {
                    w(aq, ap)
                }
            }
        }

        function U(aq) {
            var ap = R[aq.id];
            if (ap) {
                ap.push(aq)
            } else {
                R[aq.id] = [aq]
            }
        }

        function k(aq) {
            var ap = R[aq.id];
            if (ap) {
                ap.$remove(aq);
                if (!ap.length) {
                    delete R[aq.id]
                }
            }
        }

        function n(ap) {
            if (document.getElementById(ap.uuid)) {
                return true
            }
            for (ap = ap.firstChild; ap; ap = ap.nextSibling) {
                if (n(ap)) {
                    return true
                }
            }
        }

        function m(aq, ap) {
            if (!aq.shallIgnoreClick_(ap) && !aq.fireX(ap).stopped && ap.shallStop) {
                ap.stop();
                return false
            }
            return !ap.stopped
        }

        function v(aq, ar) {
            var ap;
            if (aq._visible && (ap = aq.actions_.hide)) {
                aq._rmAftAnm = function () {
                    jq(ar).remove()
                };
                ar.style.visibility = "";
                ap[0].call(aq, ar, ap[1])
            } else {
                jq(ar).remove()
            }
        }

        function H(ar, ap) {
            var aq;
            return ar && (aq = ar.parent) && aq.dragControl && (!ap || aq.dragControl(ar))
        }

        function G(aq) {
            var ap = zk.currentFocus;
            if (ap && zUtl.isAncestor(aq, ap)) {
                zk.currentFocus = null;
                return {focus: ap, range: af(ap)}
            }
        }

        function af(aq) {
            if (zk.ie < 11 && zk.cfrg) {
                var ap = zk.cfrg;
                delete zk.cfrg;
                return ap
            }
            return aq.getInputNode && (aq = aq.getInputNode()) && zk(aq).getSelectionRange()
        }

        function S(aq) {
            var ap;
            if (aq && (ap = aq.focus) && ap.desktop && !zk.currentFocus) {
                l = true;
                try {
                    ap.focus();
                    if (aq.range && ap.getInputNode && (ap = ap.getInputNode()) && zk(ap).isRealVisible()) {
                        zk(ap).setSelectionRange(aq.range[0], aq.range[1])
                    }
                } finally {
                    l = false
                }
            }
        }

        function am(ap) {
            if (!ap._flexListened) {
                zWatch.listen({onSize: [ap, zFlex.onSize], beforeSize: [ap, zFlex.beforeSize]});
                if (ap._hflex == "min" || ap._vflex == "min") {
                    ap.listenOnFitSize_()
                } else {
                    ap.unlistenOnFitSize_()
                }
                ap._flexListened = true
            }
        }

        function g(ap) {
            if (ap._flexListened) {
                zWatch.unlisten({onSize: [ap, zFlex.onSize], beforeSize: [ap, zFlex.beforeSize]});
                ap.unlistenOnFitSize_();
                delete ap._flexListened
            }
        }

        zk.DnD = {
            getDrop: function (aq, ar, ap) {
                var at = ap.target;
                return at ? at.getDrop_(aq.control) : null
            }, ghost: function (aq, ar, at) {
                if (at != null) {
                    jq(document.body).append('<div id="zk_ddghost" class="z-drop-ghost z-drop-disallow" style="position:absolute;top:' + ar[1] + "px;left:" + ar[0] + 'px;"><div class="z-drop-content"><span id="zk_ddghost-img" class="z-drop-icon"></span>&nbsp;' + at + "</div></div>");
                    aq._dragImg = jq("#zk_ddghost-img")[0];
                    return jq("#zk_ddghost")[0]
                }
                var ap = jq(aq.node).clone()[0];
                ap.id = "zk_ddghost";
                zk.copy(ap.style, {position: "absolute", left: ar[0] + "px", top: ar[1] + "px"});
                jq(ap).addClass("z-drag-ghost");
                document.body.appendChild(ap);
                return ap
            }
        };
        function a(aq) {
            if (aq) {
                var ap;
                if (ap = aq._lastDrop) {
                    aq._lastDrop = null;
                    ap.dropEffect_()
                }
                aq._lastDropTo = null
            }
        }

        function aj(aq, ap) {
            if (zk.ios) {
                return [aq.pageX - 50, aq.pageY - ap - 30]
            }
            return [aq.pageX + 7, aq.pageY + 5]
        }

        function s(aq, ap) {
            a(aq);
            var ar = [ap.pageX, ap.pageY], at = zk.DnD.getDrop(aq, ar, ap);
            if (at) {
                at.onDrop_(aq, ap)
            }
        }

        function C(at, aw, aq) {
            var ar;
            if (!aq || (ar = aq.domTarget) == at._lastDropTo) {
                return
            }
            var au = zk.DnD.getDrop(at, aw, aq), av = au && au == at._lastDrop;
            if (!av) {
                a(at);
                if (au) {
                    at._lastDrop = au;
                    au.dropEffect_(true);
                    av = true
                }
            }
            var ap = at._dragImg;
            if (ap) {
                if (av) {
                    jq(at.node).removeClass("z-drop-disallow").addClass("z-drop-allow");
                    jq(ap).removeClass("z-icon-times").addClass("z-icon-check")
                } else {
                    jq(at.node).removeClass("z-drop-allow").addClass("z-drop-disallow");
                    jq(ap).removeClass("z-icon-check").addClass("z-icon-times")
                }
            }
            at._lastDropTo = ar;
            if (zk.mobile) {
                zk(at.node).redoCSS()
            }
        }

        function ai(aq, ar, ap) {
            return aq.control.cloneDrag_(aq, aj(ap, jq(aq.node).height()))
        }

        function Q(aq, ap) {
            aq.control.uncloneDrag_(aq);
            aq._dragImg = null
        }

        function Z(aq, ar, ap) {
            return aj(ap, jq(aq.node).height())
        }

        function V(aq, ar, ap) {
            return aq.control.ignoreDrag_(ar, ap, aq)
        }

        function ao(ar) {
            for (var aq, ap = document.body; ar && ar != ap; ar = ar.parentNode) {
                if ((aq = ar.style) && ((aq = aq.position) == "absolute" || aq == "relative")) {
                    return ar
                }
            }
        }

        function N(ap) {
            return ap ? zk.parseInt(ap.style.zIndex) : 0
        }

        function B(aq) {
            var ar = aq.$n();
            if (ar) {
                return ar
            }
            for (var ap = aq.firstChild; ap; ap = ap.nextSibling) {
                ar = ap.getFirstNode_();
                if (ar) {
                    return ar
                }
            }
        }

        function an(ap, aq) {
            for (; aq; aq = aq.parent) {
                if (aq == ap) {
                    return true
                } else {
                    if (!aq.isVisible()) {
                        break
                    }
                }
            }
            return false
        }

        function P(aq) {
            var ar = null;
            if (document.fullscreenElement) {
                ar = ":fullscreen"
            } else {
                if (document.mozFullScreen) {
                    return 2147483648
                } else {
                    if (document.webkitIsFullScreen) {
                        ar = ":-webkit-full-screen"
                    }
                }
            }
            if (ar) {
                var ap = jq.css(jq(ar)[0], "zIndex");
                return ap == "auto" ? 2147483648 : ++ap
            }
            return aq
        }

        function al(au) {
            var at = 1800;
            at = P(at);
            for (var ar = aa.length; ar--;) {
                var ap = aa[ar].widget, aq = zk.parseInt(ap.getFloatZIndex_(aa[ar].node));
                if (aq >= at && !zUtl.isAncestor(au, ap) && ap.isVisible()) {
                    at = aq + 1
                }
            }
            return at
        }

        function b(aq, ap) {
            for (aq = aq.firstChild; aq; aq = aq.nextSibling) {
                var ar = aq.$n();
                if (ar) {
                    ap.push(ar)
                } else {
                    b(aq, ap)
                }
            }
        }

        function O(ap) {
            if (ap._z$rd) {
                delete ap._z$rd;
                ap._norenderdefer = true;
                ap.replaceHTML("#" + ap.uuid, ap.parent ? ap.parent.desktop : null, null, true);
                if (ap.parent) {
                    ap.parent.onChildRenderDefer_(ap)
                }
            }
        }

        function o(aq, ap) {
            if (e) {
                clearTimeout(e)
            }
            M.push(aq);
            e = setTimeout(f, ap)
        }

        function f() {
            e = null;
            l_out:for (var aq; aq = M.shift();) {
                if (!aq.desktop) {
                    continue
                }
                for (var ap = M.length; ap--;) {
                    if (zUtl.isAncestor(aq, M[ap])) {
                        M.splice(ap, 1)
                    } else {
                        if (zUtl.isAncestor(M[ap], aq)) {
                            continue l_out
                        }
                    }
                }
                aq.rerender(-1)
            }
        }

        function ak(au, at) {
            var ar = [];
            for (var aq = M.length; aq--;) {
                if (zUtl.isAncestor(au, M[aq])) {
                    if (!at || !at.skipped(au, M[aq])) {
                        ar = ar.concat(M.splice(aq, 1))
                    }
                }
            }
            if (!M.length && e) {
                clearTimeout(e);
                e = null
            }
            l_out2:for (var ap; ap = ar.shift();) {
                if (!ap.desktop) {
                    continue
                }
                for (var aq = ar.length; aq--;) {
                    if (zUtl.isAncestor(ap, ar[aq])) {
                        ar.splice(aq, 1)
                    } else {
                        if (zUtl.isAncestor(ar[aq], ap)) {
                            continue l_out2
                        }
                    }
                }
                ap.rerender(-1)
            }
        }

        function X(ar, aq) {
            for (var ap = M.length; ap--;) {
                if (zUtl.isAncestor(ar, M[ap])) {
                    if (!aq || !aq.skipped(ar, M[ap])) {
                        M.splice(ap, 1)
                    }
                }
            }
        }

        function q(aq, ap, at) {
            if (aq) {
                for (var ar; ar = ap.pop();) {
                    aq[ar.uuid] = at
                }
            }
            return at
        }

        var A = {
            starteffect: zk.$void,
            endeffect: s,
            change: C,
            ghosting: ai,
            endghosting: Q,
            constraint: Z,
            ignoredrag: V,
            zIndex: 88800
        };
        var d = zk.Widget = zk.$extends(zk.Object, {
            _visible: true,
            nChildren: 0,
            bindLevel: -1,
            _mold: "default",
            className: "zk.Widget",
            widgetName: "widget",
            actions_: {},
            _floating: false,
            $init: function (ap) {
                this._asaps = {};
                this._lsns = {};
                this._bklsns = {};
                this._subnodes = {};
                this.effects_ = {};
                this._subzcls = {};
                if (this.z$is) {
                    this._fellows = {}
                }
                if (ap !== zkac) {
                    this.afterInit(function () {
                        if (ap && typeof ap == "object" && !ap.$oid) {
                            for (var aq in ap) {
                                this.set(aq, ap[aq])
                            }
                        }
                        if ((zk.spaceless || this.rawId) && this.id) {
                            this.uuid = this.id
                        }
                        if (!this.uuid) {
                            this.uuid = d.nextUuid()
                        }
                    })
                }
            },
            setMold: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_mold", (function () {
                this.rerender()
            })),
            getMold: _zkf$ = function () {
                return this._mold
            },
            isMold: _zkf$,
            setStyle: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_style", (function () {
                this.updateDomStyle_()
            })),
            getStyle: _zkf$ = function () {
                return this._style
            },
            isStyle: _zkf$,
            setSclass: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_sclass", (function () {
                this.updateDomClass_()
            })),
            getSclass: _zkf$ = function () {
                return this._sclass
            },
            isSclass: _zkf$,
            setZclass: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_zclass", (function () {
                this._subzcls = {};
                this.rerender()
            })),
            getZclass: _zkf$ = function () {
                return this._zclass
            },
            isZclass: _zkf$,
            setWidth: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_width", (function (ap) {
                if (!this._nhflex) {
                    var aq = this.$n();
                    if (aq) {
                        aq.style.width = ap || ""
                    }
                }
            })),
            getWidth: _zkf$ = function () {
                return this._width
            },
            isWidth: _zkf$,
            setHeight: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_height", (function (ap) {
                if (!this._nvflex) {
                    var aq = this.$n();
                    if (aq) {
                        aq.style.height = ap || ""
                    }
                }
            })),
            getHeight: _zkf$ = function () {
                return this._height
            },
            isHeight: _zkf$,
            setLeft: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_left", (function (ap) {
                var aq = this.$n();
                if (aq) {
                    aq.style.left = ap || ""
                }
            })),
            getLeft: _zkf$ = function () {
                return this._left
            },
            isLeft: _zkf$,
            setTop: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_top", (function (ap) {
                var aq = this.$n();
                if (aq) {
                    aq.style.top = ap || ""
                }
            })),
            getTop: _zkf$ = function () {
                return this._top
            },
            isTop: _zkf$,
            setTooltiptext: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_tooltiptext", (function (ap) {
                var aq = this.$n();
                if (aq) {
                    aq.title = ap || ""
                }
            })),
            getTooltiptext: _zkf$ = function () {
                return this._tooltiptext
            },
            isTooltiptext: _zkf$,
            setDroppable: (function (ap, aq, ar) {
                return function (at, au) {
                    var av = this[ap];
                    this.__fname__ = ap.substring(1);
                    this[ap] = at = aq.apply(this, arguments);
                    if (av !== at || (au && au.force)) {
                        ar.apply(this, arguments)
                    }
                    delete this.__fname__;
                    return this
                }
            })("_droppable", (function (ap) {
                return ap && "false" != ap ? ap : null
            }), (function (ap) {
                var ar;
                if (ap && ap != "true") {
                    ar = ap.split(",");
                    for (var aq = ar.length; aq--;) {
                        if (!(ar[aq] = ar[aq].trim())) {
                            ar.splice(aq, 1)
                        }
                    }
                }
                this._dropTypes = ar
            })),
            getDroppable: _zkf$ = function () {
                return this._droppable
            },
            isDroppable: _zkf$,
            setVflex: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_vflex", (function (ap) {
                this._nvflex = (true === ap || "true" == ap) ? 1 : ap == "min" ? -65500 : zk.parseInt(ap);
                if (this._nvflex < 0 && ap != "min") {
                    this._nvflex = 0
                }
                if (this.desktop) {
                    if (!this._nvflex) {
                        this.setFlexSize_({height: "auto"});
                        delete this._vflexsz;
                        if (!this._nhflex) {
                            g(this)
                        }
                    } else {
                        am(this)
                    }
                    var aq;
                    if ((aq = this.parent) && !aq.isBinding()) {
                        zUtl.fireSized(aq, -1)
                    }
                }
            })),
            getVflex: _zkf$ = function () {
                return this._vflex
            },
            isVflex: _zkf$,
            setHflex: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_hflex", (function (ap) {
                this.setHflex_(ap);
                var aq;
                if (this.desktop && (aq = this.parent) && !aq.isBinding()) {
                    zUtl.fireSized(aq, -1)
                }
            })),
            getHflex: _zkf$ = function () {
                return this._hflex
            },
            isHflex: _zkf$,
            setRenderdefer: (function (ap) {
                return function (aq) {
                    this[ap] = aq;
                    return this
                }
            })("_renderdefer"),
            getRenderdefer: _zkf$ = function () {
                return this._renderdefer
            },
            isRenderdefer: _zkf$,
            setAction: (function (ap, aq) {
                return function (ar, at) {
                    var au = this[ap];
                    this[ap] = ar;
                    if (au !== ar || (at && at.force)) {
                        this.__fname__ = ap.substring(1);
                        aq.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_action", (function (ay) {
                this.actions_ = {};
                if (ay) {
                    for (var ap = ay.split(";"), aw = ap.length; aw--;) {
                        var ar = ap[aw], av = ar.indexOf(":");
                        if (av >= 0) {
                            var az = ar.substring(0, av).trim(), at = ar.substring(av + 1).trim(), aq, ax, au;
                            if (az && at) {
                                av = at.indexOf("(");
                                if (av >= 0) {
                                    if ((au = at.lastIndexOf(")")) > av) {
                                        aq = jq.evalJSON(at.substring(av + 1, au))
                                    }
                                    at = at.substring(0, av)
                                }
                                if (ax = zk.eff.Actions[at]) {
                                    this.actions_[az] = [ax, aq]
                                } else {
                                    zk.error("Unknown action: " + at)
                                }
                                continue
                            }
                        }
                        zk.error("Illegal action: " + ay + ", " + this.className)
                    }
                }
            })),
            getAction: _zkf$ = function () {
                return this._action
            },
            isAction: _zkf$,
            setHflex_: function (ap) {
                this._nhflex = (true === ap || "true" == ap) ? 1 : ap == "min" ? -65500 : zk.parseInt(ap);
                if (this._nhflex < 0 && ap != "min") {
                    this._nhflex = 0
                }
                if (this.desktop) {
                    if (!this._nhflex) {
                        this.setFlexSize_({width: "auto"});
                        delete this._hflexsz;
                        if (!this._nvflex) {
                            g(this)
                        }
                    } else {
                        am(this)
                    }
                }
            },
            afterAnima_: function (aq) {
                var ap;
                if (ap = this._rmAftAnm) {
                    this._rmAftAnm = null;
                    ap()
                }
            },
            setDraggable: function (ap) {
                if (!ap && ap != null) {
                    ap = "false"
                }
                this._draggable = ap;
                if (this.desktop && !H(this, true)) {
                    if (ap && ap != "false") {
                        this.initDrag_()
                    } else {
                        this.cleanDrag_()
                    }
                }
            },
            getDraggable: function () {
                var ap = this._draggable;
                return ap ? ap : H(this) ? "true" : "false"
            },
            $o: function () {
                for (var ap = this; ap; ap = ap.parent) {
                    if (ap._fellows) {
                        return ap
                    }
                }
            },
            $f: function (av, at) {
                var au = this.$o();
                if (!arguments.length) {
                    return au ? au._fellows : {}
                }
                for (var ar = av.split("/"), aq = 0, ap = ar.length; aq < ap; ++aq) {
                    av = ar[aq];
                    if (av) {
                        if (au) {
                            au = au._fellows[av]
                        }
                        if (!au && at && (au = R[av])) {
                            au = au[0]
                        }
                        if (!au || zk.spaceless) {
                            break
                        }
                        at = false
                    }
                }
                return au
            },
            getId: function () {
                return this.id
            },
            setId: function (ap) {
                if (ap != this.id) {
                    if (this.id) {
                        t(this);
                        k(this)
                    }
                    if (ap && (zk.spaceless || this.rawId)) {
                        zk._wgtutl.setUuid(this, ap)
                    }
                    this.id = ap;
                    if (ap) {
                        I(this);
                        if (this.desktop || this.z_rod) {
                            U(this)
                        }
                    }
                }
                return this
            },
            set: function (at, av, ap) {
                var aw;
                if ((aw = av && av.$u) && !(av = d.$(aw))) {
                    var ar = this;
                    zk.afterMount(function () {
                        var ax = d.$(aw);
                        if (ax) {
                            zk._set(ar, at, ax, ap)
                        } else {
                            setTimeout(function () {
                                zk._set(ar, at, d.$(aw), ap)
                            })
                        }
                    }, -1);
                    return this
                }
                if (aw = this["set" + at.charAt(0).toUpperCase() + at.substring(1)]) {
                    zk._set2(this, aw, null, av, ap);
                    return this
                }
                if ((aw = at.charAt(0)) == "$") {
                    if (at.startsWith("$$on")) {
                        var aq = this.$class, au = aq._importantEvts;
                        (au || (aq._importantEvts = {}))[at.substring(2)] = av;
                        return this
                    } else {
                        if (at.startsWith("$$0on")) {
                            var aq = this.$class, au = aq._duplicateIgnoreEvts;
                            (au || (aq._duplicateIgnoreEvts = {}))[at.substring(3)] = av;
                            return this
                        } else {
                            if (at.startsWith("$$1on")) {
                                var aq = this.$class, au = aq._repeatIgnoreEvts;
                                (au || (aq._repeatIgnoreEvts = {}))[at.substring(3)] = av;
                                return this
                            } else {
                                if (at.startsWith("$on")) {
                                    this._asaps[at.substring(1)] = av;
                                    return this
                                }
                            }
                        }
                    }
                } else {
                    if (aw == "o" && at.charAt(1) == "n" && ((aw = at.charAt(2)) <= "Z" && aw >= "A")) {
                        this.setListener(at, av);
                        return this
                    }
                }
                zk._set2(this, null, at, av, ap);
                return this
            },
            get: function (ap) {
                return zk.get(this, ap)
            },
            getChildAt: function (aq) {
                if (aq >= 0 && aq < this.nChildren) {
                    for (var ap = this.firstChild; ap; ap = ap.nextSibling) {
                        if (--aq < 0) {
                            return ap
                        }
                    }
                }
            },
            getChildIndex: function () {
                var ap = this.parent, aq = 0;
                if (ap) {
                    for (ap = ap.firstChild; ap; ap = ap.nextSibling, ++aq) {
                        if (ap == this) {
                            return aq
                        }
                    }
                }
                return 0
            },
            setChildren: function (ar) {
                if (ar) {
                    for (var aq = 0, ap = ar.length; aq < ap;) {
                        this.appendChild(ar[aq++])
                    }
                }
                return this
            },
            appendChild: function (au, aq) {
                if (au == this.lastChild) {
                    return false
                }
                var ap;
                if ((ap = au.parent) != this) {
                    au.beforeParentChanged_(this)
                }
                if (ap) {
                    ae = true;
                    try {
                        ap.removeChild(au)
                    } finally {
                        ae = false
                    }
                }
                au.parent = this;
                var at = this.lastChild;
                if (at) {
                    at.nextSibling = au;
                    au.previousSibling = at;
                    this.lastChild = au
                } else {
                    this.firstChild = this.lastChild = au
                }
                ++this.nChildren;
                if (au.id || au.firstChild) {
                    z(au)
                }
                if (!aq) {
                    if (this.shallChildROD_(au)) {
                        x(au)
                    } else {
                        var ar = this.desktop;
                        if (ar) {
                            this.insertChildHTML_(au, null, ar)
                        }
                    }
                }
                au.afterParentChanged_(ap);
                if (!T) {
                    this.onChildAdded_(au)
                }
                return true
            },
            shallChildROD_: function (ap) {
                return ap.z_rod || this.z_rod
            },
            insertBefore: function (av, ar, aq) {
                if (!ar || ar.parent != this) {
                    this.insertingBefore_ = true;
                    try {
                        return this.appendChild(av, aq)
                    } finally {
                        this.insertingBefore_ = false
                    }
                }
                if (av == ar || av.nextSibling == ar) {
                    return false
                }
                var ap;
                if ((ap = av.parent) != this) {
                    av.beforeParentChanged_(this)
                }
                if (ap) {
                    ae = true;
                    try {
                        ap.removeChild(av)
                    } finally {
                        ae = false
                    }
                }
                av.parent = this;
                var au = ar.previousSibling;
                if (au) {
                    av.previousSibling = au;
                    au.nextSibling = av
                } else {
                    this.firstChild = av
                }
                ar.previousSibling = av;
                av.nextSibling = ar;
                ++this.nChildren;
                z(av);
                if (!aq) {
                    if (this.shallChildROD_(av)) {
                        x(av)
                    } else {
                        var at = this.desktop;
                        if (at) {
                            this.insertChildHTML_(av, ar, at)
                        }
                    }
                }
                av.afterParentChanged_(ap);
                if (!T) {
                    this.onChildAdded_(av)
                }
                return true
            },
            removeChild: function (ar, aq) {
                var ap;
                if (!(ap = ar.parent)) {
                    return false
                }
                if (this != ap) {
                    return false
                }
                F(ar);
                if (ar.z_rod) {
                    c(ar);
                    jq(ar.uuid, zk).remove()
                } else {
                    if (ar.desktop) {
                        this.removeChildHTML_(ar, aq)
                    }
                }
                if (!ae) {
                    ar.beforeParentChanged_(null)
                }
                W(this, ar);
                if (!ae) {
                    ar.afterParentChanged_(ap)
                }
                if (!T) {
                    this.onChildRemoved_(ar)
                }
                return true
            },
            detach: function () {
                if (this.parent) {
                    this.parent.removeChild(this)
                } else {
                    var ap = zk.currentFocus;
                    if (ap && zUtl.isAncestor(this, ap)) {
                        zk.currentFocus = null
                    }
                    var aq = this.$n();
                    if (aq) {
                        this.unbind();
                        v(this, aq)
                    }
                }
            },
            clear: function () {
                while (this.lastChild) {
                    this.removeChild(this.lastChild)
                }
            },
            replaceWidget: function (az) {
                ad(this, az);
                F(this);
                z(az);
                var aq = zk.currentFocus, av, at;
                if (aq && zUtl.isAncestor(this, aq)) {
                    av = aq.uuid;
                    at = af(aq);
                    zk.currentFocus = null
                }
                var au = this.$n(), ap = this.parent, ax, ar = az.desktop || this.desktop;
                if (this.z_rod) {
                    c(this);
                    if (!(ax = (ar = ar || (ap ? ap.desktop : ap)) && (au = jq("#" + this.uuid)))) {
                        x(az)
                    }
                } else {
                    ax = ar
                }
                var ay = [];
                if (ax) {
                    if (au) {
                        az.replaceHTML(au, ar, null, true, ay)
                    } else {
                        this.unbind();
                        az.bind(ar)
                    }
                    D(az, ap ? ap.bindLevel + 1 : 0);
                    zWatch.fire("onBindLevelMove", az)
                }
                if (ap) {
                    ap.onChildReplaced_(this, az)
                }
                this.parent = this.nextSibling = this.previousSibling = null;
                if (ay && ay.length) {
                    var aw;
                    while ((aw = ay.shift()) && jq.isFunction(aw)) {
                        aw()
                    }
                }
                if (av) {
                    aq = zk.Widget.$(av);
                    if (!aq) {
                        S({focus: az, range: at})
                    } else {
                        if (zUtl.isAncestor(az, aq)) {
                            S({focus: aq, range: at})
                        }
                    }
                }
            },
            replaceCavedChildren_: function (ap, aB, aC, ax) {
                T = true;
                try {
                    var az = this.$n(ap), at, ay = [];
                    for (var aA = this.firstChild; aA;) {
                        var ar = aA.nextSibling;
                        if (jq.isAncestor(az, aA.$n())) {
                            if (!at || at == aA) {
                                at = ar
                            }
                            this.removeChild(aA, true);
                            ay.push(aA)
                        }
                        aA = ar
                    }
                    for (var av = 0, aw = aB.length; av < aw; ++av) {
                        this.insertBefore(aB[av], at, true)
                    }
                } finally {
                    T = false
                }
                if (at = this.desktop) {
                    var au = [];
                    if (aC) {
                        au.push(aC)
                    }
                    for (var av = 0, aw = aB.length; av < aw; ++av) {
                        aB[av].redraw(au)
                    }
                    if (ax) {
                        au.push(ax)
                    }
                    jq(az).html(au.join(""));
                    for (var av = 0, aw = aB.length; av < aw; ++av) {
                        aB[av].bind(at);
                        var aq = this._nrows;
                        this.onChildReplaced_(ay[av], aB[av]);
                        this._nrows = aq
                    }
                }
            },
            beforeParentChanged_: function () {
            },
            afterParentChanged_: function () {
            },
            isRealVisible: function (ap) {
                var au = ap && ap.dom, aq = ap && ap.cache, av = [], ax, ay = this;
                if (!ay.desktop) {
                    return false
                }
                while (ay) {
                    if (aq && (ax = ay.uuid) && (ax = aq[ax]) !== r) {
                        return q(aq, av, ax)
                    }
                    if (aq) {
                        av.push(ay)
                    }
                    if (au && !ay.z_virnd) {
                        if (!zk(ay.$n()).isVisible(ap.strict)) {
                            return q(aq, av, false)
                        }
                    } else {
                        if (!ay._visible) {
                            return q(aq, av, false)
                        }
                    }
                    var aw = ay.parent, ar, at;
                    if (aw && aw._visible && (ar = aw.$n()) && (at = ay.$n())) {
                        while ((at = zk(at).vparentNode(true)) && ar != at) {
                            if ((at.style || {}).display == "none") {
                                return q(aq, av, false)
                            }
                        }
                    }
                    if (ap && ap.until == ay) {
                        break
                    }
                    ay = aw
                }
                return q(aq, av, true)
            },
            isVisible: function (ap) {
                var aq = this._visible;
                if (!ap || !aq) {
                    return aq
                }
                var ar = this.$n();
                return ar && zk(ar).isVisible()
            },
            setVisible: function (at) {
                if (this._visible != at) {
                    this._visible = at;
                    var ap = this.parent, aq;
                    if (this.desktop) {
                        var ax = !ap || ap.isRealVisible(), au = this.$n(), aw = this._floating;
                        if (!ax) {
                            if (!aw) {
                                this.setDomVisible_(au, at)
                            }
                        } else {
                            if (at) {
                                var aC;
                                if (aw) {
                                    this.setZIndex(aC = al(this), {fire: true})
                                }
                                this.setDomVisible_(au, true);
                                for (var av = 0, aA = aa.length; av < aA; ++av) {
                                    var az = aa[av].widget, ar = aa[av].node;
                                    if (this == az) {
                                        az.setDomVisible_(ar, true, {visibility: 1})
                                    } else {
                                        if (an(this, az)) {
                                            aC = aC >= 0 ? ++aC : al(az);
                                            az.setFloatZIndex_(ar, aC);
                                            az.setDomVisible_(ar, true, {visibility: 1})
                                        }
                                    }
                                }
                                if (aq = ap) {
                                    ap.onChildVisible_(this)
                                }
                                this.fire("onShow");
                                var aB = this;
                                zk.afterAnimate(function () {
                                    zUtl.fireShown(aB)
                                }, -1)
                            } else {
                                this.fire("onHide");
                                var aB = this;
                                zWatch.fireDown("onHide", this);
                                for (var av = aa.length, ay = this.bindLevel; av--;) {
                                    var az = aa[av].widget;
                                    if (ay >= az.bindLevel) {
                                        break
                                    }
                                    if (an(this, az)) {
                                        az.setDomVisible_(aa[av].node, false, {visibility: 1})
                                    }
                                }
                                this.setDomVisible_(au, false);
                                if (aB._nvflex || aB._nhflex) {
                                    zk.afterAnimate(function () {
                                        if (aB.parent) {
                                            zUtl.fireSized(aB.parent)
                                        }
                                    }, -1)
                                }
                            }
                        }
                    }
                    if (ap && !aq) {
                        ap.onChildVisible_(this)
                    }
                    jq.onSyncScroll(this)
                }
                return this
            },
            zsync: function () {
                for (var aq in this.effects_) {
                    var ap = this.effects_[aq];
                    if (ap && ap.sync) {
                        ap.sync()
                    }
                }
            },
            show: function () {
                return this.setVisible(true)
            },
            hide: function () {
                return this.setVisible(false)
            },
            setDomVisible_: function (at, ar, aq) {
                if (!aq || aq.display) {
                    var ap;
                    if (ap = this.actions_[ar ? "show" : "hide"]) {
                        ap[0].call(this, at, ap[1])
                    } else {
                        at.style.display = ar ? "" : "none"
                    }
                }
                if (aq && aq.visibility) {
                    at.style.visibility = ar ? "visible" : "hidden"
                }
            },
            onChildAdded_: function () {
                jq.onSyncScroll(this)
            },
            onChildRemoved_: function () {
                jq.onSyncScroll(this)
            },
            onChildReplaced_: function (ap, aq) {
                this.childReplacing_ = true;
                try {
                    if (ap) {
                        this.onChildRemoved_(ap)
                    }
                    if (aq) {
                        this.onChildAdded_(aq)
                    }
                } finally {
                    this.childReplacing_ = false
                }
            },
            onChildVisible_: function () {
            },
            onChildRenderDefer_: function () {
            },
            setTopmost: function () {
                if (!this.desktop) {
                    return -1
                }
                for (var au = this; au; au = au.parent) {
                    if (au._floating) {
                        var ar = al(au);
                        for (var aq = 0, at = aa.length; aq < at; ++aq) {
                            var ap = aa[aq].widget, av = aa[aq].node;
                            if (au == ap) {
                                ap.setFloatZIndex_(av, ar)
                            } else {
                                if (zUtl.isAncestor(au, ap) && ap.isVisible()) {
                                    ap.setFloatZIndex_(av, ++ar)
                                }
                            }
                        }
                        return ar
                    }
                }
                return -1
            },
            setFloatZIndex_: function (aq, ap) {
                if (aq != this.$n()) {
                    aq.style.zIndex = ap
                } else {
                    this.setZIndex(ap, {fire: true})
                }
            },
            getFloatZIndex_: function (ap) {
                return ap != this.$n() ? ap.style.zIndex : this._zIndex
            },
            getTopWidget: function () {
                for (var ap = this; ap; ap = ap.parent) {
                    if (ap._floating) {
                        return ap
                    }
                }
            },
            isFloating_: function () {
                return this._floating
            },
            setFloating_: function (au, at) {
                if (this._floating != au) {
                    if (au) {
                        var ar = {widget: this, node: at && at.node ? at.node : this.$n()}, ap = this.bindLevel;
                        for (var aq = aa.length; ;) {
                            if (--aq < 0) {
                                aa.unshift(ar);
                                break
                            }
                            if (ap >= aa[aq].widget.bindLevel) {
                                aa.splice(aq + 1, 0, ar);
                                break
                            }
                        }
                        this._floating = true
                    } else {
                        for (var aq = aa.length; aq--;) {
                            if (aa[aq].widget == this) {
                                aa.splice(aq, 1)
                            }
                        }
                        this._floating = false
                    }
                }
                return this
            },
            getZIndex: _zkf = function () {
                return this._zIndex
            },
            getZindex: _zkf,
            setZIndex: _zkf = function (ar, ap) {
                if (this._zIndex != ar) {
                    this._zIndex = ar;
                    var aq = this.$n();
                    if (aq) {
                        aq.style.zIndex = ar >= 0 ? ar : "";
                        if (ap && ap.fire) {
                            this.fire("onZIndex", (ar > 0 || ar === 0) ? ar : -1, {ignorable: true})
                        }
                    }
                }
                return this
            },
            setZindex: _zkf,
            getScrollTop: function () {
                var ap = this.$n();
                return ap ? ap.scrollTop : 0
            },
            getScrollLeft: function () {
                var ap = this.$n();
                return ap ? ap.scrollLeft : 0
            },
            setScrollTop: function (ap) {
                var aq = this.$n();
                if (aq) {
                    aq.scrollTop = ap
                }
                return this
            },
            setScrollLeft: function (ap) {
                var aq = this.$n();
                if (aq) {
                    aq.scrollLeft = ap
                }
                return this
            },
            scrollIntoView: function () {
                zk(this.$n()).scrollIntoView();
                return this
            },
            redraw: function (ap) {
                if (!this.deferRedraw_(ap)) {
                    var aq;
                    if (aq = this.prolog) {
                        ap.push(aq)
                    }
                    if ((aq = this.$class.molds) && (aq = aq[this._mold])) {
                        return aq.apply(this, arguments)
                    }
                    zk.error("Mold " + this._mold + " not found in " + this.className)
                }
            },
            deferRedraw_: function (aq) {
                var ap;
                if ((ap = this._renderdefer) >= 0) {
                    if (!this._norenderdefer) {
                        this.z_rod = this._z$rd = true;
                        this.deferRedrawHTML_(aq);
                        aq = null;
                        var ar = this;
                        setTimeout(function () {
                            O(ar)
                        }, ap);
                        return true
                    }
                    delete this._norenderdefer;
                    delete this.z_rod
                }
                return false
            },
            deferRedrawHTML_: function (ap) {
                ap.push("<div", this.domAttrs_({domClass: 1}), ' class="z-renderdefer"></div>')
            },
            forcerender: function () {
                O(this)
            },
            updateDomClass_: function () {
                if (this.desktop) {
                    var ap = this.$n();
                    if (ap) {
                        ap.className = this.domClass_()
                    }
                    this.zsync()
                }
            },
            updateDomStyle_: function () {
                if (this.desktop) {
                    var aq = jq.parseStyle(this.domStyle_()), ar = this.$n();
                    if (!aq.width && this._hflex) {
                        aq.width = ar.style.width
                    }
                    if (!aq.height && this._vflex) {
                        aq.height = ar.style.height
                    }
                    zk(ar).clearStyles().jq.css(aq);
                    var ap = this.getTextNode();
                    if (ap && ap != ar) {
                        aq = this._domTextStyle(ap, aq);
                        zk(ap).clearStyles().jq.css(aq)
                    }
                    this.zsync()
                }
            },
            _domTextStyle: function (ap, aq) {
                aq = jq.filterTextStyle(aq);
                if (ap.style.width) {
                    aq.width = ap.style.width
                }
                if (ap.style.height) {
                    aq.height = ap.style.height
                }
                return aq
            },
            getZclass: function () {
                var ap = this._zclass;
                return ap != null ? ap : "z-" + this.widgetName
            },
            getTextNode: function () {
            },
            domStyle_: function (ar) {
                var ap = [], aq;
                if (aq = this.z$display) {
                    ap.push("display:", aq, ";")
                } else {
                    if (!this.isVisible() && (!ar || !ar.visible)) {
                        ap.push("display:none;")
                    }
                }
                if ((!ar || !ar.style) && (aq = this.getStyle())) {
                    aq = aq.replace(i, "'");
                    ap.push(aq);
                    if (aq.charAt(aq.length - 1) != ";") {
                        ap.push(";")
                    }
                }
                if ((!ar || !ar.width) && (aq = this.getWidth())) {
                    ap.push("width:", aq, ";")
                }
                if ((!ar || !ar.height) && (aq = this.getHeight())) {
                    ap.push("height:", aq, ";")
                }
                if ((!ar || !ar.left) && (aq = this.getLeft())) {
                    ap.push("left:", aq, ";")
                }
                if ((!ar || !ar.top) && (aq = this.getTop())) {
                    ap.push("top:", aq, ";")
                }
                if ((!ar || !ar.zIndex) && (aq = this.getZIndex()) >= 0) {
                    ap.push("z-index:", aq, ";")
                }
                return ap.join("")
            },
            domClass_: function (ar) {
                var ap, aq;
                if (!ar || !ar.sclass) {
                    ap = this.getSclass()
                }
                if (!ar || !ar.zclass) {
                    aq = this.getZclass()
                }
                return ap ? aq ? ap + " " + aq : ap : aq || ""
            },
            domAttrs_: function (au) {
                var ar = [], aq, at;
                if ((!au || !au.id) && (at = this.uuid)) {
                    ar.push(' id="', at, '"')
                }
                if ((!au || !au.domStyle) && (at = this.domStyle_(au))) {
                    ar.push(' style="', at, '"')
                }
                if ((!au || !au.domClass) && (at = this.domClass_(au))) {
                    ar.push(' class="', at, '"')
                }
                if ((!au || !au.tooltiptext) && (at = this.domTooltiptext_())) {
                    ar.push(' title="', zUtl.encodeXML(at), '"')
                }
                for (var ap in (aq = this.domExtraAttrs)) {
                    ar.push(" ", ap, '="', aq[ap] || "", '"')
                }
                return ar.join("")
            },
            domTooltiptext_: function () {
                return this.getTooltiptext()
            },
            domTextStyleAttr_: function () {
                var ap = this.getStyle();
                return ap ? zUtl.appendAttr("style", jq.filterTextStyle(ap)) : ap
            },
            replaceHTML: function (ar, ax, ay, aq, at) {
                if (!ax) {
                    ax = this.desktop;
                    if (!zk.Desktop._ndt) {
                        zk.stateless()
                    }
                }
                var au = ay ? null : G(this);
                var ap = this.parent;
                if (ap) {
                    ap.replaceChildHTML_(this, ar, ax, ay, aq)
                } else {
                    var av = this.getOldWidget_(ar);
                    if (av) {
                        av.unbind(ay)
                    } else {
                        if (this.z_rod) {
                            c(this)
                        }
                    }
                    jq(ar).replaceWith(this.redrawHTML_(ay, aq));
                    this.bind(ax, ay)
                }
                if (!ay) {
                    if (!jq.isArray(at)) {
                        zUtl.fireSized(this)
                    } else {
                        var aw = this;
                        at.push(function () {
                            zUtl.fireSized(aw)
                        })
                    }
                }
                S(au);
                return this
            },
            getOldWidget_: function (ap) {
                return d.$(ap, {strict: true})
            },
            redrawHTML_: function (ar, ap) {
                var aq = [];
                this.redraw(aq, ar);
                aq = aq.join("");
                return ap ? aq.trim() : aq
            },
            rerender: function (ar) {
                if (this.desktop) {
                    if (!ar || ar > 0) {
                        o(this, ar || 0);
                        return this
                    }
                    if (ar < 0) {
                        ar = null
                    }
                    var au = this.$n();
                    if (au) {
                        var ap = this.z$rod;
                        this.z$rod = false;
                        var aq;
                        if (ar) {
                            aq = ar.skip(this);
                            if (aq) {
                                var at = G(this);
                                this.replaceHTML(au, null, ar, true);
                                ar.restore(this, aq);
                                zWatch.fireDown("onRestore", this);
                                zUtl.fireSized(this);
                                S(at)
                            }
                        }
                        if (!aq) {
                            this.replaceHTML(au, null, null, true)
                        }
                        this.z$rod = ap
                    }
                }
                return this
            },
            replaceChildHTML_: function (av, au, at, ar, aq) {
                var ap = av.getOldWidget_(au);
                if (ap) {
                    ap.unbind(ar)
                } else {
                    if (this.shallChildROD_(av)) {
                        c(av)
                    }
                }
                jq(au).replaceWith(av.redrawHTML_(ar, aq));
                av.bind(at, ar)
            },
            insertChildHTML_: function (ax, av, aw) {
                var au, at = ax.redrawHTML_();
                if (av) {
                    if (av.$instanceof(zk.Native)) {
                        au = av.previousSibling;
                        if (au) {
                            if (au == ax) {
                                au = au.previousSibling
                            }
                            if (au && (au = au.$n())) {
                                jq(au).after(at);
                                ax.bind(aw);
                                return
                            }
                        }
                    }
                    av = av.getFirstNode_()
                }
                if (!av) {
                    for (var aq = this; ;) {
                        au = aq.getCaveNode();
                        if (au) {
                            break
                        }
                        var ap = aq.nextSibling;
                        if (ap && (av = ap.getFirstNode_())) {
                            break
                        }
                        if (!(aq = aq.parent)) {
                            au = document.body;
                            break
                        }
                    }
                }
                if (av) {
                    var ar = av.previousSibling;
                    if (ac(ar)) {
                        av = ar
                    }
                    jq(av).before(at)
                } else {
                    jq(au).append(at)
                }
                ax.bind(aw)
            },
            getCaveNode: function () {
                return this.$n("cave") || this.$n()
            },
            getFirstNode_: function () {
                for (var ap = this; ap; ap = ap.nextSibling) {
                    var aq = B(ap);
                    if (aq) {
                        return aq
                    }
                }
            },
            removeChildHTML_: function (au, aq) {
                var ar = zk.currentFocus;
                if (ar && zUtl.isAncestor(au, ar)) {
                    zk.currentFocus = null
                }
                var at = au.$n();
                if (at) {
                    var ap = at.previousSibling;
                    if (au.prolog && ac(ap)) {
                        jq(ap).remove()
                    }
                } else {
                    b(au, at = [])
                }
                au.unbind();
                if (!aq) {
                    au.removeHTML_(at)
                }
            },
            removeHTML_: function (ap) {
                v(this, ap);
                this.clearCache()
            },
            $n: function (ap) {
                if (ap) {
                    var aq = this._subnodes[ap];
                    if (!aq && this.desktop) {
                        aq = jq(this.uuid + "-" + ap, zk)[0];
                        this._subnodes[ap] = aq ? aq : "n/a"
                    }
                    return aq == "n/a" ? null : aq
                }
                var aq = this._node;
                if (!aq && this.desktop && !this._nodeSolved) {
                    this._node = aq = jq(this.uuid, zk)[0];
                    this._nodeSolved = true
                }
                return aq
            },
            isRealElement: function () {
                return true
            },
            $s: function (ap) {
                if (ap) {
                    var aq = this._subzcls[ap];
                    if (!aq) {
                        aq = this._subzcls[ap] = this.getZclass() + "-" + ap
                    }
                    return aq
                }
                return this.getZclass()
            },
            clearCache: function () {
                this._node = null;
                this._subnodes = {};
                this._nodeSolved = false
            },
            getPage: function () {
                var aq, ap;
                for (aq = this.parent; aq; aq = aq.parent) {
                    if (aq.$instanceof(zk.Page)) {
                        return aq
                    }
                }
                return (aq = (ap = this.desktop)._bpg) ? aq : (ap._bpg = new zk.Body(ap))
            },
            isBinding: function () {
                if (this.desktop) {
                    for (var ap = this; ap; ap = ap.parent) {
                        if (ap._binding) {
                            return true
                        }
                    }
                }
            },
            rerenderNow_: function (ap) {
                ak(this, ap)
            },
            bind: function (at, ar) {
                this._binding = true;
                X(this, ar);
                if (this.z_rod) {
                    x(this)
                } else {
                    var aq = [], ap;
                    this.bind_(at, ar, aq);
                    while (ap = aq.shift()) {
                        ap()
                    }
                }
                delete this._binding;
                return this
            },
            unbind: function (at) {
                X(this, at);
                if (this.z_rod) {
                    c(this)
                } else {
                    var ar = [];
                    this.unbind_(at, ar);
                    for (var aq = 0, ap = ar.length; aq < ap;) {
                        ar[aq++]()
                    }
                }
                return this
            },
            bind_: function (av, au, at) {
                E(this);
                this.desktop = av || (av = zk.Desktop.$(this.parent));
                var ar = this.parent, aq;
                this.bindLevel = ar ? ar.bindLevel + 1 : 0;
                if ((aq = this._draggable) && aq != "false" && !H(this)) {
                    this.initDrag_()
                }
                if (this._nvflex || this._nhflex) {
                    am(this)
                }
                this.bindChildren_(av, au, at);
                var ap = this;
                if (this.isListen("onBind")) {
                    zk.afterMount(function () {
                        if (ap.desktop) {
                            ap.fire("onBind")
                        }
                    })
                }
                if (this.isListen("onAfterSize")) {
                    zWatch.listen({onSize: this})
                }
                if (zk.mobile) {
                    at.push(function () {
                        setTimeout(function () {
                            ap.bindSwipe_();
                            ap.bindDoubleTap_();
                            ap.bindTapHold_()
                        }, 300)
                    })
                }
            },
            bindChildren_: function (au, ar, aq) {
                for (var at = this.firstChild, ap; at; at = ap) {
                    ap = at.nextSibling;
                    if (!ar || !ar.skipped(this, at)) {
                        if (at.z_rod) {
                            x(at)
                        } else {
                            at.bind_(au, null, aq)
                        }
                    }
                }
            },
            unbind_: function (au, at) {
                ah(this);
                g(this);
                this.unbindChildren_(au, at);
                this.cleanDrag_();
                this.unbindSwipe_();
                this.unbindDoubleTap_();
                this.unbindTapHold_();
                if (this.isListen("onAfterSize")) {
                    zWatch.unlisten({onSize: this})
                }
                if (this.isListen("onUnbind")) {
                    var ar = this;
                    zk.afterMount(function () {
                        if (!ar.desktop) {
                            ar.fire("onUnbind")
                        }
                    })
                }
                for (var aq in this.effects_) {
                    var ap = this.effects_[aq];
                    if (ap) {
                        ap.destroy()
                    }
                }
                this.effects_ = {}
            },
            unbindChildren_: function (ar, aq) {
                for (var at = this.firstChild, ap; at; at = ap) {
                    ap = at.nextSibling;
                    if (!ar || !ar.skipped(this, at)) {
                        if (at.z_rod) {
                            c(at)
                        } else {
                            if (at.desktop) {
                                at.unbind_(null, aq);
                                if (at.$instanceof(zk.Native)) {
                                    zAu._storeStub(at)
                                }
                            }
                        }
                    }
                }
            },
            extraBind_: function (ap, aq) {
                if (aq == false) {
                    delete Y[ap]
                } else {
                    Y[ap] = this
                }
            },
            setFlexSize_: function (ar, aq) {
                var at = this.$n(), ap = zk(at);
                if (ar.height !== r) {
                    if (ar.height == "auto") {
                        at.style.height = ""
                    } else {
                        if (ar.height != "" || (ar.height === 0 && !this.isFloating_())) {
                            this.setFlexSizeH_(at, ap, ar.height, aq)
                        } else {
                            at.style.height = this._height || ""
                        }
                    }
                }
                if (ar.width !== r) {
                    if (ar.width == "auto") {
                        at.style.width = ""
                    } else {
                        if (ar.width != "" || (ar.width === 0 && !this.isFloating_())) {
                            this.setFlexSizeW_(at, ap, ar.width, aq)
                        } else {
                            at.style.width = this._width || ""
                        }
                    }
                }
            },
            setFlexSizeH_: function (at, aq, ap, ar) {
                at.style.height = jq.px0(ap - aq.marginHeight())
            },
            setFlexSizeW_: function (at, ap, ar, aq) {
                at.style.width = jq.px0(ar - ap.marginWidth())
            },
            beforeChildrenFlex_: function (ap) {
                return true
            },
            afterChildrenFlex_: function (ap) {
            },
            afterChildMinFlexChanged_: function (aq, ap) {
            },
            ignoreFlexSize_: function (ap) {
                return false
            },
            ignoreChildNodeOffset_: function (ap) {
                return false
            },
            beforeMinFlex_: function (ap) {
                return null
            },
            beforeParentMinFlex_: function (ap) {
            },
            afterChildrenMinFlex_: function () {
            },
            afterResetChildSize_: function () {
            },
            isExcludedHflex_: function () {
                return jq(this.$n()).css("position") == "absolute"
            },
            isExcludedVflex_: function () {
                return jq(this.$n()).css("position") == "absolute"
            },
            getChildMinSize_: function (ap, ar) {
                if (ap == "w") {
                    var aq = zjq.minWidth(ar);
                    if (zk.ie > 8 && zk.isLoaded("zul.wgt") && ar.$instanceof(zul.wgt.Image)) {
                        aq = zk(ar).offsetWidth()
                    }
                    return aq
                } else {
                    return zk(ar).offsetHeight()
                }
            },
            getParentSize_: function (ap) {
                var aq = zk(ap);
                return {height: aq.contentHeight(), width: aq.contentWidth()}
            },
            getMarginSize_: function (ap) {
                return zk(this).sumStyles(ap == "h" ? "tb" : "lr", jq.margins)
            },
            getContentEdgeHeight_: function (aq) {
                var au = this.$n(), at = this.firstChild, at = at && zk.isLoaded("zul.wgt") && at.$instanceof(zul.wgt.Caption) ? at.nextSibling : at;
                while (at && at.ignoreFlexSize_("h")) {
                    at = at.nextSibling
                }
                var aw = at ? at.$n() : au.firstChild, av = zk(au), ar = av.padBorderHeight();
                if (aw) {
                    aw = aw.parentNode;
                    while (aw && aw.nodeType == 1 && au != aw) {
                        var ap = zk(aw);
                        ar += ap.padBorderHeight() + ap.sumStyles("tb", jq.margins);
                        aw = aw.parentNode
                    }
                    return ar
                }
                return 0
            },
            getContentEdgeWidth_: function (at) {
                var au = this.$n(), ar = this.firstChild, ar = ar && zk.isLoaded("zul.wgt") && ar.$instanceof(zul.wgt.Caption) ? ar.nextSibling : ar;
                while (ar && ar.ignoreFlexSize_("w")) {
                    ar = ar.nextSibling
                }
                var aw = ar ? ar.$n() : au.firstChild, av = zk(au), aq = av.padBorderWidth();
                if (aw) {
                    aw = aw.parentNode;
                    while (aw && aw.nodeType == 1 && au != aw) {
                        var ap = zk(aw);
                        aq += ap.padBorderWidth() + ap.sumStyles("lr", jq.margins);
                        aw = aw.parentNode
                    }
                    return aq
                }
                return 0
            },
            fixFlex_: function () {
                zFlex.fixFlex(this)
            },
            fixMinFlex_: function (aq, ap) {
                return zFlex.fixMinFlex(this, aq, ap)
            },
            clearCachedSize_: function () {
                delete this._hflexsz;
                delete this._vflexsz
            },
            resetSize_: function (ap) {
                var aq = this.$n();
                if (aq.scrollTop || aq.scrollLeft) {
                    return
                }
                aq.style[ap == "w" ? "width" : "height"] = ""
            },
            initDrag_: function () {
                var ap = this.getDragNode();
                if (ap) {
                    this._drag = new zk.Draggable(this, ap, this.getDragOptions_(A));
                    if (zk.ie9 && jq.nodeName(ap, "img")) {
                        jq(ap).bind("mousedown", zk.$void)
                    }
                }
            },
            cleanDrag_: function () {
                var ap = this._drag;
                if (ap) {
                    var aq;
                    if (zk.ie9 && (aq = this.getDragNode()) && jq.nodeName(aq, "img")) {
                        jq(aq).unbind("mousedown", zk.$void)
                    }
                    this._drag = null;
                    ap.destroy()
                }
            },
            getDragNode: function () {
                return this.$n()
            },
            getDragOptions_: function (ap) {
                return ap
            },
            ignoreDrag_: function (ap) {
                return false
            },
            getDrop_: function (ap) {
                if (this == ap) {
                    return null
                } else {
                    var aq = this._droppable, au = ap._draggable;
                    if (aq == "true") {
                        return this
                    }
                    if (aq && au != "true") {
                        for (var at = this._dropTypes, ar = at.length; ar--;) {
                            if (au == at[ar]) {
                                return this
                            }
                        }
                    }
                }
                return this.parent ? this.parent.getDrop_(ap) : null
            },
            dropEffect_: function (ap) {
                jq(this.$n() || [])[ap ? "addClass" : "removeClass"]("z-drag-over")
            },
            getDragMessage_: function () {
                if (jq.nodeName(this.getDragNode(), "tr", "td", "th")) {
                    var ap = this.$n("real") || this.getCaveNode();
                    return ap ? ap.textContent || ap.innerText || "" : ""
                }
            },
            onDrop_: function (aq, ap) {
                var ar = zk.copy({dragged: aq.control}, ap.data);
                this.fire("onDrop", ar, null, d.auDelay)
            },
            cloneDrag_: function (aq, ar) {
                var at = this.getDragMessage_();
                if (typeof at == "string" && at.length > 9) {
                    at = at.substring(0, 9) + "..."
                }
                var ap = zk.DnD.ghost(aq, ar, at);
                aq._orgcursor = document.body.style.cursor;
                document.body.style.cursor = "pointer";
                jq(this.getDragNode()).addClass("z-dragged");
                return ap
            },
            uncloneDrag_: function (ap) {
                document.body.style.cursor = ap._orgcursor || "";
                jq(this.getDragNode()).removeClass("z-dragged")
            },
            onSize: function () {
            },
            onAfterSize: function () {
                if (this.desktop && this.isListen("onAfterSize")) {
                    var ar = this.getCaveNode(), aq = ar.offsetWidth, ap = ar.offsetHeight;
                    if (this._preWidth != aq || this._preHeight != ap) {
                        this._preWidth = aq;
                        this._preHeight = ap;
                        this.fire("onAfterSize", {width: aq, height: ap})
                    }
                }
            },
            bindSwipe_: zk.$void,
            unbindSwipe_: zk.$void,
            bindDoubleTap_: zk.$void,
            unbindDoubleTap_: zk.$void,
            bindTapHold_: zk.$void,
            unbindTapHold_: zk.$void,
            focus: function (ap) {
                return this.canActivate({checkOnly: true}) && zk(this.$n()).isRealVisible() && this.focus_(ap)
            },
            focus_: function (aq) {
                if (zk(this.$n()).focus(aq)) {
                    this.setTopmost();
                    return true
                }
                for (var ap = this.firstChild; ap; ap = ap.nextSibling) {
                    if (ap.isRealVisible() && ap.focus_(aq)) {
                        return true
                    }
                }
                return false
            },
            canActivate: function (aq) {
                if (l) {
                    return true
                }
                if (zk.busy && (!aq || !aq.checkOnly)) {
                    jq.focusOut();
                    return false
                }
                var ap = zk.currentModal;
                if (ap && !zUtl.isAncestor(ap, this) && !jq.isAncestor(ap.$n(), this.$n())) {
                    var at = this.getTopWidget();
                    if (at && at != ap && at.getZIndex() > ap.getZIndex()) {
                        return true
                    }
                    if (!aq || !aq.checkOnly) {
                        var ar = zk.currentFocus;
                        if (ar && zUtl.isAncestor(ap, ar)) {
                            ar.focus(0)
                        } else {
                            ap.focus(0)
                        }
                    }
                    return false
                }
                return true
            },
            smartUpdate: function (ap, ar, aq) {
                zAu.send(new zk.Event(this, "setAttr", [ap, ar]), aq >= 0 ? aq : -1);
                return this
            },
            fireX: function (aA, az) {
                var aq = aA.currentTarget;
                aA.currentTarget = this;
                try {
                    var ay = aA.name, aw = this._lsns[ay], ax = aw ? aw.length : 0;
                    if (ax) {
                        for (var au = 0; au < ax;) {
                            var ar = aw[au++], at = ar[0];
                            (ar[1] || at[ay]).call(at, aA);
                            if (aA.stopped) {
                                return aA
                            }
                        }
                    }
                    if (!aA.auStopped) {
                        var aB = aA.opts && aA.opts.toServer;
                        if (aB || (this.inServer && this.desktop)) {
                            var ap = aB || this._asaps[ay];
                            if (ap == null) {
                                var av = this.$class._importantEvts;
                                if (av) {
                                    var av = av[ay];
                                    if (av != null) {
                                        ap = av
                                    }
                                }
                            }
                            if (ap != null || aA.opts.sendAhead) {
                                this.sendAU_(aA, ap ? az >= 0 ? az : d.auDelay : -1)
                            }
                        }
                    }
                    return aA
                } finally {
                    aA.currentTarget = aq
                }
            },
            beforeSendAU_: function (ar, ap) {
                var aq = ap.name;
                if (aq == "onClick" || aq == "onRightClick" || aq == "onDoubleClick") {
                    ap.shallStop = true
                }
            },
            sendAU_: function (ap, ar, aq) {
                (ap.target || this).beforeSendAU_(this, ap);
                ap = new zk.Event(this, ap.name, ap.data, ap.opts, ap.domEvent);
                if (ap.opts.sendAhead) {
                    zAu.sendAhead(ap, ar)
                } else {
                    zAu.send(ap, ar)
                }
            },
            shallIgnoreClick_: function (ap) {
            },
            fire: function (at, ar, ap, aq) {
                return this.fireX(new zk.Event(this, at, ar, ap), aq)
            },
            listen: function (au, at) {
                at = at ? at : 0;
                for (var ap in au) {
                    var av = au[ap];
                    if (jq.isArray(av)) {
                        av = [av[0] || this, av[1]]
                    } else {
                        if (typeof av == "function") {
                            av = [this, av]
                        } else {
                            av = [av || this, null]
                        }
                    }
                    av.priority = at;
                    var aq = this._lsns[ap];
                    if (!aq) {
                        this._lsns[ap] = [av]
                    } else {
                        for (var ar = aq.length; ;) {
                            if (--ar < 0 || aq[ar].priority >= at) {
                                aq.splice(ar + 1, 0, av);
                                break
                            }
                        }
                    }
                }
                return this
            },
            unlisten: function (at) {
                l_out:for (var ap in at) {
                    var au = at[ap], aq = this._lsns[ap], av;
                    for (var ar = aq ? aq.length : 0; ar--;) {
                        av = aq[ar];
                        if (jq.isArray(au)) {
                            au = [au[0] || this, au[1]]
                        } else {
                            if (typeof au == "function") {
                                au = [this, au]
                            } else {
                                au = [au || this, null]
                            }
                        }
                        if (av[0] == au[0] && av[1] == au[1]) {
                            aq.splice(ar, 1);
                            continue l_out
                        }
                    }
                }
                return this
            },
            isListen: function (ap, at) {
                var ar = this._asaps[ap];
                if (ar) {
                    return true
                }
                if (at) {
                    if (at.asapOnly) {
                        ar = this.$class._importantEvts;
                        return ar && ar[ap]
                    }
                    if (at.any) {
                        if (ar != null) {
                            return true
                        }
                        ar = this.$class._importantEvts;
                        if (ar && ar[ap] != null) {
                            return true
                        }
                    }
                }
                var aq = this._lsns[ap];
                return aq && aq.length
            },
            setListeners: function (aq) {
                for (var ap in aq) {
                    this.setListener(ap, aq[ap])
                }
            },
            setListener: function (ap, at) {
                if (jq.isArray(ap)) {
                    at = ap[1];
                    ap = ap[0]
                }
                var au = this._bklsns, aq = au[ap], ar = {};
                if (aq) {
                    delete au[ap];
                    ar[ap] = aq;
                    this.unlisten(ar)
                }
                if (at) {
                    ar[ap] = au[ap] = typeof at != "function" ? new Function("var event=arguments[0];" + at) : at;
                    this.listen(ar)
                }
            },
            setOverride: function (ap, ar) {
                if (jq.isArray(ap)) {
                    ar = ap[1];
                    ap = ap[0]
                }
                if (ar) {
                    var aq = "$" + ap;
                    if (this[aq] == null && this[ap]) {
                        this[aq] = this[ap]
                    }
                    this[ap] = ar
                } else {
                    var aq = "$" + ap;
                    this[ap] = this[aq];
                    delete this[aq]
                }
            },
            setOverrides: function (aq) {
                for (var ap in aq) {
                    this.setOverride(ap, aq[ap])
                }
            },
            doSelect_: function (ap) {
                if (!ap.stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doSelect_(ap)
                    }
                }
            },
            doTooltipOver_: function (ap) {
                if (!ap.stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doTooltipOver_(ap)
                    }
                }
            },
            doTooltipOut_: function (ap) {
                if (!ap.stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doTooltipOut_(ap)
                    }
                }
            },
            doClick_: function (ap) {
                if (m(this, ap)) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doClick_(ap)
                    }
                }
            },
            doDoubleClick_: function (ap) {
                if (m(this, ap)) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doDoubleClick_(ap)
                    }
                }
            },
            doRightClick_: function (ap) {
                if (m(this, ap)) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doRightClick_(ap)
                    }
                }
            },
            doMouseOver_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doMouseOver_(ap)
                    }
                }
            },
            doMouseOut_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doMouseOut_(ap)
                    }
                }
            },
            doMouseEnter_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doMouseEnter_(ap)
                    }
                }
            },
            doMouseLeave_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doMouseLeave_(ap)
                    }
                }
            },
            doMouseDown_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doMouseDown_(ap)
                    }
                }
            },
            doMouseUp_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doMouseUp_(ap)
                    }
                }
            },
            doMouseMove_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doMouseMove_(ap)
                    }
                }
            },
            doKeyDown_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doKeyDown_(ap)
                    }
                }
            },
            doKeyUp_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doKeyUp_(ap)
                    }
                }
            },
            doKeyPress_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doKeyPress_(ap)
                    }
                }
            },
            doSwipe_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doSwipe_(ap)
                    }
                }
            },
            doFocus_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doFocus_(ap)
                    }
                }
            },
            doBlur_: function (ap) {
                if (!this.fireX(ap).stopped) {
                    var aq = this.parent;
                    if (aq) {
                        aq.doBlur_(ap)
                    }
                }
            },
            doResizeScroll_: function () {
                var ap = this.parent;
                if (ap) {
                    ap.doResizeScroll_()
                }
            },
            domListen_: function (au, at, ar, ap) {
                if (!this.$weave) {
                    var aq = ab(this, at, ar, ap);
                    jq(au, zk).bind(aq[0], aq[1])
                }
                return this
            },
            domUnlisten_: function (au, at, ar, ap) {
                if (!this.$weave) {
                    var aq = ab(this, at, ar, ap);
                    jq(au, zk).unbind(aq[0], aq[1])
                }
                return this
            },
            listenOnFitSize_: function () {
                if (!this._fitSizeListened && (this._hflex == "min" || this._vflex == "min")) {
                    zWatch.listen({onFitSize: [this, zFlex.onFitSize]});
                    this._fitSizeListened = true
                }
            },
            unlistenOnFitSize_: function () {
                if (this._fitSizeListened) {
                    zWatch.unlisten({onFitSize: [this, zFlex.onFitSize]});
                    delete this._fitSizeListened
                }
            },
            fromPageCoord: function (ap, ar) {
                var aq = zk(this).revisedOffset();
                return [ap - aq[0], ar - aq[1]]
            },
            isWatchable_: function (ar, at, aq) {
                var ap = ar != "onShow", au;
                if (at) {
                    return this.isRealVisible({dom: true, strict: ap, until: at, cache: aq})
                }
                for (au = this; ;) {
                    if (!au.$instanceof(zk.Native)) {
                        break
                    }
                    if (!au._visible) {
                        return false
                    }
                    if (!(au = au.parent)) {
                        return true
                    }
                }
                return zk(au.$n()).isRealVisible(ap)
            },
            toJSON: function () {
                return this.uuid
            },
            ignoreDescendantFloatUp_: function (ap) {
                return false
            },
            getDomEvtInf_: function (at, ar, aq, ap) {
                return ab(at, ar, aq, ap)
            }
        }, {
            $: function (ar, ap) {
                if (ar && ar.zk && ar.zk.jq == ar) {
                    ar = ar[0]
                }
                if (!ar || d.isInstance(ar)) {
                    return ar
                }
                var ay, aq;
                if (typeof ar == "string") {
                    if ((aq = ar.charAt(0)) == "#") {
                        ar = ar.substring(1)
                    } else {
                        if (aq == "$") {
                            aq = R[ar.substring(1)];
                            return aq ? aq[0] : null
                        }
                    }
                    ay = Y[ar];
                    if (!ay) {
                        ay = (aq = ar.indexOf("-")) >= 0 ? Y[ar.substring(0, aq)] : null
                    }
                    return ay
                }
                if (!ar.nodeType) {
                    var ax, aw;
                    ar = ((ax = ar.originalEvent) ? ax.z$target : null) || ((ax = ar.target) && (aw = ax.z$proxy) ? aw : ax) || ar
                }
                ap = ap || {};
                if (ap.exact) {
                    return Y[ar.id]
                }
                for (; ar; ar = zk(ar).vparentNode(true)) {
                    try {
                        aq = ar.id || (ar.getAttribute ? ar.getAttribute("id") : "");
                        if (aq && typeof aq == "string") {
                            ay = Y[aq];
                            if (ay) {
                                return ay
                            }
                            var at = aq.indexOf("-");
                            if (at >= 0) {
                                ay = Y[aq = aq.substring(0, at)];
                                if (ay) {
                                    if (!ap.child) {
                                        return ay
                                    }
                                    var au = ay.$n();
                                    if (au && jq.isAncestor(au, ar)) {
                                        return ay
                                    }
                                }
                            }
                        }
                    } catch (av) {
                    }
                    if (ap.strict) {
                        break
                    }
                }
                return null
            }, mimicMouseDown_: function (av, aq, au) {
                var ar = zk.currentModal;
                if (ar && !av) {
                    var at = zk.currentFocus;
                    if (at && zUtl.isAncestor(ar, at)) {
                        at.focus(0)
                    } else {
                        ar.focus(0)
                    }
                } else {
                    if (!av || av.canActivate()) {
                        if (!aq) {
                            zk._prevFocus = zk.currentFocus;
                            zk.currentFocus = av;
                            zk._cfByMD = true;
                            setTimeout(function () {
                                zk._cfByMD = false;
                                zk._prevFocus = null
                            }, 0)
                        }
                        if (av) {
                            zWatch.fire("onFloatUp", av, {triggerByClick: au})
                        } else {
                            for (var ap in zk.Desktop.all) {
                                zWatch.fire("onFloatUp", zk.Desktop.all[ap])
                            }
                        }
                    }
                }
            }, getElementsByName: function (aq) {
                var au = [];
                for (var av in Y) {
                    if (aq == "*" || aq == Y[av].widgetName) {
                        var aw = Y[av].$n(), ap;
                        if (aw && (ap = d.$(Y[av]))) {
                            au.push({n: aw, w: ap})
                        }
                    }
                }
                if (au.length) {
                    au.sort(function (aA, ay) {
                        var az = aA.w, ax = ay.w;
                        if (az.bindLevel < ax.bindLevel) {
                            do {
                                ax = ax.parent
                            } while (az && az.bindLevel < ax.bindLevel)
                        } else {
                            if (az.bindLevel > ax.bindLevel) {
                                do {
                                    az = az.parent
                                } while (ax && az.bindLevel > ax.bindLevel)
                            }
                        }
                        var aC = az.parent, aB = ax.parent;
                        while (aC && aB && aC != aB) {
                            az = aC;
                            ax = aB;
                            aC = aC.parent;
                            aB = aB.parent
                        }
                        if (az && ax) {
                            return az.getChildIndex() - ax.getChildIndex()
                        }
                        return 0
                    });
                    var at = [];
                    for (var ar = au.length; ar--;) {
                        at.unshift(au[ar].n)
                    }
                    au = at
                }
                return au
            }, getElementsById: function (au) {
                var aq = [];
                for (var at, ar = R[au], ap = ar ? ar.length : 0; ap--;) {
                    at = ar[ap].$n();
                    if (at) {
                        aq.unshift(at)
                    }
                }
                return aq
            }, uuid: function (ar) {
                var aq = typeof ar == "object" ? ar.id || "" : ar, ap = aq.indexOf("-");
                return ap >= 0 ? aq.substring(0, ap) : ar
            }, nextUuid: function () {
                return "_z_" + L++
            }, isAutoId: function (ap) {
                return !ap
            }, register: function (at, aq) {
                var ap = zk.$import(at);
                ap.prototype.className = at;
                var ar = at.lastIndexOf(".");
                if (ar >= 0) {
                    at = at.substring(ar + 1)
                }
                h[ap.prototype.widgetName = at.toLowerCase()] = ap;
                if (aq) {
                    ap.prototype.blankPreserved = true
                }
            }, getClass: function (ap) {
                return h[ap]
            }, newInstance: function (ar, aq) {
                var ap = h[ar];
                if (!ap) {
                    zk.error(ap = "Unknown widget: " + ar);
                    throw ap
                }
                return new ap(aq)
            }, auDelay: 38
        });
        zkreg = d.register;
        zk.RefWidget = zk.$extends(zk.Widget, {
            className: "zk.RefWidget", widgetName: "refWidget", bind_: function () {
                var ap = d.$(this.uuid);
                if (!ap) {
                    zk.error("RefWidget not found: " + this.uuid);
                    return
                }
                var aq;
                if (aq = ap.parent) {
                    W(aq, ap)
                }
                ad(this, ap);
                this.parent = this.nextSibling = this.previousSibling = null;
                z(ap)
            }
        });
        zk.Desktop = zk.$extends(zk.Widget, {
            z_virnd: true,
            bindLevel: 0,
            className: "zk.Desktop",
            widgetName: "desktop",
            $init: function (at, av, ap, ar, ax) {
                this.$super("$init", {uuid: at});
                var aw = zk.Desktop, aq = aw.all, au;
                this._aureqs = [];
                if (au = aq[at]) {
                    if (ap != null) {
                        au.updateURI = ap
                    }
                    if (av != null) {
                        au.contextURI = av
                    }
                } else {
                    this.uuid = this.id = at;
                    this.updateURI = ap != null ? ap : zk.updateURI;
                    this.contextURI = av != null ? av : zk.contextURI;
                    this.requestPath = ar || "";
                    this.stateless = ax;
                    aq[at] = this;
                    ++aw._ndt
                }
                aw._dt = au || this;
                aw.sync(60000)
            },
            bind_: zk.$void,
            unbind_: zk.$void,
            setId: zk.$void
        }, {
            $: function (aq) {
                var ar = zk.Desktop, ap;
                if (aq) {
                    if (ar.isInstance(aq)) {
                        return aq
                    }
                    ap = ar.all[aq];
                    if (ap) {
                        return ap
                    }
                    ap = d.$(aq);
                    for (; ap; ap = ap.parent) {
                        if (ap.desktop) {
                            return ap.desktop
                        }
                        if (ap.$instanceof(ar)) {
                            return ap
                        }
                    }
                    return null
                }
                if (ap = ar._dt) {
                    return ap
                }
                for (aq in ar.all) {
                    return ar.all[aq]
                }
            }, all: {}, _ndt: 0, sync: function (at) {
                var au = zk.Desktop, ap = au.all, ar;
                if (u) {
                    clearTimeout(u);
                    u = null
                }
                if (at >= 0) {
                    u = setTimeout(function () {
                        u = null;
                        au.sync()
                    }, at)
                } else {
                    for (var aq in ap) {
                        if (!n(ar = ap[aq]) && ar.firstChild) {
                            delete ap[aq];
                            --au._ndt;
                            if (au._dt == ar) {
                                au._dt = null
                            }
                            zAu._rmDesktop(ar)
                        }
                    }
                    if (!au._dt) {
                        for (var aq in ap) {
                            au._dt = ap[aq];
                            break
                        }
                    }
                }
                return au._dt
            }
        });
        zk._wgtutl = {
            setUuid: function (aq, ap) {
                if (!ap) {
                    ap = d.nextUuid()
                }
                if (ap != aq.uuid) {
                    var ar = aq.$n();
                    if (ar) {
                        if (!aq.rawId) {
                            throw"id immutable after bound"
                        }
                        ar.id = ap;
                        delete Y[aq.uuid];
                        Y[ap] = aq;
                        aq.clearCache()
                    }
                    aq.uuid = ap
                }
            }, replace: function (at, ar, ap) {
                ad(at, ar);
                at.parent = at.nextSibling = at.previousSibling = null;
                if (ap) {
                    ar.lastChild = at.lastChild;
                    for (var aq = ar.firstChild = at.firstChild; aq; aq = aq.nextSibling) {
                        aq.parent = ar
                    }
                    ar.nChildren = at.nChildren;
                    at.firstChild = at.lastChild = null;
                    at.nChildren = 0
                }
                at.nChildren = 0
            }, autohide: function () {
                if (!aa.length) {
                    for (var ap; ap = K.shift();) {
                        ap.style.visibility = ap.getAttribute("z_ahvis") || ""
                    }
                    return
                }
                for (var az = ["IFRAME", "APPLET"], au = 2; au--;) {
                    l_nxtel:for (var ay = document.getElementsByTagName(az[au]), at = ay.length; at--;) {
                        var ap = ay[at], ax = zk(ap), av;
                        if ((!(av = ax.isVisible(true)) && !K.$contains(ap)) || (!au && !ap.getAttribute("z_autohide") && !ap.getAttribute("z.autohide"))) {
                            continue
                        }
                        var ar = ao(ap);

                        function aw(aA) {
                            var aC = ao(aA);
                            if (aC == ar || N(aC) < N(ar) || !ax.isOverlapped(aA)) {
                                return
                            }
                            if (av) {
                                K.push(ap);
                                try {
                                    ap.setAttribute("z_ahvis", ap.style.visibility)
                                } catch (aB) {
                                }
                                ap.style.visibility = "hidden"
                            }
                            return true
                        }

                        for (var aq = aa.length; aq--;) {
                            if (aw(aa[aq].node)) {
                                continue l_nxtel
                            }
                        }
                        if (K.$remove(ap)) {
                            ap.style.visibility = ap.getAttribute("z_ahvis") || ""
                        }
                    }
                }
            }
        }
    })();
    zk.Page = zk.$extends(zk.Widget, {
        z_virnd: true,
        _style: "width:100%;height:100%",
        className: "zk.Page",
        widgetName: "page",
        $init: function (b, a) {
            this._fellows = {};
            this.$super("$init", b);
            if (a) {
                zk.Page.contained.push(this)
            }
        },
        redraw: _zkf = function (b) {
            b.push("<div", this.domAttrs_(), ">");
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(b)
            }
            b.push("</div>")
        }
    }, {$redraw: _zkf, contained: []});
    zkreg("zk.Page", true);
    zk.Body = zk.$extends(zk.Page, {
        $init: function (a) {
            this.$super("$init", {});
            this.desktop = a
        }, $n: function (a) {
            return a ? null : document.body
        }, redraw: zk.$void
    });
    zk.Native = zk.$extends(zk.Widget, {
        z_virnd: true, className: "zk.Native", widgetName: "native", $n: function (a) {
            return !a && this.id ? jq("#" + this.id) : this.$supers("$n", arguments)
        }, redraw: _zkf = function (d) {
            var f = this.prolog, g;
            if (f) {
                if (this.$instanceof(zk.Native) && !this.id && (g = this.parent) && !g.z_virnd) {
                    var c = 0, a = f.length, e, h;
                    for (e = {whitespace: 1}; c < a; ++c) {
                        if ((h = f.charAt(c)) == "<") {
                            break
                        }
                        if (!zUtl.isChar(h, e)) {
                            c = a;
                            break
                        }
                    }
                    if (c < a) {
                        e = {upper: 1, lower: 1, digit: 1, "-": 1};
                        while (++c < a) {
                            if (!zUtl.isChar(f.charAt(c), e)) {
                                break
                            }
                        }
                        f = f.substring(0, c) + ' id="' + this.uuid + '"' + f.substring(c)
                    }
                }
                d.push(f.replace(/<\/(?=script>)/ig, "<\\/"));
                if (this.value && f.startsWith("<textarea")) {
                    d.push(this.value)
                }
            }
            for (var b = this.firstChild; b; b = b.nextSibling) {
                b.redraw(d)
            }
            f = this.epilog;
            if (f) {
                d.push(f)
            }
        }
    }, {$redraw: _zkf});
    zk.Macro = zk.$extends(zk.Widget, {
        className: "zk.Macro",
        widgetName: "macro",
        _enclosingTag: "div",
        $init: function () {
            this._fellows = {};
            this.$supers("$init", arguments)
        },
        setMold: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_mold", (function () {
            this.rerender()
        })),
        getMold: _zkf$ = function () {
            return this._mold
        },
        isMold: _zkf$,
        setStyle: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_style", (function () {
            this.updateDomStyle_()
        })),
        getStyle: _zkf$ = function () {
            return this._style
        },
        isStyle: _zkf$,
        setSclass: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_sclass", (function () {
            this.updateDomClass_()
        })),
        getSclass: _zkf$ = function () {
            return this._sclass
        },
        isSclass: _zkf$,
        setZclass: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_zclass", (function () {
            this._subzcls = {};
            this.rerender()
        })),
        getZclass: _zkf$ = function () {
            return this._zclass
        },
        isZclass: _zkf$,
        setWidth: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_width", (function (a) {
            if (!this._nhflex) {
                var b = this.$n();
                if (b) {
                    b.style.width = a || ""
                }
            }
        })),
        getWidth: _zkf$ = function () {
            return this._width
        },
        isWidth: _zkf$,
        setHeight: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_height", (function (a) {
            if (!this._nvflex) {
                var b = this.$n();
                if (b) {
                    b.style.height = a || ""
                }
            }
        })),
        getHeight: _zkf$ = function () {
            return this._height
        },
        isHeight: _zkf$,
        setLeft: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_left", (function (a) {
            var b = this.$n();
            if (b) {
                b.style.left = a || ""
            }
        })),
        getLeft: _zkf$ = function () {
            return this._left
        },
        isLeft: _zkf$,
        setTop: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_top", (function (a) {
            var b = this.$n();
            if (b) {
                b.style.top = a || ""
            }
        })),
        getTop: _zkf$ = function () {
            return this._top
        },
        isTop: _zkf$,
        setTooltiptext: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_tooltiptext", (function (a) {
            var b = this.$n();
            if (b) {
                b.title = a || ""
            }
        })),
        getTooltiptext: _zkf$ = function () {
            return this._tooltiptext
        },
        isTooltiptext: _zkf$,
        setDroppable: (function (a, b, c) {
            return function (d, e) {
                var f = this[a];
                this.__fname__ = a.substring(1);
                this[a] = d = b.apply(this, arguments);
                if (f !== d || (e && e.force)) {
                    c.apply(this, arguments)
                }
                delete this.__fname__;
                return this
            }
        })("_droppable", (function (a) {
            return a && "false" != a ? a : null
        }), (function (a) {
            var c;
            if (a && a != "true") {
                c = a.split(",");
                for (var b = c.length; b--;) {
                    if (!(c[b] = c[b].trim())) {
                        c.splice(b, 1)
                    }
                }
            }
            this._dropTypes = c
        })),
        getDroppable: _zkf$ = function () {
            return this._droppable
        },
        isDroppable: _zkf$,
        setVflex: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_vflex", (function (a) {
            this._nvflex = (true === a || "true" == a) ? 1 : a == "min" ? -65500 : zk.parseInt(a);
            if (this._nvflex < 0 && a != "min") {
                this._nvflex = 0
            }
            if (this.desktop) {
                if (!this._nvflex) {
                    this.setFlexSize_({height: "auto"});
                    delete this._vflexsz;
                    if (!this._nhflex) {
                        _unlistenFlex(this)
                    }
                } else {
                    _listenFlex(this)
                }
                var b;
                if ((b = this.parent) && !b.isBinding()) {
                    zUtl.fireSized(b, -1)
                }
            }
        })),
        getVflex: _zkf$ = function () {
            return this._vflex
        },
        isVflex: _zkf$,
        setHflex: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_hflex", (function (a) {
            this.setHflex_(a);
            var b;
            if (this.desktop && (b = this.parent) && !b.isBinding()) {
                zUtl.fireSized(b, -1)
            }
        })),
        getHflex: _zkf$ = function () {
            return this._hflex
        },
        isHflex: _zkf$,
        setRenderdefer: (function (a) {
            return function (b) {
                this[a] = b;
                return this
            }
        })("_renderdefer"),
        getRenderdefer: _zkf$ = function () {
            return this._renderdefer
        },
        isRenderdefer: _zkf$,
        setAction: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_action", (function (i) {
            this.actions_ = {};
            if (i) {
                for (var a = i.split(";"), g = a.length; g--;) {
                    var c = a[g], f = c.indexOf(":");
                    if (f >= 0) {
                        var m = c.substring(0, f).trim(), d = c.substring(f + 1).trim(), b, h, e;
                        if (m && d) {
                            f = d.indexOf("(");
                            if (f >= 0) {
                                if ((e = d.lastIndexOf(")")) > f) {
                                    b = jq.evalJSON(d.substring(f + 1, e))
                                }
                                d = d.substring(0, f)
                            }
                            if (h = zk.eff.Actions[d]) {
                                this.actions_[m] = [h, b]
                            } else {
                                zk.error("Unknown action: " + d)
                            }
                            continue
                        }
                    }
                    zk.error("Illegal action: " + i + ", " + this.className)
                }
            }
        })),
        getAction: _zkf$ = function () {
            return this._action
        },
        isAction: _zkf$,
        setEnclosingTag: (function (a, b) {
            return function (c, d) {
                var e = this[a];
                this[a] = c;
                if (e !== c || (d && d.force)) {
                    this.__fname__ = a.substring(1);
                    b.apply(this, arguments);
                    delete this.__fname__
                }
                return this
            }
        })("_enclosingTag", (function () {
            this.rerender()
        })),
        getEnclosingTag: _zkf$ = function () {
            return this._enclosingTag
        },
        isEnclosingTag: _zkf$,
        redraw: function (b) {
            var c = ' style="display: inline-block; min-width: 1px;"';
            b.push("<", this._enclosingTag, this.domAttrs_(), c, ">");
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(b)
            }
            b.push("</", this._enclosingTag, ">")
        }
    });
    zk.Skipper = zk.$extends(zk.Object, {
        skipped: function (a, b) {
            return a.caption != b
        }, skip: function (e, d) {
            var b = jq(d || e.getCaveNode(), zk)[0];
            if (b && b.firstChild) {
                var c = zk.currentFocus, a = c && c.getInputNode;
                if (a && zk.ie < 11) {
                    zk.cfrg = zk(c.getInputNode()).getSelectionRange()
                }
                b.parentNode.removeChild(b);
                if (a && zk.chrome) {
                    zk.currentFocus = c
                }
                return b
            }
        }, restore: function (d, b) {
            if (b) {
                var c = jq(b.id, zk)[0];
                for (var a; a = b.firstChild;) {
                    b.removeChild(a);
                    c.appendChild(a);
                    zjq._fixIframe(a)
                }
            }
        }
    });
    zk.Skipper.nonCaptionSkipper = new zk.Skipper();
    function zkopt(b) {
        for (var a in b) {
            var c = b[a];
            switch (a) {
                case"pd":
                    zk.procDelay = c;
                    break;
                case"td":
                    zk.tipDelay = c;
                    break;
                case"art":
                    zk.resendTimeout = c;
                    break;
                case"dj":
                    zk.debugJS = c;
                    break;
                case"kd":
                    zk.keepDesktop = c;
                    break;
                case"pf":
                    zk.pfmeter = c;
                    break;
                case"ta":
                    zk.timerAlive = c;
                    break;
                case"gd":
                    zk.groupingDenied = c;
                    break;
                case"to":
                    zk.timeout = c;
                    zAu._resetTimeout();
                    break;
                case"ed":
                    switch (c) {
                        case"e":
                            zk.feature.ee = true;
                        case"p":
                            zk.feature.pe = true
                    }
                    break;
                case"eu":
                    zAu.setErrorURI(c);
                    break;
                case"ppos":
                    zk.progPos = c;
                    break;
                case"eup":
                    zAu.setPushErrorURI(c)
            }
        }
    };
    zk.copy(zk, (function () {
        var n = {zk: true}, i = [], j = [], k = [], m = [], h = {}, a = {}, e = {}, f = {}, b = [], d = zk.copy({"zul.lang": true}, n);

        function c(o) {
            d[o] = true;
            i.push(o);
            if (g() == 1) {
                zk.disableESC()
            }
        }

        function l(q, p) {
            for (var o; o = q.shift();) {
                if (g() || (p && j.length)) {
                    q.unshift(o);
                    return
                }
                o()
            }
        }

        function g() {
            return (zk.loading = i.length)
        }

        return {
            setLoaded: _zkf = function (q, s) {
                i.$remove(q);
                d[q] = true;
                if (s) {
                    if (!n[q]) {
                        j.push(q)
                    }
                } else {
                    j.$remove(q);
                    n[q] = true;
                    var o = h[q];
                    if (o) {
                        delete h[q];
                        k.$addAll(o)
                    }
                    var t = a[q];
                    if (t) {
                        delete a[q];
                        for (var p; p = t.unshift();) {
                            zk.load(p)
                        }
                    }
                }
                if (!g()) {
                    try {
                        zk.enableESC()
                    } catch (r) {
                    }
                    l(k);
                    l(m, 1)
                }
            }, setScriptLoaded: _zkf, isLoaded: function (o, p) {
                return (p && d[o]) || n[o]
            }, load: function (p, r, q) {
                if (typeof r == "function") {
                    if (q) {
                        throw"At most one function allowed"
                    } else {
                        q = r;
                        r = null
                    }
                }
                if (q) {
                    zk.afterLoad(p, q, true)
                }
                var t;
                for (var s = p.split(","), o = s.length; o--;) {
                    p = s[o].trim();
                    if (!zk._load(p, r)) {
                        t = true
                    }
                }
                return !t
            }, _load: function (o, s) {
                if (!o || d[o]) {
                    return !zk.loading && !j.length
                }
                c(o);
                var r = zk.getVersion(o) || zk.build, t = document.createElement("script"), q = o + ".wpd", p = zk.getHost(o, true);
                t.type = "text/javascript";
                t.charset = "UTF-8";
                if (q.charAt(0) != "/") {
                    q = "/" + q
                }
                if (p) {
                    q = p + "/web/js" + q
                } else {
                    if (r) {
                        q = "/web/_zv" + r + "/js" + q
                    } else {
                        q = "/web/js" + q
                    }
                    q = zk.ajaxURI(q, {desktop: s, au: true})
                }
                t.src = q;
                jq.head().appendChild(t);
                return false
            }, loadScript: function (q, o, r) {
                if (o) {
                    c(o)
                }
                var p = document.createElement("script");
                p.type = "text/javascript";
                p.charset = r || "UTF-8";
                p.src = q;
                jq.head().appendChild(p);
                return this
            }, loadCSS: function (o, r, q) {
                var p = document.createElement("link");
                if (r) {
                    p.id = r
                }
                p.rel = "stylesheet";
                p.type = "text/css";
                p.href = o;
                if (q) {
                    p.media = q
                }
                jq.head().appendChild(p);
                return this
            }, getVersion: function (p) {
                for (var o; p; p = p.substring(0, p.lastIndexOf("."))) {
                    if (o = e[p]) {
                        return o
                    }
                }
            }, setVersion: function (p, o) {
                e[p] = o
            }, depends: function (p, o) {
                if (p && o) {
                    if (n[p]) {
                        zk.load(o)
                    } else {
                        if (a[p]) {
                            a[p].push(o)
                        } else {
                            a[p] = [o]
                        }
                    }
                }
            }, afterLoad: function (w, u, s) {
                if (typeof w == "string") {
                    if (!u) {
                        return true
                    }
                    for (var r = w.split(","), t = r.length; t--;) {
                        var o = r[t].trim();
                        if (o && !n[o]) {
                            while (t--) {
                                var x = r[t].trim();
                                if (x && !n[x]) {
                                    var q = w, v = u;
                                    u = function () {
                                        zk.afterLoad(q, v, s)
                                    };
                                    break
                                }
                            }
                            if (h[o]) {
                                h[o].push(u)
                            } else {
                                h[o] = [u]
                            }
                            return false
                        }
                    }
                    w = u
                }
                if (w) {
                    if (zk.loading || j.length) {
                        (s ? k : m).push(w);
                        return false
                    }
                    w();
                    return true
                }
            }, getHost: function (o, r) {
                for (var q in f) {
                    if (o.startsWith(q)) {
                        return f[q][r ? 1 : 0]
                    }
                }
                return b[r ? 1 : 0]
            }, setHost: function (r, t, u) {
                var p = r + t;
                if (!b.length) {
                    for (var s = document.getElementsByTagName("script"), q = 0, o = s.length; q < o; ++q) {
                        var v = s[q].src;
                        if (v) {
                            if (v.startsWith(r)) {
                                b = [r, p];
                                break
                            } else {
                                if (v.indexOf("/zk.wpd") >= 0) {
                                    break
                                }
                            }
                        }
                    }
                }
                for (var q = 0; q < u.length; ++q) {
                    f[u[q]] = [r, p]
                }
            }
        }
    })());
    function zkpi(a, b) {
        return zk.isLoaded(a) ? null : {n: a, p: zk.$package(a, false, b)}
    }

    function zkpb(c, e, f, a, b, d) {
        zkx([0, c, zk.copy(d, {dt: e, cu: f, uu: a, ru: b}), []])
    }

    zkpe = zk.$void;
    function zkver(c, g, b, f, e, d) {
        zk.version = c;
        zk.build = g;
        zk.contextURI = b;
        zk.updateURI = f;
        for (var a in e) {
            zk.setVersion(a, e[a])
        }
        if (!zk.feature) {
            zk.feature = {standard: true}
        }
        zkopt(d)
    }

    function zkmld(b, e) {
        if (!b.superclass) {
            zk.afterLoad(function () {
                zkmld(b, e)
            });
            return
        }
        var c = b.molds = {};
        for (var a in e) {
            var d = e[a];
            c[a] = typeof d == "function" ? d : d[0].molds[d[1]]
        }
    }

    function zkamn(a, b) {
        zk.load(a, function () {
            setTimeout(function () {
                zk.afterMount(b)
            }, 20)
        })
    }

    (function () {
        var c = zk.Widget, b = c.$, j = [], i = [], v = [], l = [], m = [], n = {}, g = {
            s: 0,
            e: -1,
            f0: [],
            f1: []
        }, a = jq.now();
        jq(function () {
            function w() {
                var x = zk.Desktop.all;
                for (var y in x) {
                    if (x[y].stateless) {
                        return true
                    }
                }
            }

            g.i = setInterval(function () {
                var z;
                if ((zk.booted && !zk.mounting) || (z = w())) {
                    if (z || g.s == g.e) {
                        clearInterval(g.i);
                        var x = g.f0.concat(g.f1);
                        g = null;
                        for (var y; y = x.shift();) {
                            y()
                        }
                    } else {
                        g.e = g.s
                    }
                }
            }, 25)
        });
        zk._apac = function (x, w) {
            if (g) {
                return g[w || "f1"].push(x)
            }
            zk.afterMount(x)
        };
        zk.afterMount = function (x, w) {
            if (x) {
                if (!jq.isReady) {
                    jq(function () {
                        zk.afterMount(x)
                    })
                } else {
                    if (zk.mounting) {
                        l.push(x)
                    } else {
                        if (zk.loading) {
                            zk.afterLoad(x)
                        } else {
                            if (w < 0) {
                                x();
                                return true
                            } else {
                                setTimeout(x, w)
                            }
                        }
                    }
                }
            }
        };
        zk.afterResize = function (w) {
            if (w) {
                m.push(w)
            }
        };
        zk.doAfterResize = function () {
            for (var w; w = m.shift();) {
                w()
            }
        };
        function p() {
            return n.curdt || (n.curdt = zk.Desktop.$())
        }

        function k(y) {
            var x = {};
            for (var w = y.length; w--;) {
                var A = y[w];
                if (!A.pked) {
                    A.pked = true;
                    u(x, A[0], A[1])
                }
            }
            for (var z in x) {
                var w = z.lastIndexOf(".");
                if (w >= 0) {
                    zk._load(z.substring(0, w), x[z])
                }
            }
        }

        function u(z, B, w) {
            var A = w[0];
            if (A === 0) {
                A = w[2].wc
            } else {
                if (A === 1) {
                    w[0] = A = "zhtml.Widget"
                }
            }
            if (A) {
                z[A] = B
            }
            for (var y = w[3], x = y.length; x--;) {
                u(z, B, y[x])
            }
        }

        function d() {
            for (; ;) {
                if (zk.loading) {
                    return zk.afterLoad(d)
                }
                var w = j.shift();
                if (!w) {
                    break
                }
                i.push([w[0], h(w[3] || w[0], w[1], true), w[2], w[4]]);
                if (e(d)) {
                    return
                }
            }
            t()
        }

        function t() {
            for (; ;) {
                if (j.length) {
                    return
                }
                if (zk.loading) {
                    return zk.afterLoad(t)
                }
                if (zk.ie < 11 && !jq.isReady) {
                    return jq(t)
                }
                var w = i.shift();
                if (!w) {
                    break
                }
                var y = w[1];
                if (w[2]) {
                    y.bind(w[0])
                } else {
                    var x;
                    if (zk.processing && (x = jq("#zk_proc")).length) {
                        if (x.hasClass("z-loading") && x.parent().hasClass("z-temp")) {
                            x[0].id = "zna";
                            if (!jq("#zk_proc").length) {
                                zUtl.progressbox("zk_proc", window.msgzk ? msgzk.PLEASE_WAIT : "Processing...", true)
                            }
                        }
                    }
                    y.replaceHTML("#" + y.uuid, w[0])
                }
                o(w[3])
            }
            s()
        }

        function s() {
            if (j.length || i.length) {
                return
            }
            zk.booted = true;
            zk.mounting = false;
            r(s);
            g && ++g.s;
            if (!zk.clientinfo) {
                zk.endProcessing()
            }
            zk.bmk.onURLChange();
            if (zk.pfmeter) {
                var w = zk.Desktop.all;
                for (var x in w) {
                    zAu._pfdone(w[x], x)
                }
            }
        }

        function q() {
            for (; ;) {
                if (zk.loading) {
                    return zk.afterLoad(q)
                }
                var x = v.shift(), w, y;
                if (!x) {
                    break
                }
                if (w = x[4][1]) {
                    c.$ = function (A, z) {
                        return w(b(A, z))
                    }
                }
                try {
                    y = h(null, x[1])
                } finally {
                    if (w) {
                        c.$ = b
                    }
                }
                x[4][0](y);
                if (e(q)) {
                    return
                }
            }
            f()
        }

        function f() {
            zk.mounting = false;
            r(f);
            zAu._doCmds();
            r(f)
        }

        function r(w) {
            for (var x; x = l.shift();) {
                x();
                if (zk.loading) {
                    zk.afterLoad(w);
                    return true
                }
            }
        }

        function o(w) {
            if (w && w.length) {
                zk._apac(function () {
                    for (var x = 0; x < w.length; x += 2) {
                        zAu.process(w[x], w[x + 1])
                    }
                }, "f0")
            }
        }

        function h(G, y, I) {
            var L, z, H, E = y[0], x = y[1], D = y[2] || {};
            if (E === 0) {
                E = zk.cut(D, "wc");
                var J = E ? zk.$import(E) : zk.Page;
                (L = new J({uuid: x}, zk.cut(D, "ct"))).inServer = true;
                if (G) {
                    G.appendChild(L, I)
                }
            } else {
                if ((z = E == "#stub") || E == "#stubs") {
                    if (!(L = b(x) || zAu._wgt$(x))) {
                        throw"Unknown stub " + x
                    }
                    var F = new c();
                    if (L.desktop || L.z_rod === 9) {
                        L.unbind()
                    }
                    zk._wgtutl.replace(L, F, z)
                } else {
                    var J = zk.$import(E);
                    if (!J) {
                        throw"Unknown widget: " + E
                    }
                    (L = new J(zkac)).inServer = true;
                    L.uuid = x;
                    if (H = y[4]) {
                        L.setMold(H)
                    }
                }
                if (G) {
                    G.appendChild(L, I)
                }
                if (H = zk.cut(D, "z$al")) {
                    zk.afterLoad(function () {
                        for (var w in H) {
                            L.set(w, H[w](), true)
                        }
                    })
                }
            }
            for (var K in D) {
                L.set(K, D[K], true)
            }
            for (var A = 0, C = y[3], B = C.length; A < B; ++A) {
                h(L, C[A])
            }
            return L
        }

        function e(x) {
            var w = jq.now(), y = w - a;
            if (y > 2500) {
                a = w;
                y >>= 6;
                setTimeout(x, y < 10 ? y : 10);
                return true
            }
        }

        zk.copy(window, {
            zkdt: function (y, A, w, x) {
                var z = zk.Desktop.$(y);
                if (z == null) {
                    z = new zk.Desktop(y, A, w, x);
                    if (zk.pfmeter) {
                        zAu._pfrecv(z, y)
                    }
                } else {
                    if (w != null) {
                        z.updateURI = w
                    }
                    if (A != null) {
                        z.contextURI = A
                    }
                    if (x != null) {
                        z.requestPath = x
                    }
                }
                n.curdt = z;
                return z
            }, zkx: function (x, C, I, z) {
                zk.mounting = true;
                try {
                    if (z) {
                        jq.globalEval(z)
                    }
                    var J = q, w = v, E, A;
                    if (!C || !C.length) {
                        E = C;
                        if (x) {
                            C = I;
                            I = null
                        }
                        J = d;
                        w = j
                    }
                    if (x) {
                        if (x[0] === 0) {
                            var H = x[2], B = zkdt(zk.cut(H, "dt"), zk.cut(H, "cu"), zk.cut(H, "uu"), zk.cut(H, "ru"));
                            if (A = zk.cut(H, "ow")) {
                                A = c.$(A)
                            }
                            var y;
                            if ((y = zk.feature) && (y.pe || y.ee) && zk.clientinfo !== undefined) {
                                zAu.cmd0.clientInfo(B.uuid);
                                if (C) {
                                    var F = [];
                                    for (var D = 0; D < C.length; D += 2) {
                                        if (C[D] != "clientInfo") {
                                            F.push(C[D], C[D + 1])
                                        }
                                    }
                                    C = F
                                }
                            } else {
                                delete zk.clientinfo
                            }
                        }
                        w.push([p(), x, n.bindOnly, A, C]);
                        k(w)
                    }
                    if (E) {
                        setTimeout(J, 0)
                    } else {
                        if (!e(J)) {
                            J()
                        }
                    }
                    o(I)
                } catch (G) {
                    zk.mounting = false;
                    zk.error("Failed to mount: " + (G.message || G));
                    setTimeout(function () {
                        throw G
                    }, 0)
                }
            }, zkx_: function (w, y, x) {
                a = jq.now();
                w[1] = [y, x];
                zkx.apply(this, w)
            }, zkac: function () {
                o(arguments)
            }, zkmx: function () {
                zkmb();
                try {
                    zkx.apply(window, arguments)
                } finally {
                    zkme()
                }
            }, zkmb: function (x) {
                n.bindOnly = x;
                var w = 390 - (jq.now() - a);
                zk.startProcessing(w > 0 ? w : 0)
            }, zkme: function () {
                n.curdt = null;
                n.bindOnly = false
            }
        })
    })(window);
    jq(function () {
        var k = zk.Widget, j = [], a = {}, l = {
            onClick: "doSelect_",
            onRightClick: "doSelect_",
            onMouseOver: "doTooltipOver_",
            onMouseOut: "doTooltipOut_"
        };
        zk.copy(zk, {
            beforeUnload: function (o, p) {
                if (p && p.remove) {
                    j.$remove(o)
                } else {
                    j.push(o)
                }
            }
        });
        function f(q) {
            var r = q.target;
            if (r && !r.$weave) {
                var o = q.name, p = l[o];
                if (p) {
                    if (!zk.ios || (p != "doTooltipOver_" && p != "doTooltipOut_")) {
                        r[p].call(r, q)
                    }
                }
                if (!q.stopped) {
                    r["do" + o.substring(2) + "_"].call(r, q)
                }
                if (q.domStopped) {
                    q.domEvent.stop()
                }
            }
        }

        function m(q, t, r) {
            zk.clickPointer[0] = q.pageX;
            zk.clickPointer[1] = q.pageY;
            if (!t) {
                t = q.target
            }
            var s = q.domTarget, o = document.body, p = zk.currentFocus;
            if ((s != o && s != o.parentNode) || (q.pageX < o.clientWidth && q.pageY < o.clientHeight)) {
                k.mimicMouseDown_(t, r, q.which)
            }
            f(q);
            if (p && zk.ie < 11) {
                var u = jq(p)[0];
                if (u) {
                    setTimeout(function () {
                        try {
                            var v = zk.currentFocus;
                            if (v != p && !u.offsetWidth && !u.offsetHeight) {
                                zk.focusBackFix = true;
                                v.focus()
                            }
                        } catch (w) {
                        } finally {
                            delete zk.focusBackFix
                        }
                    })
                }
            }
        }

        function h() {
            if (!a.time) {
                return
            }
            var o = jq.now();
            if (zk.mounting || zk.loading || o < a.time || zk.animating()) {
                setTimeout(h, 10);
                return
            }
            a.time = null;
            a.lastTime = o + 1000;
            zAu._onClientInfo();
            a.inResize = true;
            try {
                zWatch.fire("beforeSize");
                zWatch.fire("onFitSize", null, {reverse: true});
                zWatch.fire("onSize");
                a.lastTime = jq.now() + 8
            } finally {
                a.inResize = false
            }
        }

        function e(s) {
            var p = zk.Desktop.all, q = zk.Page;
            for (var r in p) {
                for (var t = p[r].firstChild; t; t = t.nextSibling) {
                    if (t.$instanceof(q)) {
                        for (var o = t.firstChild; o; o = o.nextSibling) {
                            if (b(o, s)) {
                                return
                            }
                        }
                    } else {
                        if (b(t, s)) {
                            return
                        }
                    }
                }
            }
        }

        function b(p, o) {
            if (!p.afterKeyDown_) {
                return
            }
            o.target = p;
            return p.afterKeyDown_(o, true)
        }

        var n, c;
        jq(document).keydown(function (o) {
            var q = k.$(o, {child: true}), p = new zk.Event(q, "onKeyDown", o.keyData(), null, o);
            if (q) {
                f(p);
                if (!p.stopped && q.afterKeyDown_) {
                    q.afterKeyDown_(p);
                    if (p.domStopped) {
                        p.domEvent.stop()
                    }
                }
            } else {
                e(p)
            }
            if (o.keyCode == 27 && (zk._noESC > 0 || zAu.shallIgnoreESC())) {
                return false
            }
        }).keyup(function (o) {
            var p = zk.keyCapture;
            if (p) {
                zk.keyCapture = null
            } else {
                p = k.$(o, {child: true})
            }
            f(new zk.Event(p, "onKeyUp", o.keyData(), null, o))
        }).keypress(function (o) {
            var p = zk.keyCapture;
            if (!p) {
                p = k.$(o, {child: true})
            }
            f(new zk.Event(p, "onKeyPress", o.keyData(), null, o))
        }).bind("zcontextmenu", function (o) {
            zk.clickPointer[0] = o.pageX;
            zk.clickPointer[1] = o.pageY;
            var q = k.$(o, {child: true});
            if (q) {
                if (zk.ie < 11) {
                    o.which = 3
                }
                var p = new zk.Event(q, "onRightClick", o.mouseData(), {}, o);
                f(p);
                if (p.domStopped) {
                    return false
                }
            }
            return !(zk.ie < 11) || o.returnValue
        }).bind("zmousedown", function (o) {
            if (zk.mobile) {
                zk.currentPointer[0] = o.pageX;
                zk.currentPointer[1] = o.pageY
            }
            var p = k.$(o, {child: true});
            m(new zk.Event(p, "onMouseDown", o.mouseData(), null, o), p)
        }).bind("zmouseup", function (o) {
            var p = zk.Draggable.ignoreMouseUp(), q;
            if (p === true) {
                return
            }
            if (p != null) {
                m(p, null, true);
                if ((q = p.target) && q != zk.currentFocus && !zk.Draggable.ignoreStop(q.$n())) {
                    try {
                        q.focus()
                    } catch (p) {
                    }
                }
            }
            q = zk.mouseCapture;
            if (q) {
                zk.mouseCapture = null
            } else {
                q = k.$(o, {child: true})
            }
            f(new zk.Event(q, "onMouseUp", o.mouseData(), null, o))
        }).bind("zmousemove", function (o) {
            zk.currentPointer[0] = o.pageX;
            zk.currentPointer[1] = o.pageY;
            var p = zk.mouseCapture;
            if (!p) {
                p = k.$(o, {child: true})
            }
            f(new zk.Event(p, "onMouseMove", o.mouseData(), null, o))
        }).mouseover(function (o) {
            if (zk.mobile) {
                return
            }
            zk.currentPointer[0] = o.pageX;
            zk.currentPointer[1] = o.pageY;
            f(new zk.Event(k.$(o, {child: true}), "onMouseOver", o.mouseData(), {ignorable: 1}, o))
        }).mouseout(function (o) {
            f(new zk.Event(k.$(o, {child: true}), "onMouseOut", o.mouseData(), {ignorable: 1}, o))
        }).click(function (o) {
            if (zk.Draggable.ignoreClick()) {
                return
            }
            if (zk.android && (n && n + 400 > o.timeStamp) && (c && c == o.target)) {
                return
            } else {
                n = o.timeStamp;
                c = o.target;
                zjq._fixClick(o);
                if (o.which == 1) {
                    f(new zk.Event(k.$(o, {child: true}), "onClick", o.mouseData(), {}, o))
                }
            }
        }).bind("zdblclick", function (o) {
            if (zk.Draggable.ignoreClick()) {
                return
            }
            var q = k.$(o, {child: true});
            if (q) {
                var p = new zk.Event(q, "onDoubleClick", o.mouseData(), {}, o);
                f(p);
                if (p.domStopped) {
                    return false
                }
            }
        }).bind((document.hidden !== undefined ? "" : zk.vendor_) + "visibilitychange", function (o) {
            zAu._onVisibilityChange()
        });
        var d = function (o) {
            if (zk.mounting) {
                return
            }
            var q = jq.now();
            if ((a.lastTime && q < a.lastTime) || a.inResize) {
                return
            }
            var p = zk.ie < 11 || zk.android ? 250 : 50;
            a.time = q + p - 1;
            setTimeout(h, p);
            if (zk.mobile && zAu._cInfoReg) {
                if (!jq("#zk_proc").length && !jq("#zk_showBusy").length) {
                    zUtl.progressbox("zk_proc", window.msgzk ? msgzk.PLEASE_WAIT : "Processing...", true)
                }
            }
        };
        if (zk.mobile) {
            jq(window).bind("orientationchange", d)
        } else {
            jq(window).resize(d)
        }
        jq(window).scroll(function () {
            zWatch.fire("onScroll")
        }).unload(function () {
            zk.unloading = true;
            if (zk.ie) {
                i()
            }
        });
        function i() {
            var o = !zk.opera && !zk.keepDesktop;
            if (o || zk.pfmeter) {
                try {
                    var p = zk.Desktop.all;
                    for (var q in p) {
                        zAu._rmDesktop(p[q], !o)
                    }
                } catch (r) {
                }
            }
        }

        var g = window.onbeforeunload;
        window.onbeforeunload = function () {
            if (!zk.skipBfUnload) {
                if (zk.confirmClose) {
                    return zk.confirmClose
                }
                for (var o = 0; o < j.length; ++o) {
                    var p = j[o]();
                    if (p) {
                        return p
                    }
                }
            }
            if (g) {
                var p = g.apply(window, arguments);
                if (p) {
                    return p
                }
            }
            zk.unloading = true;
            if (!zk.ie) {
                i()
            }
        };
        zk.afterMount(function () {
            jq("script.z-runonce").remove()
        })
    });
    zk.bmk = (function () {
        var d = "", c = "";

        function b() {
            var i = location.hash, k = i.indexOf("#");
            i = k >= 0 ? decodeURIComponent(i.substring(k + 1)) : "";
            return i || c
        }

        function f() {
            var i = b();
            if (i != d) {
                d = i;
                zAu.send(new zk.Event(null, "onBookmarkChange", i), 50);
                zk.bmk.onURLChange()
            }
        }

        function h(k) {
            var i = k.lastIndexOf(";");
            if (i >= 0) {
                k = k.substring(0, i)
            }
            i = k.lastIndexOf("#");
            if (i >= 0) {
                k = k.substring(0, i)
            }
            i = k.lastIndexOf("?");
            if (i >= 0) {
                k = k.substring(0, i)
            }
            return k
        }

        function a(i, j) {
            i = encodeURIComponent(i);
            return (!j && zk.webkit) || !i ? i : "#" + i
        }

        function g(i, j) {
            if (d != i) {
                var k = d;
                d = i;
                if (j) {
                    location.replace(location.href.replace(/#.*/, "") + a(i, true))
                } else {
                    location.hash = a(i)
                }
                zk.bmk.onURLChange()
            }
        }

        var e = function () {
            e = null;
            f();
            setInterval(f, 250)
        };
        zk._apac(e);
        return {
            bookmark: function (i, j) {
                if (e) {
                    d = c = i
                } else {
                    (zk.bmk.bookmark = g)(i, j)
                }
            }, onIframeLoaded: zk.ie < 11 ? function (l) {
                var k = l.indexOf("?"), i = k >= 0 ? l.substring(k + 1) : "";
                location.hash = i ? "#" + i : "";
                f()
            } : zk.$void, onURLChange: function () {
                try {
                    var o = window.frameElement;
                    if (!parent || parent == window || !o) {
                        return
                    }
                    var m = parent.location, l = location, i = m.protocol != l.protocol || m.host != l.host || m.port != l.port ? l.href : l.pathname, p = i.lastIndexOf(";"), n = i.lastIndexOf("?");
                    if (p >= 0 && (n < 0 || p < n)) {
                        var u = i.substring(0, p);
                        i = n < 0 ? u : u + i.substring(n)
                    }
                    if (l.hash && "#" != l.hash) {
                        i += l.hash
                    }
                    var v = jq(o);
                    if (v.attr("z_xsrc") != o.src) {
                        var t = o.src, q = location.pathname;
                        v.attr("z_xsrc", t);
                        t = h(t);
                        q = h(q);
                        if (t.endsWith(q) || q.endsWith(t)) {
                            v.attr("z_xurl", i);
                            return
                        }
                    }
                    if (parent.onIframeURLChange && v.attr("z_xurl") != i) {
                        parent.onIframeURLChange(o.id, i);
                        v.attr("z_xurl", i)
                    }
                } catch (r) {
                }
            }
        }
    })();
    (function () {
        var E = {}, k, w = {}, g = [], H = [], b, O, T, o, a, x, j, n, M, c = (jq.now() % 9999) + 1, C = [], p, l = 0, u = [], f = zk.Widget, D = {
            "0": true,
            "180": true
        }, m = jq.innerWidth() > jq.innerHeight(), R = D[window.orientation];

        function s() {
            if (!zAu.processing()) {
                u = [];
                if (!zk.clientinfo) {
                    zk.endProcessing()
                }
                zAu.doneTime = jq.now()
            }
        }

        function L(X, aa) {
            var Z = X.dt, W = aa.responseText;
            if (!W) {
                if (zk.pfmeter) {
                    zAu._pfdone(Z, r(aa))
                }
                return false
            }
            var V = [];
            V.rtags = X.rtags;
            if (zk.pfmeter) {
                V.dt = Z;
                V.pfIds = r(aa)
            }
            W = jq.evalJSON(W);
            var Y = W.rid;
            if (Y) {
                Y = parseInt(Y);
                if (!isNaN(Y)) {
                    V.rid = Y
                }
            }
            U(V, W.rs);
            return true
        }

        function U(V, W) {
            for (var X = 0, ab = W ? W.length : 0; X < ab; ++X) {
                var Y = W[X], aa = Y[0], Z = Y[1];
                if (!aa) {
                    zAu.showError("ILLEGAL_RESPONSE", "command required");
                    continue
                }
                V.push({cmd: aa, data: Z || []})
            }
            H.push(V)
        }

        function K(Y, X) {
            for (var W = X.length, Z, V; W--;) {
                if (Z = X[W] && X[W].$u) {
                    if (!(V = f.$(Z))) {
                        zk.afterMount(function () {
                            do {
                                if (Z = X[W] && X[W].$u) {
                                    X[W] = f.$(Z)
                                }
                            } while (W--);
                            h(Y, X)
                        }, -1);
                        return true
                    }
                    X[W] = V
                }
            }
        }

        function h(X, W) {
            if (!K(X, W)) {
                var V = zAu.cmd1[X];
                if (V) {
                    if (!W.length) {
                        return zAu.showError("ILLEGAL_RESPONSE", "uuid required", X)
                    }
                    W[0] = f.$(W[0])
                } else {
                    V = zAu.cmd0[X];
                    if (!V) {
                        return zAu.showError("ILLEGAL_RESPONSE", "Unknown", X)
                    }
                }
                V.apply(zAu, W)
            }
        }

        function I(V, W) {
            if (c == V.sid) {
                T = V;
                setTimeout(d, W ? W : 0)
            }
        }

        function d() {
            var V = T;
            if (V) {
                T = null;
                if (c == V.sid) {
                    Q(V)
                }
            }
        }

        function q(Y, W) {
            for (var V = g.$clone(), X; X = V.shift();) {
                if (X(Y, W)) {
                    return true
                }
            }
        }

        function F() {
            var ab = b, ac = O;
            try {
                if (ab && ab.readyState == 4) {
                    b = O = null;
                    if (zk.pfmeter) {
                        zAu._pfrecv(ac.dt, r(ab))
                    }
                    var V = ab.getResponseHeader("ZK-SID"), X;
                    if ((X = ab.status) == 200) {
                        if (V && V != c) {
                            k = "ZK-SID " + (V ? "mismatch" : "required");
                            J();
                            return
                        }
                        var ad;
                        if ((ad = ab.getResponseHeader("ZK-Error")) && !q(ab, ad = zk.parseInt(ad) || ad) && (ad == 5501 || ad == 5502) && zAu.confirmRetry("FAILED_TO_RESPONSE", ad == 5501 ? "Request out of sequence" : "Activation timeout")) {
                            I(ac);
                            return
                        }
                        if (ad != 410) {
                            zAu._resetTimeout()
                        }
                        if (L(ac, ab)) {
                            if (V && ++c > 9999) {
                                c = 1
                            }
                            o = 0;
                            T = null
                        }
                    } else {
                        if ((!V || V == c) && !q(ab, k = X)) {
                            var Y = E["" + X];
                            if (typeof Y == "string") {
                                zUtl.go(Y);
                                return
                            }
                            if (typeof zAu.ajaxErrorHandler == "function") {
                                o = zAu.ajaxErrorHandler(ab, X, ab.statusText, o);
                                if (o > 0) {
                                    o--;
                                    I(ac, zk.resendTimeout);
                                    return
                                }
                            } else {
                                switch (X) {
                                    default:
                                        if (!o) {
                                            break
                                        }
                                    case 12002:
                                    case 12030:
                                    case 12031:
                                    case 12152:
                                    case 12159:
                                    case 13030:
                                    case 503:
                                        if (!o) {
                                            o = 3
                                        }
                                        if (--o) {
                                            I(ac, zk.resendTimeout);
                                            return
                                        }
                                }
                                if (!ac.ignorable && !zk.unloading) {
                                    var W = ab.statusText;
                                    if (zAu.confirmRetry("FAILED_TO_RESPONSE", X + (W ? ": " + W : ""))) {
                                        o = 2;
                                        I(ac);
                                        return
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (Z) {
                if (!window.zAu) {
                    return
                }
                b = O = null;
                try {
                    if (ab && typeof ab.abort == "function") {
                        ab.abort()
                    }
                } catch (aa) {
                }
                if (ac && !ac.ignorable && !zk.unloading) {
                    var W = t(Z);
                    k = "[Receive] " + W;
                    if (zAu.confirmRetry("FAILED_TO_RESPONSE", (W && W.indexOf("NOT_AVAILABLE") < 0 ? W : ""))) {
                        I(ac);
                        return
                    }
                }
            }
            J()
        }

        function J() {
            zAu._doCmds();
            if (a && !b && !T) {
                a = false;
                var V = zk.Desktop.all;
                for (var W in V) {
                    A(V[W], 0)
                }
            }
        }

        function t(W) {
            var X = W.message || W, V = "";
            if (W.name) {
                V = " " + W.name
            }
            return X + (V ? " (" + V.substring(1) + ")" : V)
        }

        function v(W, V, X) {
            if (!W) {
                var Y = V.target.parent;
                while (!Y.desktop) {
                    Y = Y.parent
                }
                W = Y.desktop
            }
            zAu.addAuRequest(W, V);
            A(W, X)
        }

        function A(V, W) {
            if (!W) {
                W = 0
            }
            if (V && W >= 0) {
                setTimeout(function () {
                    zAu.sendNow(V)
                }, W)
            }
        }

        function Q(V) {
            var W = zAu.ajaxSettings, X = W.xhr();
            zAu.sentTime = jq.now();
            try {
                X.onreadystatechange = F;
                X.open("POST", V.uri, true);
                X.setRequestHeader("Content-Type", W.contentType);
                X.setRequestHeader("ZK-SID", V.sid);
                if (k) {
                    X.setRequestHeader("ZK-Error-Report", k);
                    k = null
                }
                if (zk.pfmeter) {
                    zAu._pfsend(V.dt, X)
                }
                b = X;
                O = V;
                X.send(V.content);
                if (!V.implicit) {
                    zk.startProcessing(zk.procDelay)
                }
            } catch (Z) {
                try {
                    if (typeof X.abort == "function") {
                        X.abort()
                    }
                } catch (Y) {
                }
                if (!V.ignorable && !zk.unloading) {
                    var aa = t(Z);
                    k = "[Send] " + aa;
                    if (zAu.confirmRetry("FAILED_TO_SEND", aa)) {
                        I(V);
                        return
                    }
                }
            }
        }

        function y(Y, X) {
            if (!jq.isArray(X)) {
                if (X.pageX != null && X.x == null) {
                    var W = Y && Y.desktop ? Y.fromPageCoord(X.pageX, X.pageY) : [X.pageX, X.pageY];
                    X.x = W[0];
                    X.y = W[1]
                }
                var V;
                for (var Z in X) {
                    if (jq.type(V = X[Z]) == "date") {
                        X[Z] = "$z!t#d:" + jq.d2j(V)
                    }
                }
            }
            return jq.toJSON(X)
        }

        function e(V) {
            var X = V.rtags || {}, W;
            try {
                while (V && V.length) {
                    if (zk.mounting) {
                        return false
                    }
                    var Y = V.shift();
                    try {
                        h(Y.cmd, Y.data)
                    } catch (Z) {
                        zk.mounting = false;
                        zAu.showError("FAILED_TO_PROCESS", null, Y.cmd, Z);
                        if (!W) {
                            W = Z
                        }
                    }
                }
            } finally {
                if (!V || !V.length) {
                    zWatch.fire("onResponse", null, {timeout: 0, rtags: X});
                    if (X.onClientInfo) {
                        setTimeout(zk.endProcessing, 50);
                        delete zk.clientinfo
                    }
                }
            }
            if (W) {
                throw W
            }
            return true
        }

        function N(V) {
            jq(document.body).append(V)
        }

        function r(V) {
            return V.getResponseHeader("ZK-Client-Complete")
        }

        function S(X, Y, V) {
            if (V && (V = V.trim())) {
                var W = V + "=" + Math.round(jq.now());
                if (X[Y]) {
                    X[Y] += "," + W
                } else {
                    X[Y] = W
                }
            }
        }

        function G() {
            zAu.cmd0.clientInfo()
        }

        function B() {
            zAu.send(new zk.Event(null, "dummy", null, {ignorable: true, serverAlive: true}))
        }

        function i(W, V) {
            V[W.uuid] = W;
            for (W = W.firstChild; W; W = W.nextSibling) {
                i(W, V)
            }
        }

        function z(X, W) {
            var V;
            if (X._visible && (V = X.actions_[W])) {
                X.z$display = "none";
                return V
            }
        }

        function P(W, V) {
            if (V) {
                delete W.z$display;
                V[0].call(W, W.$n(), V[1]);
                return true
            }
        }

        zAu = {
            _resetTimeout: function () {
                if (p) {
                    clearTimeout(p);
                    p = null
                }
                if (zk.timeout > 0) {
                    p = setTimeout(B, zk.timeout * 1000)
                }
            },
            _onClientInfo: function () {
                if (zAu._cInfoReg) {
                    setTimeout(G, 20)
                }
            },
            _wgt$: function (V) {
                var W = u.wgts = u.wgts || {}, X;
                while (X = u.shift()) {
                    i(X, W)
                }
                return W[V]
            },
            _onVisibilityChange: function () {
                if (zk.visibilitychange) {
                    zAu.cmd0.visibilityChange()
                }
            },
            _storeStub: function (V) {
                if (V) {
                    u.push(V)
                }
            },
            onError: function (V) {
                g.push(V)
            },
            unError: function (V) {
                g.$remove(V)
            },
            confirmRetry: function (V, W) {
                var X = msgzk[V];
                return jq.confirm((X ? X : V) + "\n" + msgzk.TRY_AGAIN + (W ? "\n\n(" + W + ")" : ""))
            },
            showError: function (V, X, Y, W) {
                var Z = msgzk[V];
                zk.error((Z ? Z : V) + "\n" + (X ? X + ": " : "") + (Y || "") + (W ? "\n" + t(W) : ""))
            },
            getErrorURI: function (V) {
                return E["" + V]
            },
            setErrorURI: function (W, V) {
                if (arguments.length == 1) {
                    for (var X in W) {
                        zAu.setErrorURI(X, W[X])
                    }
                } else {
                    E["" + W] = V
                }
            },
            getPushErrorURI: function (V) {
                return w["" + V]
            },
            setPushErrorURI: function (W, V) {
                if (arguments.length == 1) {
                    for (var X in W) {
                        zAu.setPushErrorURI(X, W[X])
                    }
                    return
                }
                w["" + W] = V
            },
            processing: function () {
                return zk.mounting || H.length || b || T
            },
            send: function (Y, Z) {
                if (Z < 0) {
                    Y.opts = zk.copy(Y.opts, {defer: true})
                }
                var W = Y.target;
                if (W) {
                    v(W.className == "zk.Desktop" ? W : W.desktop, Y, Z)
                } else {
                    var V = zk.Desktop.all;
                    for (var X in V) {
                        v(V[X], Y, Z)
                    }
                }
            },
            sendAhead: function (Z, aa) {
                var W = Z.target;
                if (W) {
                    var Y = W.className == "zk.Desktop" ? W : W.desktop;
                    zAu.getAuRequests(Y).unshift(Z);
                    A(Y, aa)
                } else {
                    var V = zk.Desktop.all;
                    for (var X in V) {
                        zAu.getAuRequests(Y).unshift(Z);
                        A(V[X], aa)
                    }
                    return
                }
            },
            _rmDesktop: function (V, W) {
                jq.ajax(zk.$default({
                    url: zk.ajaxURI(null, {desktop: V, au: true}),
                    data: {dtid: V.id, cmd_0: W ? "dummy" : "rmDesktop", opt_0: "i"},
                    beforeSend: function (X) {
                        if (zk.pfmeter) {
                            zAu._pfsend(V, X, true)
                        }
                    },
                    async: !!zk.ie
                }, zAu.ajaxSettings), null, true);
                if (!W && zk.portlet2Data && zk.portlet2Data[V.id]) {
                    delete zk.portlet2Data[V.id]
                }
            },
            process: function (W, V) {
                h(W, V ? jq.evalJSON(V) : [])
            },
            shallIgnoreESC: function () {
                return b
            },
            doCmds: function (X, W) {
                var V = [];
                V.dt = zk.Desktop.$(X);
                U(V, W);
                zAu._doCmds()
            },
            _doCmds: function () {
                for (var aa; aa = C.shift();) {
                    aa()
                }
                var Y, X = 0, Z = M;
                for (; X < H.length; ++X) {
                    if (zk.mounting) {
                        return
                    }
                    var V = H[X];
                    if (Z == V.rid || !Z || !V.rid || zk.Desktop._ndt > 1) {
                        H.splice(X, 1);
                        var W = Z;
                        if (V.rid) {
                            if ((Z = V.rid + 1) >= 1000) {
                                Z = 1
                            }
                            M = Z
                        }
                        try {
                            if (e(V)) {
                                X = -1;
                                if (zk.pfmeter) {
                                    var aa = function () {
                                        zAu._pfdone(V.dt, V.pfIds)
                                    };
                                    if (zk.mounting) {
                                        C.push(aa)
                                    } else {
                                        aa()
                                    }
                                }
                            } else {
                                M = W;
                                H.splice(X, 0, V);
                                return
                            }
                        } catch (ab) {
                            if (!Y) {
                                Y = ab
                            }
                            X = -1
                        }
                    }
                }
                if (H.length) {
                    setTimeout(function () {
                        if (H.length && Z == M) {
                            var ae = H[0].rid;
                            for (X = 1; X < H.length; ++X) {
                                var ac = H[X].rid, ad = ac - ae;
                                if (ad > 500 || (ad < 0 && ad > -500)) {
                                    ae = ac
                                }
                            }
                            M = ae;
                            zAu._doCmds()
                        }
                    }, 3600)
                } else {
                    s()
                }
                if (Y) {
                    throw Y
                }
            },
            beforeSend: function (Z, Y) {
                var aa, V;
                if ((aa = Y.target) && (V = aa.autag)) {
                    V = "/" + encodeURIComponent(V);
                    if (Z.indexOf("/_/") < 0) {
                        var W = aa.desktop;
                        if ((W = W ? W.requestPath : "") && W.charAt(0) != "/") {
                            W = "/" + W
                        }
                        V = "/_" + W + V
                    }
                    var X = Z.lastIndexOf(";");
                    if (X >= 0) {
                        Z = Z.substring(0, X) + V + Z.substring(X)
                    } else {
                        Z += V
                    }
                }
                return Z
            },
            encode: function (X, ac, W) {
                var aa = ac.target, V = ac.opts || {}, Z = "";
                if (zk.portlet2Data && zk.portlet2Data[W.id]) {
                    Z = zk.portlet2Data[W.id].namespace || ""
                }
                var ab = X ? "" : Z + "dtid=" + W.id;
                ab += "&" + Z + "cmd_" + X + "=" + ac.name;
                if ((V.implicit || V.ignorable) && !(V.serverAlive)) {
                    ab += "&" + Z + "opt_" + X + "=i"
                }
                if (aa && aa.className != "zk.Desktop") {
                    ab += "&" + Z + "uuid_" + X + "=" + aa.uuid
                }
                var Y = ac.data, ad = typeof Y;
                if (ad == "string" || ad == "number" || ad == "boolean" || jq.isArray(Y)) {
                    Y = {"": Y}
                }
                if (Y) {
                    ab += "&" + Z + "data_" + X + "=" + encodeURIComponent(y(aa, Y))
                }
                return ab
            },
            sendNow: function (X) {
                if (zAu.disabledRequest) {
                    return false
                }
                var ag = zAu.getAuRequests(X);
                if (ag.length == 0) {
                    return false
                }
                if (zk.mounting) {
                    zk.afterMount(function () {
                        zAu.sendNow(X)
                    });
                    return true
                }
                if (b || T) {
                    a = true;
                    return true
                }
                var ad, Z;
                for (var aa = 0, Y = ag.length; aa < Y; ++aa) {
                    var ae = ag[aa], V = ae.opts || {};
                    if (V.uri != Z) {
                        if (aa) {
                            break
                        }
                        Z = V.uri
                    }
                    if (!(ad = V.ignorable || V.implicit || V.defer)) {
                        break
                    }
                }
                try {
                    zWatch.fire("onSend", null, ad)
                } catch (ac) {
                    zAu.showError("FAILED_TO_SEND", null, null, ac)
                }
                var af = true;
                for (var aa = 0, Y = ag.length; aa < Y; ++aa) {
                    var ae = ag[aa], V = ae.opts || {};
                    if ((V.uri != Z) || !(af = af && V.ignorable)) {
                        break
                    }
                }
                var ab = "", W = {}, ah = Z || zk.ajaxURI(null, {desktop: X, au: true});
                for (var aa = 0, Y = ag.length; Y; ++aa, --Y) {
                    var ae = ag.shift();
                    if ((ae.opts || {}).uri != Z) {
                        ag.unshift(ae);
                        break
                    }
                    ah = zAu.beforeSend(ah, ae, X);
                    ab += zAu.encode(aa, ae, X);
                    zk.copy(W, (ae.opts || {}).rtags)
                }
                if (zk.portlet2Data && zk.portlet2Data[X.id]) {
                    ah = zk.portlet2Data[X.id].resourceURL
                }
                if (ab) {
                    Q({sid: c, uri: ah, dt: X, content: ab, implicit: ad, ignorable: af, tmout: 0, rtags: W})
                }
                return true
            },
            addAuRequest: function (W, V) {
                W._aureqs.push(V)
            },
            getAuRequests: function (V) {
                return V._aureqs
            },
            ajaxSettings: zk.$default({
                global: false,
                contentType: "application/x-www-form-urlencoded;charset=UTF-8"
            }, jq.ajaxSettings),
            _pfrecv: function (W, V) {
                S(W, "_pfRecvIds", V)
            },
            _pfdone: function (W, V) {
                S(W, "_pfDoneIds", V)
            },
            _pfsend: function (X, W, Y) {
                if (!Y) {
                    W.setRequestHeader("ZK-Client-Start", X.id + "-" + l++ + "=" + Math.round(jq.now()))
                }
                var V;
                if (V = X._pfRecvIds) {
                    W.setRequestHeader("ZK-Client-Receive", V);
                    X._pfRecvIds = null
                }
                if (V = X._pfDoneIds) {
                    W.setRequestHeader("ZK-Client-Complete", V);
                    X._pfDoneIds = null
                }
            },
            createWidgets: function (W, Z, Y) {
                var aa = [], V = W.length;
                if (V > 0) {
                    for (var X = 0; X < V; ++X) {
                        zkx_(W[X], function (ab) {
                            aa.push(ab);
                            if (aa.length == V) {
                                Z(aa)
                            }
                        }, Y)
                    }
                } else {
                    Z(aa)
                }
            },
            wrongValue_: function (W, V) {
                if (V !== false) {
                    jq.alert(V)
                }
            }
        };
        zAu.cmd0 = {
            bookmark: function (V, W) {
                zk.bmk.bookmark(V, W)
            }, obsolete: function (W, X) {
                if (X.startsWith("script:")) {
                    return $eval(X.substring(7))
                }
                if (zk._isReloadingInObsolete) {
                    return
                }
                var V = zk.Desktop.$(W);
                if (V && (V = V.requestPath)) {
                    X = X.replace(W, V + " (" + W + ")")
                }
                zAu.disabledRequest = true;
                jq.alert(X, {
                    icon: "ERROR", button: {
                        Reload: function () {
                            zk._isReloadingInObsolete = true;
                            location.reload()
                        }, Cancel: true
                    }
                })
            }, alert: function (X, W, V, Y) {
                if (Y) {
                    zAu.disabledRequest = true
                }
                jq.alert(X, {icon: V || "ERROR", title: W})
            }, redirect: function (V, X) {
                try {
                    zUtl.go(V, {target: X})
                } catch (W) {
                    if (!zk.confirmClose) {
                        throw W
                    }
                }
            }, title: function (V) {
                document.title = V
            }, log: zk.log, script: function (V) {
                jq.globalEval(V)
            }, echo: function (V) {
                zAu.send(new zk.Event(zk.Desktop.$(V), "dummy", null, {ignorable: true}))
            }, clientInfo: function (W) {
                zAu._cInfoReg = true;
                var V = "", X = 1;
                if (zk.mobile) {
                    if ((m && R) || (!m && !R)) {
                        D = {"-90": true, "90": true}
                    }
                    V = D[window.orientation] ? "portrait" : "landscape"
                } else {
                    V = jq.innerWidth() > jq.innerHeight() ? "landscape" : "portrait"
                }
                if (window.devicePixelRatio) {
                    X = window.devicePixelRatio
                }
                zAu.send(new zk.Event(zk.Desktop.$(W), "onClientInfo", [new Date().getTimezoneOffset(), screen.width, screen.height, screen.colorDepth, jq.innerWidth(), jq.innerHeight(), jq.innerX(), jq.innerY(), X.toFixed(1), V], {
                    implicit: true,
                    rtags: {onClientInfo: 1}
                }))
            }, visibilityChange: function (W) {
                var X = document.hidden || document[zk.vendor_ + "Hidden"], V = document.visibilityState || document[zk.vendor_ + "VisibilityState"];
                zAu.send(new zk.Event(zk.Desktop.$(W), "onVisibilityChange", {
                    hidden: X,
                    visibilityState: V
                }, {implicit: true, ignorable: true}))
            }, download: function (V) {
                if (V) {
                    var X = jq("#zk_download")[0];
                    if (X) {
                        X.src = V
                    } else {
                        var W = '<iframe src="' + V + '" id="zk_download" name="zk_download" style="visibility:hidden;width:0;height:0;border:0" frameborder="0"></iframe>';
                        jq(document.body).append(W)
                    }
                }
            }, print: function () {
                window.print()
            }, scrollBy: function (V, W) {
                window.scrollBy(V, W)
            }, scrollTo: function (V, W) {
                window.scrollTo(V, W)
            }, resizeBy: function (V, W) {
                window.resizeBy(V, W)
            }, resizeTo: function (V, W) {
                window.resizeTo(V, W)
            }, moveBy: function (V, W) {
                window.moveBy(V, W)
            }, moveTo: function (V, W) {
                window.moveTo(V, W)
            }, cfmClose: function (V) {
                zk.confirmClose = V
            }, showNotification: function (W, aa, Z, Y, ac, X, V, ad) {
                var ab = (zul && zul.wgt) ? zul.wgt.Notification : null;
                if (ab) {
                    ab.show(W, Z, {ref: Y, pos: ac, off: X, dur: V, type: aa, closable: ad})
                } else {
                    jq.alert(W)
                }
            }, showBusy: function (W, X) {
                if (arguments.length == 1) {
                    X = W;
                    W = null
                }
                zAu.cmd0.clearBusy(W);
                var V = W ? f.$(W) : null;
                if (!W) {
                    zUtl.progressbox("zk_showBusy", X || msgzk.PLEASE_WAIT, true, null, {busy: true})
                } else {
                    if (V) {
                        V.effects_.showBusy = new zk.eff.Mask({id: V.uuid + "-shby", anchor: V.$n(), message: X})
                    }
                }
            }, clearBusy: function (X) {
                var V = X ? f.$(X) : null, W = V ? V.effects_ : null;
                if (W && W.showBusy) {
                    W.showBusy.destroy();
                    delete W.showBusy
                }
                if (!X) {
                    zUtl.destroyProgressbox("zk_showBusy", {busy: true})
                }
            }, clearWrongValue: function () {
                for (var V = arguments.length; V--;) {
                    var W = f.$(arguments[V]);
                    if (W) {
                        if (W.clearErrorMessage) {
                            W.clearErrorMessage()
                        } else {
                            zAu.wrongValue_(W, false)
                        }
                    }
                }
            }, wrongValue: function () {
                var V = arguments, W = function () {
                    for (var Y = 0, X = V.length - 1; Y < X; Y += 2) {
                        var Z = V[Y], ab = V[Y + 1], aa = f.$(Z);
                        if (aa) {
                            if (aa.setErrorMessage) {
                                aa.setErrorMessage(ab)
                            } else {
                                zAu.wrongValue_(aa, ab)
                            }
                        } else {
                            if (!Z) {
                                jq.alert(ab)
                            }
                        }
                    }
                };
                if (this.__delay__) {
                    setTimeout(W, 100)
                } else {
                    W()
                }
            }, submit: function (V) {
                setTimeout(function () {
                    var W = f.$(V);
                    if (W && W.submit) {
                        W.submit()
                    } else {
                        zk(V).submit()
                    }
                }, 50)
            }, scrollIntoView: function (V) {
                this.__delay__ = setTimeout(function () {
                    var W = f.$(V);
                    if (W) {
                        W.scrollIntoView()
                    } else {
                        zk(V).scrollIntoView()
                    }
                    this.__delay__ = false
                }, 50)
            }
        };
        zAu.cmd1 = {
            setAttr: function (X, V, W) {
                if (X) {
                    if (V == "z$al") {
                        zk.afterLoad(function () {
                            for (V in W) {
                                X.set(V, W[V](), true)
                            }
                        })
                    } else {
                        X.rerenderNow_(null);
                        X.set(V, W, true)
                    }
                }
            }, outer: function (W, V) {
                zkx_(V, function (Y) {
                    var X = z(Y, "invalidate");
                    W.replaceWidget(Y);
                    P(Y, X)
                }, function (Y) {
                    for (var X = Y; X; X = X.parent) {
                        if (X == W) {
                            return null
                        }
                    }
                    return Y
                })
            }, addAft: function (X) {
                for (var W = arguments, V = W.length; --V;) {
                    zkx_(W[V], function (ab) {
                        var Z = X.parent, Y = z(ab, "show");
                        if (Z) {
                            Z.insertBefore(ab, X.nextSibling);
                            if (Z.$instanceof(zk.Desktop)) {
                                N(ab)
                            }
                        } else {
                            var aa = X.$n();
                            if (aa) {
                                jq(aa).after(ab, X.desktop)
                            } else {
                                N(ab)
                            }
                        }
                        if (!P(ab, Y) && !ab.z_rod) {
                            zUtl.fireSized(ab)
                        }
                    })
                }
            }, addBfr: function (X) {
                for (var W = arguments, V = 1; V < W.length; ++V) {
                    zkx_(W[V], function (Z) {
                        var Y = z(Z, "show");
                        X.parent.insertBefore(Z, X);
                        if (!P(Z, Y) && !Z.z_rod) {
                            zUtl.fireSized(Z)
                        }
                    })
                }
            }, addChd: function (X) {
                for (var W = arguments, V = 1; V < W.length; ++V) {
                    if (X) {
                        zkx_(W[V], function (Z) {
                            var Y = z(Z, "show");
                            X.appendChild(Z);
                            if (!P(Z, Y) && !Z.z_rod) {
                                zUtl.fireSized(Z)
                            }
                        })
                    } else {
                        zkx_(W[V], N)
                    }
                }
            }, rm: function (V) {
                if (V) {
                    V.detach();
                    u.push(V)
                }
            }, uuid: function (W, V) {
                if (W) {
                    zk._wgtutl.setUuid(W, V)
                }
            }, focus: function (V) {
                if (V) {
                    setTimeout(function () {
                        zk.afterAnimate(function () {
                            if (zk.ie9_) {
                                V.focus(100)
                            } else {
                                V.focus(0)
                            }
                        }, -1)
                    })
                }
            }, select: function (X, V, W) {
                if (X.select) {
                    X.select(V, W)
                }
            }, invoke: function (Z, Y) {
                var W = [];
                for (var V = arguments.length; --V > 1;) {
                    W.unshift(arguments[V])
                }
                if (Z) {
                    Z[Y].apply(Z, W)
                } else {
                    var X = zk.$import(Y);
                    if (!X) {
                        zk.error("not found: " + Y)
                    }
                    X.apply(null, W)
                }
            }, echo2: function (X, W, V) {
                zAu.send(new zk.Event(X, "echo", V != null ? [W, V] : [W], {ignorable: true}))
            }, resizeWgt: function (V) {
                zUtl.fireSized(V, 1)
            }
        }
    })();
    function onIframeURLChange(b, a) {
        if (!zk.unloading) {
            var c = zk.Widget.$(b);
            if (c) {
                c.fire("onURIChange", a)
            }
        }
    };
    (function () {
        function e(s, j, r) {
            var o = s.jq, h = o.prev(), q = [0, 0], n, k, m, g;
            if (h.length) {
                g = h[0].style;
                if (!zk(h[0]).isRealVisible()) {
                    return q
                } else {
                    m = o[0].style;
                    n = {};
                    k = {};
                    for (var p = ["marginTop", "marginBottom", "marginLeft", "marginRight"], l = p.length; l-- > 0;) {
                        n[p[l]] = m[p[l]];
                        k[p[l]] = g[p[l]];
                        m[p[l]] = g[p[l]] = "0px"
                    }
                    var i = h.zk.revisedOffset();
                    q[0] = i[0] + h.zk.offsetWidth();
                    q[1] = i[1] + h.zk.offsetHeight()
                }
            } else {
                q[0] = r[0] + j.sumStyles("l", jq.paddings) + j.sumStyles("l", jq.borders);
                q[1] = r[1] + j.sumStyles("t", jq.paddings) + j.sumStyles("t", jq.borders)
            }
            var i = s.revisedOffset();
            q[0] = i[0] - q[0];
            q[1] = i[1] - q[1];
            zk.copy(m, n);
            zk.copy(g, k);
            return [Math.max(0, q[0]), Math.max(0, q[1])]
        }

        function d(j, k, g) {
            if (g) {
                var i = j._hgh || (j._hgh = j.top + j.height), h = j._wdh || (j._wdh = j.left + j.width);
                return !(zk.ie == 10) ? k.top >= i || k.left < h : Math.round(k.top) >= i || Math.round(k.left) < h
            } else {
                var i = j._hgh || (j._hgh = j.top + j.height), h = j._wdh || (j._wdh = j.left + j.width);
                return !(zk.ie == 10) ? k.left >= h || k.top < i : Math.round(k.left) >= h || Math.round(k.top) < i
            }
        }

        function a(i) {
            var l, k, m, j, h, g, p, n, o;
            if (i) {
                l = "_vflexsz";
                k = "height";
                m = "_vflex";
                j = "offsetHeight";
                h = "marginHeight";
                g = "_maxFlexHeight";
                p = "_sumFlexHeight";
                n = 1;
                o = "getContentEdgeHeight_"
            } else {
                l = "_hflexsz";
                k = "width";
                m = "_hflex";
                j = "offsetWidth";
                h = "marginWidth";
                g = "_maxFlexWidth";
                p = "_sumFlexWidth";
                n = 0;
                o = "getContentEdgeWidth_"
            }
            return function (x, Q, I, K) {
                if (x[l] === undefined) {
                    var t = x.firstChild, J = Q, G = zk(J), N = 0;
                    if (K != null) {
                        N = K
                    } else {
                        var S = {};
                        S[k] = "auto";
                        x.setFlexSize_(S, true);
                        var y = 0, w = 0;
                        if (t && t.desktop) {
                            var v = t, C;
                            while (v && v.ignoreFlexSize_(I)) {
                                v = v.nextSibling
                            }
                            for (; t; t = t.nextSibling) {
                                if (!t.ignoreFlexSize_(I)) {
                                    var R = t.$n();
                                    if (R) {
                                        var q = R.style.position;
                                        if (q == "absolute" || q == "fixed") {
                                            continue
                                        }
                                        var O = zk(R), B = 0;
                                        if (t[m] == "min") {
                                            if (O.isVisible()) {
                                                B += t[l] === undefined ? zFlex.fixMinFlex(t, R, I) : t[l]
                                            }
                                        } else {
                                            t.beforeParentMinFlex_(I);
                                            B += x.getChildMinSize_(I, t) + O[h]()
                                        }
                                        if (t[g] && B > w) {
                                            w = B
                                        } else {
                                            if (t[p]) {
                                                y += B
                                            } else {
                                                if (!t[g] && v != t && d(C || (C = zk(v).dimension(true)), O.dimension(true), i)) {
                                                    N += B
                                                } else {
                                                    if (B > N) {
                                                        N = B
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            var R = Q.firstChild;
                            if (R) {
                                var F = R.nodeType == 3, P = x.ignoreChildNodeOffset_(I), v = R, C;
                                for (; R; R = R.nextSibling) {
                                    F = R.nodeType == 3;
                                    if (!F) {
                                        var q = R.style.position;
                                        if (q == "absolute" || q == "fixed") {
                                            continue
                                        }
                                    }
                                    var O = zk(R), B = 0;
                                    if (P) {
                                        for (var r = R.firstChild; r; r = r.nextSibling) {
                                            var A = r && r.nodeType == 3 ? r.nodeValue : null, E;
                                            if (A) {
                                                var M = O.textSize(A);
                                                if (M[1] > B) {
                                                    B = M[1]
                                                }
                                            } else {
                                                if ((E = zk(r)).isVisible()) {
                                                    var z = E[j]() + E[h]();
                                                    if (z > B) {
                                                        B = z
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        if (F) {
                                            B = R.nodeValue ? G.textSize(R.nodeValue)[n] : 0
                                        } else {
                                            B = O[j]() + O[h]()
                                        }
                                    }
                                    if (F) {
                                        if (B > N) {
                                            N = B
                                        }
                                    } else {
                                        var u = O.dimension(true);
                                        if (d(C || (C = zk(v).dimension(true)), u, i)) {
                                            N += B
                                        } else {
                                            if (B > N) {
                                                N = B
                                            }
                                        }
                                    }
                                }
                            } else {
                                N = G[j]()
                            }
                        }
                        if (w) {
                            y += w
                        }
                        if (y > N) {
                            N = y
                        }
                    }
                    var D = x.getMarginSize_(I);
                    if (zk.webkit && D < 0) {
                        D = 0
                    }
                    var S = {}, J = x.$n(), L = zk.isLoaded("zul.wgt") && x.$instanceof(zul.wgt.Caption) && x.nChildren > 0, H = L ? zk(x.$n("cave"))[j]() : N;
                    S[k] = H + x[o](H) + D;
                    var z = x.setFlexSize_(S, true);
                    B = {height: J.offsetHeight, width: (z && z.width) || J.offsetWidth};
                    if (B && B[k] >= 0) {
                        x[l] = B[k] + D
                    }
                    x.afterChildrenMinFlex_(I);
                    if (x.parent && x.parent[m] != "min") {
                        x.parent.afterChildMinFlexChanged_(x, I)
                    }
                }
                return x[l]
            }
        }

        var c = a(true), f = a();

        function b() {
            return 0
        }

        zFlex = {
            beforeSize: function (g, i, h) {
                var k = this, j;
                if (h) {
                    k.clearCachedSize_()
                }
                if (!zk.mounting && k.isRealVisible()) {
                    if (k._hflex && k._hflex != "min") {
                        k.resetSize_("w");
                        delete k._flexFixed;
                        if (j = k.parent) {
                            j.afterResetChildSize_("w")
                        }
                    }
                    if (k._vflex && k._vflex != "min") {
                        k.resetSize_("h");
                        delete k._flexFixed;
                        if (j = k.parent) {
                            j.afterResetChildSize_("h")
                        }
                    }
                }
            }, onSize: function () {
                zFlex.fixFlex(this)
            }, fixFlex: function (r) {
                if (r._flexFixed || (!r._nvflex && !r._nhflex)) {
                    delete r._flexFixed;
                    return
                }
                if ((r._vflex === undefined || (r._vflexsz && r._vflex == "min")) && (r._hflex === undefined || (r._hflexsz && r._hflex == "min"))) {
                    return
                }
                if (!r.parent.beforeChildrenFlex_(r)) {
                    return
                }
                r._flexFixed = true;
                var z = false, C = [], H = 0, g = [], E = 0, x = r.$n().parentNode, u = zk(x), s = r.getParentSize_(x), o = s.height, y = s.width, F = x.firstChild, m;
                if (u.hasVScroll()) {
                    y -= (m = jq.scrollbarWidth())
                }
                if (u.hasHScroll()) {
                    o -= m || jq.scrollbarWidth()
                }
                for (; F; F = F.nextSibling) {
                    if (F.nodeType != 3) {
                        break
                    }
                }
                for (var w; F; F = F.nextSibling) {
                    if (F.nodeType === 3) {
                        z = true;
                        continue
                    }
                    var i = F.style.position;
                    if (i == "absolute" || i == "fixed") {
                        continue
                    }
                    var B = zk(F);
                    if (B.isVisible(true)) {
                        var l = B.offsetHeight(), q = l > 0 ? B.offsetWidth() : 0, n = zk.Widget.$(F, {exact: 1});
                        if (q == 0 && n && zk.isLoaded("zul.mesh") && n.$instanceof(zul.mesh.HeaderWidget)) {
                            var t = n.$n("hdfaker");
                            q = t ? zk.parseInt(t.style.width) || t.offsetWidth : 0
                        }
                        if (z) {
                            if (!w) {
                                w = u.revisedOffset()
                            }
                            var v = e(B, u, w);
                            if (!n || !n.isExcludedHflex_()) {
                                y -= v[0]
                            }
                            if (!n || !n.isExcludedVflex_()) {
                                o -= v[1]
                            }
                        }
                        if (n && n._nhflex) {
                            if (n !== r) {
                                n._flexFixed = true
                            }
                            if (n._hflex == "min") {
                                y -= zFlex.fixMinFlex(n, F, "w")
                            } else {
                                g.push(n);
                                E += n._nhflex
                            }
                        } else {
                            if ((!n && (!zk.isLoaded("zul.wnd") || !r.$instanceof(zul.wnd.Panelchildren))) || (n && !n.isExcludedHflex_())) {
                                y -= q;
                                y -= B.marginWidth()
                            }
                        }
                        if (n && n._nvflex) {
                            if (n !== r) {
                                n._flexFixed = true
                            }
                            if (n._vflex == "min") {
                                o -= zFlex.fixMinFlex(n, F, "h")
                            } else {
                                C.push(n);
                                H += n._nvflex
                            }
                        } else {
                            if (!n || !n.isExcludedVflex_()) {
                                o -= l;
                                o -= B.marginHeight()
                            }
                        }
                        z = false
                    }
                }
                var G = o = Math.max(o, 0);
                for (var A = C.length - 1; A > 0; --A) {
                    var n = C.shift(), D = n.isExcludedVflex_() ? o : (n._nvflex * o / H) | 0;
                    n.setFlexSize_({height: D});
                    n._vflexsz = D;
                    if (!n.isExcludedVflex_()) {
                        G -= D
                    }
                }
                if (C.length) {
                    var n = C.shift();
                    n.setFlexSize_({height: G});
                    n._vflexsz = G
                }
                var h = r.getParentSize_(x);
                if (h.width > s.width) {
                    y += (h.width - s.width)
                }
                G = y = Math.max(y, 0);
                for (var A = g.length - 1; A > 0; --A) {
                    var n = g.shift(), k = n.isExcludedHflex_() ? y : (n._nhflex * y / E) | 0;
                    n.setFlexSize_({width: k});
                    n._hflexsz = k;
                    if (!n.isExcludedHflex_()) {
                        G -= k
                    }
                }
                if (g.length) {
                    var n = g.shift();
                    n.setFlexSize_({width: G});
                    n._hflexsz = G
                }
                r.parent.afterChildrenFlex_(r);
                r._flexFixed = false
            }, onFitSize: function () {
                var g = this, h = g.$n();
                if (h && zk(h).isVisible()) {
                    if (g._hflex == "min" && g._hflexsz === undefined) {
                        zFlex.fixMinFlex(g, h, "w")
                    }
                    if (g._vflex == "min" && g._vflexsz === undefined) {
                        zFlex.fixMinFlex(g, h, "h")
                    }
                }
            }, fixMinFlex: function (i, g, h) {
                return (h == "h" ? c : h == "w" ? f : b)(i, g, h, i.beforeMinFlex_(h))
            }
        }
    })();
    (function (c) {
        function d(f) {
            return f < 10 ? "0" + f : f
        }

        if (typeof Date.prototype.toJSON !== "function") {
            Date.prototype.toJSON = function (f) {
                return this.valueOf() ? this.getUTCFullYear() + "-" + d(this.getUTCMonth() + 1) + "-" + d(this.getUTCDate()) + "T" + d(this.getUTCHours()) + ":" + d(this.getUTCMinutes()) + ":" + d(this.getUTCSeconds()) + "Z" : null
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (f) {
                return this.valueOf()
            }
        }
        var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, g = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, h, j = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, i;

        function a(f) {
            g.lastIndex = 0;
            return g.test(f) ? '"' + f.replace(g, function (k) {
                var l = j[k];
                return typeof l === "string" ? l : "\\u" + ("0000" + k.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + f + '"'
        }

        function e(r, o) {
            var m, l, s, f, p = h, n, q = o[r];
            if (q && typeof q === "object" && typeof q.toJSON === "function") {
                q = q.toJSON(r)
            }
            if (typeof i === "function") {
                q = i.call(o, r, q)
            }
            switch (typeof q) {
                case"string":
                    return a(q);
                case"number":
                    return isFinite(q) ? String(q) : "null";
                case"boolean":
                case"null":
                    return String(q);
                case"object":
                    if (!q) {
                        return "null"
                    }
                    n = [];
                    if (Object.prototype.toString.apply(q) === "[object Array]") {
                        f = q.length;
                        for (m = 0; m < f; m += 1) {
                            n[m] = e(m, q) || "null"
                        }
                        s = n.length === 0 ? "[]" : h ? "[\n" + h + n.join(",\n" + h) + "\n" + p + "]" : "[" + n.join(",") + "]";
                        h = p;
                        return s
                    }
                    for (l in q) {
                        if (Object.hasOwnProperty.call(q, l)) {
                            s = e(l, q);
                            if (s) {
                                n.push(a(l) + (h ? ": " : ":") + s)
                            }
                        }
                    }
                    s = n.length === 0 ? "{}" : h ? "{\n" + h + n.join(",\n" + h) + "\n" + p + "}" : "{" + n.join(",") + "}";
                    h = p;
                    return s
            }
        }

        c.toJSON = function (l, k) {
            var f;
            h = "";
            i = k;
            return e("", {"": l})
        };
        c.evalJSON = function (f) {
            return (new Function("return (" + f + ")"))()
        };
        c.j2d = function (f) {
            if (f == null) {
                return null
            }
            var f = f.split(".");
            return new Date(parseInt(f[0], 10), parseInt(f[1]) - 1, parseInt(f[2]), parseInt(f[3]), parseInt(f[4]), parseInt(f[5]), parseInt(f[6]))
        };
        c.d2j = function (f) {
            return f ? [f.getFullYear(), f.getMonth() + 1, f.getDate(), f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds()].join(".") : null
        }
    }(jq));
    (function (d) {
        var b = ["DOMMouseScroll", "mousewheel"];
        if (d.event.fixHooks) {
            for (var a = b.length; a;) {
                d.event.fixHooks[b[--a]] = d.event.mouseHooks
            }
        }
        d.event.special.mousewheel = {
            setup: function () {
                if (this.addEventListener) {
                    for (var e = b.length; e;) {
                        this.addEventListener(b[--e], c, false)
                    }
                } else {
                    this.onmousewheel = c
                }
            }, teardown: function () {
                if (this.removeEventListener) {
                    for (var e = b.length; e;) {
                        this.removeEventListener(b[--e], c, false)
                    }
                } else {
                    this.onmousewheel = null
                }
            }
        };
        d.fn.extend({
            mousewheel: function (e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            }, unmousewheel: function (e) {
                return this.unbind("mousewheel", e)
            }
        });
        function c(j) {
            var h = j || window.event, g = [].slice.call(arguments, 1), k = 0, i = true, f = 0, e = 0;
            j = d.event.fix(h);
            j.type = "mousewheel";
            if (h.wheelDelta) {
                k = h.wheelDelta / 120
            }
            if (h.detail) {
                k = -h.detail / 3
            }
            e = k;
            if (h.axis !== undefined && h.axis === h.HORIZONTAL_AXIS) {
                e = 0;
                f = -1 * k
            }
            if (h.wheelDeltaY !== undefined) {
                e = h.wheelDeltaY / 120
            }
            if (h.wheelDeltaX !== undefined) {
                f = (zk.safari_ ? 1 : -1) * h.wheelDeltaX / 120
            }
            g.unshift(j, k, f, e);
            return (d.event.dispatch || d.event.handle).apply(this, g)
        }
    })(jQuery);
    (function (k) {
        k.transit = {
            version: "0.9.9",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: true,
            useTransitionEnd: false
        };
        var d = document.createElement("div");
        var q = {};

        function b(v) {
            if (v in d.style) {
                return v
            }
            var u = ["Moz", "Webkit", "O", "ms"];
            var r = v.charAt(0).toUpperCase() + v.substr(1);
            if (v in d.style) {
                return v
            }
            for (var t = 0; t < u.length; ++t) {
                var s = u[t] + r;
                if (s in d.style) {
                    return s
                }
            }
        }

        function e() {
            d.style[q.transform] = "";
            d.style[q.transform] = "rotateY(90deg)";
            return d.style[q.transform] !== ""
        }

        var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        q.transition = b("transition");
        q.transitionDelay = b("transitionDelay");
        q.transform = b("transform");
        q.transformOrigin = b("transformOrigin");
        q.transform3d = e();
        var i = {
            transition: "transitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            WebkitTransition: "webkitTransitionEnd",
            msTransition: "MSTransitionEnd"
        };
        var f = q.transitionEnd = i[q.transition] || null;
        for (var p in q) {
            if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") {
                k.support[p] = q[p]
            }
        }
        d = null;
        k.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        };
        k.cssHooks["transit:transform"] = {
            get: function (r) {
                return k(r).data("transform") || new j()
            }, set: function (s, r) {
                var t = r;
                if (!(t instanceof j)) {
                    t = new j(t)
                }
                if (q.transform === "WebkitTransform" && !a) {
                    s.style[q.transform] = t.toString(true)
                } else {
                    s.style[q.transform] = t.toString()
                }
                k(s).data("transform", t)
            }
        };
        k.cssHooks.transform = {set: k.cssHooks["transit:transform"].set};
        if (k.fn.jquery < "1.8") {
            k.cssHooks.transformOrigin = {
                get: function (r) {
                    return r.style[q.transformOrigin]
                }, set: function (r, s) {
                    r.style[q.transformOrigin] = s
                }
            };
            k.cssHooks.transition = {
                get: function (r) {
                    return r.style[q.transition]
                }, set: function (r, s) {
                    r.style[q.transition] = s
                }
            }
        }
        n("scale");
        n("translate");
        n("rotate");
        n("rotateX");
        n("rotateY");
        n("rotate3d");
        n("perspective");
        n("skewX");
        n("skewY");
        n("x", true);
        n("y", true);
        function j(r) {
            if (typeof r === "string") {
                this.parse(r)
            }
            return this
        }

        j.prototype = {
            setFromString: function (t, s) {
                var r = (typeof s === "string") ? s.split(",") : (s.constructor === Array) ? s : [s];
                r.unshift(t);
                j.prototype.set.apply(this, r)
            }, set: function (s) {
                var r = Array.prototype.slice.apply(arguments, [1]);
                if (this.setter[s]) {
                    this.setter[s].apply(this, r)
                } else {
                    this[s] = r.join(",")
                }
            }, get: function (r) {
                if (this.getter[r]) {
                    return this.getter[r].apply(this)
                } else {
                    return this[r] || 0
                }
            }, setter: {
                rotate: function (r) {
                    this.rotate = o(r, "deg")
                }, rotateX: function (r) {
                    this.rotateX = o(r, "deg")
                }, rotateY: function (r) {
                    this.rotateY = o(r, "deg")
                }, scale: function (r, s) {
                    if (s === undefined) {
                        s = r
                    }
                    this.scale = r + "," + s
                }, skewX: function (r) {
                    this.skewX = o(r, "deg")
                }, skewY: function (r) {
                    this.skewY = o(r, "deg")
                }, perspective: function (r) {
                    this.perspective = o(r, "px")
                }, x: function (r) {
                    this.set("translate", r, null)
                }, y: function (r) {
                    this.set("translate", null, r)
                }, translate: function (r, s) {
                    if (this._translateX === undefined) {
                        this._translateX = 0
                    }
                    if (this._translateY === undefined) {
                        this._translateY = 0
                    }
                    if (r !== null && r !== undefined) {
                        this._translateX = o(r, "px")
                    }
                    if (s !== null && s !== undefined) {
                        this._translateY = o(s, "px")
                    }
                    this.translate = this._translateX + "," + this._translateY
                }
            }, getter: {
                x: function () {
                    return this._translateX || 0
                }, y: function () {
                    return this._translateY || 0
                }, scale: function () {
                    var r = (this.scale || "1,1").split(",");
                    if (r[0]) {
                        r[0] = parseFloat(r[0])
                    }
                    if (r[1]) {
                        r[1] = parseFloat(r[1])
                    }
                    return (r[0] === r[1]) ? r[0] : r
                }, rotate3d: function () {
                    var t = (this.rotate3d || "0,0,0,0deg").split(",");
                    for (var r = 0; r <= 3; ++r) {
                        if (t[r]) {
                            t[r] = parseFloat(t[r])
                        }
                    }
                    if (t[3]) {
                        t[3] = o(t[3], "deg")
                    }
                    return t
                }
            }, parse: function (s) {
                var r = this;
                s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, v, u) {
                    r.setFromString(v, u)
                })
            }, toString: function (t) {
                var s = [];
                for (var r in this) {
                    if (this.hasOwnProperty(r)) {
                        if ((!q.transform3d) && ((r === "rotateX") || (r === "rotateY") || (r === "perspective") || (r === "transformOrigin"))) {
                            continue
                        }
                        if (r[0] !== "_") {
                            if (t && (r === "scale")) {
                                s.push(r + "3d(" + this[r] + ",1)")
                            } else {
                                if (t && (r === "translate")) {
                                    s.push(r + "3d(" + this[r] + ",0)")
                                } else {
                                    s.push(r + "(" + this[r] + ")")
                                }
                            }
                        }
                    }
                }
                return s.join(" ")
            }
        };
        function m(s, r, t) {
            if (r === true) {
                s.queue(t)
            } else {
                if (r) {
                    s.queue(r, t)
                } else {
                    t()
                }
            }
        }

        function h(s) {
            var r = [];
            k.each(s, function (t) {
                t = k.camelCase(t);
                t = k.transit.propertyMap[t] || k.cssProps[t] || t;
                t = c(t);
                if (k.inArray(t, r) === -1) {
                    r.push(t)
                }
            });
            return r
        }

        function g(s, v, x, r) {
            var t = h(s);
            if (k.cssEase[x]) {
                x = k.cssEase[x]
            }
            var w = "" + l(v) + " " + x;
            if (parseInt(r, 10) > 0) {
                w += " " + l(r)
            }
            var u = [];
            k.each(t, function (z, y) {
                u.push(y + " " + w)
            });
            return u.join(", ")
        }

        k.fn.transition = k.fn.transit = function (z, s, y, C) {
            var D = this;
            var u = 0;
            var w = true;
            if (typeof s === "function") {
                C = s;
                s = undefined
            }
            if (typeof y === "function") {
                C = y;
                y = undefined
            }
            if (typeof z.easing !== "undefined") {
                y = z.easing;
                delete z.easing
            }
            if (typeof z.duration !== "undefined") {
                s = z.duration;
                delete z.duration
            }
            if (typeof z.complete !== "undefined") {
                C = z.complete;
                delete z.complete
            }
            if (typeof z.queue !== "undefined") {
                w = z.queue;
                delete z.queue
            }
            if (typeof z.delay !== "undefined") {
                u = z.delay;
                delete z.delay
            }
            if (typeof s === "undefined") {
                s = k.fx.speeds._default
            }
            if (typeof y === "undefined") {
                y = k.cssEase._default
            }
            s = l(s);
            var E = g(z, s, y, u);
            var B = k.transit.enabled && q.transition;
            var t = B ? (parseInt(s, 10) + parseInt(u, 10)) : 0;
            if (t === 0) {
                var A = function (F) {
                    D.css(z);
                    if (C) {
                        C.apply(D)
                    }
                    if (F) {
                        F()
                    }
                };
                m(D, w, A);
                return D
            }
            var x = {};
            var r = function (H) {
                var G = false;
                var F = function () {
                    if (G) {
                        D.unbind(f, F)
                    }
                    if (t > 0) {
                        D.each(function () {
                            this.style[q.transition] = (x[this] || null)
                        })
                    }
                    if (typeof C === "function") {
                        C.apply(D)
                    }
                    if (typeof H === "function") {
                        H()
                    }
                };
                if ((t > 0) && (f) && (k.transit.useTransitionEnd)) {
                    G = true;
                    D.bind(f, F)
                } else {
                    window.setTimeout(F, t)
                }
                D.each(function () {
                    if (t > 0) {
                        this.style[q.transition] = E
                    }
                    k(this).css(z)
                })
            };
            var v = function (F) {
                this.offsetWidth;
                r(F)
            };
            m(D, w, v);
            return this
        };
        function n(s, r) {
            if (!r) {
                k.cssNumber[s] = true
            }
            k.transit.propertyMap[s] = q.transform;
            k.cssHooks[s] = {
                get: function (v) {
                    var u = k(v).css("transit:transform");
                    return u.get(s)
                }, set: function (v, w) {
                    var u = k(v).css("transit:transform");
                    u.setFromString(s, w);
                    k(v).css({"transit:transform": u})
                }
            }
        }

        function c(r) {
            return r.replace(/([A-Z])/g, function (s) {
                return "-" + s.toLowerCase()
            })
        }

        function o(s, r) {
            if ((typeof s === "string") && (!s.match(/^[\-0-9\.]+$/))) {
                return s
            } else {
                return "" + s + r
            }
        }

        function l(s) {
            var r = s;
            if (k.fx.speeds[r]) {
                r = k.fx.speeds[r]
            }
            return o(r, "ms")
        }

        k.transit.getTransitionValue = g
    })(jQuery);

    zkver('7.0.3.2', '2014110510', '/ksybaoming', '/ksybaoming/zkau', {'gmaps': '3.0.1'}, {ed: 'e', eu: {}, eup: {}});
}
zk.load('zul.lang', function () {
    if (zk._p = zkpi('zul'))try {
        (function () {
            jq(function () {
                var e = zk.themeName, f = "breeze";
                if (e) {
                    f = e
                }
                jq(document.body).addClass(f)
            });
            var c = jq.alert, a = {
                QUESTION: "z-messagebox-icon z-messagebox-question",
                EXCLAMATION: "z-messagebox-icon z-messagebox-exclamation",
                INFORMATION: "z-messagebox-icon z-messagebox-information",
                ERROR: "z-messagebox-icon z-messagebox-error",
                NONE: "z-messagebox z-messagebox-none"
            };

            function b(e, g) {
                return new zul.wgt.Button({
                    label: msgzul[e.toUpperCase()] || e, listeners: {
                        onClick: function (f) {
                            if (typeof g == "function") {
                                g.call(this, f)
                            }
                            var h = this.desktop;
                            this.$o().detach();
                            if (zAu.disabledRequest) {
                                zAu.disabledRequest = false;
                                zAu.sendNow(h)
                            }
                        }
                    }
                })
            }

            function d(h) {
                var g = [];
                for (var e in h) {
                    var i = h[e];
                    g.push(b(e, typeof i == "function" ? i : null))
                }
                if (!g.length) {
                    g.push(b("OK"))
                }
                return g
            }

            jq.alert = function (f, e) {
                if (e && e.mode == "os") {
                    return c(f)
                }
                e = e || {};
                zk.load("zul.wnd,zul.wgt,zul.box", function () {
                    var i = zk.Widget.$(jq("$aualert"));
                    if (!i) {
                        var i = new zul.wnd.Window({
                            id: "aualert",
                            closable: true,
                            width: "250pt",
                            title: e.title || zk.appName,
                            border: "normal",
                            listeners: {
                                onClose: function () {
                                    if (zAu.disabledRequest) {
                                        zAu.disabledRequest = false;
                                        zAu.sendNow(this.desktop)
                                    }
                                }
                            },
                            children: [new zul.box.Box({
                                mold: "horizontal",
                                children: [new zul.wgt.Div({sclass: a[(e.icon || "").toUpperCase()] || e.icon || a.INFORMATION}), new zul.wgt.Div({
                                    id: "content",
                                    sclass: "z-messagebox",
                                    width: "210pt",
                                    style: "overflow:auto",
                                    children: [new zul.wgt.Label({id: "msg", value: f, multiline: true})]
                                })]
                            }), new zul.wgt.Separator({bar: true}), new zul.box.Box({
                                mold: "horizontal",
                                style: "margin-left:auto; margin-right:auto",
                                children: d(e.button)
                            })],
                            mode: e.mode || "modal"
                        });
                        var j = e.desktop || zk.Desktop.$();
                        if (j && (j = j.firstChild) && j.desktop) {
                            j.appendChild(i)
                        } else {
                            jq(document.body).append(i)
                        }
                    } else {
                        var h = i.$f("msg"), j = h.parent, g = j.$n();
                        h.setValue(h.getValue() + "\n" + f);
                        if (!g.style.height && g.offsetHeight >= jq.innerHeight() * 0.6) {
                            g.style.height = jq.px0(jq.innerHeight() * 0.6)
                        }
                    }
                })
            };
            zAu.wrongValue_ = function (g, f) {
                var e = g.effects_;
                if (e.errMesg) {
                    e.errMesg.destroy();
                    delete e.errMesg
                }
                if (f !== false) {
                    e.errMesg = {destroy: zk.$void};
                    zk.load("zul.inp", function () {
                        if (e.errMesg) {
                            (e.errMesg = new zul.inp.Errorbox(g, f)).show()
                        }
                    })
                }
            }
        })();
        (function () {
            var b, k, m, c;

            function h(o) {
                if (m && !m.isOpen()) {
                    l();
                    g();
                    m = c = null
                }
                var n = m && zUtl.isAncestor(m, o);
                if (n) {
                    g()
                }
                return !n
            }

            function e(p, o, q, n) {
                if (m != p || c != o) {
                    f();
                    b = {
                        tip: p, ref: o, params: q, timer: setTimeout(function () {
                            a(n)
                        }, q.delay !== undefined ? q.delay : zk.tipDelay)
                    }
                } else {
                    g()
                }
            }

            function d(n) {
                if (c == n || m == n) {
                    g();
                    k = setTimeout(f, 100)
                } else {
                    l()
                }
            }

            function l() {
                var n = b;
                if (n) {
                    b = null;
                    clearTimeout(n.timer)
                }
            }

            function g() {
                var n = k;
                if (n) {
                    k = null;
                    clearTimeout(n)
                }
            }

            function a(q) {
                var p = b;
                if (p) {
                    m = p.tip, c = p.ref;
                    b = null;
                    var u = c.$n();
                    if (!u || !zk(u).isRealVisible()) {
                        return m = c = null
                    }
                    var s = p.params, o = s.x, t = s.y;
                    if (o) {
                        s.x = i(q, o)
                    }
                    if (t) {
                        s.y = i(q, t)
                    }
                    var r = s.x !== undefined ? [s.x, s.y] : zk.currentPointer;
                    m.open(c, r, s.position ? s.position : s.x === null ? "after_pointer" : null, {sendOnOpen: true})
                }
            }

            function f() {
                l();
                g();
                var o = m;
                if (o && o.desktop) {
                    if (zk.ie == 10 || zk.ff) {
                        var q = jq(o.$n()), n = q.offset(), p = zk.currentPointer;
                        if ((p[0] >= n.left && p[0] <= (n.left + q.width())) && (p[1] >= n.top && p[1] <= (n.top + q.height()))) {
                            return
                        }
                    }
                    m = c = null;
                    o.close({sendOnOpen: true})
                }
            }

            function j(n) {
                zk.error("setCtrlKeys: " + n)
            }

            function i(p, n) {
                if (n.indexOf("(") != -1 && n.indexOf(")") != -1) {
                    var o = new Function("event", "return " + n + ";");
                    return o(p)
                } else {
                    return zk.parseInt(n)
                }
            }

            zul.Widget = zk.$extends(zk.Widget, {
                getContext: function () {
                    return this._context
                }, setContext: function (n) {
                    if (zk.Widget.isInstance(n)) {
                        n = "uuid(" + n.uuid + ")"
                    }
                    this._context = n;
                    return this
                }, getPopup: function () {
                    return this._popup
                }, setPopup: function (n) {
                    if (zk.Widget.isInstance(n)) {
                        n = "uuid(" + n.uuid + ")"
                    }
                    this._popup = n;
                    return this
                }, getTooltip: function () {
                    return this._tooltip
                }, setTooltip: function (n) {
                    if (zk.Widget.isInstance(n)) {
                        n = "uuid(" + n.uuid + ")"
                    }
                    this._tooltip = n;
                    return this
                }, getCtrlKeys: function () {
                    return this._ctrlKeys
                }, setCtrlKeys: function (x) {
                    if (this._ctrlKeys == x) {
                        return
                    }
                    if (!x) {
                        this._ctrlKeys = this._parsedCtlKeys = null;
                        return
                    }
                    var u = [{}, {}, {}, {}, {}], p = 0;
                    for (var r = 0, t = x.length; r < t; ++r) {
                        var n = x.charAt(r);
                        switch (n) {
                            case"^":
                            case"$":
                            case"@":
                                if (p) {
                                    return j("Combination of Shift, Alt and Ctrl not supported: " + x)
                                }
                                p = n == "^" ? 1 : n == "@" ? 2 : 3;
                                break;
                            case"#":
                                var o = r + 1;
                                for (; o < t; ++o) {
                                    var q = x.charAt(o);
                                    if ((q > "Z" || q < "A") && (q > "z" || q < "a") && (q > "9" || q < "0")) {
                                        break
                                    }
                                }
                                if (o == r + 1) {
                                    return j("Unexpected character " + n + " in " + x)
                                }
                                var y = x.substring(r + 1, o).toLowerCase();
                                if ("pgup" == y) {
                                    n = 33
                                } else {
                                    if ("pgdn" == y) {
                                        n = 34
                                    } else {
                                        if ("end" == y) {
                                            n = 35
                                        } else {
                                            if ("home" == y) {
                                                n = 36
                                            } else {
                                                if ("left" == y) {
                                                    n = 37
                                                } else {
                                                    if ("up" == y) {
                                                        n = 38
                                                    } else {
                                                        if ("right" == y) {
                                                            n = 39
                                                        } else {
                                                            if ("down" == y) {
                                                                n = 40
                                                            } else {
                                                                if ("ins" == y) {
                                                                    n = 45
                                                                } else {
                                                                    if ("del" == y) {
                                                                        n = 46
                                                                    } else {
                                                                        if ("bak" == y) {
                                                                            n = 8
                                                                        } else {
                                                                            if (y.length > 1 && y.charAt(0) == "f") {
                                                                                var w = zk.parseInt(y.substring(1));
                                                                                if (w == 0 || w > 12) {
                                                                                    return j("Unsupported function key: #f" + w)
                                                                                }
                                                                                n = 112 + w - 1
                                                                            } else {
                                                                                return j("Unknown #" + y + " in " + x)
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                u[p][n] = true;
                                p = 0;
                                r = o - 1;
                                break;
                            default:
                                if (!p || ((n > "Z" || n < "A") && (n > "z" || n < "a") && (n > "9" || n < "0"))) {
                                    return j("Unexpected character " + n + " in " + x)
                                }
                                if (p == 3) {
                                    return j("$a - $z not supported (found in " + x + "). Allowed: $#f1, $#home and so on.")
                                }
                                if (n <= "z" && n >= "a") {
                                    n = n.toUpperCase()
                                }
                                u[p][n.charCodeAt(0)] = true;
                                p = 0;
                                break
                        }
                    }
                    this._parsedCtlKeys = u;
                    this._ctrlKeys = x;
                    return this
                }, _parsePopParams: function (q, n) {
                    var p = {}, s = q.indexOf(","), o = q.indexOf("="), w = q;
                    if (o != -1) {
                        w = q.substring(0, q.substring(0, o).lastIndexOf(","))
                    }
                    if (s != -1) {
                        p.id = w.substring(0, s).trim();
                        var r = w.substring(s + 1, w.length);
                        if (r) {
                            p.position = r.trim()
                        }
                        zk.copy(p, zUtl.parseMap(q.substring(w.length, q.length)))
                    } else {
                        p.id = q.trim()
                    }
                    if (this._popup || this._context) {
                        var v = p.x, u = p.y;
                        if (v) {
                            p.x = i(n, v)
                        }
                        if (u) {
                            p.y = i(n, u)
                        }
                    }
                    if (p.delay) {
                        p.delay = zk.parseInt(p.delay)
                    }
                    return p
                }, doClick_: function (o, q) {
                    if (!this.shallIgnoreClick_(o) && !o.contextSelected) {
                        var s = this._popup ? this._parsePopParams(this._popup, o) : {}, n = this._smartFellow(s.id);
                        if (n) {
                            o.contextSelected = true;
                            var p = this, r = s.x !== undefined ? [s.x, s.y] : [o.pageX, o.pageY];
                            if (s.type && s.type == "toggle" && n.isOpen()) {
                                n.close({sendOnOpen: true})
                            } else {
                                setTimeout(function () {
                                    n.open(p, r, s.position ? s.position : null, {
                                        sendOnOpen: true,
                                        type: s.type,
                                        which: 1
                                    })
                                }, 0)
                            }
                            o.stop({dom: true})
                        }
                    }
                    if (q !== true) {
                        this.$supers("doClick_", arguments)
                    }
                }, doRightClick_: function (o) {
                    if (!this.shallIgnoreClick_(o) && !o.contextSelected) {
                        var r = this._context ? this._parsePopParams(this._context, o) : {}, n = this._smartFellow(r.id);
                        if (n) {
                            o.contextSelected = true;
                            var p = this, q = r.x !== undefined ? [r.x, r.y] : [o.pageX, o.pageY];
                            if (r.type && r.type == "toggle" && n.isOpen()) {
                                n.close({sendOnOpen: true})
                            } else {
                                setTimeout(function () {
                                    n.open(p, q, r.position ? r.position : null, {
                                        sendOnOpen: true,
                                        type: r.type,
                                        which: 3
                                    })
                                }, 0)
                            }
                            o.stop({dom: true})
                        }
                    }
                    this.$supers("doRightClick_", arguments)
                }, doTooltipOver_: function (n) {
                    if (!n.tooltipped && h(this)) {
                        var p = this._tooltip ? this._parsePopParams(this._tooltip) : {}, o = this._smartFellow(p.id);
                        if (o) {
                            n.tooltipped = true;
                            e(o, this, p, n)
                        }
                    }
                    this.$supers("doTooltipOver_", arguments)
                }, doTooltipOut_: function (n) {
                    d(this);
                    this.$supers("doTooltipOut_", arguments)
                }, _smartFellow: function (n) {
                    return n ? n.startsWith("uuid(") && n.endsWith(")") ? zk.Widget.$(n.substring(5, n.length - 1)) : this.$f(n, true) : null
                }, afterKeyDown_: function (o) {
                    var t = o.keyCode, s = "onCtrlKey", q;
                    switch (t) {
                        case 13:
                            var r = o.domTarget, n = jq.nodeName(r);
                            if (n == "textarea" || (n == "button" && (!r.id || !r.id.endsWith("-a"))) || (n == "input" && r.type.toLowerCase() == "button")) {
                                return
                            }
                            q = s = "onOK";
                            break;
                        case 27:
                            q = s = "onCancel";
                            break;
                        case 16:
                        case 17:
                        case 18:
                            return;
                        case 45:
                        case 46:
                        case 8:
                            break;
                        default:
                            if ((t >= 33 && t <= 40) || (t >= 112 && t <= 123) || o.ctrlKey || o.altKey) {
                                break
                            }
                            return
                    }
                    var r = o.target, u = r;
                    for (; ; u = u.parent) {
                        if (!u) {
                            return
                        }
                        if (!u.isListen(s, {any: true})) {
                            continue
                        }
                        if (q) {
                            break
                        }
                        var p = u._parsedCtlKeys;
                        if (p && p[o.ctrlKey ? 1 : o.altKey ? 2 : o.shiftKey ? 3 : 0][t]) {
                            break
                        }
                    }
                    setTimeout(function () {
                        for (var v = r; ; v = v.parent) {
                            if (v.beforeCtrlKeys_ && v.beforeCtrlKeys_(o)) {
                                return
                            }
                            if (v == u) {
                                break
                            }
                        }
                        u.fire(s, zk.copy({reference: r}, o.data))
                    }, 0);
                    o.stop();
                    if (jq.nodeName(o.domTarget, "select")) {
                        o.stop({dom: true, revoke: true})
                    }
                    if (zk.ie < 11 && t == 112) {
                        zk._oldOnHelp = window.onhelp;
                        window.onhelp = function () {
                            return false
                        };
                        setTimeout(function () {
                            window.onhelp = zk._oldOnHelp;
                            zk._oldOnHelp = null
                        }, 200)
                    }
                    return true
                }, beforeCtrlKeys_: function (n) {
                }
            }, {
                getOpenTooltip: function () {
                    return m && m.isOpen() ? m : null
                }
            })
        })();
        zul.LabelImageWidget = zk.$extends(zul.Widget, {
            _label: "", setLabel: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_label", (_zkf = function () {
                if (this.desktop) {
                    this.updateDomContent_()
                }
            })), getLabel: _zkf$ = function () {
                return this._label
            }, isLabel: _zkf$, setIconSclass: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_iconSclass", (_zkf)), getIconSclass: _zkf$ = function () {
                return this._iconSclass
            }, isIconSclass: _zkf$, setImage: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_image", (function (b) {
                if (b && this._preloadImage) {
                    zUtl.loadImage(b)
                }
                var c = this.getImageNode();
                if (c) {
                    var a = b || "";
                    if (jq.nodeName(c, "img")) {
                        c.src = a
                    } else {
                        jq(c).css("background-image", "url(" + a + ")")
                    }
                } else {
                    if (this.desktop) {
                        this.updateDomContent_()
                    }
                }
            })), getImage: _zkf$ = function () {
                return this._image
            }, isImage: _zkf$, setHoverImage: (function (a) {
                return function (b) {
                    this[a] = b;
                    return this
                }
            })("_hoverImage"), getHoverImage: _zkf$ = function () {
                return this._hoverImage
            }, isHoverImage: _zkf$, updateDomContent_: function () {
                this.rerender()
            }, domImage_: function () {
                var a = this._image;
                return a ? '<img src="' + a + '" align="absmiddle" />' : ""
            }, domIcon_: function () {
                var a = this.getIconSclass();
                return a ? '<i class="' + a + '"></i>' : ""
            }, domLabel_: function () {
                return zUtl.encodeXML(this.getLabel())
            }, domContent_: function () {
                var b = this.domLabel_(), c = this.domIcon_(), a = this.domImage_();
                if (a) {
                    if (c) {
                        return a + " " + c + (b ? " " + b : "")
                    } else {
                        return b ? a + " " + b : a
                    }
                } else {
                    return c ? b ? c + " " + b : c : b
                }
            }, doMouseOver_: function () {
                this._updateHoverImage(true);
                this.$supers("doMouseOver_", arguments)
            }, doMouseOut_: function () {
                this._updateHoverImage();
                this.$supers("doMouseOut_", arguments)
            }, getImageNode: function () {
                if (!this._eimg && this._image) {
                    var a = this.$n();
                    if (a) {
                        this._eimg = jq(a).find("img:first")[0]
                    }
                }
                return this._eimg
            }, _updateHoverImage: function (a) {
                var c = this.getImageNode(), b = a ? this._hoverImage : this._image;
                if (c && this._hoverImage) {
                    if (jq.nodeName(c, "img")) {
                        c.src = b
                    } else {
                        jq(c).css("background-image", "url(" + b + ")")
                    }
                }
            }, clearCache: function () {
                this._eimg = null;
                this.$supers("clearCache", arguments)
            }
        });
        zul.ContainerWidget = zk.$extends(zul.Widget, {
            bind_: function () {
                this.$supers(zul.ContainerWidget, "bind_", arguments);
                if (jq(this).data("scrollable")) {
                    this.domListen_(this.getCaveNode(), "onScroll")
                }
            }, _doScroll: function () {
                if (jq(this).data("scrollable")) {
                    zWatch.fireDown("onScroll", this)
                }
            }, unbind_: function () {
                if (jq(this).data("scrollable")) {
                    this.domUnlisten_(this.getCaveNode(), "onScroll")
                }
                this.$supers(zul.ContainerWidget, "unbind_", arguments)
            }
        });
        (function () {
            function e(q, l, n) {
                var m = q.getKey(l), p = q.uploaders[m];
                if (p) {
                    p.destroy(n)
                }
                delete q.uploaders[m]
            }

            function j(q, m, p) {
                var l = q.getKey(q.sid), n = new zul.Uploader(q, l, m, p);
                zul.Upload.start(n);
                q.uploaders[l] = n
            }

            function b(n, l, m) {
                j(n, l, m);
                n.sid++;
                n.initContent()
            }

            function f(t) {
                var q = this, v = q._ctrl, u = v._wgt, o = u.desktop, r = zk.ajaxURI("/upload", {
                        desktop: o,
                        au: true
                    }) + "?uuid=" + u.uuid + "&dtid=" + o.id + "&sid=" + v.sid + (v.maxsize !== "" ? "&maxsize=" + v.maxsize : "") + (v.isNative ? "&native=true" : ""), m = q.form;
                m.action = r;
                var l = m.parentNode;
                l.parentNode.removeChild(l);
                v._formDetached = true;
                var s = !q.files || q.files.length == 1 ? q.value : (function (w) {
                    var p = [];
                    for (var n = w.length; n--;) {
                        p.unshift(w[n].name)
                    }
                    return p.join(",")
                })(q.files);
                b(q._ctrl, m, s)
            }

            if (zk.opera) {
                var i = [], d;

                function c() {
                    for (var l = i.length; l--;) {
                        i[l].sync()
                    }
                }

                function h(l) {
                    if (!i.length) {
                        d = setInterval(c, 1500)
                    }
                    i.push(l)
                }

                function k(l) {
                    i.$remove(l);
                    if (d && !i.length) {
                        clearInterval(d);
                        d = null
                    }
                }
            }
            zul.Upload = zk.$extends(zk.Object, {
                sid: 0, $init: function (s, q, r) {
                    this.uploaders = {};
                    var n;
                    for (var o = r.split(","), p = 0, m = o.length; p < m; p++) {
                        var l = o[p].trim();
                        if (l.startsWith("maxsize=")) {
                            this.maxsize = l.match(new RegExp(/maxsize=([^,]*)/))[1]
                        } else {
                            if (l.startsWith("multiple=")) {
                                this.multiple = l.match(new RegExp(/multiple=([^,]*)/))[1]
                            } else {
                                if (l.startsWith("accept=")) {
                                    this.accept = l.match(new RegExp(/accept=([^,]*)/))[1]
                                } else {
                                    if (l == "native") {
                                        this.isNative = true
                                    } else {
                                        if (l != "true") {
                                            n = l
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this._clsnm = n || "";
                    this._wgt = s;
                    this._parent = (zk.isLoaded("zul.menu") && s.$instanceof(zul.menu.Menuitem) && q.tagName == "LI") ? q.firstChild : q;
                    if (s._tooltiptext) {
                        this._tooltiptext = s._tooltiptext
                    }
                    this.initContent()
                }, sync: function () {
                    if (!this._formDetached) {
                        var t = this._wgt, l = t.$n(), p = this._parent, s = p ? p.lastChild : l.nextSibling, n = s.firstChild.firstChild, q = zk(l).revisedOffset(), m = jq(s).css({
                            top: "0",
                            left: "0"
                        }).zk.revisedOffset(), o = n.offsetWidth - l.offsetWidth, r = s.style;
                        r.top = (q[1] - m[1]) + "px";
                        r.left = q[0] - m[0] - o + "px";
                        n.style.height = l.offsetHeight + "px";
                        n.style.clip = "rect(auto,auto,auto," + o + "px)"
                    }
                }, initContent: function () {
                    var s = this._wgt, o = this._parent, r = s.$n(), q = s.desktop, n = '<span class="z-upload"' + (this._tooltiptext ? ' title="' + this._tooltiptext + '"' : "") + '><form enctype="multipart/form-data" method="POST"><input name="file" type="file"' + (this.multiple == "true" ? ' multiple="" multiple' : "") + (this.accept ? ' accept="' + this.accept + '"' : "") + ' hidefocus="true" style="height:' + r.offsetHeight + 'px"/></form></span>';
                    if (o) {
                        jq(o).append(n)
                    } else {
                        jq(s).after(n)
                    }
                    delete this._formDetached;
                    if (!s._autodisable_self) {
                        var l = this;
                        setTimeout(function () {
                            l.sync()
                        }, 50)
                    }
                    var m = this._outer = o ? o.lastChild : r.nextSibling, p = m.firstChild.firstChild;
                    this._inp = p;
                    if (zk.opera) {
                        m.style.position = "absolute";
                        h(this)
                    }
                    p.z$proxy = r;
                    p._ctrl = this;
                    jq(p).change(f);
                    if (zk.ie <= 10) {
                        jq(p).hover(function () {
                            jq(s).addClass("z-upload-hover")
                        }, function () {
                            jq(s).removeClass("z-upload-hover")
                        })
                    }
                }, openFileDialog: function () {
                    jq(this._inp).click()
                }, destroy: function () {
                    if (zk.opera) {
                        k(this)
                    }
                    jq(this._outer).remove();
                    this._inp = null;
                    this._wgt = this._parent = null;
                    for (var l in this.uploaders) {
                        var m = this.uploaders[l];
                        if (m) {
                            delete this.uploaders[l];
                            m.destroy()
                        }
                    }
                }, getKey: function (l) {
                    return (this._wgt ? this._wgt.uuid : "") + "_uplder_" + l
                }, cancel: function (l) {
                    e(this, l)
                }, finish: function (l) {
                    e(this, l, true)
                }
            }, {
                error: function (o, m, l) {
                    var n = zk.Widget.$(m);
                    if (n) {
                        jq.alert(o, {desktop: n.desktop, icon: "ERROR"});
                        zul.Upload.close(m, l)
                    }
                }, close: function (m, l) {
                    var n = zk.Widget.$(m);
                    if (!n || !n._uplder) {
                        return
                    }
                    n._uplder.cancel(l)
                }, sendResult: function (m, o, l) {
                    var n = zk.Widget.$(m);
                    if (!n || !n._uplder) {
                        return
                    }
                    n._uplder.finish(l);
                    zAu.send(new zk.Event(n.desktop, "updateResult", {contentId: o, wid: n.uuid, sid: l}))
                }, isFinish: function (o) {
                    for (var m = (typeof o == "string" ? o : o.uuid) + "_uplder_", n = zul.Upload.files, l = n.length; l--;) {
                        if (n[0].id.startsWith(m)) {
                            return false
                        }
                    }
                    return true
                }, start: function (m) {
                    var l = zul.Upload.files;
                    if (m) {
                        l.push(m)
                    }
                    if (l[0] && !l[0].isStart) {
                        l[0].isStart = true;
                        l[0].start()
                    }
                }, destroy: function (n) {
                    for (var m = zul.Upload.files, l = m.length; l--;) {
                        if (m[l].id == n.id) {
                            m.splice(l, 1);
                            break
                        }
                    }
                    zul.Upload.start()
                }, files: []
            });
            zul.Uploader = zk.$extends(zk.Object, {
                $init: function (m, q, n, p) {
                    this.id = q;
                    this.flnm = p;
                    this._upload = m;
                    this._form = n;
                    this._parent = n.parentNode;
                    this._sid = m.sid;
                    this._wgt = m._wgt;
                    var o, l = this;
                    if (!m._clsnm) {
                        o = new zul.UploadViewer(this, p)
                    } else {
                        zk.$import(m._clsnm, function (r) {
                            o = new r(l, p)
                        })
                    }
                    this.viewer = o
                }, getWidget: function () {
                    return this._wgt
                }, destroy: function (l) {
                    this.end(l);
                    if (this._form) {
                        jq(this._form.parentNode).remove();
                        jq("#" + this.id + "_ifm").remove()
                    }
                    this._form = this._upload = this._wgt = null
                }, start: function () {
                    var p = this._wgt, n = this.id + "_ifm";
                    document.body.appendChild(this._parent);
                    if (!jq("#" + n).length) {
                        jq.newFrame(n)
                    }
                    this._form.target = n;
                    this._form.submit();
                    this._form.style.display = "none";
                    var l = this, o = "cmd=uploadInfo&dtid=" + p.desktop.id + "&wid=" + p.uuid + "&sid=" + this._sid;
                    if (zul.Uploader._tmupload) {
                        clearInterval(zul.Uploader._tmupload)
                    }
                    function m() {
                        jq.ajax({
                            type: "POST",
                            url: zk.ajaxURI("/upload", {desktop: p.desktop, au: true}),
                            data: o,
                            dataType: "text",
                            success: function (q) {
                                var r = q.split(",");
                                if (q.startsWith("error:")) {
                                    l._echo = true;
                                    zul.Uploader.clearInterval(l.id);
                                    if (p) {
                                        l.cancel();
                                        zul.Upload.error(q.substring(6, q.length), p.uuid, l._sid)
                                    }
                                } else {
                                    if (!l.update(zk.parseInt(r[0]), zk.parseInt(r[1]))) {
                                        zul.Uploader.clearInterval(l.id)
                                    }
                                }
                            },
                            complete: function (s, q) {
                                var r;
                                if ((r = s.getResponseHeader("ZK-Error")) == "404" || r == "410" || q == "error" || q == 404 || q == 405 || q == 410) {
                                    zul.Uploader.clearInterval(l.id);
                                    var t = l.getWidget();
                                    if (t) {
                                        l.cancel();
                                        zul.Upload.error(msgzk.FAILED_TO_RESPONSE, t.uuid, l._sid)
                                    }
                                    return
                                }
                            }
                        })
                    }

                    m.id = this.id;
                    zul.Uploader.clearInterval = function (q) {
                        if (m.id == q) {
                            clearInterval(zul.Uploader._tmupload);
                            zul.Uploader._tmupload = undefined
                        }
                    };
                    zul.Uploader._tmupload = setInterval(m, 1000);
                    zul.wgt.ADBS.autodisable(p)
                }, cancel: function () {
                    zul.Uploader.clearInterval(this.id);
                    if (this._upload) {
                        this._upload.cancel(this._sid)
                    }
                }, update: function (l, m) {
                    var n = this.getWidget();
                    if (!n || m <= 0) {
                        if (this._echo) {
                            this.end()
                        } else {
                            return true
                        }
                    } else {
                        if (zul.Uploader._tmupload) {
                            this._echo = true;
                            if (l >= 0 && l <= 100) {
                                this.viewer.update(l, m)
                            }
                            return l >= 0 && l < 100
                        }
                    }
                    return false
                }, end: function (n) {
                    this.viewer.destroy(n);
                    zul.Upload.destroy(this);
                    this._echo = true;
                    var p, l, m, o;
                    if ((p = this._wgt) && (l = this._upload) && (m = l._aded)) {
                        p._uplder = null;
                        m.onResponse();
                        l._aded = null;
                        p._uplder.destroy();
                        if ((o = l._parent) && !jq(o).parents("html").length) {
                            l._parent = p._getUploadRef();
                            l.initContent()
                        }
                        p._uplder = l;
                        p._uplder.sync();
                        delete p._autodisable_self
                    }
                }
            });
            function g(m, n) {
                var l = zul.UploadViewer.flman;
                if (!l || !l.desktop) {
                    if (l) {
                        l.detach()
                    }
                    zul.UploadViewer.flman = l = new zul.UploadManager();
                    m.getWidget().getPage().appendChild(l)
                }
                l.removeFile(m);
                l.addFile(m)
            }

            function a(l, m) {
                if (zul.UploadManager) {
                    return g(l, m)
                }
                zk.load("zul.wgt,zul.box", function () {
                    zul.UploadManager = zk.$extends(zul.wgt.Popup, {
                        $init: function () {
                            this.$supers("$init", arguments);
                            this._files = {};
                            this.setSclass("z-fileupload-manager")
                        }, onFloatUp: function (n) {
                            var o = n.origin;
                            if (!this.isVisible()) {
                                return
                            }
                            this.setTopmost()
                        }, getFileItem: function (n) {
                            return this._files[n] || zk.Widget.$(n)
                        }, addFile: function (p) {
                            var r = p.id, q = p.flnm, o = this.getFileItem(r);
                            if (!o) {
                                o = new zul.wgt.Div({
                                    uuid: r,
                                    children: [new zul.wgt.Label({value: q + ":"}), new zul.box.Box({
                                        mold: "horizontal",
                                        children: [new zul.wgt.Progressmeter({
                                            id: r,
                                            sclass: "z-fileupload-progress"
                                        }), new zul.wgt.Div({
                                            sclass: "z-fileupload-remove z-icon-times",
                                            listeners: {
                                                onClick: function () {
                                                    var s = r.substring(0, r.indexOf("_uplder_"));
                                                    zul.Uploader.clearInterval(r);
                                                    var t = zk.Widget.$(s);
                                                    if (t) {
                                                        t._uplder.cancel(r.substring(r.lastIndexOf("_") + 1, r.length))
                                                    }
                                                }
                                            }
                                        })]
                                    }), new zul.wgt.Label({id: r + "_total"}), new zul.wgt.Separator()]
                                });
                                try {
                                    this.appendChild(o)
                                } catch (n) {
                                }
                                this._files[r] = o
                            }
                            return o
                        }, updateFile: function (p, q, n) {
                            var r = p.id, o = this.getFileItem(r);
                            if (!o) {
                                return
                            }
                            o.$f(r).setValue(q);
                            o.$f(r + "_total").setValue(n)
                        }, removeFile: function (q) {
                            var s = q.id, o = this.getFileItem(s);
                            if (o) {
                                o.detach()
                            }
                            delete this._files[s];
                            var r = true;
                            for (var n in this._files) {
                                if (!(r = false)) {
                                    break
                                }
                            }
                            if (r) {
                                this.close()
                            }
                        }, open: function (o, n) {
                            this.$super("open", o, null, n || "after_start", {sendOnOpen: false, disableMask: true})
                        }
                    });
                    g(l, m)
                })
            }

            zul.UploadViewer = zk.$extends(zk.Object, {
                $init: function (l, m) {
                    this._uplder = l;
                    a(l, m)
                }, update: function (m, n) {
                    var l = zul.UploadViewer.flman;
                    if (l) {
                        if (!l.isOpen()) {
                            l.open(this._uplder.getWidget())
                        }
                        l.updateFile(this._uplder, m, msgzk.FILE_SIZE + Math.round(n / 1024) + msgzk.KBYTES)
                    }
                }, destroy: function () {
                    var l = zul.UploadViewer.flman;
                    if (l) {
                        l.removeFile(this._uplder)
                    }
                }
            })
        })();
        (function (c) {
            function f(h, i, g, k, j) {
                return -k * ((i = i / j - 1) * i * i * i - 1) + g
            }

            function b(k, l) {
                var j = k.control, g = l[0], n = l[1];
                if (k._isVer) {
                    var h = l[1], m = h >= k._lastPos;
                    if (h - k._start < 0) {
                        h = l[1] = k._start
                    } else {
                        if (h > k._end) {
                            h = l[1] = k._end
                        }
                    }
                    if (k._lastPos) {
                        if (Math.abs(k._lastPos - h) < 3) {
                            return l
                        }
                    }
                    k._lastPos = h
                } else {
                    var h = l[0], i = h >= k._lastPos;
                    if (h - k._start < 0) {
                        h = l[0] = k._start
                    } else {
                        if (h > k._end) {
                            h = l[0] = k._end
                        }
                    }
                    if (k._lastPos) {
                        if (Math.abs(k._lastPos - h) < 3) {
                            return l
                        }
                    }
                    k._lastPos = h
                }
                return l
            }

            function e(m) {
                var g = m.control, h = g.opts;
                m._steps = h.startStep;
                m._endStep = h.endStep - h.viewport;
                m._scale = g._scale;
                m._epos = g.epos;
                m._lastP = m._start;
                if (g._isVer) {
                    m._isVer = true;
                    m._start = h.startPosition;
                    if (c(g.eend).isVisible()) {
                        m._end = g.eend.offsetTop + Math.ceil(m.handle.offsetHeight / 2);
                        if (m._end > h.viewportSize + m._start) {
                            m._end = h.viewportSize + m._start
                        }
                    } else {
                        m._end = h.viewportSize + m._start
                    }
                    m._end -= m.node.offsetHeight - g._gap
                } else {
                    m._isVer = false;
                    m._start = h.startPosition;
                    if (c(g.eend).isVisible()) {
                        m._end = g.eend.offsetLeft + Math.ceil(m.handle.offsetWidth / 2);
                        if (m._end > h.viewportSize + m._start) {
                            m._end = h.viewportSize + m._start
                        }
                    } else {
                        m._end = h.viewportSize + m._start
                    }
                    m._end -= m.node.offsetWidth - g._gap
                }
                jq(m._epos).show().delay(200).fadeIn(500);
                if (m._timer) {
                    clearTimeout(m._timer)
                }
                var k, j = [], n = 30, i = n * 20, o = 10, l = function (p) {
                    var q = c.parseFloat(m.node.style[p]), u = q - c.parseFloat(m._epos.style[p]);
                    if (k == q) {
                        j.push(m._lastSteps);
                        if (j.length > 4 && j.shift() == m._lastSteps) {
                            j[0] = m._lastSteps;
                            clearTimeout(m._timer);
                            m._timer = setTimeout(function () {
                                l(p)
                            }, 100);
                            return
                        }
                    } else {
                        o = 10
                    }
                    k = q;
                    var v = u > 0, t = v ? Math.max(0, u / m._scale) : Math.min(0, u / m._scale), s = Math.round(g.$class.easing(o / i, o, 0, t, i));
                    if (v) {
                        if (t > 1) {
                            s = Math.max(1, s)
                        }
                    } else {
                        if (-t > 1) {
                            s = Math.min(-1, s)
                        }
                    }
                    if (u == 0 && s == 0) {
                        if (q == m._start) {
                            s = -m._steps
                        } else {
                            if (q == m._end) {
                                s = m._endStep - m._steps
                            }
                        }
                    }
                    m._steps += s;
                    if (v) {
                        if (m._steps > m._endStep) {
                            m._steps = m._endStep
                        }
                    } else {
                        if (m._steps < 0) {
                            m._steps = 0
                        }
                    }
                    m._epos.style[p] = m._start + (m._scale * m._steps) + "px";
                    o += n;
                    if (m._lastSteps != m._steps) {
                        m._lastSteps = m._steps;
                        var r = p == "top" ? g.opts.onScrollY : g.opts.onScrollX;
                        if (typeof r == "function") {
                            r.call(m.control.widget, m._steps + g.opts.offset)
                        }
                    }
                    clearTimeout(m._timer);
                    m._timer = setTimeout(function () {
                        l(p)
                    }, n)
                };
                m._timer = setTimeout(function () {
                    l((m._isVer ? "top" : "left"))
                }, 50)
            }

            function a(l, i) {
                var j = l.control, k = i.domTarget;
                if (l._timer) {
                    clearTimeout(l._timer)
                }
                var h;
                if (l._isVer) {
                    h = c.parseInt(l._epos.style.top), end = l._end;
                    if (h > end) {
                        h = end
                    }
                    jq(l.node).animate({top: h + "px"}, 400, "swing")
                } else {
                    h = c.parseInt(l._epos.style.left), end = l._end;
                    if (h > end) {
                        h = end
                    }
                    jq(l.node).animate({left: h + "px"}, 400, "swing")
                }
                j.opts.startStep = l._steps;
                var m = jq(l._epos), g = m.css("opacity");
                jq(l._epos).delay(300).fadeOut(500).css("opacity", g)
            }

            function d(i, h, g) {
                return i.node != g.domTarget
            }

            zul.WScroll = c.$extends(c.Object, {
                _gap: 0, $init: function (h, g) {
                    this.control = h;
                    this.opts = c.$default(g, {orient: "horizontal", startPosition: 0, startStep: 0, offset: 0});
                    this.anchor = this.opts.anchor || h.parentNode;
                    this.widget = c.Widget.$(h);
                    this.uid = this.widget.uuid;
                    this.zcls = this.widget.getZclass();
                    this._isVer = g.orient == "vertical";
                    if (!g.viewportSize && g.viewportSize != 0) {
                        throw"Handle required for a viewport size: {viewportSize: size}"
                    }
                    this.redraw(this.anchor);
                    this._initDragdrop();
                    this._listenMouseEvent();
                    if (this.opts.syncSize !== false) {
                        this.syncSize()
                    }
                }, syncSize: function (p) {
                    if (p) {
                        this.opts = c.copy(this.opts, p)
                    }
                    this.edrag.style.display = "";
                    if (this._isVer) {
                        var p = this.opts, r = p.startPosition, k = p.startStep, m = p.viewport, i = p.endStep, l = p.viewportSize, o = i - m, g = this.edrag.offsetHeight - this._gap;
                        if (o <= 0) {
                            this.eend.style.display = this.edrag.style.display = "none";
                            if (typeof this.opts.onScrollY == "function") {
                                this.opts.onScrollY.call(this.widget, p.offset)
                            }
                            return
                        }
                        l -= g;
                        if (l > o) {
                            this.epos.style.height = g + "px";
                            this._scale = 1;
                            var w = this.eend.style;
                            w.display = "";
                            w.top = r + g + o + "px"
                        } else {
                            var x = l / o, s = Math.max(g * x, 5);
                            this.epos.style.height = s + "px";
                            this._scale = x;
                            this.eend.style.display = "none";
                            if (l < 10) {
                                this.edrag.style.display = "none"
                            }
                        }
                        var v = r + (this._scale * k), u = r + l;
                        if (v > u) {
                            v = u
                        }
                        this.epos.style.top = this.edrag.style.top = v + "px"
                    } else {
                        var p = this.opts, j = p.startPosition, k = p.startStep, m = p.viewport, i = p.endStep, l = p.viewportSize, o = i - m, h = this.edrag.offsetWidth - this._gap;
                        if (o <= 0) {
                            this.eend.style.display = this.edrag.style.display = "none";
                            if (typeof this.opts.onScrollX == "function") {
                                this.opts.onScrollX.call(this.widget, p.offset)
                            }
                            return
                        }
                        l -= h;
                        if (l > o) {
                            this.epos.style.width = h + "px";
                            this._scale = 1;
                            var w = this.eend.style;
                            w.display = "";
                            w.left = j + h + o + "px"
                        } else {
                            var x = l / o, t = Math.max(h * x, 5);
                            this.epos.style.width = t + "px";
                            this._scale = x;
                            this.eend.style.display = "none";
                            if (l < 10) {
                                this.edrag.style.display = "none"
                            }
                        }
                        var q = j + (this._scale * k), n = j + l;
                        if (q > n) {
                            q = n
                        }
                        this.epos.style.left = this.edrag.style.left = q + "px"
                    }
                }, _listenMouseEvent: function () {
                    var h = this;
                    if (h._isVer) {
                        jq(h.control).mousewheel(h.proxy(h._mousewheelY))
                    } else {
                        if (!(c.ie < 11) || !c.opera) {
                            jq(h.control).mousewheel(h.proxy(h._mousewheelX))
                        }
                    }
                    var g = jq(h.edrag);
                    g.children("div").mouseover(h.proxy(h._mouseOver)).mouseout(h.proxy(h._mouseOut)).bind("mouseup", h.proxy(h._mouseUp)).bind("mousedown", h.proxy(h._mouseDown));
                    g.click(c.$void)
                }, _unlistenMouseEvent: function () {
                    var h = this;
                    if (h._isVer) {
                        jq(h.control).unmousewheel(h.proxy(h._mousewheelY))
                    } else {
                        if (!(c.ie < 11) || !c.opera) {
                            jq(h.control).unmousewheel(h.proxy(h._mousewheelX))
                        }
                    }
                    var g = jq(h.edrag);
                    g.children("div").unbind("mouseover", h.proxy(h._mouseOver)).unbind("mouseout", h.proxy(h._mouseOut)).unbind("mouseup", h.proxy(h._mouseUp)).unbind("mousedown", h.proxy(h._mouseDown));
                    g.unbind("click", c.$void)
                }, _mouseOver: function (i) {
                    var h = i.target.className, j = h.lastIndexOf("-"), k = h.substring(j + 1), g = jq(this.edrag);
                    if (g.hasClass(h + "-clk")) {
                        g.removeClass(h + "-clk")
                    }
                    switch (k) {
                        case"home":
                        case"up":
                            if (this.opts.startStep > 0) {
                                g.addClass(h + "-over")
                            }
                            break;
                        case"down":
                        case"end":
                            var l = this.opts;
                            if (l.startStep < l.endStep - l.viewport) {
                                g.addClass(h + "-over")
                            }
                            break
                    }
                }, _mouseOut: function (i) {
                    var h = i.target.className, g = jq(this.edrag);
                    g.removeClass(h + "-over");
                    if (g.hasClass(h + "-clk")) {
                        g.removeClass(h + "-clk")
                    }
                }, _mouseUp: function (g) {
                    jq(this.edrag).removeClass(g.target.className + "-clk")
                }, _mouseDown: function (n) {
                    var o = n.target.className, l = o.lastIndexOf("-"), m = o.substring(l + 1), k = jq(this.edrag);
                    if (!k.hasClass(o + "-over") && !c.mobile) {
                        return
                    }
                    k.addClass(o + "-clk");
                    var g = this.opts;
                    switch (m) {
                        case"home":
                            if (g.startStep > 0) {
                                g.startStep = 0;
                                if (this._isVer) {
                                    var h = g.startPosition + "px";
                                    this.epos.style.top = h;
                                    k.animate({top: h}, 500);
                                    if (typeof this.opts.onScrollY == "function") {
                                        this.opts.onScrollY.call(this.widget, g.startStep + g.offset)
                                    }
                                } else {
                                    var h = g.startPosition + "px";
                                    this.epos.style.left = h;
                                    k.animate({left: h}, 500);
                                    if (typeof this.opts.onScrollX == "function") {
                                        this.opts.onScrollX.call(this.widget, g.startStep + g.offset)
                                    }
                                }
                                k.removeClass(o + "-over")
                            }
                            break;
                        case"up":
                            if (g.startStep > 0) {
                                g.startStep -= 1;
                                var i = g.startPosition + (g.startStep * this._scale);
                                if (this._isVer) {
                                    var j;
                                    if (c(this.eend).isVisible()) {
                                        j = this.eend.offsetTop
                                    } else {
                                        j = g.viewportSize + g.startPosition
                                    }
                                    j -= this.edrag.offsetHeight - this._gap;
                                    this.epos.style.top = i + "px";
                                    if (j < i) {
                                        this.edrag.style.top = j + "px"
                                    } else {
                                        this.edrag.style.top = i + "px"
                                    }
                                    if (typeof this.opts.onScrollY == "function") {
                                        this.opts.onScrollY.call(this.widget, g.startStep + g.offset)
                                    }
                                } else {
                                    var j;
                                    if (c(this.eend).isVisible()) {
                                        j = this.eend.offsetLeft
                                    } else {
                                        j = g.viewportSize + g.startPosition
                                    }
                                    j -= this.edrag.offsetWidth - this._gap;
                                    this.epos.style.left = i + "px";
                                    if (j < i) {
                                        this.edrag.style.left = j + "px"
                                    } else {
                                        this.edrag.style.left = i + "px"
                                    }
                                    if (typeof this.opts.onScrollX == "function") {
                                        this.opts.onScrollX.call(this.widget, g.startStep + g.offset)
                                    }
                                }
                                if (g.startStep == 0) {
                                    k.removeClass(o + "-over")
                                }
                            }
                            break;
                        case"down":
                            if (g.startStep < g.endStep - g.viewport) {
                                g.startStep += 1;
                                var i = g.startPosition + (g.startStep * this._scale);
                                if (this._isVer) {
                                    var j;
                                    if (c(this.eend).isVisible()) {
                                        j = this.eend.offsetTop
                                    } else {
                                        j = g.viewportSize + g.startPosition
                                    }
                                    j -= this.edrag.offsetHeight - this._gap;
                                    this.epos.style.top = i + "px";
                                    if (j < i) {
                                        this.edrag.style.top = j + "px"
                                    } else {
                                        this.edrag.style.top = i + "px"
                                    }
                                    if (typeof this.opts.onScrollY == "function") {
                                        this.opts.onScrollY.call(this.widget, g.startStep + g.offset)
                                    }
                                } else {
                                    var j;
                                    if (c(this.eend).isVisible()) {
                                        j = this.eend.offsetLeft
                                    } else {
                                        j = g.viewportSize + g.startPosition
                                    }
                                    j -= this.edrag.offsetWidth - this._gap;
                                    this.epos.style.left = i + "px";
                                    if (j < i) {
                                        this.edrag.style.left = j + "px"
                                    } else {
                                        this.edrag.style.left = i + "px"
                                    }
                                    if (typeof this.opts.onScrollX == "function") {
                                        this.opts.onScrollX.call(this.widget, g.startStep + g.offset)
                                    }
                                }
                                if (g.startStep == g.endStep - g.viewport) {
                                    k.removeClass(o + "-over")
                                }
                            }
                            break;
                        case"end":
                            if (g.startStep < g.endStep - g.viewport) {
                                g.startStep = g.endStep - g.viewport;
                                if (this._isVer) {
                                    var h;
                                    if (c(this.eend).isVisible()) {
                                        h = this.eend.offsetTop - (this.edrag.offsetHeight - this._gap)
                                    } else {
                                        h = g.startPosition + g.viewportSize - (this.edrag.offsetHeight - this._gap)
                                    }
                                    this.epos.style.top = h;
                                    k.animate({top: h}, 500);
                                    if (typeof this.opts.onScrollY == "function") {
                                        this.opts.onScrollY.call(this.widget, g.startStep + g.offset)
                                    }
                                } else {
                                    var h;
                                    if (c(this.eend).isVisible()) {
                                        h = this.eend.offsetLeft - (this.edrag.offsetWidth - this._gap)
                                    } else {
                                        h = g.startPosition + g.viewportSize - (this.edrag.offsetWidth - this._gap)
                                    }
                                    this.epos.style.left = h;
                                    k.animate({left: h}, 500);
                                    if (typeof this.opts.onScrollX == "function") {
                                        this.opts.onScrollX.call(this.widget, g.startStep + g.offset)
                                    }
                                }
                                k.removeClass(o + "-over")
                            }
                            break
                    }
                }, _mousewheelY: function (p, o, l, k) {
                    k = k;
                    if (k) {
                        p.stop();
                        var g = this.opts, n = g.startStep, m = g.endStep - g.viewport, i = this._scale, q = this.widget;
                        if (k > 0) {
                            g.startStep -= Math.max(Math.round(q._cols / 5), 1);
                            if (g.startStep < 0) {
                                g.startStep = 0
                            }
                        } else {
                            g.startStep += Math.max(Math.round(q._cols / 5), 1);
                            if (g.startStep > m) {
                                g.startStep = m
                            }
                        }
                        if (n == g.startStep) {
                            return
                        }
                        var h = g.startPosition + (g.startStep * i), j = c(this.eend).isVisible() ? this.eend.offsetTop - (this.edrag.offsetHeight - this._gap) : g.startPosition + g.viewportSize - (this.edrag.offsetHeight - this._gap);
                        this.epos.style.top = h + "px";
                        if (h > j) {
                            h = j
                        }
                        this.edrag.style.top = h + "px";
                        if (typeof this.opts.onScrollY == "function") {
                            this.opts.onScrollY.call(this.widget, g.startStep + g.offset)
                        }
                    }
                }, _mousewheelX: function (p, o, l, k) {
                    l = l;
                    if (l) {
                        p.stop();
                        var g = this.opts, n = g.startStep, m = g.endStep - g.viewport, i = this._scale, q = this.widget;
                        if (l < 0) {
                            g.startStep -= Math.max(Math.round(q._cols / 5), 1);
                            if (g.startStep < 0) {
                                g.startStep = 0
                            }
                        } else {
                            g.startStep += Math.max(Math.round(q._cols / 5), 1);
                            if (g.startStep > m) {
                                g.startStep = m
                            }
                        }
                        if (n == g.startStep) {
                            return
                        }
                        var h = g.startPosition + (g.startStep * i), j = c(this.eend).isVisible() ? this.eend.offsetLeft - (this.edrag.offsetWidth - this._gap) : g.startPosition + g.viewportSize - (this.edrag.offsetWidth - this._gap);
                        this.epos.style.left = h + "px";
                        if (h > j) {
                            h = j
                        }
                        this.edrag.style.left = h + "px";
                        if (typeof this.opts.onScrollX == "function") {
                            this.opts.onScrollX.call(this.widget, g.startStep + g.offset)
                        }
                    }
                }, _initDragdrop: function () {
                    var h = this._isVer ? "v" : "h", j = this.uid + "-" + h + "bar";
                    this.node = jq(j, c)[0];
                    this.edrag = this.node.firstChild;
                    this.epos = this.edrag.nextSibling;
                    this.eend = this.node.lastChild;
                    var i = this.epos.style, g = i.display;
                    i.display = "block";
                    this._gap = this._isVer ? this.edrag.offsetHeight - this.epos.offsetHeight : this.edrag.offsetWidth - this.epos.offsetWidth;
                    i.display = g;
                    this.drag = new c.Draggable(this, this.edrag, {
                        constraint: this._isVer ? "vertical" : "horizontal",
                        snap: b,
                        starteffect: e,
                        zIndex: 12000,
                        ignoredrag: d,
                        endeffect: a
                    });
                    jq(this.epos).hide()
                }, destroy: function () {
                    this.drag.destroy();
                    this._unlistenMouseEvent();
                    jq(this.node).remove();
                    this.node = this.edrag = this.epos = this.drag = null
                }, redraw: function (i) {
                    var g = this._isVer ? "v" : "h", k = this._isVer ? "vertical" : "horizontal", h = this.uid + "-" + g + "bar", j = this.widget.$s("wscroll");
                    jq(i).append(['<div id="', h, '" class="', j, "-", k, '">', '<div class="', j, '-drag">', '<div class="', j, '-home" title="', msgzul.WS_HOME, '"></div>', '<div class="', j, '-up" title="', msgzul.WS_PREV, '"></div>', '<div class="', j, '-down" title="', msgzul.WS_NEXT, '"></div>', '<div class="', j, '-end" title="', msgzul.WS_END, '"></div>', "</div>", '<div class="', j, '-pos"></div>', '<div class="', j, '-endbar"></div>', "</div>"].join(""))
                }
            }, {easing: f})
        })(zk);
        (function (b) {
            function c(i, e, d) {
                var g = d == 0, h = i.$n(e), j = i.$n(e + "-embed"), f;
                if (h) {
                    f = h.style;
                    f.display = g ? "none" : "block";
                    f.opacity = d;
                    if (b.ie < 9) {
                        f.filter = "alpha(opacity=" + 100 * d + ")"
                    }
                }
                if (j) {
                    f = j.style;
                    f.display = "block";
                    f.opacity = g ? 0.2 : 0;
                    if (b.ie < 9) {
                        f.filter = g ? "alpha(opacity=20)" : "alpha(opacity=0)"
                    }
                }
            }

            function a(e, f, d) {
                if (f > d) {
                    return e
                }
                if (e < f) {
                    e = f
                }
                if (e > d) {
                    e = d
                }
                return e
            }

            zul.Scrollbar = b.$extends(b.Object, {
                _pos: null,
                _barPos: null,
                _pressTimer: null,
                _frozenScroll: 0,
                _frozenLimit: false,
                $n: function (d) {
                    return jq(this.uid + "-" + d, b)[0]
                },
                $init: function (g, d, f) {
                    if (!g || !d) {
                        throw"Both wrapper and scroller dom element are required to generate scrollbar"
                    }
                    this.cave = g;
                    var e = g.style;
                    e.position = "relative";
                    e.overflow = "hidden";
                    this.scroller = d;
                    this.opts = b.$default(f, {
                        embed: false,
                        step: 20,
                        wheelAmountStep: 3,
                        startPositionX: 0,
                        startPositionY: 0
                    });
                    this.widget = b.Widget.$(g);
                    this.uid = this.widget.uuid;
                    this._pos = [0, 0];
                    this._barPos = [0, 0];
                    this.currentPos = {x: this._pos[0], y: this._pos[1]};
                    jq(g).bind("scroll", this.proxy(this._fixScroll)).bind("mouseenter", this.proxy(this._mouseEnter)).bind("mouseleave", this.proxy(this._mouseLeave))
                },
                destroy: function () {
                    var h = this.cave;
                    jq(h).unbind("scroll", this.proxy(this._fixScroll)).unbind("mouseenter", this.proxy(this._mouseEnter)).unbind("mouseleave", this.proxy(this._mouseLeave));
                    this._unbindMouseEvent("hor");
                    this._unbindMouseEvent("ver");
                    var d = this.$n("hor"), f = this.$n("ver");
                    if (d) {
                        jq(d).remove()
                    }
                    if (f) {
                        jq(f).remove()
                    }
                    if (this.opts.embed) {
                        var g = this.$n("hor-embed"), e = this.$n("ver-embed");
                        if (g) {
                            jq(g).remove()
                        }
                        if (e) {
                            jq(e).remove()
                        }
                    }
                    this._pos = this._barPos = this.currentPos = null
                },
                hasVScroll: function () {
                    return this.needV
                },
                hasHScroll: function () {
                    return this.needH
                },
                syncSize: function (d) {
                    this._checkBarRequired();
                    var r = this.widget, I = r.frozen, D = 0, N = r.$n("tpad"), B = r.$n("bpad"), L = this.cave, q = this.scroller, z = this.$n("hor"), j = this.$n("ver"), l = this.needH, f = this.needV, A = this.opts, s = q.scrollHeight;
                    if (N && B) {
                        s += N.offsetHeight + B.offsetHeight
                    }
                    if (I) {
                        D = 50 * (I._scrollScale || 0)
                    }
                    if (l) {
                        var M = z.style.display;
                        z.style.display = "block";
                        var H = this.$n("hor-embed"), g = this.$n("hor-left"), J = this.$n("hor-right"), u = this.$n("hor-wrapper"), O = u.style, w = A.startPositionX, y = L.offsetWidth - w, G = z.offsetHeight + q.scrollWidth - w + D, K = g.offsetWidth, n = J.offsetWidth, h = y - K - n;
                        if (G < y) {
                            G = y + D
                        }
                        if (w) {
                            g.style.left = jq.px(w);
                            O.left = jq.px(w + K);
                            if (H) {
                                H.style.left = jq.px(w)
                            }
                        }
                        if (f) {
                            O.width = jq.px(h - n);
                            J.style.right = jq.px(n)
                        } else {
                            O.width = jq.px(h)
                        }
                        var F = this.$n("hor-indicator"), o = u.offsetWidth, C = Math.round(o * y / G), C = C > 15 ? C : 15;
                        F.style.width = C + "px";
                        if (H) {
                            H.style.width = (C + K + n) + "px"
                        }
                        this.hLimit = G - y;
                        var v = o - C;
                        if (v <= 0) {
                            this.hBarLimit = 0;
                            F.style.display = "none"
                        } else {
                            this.hBarLimit = v
                        }
                        this.hRatio = Math.abs(this.hLimit / this.hBarLimit);
                        this.needH = F.offsetHeight;
                        z.style.display = M
                    }
                    if (f) {
                        var M = j.style.display;
                        j.style.display = "block";
                        var H = this.$n("ver-embed"), E = this.$n("ver-up"), i = this.$n("ver-down"), u = this.$n("ver-wrapper"), O = u.style, t = A.startPositionY, k = L.offsetHeight - t, x = j.offsetWidth + s - t, m = E.offsetHeight;
                        dhgh = i.offsetHeight, vhgh = k - m - dhgh;
                        if (t) {
                            j.style.top = jq.px(L.offsetTop + t);
                            i.style.bottom = jq.px(t);
                            if (H) {
                                H.style.top = j.style.top
                            }
                        }
                        if (l) {
                            O.height = jq.px0(vhgh - dhgh);
                            i.style.bottom = jq.px(t + dhgh)
                        } else {
                            O.height = jq.px(vhgh)
                        }
                        var F = this.$n("ver-indicator"), e = u.offsetHeight, p = Math.round(e * k / x), p = p > 15 ? p : 15;
                        F.style.height = p + "px";
                        if (H) {
                            H.style.height = (p + m + dhgh) + "px"
                        }
                        this.vLimit = x - k;
                        var v = e - p;
                        if (v <= 0) {
                            this.vBarLimit = 0;
                            F.style.display = "none"
                        } else {
                            this.vBarLimit = v
                        }
                        this.vRatio = Math.abs(this.vLimit / this.vBarLimit);
                        this.needV = F.offsetWidth;
                        j.style.display = M
                    }
                    this.scrollTo(this._pos[0], this._pos[1]);
                    if (d) {
                        c(this, "hor", 1);
                        c(this, "ver", 1)
                    }
                },
                scrollTo: function (d, f) {
                    if (this.needH) {
                        d = a(d, 0, this.hLimit);
                        var e = d / this.hRatio;
                        this._syncPosition("hor", d);
                        this._syncBarPosition("hor", e);
                        this._syncEmbedBarPosition("hor", d + e)
                    }
                    if (this.needV) {
                        f = a(f, 0, this.vLimit);
                        var e = f / this.vRatio;
                        this._syncPosition("ver", f);
                        this._syncBarPosition("ver", e);
                        this._syncEmbedBarPosition("ver", f + e)
                    }
                    this._onScrollEnd()
                },
                scrollToElement: function (l) {
                    var q = this.cave, m = jq(l).offset().top, o = m + l.offsetHeight, j = jq(l).offset().left, k = j + l.offsetWidth, i = jq(q).offset().top, n = i + q.offsetHeight, r = jq(q).offset().left, h = r + q.offsetWidth;
                    scrollUp = true, scrollLeft = l.offsetWidth == q.offsetWidth;
                    if ((this.needV && o <= n && m >= i) || (this.needH && k <= h && j >= r)) {
                        return
                    }
                    if (m < i) {
                        scrollUp = false
                    }
                    if (j < r) {
                        scrollLeft = false
                    }
                    var f = scrollUp ? o - n : i - m, d = this._pos[1] + (scrollUp ? f : -f), g = scrollLeft ? k - h : r - j, e = this._pos[0] + (scrollLeft ? g : -g), p;
                    if (this.needV) {
                        d = a(d, 0, this.vLimit);
                        p = d / this.vRatio;
                        this._syncPosition("ver", d);
                        this._syncBarPosition("ver", p);
                        this._syncEmbedBarPosition("ver", d + p)
                    }
                    if (this.needH) {
                        e = a(e, 0, this.hLimit);
                        p = e / this.hRatio;
                        this._syncPosition("hor", e);
                        this._syncBarPosition("hor", p);
                        this._syncEmbedBarPosition("hor", e + p)
                    }
                    this._onScrollEnd();
                    b(l).scrollIntoView()
                },
                isScrollIntoView: function (h) {
                    var l = this.cave, i = jq(h).offset().top, k = i + h.offsetHeight, f = jq(h).offset().left, g = f + h.offsetWidth, e = jq(l).offset().top, j = e + l.offsetHeight, m = jq(l).offset().left, d = m + l.offsetWidth;
                    if ((this.needV && k <= j && i >= e) || (this.needH && g <= d && f >= m)) {
                        return true
                    } else {
                        return false
                    }
                },
                getCurrentPosition: function () {
                    return this.currentPos
                },
                setBarPosition: function (g) {
                    var f = this.widget.frozen;
                    if (f && this.needH) {
                        var d = this.hBarLimit / f._scrollScale, e = g * d;
                        this._syncBarPosition("hor", e);
                        this._syncEmbedBarPosition("hor", e)
                    }
                },
                _checkBarRequired: function () {
                    var j = this.cave, d = this.scroller, i = this.widget.frozen;
                    this.needH = i ? true : (j.offsetWidth < d.scrollWidth);
                    var e = this.$n("hor");
                    if (!this.needH) {
                        if (e) {
                            this._unbindMouseEvent("hor");
                            this._syncPosition("hor", 0);
                            jq(e).remove();
                            if (this.opts.embed) {
                                var h = this.$n("hor-embed");
                                if (h) {
                                    jq(h).remove()
                                }
                            }
                        }
                    } else {
                        if (!this.$n("hor")) {
                            this.redraw(j, "hor");
                            this._bindMouseEvent("hor")
                        }
                    }
                    this.needV = j.offsetHeight < d.offsetHeight;
                    var g = this.$n("ver");
                    if (!this.needV) {
                        if (g) {
                            this._unbindMouseEvent("ver");
                            this._syncPosition("ver", 0);
                            jq(g).remove();
                            if (this.opts.embed) {
                                var f = this.$n("ver-embed");
                                if (f) {
                                    jq(f).remove()
                                }
                            }
                        }
                    } else {
                        if (!g) {
                            this.redraw(j, "ver");
                            this._bindMouseEvent("ver")
                        }
                    }
                },
                _bindMouseEvent: function (f) {
                    var l = this, k = l.cave, i = f == "hor", g = l.$n(f), e = l.$n(f + "-indicator"), d = l.$n(f + "-rail"), j = l.$n(f + (i ? "-left" : "-up")), h = l.$n(f + (i ? "-right" : "-down"));
                    if (i && (!(b.ie < 11) || !b.opera)) {
                        jq(k).mousewheel(l.proxy(l._mousewheelX))
                    } else {
                        jq(k).mousewheel(l.proxy(l._mousewheelY))
                    }
                    jq(g).click(b.$void);
                    jq(e).bind("mousedown", l.proxy(l._dragStart));
                    jq(d).bind("mousedown", l.proxy(l._mouseDown)).bind("mouseup", l.proxy(l._mouseUp));
                    jq(j).bind("mousedown", l.proxy(l._mouseDown)).bind("mouseup", l.proxy(l._mouseUp));
                    jq(h).bind("mousedown", l.proxy(l._mouseDown)).bind("mouseup", l.proxy(l._mouseUp))
                },
                _unbindMouseEvent: function (f) {
                    var l = this, k = l.cave, i = f == "hor", g = l.$n(f), e = l.$n(f + "-indicator"), d = l.$n(f + "-rail"), j = l.$n(f + (i ? "-left" : "-up")), h = l.$n(f + (i ? "-right" : "-down"));
                    if (i && (!(b.ie < 11) || !b.opera)) {
                        jq(k).unmousewheel(l.proxy(l._mousewheelX))
                    } else {
                        jq(k).unmousewheel(l.proxy(l._mousewheelY))
                    }
                    jq(g).unbind("click", b.$void);
                    jq(e).unbind("mousedown", l.proxy(l._dragStart));
                    jq(d).unbind("mousedown", l.proxy(l._mouseDown)).unbind("mouseup", l.proxy(l._mouseUp));
                    jq(j).unbind("mousedown", l.proxy(l._mouseDown)).unbind("mouseup", l.proxy(l._mouseUp));
                    jq(h).unbind("mousedown", l.proxy(l._mouseDown)).unbind("mouseup", l.proxy(l._mouseUp))
                },
                _fixScroll: function (d) {
                    var e = this.cave;
                    if (!this.dragging) {
                        this.scrollTo(e.scrollLeft, e.scrollTop)
                    }
                },
                _mouseEnter: function (d) {
                    c(this, "hor", 1);
                    c(this, "ver", 1)
                },
                _mouseLeave: function (d) {
                    if (this.dragging) {
                        return
                    }
                    c(this, "hor", 0);
                    c(this, "ver", 0)
                },
                _dragStart: function (e) {
                    if (this._pressTimer) {
                        clearInterval(this._pressTimer);
                        this._pressTimer = null
                    }
                    e.preventDefault();
                    var f = this, g = f.$n("hor-indicator") == e.currentTarget ? "hor" : "ver", h = g == "hor", d = h ? e.pageX : e.pageY, j = h ? f._barPos[0] : f._barPos[1], i = {
                        orient: g,
                        point: d,
                        pos: j
                    };
                    jq(document).bind("mousemove", i, f.proxy(f._dragMove)).bind("mouseup", f.proxy(f._dragEnd))
                },
                _dragEnd: function (e) {
                    var f = this, d = e.pageX, j = e.pageY, i = f.cave, h = jq(i).offset().left, g = jq(i).offset().top;
                    jq(document).unbind("mousemove", f.proxy(f._dragMove)).unbind("mouseup", f.proxy(f._dragEnd));
                    f.dragging = false;
                    if ((d < h || d > h + i.offsetWidth) || (j < g || j > g + i.offsetHeight)) {
                        c(f, "hor", 0);
                        c(f, "ver", 0)
                    }
                },
                _dragMove: function (n) {
                    var h = n.data, g = h.orient, l = h.point, k = h.pos, o = g == "hor", m = (o ? n.pageX : n.pageY) - l, j = k + m, f = o ? this.hBarLimit : this.vBarLimit, i = o ? this.hRatio : this.vRatio, d = this.widget.frozen;
                    this.dragging = true;
                    j = a(j, 0, f);
                    this._syncBarPosition(g, j);
                    if (d && o) {
                        var e = f / d._scrollScale;
                        d._doScroll(j / e);
                        this._syncEmbedBarPosition("hor", j)
                    } else {
                        var k = j * i;
                        this._syncPosition(g, k);
                        this._syncEmbedBarPosition(g, k + j);
                        this._onScrollEnd()
                    }
                },
                _mousewheelX: function (l, k, h, g) {
                    var e = this.opts, f = e.step * e.wheelAmountStep, j = this._pos[0];
                    if (h) {
                        l.stop();
                        j += (h > 0 ? -f : f);
                        j = a(j + f, 0, this.hLimit);
                        var d = this.widget.frozen, i = j / this.hRatio;
                        if (d) {
                            f = this.hBarLimit / d._scrollScale;
                            i = i / f;
                            d._doScroll(i);
                            this._syncEmbedBarPosition("hor", i)
                        } else {
                            this._syncPosition("hor", j);
                            this._syncEmbedBarPosition("hor", j + i)
                        }
                        this._syncBarPosition("hor", i);
                        this._onScrollEnd()
                    }
                },
                _mousewheelY: function (l, k, h, g) {
                    var d = this.opts, f = d.step * d.wheelAmountStep, j = this._pos[1], i;
                    if (g) {
                        var e = g > 0;
                        if (e && j == 0) {
                            return
                        }
                        if (!e && j == this.vLimit) {
                            return
                        }
                        l.stop();
                        j += (e ? -f : f);
                        j = a(j, 0, this.vLimit);
                        i = j / this.vRatio;
                        this._syncPosition("ver", j);
                        this._syncBarPosition("ver", i);
                        this._syncEmbedBarPosition("ver", j + i);
                        this._onScrollEnd()
                    }
                },
                _mouseUp: function (d) {
                    clearInterval(this._pressTimer);
                    this._pressTimer = null
                },
                _mouseDown: function (s) {
                    if (this._pressTimer) {
                        clearInterval(this._pressTimer);
                        this._pressTimer = null
                    }
                    var A = s.currentTarget, r = this.$n("hor-rail"), f = this.$n("ver-rail"), o = this.$n("ver-up"), q = this.$n("ver-down"), h = this.$n("hor-left"), z = this.$n("hor-right"), y = this.widget.frozen, w = this.hBarLimit, k = y ? w / y._scrollScale : this.opts.step;
                    if (A == r || A == f) {
                        var e = A == r, p = e ? "hor" : "ver", i = jq(A).offset(), i = e ? i.left : i.top, n = this.$n(p + "-indicator"), d = e ? n.offsetWidth : n.offsetHeight, v = (e ? s.pageX : s.pageY) - i - d / 2, x = e ? this.hLimit : this.vLimit, l = e ? this.hRatio : this.vRatio, j = e ? this._pos[0] : this._pos[1], m = e ? this._barPos[0] : this._barPos[1], g = v * l, u = k * 10;
                        t = this;
                        if (y) {
                            v = a(v, 0, w);
                            t._syncBarPosition("hor", v);
                            t._syncEmbedBarPosition("hor", v);
                            y._doScroll(v / k)
                        } else {
                            t._pressTimer = setInterval(function () {
                                var E = v > m, C, B, D;
                                C = E ? j : g;
                                C = C < 0 ? 0 : C;
                                B = E ? g : j;
                                B = B > x ? x : B;
                                j += (E ? u : -u);
                                j = a(j, C, B);
                                D = j / l;
                                if (j == g || j <= C || j >= B) {
                                    clearInterval(t._pressTimer);
                                    t._pressTimer = null
                                }
                                t._syncPosition(p, j);
                                t._syncBarPosition(p, D);
                                t._syncEmbedBarPosition(p, j + D);
                                t._onScrollEnd()
                            }, 50)
                        }
                    }
                    if (A == h || A == z || A == o || A == q) {
                        var t = this, e = A == h || A == z, p = e ? "hor" : "ver", x = e ? t.hLimit : t.vLimit, l = e ? t.hRatio : t.vRatio, j = e ? t._pos[0] : t._pos[1], m = t._barPos[0];
                        t._pressTimer = setInterval(function () {
                            if (y && e) {
                                m += (A == h ? -k : k);
                                m = a(m, 0, w);
                                t._syncBarPosition(p, m);
                                t._syncEmbedBarPosition(p, m);
                                y._doScroll(m / k)
                            } else {
                                var B;
                                if (e) {
                                    j += (A == h ? -k : k)
                                } else {
                                    j += (A == o ? -k : k)
                                }
                                j = a(j, 0, x);
                                m = j / l;
                                t._syncPosition(p, j);
                                t._syncBarPosition(p, m);
                                t._syncEmbedBarPosition(p, j + m);
                                t._onScrollEnd()
                            }
                        }, 50)
                    }
                },
                _syncPosition: function (f, j) {
                    if (!this._pos) {
                        return
                    }
                    var d = f == "hor", i = this.cave, g = this.$n(f), h = this.opts.embed;
                    if (g) {
                        j = Math.round(j);
                        this._pos[d ? 0 : 1] = j;
                        g.style[d ? "left" : "top"] = j + "px";
                        if (d && this.needV) {
                            this.$n("ver").style.right = -j + "px";
                            if (h) {
                                this.$n("ver-embed").style.right = -j + "px"
                            }
                        }
                        if (!d && this.needH) {
                            this.$n("hor").style.bottom = -j + "px";
                            if (h) {
                                this.$n("hor-embed").style.bottom = -j + "px"
                            }
                        }
                        i[d ? "scrollLeft" : "scrollTop"] = j;
                        var e = this.opts.onSyncPosition;
                        if (e) {
                            this.currentPos = {x: this._pos[0], y: this._pos[1]};
                            e.call(this)
                        }
                    }
                },
                _syncBarPosition: function (f, g) {
                    var e = f == "hor", d = this.$n(f + "-indicator");
                    this._barPos[e ? 0 : 1] = g;
                    d.style[e ? "left" : "top"] = g + "px"
                },
                _syncEmbedBarPosition: function (e, i) {
                    if (this.opts.embed) {
                        var d = e == "hor", h = this.$n(e + "-embed"), f = this.opts, g = d ? f.startPositionX : f.startPositionY;
                        h.style[d ? "left" : "top"] = (i + g) + "px"
                    }
                },
                _onScrollEnd: function () {
                    var d = this.opts.onScrollEnd;
                    if (d) {
                        this.currentPos = {x: this._pos[0], y: this._pos[1]};
                        d.call(this)
                    }
                },
                redraw: function (k, g) {
                    var e = g == "hor", h = this.uid + "-" + g, d = e ? "horizontal" : "vertical", j = e ? "left" : "up", i = e ? "right" : "down", f = [];
                    if (this.opts.embed) {
                        f.push('<div id="', h, '-embed" class="z-scrollbar-', d, '-embed"></div>')
                    }
                    f.push('<div id="', h, '" class="z-scrollbar z-scrollbar-', d, '">', '<div id="', h, "-", j, '" class="z-scrollbar-', j, '">', '<i class="z-icon-caret-', j, '"></i>', "</div>", '<div id="', h, '-wrapper" class="z-scrollbar-wrapper">', '<div id="', h, '-indicator" class="z-scrollbar-indicator">', '<i class="z-scrollbar-icon z-icon-reorder"></i></div>', '<div id="', h, '-rail" class="z-scrollbar-rail"></div>', "</div>", '<div id="', h, "-", i, '" class="z-scrollbar-', i, '">', '<i class="z-icon-caret-', i, '"></i>', "</div>", "</div>");
                    jq(k).append(f.join(""));
                    f = null
                }
            })
        })(zk);

    } finally {
        zk.setLoaded(zk._p.n);
    }
});
zk.setLoaded('zul', 1);
zk.load('zul', function () {
    if (zk._p = zkpi('zul.wgt'))try {
        zul.wgt.A = zk.$extends(zul.LabelImageWidget, {
            _dir: "normal", setDisabled: (function (a, b, c) {
                return function (d, e) {
                    var f = this[a];
                    this.__fname__ = a.substring(1);
                    this[a] = d = b.apply(this, arguments);
                    if (f !== d || (e && e.force)) {
                        c.apply(this, arguments)
                    }
                    delete this.__fname__;
                    return this
                }
            })("_disabled", (function (a, b) {
                if (b && b.adbs) {
                    this._adbs = true
                } else {
                    if (!b || b.adbs === undefined) {
                        this._adbs = false
                    }
                }
                if (!a) {
                    if (this._adbs) {
                        this._adbs = false
                    } else {
                        if (b && b.adbs === false) {
                            return this._disabled
                        }
                    }
                }
                return a
            }), (function (c) {
                var b = this, a = function () {
                    if (b.desktop) {
                        jq(b.$n()).attr("disabled", c)
                    }
                };
                a()
            })), getDisabled: _zkf$ = function () {
                return this._disabled
            }, isDisabled: _zkf$, setDir: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_dir", (_zkf = function () {
                var a = this.$n();
                if (a) {
                    a.innerHTML = this.domContent_()
                }
            })), getDir: _zkf$ = function () {
                return this._dir
            }, isDir: _zkf$, setHref: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_href", (function (a) {
                var b = this.$n();
                if (b) {
                    b.href = a || ""
                }
            })), getHref: _zkf$ = function () {
                return this._href
            }, isHref: _zkf$, setTarget: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_target", (function (a) {
                var b = this.$n();
                if (b) {
                    b.target = a || ""
                }
            })), getTarget: _zkf$ = function () {
                return this._target
            }, isTarget: _zkf$, setTabindex: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_tabindex", (function (a) {
                var b = this.$n();
                if (b) {
                    b.tabIndex = a || ""
                }
            })), getTabindex: _zkf$ = function () {
                return this._tabindex
            }, isTabindex: _zkf$, setAutodisable: (function (a) {
                return function (b) {
                    this[a] = b;
                    return this
                }
            })("_autodisable"), getAutodisable: _zkf$ = function () {
                return this._autodisable
            }, isAutodisable: _zkf$, bind_: function () {
                this.$supers(zul.wgt.A, "bind_", arguments);
                if (!this._disabled) {
                    var a = this.$n();
                    this.domListen_(a, "onFocus", "doFocus_").domListen_(a, "onBlur", "doBlur_")
                }
            }, unbind_: function () {
                var a = this.$n();
                this.domUnlisten_(a, "onFocus", "doFocus_").domUnlisten_(a, "onBlur", "doBlur_");
                this.$supers(zul.wgt.A, "unbind_", arguments)
            }, domContent_: function () {
                var c = zUtl.encodeXML(this.getLabel()), a = this.getImage(), b = this.domIcon_();
                if (!a && !b) {
                    return c
                }
                if (!a) {
                    a = b
                } else {
                    a = '<img src="' + a + '" align="absmiddle" />' + (b ? " " + b : "")
                }
                return this.getDir() == "reverse" ? c + a : a + c
            }, domAttrs_: function (c) {
                var a = this.$supers("domAttrs_", arguments), b;
                if (b = this.getTarget()) {
                    a += ' target="' + b + '"'
                }
                if (b = this.getTabindex()) {
                    a += ' tabIndex="' + b + '"'
                }
                if (b = this.getHref()) {
                    a += ' href="' + b + '"'
                } else {
                    a += ' href="javascript:;"'
                }
                if (this._disabled) {
                    a += ' disabled="disabled"'
                }
                return a
            }, doClick_: function (a) {
                if (this._disabled) {
                    a.stop()
                } else {
                    zul.wgt.ADBS.autodisable(this);
                    this.fireX(a);
                    if (!a.stopped) {
                        this.$super("doClick_", a, true)
                    }
                }
            }
        });
        zkreg('zul.wgt.A', true);
        zk._m = {};
        zk._m['default'] = function (b) {
            b.push("<a ", this.domAttrs_(), ">", this.domContent_());
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(b)
            }
            b.push("</a>")
        };
        ;
        zkmld(zk._p.p.A, zk._m);
        zul.wgt.Cell = zk.$extends(zul.Widget, {
            _colspan: 1,
            _rowspan: 1,
            _rowType: 0,
            _boxType: 1,
            setColspan: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_colspan", (function (a) {
                var b = this.$n();
                if (b) {
                    b.colSpan = a
                }
            })),
            getColspan: _zkf$ = function () {
                return this._colspan
            },
            isColspan: _zkf$,
            setRowspan: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_rowspan", (function (a) {
                var b = this.$n();
                if (b) {
                    b.rowSpan = a
                }
            })),
            getRowspan: _zkf$ = function () {
                return this._rowspan
            },
            isRowspan: _zkf$,
            setAlign: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_align", (function (a) {
                var b = this.$n();
                if (b) {
                    b.align = a
                }
            })),
            getAlign: _zkf$ = function () {
                return this._align
            },
            isAlign: _zkf$,
            setValign: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_valign", (function (a) {
                var b = this.$n();
                if (b) {
                    b.valign = a
                }
            })),
            getValign: _zkf$ = function () {
                return this._valign
            },
            isValign: _zkf$,
            _getParentType: function () {
                var a = zk.isLoaded("zul.grid") && this.parent.$instanceof(zul.grid.Row);
                if (!a) {
                    return zk.isLoaded("zul.box") && this.parent.$instanceof(zul.box.Box) ? this._boxType : null
                }
                return this._rowType
            },
            _getRowAttrs: function () {
                return this.parent._childAttrs(this, this.getChildIndex())
            },
            _getBoxAttrs: function () {
                return this.parent._childInnerAttrs(this)
            },
            _colHtmlPre: function () {
                var a = "", b = this.parent;
                if (zk.isLoaded("zkex.grid") && b.$instanceof(zkex.grid.Group) && this == b.firstChild) {
                    a += b.domContent_()
                }
                return a
            },
            domStyle_: function (b) {
                var a = this.$supers("domStyle_", arguments);
                if (this._align) {
                    a += " text-align:" + this._align + ";"
                }
                if (this._valign) {
                    a += " vertical-align:" + this._valign + ";"
                }
                return a
            },
            domAttrs_: function (h) {
                var g = this.$supers("domAttrs_", arguments), b;
                if ((b = this._colspan) != 1) {
                    g += ' colspan="' + b + '"'
                }
                if ((b = this._rowspan) != 1) {
                    g += ' rowspan="' + b + '"'
                }
                var d, a = zUtl.parseMap(g, " ", '"');
                switch (this._getParentType()) {
                    case this._rowType:
                        d = zUtl.parseMap(this._getRowAttrs(), " ", '"');
                        break;
                    case this._boxType:
                        d = zUtl.parseMap(this._getBoxAttrs(), " ", '"');
                        break
                }
                if (d) {
                    var e = d.style, c = a.style, f;
                    if (e && c) {
                        e = zUtl.parseMap(e.replace(/"/g, "").replace(/:/g, "="), ";");
                        c = zUtl.parseMap(c.replace(/"/g, "").replace(/:/g, "="), ";");
                        zk.copy(e, c);
                        f = zUtl.mapToString(e, ":", ";")
                    }
                    zk.copy(d, a);
                    if (f) {
                        d.style = '"' + f + '"'
                    }
                }
                return " " + zUtl.mapToString(d)
            },
            setVisible: function (a) {
                this.$supers("setVisible", arguments);
                if (zk.ie10_ && a) {
                    zk(this.$n()).redoCSS()
                }
            },
            deferRedrawHTML_: function (a) {
                a.push("<td", this.domAttrs_({domClass: 1}), ' class="z-renderdefer"></td>')
            }
        });
        zkreg('zul.wgt.Cell');
        zk._m = {};
        zk._m['default'] = function (c) {
            c.push("<td", this.domAttrs_(), ">", this._colHtmlPre());
            for (var b = 0, a = this.firstChild; a; a = a.nextSibling, b++) {
                a.redraw(c)
            }
            c.push("</td>")
        };
        ;
        zkmld(zk._p.p.Cell, zk._m);
        zul.wgt.Div = zk.$extends(zul.Widget, {
            setAlign: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_align", (function (a) {
                var b = this.$n();
                if (b) {
                    b.align = a
                }
            })), getAlign: _zkf$ = function () {
                return this._align
            }, isAlign: _zkf$, domAttrs_: function (b) {
                var c = this._align, a = this.$supers("domAttrs_", arguments);
                return c != null ? a + ' align="' + c + '"' : a
            }
        });
        zkreg('zul.wgt.Div', true);
        zk._m = {};
        zk._m['default'] = zk.Page.$redraw;
        ;
        zkmld(zk._p.p.Div, zk._m);
        zul.wgt.Span = zk.$extends(zul.Widget, {});
        zkreg('zul.wgt.Span', true);
        zk._m = {};
        zk._m['default'] = function (b) {
            b.push("<span", this.domAttrs_(), ">");
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(b)
            }
            b.push("</span>")
        };
        ;
        zkmld(zk._p.p.Span, zk._m);
        zul.wgt.Idspace = zk.$extends(zul.wgt.Div, {
            $init: function () {
                this._fellows = {};
                this.$supers("$init", arguments)
            }
        });
        zkreg('zul.wgt.Idspace', true);
        zk._m = {};
        zk._m['default'] = zk.Page.$redraw;
        ;
        zkmld(zk._p.p.Idspace, zk._m);
        zul.wgt.Include = zk.$extends(zul.Widget, {
            $init: function () {
                this._fellows = {};
                this.$supers("$init", arguments)
            }, setComment: (function (a) {
                return function (b) {
                    this[a] = b;
                    return this
                }
            })("_comment"), getComment: _zkf$ = function () {
                return this._comment
            }, isComment: _zkf$, domStyle_: function (b) {
                var a = this.$supers("domStyle_", arguments);
                if (!this.previousSibling && !this.nextSibling) {
                    if ((!b || !b.width) && !this.getWidth()) {
                        a += "width:100%;"
                    }
                    if ((!b || !b.height) && !this.getHeight()) {
                        a += "height:100%;"
                    }
                }
                return a
            }, bind_: function () {
                this.$supers(zul.wgt.Include, "bind_", arguments);
                var a;
                if (a = this._childjs) {
                    a();
                    this._childjs = this._xcnt = null
                }
                if (jq.isArray(a = this._xcnt)) {
                    for (var c = this.$n(), b = 0; b < a.length; ++b) {
                        c.appendChild(a[b])
                    }
                }
            }, unbind_: function () {
                if (jq.isArray(this._xcnt)) {
                    for (var a = this.$n(); a.firstChild;) {
                        a.removeChild(a.firstChild)
                    }
                }
                this.$supers(zul.wgt.Include, "unbind_", arguments)
            }
        });
        zkreg('zul.wgt.Include');
        zk._m = {};
        zk._m['default'] = function (b) {
            b.push("<div", this.domAttrs_(), ">");
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(b)
            }
            if (this._comment) {
                b.push("<!--\n")
            }
            if ((a = this._xcnt) && !jq.isArray(a)) {
                b.push(a)
            }
            if (this._comment) {
                b.push("\n-->")
            }
            b.push("</div>")
        };
        ;
        zkmld(zk._p.p.Include, zk._m);
        zul.wgt.Label = zk.$extends(zul.Widget, {
            _value: "", _maxlength: 0, setValue: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_value", (_zkf = function () {
                var a = this.$n();
                if (a) {
                    a.innerHTML = this.getEncodedText()
                }
            })), getValue: _zkf$ = function () {
                return this._value
            }, isValue: _zkf$, setMultiline: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_multiline", (_zkf)), getMultiline: _zkf$ = function () {
                return this._multiline
            }, isMultiline: _zkf$, setPre: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_pre", (_zkf)), getPre: _zkf$ = function () {
                return this._pre
            }, isPre: _zkf$, setMaxlength: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_maxlength", (_zkf)), getMaxlength: _zkf$ = function () {
                return this._maxlength
            }, isMaxlength: _zkf$, getEncodedText: function () {
                return zUtl.encodeXML(this._value, {
                    multiline: this._multiline,
                    pre: this._pre,
                    maxlength: this._maxlength
                })
            }, getMarginSize_: function (a) {
                var c = this.$supers("getMarginSize_", arguments);
                if (a == "h") {
                    var d = this.$n(), b = zk(d).offsetHeight();
                    return c + b - d.offsetHeight
                }
                return c
            }
        });
        zkreg('zul.wgt.Label');
        zk._m = {};
        zk._m['default'] = function (a) {
            a.push("<span", this.domAttrs_(), ">", this.getEncodedText(), "</span>")
        };
        ;
        zkmld(zk._p.p.Label, zk._m);
        (function () {
            function c(e) {
                var d;
                if (d = e._upload) {
                    e._uplder = new zul.Upload(e, null, d)
                }
            }

            function a(e) {
                var d;
                if (d = e._uplder) {
                    e._uplder = null;
                    d.destroy()
                }
            }

            var b = zul.wgt.Button = zk.$extends(zul.LabelImageWidget, {
                _orient: "horizontal",
                _dir: "normal",
                _type: "button",
                setHref: (function (d) {
                    return function (e) {
                        this[d] = e;
                        return this
                    }
                })("_href"),
                getHref: _zkf$ = function () {
                    return this._href
                },
                isHref: _zkf$,
                setTarget: (function (d) {
                    return function (e) {
                        this[d] = e;
                        return this
                    }
                })("_target"),
                getTarget: _zkf$ = function () {
                    return this._target
                },
                isTarget: _zkf$,
                setDir: (function (d, e) {
                    return function (f, g) {
                        var h = this[d];
                        this[d] = f;
                        if (h !== f || (g && g.force)) {
                            this.__fname__ = d.substring(1);
                            e.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_dir", (_zkf = function () {
                    this.updateDomContent_()
                })),
                getDir: _zkf$ = function () {
                    return this._dir
                },
                isDir: _zkf$,
                setOrient: (function (d, e) {
                    return function (f, g) {
                        var h = this[d];
                        this[d] = f;
                        if (h !== f || (g && g.force)) {
                            this.__fname__ = d.substring(1);
                            e.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_orient", (_zkf)),
                getOrient: _zkf$ = function () {
                    return this._orient
                },
                isOrient: _zkf$,
                setType: (function (d, e) {
                    return function (f, g) {
                        var h = this[d];
                        this[d] = f;
                        if (h !== f || (g && g.force)) {
                            this.__fname__ = d.substring(1);
                            e.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_type", (_zkf)),
                getType: _zkf$ = function () {
                    return this._type
                },
                isType: _zkf$,
                setDisabled: (function (d, e, f) {
                    return function (g, h) {
                        var i = this[d];
                        this.__fname__ = d.substring(1);
                        this[d] = g = e.apply(this, arguments);
                        if (i !== g || (h && h.force)) {
                            f.apply(this, arguments)
                        }
                        delete this.__fname__;
                        return this
                    }
                })("_disabled", (function (d, e) {
                    if (e && e.adbs) {
                        this._adbs = true
                    } else {
                        if (!e || e.adbs === undefined) {
                            this._adbs = false
                        }
                    }
                    if (!d) {
                        if (this._adbs) {
                            this._adbs = false
                        } else {
                            if (e && e.adbs === false) {
                                return this._disabled
                            }
                        }
                    }
                    return d
                }), (function (f) {
                    var e = this, d = function () {
                        if (e.desktop) {
                            jq(e.$n()).attr("disabled", f);
                            if (e._upload) {
                                f ? a(e) : c(e)
                            }
                        }
                    };
                    if (this._type == "submit") {
                        setTimeout(d, 50)
                    } else {
                        d()
                    }
                })),
                getDisabled: _zkf$ = function () {
                    return this._disabled
                },
                isDisabled: _zkf$,
                setTabindex: (function (d, e) {
                    return function (f, g) {
                        var h = this[d];
                        this[d] = f;
                        if (h !== f || (g && g.force)) {
                            this.__fname__ = d.substring(1);
                            e.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_tabindex", (function (d) {
                    var e = this.$n();
                    if (e) {
                        e.tabIndex = d || ""
                    }
                })),
                getTabindex: _zkf$ = function () {
                    return this._tabindex
                },
                isTabindex: _zkf$,
                setAutodisable: (function (d) {
                    return function (e) {
                        this[d] = e;
                        return this
                    }
                })("_autodisable"),
                getAutodisable: _zkf$ = function () {
                    return this._autodisable
                },
                isAutodisable: _zkf$,
                setUpload: (function (d, e) {
                    return function (f, g) {
                        var h = this[d];
                        this[d] = f;
                        if (h !== f || (g && g.force)) {
                            this.__fname__ = d.substring(1);
                            e.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_upload", (function (d) {
                    var e = this.$n();
                    if (e && !this._disabled) {
                        a(this);
                        if (d && d != "false") {
                            c(this)
                        }
                    }
                })),
                getUpload: _zkf$ = function () {
                    return this._upload
                },
                isUpload: _zkf$,
                focus_: function (e) {
                    var f = this, d = this.$n();
                    if (d.disabled && !f._delayFocus) {
                        f._delayFocus = true;
                        setTimeout(function () {
                            f.focus_(e);
                            f._delayFocus = null
                        }, 0)
                    }
                    if (!zk.focusBackFix || !this._upload) {
                        zk(d).focus(e)
                    }
                    return true
                },
                domContent_: function () {
                    var f = zUtl.encodeXML(this.getLabel()), d = this.getImage(), e = this.domIcon_();
                    if (!d && !e) {
                        return f
                    }
                    if (!d) {
                        d = e
                    } else {
                        d = '<img class="' + this.$s("image") + '" src="' + d + '" />' + (e ? " " + e : "")
                    }
                    var g = "vertical" == this.getOrient() ? "<br/>" : " ";
                    return this.getDir() == "reverse" ? f + g + d : d + g + f
                },
                onShow: function () {
                    if (this.$n() && !this._disabled && this._uplder) {
                        this._uplder.sync()
                    }
                },
                bind_: function () {
                    this.$supers(b, "bind_", arguments);
                    var d = this.$n();
                    this.domListen_(d, "onFocus", "doFocus_").domListen_(d, "onBlur", "doBlur_");
                    zWatch.listen({onShow: this});
                    if (!this._disabled && this._upload) {
                        c(this)
                    }
                },
                unbind_: function () {
                    a(this);
                    var d = this.$n();
                    this.domUnlisten_(d, "onFocus", "doFocus_").domUnlisten_(d, "onBlur", "doBlur_");
                    zWatch.unlisten({onShow: this});
                    this.$supers(b, "unbind_", arguments)
                },
                doClick_: function (d) {
                    if (!d.domEvent) {
                        return
                    }
                    if (!this._disabled) {
                        if (!this._upload) {
                            zul.wgt.ADBS.autodisable(this)
                        } else {
                            if (!zk.ie || zk.ie > 10) {
                                this._uplder.openFileDialog()
                            }
                        }
                        this.fireX(d);
                        if (!d.stopped) {
                            var e = this._href;
                            if (e) {
                                zUtl.go(e, {target: this._target || (d.data.ctrlKey ? "_blank" : "")})
                            }
                            this.$super("doClick_", d, true)
                        }
                    }
                },
                setFlexSize_: function (d) {
                    var e = this.$n();
                    if (d.height !== undefined) {
                        if (d.height == "auto") {
                            e.style.height = ""
                        } else {
                            if (d.height != "") {
                                e.style.height = jq.px0(d.height)
                            } else {
                                e.style.height = this._height ? this._height : ""
                            }
                        }
                    }
                    if (d.width !== undefined) {
                        if (d.width == "auto") {
                            e.style.width = ""
                        } else {
                            if (d.width != "") {
                                e.style.width = jq.px0(d.width)
                            } else {
                                e.style.width = this._width ? this._width : ""
                            }
                        }
                    }
                }
            });
            zul.wgt.ADBS = zk.$extends(zk.Object, {
                $init: function (d) {
                    this._ads = d
                }, onResponse: function () {
                    for (var d = this._ads, e; e = d.shift();) {
                        e.setDisabled(false, {adbs: false, skip: true})
                    }
                    zWatch.unlisten({onResponse: this})
                }
            }, {
                autodisable: function (k) {
                    var f = k._autodisable, e, i;
                    if (f) {
                        f = f.split(",");
                        for (var d = f.length; d--;) {
                            var h = f[d].trim();
                            if (h) {
                                var g;
                                if (g = h.charAt(0) == "+") {
                                    h = h.substring(1)
                                }
                                h = "self" == h ? k : k.$f(h);
                                if (h == k) {
                                    i = k._uplder;
                                    k._uplder = null;
                                    k._autodisable_self = true
                                }
                                if (h && !h._disabled) {
                                    h.setDisabled(true, {adbs: true, skip: true});
                                    if (k.inServer) {
                                        if (g) {
                                            h.smartUpdate("disabled", true)
                                        } else {
                                            if (!e) {
                                                e = [h]
                                            } else {
                                                e.push(h)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (e) {
                        e = new zul.wgt.ADBS(e);
                        if (i) {
                            i._aded = e;
                            k._uplder = i
                        } else {
                            if (k.isListen("onClick", {asapOnly: true})) {
                                zWatch.listen({onResponse: e})
                            } else {
                                setTimeout(function () {
                                    e.onResponse()
                                }, 800)
                            }
                        }
                    }
                }
            })
        })();
        zkreg('zul.wgt.Button');
        zk._m = {};
        zk._m['os'] = function (b) {
            var a = this._tabindex;
            b.push('<button type="', this._type, '"', this.domAttrs_());
            if (this._disabled) {
                b.push(' disabled="disabled"')
            }
            if (a) {
                b.push(' tabindex="', a, '"')
            }
            b.push(">", this.domContent_(), "</button>")
        };
        ;
        zk._m['trendy'] = [zk._p.p.Button, 'os'];
        zk._m['default'] = [zk._p.p.Button, 'os'];
        zkmld(zk._p.p.Button, zk._m);
        (function () {
            var a = zk.gecko ? function (c) {
                var b;
                return (b = c._spacing) && b.endsWith("%")
            } : zk.$void;
            zul.wgt.Separator = zk.$extends(zul.Widget, {
                _orient: "horizontal", setOrient: (function (b, c) {
                    return function (d, e) {
                        var f = this[b];
                        this[b] = d;
                        if (f !== d || (e && e.force)) {
                            this.__fname__ = b.substring(1);
                            c.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_orient", (function () {
                    this.updateDomClass_()
                })), getOrient: _zkf$ = function () {
                    return this._orient
                }, isOrient: _zkf$, setBar: (function (b, c) {
                    return function (d, e) {
                        var f = this[b];
                        this[b] = d;
                        if (f !== d || (e && e.force)) {
                            this.__fname__ = b.substring(1);
                            c.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_bar", (function () {
                    this.updateDomClass_()
                })), getBar: _zkf$ = function () {
                    return this._bar
                }, isBar: _zkf$, setSpacing: (function (b, c) {
                    return function (d, e) {
                        var f = this[b];
                        this[b] = d;
                        if (f !== d || (e && e.force)) {
                            this.__fname__ = b.substring(1);
                            c.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_spacing", (function () {
                    this.updateDomStyle_()
                })), getSpacing: _zkf$ = function () {
                    return this._spacing
                }, isSpacing: _zkf$, isVertical: function () {
                    return this._orient == "vertical"
                }, bind_: function () {
                    this.$supers(zul.wgt.Separator, "bind_", arguments)
                }, getZclass: function () {
                    return "z-separator"
                }, domClass_: function (d) {
                    var c = this.$supers("domClass_", arguments), b = this.isBar();
                    if (!d || !d.zclass) {
                        c += " " + this.$s((this.isVertical() ? "vertical" + (b ? "-bar" : "") : "horizontal" + (b ? "-bar" : "")))
                    }
                    return c
                }, domStyle_: function () {
                    var c = this.$supers("domStyle_", arguments);
                    if (!a(this)) {
                        return c
                    }
                    var d = this._spacing, b = zk.parseInt(d.substring(0, d.length - 1).trim());
                    if (b <= 0) {
                        return c
                    }
                    b = b >= 2 ? (b / 2) + "%" : "1%";
                    return "margin:" + (this.isVertical() ? "0 " + b : b + " 0") + ";" + c
                }, getWidth: function () {
                    var b = this.$supers("getWidth", arguments);
                    return !this.isVertical() || (b != null && b.length > 0) || a(this) ? b : this._spacing
                }, getHeight: function () {
                    var b = this.$supers("getHeight", arguments);
                    return this.isVertical() || (b != null && b.length > 0) || a(this) ? b : this._spacing
                }
            })
        })();
        zkreg('zul.wgt.Separator');
        zk._m = {};
        zk._m['default'] = function (a) {
            a.push("<div", this.domAttrs_(), ">&nbsp;</div>")
        };
        ;
        zkmld(zk._p.p.Separator, zk._m);
        zul.wgt.Space = zk.$extends(zul.wgt.Separator, {_orient: "vertical"});
        zkreg('zul.wgt.Space');
        zk._m = {};
        zk._m['default'] = zul.wgt.Separator.molds["default"];
        ;
        zkmld(zk._p.p.Space, zk._m);
        zul.wgt.Caption = zk.$extends(zul.LabelImageWidget, {
            domDependent_: true, rerender: function () {
                var a = this.parent;
                if (a) {
                    a.clearCache()
                }
                this.$supers("rerender", arguments)
            }, domContent_: function () {
                var c = this.getLabel(), a = this.getImage(), d = this.parent ? this.parent._title : "", b = this.domIcon_();
                if (d) {
                    c = c ? d + " - " + c : d
                }
                c = zUtl.encodeXML(c);
                if (!a && !b) {
                    return c
                }
                if (!a) {
                    a = b
                } else {
                    a = '<img id="' + this.uuid + '-img" src="' + a + '" class="' + this.$s("image") + '" />' + (b ? " " + b : "")
                }
                return c ? a + " " + c : a
            }, updateDomContent_: function () {
                var d = this.domContent_(), a = this.$n("cave"), c = this.nChildren, e = jq(a).contents().length, b = 0;
                if (a) {
                    jq(a).contents().filter(function () {
                        return (c + b++) < e
                    }).remove();
                    jq(a).prepend(d ? d : "&nbsp;")
                }
            }, domClass_: function (c) {
                var b = this.$supers("domClass_", arguments), a = this.parent;
                if (!a.$instanceof(zul.wgt.Groupbox)) {
                    return b
                }
                return b + (a._closable ? "" : " " + this.$s("readonly"))
            }, doClick_: function () {
                if (this.parent.$instanceof(zul.wgt.Groupbox)) {
                    this.parent.setOpen(!this.parent.isOpen())
                }
                this.$supers("doClick_", arguments)
            }, _getBlank: function () {
                return "&nbsp;"
            }, _isCollapsibleVisible: function () {
                var a = this.parent;
                return a.isCollapsible && a.isCollapsible()
            }, _isCloseVisible: function () {
                var a = this.parent;
                return a.isClosable && a.isClosable() && !a.$instanceof(zul.wgt.Groupbox)
            }, _isMinimizeVisible: function () {
                var a = this.parent;
                return a.isMinimizable && a.isMinimizable()
            }, _isMaximizeVisible: function () {
                var a = this.parent;
                return a.isMaximizable && a.isMaximizable()
            }, beforeMinFlex_: function (a) {
                if (a == "w") {
                    this.$n().width = ""
                }
            }, setFlexSizeW_: function (h, b, e, c) {
                if (c) {
                    if (this._isCloseVisible()) {
                        var g = this.parent.$n("close");
                        e += g.offsetWidth + zk(g).marginWidth()
                    }
                    if (this._isMaximizeVisible()) {
                        var a = this.parent.$n("max");
                        e += a.offsetWidth + zk(a).marginWidth()
                    }
                    if (this._isMinimizeVisible()) {
                        var d = this.parent.$n("min");
                        e += d.offsetWidth + zk(d).marginWidth()
                    }
                    if (this._isCollapsibleVisible()) {
                        var f = this.parent.$n("exp");
                        e += f.offsetWidth + zk(f).marginWidth()
                    }
                }
                this.$supers("setFlexSizeW_", arguments)
            }, getImageNode: function () {
                if (!this._eimg && this._image) {
                    var a = this.$n("img");
                    if (a) {
                        this._eimg = a
                    }
                }
                return this._eimg
            }
        });
        zkreg('zul.wgt.Caption', true);
        zk._m = {};
        zk._m['default'] = function (e) {
            var a = this.parent, b = this.domContent_();
            e.push("<div", this.domAttrs_(), ">", '<div id="', this.uuid, '-cave" class="', this.$s("content"), '">', (b ? b : this.firstChild ? "" : this._getBlank()));
            for (var h = this.firstChild; h; h = h.nextSibling) {
                h.redraw(e)
            }
            e.push("</div>");
            if (a._isDefault && a._isDefault()) {
                e.push("</div>");
                return
            }
            var d = a.uuid, i = a.$s("icon");
            if (this._isCloseVisible()) {
                e.push('<div id="', d, '-close" class="', i, " ", a.$s("close"), '"><i class="', a.getClosableIconClass_(), '"></i></div>')
            }
            if (this._isMaximizeVisible()) {
                var f = this._maximized;
                e.push('<div id="', d, '-max" class="', i, " ", a.$s("maximize"));
                if (f) {
                    e.push(" ", a.$s("maximized"))
                }
                var g = f ? a.getMaximizedIconClass_() : a.getMaximizableIconClass_();
                e.push('"><i class="', g, '"></i></div>')
            }
            if (this._isMinimizeVisible()) {
                e.push('<div id="', d, '-min" class="', i, " ", a.$s("minimize"), '" ><i class="', a.getMinimizableIconClass_(), '"></i></div>')
            }
            if (this._isCollapsibleVisible()) {
                var c = a._open ? a.getCollapseOpenIconClass_() : a.getCollapseCloseIconClass_();
                e.push('<div id="', d, '-exp" class="', i, " ", a.$s("expand"), '"><i class="', c, '"></i></div>')
            }
            e.push("</div>")
        };
        ;
        zkmld(zk._p.p.Caption, zk._m);
        (function () {
            function b(c) {
                var d = c.domEvent;
                return d && jq.nodeName(d.target, "label")
            }

            var a = zul.wgt.Checkbox = zk.$extends(zul.LabelImageWidget, {
                _checked: false,
                setDisabled: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_disabled", (function (c) {
                    var d = this.$n("real");
                    if (d) {
                        d.disabled = c
                    }
                })),
                getDisabled: _zkf$ = function () {
                    return this._disabled
                },
                isDisabled: _zkf$,
                setChecked: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_checked", (function (c) {
                    var d = this.$n("real");
                    if (d) {
                        jq(d).prop("checked", c)
                    }
                })),
                getChecked: _zkf$ = function () {
                    return this._checked
                },
                isChecked: _zkf$,
                setName: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_name", (function (c) {
                    var d = this.$n("real");
                    if (d) {
                        d.name = c || ""
                    }
                })),
                getName: _zkf$ = function () {
                    return this._name
                },
                isName: _zkf$,
                setTabindex: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_tabindex", (function (c) {
                    var d = this.$n("real");
                    if (d) {
                        d.tabIndex = c || ""
                    }
                })),
                getTabindex: _zkf$ = function () {
                    return this._tabindex
                },
                isTabindex: _zkf$,
                setValue: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_value", (function (c) {
                    var d = this.$n("real");
                    if (d) {
                        d.value = c || ""
                    }
                })),
                getValue: _zkf$ = function () {
                    return this._value
                },
                isValue: _zkf$,
                setAutodisable: (function (c) {
                    return function (d) {
                        this[c] = d;
                        return this
                    }
                })("_autodisable"),
                getAutodisable: _zkf$ = function () {
                    return this._autodisable
                },
                isAutodisable: _zkf$,
                focus_: function (c) {
                    zk(this.$n("real") || this.$n()).focus(c);
                    return true
                },
                contentAttrs_: function () {
                    var d = "", c;
                    if (c = this.getName()) {
                        d += ' name="' + c + '"'
                    }
                    if (this._disabled) {
                        d += ' disabled="disabled"'
                    }
                    if (this._checked) {
                        d += ' checked="checked"'
                    }
                    if (c = this._tabindex) {
                        d += ' tabindex="' + c + '"'
                    }
                    if (c = this.getValue()) {
                        d += ' value="' + c + '"'
                    }
                    return d
                },
                bind_: function (d) {
                    this.$supers(a, "bind_", arguments);
                    var c = this.$n("real");
                    if (c.checked != c.defaultChecked) {
                        c.checked = c.defaultChecked
                    }
                    this.domListen_(c, "onFocus", "doFocus_").domListen_(c, "onBlur", "doBlur_")
                },
                unbind_: function () {
                    var c = this.$n("real");
                    this.domUnlisten_(c, "onFocus", "doFocus_").domUnlisten_(c, "onBlur", "doBlur_");
                    this.$supers(a, "unbind_", arguments)
                },
                doSelect_: function (c) {
                    if (!b(c)) {
                        this.$supers("doSelect_", arguments)
                    }
                },
                doClick_: function (c) {
                    if (!b(c)) {
                        zul.wgt.ADBS.autodisable(this);
                        var e = this.$n("real"), d = e.checked;
                        if (d != this._checked) {
                            this.setChecked(d);
                            this.fireOnCheck_(d)
                        }
                        if (zk.webkit && !zk.mobile) {
                            zk(e).focus()
                        }
                        if (!(this.$instanceof(zul.wgt.Radio) && this.getRadiogroup())) {
                            c.stop({propagation: true})
                        }
                        return this.$supers("doClick_", arguments)
                    }
                },
                fireOnCheck_: function (c) {
                    this.fire("onCheck", c)
                },
                beforeSendAU_: function (d, c) {
                    if (c.name != "onClick") {
                        this.$supers("beforeSendAU_", arguments)
                    }
                },
                getTextNode: function () {
                    return this.$n("cnt")
                }
            })
        })();
        zkreg('zul.wgt.Checkbox');
        zk._m = {};
        zk._m['default'] = function (a) {
            var b = this.uuid, c = this.domContent_();
            a.push("<span", this.domAttrs_(), '><input type="checkbox" id="', b, '-real"', this.contentAttrs_(), '/><label for="', b, '-real" id="', b, '-cnt"', this.domTextStyleAttr_(), ' class="', this.$s("content"), '">', this.domContent_(), "</label></span>")
        };
        ;
        zkmld(zk._p.p.Checkbox, zk._m);
        zul.wgt.Groupbox = zk.$extends(zul.ContainerWidget, {
            _open: true, _closable: true, setOpen: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_open", (function (b, a) {
                var c = this.$n();
                if (c && this._closable) {
                    if (b) {
                        jq(c).removeClass(this.$s("collapsed"));
                        zk(this).redoCSS(-1, {fixFontIcon: true})
                    }
                    zk(this.getCaveNode())[b ? "slideDown" : "slideUp"](this);
                    if (!a) {
                        this.fire("onOpen", {open: b})
                    }
                }
            })), getOpen: _zkf$ = function () {
                return this._open
            }, isOpen: _zkf$, setClosable: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_closable", (_zkf = function () {
                this._updDomOuter()
            })), getClosable: _zkf$ = function () {
                return this._closable
            }, isClosable: _zkf$, setContentStyle: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_contentStyle", (_zkf)), getContentStyle: _zkf$ = function () {
                return this._contentStyle
            }, isContentStyle: _zkf$, setContentSclass: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_contentSclass", (_zkf)), getContentSclass: _zkf$ = function () {
                return this._contentSclass
            }, isContentSclass: _zkf$, setTitle: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_title", (_zkf)), getTitle: _zkf$ = function () {
                return this._title
            }, isTitle: _zkf$, _isDefault: function () {
                return this._mold == "default"
            }, _updDomOuter: function () {
                this.rerender(zk.Skipper.nonCaptionSkipper)
            }, _contentAttrs: function () {
                var a = ' class="', b = this._contentSclass;
                if (b) {
                    a += b + " "
                }
                a += this.$s("content") + '"';
                b = this._contentStyle;
                if (this.caption || this.getTitle()) {
                    b = "border-top:0;" + (b || "")
                }
                if (!this._open) {
                    b = "display:none;" + (b || "")
                }
                if (b) {
                    a += ' style="' + b + '"'
                }
                return a
            }, _redrawCave: function (b, d) {
                b.push('<div id="', this.uuid, '-cave"', this._contentAttrs(), ">");
                if (!d) {
                    for (var a = this.firstChild, c = this.caption; a; a = a.nextSibling) {
                        if (a != c) {
                            a.redraw(b)
                        }
                    }
                }
                b.push("</div>")
            }, setHeight: function () {
                this.$supers("setHeight", arguments);
                if (this.desktop) {
                    this._fixHgh()
                }
            }, _fixHgh: function () {
                var b = this.$n().style.height;
                if (b && b != "auto" && this.isOpen()) {
                    var e;
                    if (e = this.$n("cave")) {
                        var c = zk(e);
                        e.style.height = (c.revisedHeight(c.vflexHeight(), true) - (this._isDefault() ? parseInt(jq(this).css("padding-top")) : 0)) + "px"
                    }
                }
                if (this._isDefault()) {
                    var d = this.$n("title"), a = this.caption;
                    if (a) {
                        a.$n().style.top = jq.px(zk(a.$n("cave")).offsetHeight() / 2 * -1)
                    }
                    if (d) {
                        d.style.top = jq.px(zk(this.$n("title-cnt")).offsetHeight() / 2 * -1)
                    }
                }
            }, setFlexSizeH_: function (g, b, a, d) {
                if (d && (this.caption || this._title)) {
                    var e = this.$n(), f;
                    a = this._isDefault() ? jq(this.$n("header")).outerHeight() : 0;
                    for (f = g.firstChild; f; f = f.nextSibling) {
                        a += jq(f).outerHeight()
                    }
                }
                this.$supers("setFlexSizeH_", arguments)
            }, onSize: function () {
                this._fixHgh()
            }, updateDomStyle_: function () {
                this.$supers("updateDomStyle_", arguments);
                if (this.desktop) {
                    this.onSize()
                }
            }, focus_: function (c) {
                var b = this.caption;
                for (var a = this.firstChild; a; a = a.nextSibling) {
                    if (a != b && a.focus_(c)) {
                        return true
                    }
                }
                return b && b.focus_(c)
            }, bind_: function () {
                this.$supers(zul.wgt.Groupbox, "bind_", arguments);
                zWatch.listen({onSize: this});
                var a;
                if (this.getTitle() && (a = this.$n("title"))) {
                    this.domListen_(a, "onClick", "_doTitleClick")
                }
                if (zk.ie == 8) {
                    zk(this).redoCSS()
                }
            }, unbind_: function () {
                zWatch.unlisten({onSize: this});
                var a;
                if (a = this.$n("title")) {
                    this.domUnlisten_(a, "onClick", "_doTitleClick")
                }
                this.$supers(zul.wgt.Groupbox, "unbind_", arguments)
            }, _doTitleClick: function () {
                this.setOpen(!this.isOpen());
                this.$supers("doClick_", arguments)
            }, onChildAdded_: function (a) {
                this.$supers("onChildAdded_", arguments);
                if (a.$instanceof(zul.wgt.Caption)) {
                    this.caption = a;
                    this.rerender()
                }
            }, onChildRemoved_: function (a) {
                this.$supers("onChildRemoved_", arguments);
                if (a == this.caption) {
                    this.caption = null;
                    this.rerender()
                }
            }, getChildMinSize_: function (a, b) {
                if (!b.$instanceof(zul.wgt.Caption)) {
                    return this.$supers("getChildMinSize_", arguments)
                }
            }, domClass_: function () {
                var a = this.$supers("domClass_", arguments);
                if (!this._isDefault()) {
                    if (a) {
                        a += " "
                    }
                    a += this.$s("3d")
                }
                if (!this.caption && !this.getTitle()) {
                    if (a) {
                        a += " "
                    }
                    a += " " + this.$s("notitle")
                }
                if (!this._open && this._isDefault()) {
                    if (a) {
                        a += " "
                    }
                    a += this.$s("collapsed")
                }
                return a
            }, afterAnima_: function (d) {
                if (!d && this._isDefault()) {
                    jq(this.$n()).addClass(this.$s("collapsed"))
                }
                this.$supers("afterAnima_", arguments);
                var b = this.parent;
                for (var e = b.firstChild; e; e = e.nextSibling) {
                    if (e == this) {
                        continue
                    }
                    var a = e.getVflex();
                    if (a && a != "min") {
                        zUtl.fireSized(b);
                        break
                    }
                }
            }
        });
        zkreg('zul.wgt.Groupbox', true);
        zk._m = {};
        zk._m['3d'] = function (a, e) {
            var c = this.uuid, b = this.caption, d = this.getTitle();
            d = d && !b ? zUtl.encodeXML(d) : null;
            a.push("<div ", this.domAttrs_(), ">");
            if (d || b) {
                a.push('<div id="', c, '-header" class="', this.$s("header"), (this._closable ? "" : " " + this.$s("readonly")), '">');
                if (b) {
                    b.redraw(a)
                } else {
                    a.push('<div id="', c, '-title" class="', this.$s("title"), '"><div id="', c, '-title-cnt" class="', this.$s("title-content"), '">', d, "</div></div>")
                }
                a.push("</div>")
            }
            this._redrawCave(a, e);
            a.push("</div>")
        };
        ;
        zk._m['default'] = [zk._p.p.Groupbox, '3d'];
        zkmld(zk._p.p.Groupbox, zk._m);
        zul.wgt.Html = zk.$extends(zul.Widget, {
            _content: "", setContent: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_content", (function (a) {
                var b = this.$n();
                if (b) {
                    b.innerHTML = a || ""
                }
            })), getContent: _zkf$ = function () {
                return this._content
            }, isContent: _zkf$, bind_: function () {
                this.$supers(zul.wgt.Html, "bind_", arguments);
                if (jq.isArray(this._content)) {
                    for (var a = this._content, c = this.$n(), b = 0; b < a.length; ++b) {
                        c.appendChild(a[b])
                    }
                }
            }, unbind_: function () {
                if (jq.isArray(this._content)) {
                    for (var a = this.$n(); a.firstChild;) {
                        a.removeChild(a.firstChild)
                    }
                }
                this.$supers(zul.wgt.Html, "unbind_", arguments)
            }
        });
        zkreg('zul.wgt.Html');
        zk._m = {};
        zk._m['default'] = function (a) {
            a.push("<span", this.domAttrs_(), ">", (jq.isArray(this._content) ? "" : this._content), "</span>")
        };
        ;
        zkmld(zk._p.p.Html, zk._m);
        zul.wgt.Popup = zk.$extends(zul.Widget, {
            _visible: false, isOpen: function () {
                return this.isVisible()
            }, open: function (f, h, b, e) {
                var a = this._posInfo(f, h, b), d = this.$n(), g = d.style.top, c = jq(d);
                this._openInfo = arguments;
                this._shallToggle = e && e.type == "toggle";
                c.css({position: "absolute"}).zk.makeVParent();
                zWatch.fire("onVParent", this);
                if (a) {
                    c.zk.position(a.dim, a.pos, e)
                }
                this.setFloating_(true);
                this.setTopmost();
                this.openAnima_(f, h, b, e)
            }, openAnima_: function (c, d, a, b) {
                this.afterOpenAnima_(c, d, a, b)
            }, afterOpenAnima_: function (e, g, a, d) {
                var c = this.$n();
                this.setVisible(true);
                if ((!d || !d.disableMask) && this.isListen("onOpen", {asapOnly: true})) {
                    if (this.mask) {
                        this.mask.destroy()
                    }
                    this.mask = new zk.eff.Mask({id: this.uuid + "-mask", anchor: c});
                    zWatch.listen({onResponse: this})
                }
                if (this.shallStackup_() && c) {
                    if (!this._stackup) {
                        this._stackup = jq.newStackup(c, c.id + "-stk")
                    } else {
                        var h, f;
                        (h = this._stackup.style).top = (f = c.style).top;
                        h.left = f.left;
                        h.zIndex = f.zIndex;
                        h.display = "block"
                    }
                }
                e = zk.Widget.$(e);
                if (d && d.sendOnOpen) {
                    this.fire("onOpen", {open: true, reference: e})
                }
                jq(c).addClass(this.$s("open"));
                var b = this._openInfo;
                if (b) {
                    this.position.apply(this, b)
                }
            }, shallStackup_: function () {
                return zk.eff.shallStackup()
            }, position: function (d, e, b, c) {
                var a = this._posInfo(d, e, b);
                if (a) {
                    zk(this.$n()).position(a.dim, a.pos, c)
                }
            }, _posInfo: function (d, g, a, c) {
                var h, f;
                if (a) {
                    if (d) {
                        if (typeof d == "string") {
                            d = zk.Widget.$(d)
                        }
                        if (d) {
                            var e = zul.Widget.isInstance(d) ? d.$n() : d;
                            if (e) {
                                h = a;
                                f = zk(e).dimension(true)
                            } else {
                                return {pos: a}
                            }
                        }
                    } else {
                        return {pos: a}
                    }
                } else {
                    if (jq.isArray(g)) {
                        f = {left: zk.parseInt(g[0]), top: zk.parseInt(g[1]), width: 0, height: 0}
                    }
                }
                if (f) {
                    var b = zk(this.$n());
                    f.top += b.sumStyles("t", jq.margins);
                    f.left += b.sumStyles("l", jq.margins);
                    return {pos: h, dim: f}
                }
            }, onResponse: function () {
                if (this.mask) {
                    this.mask.destroy()
                }
                var a = this._openInfo;
                if (a) {
                    this.position.apply(this, a);
                    this._openInfo = null
                }
                zWatch.unlisten({onResponse: this});
                this.mask = null
            }, close: function (a) {
                if (this._stackup) {
                    this._stackup.style.display = "none"
                }
                this._shallToggle = false;
                this.closeAnima_(a)
            }, closeAnima_: function (a) {
                this.afterCloseAnima_(a)
            }, afterCloseAnima_: function (c) {
                this.setVisible(false);
                var b = this.$n();
                zk(b).undoVParent();
                zWatch.fireDown("onVParent", this);
                this.setFloating_(false);
                if (c && c.sendOnOpen) {
                    this.fire("onOpen", {open: false})
                }
                if (zk.ie < 11) {
                    var a = this;
                    setTimeout(function () {
                        a.replaceHTML(b)
                    }, 50)
                }
                jq(b).removeClass(this.$s("open"))
            }, onFloatUp: function (a, d) {
                if (!this.isVisible()) {
                    return
                }
                var b = this._openInfo, c = a.args.length;
                if (this._shallToggle && b && d && (d.triggerByClick === undefined || (b[3].which == d.triggerByClick && zUtl.isAncestor(this._openInfo[0], a.origin)))) {
                    return
                }
                this._doFloatUp(a)
            }, _doFloatUp: function (a) {
                if (!this.isVisible()) {
                    return
                }
                var c = a.origin;
                for (var b; c; c = c.parent) {
                    if (c == this) {
                        if (!b) {
                            this.setTopmost()
                        }
                        return
                    }
                    if (c == this.parent && c.ignoreDescendantFloatUp_(this)) {
                        return
                    }
                    b = b || c.isFloating_()
                }
                this.close({sendOnOpen: true})
            }, bind_: function () {
                this.$supers(zul.wgt.Popup, "bind_", arguments);
                zWatch.listen({onFloatUp: this, onShow: this, onVParent: [this, this._doFloatUp]});
                this.setFloating_(true)
            }, unbind_: function () {
                zk(this.$n()).undoVParent();
                if (this._stackup) {
                    jq(this._stackup).remove();
                    this._stackup = null
                }
                if (this._openInfo) {
                    this._openInfo = null
                }
                this._shallToggle = null;
                zWatch.unlisten({onFloatUp: this, onShow: this, onVParent: [this, this._doFloatUp]});
                this.setFloating_(false);
                this.$supers(zul.wgt.Popup, "unbind_", arguments)
            }, onShow: function (a) {
                a.fire(this.firstChild);
                var b = this._openInfo;
                if (b) {
                    this.position.apply(this, b)
                }
                zk(this).redoCSS(-1, {fixFontIcon: true})
            }, setHeight: function (a) {
                this.$supers("setHeight", arguments);
                if (this.desktop) {
                    zUtl.fireShown(this)
                }
            }, setWidth: function (a) {
                this.$supers("setWidth", arguments);
                if (this.desktop) {
                    zWatch.fireDown("onShow", this)
                }
            }, prologHTML_: function (a) {
            }, epilogHTML_: function (a) {
            }
        });
        zkreg('zul.wgt.Popup', true);
        zk._m = {};
        zk._m['default'] = function (b) {
            var c = this.uuid;
            b.push("<div", this.domAttrs_(), ">");
            if (this._fixarrow) {
                b.push("<div id=", c, '-p class="z-pointer"></div>')
            }
            b.push('<div id="', c, '-cave" class="', this.$s("content"), '">');
            this.prologHTML_(b);
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(b)
            }
            this.epilogHTML_(b);
            b.push("</div></div>")
        };
        ;
        zkmld(zk._p.p.Popup, zk._m);
        zul.wgt.Radio = zk.$extends(zul.wgt.Checkbox, {
            _attachExternal: null, getRadiogroup: function (a) {
                if (!a && this._group) {
                    return this._group
                }
                var b = a || this.parent;
                for (; b; b = b.parent) {
                    if (b.$instanceof(zul.wgt.Radiogroup)) {
                        return b
                    }
                }
                return null
            }, setRadiogroup: function (b) {
                var a = this._group;
                if (a !== b) {
                    if (a && this._attachExternal) {
                        a._rmExtern(this)
                    }
                    this._group = b;
                    if (b && this.desktop) {
                        b._addExtern(this);
                        this._attachExternal = true
                    }
                    this._fixName()
                }
            }, bind_: function () {
                this.$supers(zul.wgt.Radio, "bind_", arguments);
                if (this._group && this.desktop && !this._attachExternal) {
                    this._group._addExtern(this);
                    this._attachExternal = true
                }
            }, unbind_: function () {
                this.$supers(zul.wgt.Radio, "unbind_", arguments);
                if (this._group && this._attachExternal) {
                    this._group._rmExtern(this);
                    this._attachExternal = false
                }
            }, setChecked: _zkf = function (d) {
                if (d != this._checked) {
                    this._checked = d;
                    var f = this.$n("real");
                    if (f) {
                        f.checked = d || false;
                        d ? jq(f).attr("checked", "checked") : jq(f).removeAttr("checked");
                        if (!f.checked) {
                            jq(f).removeAttr("checked")
                        }
                        var e = this.getRadiogroup();
                        if (e) {
                            if (d) {
                                for (var a = e.getItems(), b = a.length; b--;) {
                                    if (a[b] != this) {
                                        var c = a[b].$n("real");
                                        if (c) {
                                            c.checked = false;
                                            jq(c).removeAttr("checked")
                                        }
                                        a[b]._checked = false
                                    }
                                }
                            }
                            e._fixSelectedIndex()
                        }
                    }
                }
                return this
            }, setSelected: _zkf, isSelected: function () {
                return this.isChecked()
            }, getName: function () {
                var a = this.getRadiogroup();
                return a != null ? a.getName() : this.uuid
            }, _fixName: function () {
                var a = this.$n("real");
                if (a) {
                    a.name = this.getName()
                }
            }, beforeParentChanged_: function (c) {
                var b = this.parentNode, a = this.getRadiogroup(), d = c ? this.getRadiogroup(c) : null;
                if (a != d || !c) {
                    if (a && a.$instanceof(zul.wgt.Radiogroup)) {
                        a._fixOnRemove(this);
                        if (this._attachExternal) {
                            a._rmExtern(this);
                            this._attachExternal = false
                        }
                    }
                    if (d && d.$instanceof(zul.wgt.Radiogroup)) {
                        if (!this._attachExternal && d == this._group) {
                            d._addExtern(this);
                            this._attachExternal = true
                        }
                        d._fixOnAdd(this)
                    }
                }
                this.$supers("beforeParentChanged_", arguments)
            }, fireOnCheck_: function (a) {
                var b = this.getRadiogroup();
                this.fire("onCheck", a, {toServer: b && b.isListen("onCheck")})
            }
        });
        zkreg('zul.wgt.Radio');
        zk._m = {};
        zk._m['default'] = function (b) {
            var c = this.uuid, a = this.getRadiogroup();
            b.push("<span", this.domAttrs_(), '><input type="radio" id="', c, '-real"', this.contentAttrs_(), '/><label for="', c, '-real"', ' id="', c, '-cnt"', this.domTextStyleAttr_(), ' class="', this.$s("content"), '">', this.domContent_(), "</label>", (a && a._orient == "vertical" ? "<br/>" : ""), "</span>")
        };
        ;
        zkmld(zk._p.p.Radio, zk._m);
        (function () {
            function f(i) {
                var h = b(i);
                h.$addAll(i._externs);
                return h
            }

            function b(i) {
                var h = [];
                for (var j = i.firstChild; j; j = j.nextSibling) {
                    if (j.$instanceof(zul.wgt.Radio)) {
                        h.push(j)
                    } else {
                        if (!j.$instanceof(zul.wgt.Radiogroup)) {
                            h = h.concat(b(j))
                        }
                    }
                }
                return h
            }

            function d(o, p, k) {
                var m = e(o, p, k);
                if (!m) {
                    for (var n = o._externs, i = 0, h = n.length; i < h; ++i) {
                        if (!g(o, n[i]) && p.value++ == k) {
                            return n[i]
                        }
                    }
                }
                return m
            }

            function e(j, l, h) {
                for (var k = j.firstChild; k; k = k.nextSibling) {
                    if (k.$instanceof(zul.wgt.Radio)) {
                        if (l.value++ == h) {
                            return k
                        }
                    } else {
                        if (!k.$instanceof(zul.wgt.Radiogroup)) {
                            var i = e(k, l, h);
                            if (i != null) {
                                return i
                            }
                        }
                    }
                }
            }

            function c(o, p) {
                var n = a(o, p);
                if (n < 0) {
                    for (var m = o._externs, k = 0, h = m.length, i; k < h; ++k) {
                        if (!g(o, i = m[k])) {
                            if (i.isSelected()) {
                                return p.value
                            }
                            ++p.value
                        }
                    }
                }
                return n
            }

            function a(h, k) {
                for (var j = h.firstChild; j; j = j.nextSibling) {
                    if (j.$instanceof(zul.wgt.Radio)) {
                        if (j.isSelected()) {
                            return k.value
                        }
                        ++k.value
                    } else {
                        if (!j.$instanceof(zul.wgt.Radiogroup)) {
                            var i = a(j, k);
                            if (i >= 0) {
                                return i
                            }
                        }
                    }
                }
                return -1
            }

            function g(j, h) {
                for (var i = h.parent; i != null; i = i.parent) {
                    if (i.$instanceof(zul.wgt.Radiogroup)) {
                        return i == j
                    }
                }
            }

            zul.wgt.Radiogroup = zk.$extends(zul.Widget, {
                _orient: "horizontal", _jsel: -1, $init: function () {
                    this.$supers("$init", arguments);
                    this._externs = []
                }, setOrient: (function (h, i) {
                    return function (j, k) {
                        var l = this[h];
                        this[h] = j;
                        if (l !== j || (k && k.force)) {
                            this.__fname__ = h.substring(1);
                            i.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_orient", (function () {
                    this.rerender()
                })), getOrient: _zkf$ = function () {
                    return this._orient
                }, isOrient: _zkf$, setName: (function (h, i) {
                    return function (j, k) {
                        var l = this[h];
                        this[h] = j;
                        if (l !== j || (k && k.force)) {
                            this.__fname__ = h.substring(1);
                            i.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_name", (function (j) {
                    for (var h = this.getItems(), k = h.length; k--;) {
                        h[k].setName(j)
                    }
                })), getName: _zkf$ = function () {
                    return this._name
                }, isName: _zkf$, getItemAtIndex: function (h) {
                    return h >= 0 ? d(this, {value: 0}, h) : null
                }, getItemCount: function () {
                    return this.getItems().length
                }, getItems: function () {
                    return f(this)
                }, getSelectedIndex: function () {
                    return this._jsel
                }, setSelectedIndex: function (h) {
                    if (h < 0) {
                        h = -1
                    }
                    if (this._jsel != h) {
                        if (h < 0) {
                            getSelectedItem().setSelected(false)
                        } else {
                            getItemAtIndex(h).setSelected(true)
                        }
                    }
                }, getSelectedItem: function () {
                    return this._jsel >= 0 ? this.getItemAtIndex(this._jsel) : null
                }, setSelectedItem: function (h) {
                    if (h == null) {
                        this.setSelectedIndex(-1)
                    } else {
                        if (h.$instanceof(zul.wgt.Radio)) {
                            h.setSelected(true)
                        }
                    }
                }, appendItem: function (h, j) {
                    var i = new zul.wgt.Radio();
                    i.setLabel(h);
                    i.setValue(j);
                    this.appendChild(i);
                    return i
                }, removeItemAt: function (h) {
                    var i = this.getItemAtIndex(h);
                    if (i && !this._rmExtern(i)) {
                        var j = i.parent;
                        if (j) {
                            j.removeChild(i)
                        }
                    }
                    return i
                }, _fixSelectedIndex: function () {
                    this._jsel = c(this, {value: 0})
                }, _fixOnAdd: function (h) {
                    if (this._jsel >= 0 && h.isSelected()) {
                        h.setSelected(false)
                    } else {
                        this._fixSelectedIndex()
                    }
                }, _fixOnRemove: function (h) {
                    if (h.isSelected()) {
                        this._jsel = -1
                    } else {
                        if (this._jsel > 0) {
                            this._fixSelectedIndex()
                        }
                    }
                }, _addExtern: function (h) {
                    this._externs.push(h);
                    if (!g(this, h)) {
                        this._fixOnAdd(h)
                    }
                }, _rmExtern: function (h) {
                    if (this._externs.$remove(h)) {
                        if (!g(this, h)) {
                            this._fixOnRemove(h)
                        }
                        return true
                    }
                }
            })
        })();
        zkreg('zul.wgt.Radiogroup');
        zk._m = {};
        zk._m['default'] = function (b) {
            b.push("<span", this.domAttrs_(), ">");
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(b)
            }
            b.push("</span>")
        };
        ;
        zkmld(zk._p.p.Radiogroup, zk._m);
        zul.wgt.Toolbar = zk.$extends(zul.Widget, {
            _orient: "horizontal", _align: "start", setAlign: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_align", (_zkf = function () {
                this.rerender()
            })), getAlign: _zkf$ = function () {
                return this._align
            }, isAlign: _zkf$, setOrient: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_orient", (_zkf)), getOrient: _zkf$ = function () {
                return this._orient
            }, isOrient: _zkf$, domClass_: function (c) {
                var b = this.$supers("domClass_", arguments);
                if (!c || !c.zclass) {
                    var a = this.parent && zk.isLoaded("zul.tab") && this.parent.$instanceof(zul.tab.Tabbox) ? this.$s("tabs") : "";
                    if (a) {
                        b += " " + a
                    }
                    if (this.inPanelMold()) {
                        b += " " + this.$s("panel")
                    }
                }
                return b
            }, setFlexSizeW_: function (e, a, c, b) {
                this.$supers("setFlexSizeW_", arguments);
                if (!b && this.getAlign() == "start") {
                    var d = this.$n("cave");
                    if (d) {
                        d.style.width = jq.px0(zk(this.$n()).contentWidth())
                    }
                }
            }, inPanelMold: function () {
                return this._mold == "panel"
            }, onChildAdded_: function () {
                this.$supers("onChildAdded_", arguments);
                if (this.inPanelMold()) {
                    this.rerender()
                }
            }, onChildRemoved_: function () {
                this.$supers("onChildRemoved_", arguments);
                if (!this.childReplacing_ && this.inPanelMold()) {
                    this.rerender()
                }
            }
        });
        zkreg('zul.wgt.Toolbar', true);
        zk._m = {};
        zk._m['panel'] = function (b) {
            b.push("<div ", this.domAttrs_(), '><table id="', this.uuid, '-cave" class="', this.$s("content"), " ", this.$s(this.getAlign()), '"', zUtl.cellps0, "><tbody>");
            if ("horizontal" == this.getOrient()) {
                b.push("<tr>");
                for (var a = this.firstChild; a; a = a.nextSibling) {
                    b.push('<td class="', this.$s("horizontal"), '">');
                    a.redraw(b);
                    b.push("</td>")
                }
                b.push("</tr>")
            } else {
                for (var a = this.firstChild; a; a = a.nextSibling) {
                    b.push('<tr><td class="', this.$s("vertical"), '">');
                    a.redraw(b);
                    b.push("</td></tr>")
                }
            }
            b.push('</tbody></table><div class="z-clear"></div></div>')
        };
        ;
        zk._m['default'] = function (b) {
            var c = "vertical" != this.getOrient() ? (zk.ie9 ? "<span></span>" : "") : "<br/>";
            b.push("<div ", this.domAttrs_(), '><div id="', this.uuid, '-cave"', ' class="', this.$s("content"), " ", this.$s(this.getAlign()), '" >');
            for (var a = this.firstChild; a; a = a.nextSibling) {
                b.push(c);
                a.redraw(b)
            }
            b.push('</div><div class="z-clear"></div></div>')
        };
        ;
        zkmld(zk._p.p.Toolbar, zk._m);
        (function () {
            function b(d) {
                zWatch.listen({onSize: d});
                var c;
                if (c = d._upload) {
                    d._uplder = new zul.Upload(d, null, c)
                }
            }

            function a(d) {
                var c;
                if (c = d._uplder) {
                    zWatch.unlisten({onSize: d});
                    d._uplder = null;
                    c.destroy()
                }
            }

            zul.wgt.Toolbarbutton = zk.$extends(zul.LabelImageWidget, {
                _orient: "horizontal",
                _dir: "normal",
                _mode: "default",
                _checked: false,
                setMode: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_mode", (function (c) {
                    this.rerender()
                })),
                getMode: _zkf$ = function () {
                    return this._mode
                },
                isMode: _zkf$,
                setChecked: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_checked", (function (c) {
                    if (this.desktop && this._mode == "toggle") {
                        jq(this.$n())[c ? "addClass" : "removeClass"](this.$s("checked"))
                    }
                })),
                getChecked: _zkf$ = function () {
                    return this._checked
                },
                isChecked: _zkf$,
                setDisabled: (function (c, d, e) {
                    return function (f, g) {
                        var h = this[c];
                        this.__fname__ = c.substring(1);
                        this[c] = f = d.apply(this, arguments);
                        if (h !== f || (g && g.force)) {
                            e.apply(this, arguments)
                        }
                        delete this.__fname__;
                        return this
                    }
                })("_disabled", (function (c, d) {
                    if (d && d.adbs) {
                        this._adbs = true
                    } else {
                        if (!d || d.adbs === undefined) {
                            this._adbs = false
                        }
                    }
                    if (!c) {
                        if (this._adbs) {
                            this._adbs = false
                        } else {
                            if (d && d.adbs === false) {
                                return this._disabled
                            }
                        }
                    }
                    return c
                }), (function (c, d) {
                    this.rerender(d && d.skip ? -1 : 0)
                })),
                getDisabled: _zkf$ = function () {
                    return this._disabled
                },
                isDisabled: _zkf$,
                setHref: (function (c) {
                    return function (d) {
                        this[c] = d;
                        return this
                    }
                })("_href"),
                getHref: _zkf$ = function () {
                    return this._href
                },
                isHref: _zkf$,
                setTarget: (function (c) {
                    return function (d) {
                        this[c] = d;
                        return this
                    }
                })("_target"),
                getTarget: _zkf$ = function () {
                    return this._target
                },
                isTarget: _zkf$,
                setDir: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_dir", (_zkf = function () {
                    this.updateDomContent_()
                })),
                getDir: _zkf$ = function () {
                    return this._dir
                },
                isDir: _zkf$,
                setOrient: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_orient", (_zkf)),
                getOrient: _zkf$ = function () {
                    return this._orient
                },
                isOrient: _zkf$,
                setTabindex: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_tabindex", (function (c) {
                    var d = this.$n();
                    if (d) {
                        d.tabIndex = c || ""
                    }
                })),
                getTabindex: _zkf$ = function () {
                    return this._tabindex
                },
                isTabindex: _zkf$,
                setAutodisable: (function (c) {
                    return function (d) {
                        this[c] = d;
                        return this
                    }
                })("_autodisable"),
                getAutodisable: _zkf$ = function () {
                    return this._autodisable
                },
                isAutodisable: _zkf$,
                setUpload: (function (c, d) {
                    return function (e, f) {
                        var g = this[c];
                        this[c] = e;
                        if (g !== e || (f && f.force)) {
                            this.__fname__ = c.substring(1);
                            d.apply(this, arguments);
                            delete this.__fname__
                        }
                        return this
                    }
                })("_upload", (function (c) {
                    var d = this.$n();
                    if (d) {
                        a(this);
                        if (c && c != "false" && !this._disabled) {
                            b(this)
                        }
                    }
                })),
                getUpload: _zkf$ = function () {
                    return this._upload
                },
                isUpload: _zkf$,
                getTextNode: function () {
                    return this.$n("cnt")
                },
                bind_: function () {
                    this.$supers(zul.wgt.Toolbarbutton, "bind_", arguments);
                    if (!this._disabled) {
                        var c = this.$n();
                        this.domListen_(c, "onFocus", "doFocus_").domListen_(c, "onBlur", "doBlur_")
                    }
                    if (!this._disabled && this._upload) {
                        b(this)
                    }
                },
                unbind_: function () {
                    a(this);
                    var c = this.$n();
                    this.domUnlisten_(c, "onFocus", "doFocus_").domUnlisten_(c, "onBlur", "doBlur_");
                    this.$supers(zul.wgt.Toolbarbutton, "unbind_", arguments)
                },
                domContent_: function () {
                    var e = zUtl.encodeXML(this.getLabel()), c = this.getImage(), d = this.domIcon_();
                    if (!c && !d) {
                        return e
                    }
                    if (!c) {
                        c = d
                    } else {
                        c = '<img src="' + c + '" align="absmiddle" />' + (d ? " " + d : "")
                    }
                    var f = e ? "vertical" == this.getOrient() ? "<br/>" : "&nbsp;" : "";
                    return this.getDir() == "reverse" ? e + f + c : c + f + e
                },
                domClass_: function (f) {
                    var d = [this.$supers("domClass_", arguments)], e = this.getZclass(), c = (!f || !f.zclass);
                    if (this._mode == "toggle" && this._checked && c && e) {
                        d.push(" ", this.$s("checked"))
                    }
                    return d.join("")
                },
                domAttrs_: function (e) {
                    var c = this.$supers("domAttrs_", arguments), d = this.getTabindex();
                    if (this._disabled) {
                        c += ' disabled="disabled"'
                    }
                    if (d) {
                        c += ' tabIndex="' + d + '"'
                    }
                    return c
                },
                onSize: function () {
                    if (this._uplder) {
                        this._uplder.sync()
                    }
                },
                doClick_: function (c) {
                    if (!this._disabled) {
                        if (!this._upload) {
                            zul.wgt.ADBS.autodisable(this)
                        } else {
                            if (!zk.ie || zk.ie > 10) {
                                this._uplder.openFileDialog()
                            }
                        }
                        this.fireX(c);
                        if (!c.stopped) {
                            var d = this._href;
                            if (d) {
                                zUtl.go(d, {target: this._target || (c.data.ctrlKey ? "_blank" : "")})
                            }
                            this.$super("doClick_", c, true);
                            if (this._mode == "toggle") {
                                this.setChecked(!this.isChecked());
                                this.fire("onCheck", this.isChecked())
                            }
                        }
                    }
                }
            })
        })();
        zkreg('zul.wgt.Toolbarbutton');
        zk._m = {};
        zk._m['toggle'] = function (a) {
            a.push("<a", this.domAttrs_(), '><span id="', this.uuid, '-cnt"', this.domTextStyleAttr_(), 'class="', this.$s("content"), '">', this.domContent_(), "</span></a>")
        };
        ;
        zk._m['default'] = [zk._p.p.Toolbarbutton, 'toggle'];
        zkmld(zk._p.p.Toolbarbutton, zk._m);
        zul.wgt.Image = zk.$extends(zul.Widget, {
            setSrc: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_src", (function (a) {
                if (a && this._preloadImage) {
                    zUtl.loadImage(a)
                }
                var b = this.getImageNode();
                if (b) {
                    b.src = a || ""
                }
            })), getSrc: _zkf$ = function () {
                return this._src
            }, isSrc: _zkf$, setHover: (function (a) {
                return function (b) {
                    this[a] = b;
                    return this
                }
            })("_hover"), getHover: _zkf$ = function () {
                return this._hover
            }, isHover: _zkf$, setAlign: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_align", (function (a) {
                var b = this.getImageNode();
                if (b) {
                    b.align = a || ""
                }
            })), getAlign: _zkf$ = function () {
                return this._align
            }, isAlign: _zkf$, setHspace: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_hspace", (function (a) {
                var b = this.getImageNode();
                if (b) {
                    b.hspace = a
                }
            })), getHspace: _zkf$ = function () {
                return this._hspace
            }, isHspace: _zkf$, setVspace: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_vspace", (function (a) {
                var b = this.getImageNode();
                if (b) {
                    b.vspace = a
                }
            })), getVspace: _zkf$ = function () {
                return this._vspace
            }, isVspace: _zkf$, getImageNode: function () {
                return this.$n()
            }, doMouseOver_: function () {
                var b = this._hover;
                if (b) {
                    var a = this.getImageNode();
                    if (a) {
                        a.src = b
                    }
                }
                this.$supers("doMouseOver_", arguments)
            }, doMouseOut_: function () {
                if (this._hover) {
                    var a = this.getImageNode();
                    if (a) {
                        a.src = this._src || ""
                    }
                }
                this.$supers("doMouseOut_", arguments)
            }, domAttrs_: function (b) {
                var a = this.$supers("domAttrs_", arguments);
                if (!b || !b.content) {
                    a += this.contentAttrs_()
                }
                return a
            }, contentAttrs_: function () {
                var a = ' src="' + (this._src || "") + '"', b;
                if (b = this._align) {
                    a += ' align="' + b + '"'
                }
                if (b = this._hspace) {
                    a += ' hspace="' + b + '"'
                }
                if (b = this._vspace) {
                    a += ' vspace="' + b + '"'
                }
                return a
            }
        });
        zkreg('zul.wgt.Image');
        zk._m = {};
        zk._m['alphafix'] = function (a) {
            a.push("<img", this.domAttrs_(), "/>")
        };
        ;
        zk._m['default'] = [zk._p.p.Image, 'alphafix'];
        zkmld(zk._p.p.Image, zk._m);
        zul.wgt.Imagemap = zk.$extends(zul.wgt.Image, {
            setWidth: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_width", (function (a) {
                var b = this.getImageNode();
                if (b) {
                    b.style.width = a
                }
            })), getWidth: _zkf$ = function () {
                return this._width
            }, isWidth: _zkf$, setHeight: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_height", (function (a) {
                var b = this.getImageNode();
                if (b) {
                    b.style.height = a
                }
            })), getHeight: _zkf$ = function () {
                return this._height
            }, isHeight: _zkf$, bind_: function () {
                this.$supers(zul.wgt.Imagemap, "bind_", arguments);
                if (!jq("#zk_hfr_")[0]) {
                    jq.newFrame("zk_hfr_", null, zk.webkit ? "position:absolute;top:-1000px;left:-1000px;width:0;height:0;display:inline" : null)
                }
            }, getImageNode: function () {
                return this.$n("real")
            }, getCaveNode: function () {
                return this.$n("map")
            }, doClick_: function (a) {
            }, onChildAdded_: function () {
                this.$supers("onChildAdded_", arguments);
                if (this.desktop && this.firstChild == this.lastChild) {
                    this._fixchd(true)
                }
            }, onChildRemoved_: function () {
                this.$supers("onChildRemoved_", arguments);
                if (this.desktop && !this.firstChild) {
                    this._fixchd(false)
                }
            }, _fixchd: function (c) {
                var b = this.uuid + "-map", a = this.getImageNode();
                a.useMap = c ? "#" + b : "";
                a.isMap = !c
            }, contentAttrs_: function () {
                var a = this.$supers("contentAttrs_", arguments), b = this._width, c = this._height;
                if (b || c) {
                    a += ' style="';
                    if (b) {
                        a += "width:" + b + ";"
                    }
                    if (c) {
                        a += "height:" + c + ";"
                    }
                    a += '"'
                }
                return a + (this.firstChild ? ' usemap="#' + this.uuid + '-map"' : ' ismap="ismap"')
            }, fromPageCoord: function (a, c) {
                var b = zk(this.getImageNode()).revisedOffset();
                return [a - b[0], c - b[1]]
            }, _doneURI: function () {
                var a = zul.wgt.Imagemap, b = a._doneURI;
                return b ? b : a._doneURI = zk.IMAGEMAP_DONE_URI ? zk.IMAGEMAP_DONE_URI : zk.ajaxURI("/web/zul/html/imagemap-done.html", {
                    desktop: this.desktop,
                    au: true
                })
            }
        }, {
            onclick: function (b) {
                if (zul.wgt.Imagemap._toofast()) {
                    return
                }
                var c = b.indexOf("?");
                if (c < 0) {
                    return
                }
                var a = b.indexOf("?", ++c);
                if (a < 0) {
                    return
                }
                var e = b.substring(c, a), d = zk.Widget.$(e);
                if (!d) {
                    return
                }
                c = b.indexOf(",", ++a);
                if (c < 0) {
                    return
                }
                d.fire("onClick", {x: zk.parseInt(b.substring(a, c)), y: zk.parseInt(b.substring(c + 1))}, {ctl: true})
            }, _toofast: function () {
                if (zk.gecko) {
                    var a = zul.wgt.Imagemap, b = jq.now();
                    if (a._stamp && b - a._stamp < 800) {
                        return true
                    }
                    a._stamp = b
                }
                return false
            }
        });
        zkreg('zul.wgt.Imagemap');
        zk._m = {};
        zk._m['alphafix'] = function (c) {
            var d = this.uuid, b = d + "-map";
            c.push("<span", this.domAttrs_({content: 1}), '><a href="', this._doneURI(), "?", d, '" target="zk_hfr_"><img id="', d, '-real"', this.contentAttrs_(), '/></a><map name="', b, '" id="', b, '">');
            for (var a = this.firstChild; a; a = a.nextSibling) {
                a.redraw(c)
            }
            c.push("</map></span>")
        };
        ;
        zk._m['default'] = [zk._p.p.Imagemap, 'alphafix'];
        zkmld(zk._p.p.Imagemap, zk._m);
        zul.wgt.Area = zk.$extends(zk.Widget, {
            setShape: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_shape", (function (a) {
                var b = this.$n();
                if (b) {
                    b.shape = a || ""
                }
            })), getShape: _zkf$ = function () {
                return this._shape
            }, isShape: _zkf$, setCoords: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_coords", (function (a) {
                var b = this.$n();
                if (b) {
                    b.coords = a || ""
                }
            })), getCoords: _zkf$ = function () {
                return this._coords
            }, isCoords: _zkf$, doClick_: function (a) {
                if (zul.wgt.Imagemap._toofast()) {
                    return
                }
                var b = this.id || this.uuid;
                this.parent.fire("onClick", {area: b}, {ctl: true});
                a.stop()
            }, domAttrs_: function (c) {
                var a = this.$supers("domAttrs_", arguments) + ' href="javascript:;"', b;
                if (b = this._coords) {
                    a += ' coords="' + b + '"'
                }
                if (b = this._shape) {
                    a += ' shape="' + b + '"'
                }
                return a
            }
        });
        zkreg('zul.wgt.Area');
        zk._m = {};
        zk._m['default'] = function (a) {
            a.push("<area", this.domAttrs_(), "/>")
        };
        ;
        zkmld(zk._p.p.Area, zk._m);
        zul.wgt.Chart = zk.$extends(zul.wgt.Imagemap, {});
        zkreg('zul.wgt.Chart');
        zk._m = {};
        zk._m['default'] = [zk._p.p.Imagemap, 'alphafix'];
        zkmld(zk._p.p.Chart, zk._m);
        zul.wgt.Captcha = zk.$extends(zul.wgt.Image, {});
        zkreg('zul.wgt.Captcha');
        zk._m = {};
        zk._m['default'] = [zk._p.p.Image, 'alphafix'];
        zkmld(zk._p.p.Captcha, zk._m);
        zul.wgt.Progressmeter = zk.$extends(zul.Widget, {
            _value: 0, setValue: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_value", (function () {
                if (this.$n()) {
                    this._fixImgWidth()
                }
            })), getValue: _zkf$ = function () {
                return this._value
            }, isValue: _zkf$, _fixImgWidth: _zkf = function () {
                var c = this.$n(), a = this.$n("img");
                if (a) {
                    if (zk(c).isRealVisible()) {
                        var b = jq(a)
                    }
                    b.animate({width: Math.round((jq(c).innerWidth() * this._value) / 100) + "px"}, b.zk.getAnimationSpeed("slow"))
                }
            }, onSize: _zkf, bind_: function () {
                this.$supers(zul.wgt.Progressmeter, "bind_", arguments);
                this._fixImgWidth(this._value);
                zWatch.listen({onSize: this})
            }, unbind_: function () {
                zWatch.unlisten({onSize: this});
                this.$supers(zul.wgt.Progressmeter, "unbind_", arguments)
            }, setWidth: function (a) {
                this.$supers("setWidth", arguments);
                this._fixImgWidth()
            }
        });
        zkreg('zul.wgt.Progressmeter');
        zk._m = {};
        zk._m['default'] = function (a) {
            a.push("<div", this.domAttrs_(), '><span id="', this.uuid, '-img"', 'class="', this.$s("image"), '"></span></div>')
        };
        ;
        zkmld(zk._p.p.Progressmeter, zk._m);
        zul.wgt.Fileupload = zk.$extends(zul.wgt.Button, {
            getZclass: function () {
                return this._zclass == null ? "z-button" : this._zclass
            }
        });
        zkreg('zul.wgt.Fileupload');
        (function () {
            function a(d) {
                if (!d._tidclose) {
                    d._tidclose = setTimeout(function () {
                        if (!d._bover) {
                            if (d._autodrop && d.isOpen()) {
                                d.close({sendOnOpen: true})
                            }
                        }
                        d._tidclose = null
                    }, 200)
                }
            }

            function c(f, d, e) {
                if (d && d.sendOnOpen) {
                    f.fire("onOpen", {open: e, value: f.getLabel()}, {rtags: {onOpen: 1}})
                }
            }

            function b(i, g) {
                if (!i._oldppclose) {
                    var e = i.firstChild;
                    if (e) {
                        var d = jq(e), h = jq(i).width();
                        if (d.width() < h) {
                            d.width(h - zk(e).padBorderWidth());
                            e.fire(e.firstChild);
                            var f = e._openInfo;
                            if (f) {
                                e.position.apply(e, f)
                            }
                        }
                    }
                    i._oldppclose = e.close;
                    if (g) {
                        i.domListen_(e, "onMouseOver").domListen_(e, "onMouseOut")
                    }
                    e.close = function (j) {
                        i._oldppclose.apply(e, arguments);
                        c(i, j, false);
                        if (g) {
                            i.domUnlisten_(e, "onMouseOver").domUnlisten_(e, "onMouseOut")
                        }
                        e.close = i._oldppclose;
                        delete i._oldppclose
                    }
                }
            }

            zul.wgt.Combobutton = zk.$extends(zul.wgt.Button, {
                setAutodrop: (function (d) {
                    return function (e) {
                        this[d] = e;
                        return this
                    }
                })("_autodrop"), getAutodrop: _zkf$ = function () {
                    return this._autodrop
                }, isAutodrop: _zkf$, getZclass: function () {
                    return "z-combobutton"
                }, domContent_: function () {
                    var f = '<span id="' + this.uuid + '-txt" class="' + this.$s("text") + '">' + zUtl.encodeXML(this.getLabel()) + "</span>", d = this.getImage(), e = this.domIcon_();
                    if (!d && !e) {
                        return f
                    }
                    if (!d) {
                        d = e
                    } else {
                        d = '<img class="' + this.$s("image") + '" src="' + d + '" />' + (e ? " " + e : "")
                    }
                    var g = "vertical" == this.getOrient() ? "<br/>" : " ";
                    return this.getDir() == "reverse" ? f + g + d : d + g + f
                }, domClass_: function (e) {
                    var d = this.$supers(zul.wgt.Combobutton, "domClass_", arguments);
                    if (!this._isDefault()) {
                        d += " z-combobutton-toolbar"
                    }
                    return d
                }, _isDefault: function () {
                    return this._mold == "default"
                }, isOpen: function () {
                    var d = this.firstChild;
                    return d && d.isOpen()
                }, setOpen: function (d, e) {
                    if (!this._disabled && !zk.animating()) {
                        this[d ? "open" : "close"](e || {})
                    }
                }, renderInner_: function (e) {
                    for (var d = this.firstChild; d; d = d.nextSibling) {
                        d.redraw(e)
                    }
                }, isTableLayout_: function () {
                    return true
                }, unbind_: function () {
                    var d;
                    if ((d = this.firstChild) && (d = d.$n())) {
                        this.domUnlisten_(d, "onMouseOver").domUnlisten_(d, "onMouseOut")
                    }
                    this.$supers("unbind_", arguments)
                }, doFocus_: function (d) {
                    if (this == d.target) {
                        this.$supers("doFocus_", arguments)
                    }
                }, open: function (e) {
                    var d = this.firstChild;
                    if (d && !this.isOpen()) {
                        if (d.$instanceof(zul.wgt.Popup)) {
                            d.open(this.uuid, null, "after_start", e);
                            c(this, e, true)
                        }
                        b(this, !d.$instanceof(zul.wgt.Menupopup))
                    }
                }, close: function (d) {
                    if (this.isOpen()) {
                        this.firstChild.close(d)
                    }
                }, doClick_: function (e) {
                    var g = e.domTarget;
                    if (g) {
                        var f = !this.isOpen();
                        if (this == e.target) {
                            if (this.$n("btn") == g || this.$n("icon") == g || !f) {
                                this.setOpen(f, {sendOnOpen: true})
                            } else {
                                this.$supers("doClick_", arguments)
                            }
                        }
                    }
                }, doMouseDown_: function (d) {
                    if (this == d.target) {
                        this.$supers("doMouseDown_", arguments)
                    }
                }, doMouseOver_: function (e) {
                    this._bover = true;
                    if (this == e.target) {
                        var f = e.domTarget;
                        if (this._autodrop && (this.$n("btn") == f || this.$n("icon") == f) && !this.isOpen()) {
                            this.open({sendOnOpen: true})
                        }
                        this.$supers("doMouseOver_", arguments)
                    }
                }, doMouseOut_: function (d) {
                    this._bover = false;
                    a(this);
                    this.$supers("doMouseOut_", arguments)
                }, _doMouseOver: function (d) {
                    this._bover = true
                }, _doMouseOut: function (d) {
                    this._bover = false;
                    a(this)
                }, ignoreDescendantFloatUp_: function (d) {
                    return d && d.$instanceof(zul.wgt.Popup)
                }, rerender: function (d) {
                    if (this.isOpen()) {
                        this.close()
                    }
                    this.$supers("rerender", arguments)
                }
            })
        })();
        zkreg('zul.wgt.Combobutton');
        zk._m = {};
        zk._m['toolbar'] = function (b) {
            var a = this._tabindex, c = this.uuid;
            b.push("<span ", this.domAttrs_());
            if (this._disabled) {
                b.push(' disabled="disabled"')
            }
            b.push(' ><span id="', c, '-real" class="', this.$s("content"), '"');
            if (a) {
                b.push(' tabindex="', a, '"')
            }
            b.push(">", this.domContent_(), '<span id="', c, '-btn" class="', this.$s("button"), '">', '<i id="', c, '-icon" class="', this.$s("icon"), ' z-icon-caret-down"></i>', "</span></span>");
            if (this.firstChild) {
                this.firstChild.redraw(b)
            }
            b.push("</span>")
        };
        ;
        zk._m['default'] = [zk._p.p.Combobutton, 'toolbar'];
        zkmld(zk._p.p.Combobutton, zk._m);
        zul.wgt.Selectbox = zk.$extends(zul.Widget, {
            setTabindex: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_tabindex", (function (a) {
                var b = this.$n();
                if (b) {
                    b.tabindex = a || ""
                }
            })), getTabindex: _zkf$ = function () {
                return this._tabindex
            }, isTabindex: _zkf$, setSelectedIndex: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_selectedIndex", (function (a) {
                var b = this.$n();
                if (b) {
                    b.selectedIndex = a
                }
            })), getSelectedIndex: _zkf$ = function () {
                return this._selectedIndex
            }, isSelectedIndex: _zkf$, setDisabled: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_disabled", (function (a) {
                var b = this.$n();
                if (b) {
                    b.disabled = a ? "disabled" : ""
                }
            })), getDisabled: _zkf$ = function () {
                return this._disabled
            }, isDisabled: _zkf$, setName: (function (a, b) {
                return function (c, d) {
                    var e = this[a];
                    this[a] = c;
                    if (e !== c || (d && d.force)) {
                        this.__fname__ = a.substring(1);
                        b.apply(this, arguments);
                        delete this.__fname__
                    }
                    return this
                }
            })("_name", (function (a) {
                var b = this.$n();
                if (b) {
                    b.name = a
                }
            })), getName: _zkf$ = function () {
                return this._name
            }, isName: _zkf$, _fixSelIndex: function () {
                if (this._selectedIndex < 0) {
                    this.$n().selectedIndex = -1
                }
            }, bind_: function () {
                this.$supers(zul.wgt.Selectbox, "bind_", arguments);
                var b = this.$n();
                this.domListen_(b, "onChange").domListen_(b, "onFocus", "doFocus_").domListen_(b, "onBlur", "doBlur_");
                if (!zk.gecko) {
                    var a = [this, this._fixSelIndex];
                    zWatch.listen({onRestore: a, onVParent: a})
                }
                this._fixSelIndex()
            }, unbind_: function () {
                var b = this.$n();
                this.domUnlisten_(b, "onChange").domUnlisten_(b, "onFocus", "doFocus_").domUnlisten_(b, "onBlur", "doBlur_").$supers(zul.wgt.Selectbox, "unbind_", arguments);
                var a = [this, this._fixSelIndex];
                zWatch.unlisten({onRestore: a, onVParent: a})
            }, _doChange: function (a) {
                var c = this.$n(), b = c.selectedIndex;
                if (zk.opera) {
                    c.selectedIndex = b
                }
                if (this._selectedIndex == b) {
                    return
                }
                this.setSelectedIndex(c.selectedIndex);
                this.fire("onSelect", c.selectedIndex)
            }, doBlur_: function (a) {
                this._doChange(a);
                return this.$supers("doBlur_", arguments)
            }, beforeCtrlKeys_: function (a) {
                this._doChange(a)
            }, domAttrs_: function () {
                var a;
                return this.$supers("domAttrs_", arguments) + (this.isDisabled() ? ' disabled="disabled"' : "") + ((a = this.getSelectedIndex()) > -1 ? ' selectedIndex="' + a + '"' : "") + ((a = this.getTabindex()) ? ' tabindex="' + a + '"' : "") + ((a = this.getName()) ? ' name="' + a + '"' : "")
            }
        });
        zkreg('zul.wgt.Selectbox');
        zk._m = {};
        zk._m['default'] = function (b) {
            b.push("<select", this.domAttrs_(), ">");
            var d = $eval(this.items) || [];
            for (var c = 0, a = d.length; c < a; c++) {
                b.push("<option");
                if (this._selectedIndex > -1 && this._selectedIndex == c) {
                    b.push(' selected="selected"')
                }
                b.push(">", d[c], "</option>")
            }
            b.push("</select>")
        };
        ;
        zkmld(zk._p.p.Selectbox, zk._m);
        (function () {
            var b = {warning: "z-icon-exclamation-circle", info: "z-icon-info-circle", error: "z-icon-times-circle"};
            var a = {u: "up", d: "down", l: "left", r: "right"};
            zul.wgt.Notification = zk.$extends(zul.wgt.Popup, {
                $init: function (d, c) {
                    this.$supers(zul.wgt.Notification, "$init", arguments);
                    this._msg = d;
                    this._type = c.type;
                    this._ref = c.ref;
                    this._dur = c.dur;
                    this._closable = c.closable
                }, redraw: function (c) {
                    var e = this.uuid, d = this.$s("icon");
                    c.push("<div", this.domAttrs_(), ">");
                    if (this._ref) {
                        c.push('<div id="', e, '-p" class="', this.$s("pointer"), '"></div>')
                    }
                    c.push('<i id="', e, '-icon" class="', d, " ", (b[this._type]), '"></i>');
                    c.push('<div id="', e, '-cave" class="', this.$s("content"), '">', this._msg, "</div>");
                    if (this._closable) {
                        c.push('<div id="', e, '-cls" class="', this.$s("close"), '"><i id="', e, '-clsIcon" class="', d, ' z-icon-times"></i></div>')
                    }
                    c.push("</div>")
                }, domClass_: function (f) {
                    var d = this._type, e = this._ref, c = this.$supers(zul.wgt.Notification, "domClass_", arguments);
                    if (d) {
                        c += " " + this.$s(zUtl.encodeXML(d))
                    }
                    return c
                }, doClick_: function (c) {
                    var d = c.domTarget;
                    if (d == this.$n("cls") || d == this.$n("clsIcon")) {
                        this.close()
                    } else {
                        this.$supers("doClick_", arguments)
                    }
                }, onFloatUp: function (c, d) {
                    if (d && d.triggerByFocus) {
                        return
                    }
                    if (!this.isVisible()) {
                        return
                    }
                    var f = c.origin;
                    for (var e; f; f = f.parent) {
                        if (f == this) {
                            if (!e) {
                                this.setTopmost()
                            }
                            return
                        }
                        if (f == this.parent && f.ignoreDescendantFloatUp_(this)) {
                            return
                        }
                        e = e || f.isFloating_()
                    }
                    if (!this._closable && this._dur <= 0) {
                        this.close({sendOnOpen: true})
                    }
                }, open: function (e, f, c, d) {
                    this.$supers(zul.wgt.Notification, "open", arguments);
                    this._fixarrow(e);
                    zk(this).redoCSS(-1, {fixFontIcon: true})
                }, position: function (e, f, c, d) {
                    this.$supers(zul.wgt.Notification, "position", arguments);
                    this._fixarrow(e)
                }, _posInfo: function (e, f, c, d) {
                    this._fixPadding(c);
                    return this.$supers(zul.wgt.Notification, "_posInfo", arguments)
                }, _fixPadding: function (c) {
                    var e = this.$n("p");
                    if (!e) {
                        return
                    }
                    var g = this.$n(), d = 2 + (zk(e).borderWidth() / 2) || 0, f = 2 + (zk(e).borderHeight() / 2) || 0;
                    g.style.padding = "0";
                    switch (c) {
                        case"before_start":
                        case"before_center":
                        case"before_end":
                            this._dir = "d";
                            g.style.paddingBottom = f + "px";
                            break;
                        case"after_start":
                        case"after_center":
                        case"after_end":
                            this._dir = "u";
                            g.style.paddingTop = f + "px";
                            break;
                        case"end_before":
                        case"end_center":
                        case"end_after":
                            this._dir = "l";
                            g.style.paddingLeft = d + "px";
                            break;
                        case"start_before":
                        case"start_center":
                        case"start_after":
                            this._dir = "r";
                            g.style.paddingRight = d + "px";
                            break;
                        case"top_left":
                        case"top_center":
                        case"top_right":
                        case"middle_left":
                        case"middle_center":
                        case"middle_right":
                        case"bottom_left":
                        case"bottom_center":
                        case"bottom_right":
                        case"overlap":
                        case"overlap_end":
                        case"overlap_before":
                        case"overlap_after":
                            this._dir = "n";
                            break;
                        default:
                            this._dir = "n"
                    }
                }, _fixarrow: function (d) {
                    var l = this.$n("p");
                    if (!l) {
                        return
                    }
                    var e = this.$s("pointer"), o = this.$n(), c = d.$n(), m = this._dir, i = zk(l), j = i.borderWidth(), t = i.borderHeight(), k = zk(o).revisedOffset(), f = zk(c).revisedOffset(), v = (c.offsetWidth - j) / 2, u = (c.offsetHeight - t) / 2;
                    if (m != "n") {
                        if (m == "u" || m == "d") {
                            var s = m == "u", r = (o.offsetWidth - j) / 2 || 0, q = f[0] - k[0] + v || 0;
                            l.style.left = (c.offsetWidth >= o.offsetWidth ? r : q) + "px";
                            l.style[s ? "top" : "bottom"] = ((2 - t / 2) || 0) + "px";
                            l.style[s ? "bottom" : "top"] = ""
                        } else {
                            var s = m == "l", h = (o.offsetHeight - t) / 2 || 0, g = f[1] - k[1] + u || 0;
                            l.style.top = (c.offsetHeight >= o.offsetHeight ? h : g) + "px";
                            l.style[s ? "left" : "right"] = ((2 - j / 2) || 0) + "px";
                            l.style[s ? "right" : "left"] = ""
                        }
                        l.className = e + (a[m] ? " " + this.$s(a[m]) : "");
                        jq(l).show()
                    } else {
                        l.className = e;
                        jq(l).hide()
                    }
                }, openAnima_: function (f, g, c, e) {
                    var d = this;
                    jq(this.$n()).fadeIn(500, function () {
                        d.afterOpenAnima_(f, g, c, e)
                    })
                }, closeAnima_: function (d) {
                    var c = this;
                    jq(this.$n()).fadeOut(500, function () {
                        c.afterCloseAnima_(d)
                    })
                }, afterCloseAnima_: function (c) {
                    this.detach()
                }
            }, {
                show: function (g, i, c) {
                    if (!c) {
                        c = {}
                    }
                    var k = zk.Widget.$(i), h = c.ref, j = c.pos, d = c.dur, e = new zul.wgt.Notification(g, c), f = c.off;
                    if (!j && !f) {
                        j = h ? "end_center" : "middle_center"
                    }
                    if (!k) {
                        k = zk.Desktop.$().firstChild
                    }
                    k.appendChild(e);
                    e.open(h, f, j);
                    if (d > 0) {
                        setTimeout(function () {
                            if (e.desktop) {
                                e.close()
                            }
                        }, d)
                    }
                }
            })
        })();
        zkreg('zul.wgt.Notification');
    } finally {
        zk.setLoaded(zk._p.n);
    }
});
zk.setLoaded('zul.wgt', 1);
(function () {
    if (zk._p = zkpi('zkmax'))try {
        (function () {
            zAu.cmd0.echoGx = function (m, f) {
                var h = zAu.cmd0.echoGx.getAll();
                for (var g = arguments.length; g-- > 2;) {
                    for (var c = arguments[g], d = h.length; d--;) {
                        try {
                            var l = h[d];
                            if (l.zk.Desktop.$(c)) {
                                var b = "zAu.send(new zk.Event(zk.Desktop.$('" + c + "'),'" + m + "'";
                                if (f !== null) {
                                    b += ",'" + f + "'"
                                }
                                l.setTimeout(b + "))", 0);
                                break
                            }
                        } catch (k) {
                        }
                    }
                }
            };
            zAu.cmd0.echoGx.getAll = function () {
                return zUtl.frames(top)
            };
            if (zk.mobile) {
                zAu.cmd0.download = function (c) {
                    if (c) {
                        var d = document.createElement("a"), b = document.createEvent("Event");
                        d.id = "zk_download";
                        d.href = c;
                        d.target = "_blank";
                        b.initEvent("click", true, false);
                        d.dispatchEvent(b)
                    }
                }
            }
            zk.copy(jq, {
                camelCase: (function () {
                    var f = {}, d = 0, c = /^-ms-/, e = /-([\da-z])/gi, b = function (h, i) {
                        return i.toUpperCase()
                    }, g = function (h) {
                        return h.replace(c, "ms-").replace(e, b)
                    };
                    return function (h) {
                        if (f[h] === undefined) {
                            f[h] = g(h);
                            if (d++ > 1000) {
                                d = 0;
                                f = {}
                            }
                        }
                        return f[h]
                    }
                })()
            });
            var a = zAu.addAuRequest;
            zAu.addAuRequest = function (c, m) {
                var h = zAu.getAuRequests(c), n = m.target;
                if (n) {
                    var b = n.uuid, k = m.name, d = n.$class;
                    if (d._duplicateIgnoreEvts && d._duplicateIgnoreEvts[k]) {
                        for (var g = 0, e = h.length; g < e; g++) {
                            var f = h[g];
                            if (f.target && f.target.uuid == b && f.name == k) {
                                h.splice(g, 1);
                                break
                            }
                        }
                    } else {
                        if (h.length && d._repeatIgnoreEvts && d._repeatIgnoreEvts[k]) {
                            var l = h[h.length - 1];
                            if (l.target && l.target.uuid == b && l.name == k) {
                                h.pop()
                            }
                        }
                    }
                }
                a(c, m)
            }
        })();
        (function () {
            var a = {};
            zk.override(zk.Widget.prototype, a, {
                domListen_: function (f, e, d, b) {
                    if (!this.$weave) {
                        var c = this.getDomEvtInf_(this, e, d, b);
                        zk.afterMount(function () {
                            jq(f, zk).bind(c[0], c[1])
                        });
                        return this
                    }
                }
            })
        })();
        zk.copy(zkmax, {
            rod: function (d) {
                var c = true, a = d, b;
                if (a) {
                    if ((b = a.z$rod0) != null) {
                        return b
                    }
                    for (; a; a = a.parent) {
                        if ((b = a.z$rod) != null) {
                            if (d === a) {
                                return b
                            }
                            c = b;
                            break
                        }
                    }
                }
                if (d && (d = d.parent) && d !== a) {
                    d.z$rod = c
                }
                return c
            }, rodRender: function (c, a) {
                if (c.z_rod && (!c.parent || !c.parent.z_rod)) {
                    if (!a) {
                        c._rodopen = true
                    }
                    var b;
                    c.replaceHTML("#" + c.uuid, (b = c.parent) ? b.desktop : c.desktop)
                }
            }
        });
        (function () {
            function b(c) {
                return function () {
                    var d = {};
                    zk.override(zk.$import(c).prototype, d, {
                        redraw: function (e) {
                            if (this._rodopen) {
                                delete this._rodopen
                            } else {
                                if (!this._visible && zkmax.rod(this)) {
                                    this.z_rod = true;
                                    e.push('<div id="', this.uuid, '" style="display:none"');
                                    var f = this.domClass_();
                                    if (f) {
                                        e.push(' class="', f, '"')
                                    }
                                    e.push("></div>");
                                    return
                                }
                            }
                            d.redraw.apply(this, arguments)
                        }, setVisible: function (e) {
                            if (e) {
                                zkmax.rodRender(this)
                            }
                            d.setVisible.apply(this, arguments)
                        }, setMaximized: function (e) {
                            if (e) {
                                zkmax.rodRender(this)
                            }
                            d.setMaximized.apply(this, arguments)
                        }, forcerender: function () {
                            d.forcerender.apply(this, arguments);
                            zkmax.rodRender(this)
                        }
                    })
                }
            }

            function a() {
                var c = ["zul.wgt.Div", "zul.wgt.Include", "zul.wnd.Panel", "zul.wnd.Window"], e;
                while (e = c.pop()) {
                    var d = e.lastIndexOf(".");
                    zk.afterLoad(e.substring(0, d), b(e))
                }
            }

            a()
        })();
        zk.afterLoad('zul', function () {
        });
        zk.afterLoad('zul.tab', function () {
            (function () {
                var b = {}, a = zul.tab.Tabpanel;
                zk.override(a.molds, b.molds = {}, {
                    "default": function (c) {
                        if (this._rodopen) {
                            delete this._rodopen
                        } else {
                            if (!this.isSelected() && !this.getTabbox().inAccordionMold() && zkmax.rod(this)) {
                                this.z_rod = true;
                                c.push('<div id="', this.uuid, '" style="display:none"></div>');
                                return
                            }
                        }
                        b.molds["default"].apply(this, arguments)
                    }
                });
                zk.override(a.prototype, b, {
                    _sel: function (c) {
                        if (c) {
                            zkmax.rodRender(this)
                        }
                        b._sel.apply(this, arguments)
                    }, forcerender: function () {
                        b.forcerender.apply(this, arguments);
                        zkmax.rodRender(this)
                    }
                })
            })();
            (function () {
                var a = {};
                zk.override(zul.tab.Tab.prototype, a, {
                    onChildAdded_: function (b) {
                        if (zk.isLoaded("zul.wgt") && b.$instanceof(zul.wgt.Caption)) {
                            this.caption = b
                        }
                        a.onChildAdded_.apply(this, arguments)
                    }, onChildRemoved_: function (b) {
                        if (b == this.caption) {
                            this.caption = null
                        }
                        a.onChildRemoved_.apply(this, arguments)
                    }, contentRenderer_: function (b) {
                        if (this.caption) {
                            var c = this.getZclass();
                            b.push('<span id="', this.uuid, '-cnt" class="', c, '-text">');
                            this.caption.redraw(b);
                            b.push("</span>")
                        } else {
                            a.contentRenderer_.apply(this, arguments)
                        }
                    }
                })
            })();
        });
        zk.afterLoad('zul.wgt', function () {
            (function () {
                var a = {}, b = zul.wgt.Popup;

                function c(d) {
                    if (d.z_rod && (!d.parent || !d.parent.z_rod)) {
                        d._rodopen = true;
                        zkmax.rodRender(d)
                    }
                }

                zk.override(b.molds, a.molds = {}, {
                    "default": function (d) {
                        if (this._rodopen) {
                            delete this._rodopen
                        } else {
                            if (!this.isOpen() && zkmax.rod(this)) {
                                this.z_rod = true;
                                d.push('<div id="', this.uuid, '" style="display:none"></div>');
                                return
                            }
                        }
                        a.molds["default"].apply(this, arguments)
                    }
                });
                zk.override(b.prototype, a, {
                    open: function () {
                        c(this);
                        a.open.apply(this, arguments)
                    }, close: function () {
                        c(this);
                        a.close.apply(this, arguments)
                    }, forcerender: function () {
                        a.forcerender.apply(this, arguments);
                        c(this)
                    }
                })
            })();
            (function () {
                var a = {};

                function b(f) {
                    for (var d = f.firstChild, e = f.caption; d; d = d.nextSibling) {
                        if (d != e) {
                            return d
                        }
                    }
                }

                function c(f) {
                    if (f._rodKid && (!f.parent || !f.parent.z_rod)) {
                        delete f._rodKid;
                        f._rodopen = true;
                        var e = [];
                        f._redrawCave(e);
                        jq("#" + f.uuid + "-cave").replaceWith(e.join(""));
                        for (var d = b(f); d; d = d.nextSibling) {
                            d.unbind();
                            if (!d._visible && zkmax.rod(d)) {
                                d.z_rod = true
                            }
                            d.bind(f.desktop)
                        }
                        f.clearCache()
                    }
                }

                zk.override(zul.wgt.Groupbox.prototype, a, {
                    _redrawCave: function (e) {
                        var d;
                        if (this._rodopen) {
                            delete this._rodopen
                        } else {
                            if ((d = b(this)) && !this._open && zkmax.rod(this)) {
                                e.push('<div id="', this.uuid, '-cave"');
                                if (!this._isDefault()) {
                                    e.push(' style="display:none;border:1px solid"')
                                }
                                e.push("></div>");
                                for (; d; d = d.nextSibling) {
                                    if (d != this.caption) {
                                        d.z_rod = true
                                    }
                                }
                                this._rodKid = true;
                                return
                            }
                        }
                        a._redrawCave.apply(this, arguments)
                    }, setOpen: function (d) {
                        if (d) {
                            c(this)
                        }
                        a.setOpen.apply(this, arguments)
                    }, shallChildROD_: function (d) {
                        return this._rodKid || a.shallChildROD_.apply(this, arguments)
                    }, forcerender: function () {
                        a.forcerender.apply(this, arguments);
                        c(this)
                    }
                })
            })();
            (function () {
                var c = {};

                function b(d) {
                    return d && zk.isLoaded("zul.tab") && d.$instanceof(zul.tab.Tab)
                }

                function a(d) {
                    return d && zk.isLoaded("zul.layout") && d.$instanceof(zul.layout.LayoutRegion)
                }

                zk.override(zul.wgt.Caption.prototype, c, {
                    _getBlank: function () {
                        return b(this.parent) ? "" : c._getBlank.apply(this, arguments)
                    }, _isCloseVisible: function () {
                        return b(this.parent) ? false : c._isCloseVisible.apply(this, arguments)
                    }, _isCollapsibleVisible: function () {
                        return a(this.parent) ? false : c._isCollapsibleVisible.apply(this, arguments)
                    }
                })
            })();
        });
        zk.afterLoad('zul.menu', function () {
            (function () {
                var a = {}, b = zul.menu.Menupopup;
                zk.override(b.molds, a.molds = {}, {
                    "default": function (c) {
                        if (this._rodopen) {
                            delete this._rodopen
                        } else {
                            if (!this.isOpen() && zkmax.rod(this)) {
                                this.z_rod = true;
                                c.push('<div id="', this.uuid, '" style="display:none"></div>');
                                return
                            }
                        }
                        a.molds["default"].apply(this, arguments)
                    }
                });
                zk.override(b.prototype, a, {
                    open: function () {
                        zkmax.rodRender(this);
                        a.open.apply(this, arguments)
                    }, forcerender: function () {
                        a.forcerender.apply(this, arguments);
                        zkmax.rodRender(this)
                    }
                })
            })();
        });
        zk.afterLoad('zul.inp', function () {
            (function () {
                var d = {}, a = {};

                function b(g, f) {
                    var e;
                    if (g._rodopen) {
                        delete g._rodopen
                    } else {
                        if ((e = g.firstChild) && !g._open && zkmax.rod(g)) {
                            f.push('<div id="', g.uuid, '-pp" style="display:none"></div>');
                            for (; e; e = e.nextSibling) {
                                e.z_rod = true
                            }
                            g._rodKid = true;
                            return true
                        }
                    }
                }

                function c(g) {
                    if (g._rodKid && (!g.parent || !g.parent.z_rod)) {
                        delete g._rodKid;
                        g._rodopen = true;
                        var f = [];
                        g.redrawpp_(f);
                        jq("#" + g.uuid + "-pp").replaceWith(f.join(""));
                        for (var e = g.firstChild; e; e = e.nextSibling) {
                            e.unbind();
                            e.bind(g.desktop)
                        }
                        g.clearCache()
                    }
                }

                zk.override(zul.inp.Combobox.prototype, d, {
                    redrawpp_: function (e) {
                        if (!b(this, e)) {
                            d.redrawpp_.apply(this, arguments)
                        }
                    }, shallChildROD_: function (e) {
                        return this._rodKid || d.shallChildROD_.apply(this, arguments)
                    }, forcerender: function () {
                        d.forcerender.apply(this, arguments);
                        c(this)
                    }, open: function () {
                        c(this);
                        d.open.apply(this, arguments)
                    }
                });
                zk.override(zul.inp.Bandbox.prototype, a, {
                    redrawpp_: function (e) {
                        if (!b(this, e)) {
                            a.redrawpp_.apply(this, arguments)
                        }
                    }, forcerender: function () {
                        a.forcerender.apply(this, arguments);
                        c(this)
                    }, open: function () {
                        c(this);
                        a.open.apply(this, arguments)
                    }
                })
            })();
        });
        zk.afterLoad('zul.db', function () {
            (function () {
                var a = {}, b = {};

                function c(g, f) {
                    var e;
                    if (g._rodopen) {
                        delete g._rodopen
                    } else {
                        if ((e = g.firstChild) && !g._open && zkmax.rod(g)) {
                            f.push('<div id="', g.uuid, '-pp" style="display:none"></div>');
                            g.z_childrod = true;
                            for (; e; e = e.nextSibling) {
                                e.z_rod = true
                            }
                            return true
                        }
                    }
                    delete g.z_childrod
                }

                function d(g) {
                    var e;
                    if ((e = g.firstChild) && e.z_rod && (!g.parent || !g.parent.z_rod)) {
                        g._rodopen = true;
                        var f = [];
                        g.redrawpp_(f);
                        jq("#" + g.uuid + "-pp").replaceWith(f.join(""));
                        for (; e; e = e.nextSibling) {
                            e.unbind();
                            e.bind(g.desktop)
                        }
                        g.clearCache()
                    }
                }

                zk.override(zul.db.Datebox.prototype, a, {
                    redrawpp_: function (e) {
                        if (!c(this, e)) {
                            a.redrawpp_.apply(this, arguments)
                        }
                    }, forcerender: function () {
                        a.forcerender.apply(this, arguments);
                        d(this)
                    }
                });
                zk.override(zul.db.CalendarPop.prototype, b, {
                    open: function () {
                        d(this.parent);
                        b.open.apply(this, arguments)
                    }
                })
            })();
            (function () {
                var c = zul.db.Renderer.dayView, a = {};

                function b(g, h, f) {
                    var i = new Date(g, h, f, 0, 0, 0, 0);
                    i.setDate(f + 4 - (i.getDay() || 7));
                    var e = new Date(i.getFullYear(), 0, 1);
                    return Math.ceil((((i - (e)) / 86400000) + 1) / 7)
                }

                zul.db.Renderer.dayView = function (p, l, e) {
                    if (!p.isWeekOfYear()) {
                        c.apply(this, arguments);
                        return
                    }
                    var d = p.uuid, f = p.$s("weekend"), m = p.$s("weekday"), q = p.$s("weekofyear"), o = p.$s("cell");
                    l.push('<table class="', p.$s("body"), '" id="', d, '-mid"', zUtl.cellps0, ">", "<thead><tr>");
                    var n = (7 - e.DOW_1ST) % 7, g = (6 + n) % 7;
                    l.push('<th class="', q, '">', zul.db.Renderer.titleOfWeekOfYear(p), "</th>");
                    for (var i = 0; i < 7; ++i) {
                        l.push('<th class="', (i == n || i == g) ? f : m, '">' + e.S2DOW[i] + "</th>")
                    }
                    l.push("</tr></thead><tbody>");
                    for (var i = 0; i < 6; ++i) {
                        l.push('<tr id="', d, "-w", i, '">', '<td class="', o, " ", q, '"></td>');
                        for (var h = 0; h < 7; ++h) {
                            l.push('<td class="', o, " ", (h == n || h == g) ? f : m, '"></td>')
                        }
                        l.push("</tr>")
                    }
                    l.push("</tbody></table>")
                };
                zk.override(zul.db.Calendar.prototype, a, {
                    _clickDate: function (d) {
                        if (this.isWeekOfYear()) {
                            var g = d.domTarget, h;
                            for (; g; g = g.parentNode) {
                                try {
                                    if ((h = jq(g).data("woy")) !== undefined) {
                                        h = zk.parseInt(h);
                                        break
                                    }
                                } catch (f) {
                                    continue
                                }
                            }
                            if (h) {
                                this.fire("onWeekClick", {"": h})
                            }
                        }
                        a._clickDate.apply(this, arguments)
                    }, _markCal0: function (q) {
                        if (this._view != "day" || !this.isWeekOfYear()) {
                            a._markCal0.apply(this, arguments);
                            return
                        }
                        var g = this.getZclass(), G = this.getTime(), w = G.getMonth(), o = G.getFullYear(), D = G.getDate(), r = (this._localizedSymbols && this._localizedSymbols.DOW_1ST) || zk.DOW_1ST, p = new Date(o, w, 1).getDay() - r, n = new Date(o, w + 1, 0).getDate(), t = new Date(o, w, 0).getDate(), C = zUtl.today(), F = this.$n("mid"), h = jq(F), B = this.$s("selected"), l = this.$s("outside"), u = this.$s("disabled");
                        h.find("." + B).removeClass(B);
                        if (!q || !q.sameMonth) {
                            h.find("." + l).removeClass(l);
                            h.find("." + u).removeClass(u)
                        }
                        if (p < 0) {
                            p += 7
                        }
                        for (var A = 0, f = -p + 1; A < 6; ++A) {
                            var x = this.$n("w" + A);
                            if (x) {
                                for (var z = 0; z < 8; ++z, ++f) {
                                    if (z == 0) {
                                        p = f <= 0 ? t + f : f <= n ? f : f - n;
                                        var E = f <= 0 ? -1 : f <= n ? 0 : 1, e = b(o, w + E, p);
                                        jq(x.cells[z]).html(zul.db.Renderer.labelOfWeekOfYear(this, e)).data("woy", e);
                                        f--;
                                        continue
                                    }
                                    if (z == 1 && f > n) {
                                        x.style.display = "none"
                                    } else {
                                        p = f <= 0 ? t + f : f <= n ? f : f - n;
                                        if (z == 1) {
                                            x.style.display = ""
                                        }
                                        var E = f <= 0 ? -1 : f <= n ? 0 : 1, s = f == D;
                                        if (o >= 2099 && w == 11 && E == 1 || o <= 1900 && w == 0 && E == -1) {
                                            continue
                                        }
                                        var i = jq(x.cells[z]);
                                        i[0]._monofs = E;
                                        if (s) {
                                            i.addClass(B)
                                        }
                                        if (!q || !q.sameMonth) {
                                            if (E) {
                                                i.addClass(l)
                                            }
                                            if (zul.db.Renderer.disabled(this, o, w + E, p, C)) {
                                                i.addClass(u)
                                            }
                                            i.html(zul.db.Renderer.cellHTML(this, o, w + E, p, E)).data("value", p)
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            })();
        });
        zk.afterLoad('zul.mesh', function () {
            (function () {
                var a = {}, b = {};
                zk.override(zul.mesh.ColumnMenuWidget.prototype, a, {
                    _onUngroup: function (c) {
                        var d;
                        if ((d = c.target.parent._ungroup)) {
                            d.setVisible(false)
                        }
                        this._mref.fire("onUngroup", this._mref.getSortDirection() != "ascending", {toServer: !this.getMeshWidget().getModel()})
                    }
                });
                zk.override(zul.mesh.ColumnMenupopup.prototype, b, {
                    getUngroupitem: function () {
                        return this._ungroup
                    }
                })
            })();
        });
        zk.afterLoad('zul.sel', function () {
            (function () {
                var a = zk.ie < 11 ? 1193046 : 16777216, b = {};
                zk.override(zul.sel.Listbox.prototype, b, {
                    _firstLoad: true,
                    _totalSize: 0,
                    _avgrowhgh: 21,
                    _offset: 0,
                    _lastoffset: 0,
                    _limit: 20,
                    _bufpad: 21 * 50,
                    _loadpad: 21 * 10,
                    _viewtop: 0,
                    _lasttop: 0,
                    _totalhgh: null,
                    _rowshgh: null,
                    _topPad: 0,
                    _itop: 0,
                    _ibottom: 0,
                    $init: function () {
                        b.$init.apply(this, arguments);
                        this._padsz = {}
                    },
                    domPad_: function (c, d) {
                        if (this._listbox$rod) {
                            c.push('<div id="', this.uuid, d, '" style="font-size:0px;display:none;width:1px;"></div>')
                        }
                    },
                    setResetDataLoader: function () {
                        this._justScrollPads = this._currentTop = this._currentLeft = this._topPad = this._lasttop = 0;
                        this.refreshBar_(false, true);
                        if (this._nativebar && this.ebody) {
                            this.ebody.scrollTop = 0
                        }
                    },
                    setTotalSize: function (c) {
                        if (this._listbox$rod) {
                            if (c != this._totalSize) {
                                this._totalSize = c
                            }
                            if (!this._scrolling && this.desktop) {
                                this._initPadSizes();
                                if (zk.ie < 11) {
                                    this._doScroll()
                                }
                            }
                        }
                    },
                    setItemsInvalid_: function (c) {
                        var d = this;
                        zAu.createWidgets(c, function (f) {
                            if (d.$n("rows")) {
                                var k = f.length && f[0] ? f[0]._index : d._lastoffset;
                                d.replaceCavedChildren_("rows", f);
                                if (!k) {
                                    d._justScrollPads = false
                                } else {
                                    d.setScrollPads_({offset: k})
                                }
                            } else {
                                var h;
                                for (var i = d.firstItem; i;) {
                                    var l = d.nextItem(i);
                                    if (!l) {
                                        h = i.nextSibling
                                    }
                                    d.removeChild(i, true);
                                    i = l
                                }
                                for (var g = 0, e = f.length; g < e; ++g) {
                                    d.insertBefore(f[g], h, true)
                                }
                            }
                        }, function (f) {
                            for (var e = f, g = f; e; g = e, e = e.parent) {
                                if (e == d && g.$instanceof(zul.sel.Listitem)) {
                                    return null
                                }
                            }
                            return f
                        })
                    },
                    _fireOnScrollPos: function (c) {
                        if (this._listbox$rod) {
                            if (!this.inPagingMold() && !this.inSelectMold()) {
                                clearTimeout(this._timeoutId);
                                this._timeoutId = setTimeout(this.proxy(this._scrollPage), c >= 0 ? c : 300)
                            }
                        } else {
                            b._fireOnScrollPos.apply(this, arguments)
                        }
                    },
                    _onRender: function () {
                        if (b._onRender.apply(this, arguments)) {
                            return true
                        }
                        if (this._listbox$rod && !this.inPagingMold() && !this.inSelectMold() && this._firstLoad) {
                            this._firstLoad = false;
                            if (this.initRodSize) {
                                this._bufpad = this.initRodSize / 2 * 21
                            }
                            this._initPadSizes()
                        }
                    },
                    _setPadSize: function (g, d, f) {
                        this._padsz[d] = f;
                        var e = g.style;
                        e.display = f ? "block" : "none";
                        var c = ['<table id="', this.uuid, "-", d, '-tbl"', ">"];
                        if (!zk.webkit) {
                            while (true) {
                                c.push('<tr style="height:', Math.min(f, a), 'px"><td></td></tr>');
                                f -= a;
                                if (f <= 0) {
                                    break
                                }
                            }
                        } else {
                            while (true) {
                                c.push('<tr><td style="height:', Math.min(f, a), 'px"></td></tr>');
                                f -= a;
                                if (f <= 0) {
                                    break
                                }
                            }
                        }
                        c.push("</table>");
                        jq(g).empty().append(c.join(""))
                    },
                    _initPadSizes: function () {
                        if (this.inPagingMold()) {
                            return
                        }
                        if (this._justScrollPads) {
                            delete this._justScrollPads;
                            return
                        }
                        var i = this.$n("rows");
                        if (!i) {
                            return
                        }
                        var j = this._nrows, o = this._rowshgh = i.offsetHeight, q = this._totalSize, n = this.ebody, d = this.$n("cave");
                        this._avgrowhgh = j > 0 ? ((o / j) | 0) : 21;
                        this._ibottom = this._offset + j;
                        if (this._topPad < 0) {
                            this._topPad = this._offset * this._avgrowhgh
                        }
                        if (this._offset == 0) {
                            this._topPad = 0
                        }
                        var c = this._topPad, l = q * this._avgrowhgh - o - c;
                        if (l < 0) {
                            if (this._offset > 0) {
                                c += l
                            }
                            l = 0;
                            if (c < 0) {
                                c = 0
                            }
                        } else {
                            if (this.tsize <= this._ibottom) {
                                l = 0
                            }
                        }
                        if (this._topPad != c) {
                            this.fire("onTopPad", {topPad: this._topPad = c})
                        }
                        this._setPadSize(this.$n("tpad"), "tpad", c);
                        this._setPadSize(this.$n("bpad"), "bpad", l);
                        this._totalhgh = this.ebody.scrollHeight;
                        this._itop = this._offset;
                        var r = n.offsetHeight;
                        this._limit = (((r + this._bufpad * 2) / this._avgrowhgh) | 0) + 2;
                        if (!this._viewtop && !this._lasttop && this._currentTop > 0) {
                            this._viewtop = this._lasttop = this._currentTop
                        }
                        if (!this._lastoffset && this._offset > 0) {
                            this._lastoffset = this._offset
                        }
                        if (this._totalSize > this._ibottom) {
                            var h = this._viewtop = this._currentTop, k = h + r, f = i.lastChild, p = f ? this._rowScrollBottom(f) : c;
                            if (k > p && this._lastoffset == this._itop) {
                                this.fire("onDataLoading", {offset: this._itop, limit: this._limit})
                            }
                        }
                        this.refreshBar_();
                        if (this._selInView) {
                            var e = this._selInView * this._avgrowhgh, m = e + this._avgrowhgh, g = zul.mesh.Scrollbar.getScrollPosV(this);
                            if (m < g || e > (g + this.ebody.offsetHeight)) {
                                this.setSelInView_(this._selInView)
                            }
                            delete this._selInView
                        }
                    },
                    _rowScrollBottom: function (c) {
                        return c.offsetTop + c.offsetHeight - (this.ebodytbl.offsetParent == c.offsetParent ? this.ebodytbl.offsetTop : 0)
                    },
                    _rowOffsetTop: function (c) {
                        var d = this.$n("rows");
                        return c.offsetTop - (d.offsetParent == c.offsetParent ? d.offsetTop : 0)
                    },
                    setSelInView_: function (c) {
                        var e = c * this._avgrowhgh;
                        var d = this._scrollbar;
                        if (d) {
                            if (!d.hasVScroll()) {
                                d.syncSize()
                            }
                            d.scrollTo(zul.mesh.Scrollbar.getScrollPosH(this), e)
                        } else {
                            this.ebody.scrollTop = e
                        }
                    },
                    _syncSelInView: function () {
                        if (!this._listbox$rod) {
                            b._syncSelInView.apply(this, arguments)
                        }
                    },
                    _scrollPage: function () {
                        this._timeoutId = false;
                        var p = this.$n("rows");
                        if (!p) {
                            return
                        }
                        var q = this.ebody, f = this._viewtop = zul.mesh.Scrollbar.getScrollPosV(this), s = f + q.offsetHeight;
                        var g = this._padsz.tpad, m = this._lasttop, t = g, n = this._rowshgh = p.offsetHeight, h = t + n;
                        if (f != m) {
                            var u = f - this._bufpad, r = s + this._bufpad, k = f - this._loadpad, i = s + this._loadpad;
                            if (u < 0) {
                                u = 0
                            }
                            if (k < 0) {
                                k = 0
                            }
                            if (r > this._totalhgh) {
                                r = this._totalhgh - (zk.ie < 11 ? 1 : 0)
                            }
                            if (i > this._totalhgh) {
                                i = this._totalhgh - (zk.ie < 11 ? 1 : 0)
                            }
                            if (f > m) {
                                if (h < i) {
                                    var d = this._itop;
                                    if (h < u) {
                                        d = this._ibottom + (((u - h) / this._avgrowhgh) | 0)
                                    } else {
                                        var c = u - g;
                                        if (c >= 0) {
                                            var o = this._ibottom - 1;
                                            d = 0;
                                            for (var e = this.lastItem; e; e = this.previousItem(e), --o) {
                                                var l = this._rowOffsetTop(e.$n());
                                                if (l < c) {
                                                    d = o;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    if (d >= this._totalSize) {
                                        d = this._totalSize - this._limit
                                    }
                                    if (d < 0 || f == 0) {
                                        d = 0
                                    }
                                    if (d != this._lastoffset || (this._totalSize > this._ibottom && this._nrows < this._limit)) {
                                        this._lastoffset = d;
                                        this._lasttop = f;
                                        this.fire("onDataLoading", {
                                            offset: d,
                                            limit: this._limit
                                        }, {rtags: {onDataLoading: 1}})
                                    }
                                }
                            } else {
                                if (t >= k || (u == 0 && this._lastoffset > 0)) {
                                    var d = u == 0 ? 0 : (this._itop - ((t - u) / this._avgrowhgh) | 0);
                                    if (d >= this._totalSize) {
                                        d = this._totalSize - this._limit
                                    }
                                    if (d < 0) {
                                        d = 0
                                    }
                                    if (d != this._lastoffset) {
                                        this._lastoffset = d;
                                        this._lasttop = f;
                                        this.fire("onDataLoading", {
                                            offset: d,
                                            limit: this._limit
                                        }, {rtags: {onDataLoading: 1}})
                                    }
                                }
                            }
                        }
                        this._currentTop = f;
                        this.fire("onScrollPos", {top: this._currentTop, left: this._currentLeft})
                    },
                    setScrollPads_: function (q) {
                        var o = q.offset, t = q.sel;
                        this._justScrollPads = true;
                        delete this._scrolling;
                        if (!this._listbox$rod || o != this._lastoffset) {
                            return
                        }
                        var z = this.ebody, y = this.$n("rows"), w = this.$n("cave");
                        if (!y) {
                            return
                        }
                        var f = this.$n("tpad"), n = this.$n("bpad"), l = this._padsz.tpad, c = this._padsz.bpad, p = this._rowshgh, s = this._itop, d = this._ibottom, r = this._rowshgh = y.offsetHeight, g = this._totalSize, h = this._itop = o, e = this._ibottom = h + this._nrows;
                        if (h > s) {
                            if (h >= d) {
                                l = l + p + ((o - d) * this._avgrowhgh | 0)
                            } else {
                                var x = this.firstItem;
                                for (var u = h; u < d && x; ++u) {
                                    x = this.nextItem(x)
                                }
                                l = l + p - (x ? this._rowOffsetTop(x.$n()) : r)
                            }
                        } else {
                            if (h < s) {
                                if (e <= s) {
                                    l = l - ((s - o) * this._avgrowhgh | 0)
                                } else {
                                    var x = this.lastItem;
                                    for (var u = e - 1; u > s && x; --u) {
                                        x = this.previousItem(x)
                                    }
                                    l = l - (x ? this._rowOffsetTop(x.$n()) : r)
                                }
                            }
                        }
                        if (o == 0) {
                            l = 0
                        } else {
                            if (l == 0) {
                                l = o * this._avgrowhgh
                            }
                        }
                        c = this._totalhgh - r - l;
                        var j = c > 0 && e >= g;
                        if (j) {
                            c = 0
                        }
                        if (c < 0) {
                            j = true;
                            c = ((g - e) * this._avgrowhgh) | 0
                        }
                        if (this._topPad != l) {
                            this.fire("onTopPad", {topPad: this._topPad = l})
                        }
                        this._setPadSize(f, "tpad", l < 0 ? 0 : l);
                        this._setPadSize(n, "bpad", c < 0 ? 0 : c);
                        var i = this._viewtop;
                        if (i >= (this._avgrowhgh * g - this._bufpad) && i != z.scrollTop) {
                            z.scrollTop = this._currentTop = i
                        }
                        if (l < 0 || c < 0 || j) {
                            this._totalhgh = z.scrollHeight
                        }
                        if (!zk.mobile && zul.mesh.Scrollbar.getScrollPosV(this) != this._lasttop) {
                            this._fireOnScrollPos()
                        }
                        if (!zk.mobile && t) {
                            var A = zk.Widget.$(t);
                            if (A) {
                                this._syncFocus(A);
                                this._setFocus(A, true)
                            }
                        }
                    },
                    _selectUpto: function (o, m, i) {
                        if (!this._listbox$rod) {
                            return b._selectUpto.apply(this, arguments)
                        }
                        if (o.isSelected()) {
                            if (!i) {
                                this._focus(o)
                            }
                            return
                        }
                        var h = o._index, n = false, c = false, j = this._focusItem || this._lastSelectedItem, l = j ? j._index : -1;
                        var g;
                        if (h < l) {
                            var f = l;
                            l = h;
                            h = f;
                            g = true
                        }
                        for (var e = this.getBodyWidgetIterator(), d = this.getSelectedItem(), k; (k = e.next());) {
                            if (k.isDisabled()) {
                                continue
                            }
                            if (!n && l > -1 && k._index >= l) {
                                n = true
                            }
                            if (n) {
                                this._changeSelect(k, true);
                                if (!g && k == o) {
                                    break
                                }
                                g = false
                            } else {
                                if (c) {
                                    this._changeSelect(k, true);
                                    if (this._isFocus(k) || k == j) {
                                        break
                                    }
                                } else {
                                    if (!d) {
                                        if (k != o) {
                                            continue
                                        }
                                        this._changeSelect(k, true);
                                        break
                                    }
                                }
                            }
                            c = k._index >= h;
                            if (c && n) {
                                break
                            }
                        }
                        if (!i) {
                            this._focus(o)
                        }
                        this.fireOnSelectByRange(o, {start: l, end: h}, m)
                    },
                    fireOnSelectByRange: function (f, e, c) {
                        var g, d = true;
                        if (c) {
                            g = c.data;
                            if (this._multiple) {
                                d = (g.ctrlKey || g.metaKey) || g.shiftKey || (this._checkmark && (!this._cdo || (c.domTarget.id && c.domTarget.id.endsWith("-cm"))))
                            }
                        }
                        this.fire("onSelect", zk.copy({range: e, reference: f, clearFirst: !d}, g))
                    }
                })
            })();
            (function () {
                var c = {};

                function a(f) {
                    if (f && f.z_rod && (!f.parent || !f.parent.z_rod)) {
                        var e = f.parent;
                        if (e) {
                            f.unbind();
                            e.insertChildHTML_(f, f.nextSibling, f.desktop)
                        }
                        zUtl.fireSized(f)
                    }
                }

                function d(g) {
                    if (!g) {
                        return
                    }
                    var f, e;
                    if ((e = g.parent) && ((f = e.firstChild) != g || (f = e.lastChild) != g) && f && f.treerow && f.treerow.desktop && !f.treerow.z_rod) {
                        return
                    }
                    if (!g._rodopen) {
                        while ((g = g.parent) && !zul.sel.Tree.isInstance(g)) {
                            if (!g._rodopen && g.isOpen && !g.isOpen()) {
                                return true
                            }
                        }
                    }
                }

                function b(e) {
                    if (!e.parent || !e.parent.z_rod) {
                        if ((e = e.treechildren) && (e = e.firstChild) && e.z_rod) {
                            for (; e; e = e.nextSibling) {
                                e._rodopen = true;
                                a(e);
                                if (e.isOpen() && e.treechildren) {
                                    b(e)
                                }
                                delete e._rodopen
                            }
                        }
                    }
                }

                zk.override(zul.sel.Treeitem.molds, c.molds = {}, {
                    "default": function (e) {
                        if (zkmax.rod(this) && d(this)) {
                            this.z_rod = true;
                            return
                        }
                        c.molds["default"].apply(this, arguments)
                    }
                });
                zk.override(zul.sel.Treeitem.prototype, c, {
                    setOpen: function (e) {
                        if (e) {
                            b(this)
                        }
                        c.setOpen.apply(this, arguments)
                    }, forcerender: function () {
                        c.forcerender.apply(this, arguments);
                        b(this)
                    }
                });
                _xTreeItemIter = {};
                zk.override(zul.sel.TreeItemIter.prototype, _xTreeItemIter, {
                    _init: function () {
                        if (!this._isInit) {
                            this._isInit = true;
                            this.items = this.tree.getItems(this.opts);
                            this.length = this.items.length;
                            var e = this.tree;
                            if (e.inPagingMold()) {
                                this.cur = e.treechildren.getItemCount() - e.getPageSize()
                            } else {
                                this.cur = 0
                            }
                        }
                    }
                })
            })();
        });
        zk.afterLoad('zul.grid', function () {
            (function () {
                var a = zk.ie < 11 ? 1193046 : 16777216, b = {};
                zk.override(zul.grid.Grid.prototype, b, {
                    _firstLoad: true,
                    _totalSize: 0,
                    _avgrowhgh: 21,
                    _offset: 0,
                    _lastoffset: 0,
                    _limit: 20,
                    _bufpad: 21 * 50,
                    _loadpad: 21 * 10,
                    _viewtop: 0,
                    _lasttop: 0,
                    _totalhgh: null,
                    _rowshgh: null,
                    _topPad: 0,
                    _itop: 0,
                    _ibottom: 0,
                    $init: function () {
                        b.$init.apply(this, arguments);
                        this._padsz = {}
                    },
                    domPad_: function (c, d) {
                        if (this._grid$rod) {
                            c.push('<div id="', this.uuid, d, '" style="font-size:0px;display:none;overflow:hidden;width:1px;"></div>')
                        }
                    },
                    setResetDataLoader: function () {
                        this._currentTop = this._currentLeft = this._topPad = this._lasttop = 0;
                        this.refreshBar_(false, true);
                        if (this._nativebar && this.ebody) {
                            this.ebody.scrollTop = 0
                        }
                    },
                    setTotalSize: function (c) {
                        if (this._grid$rod) {
                            this._totalSize = c;
                            if (!this._scrolling && this.desktop) {
                                this._initPadSizes();
                                if (zk.ie < 11) {
                                    this._doScroll()
                                }
                            }
                        }
                    },
                    _fireOnScrollPos: function (c) {
                        if (this._grid$rod) {
                            if (!this.inPagingMold()) {
                                clearTimeout(this._timeoutId);
                                this._timeoutId = setTimeout(this.proxy(this._scrollPage), c >= 0 ? c : 300)
                            }
                        } else {
                            b._fireOnScrollPos.apply(this, arguments)
                        }
                    },
                    _onRender: function () {
                        if (b._onRender.apply(this, arguments)) {
                            return true
                        }
                        if (this._grid$rod && !this.inPagingMold() && this._firstLoad) {
                            this._firstLoad = false;
                            if (this.initRodSize) {
                                this._bufpad = this.initRodSize / 2 * 21
                            }
                            this._initPadSizes();
                            this.refreshBar_()
                        }
                    },
                    _setPadSize: function (g, d, f) {
                        this._padsz[d] = f;
                        var e = g.style;
                        e.display = f ? "block" : "none";
                        var c = ['<table id="', this.uuid, "-", d, '-tbl"', ">"];
                        if (!zk.webkit) {
                            while (true) {
                                c.push('<tr style="height:', Math.min(f, a), 'px"><td></td></tr>');
                                f -= a;
                                if (f <= 0) {
                                    break
                                }
                            }
                        } else {
                            while (true) {
                                c.push('<tr><td style="height:', Math.min(f, a), 'px"></td></tr>');
                                f -= a;
                                if (f <= 0) {
                                    break
                                }
                            }
                        }
                        c.push("</table>");
                        jq(g).empty().append(c.join(""))
                    },
                    _initPadSizes: function () {
                        if (this.inPagingMold()) {
                            return
                        }
                        var o, f;
                        if (!(o = this.rows) || !(f = o.$n())) {
                            return
                        }
                        var g = o.nChildren, k = this._rowshgh = f.offsetHeight, m = this._totalSize, j = this.ebody;
                        this._avgrowhgh = g > 0 ? ((k / g) | 0) : 21;
                        this._ibottom = this._offset + g;
                        if (this._topPad < 0) {
                            this._topPad = this._offset * this._avgrowhgh
                        }
                        if (this._offset == 0) {
                            this._topPad = 0
                        }
                        var c = this._topPad;
                        var i = m * this._avgrowhgh - k - c;
                        if (i < 0) {
                            if (this._offset > 0) {
                                c += i
                            }
                            i = 0;
                            if (c < 0) {
                                c = 0
                            }
                        } else {
                            if (m <= this._ibottom) {
                                i = 0
                            }
                        }
                        if (this._topPad != c) {
                            this.fire("onTopPad", {topPad: this._topPad = c})
                        }
                        this._setPadSize(this.$n("tpad"), "tpad", c);
                        this._setPadSize(this.$n("bpad"), "bpad", i);
                        this._totalhgh = j.scrollHeight;
                        this._itop = this._offset;
                        var n = j.offsetHeight;
                        this._limit = (((n + this._bufpad * 2) / this._avgrowhgh) | 0) + 2;
                        if (!this._viewtop && !this._lasttop && this._currentTop > 0) {
                            this._viewtop = this._lasttop = this._currentTop
                        }
                        if (!this._lastoffset && this._offset > 0) {
                            this._lastoffset = this._offset
                        }
                        if (this._totalSize > this._ibottom) {
                            var e = this._viewtop = this._currentTop, h = e + n, d = o.lastChild.$n(), l = d ? this._rowScrollBottom(d) : c;
                            if (h > l && this._lastoffset == this._itop) {
                                this.fire("onDataLoading", {offset: this._itop, limit: this._limit})
                            }
                        }
                        this.refreshBar_()
                    },
                    _rowScrollBottom: function (c) {
                        return c.offsetTop + c.offsetHeight - (this.ebodytbl.offsetParent == c.offsetParent ? this.ebodytbl.offsetTop : 0)
                    },
                    _rowOffsetTop: function (c) {
                        var d = this.rows.$n();
                        return c.offsetTop - (d.offsetParent == c.offsetParent ? d.offsetTop : 0)
                    },
                    _scrollPage: function () {
                        var k, q;
                        if (!(k = this.rows) || !(q = k.$n())) {
                            return
                        }
                        var r = this.ebody, f = this._viewtop = zul.mesh.Scrollbar.getScrollPosV(this), t = f + r.offsetHeight;
                        var g = this._padsz.tpad, n = this._lasttop, u = g, o = this._rowshgh = q.offsetHeight, h = u + o;
                        if (f != n) {
                            var v = f - this._bufpad, s = t + this._bufpad, l = f - this._loadpad, i = t + this._loadpad;
                            if (v < 0) {
                                v = 0
                            }
                            if (l < 0) {
                                l = 0
                            }
                            if (s > this._totalhgh) {
                                s = this._totalhgh - (zk.ie < 11 ? 1 : 0)
                            }
                            if (i > this._totalhgh) {
                                i = this._totalhgh - (zk.ie < 11 ? 1 : 0)
                            }
                            if (f > n) {
                                if (h < i) {
                                    var d = this._itop;
                                    if (h < v) {
                                        d = this._ibottom + (((v - h) / this._avgrowhgh) | 0)
                                    } else {
                                        var c = v - g;
                                        if (c >= 0) {
                                            var p = this._ibottom - 1;
                                            d = 0;
                                            for (var e = k.lastChild; e; e = e.previousSibling, --p) {
                                                var m = this._rowOffsetTop(e.$n());
                                                if (m < c) {
                                                    d = p;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    if (d >= this._totalSize) {
                                        d = this._totalSize - this._limit
                                    }
                                    if (d < 0 || f == 0) {
                                        d = 0
                                    }
                                    if (d != this._lastoffset || (this._totalSize > this._ibottom && k.nChildren < this._limit)) {
                                        this._lastoffset = d;
                                        this._lasttop = f;
                                        this.fire("onDataLoading", {
                                            offset: d,
                                            limit: this._limit
                                        }, {rtags: {onDataLoading: 1}})
                                    }
                                }
                            } else {
                                if (u >= l || (v == 0 && this._lastoffset > 0)) {
                                    var d = v == 0 ? 0 : (this._itop - ((u - v) / this._avgrowhgh) | 0);
                                    if (d >= this._totalSize) {
                                        d = this._totalSize - this._limit
                                    }
                                    if (d < 0) {
                                        d = 0
                                    }
                                    if (d != this._lastoffset) {
                                        this._lastoffset = d;
                                        this._lasttop = f;
                                        this.fire("onDataLoading", {
                                            offset: d,
                                            limit: this._limit
                                        }, {rtags: {onDataLoading: 1}})
                                    }
                                }
                            }
                        }
                        this._currentTop = f;
                        this.fire("onScrollPos", {top: this._currentTop, left: this._currentLeft})
                    },
                    setScrollPads_: function (o) {
                        delete this._scrolling;
                        if (!this._grid$rod || o != this._lastoffset) {
                            return
                        }
                        this._inScrollPads = true;
                        var m, u;
                        if (!(m = this.rows) || !(u = m.$n())) {
                            return
                        }
                        var f = this.$n("tpad"), n = this.$n("bpad"), l = this._padsz.tpad, c = this._padsz.bpad, p = this._rowshgh, r = this._itop, d = this._ibottom, q = this._rowshgh = u.offsetHeight, g = this._totalSize, h = this._itop = o, e = this._ibottom = h + m.nChildren, w = this.ebody;
                        if (h > r) {
                            if (h >= d) {
                                l = l + p + ((o - d) * this._avgrowhgh | 0)
                            } else {
                                var t = m.firstChild;
                                for (var s = h; s < d && t; ++s) {
                                    t = t.nextSibling
                                }
                                l = l + p - (t ? this._rowOffsetTop(t.$n()) : q)
                            }
                        } else {
                            if (h < r) {
                                if (e <= r) {
                                    l = l - ((r - o) * this._avgrowhgh | 0)
                                } else {
                                    var t = m.lastChild;
                                    for (var s = e - 1; s > r && t; --s) {
                                        t = t.previousSibling
                                    }
                                    l = l - (t ? this._rowOffsetTop(t.$n()) : q)
                                }
                            }
                        }
                        if (o == 0) {
                            l = 0
                        } else {
                            if (l == 0) {
                                l = o * this._avgrowhgh
                            }
                        }
                        c = this._totalhgh - q - l;
                        var j = c > 0 && e >= g;
                        if (j) {
                            c = 0
                        }
                        if (c < 0) {
                            j = true;
                            c = ((g - e) * this._avgrowhgh) | 0
                        }
                        if (this._topPad != l) {
                            this.fire("onTopPad", {topPad: this._topPad = l})
                        }
                        this._setPadSize(f, "tpad", l < 0 ? 0 : l);
                        this._setPadSize(n, "bpad", c < 0 ? 0 : c);
                        var i = this._viewtop;
                        if (i >= (this._avgrowhgh * g - this._bufpad) && i != w.scrollTop) {
                            w.scrollTop = this._currentTop = i
                        }
                        if (l < 0 || c < 0 || j) {
                            this._totalhgh = w.scrollHeight
                        }
                        if (!zk.mobile && zul.mesh.Scrollbar.getScrollPosV(this) != this._lasttop) {
                            this._fireOnScrollPos()
                        }
                    }
                })
            })();
        });
        zk.afterLoad('zkex.grid', function () {
        });
        zk.afterLoad('zul.wnd', function () {
            (function () {
                var a = {};

                function b(c) {
                    if (c = c.panelchildren) {
                        zkmax.rodRender(c)
                    }
                }

                zk.override(zul.wnd.Panelchildren.molds, a.molds = {}, {
                    "default": function (c) {
                        if (this._rodopen) {
                            delete this._rodopen
                        } else {
                            var d;
                            if ((d = this.parent) && !d._open && zkmax.rod(this)) {
                                this.z_rod = true;
                                c.push('<div id="', this.uuid, '" style="display:none"></div>');
                                return
                            }
                        }
                        a.molds["default"].apply(this, arguments)
                    }
                });
                zk.override(zul.wnd.Panel.prototype, a, {
                    setOpen: function (c) {
                        if (c) {
                            b(this)
                        }
                        a.setOpen.apply(this, arguments)
                    }, forcerender: function () {
                        a.forcerender.apply(this, arguments);
                        b(this)
                    }
                })
            })();
        });
        zk.afterLoad('zkex.cmsp', function () {
            zkmax.cmsp = {
                start: zkex.cmsp.start, stop: zkex.cmsp.stop, cometURI: function (a) {
                    return zk.ajaxURI("/zkcomet?dtid=" + a.id, {desktop: a})
                }
            };
        });
        zk.afterLoad('zul.layout', function () {
            (function () {
                var b = {}, a = {};
                zk.override(zul.layout.LayoutRegion.prototype, b, {
                    onChildAdded_: function (c) {
                        if (zk.isLoaded("zul.wgt") && c.$instanceof(zul.wgt.Caption)) {
                            this.caption = c
                        }
                        b.onChildAdded_.apply(this, arguments)
                    }, onChildRemoved_: function (c) {
                        if (c == this.caption) {
                            this.caption = null
                        }
                        b.onChildRemoved_.apply(this, arguments)
                    }, titleRenderer_: function (c) {
                        if (this.caption) {
                            var e = this.uuid, f = this.getPosition() != zul.layout.Borderlayout.CENTER, d = this.parent;
                            c.push('<div id="', e, '-cap" class="', this.$s("header"), '">');
                            if (f) {
                                c.push('<i id="', e, '-btn" class="', d.$s("icon"), " ", this.getIconClass_(), '"');
                                if (!this._collapsible) {
                                    c.push(' style="display:none;"')
                                }
                                c.push("></i>")
                            }
                            c.push('<div id="', e, '-capcnt" class="', this.$s("caption"), '">');
                            this.caption.redraw(c);
                            c.push("</div></div>")
                        } else {
                            b.titleRenderer_.apply(this, arguments)
                        }
                    }, getFirstChild: function () {
                        return this.caption ? this.lastChild != this.firstChild ? this.lastChild : null : this.firstChild
                    }
                });
                zk.override(zul.layout.Borderlayout.prototype, a, {
                    _resizeBody: function (h, c) {
                        if (h.caption) {
                            var e = h.$n("cap"), f = e.lastChild.style
                        }
                        a._resizeBody.apply(this, arguments);
                        if (h.caption) {
                            var e = h.$n("cap"), d = h.$n("btn"), g = zk(e);
                            wdh = g.revisedWidth(e.offsetWidth) - (d ? d.offsetWidth : 0) - (Math.round(zk.parseFloat(g.jq.css("padding-right"))));
                            var f = e.lastChild.style;
                            f.width = jq.px0(wdh);
                            f.height = ""
                        }
                    }
                })
            })();
        });
        zk.afterLoad('zkex.inp', function () {
        });
        zk.afterLoad('zul.box', function () {
        });
        zk.afterLoad('zkmax.inp', function () {
        });
        zk.afterLoad('zkmax.big', function () {
        });
        zk.afterLoad('zkmax.layout', function () {
        });
        zk.afterLoad('zkmax.nav', function () {
        });
        zk.afterLoad('zul.utl', function () {
        });

    } finally {
        zk.setLoaded(zk._p.n);
    }
})();