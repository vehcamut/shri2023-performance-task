/*! For license information please see main.cc126b1b.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, n, t) {
        var r = t(791),
          l = t(296);
        function a(e) {}
        var i = new Set(),
          o = {};
        function u(e, n) {
          s(e, n), s(e + "Capture", n);
        }
        function s(e, n) {
          for (o[e] = n, e = 0; e < n.length; e++) i.add(n[e]);
        }
        var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
          f = Object.prototype.hasOwnProperty,
          d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, n, t, r, l, a, i) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = r),
            (this.attributeNamespace = l),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
          v[e] = new m(e, 0, !1, e, null, !1, !1);
        }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var n = e[0];
            v[n] = new m(n, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, n, t, r) {
          var l = v.hasOwnProperty(n) ? v[n] : null;
          (null !== l ? 0 !== l.type : r || !(2 < n.length) || ("o" !== n[0] && "O" !== n[0]) || ("n" !== n[1] && "N" !== n[1])) &&
            ((function (e, n, t, r) {
              if (
                null === n ||
                "undefined" === typeof n ||
                (function (e, n, t, r) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                      return !1;
                  }
                })(e, n, t, r)
              )
                return !0;
              if (r) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, l, r) && (t = null),
            r || null === l
              ? (function (e) {
                  return !!f.call(h, e) || (!f.call(p, e) && (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)));
                })(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
              : l.mustUseProperty
              ? (e[l.propertyName] = null === t ? 3 !== l.type && "" : t)
              : ((n = l.attributeName), (r = l.attributeNamespace), null === t ? e.removeAttribute(n) : ((t = 3 === (l = l.type) || (4 === l && !0 === t) ? "" : "" + t), r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(g, y);
            v[n] = new m(n, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var n = e.replace(g, y);
            v[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(g, y);
            v[n] = new m(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var R = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function D(e) {}
        var j,
          F = Object.assign;
        function I(e) {}
        var U = !1;
        function A(e, n) {}
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {}
        function Q(e) {}
        function q(e) {}
        function K(e) {
          if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function X(e, n) {}
        function Y(e, n) {}
        function G(e, n) {}
        function Z(e, n) {}
        function J(e, n, t) {}
        function ee(e, n, t) {}
        var ne = Array.isArray;
        function te(e, n, t, r) {
          if (((e = e.options), n)) {
            n = {};
            for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
            for (t = 0; t < e.length; t++) (l = n.hasOwnProperty("$" + e[t].value)), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
          } else {
            for (t = "" + H(t), n = null, l = 0; l < e.length; l++) {
              if (e[l].value === t) return (e[l].selected = !0), void (r && (e[l].defaultSelected = !0));
              null !== n || e[l].disabled || (n = e[l]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function re(e, n) {}
        function le(e, n) {}
        function ae(e, n) {}
        function ie(e) {}
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, n) {
          return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, n) {}),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, r) {}
              : ce);
        function de(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType) return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
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
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, n, t) {}
        function ve(e, n) {}
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (pe[n] = pe[e]);
          });
        });
        var ge = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function ye(e, n) {
          if (n) {
            if (ge[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(a(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(a(60));
              if ("object" !== typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML)) throw Error(a(61));
            }
            if (null != n.style && "object" !== typeof n.style) throw Error(a(62));
          }
        }
        function be(e, n) {
          if (-1 === e.indexOf("-")) return "string" === typeof n.is;
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
        var ke = null;
        function we(e) {
          return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
        }
        var Se = null,
          _e = null,
          xe = null;
        function Ee(e) {}
        function Ce(e) {}
        function Ne() {}
        function Pe(e, n) {}
        function Le() {}
        var ze = !1;
        function Te(e, n, t) {
          if (ze) return e(n, t);
          ze = !0;
          try {
            return Pe(e, n, t);
          } finally {
            (ze = !1), (null !== _e || null !== xe) && (Le(), Ne());
          }
        }
        function Oe(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var r = wl(t);
          if (null === r) return null;
          t = r[n];
          e: switch (n) {
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
              (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && "function" !== typeof t) throw Error(a(231, n, typeof t));
          return t;
        }
        var Re = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Re = !1;
          }
        function De(e, n, t, r, l, a, i, o, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Fe = null,
          Ie = !1,
          Ue = null,
          Ae = {
            onError: function (e) {},
          };
        function Ve(e, n, t, r, l, a, i, o, u) {
          (je = !1), (Fe = null), De.apply(Ae, arguments);
        }
        function $e(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 !== (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function Be(e) {}
        function He(e) {}
        function We(e) {}
        function Qe(e) {}
        var qe = l.unstable_scheduleCallback,
          Ke = l.unstable_cancelCallback,
          Xe = l.unstable_shouldYield,
          Ye = l.unstable_requestPaint,
          Ge = l.unstable_now,
          Ze = l.unstable_getCurrentPriorityLevel,
          Je = l.unstable_ImmediatePriority,
          en = l.unstable_UserBlockingPriority,
          nn = l.unstable_NormalPriority,
          tn = l.unstable_LowPriority,
          rn = l.unstable_IdlePriority,
          ln = null,
          an = null;
        var on = Math.clz32
            ? Math.clz32
            : function (e) {},
          un = Math.log,
          sn = Math.LN2;
        var cn = 64,
          fn = 4194304;
        function dn(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var r = 0,
            l = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & t;
          if (0 !== i) {
            var o = i & ~l;
            0 !== o ? (r = dn(o)) : 0 !== (a &= i) && (r = dn(a));
          } else 0 !== (i = t & ~l) ? (r = dn(i)) : 0 !== a && (r = dn(a));
          if (0 === r) return 0;
          if (0 !== n && n !== r && 0 === (n & l) && ((l = r & -r) >= (a = n & -n) || (16 === l && 0 !== (4194240 & a)))) return n;
          if ((0 !== (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes))) for (e = e.entanglements, n &= r; 0 < n; ) (l = 1 << (t = 31 - on(n))), (r |= e[t]), (n &= ~l);
          return r;
        }
        function hn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
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
              return n + 5e3;
            default:
              return -1;
          }
        }
        function mn(e) {}
        function vn() {}
        function gn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function yn(e, n, t) {
          (e.pendingLanes |= n), 536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), ((e = e.eventTimes)[(n = 31 - on(n))] = t);
        }
        function bn(e, n) {}
        var kn = 0;
        function wn(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var Sn,
          _n,
          xn,
          En,
          Cn,
          Nn = !1,
          Pn = [],
          Ln = null,
          zn = null,
          Tn = null,
          On = new Map(),
          Rn = new Map(),
          Mn = [],
          Dn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
        function jn(e, n) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ln = null;
              break;
            case "dragenter":
            case "dragleave":
              zn = null;
              break;
            case "mouseover":
            case "mouseout":
              Tn = null;
              break;
            case "pointerover":
            case "pointerout":
              On.delete(n.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rn.delete(n.pointerId);
          }
        }
        function Fn(e, n, t, r, l, a) {}
        function In(e) {}
        function Un(e) {}
        function An(e, n, t) {}
        function Vn() {}
        function $n(e, n) {}
        function Bn(e) {}
        var Hn = k.ReactCurrentBatchConfig,
          Wn = !0;
        function Qn(e, n, t, r) {
          var l = kn,
            a = Hn.transition;
          Hn.transition = null;
          try {
            (kn = 1), Kn(e, n, t, r);
          } finally {
            (kn = l), (Hn.transition = a);
          }
        }
        function qn(e, n, t, r) {
          var l = kn,
            a = Hn.transition;
          Hn.transition = null;
          try {
            (kn = 4), Kn(e, n, t, r);
          } finally {
            (kn = l), (Hn.transition = a);
          }
        }
        function Kn(e, n, t, r) {
          if (Wn) {
            var l = Yn(e, n, t, r);
            if (null === l) Hr(e, n, r, Xn, t), jn(e, r);
            else if (
              (function (e, n, t, r, l) {})(l, e, n, t, r)
            )
              r.stopPropagation();
            else if ((jn(e, r), 4 & n && -1 < Dn.indexOf(e))) {
              for (; null !== l; ) {
                var a = bl(l);
                if ((null !== a && Sn(a), null === (a = Yn(e, n, t, r)) && Hr(e, n, r, Xn, t), a === l)) break;
                l = a;
              }
              null !== l && r.stopPropagation();
            } else Hr(e, n, r, null, t);
          }
        }
        var Xn = null;
        function Yn(e, n, t, r) {
          if (((Xn = null), null !== (e = yl((e = we(r))))))
            if (null === (n = $e(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = Be(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated) return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (Xn = e), null;
        }
        function Gn(e) {
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
              switch (Ze()) {
                case Je:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case rn:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zn = null,
          Jn = null,
          et = null;
        function nt() {}
        function tt(e) {}
        function rt() {}
        function lt() {
          return !1;
        }
        function at(e) {
          function n(n, t, r, l, a) {
            for (var i in ((this._reactName = n), (this._targetInst = r), (this.type = t), (this.nativeEvent = l), (this.target = a), (this.currentTarget = null), e)) e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
            return (this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? rt : lt), (this.isPropagationStopped = lt), this;
          }
          return (
            F(n.prototype, {
              preventDefault: function () {},
              stopPropagation: function () {},
              persist: function () {},
              isPersistent: rt,
            }),
            n
          );
        }
        var it,
          ot,
          ut,
          st = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ct = at(st),
          ft = F({}, st, { view: 0, detail: 0 }),
          dt = at(ft),
          pt = F({}, ft, {
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
            getModifierState: Et,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e ? e.movementX : (e !== ut && (ut && "mousemove" === e.type ? ((it = e.screenX - ut.screenX), (ot = e.screenY - ut.screenY)) : (ot = it = 0), (ut = e)), it);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ot;
            },
          }),
          ht = at(pt),
          mt = at(F({}, pt, { dataTransfer: 0 })),
          vt = at(F({}, ft, { relatedTarget: 0 })),
          gt = at(F({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          yt = F({}, st, {
            clipboardData: function (e) {},
          }),
          bt = at(yt),
          kt = at(F({}, st, { data: 0 })),
          wt = {
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
          St = {
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
          _t = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function xt(e) {}
        function Et() {
          return xt;
        }
        var Ct = F({}, ft, {
            key: function (e) {},
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Et,
            charCode: function (e) {},
            keyCode: function (e) {},
            which: function (e) {},
          }),
          Nt = at(Ct),
          Pt = at(F({}, pt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
          Lt = at(F({}, ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Et })),
          zt = at(F({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Tt = F({}, pt, {
            deltaX: function (e) {},
            deltaY: function (e) {},
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ot = at(Tt),
          Rt = [9, 13, 27, 32],
          Mt = c && "CompositionEvent" in window,
          Dt = null;
        c && "documentMode" in document && (Dt = document.documentMode);
        var jt = c && "TextEvent" in window && !Dt,
          Ft = c && (!Mt || (Dt && 8 < Dt && 11 >= Dt)),
          It = String.fromCharCode(32),
          Ut = !1;
        function At(e, n) {}
        function Vt(e) {}
        var $t = !1;
        var Bt = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function Ht(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === n ? !!Bt[e.type] : "textarea" === n;
        }
        function Wt(e, n, t, r) {}
        var Qt = null,
          qt = null;
        function Kt(e) {}
        function Xt(e) {}
        function Yt(e, n) {}
        var Gt = !1;
        if (c) {
          var Zt;
          if (c) {
            var Jt = "oninput" in document;
            if (!Jt) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"), (Jt = "function" === typeof er.oninput);
            }
            Zt = Jt;
          } else Zt = !1;
          Gt = Zt && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {}
        function tr(e) {}
        function rr(e, n, t) {}
        function lr(e) {}
        function ar(e, n) {}
        function ir(e, n) {}
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, n) {};
        function ur(e, n) {}
        function sr(e) {}
        function cr(e, n) {}
        function fr(e, n) {}
        function dr() {
          for (var e = window, n = K(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = "string" === typeof n.contentWindow.location.href;
            } catch (r) {
              t = !1;
            }
            if (!t) break;
            n = K((e = n.contentWindow).document);
          }
          return n;
        }
        function pr(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return n && (("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === n || "true" === e.contentEditable);
        }
        function hr(e) {
          var n = dr(),
            t = e.focusedElem,
            r = e.selectionRange;
          if (n !== t && t && t.ownerDocument && fr(t.ownerDocument.documentElement, t)) {
            if (null !== r && pr(t))
              if (((n = r.start), void 0 === (e = r.end) && (e = n), "selectionStart" in t)) (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
              else if ((e = ((n = t.ownerDocument || document) && n.defaultView) || window).getSelection) {
                e = e.getSelection();
                var l = t.textContent.length,
                  a = Math.min(r.start, l);
                (r = void 0 === r.end ? a : Math.min(r.end, l)), !e.extend && a > r && ((l = r), (r = a), (a = l)), (l = cr(t, a));
                var i = cr(t, r);
                l &&
                  i &&
                  (1 !== e.rangeCount || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) &&
                  ((n = n.createRange()).setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); ) 1 === e.nodeType && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" === typeof t.focus && t.focus(), t = 0; t < n.length; t++) ((e = n[t]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function kr(e, n, t) {
          var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = { anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }),
            (yr && ur(yr, r)) || ((yr = r), 0 < (r = Qr(gr, "onSelect")).length && ((n = new ct("onSelect", "select", null, n, t)), e.push({ event: n, listeners: r }), (n.target = vr))));
        }
        function wr(e, n) {
          var t = {};
          return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t;
        }
        var Sr = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") },
          _r = {},
          xr = {};
        function Er(e) {
          if (_r[e]) return _r[e];
          if (!Sr[e]) return e;
          var n,
            t = Sr[e];
          for (n in t) if (t.hasOwnProperty(n) && n in xr) return (_r[e] = t[n]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Cr = Er("animationend"),
          Nr = Er("animationiteration"),
          Pr = Er("animationstart"),
          Lr = Er("transitionend"),
          zr = new Map(),
          Tr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
          );
        function Or(e, n) {
          zr.set(e, n), u(n, [e]);
        }
        for (var Rr = 0; Rr < Tr.length; Rr++) {
          var Mr = Tr[Rr];
          Or(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Or(Cr, "onAnimationEnd"),
          Or(Nr, "onAnimationIteration"),
          Or(Pr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Lr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
          u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
          u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
          u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
          u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
          jr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
        function Fr(e, n, t) {
          var r = e.type || "unknown-event";
          (e.currentTarget = t),
            (function (e, n, t, r, l, i, o, u, s) {
              if ((Ve.apply(this, arguments), je)) {
                if (!je) throw Error(a(198));
                var c = Fe;
                (je = !1), (Fe = null), Ie || ((Ie = !0), (Ue = c));
              }
            })(r, n, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, n) {
          n = 0 !== (4 & n);
          for (var t = 0; t < e.length; t++) {
            var r = e[t],
              l = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (n)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    u = o.instance,
                    s = o.currentTarget;
                  if (((o = o.listener), u !== a && l.isPropagationStopped())) break e;
                  Fr(l, o, s), (a = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (((u = (o = r[i]).instance), (s = o.currentTarget), (o = o.listener), u !== a && l.isPropagationStopped())) break e;
                  Fr(l, o, s), (a = u);
                }
            }
          }
          if (Ie) throw ((e = Ue), (Ie = !1), (Ue = null), e);
        }
        function Ur(e, n) {
          var t = n[ml];
          void 0 === t && (t = n[ml] = new Set());
          var r = e + "__bubble";
          t.has(r) || (Br(n, e, 2, !1), t.add(r));
        }
        function Ar(e, n, t) {
          var r = 0;
          n && (r |= 4), Br(t, e, r, n);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              i.forEach(function (n) {
                "selectionchange" !== n && (jr.has(n) || Ar(n, !1, e), Ar(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[Vr] || ((n[Vr] = !0), Ar("selectionchange", !1, n));
          }
        }
        function Br(e, n, t, r) {
          switch (Gn(n)) {
            case 1:
              var l = Qn;
              break;
            case 4:
              l = qn;
              break;
            default:
              l = Kn;
          }
          (t = l.bind(null, n, t, e)),
            (l = void 0),
            !Re || ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) || (l = !0),
            r ? (void 0 !== l ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0)) : void 0 !== l ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
        }
        function Hr(e, n, t, r, l) {
          var a = r;
          if (0 === (1 & n) && 0 === (2 & n) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === l || (8 === o.nodeType && o.parentNode === l)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === l || (8 === u.nodeType && u.parentNode === l))) return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = yl(o))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = a = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Te(function () {
            var r = a,
              l = we(t),
              i = [];
            e: {
              var o = zr.get(e);
              if (void 0 !== o) {
                var u = ct,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tt(t)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nt;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vt);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vt);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vt;
                    break;
                  case "click":
                    if (2 === t.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = ht;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mt;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Lt;
                    break;
                  case Cr:
                  case Nr:
                  case Pr:
                    u = gt;
                    break;
                  case Lr:
                    u = zt;
                    break;
                  case "scroll":
                    u = dt;
                    break;
                  case "wheel":
                    u = Ot;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bt;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pt;
                }
                var c = 0 !== (4 & n),
                  f = !c && "scroll" === e,
                  d = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if ((5 === p.tag && null !== m && ((p = m), null !== d && null != (m = Oe(h, d)) && c.push(Wr(h, m, p))), f)) break;
                  h = h.return;
                }
                0 < c.length && ((o = new u(o, s, null, t, l)), i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & n)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) || t === ke || !(s = t.relatedTarget || t.fromElement) || (!yl(s) && !s[hl])) &&
                  (u || o) &&
                  ((o = l.window === l ? l : (o = l.ownerDocument) ? o.defaultView || o.parentWindow : window),
                  u ? ((u = r), null !== (s = (s = t.relatedTarget || t.toElement) ? yl(s) : null) && (s !== (f = $e(s)) || (5 !== s.tag && 6 !== s.tag)) && (s = null)) : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = ht),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) || ((c = Pt), (m = "onPointerLeave"), (d = "onPointerEnter"), (h = "pointer")),
                  (f = null == u ? o : kl(u)),
                  (p = null == s ? o : kl(s)),
                  ((o = new c(m, h + "leave", u, t, l)).target = f),
                  (o.relatedTarget = p),
                  (m = null),
                  yl(l) === r && (((c = new c(d, h + "enter", s, t, l)).target = p), (c.relatedTarget = f), (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(i, o, u, c, !1), null !== s && null !== f && Kr(i, f, s, c, !0);
              }
              if ("select" === (u = (o = r ? kl(r) : window).nodeName && o.nodeName.toLowerCase()) || ("input" === u && "file" === o.type)) var v = Yt;
              else if (Ht(o))
                if (Gt) v = ir;
                else {
                  v = lr;
                  var g = rr;
                }
              else (u = o.nodeName) && "input" === u.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (v = ar);
              switch ((v && (v = v(e, r)) ? Wt(i, v, t, l) : (g && g(e, o, r), "focusout" === e && (g = o._wrapperState) && g.controlled && "number" === o.type && ee(o, "number", o.value)), (g = r ? kl(r) : window), e)) {
                case "focusin":
                  (Ht(g) || "true" === g.contentEditable) && ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), kr(i, t, l);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  kr(i, t, l);
              }
              var y;
              if (Mt)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else $t ? At(e, t) && (b = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (b = "onCompositionStart");
              b &&
                (Ft && "ko" !== t.locale && ($t || "onCompositionStart" !== b ? "onCompositionEnd" === b && $t && (y = nt()) : ((Jn = "value" in (Zn = l) ? Zn.value : Zn.textContent), ($t = !0))),
                0 < (g = Qr(r, b)).length && ((b = new kt(b, e, null, t, l)), i.push({ event: b, listeners: g }), y ? (b.data = y) : null !== (y = Vt(t)) && (b.data = y))),
                (y = jt
                  ? (function (e, n) {
                      switch (e) {
                        case "compositionend":
                          return Vt(n);
                        case "keypress":
                          return 32 !== n.which ? null : ((Ut = !0), It);
                        case "textInput":
                          return (e = n.data) === It && Ut ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {})(e, t)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((l = new kt("onBeforeInput", "beforeinput", null, t, l)), i.push({ event: l, listeners: r }), (l.data = y));
            }
            Ir(i, n);
          });
        }
        function Wr(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function Qr(e, n) {}
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, n, t, r, l) {
          for (var a = n._reactName, i = []; null !== t && t !== r; ) {
            var o = t,
              u = o.alternate,
              s = o.stateNode;
            if (null !== u && u === r) break;
            5 === o.tag && null !== s && ((o = s), l ? null != (u = Oe(t, a)) && i.unshift(Wr(t, u, o)) : l || (null != (u = Oe(t, a)) && i.push(Wr(t, u, o)))), (t = t.return);
          }
          0 !== i.length && e.push({ event: n, listeners: i });
        }
        var Xr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Gr(e) {}
        function Zr(e, n, t) {}
        function Jr() {}
        var el = null,
          nl = null;
        function tl(e, n) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof n.children ||
            "number" === typeof n.children ||
            ("object" === typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var rl = "function" === typeof setTimeout ? setTimeout : void 0,
          ll = "function" === typeof clearTimeout ? clearTimeout : void 0,
          al = "function" === typeof Promise ? Promise : void 0,
          il =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof al
              ? function (e) {
                  return al.resolve(null).then(e).catch(ol);
                }
              : rl;
        function ol(e) {}
        function ul(e, n) {}
        function sl(e) {}
        function cl(e) {}
        var fl = Math.random().toString(36).slice(2),
          dl = "__reactFiber$" + fl,
          pl = "__reactProps$" + fl,
          hl = "__reactContainer$" + fl,
          ml = "__reactEvents$" + fl,
          vl = "__reactListeners$" + fl,
          gl = "__reactHandles$" + fl;
        function yl(e) {
          var n = e[dl];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[hl] || t[dl])) {
              if (((t = n.alternate), null !== n.child || (null !== t && null !== t.child)))
                for (e = cl(e); null !== e; ) {
                  if ((t = e[dl])) return t;
                  e = cl(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function bl(e) {}
        function kl(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function wl(e) {
          return e[pl] || null;
        }
        var Sl = [],
          _l = -1;
        function xl(e) {
          return { current: e };
        }
        function El(e) {
          0 > _l || ((e.current = Sl[_l]), (Sl[_l] = null), _l--);
        }
        function Cl(e, n) {
          _l++, (Sl[_l] = e.current), (e.current = n);
        }
        var Nl = {},
          Pl = xl(Nl),
          Ll = xl(!1),
          zl = Nl;
        function Tl(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Nl;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
          var l,
            a = {};
          for (l in t) a[l] = n[l];
          return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n), (e.__reactInternalMemoizedMaskedChildContext = a)), a;
        }
        function Ol(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Rl() {}
        function Ml(e, n, t) {
          if (Pl.current !== Nl) throw Error(a(168));
          Cl(Pl, n), Cl(Ll, t);
        }
        function Dl(e, n, t) {}
        function jl(e) {}
        function Fl(e, n, t) {}
        var Il = null,
          Ul = !1,
          Al = !1;
        function Vl(e) {
          null === Il ? (Il = [e]) : Il.push(e);
        }
        function $l() {
          if (!Al && null !== Il) {
            Al = !0;
            var e = 0,
              n = kn;
            try {
              var t = Il;
              for (kn = 1; e < t.length; e++) {
                var r = t[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Il = null), (Ul = !1);
            } catch (l) {
              throw (null !== Il && (Il = Il.slice(e + 1)), qe(Je, $l), l);
            } finally {
              (kn = n), (Al = !1);
            }
          }
          return null;
        }
        var Bl = [],
          Hl = 0,
          Wl = null,
          Ql = 0,
          ql = [],
          Kl = 0,
          Xl = null,
          Yl = 1,
          Gl = "";
        function Zl(e, n) {}
        function Jl(e, n, t) {}
        function ea(e) {}
        function na(e) {
          for (; e === Wl; ) (Wl = Bl[--Hl]), (Bl[Hl] = null), (Ql = Bl[--Hl]), (Bl[Hl] = null);
          for (; e === Xl; ) (Xl = ql[--Kl]), (ql[Kl] = null), (Gl = ql[--Kl]), (ql[Kl] = null), (Yl = ql[--Kl]), (ql[Kl] = null);
        }
        var ta = null,
          ra = null,
          la = !1,
          aa = null;
        function ia(e, n) {}
        function oa(e, n) {}
        function ua(e) {}
        function sa(e) {
          if (la) {
            var n = ra;
            if (n) {
              var t = n;
              if (!oa(e, n)) {
                if (ua(e)) throw Error(a(418));
                n = sl(t.nextSibling);
                var r = ta;
                n && oa(e, n) ? ia(r, t) : ((e.flags = (-4097 & e.flags) | 2), (la = !1), (ta = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (la = !1), (ta = e);
            }
          }
        }
        function ca(e) {}
        function fa(e) {
          if (e !== ta) return !1;
          if (!la) return ca(e), (la = !0), !1;
          var n;
          if (((n = 3 !== e.tag) && !(n = 5 !== e.tag) && (n = "head" !== (n = e.type) && "body" !== n && !tl(e.type, e.memoizedProps)), n && (n = ra))) {
            if (ua(e)) throw (da(), Error(a(418)));
            for (; n; ) ia(e, n), (n = sl(n.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ("/$" === t) {
                    if (0 === n) {
                      ra = sl(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = ta ? sl(e.stateNode.nextSibling) : null;
          return !0;
        }
        function da() {}
        function pa() {
          (ra = ta = null), (la = !1);
        }
        function ha(e) {}
        var ma = k.ReactCurrentBatchConfig;
        function va(e, n) {}
        var ga = xl(null),
          ya = null,
          ba = null,
          ka = null;
        function wa() {
          ka = ba = ya = null;
        }
        function Sa(e) {}
        function _a(e, n, t) {}
        function xa(e, n) {
          (ya = e), (ka = ba = null), null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & n) && (ko = !0), (e.firstContext = null));
        }
        function Ea(e) {}
        var Ca = null;
        function Na(e) {
          null === Ca ? (Ca = [e]) : Ca.push(e);
        }
        function Pa(e, n, t, r) {
          var l = n.interleaved;
          return null === l ? ((t.next = t), Na(n)) : ((t.next = l.next), (l.next = t)), (n.interleaved = t), La(e, r);
        }
        function La(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; ) (e.childLanes |= n), null !== (t = e.alternate) && (t.childLanes |= n), (t = e), (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var za = !1;
        function Ta(e) {
          e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
        }
        function Oa(e, n) {
          (e = e.updateQueue), n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
        }
        function Ra(e, n) {
          return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
        }
        function Ma(e, n, t) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Lu))) {
            var l = r.pending;
            return null === l ? (n.next = n) : ((n.next = l.next), (l.next = n)), (r.pending = n), La(e, t);
          }
          return null === (l = r.interleaved) ? ((n.next = n), Na(r)) : ((n.next = l.next), (l.next = n)), (r.interleaved = n), La(e, t);
        }
        function Da(e, n, t) {
          if (null !== (n = n.updateQueue) && ((n = n.shared), 0 !== (4194240 & t))) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        function ja(e, n) {}
        function Fa(e, n, t, r) {
          var l = e.updateQueue;
          za = !1;
          var a = l.firstBaseUpdate,
            i = l.lastBaseUpdate,
            o = l.shared.pending;
          if (null !== o) {
            l.shared.pending = null;
            var u = o,
              s = u.next;
            (u.next = null), null === i ? (a = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c && (o = (c = c.updateQueue).lastBaseUpdate) !== i && (null === o ? (c.firstBaseUpdate = s) : (o.next = s), (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var f = l.baseState;
            for (i = 0, c = s = u = null, o = a; ; ) {
              var d = o.lane,
                p = o.eventTime;
              if ((r & d) === d) {
                null !== c && (c = c.next = { eventTime: p, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
                e: {
                  var h = e,
                    m = o;
                  switch (((d = n), (p = t), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (null === (d = "function" === typeof (h = m.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      za = !0;
                  }
                }
                null !== o.callback && 0 !== o.lane && ((e.flags |= 64), null === (d = l.effects) ? (l.effects = [o]) : d.push(o));
              } else (p = { eventTime: p, lane: d, tag: o.tag, payload: o.payload, callback: o.callback, next: null }), null === c ? ((s = c = p), (u = f)) : (c = c.next = p), (i |= d);
              if (null === (o = o.next)) {
                if (null === (o = l.shared.pending)) break;
                (o = (d = o).next), (d.next = null), (l.lastBaseUpdate = d), (l.shared.pending = null);
              }
            }
            if ((null === c && (u = f), (l.baseState = u), (l.firstBaseUpdate = s), (l.lastBaseUpdate = c), null !== (n = l.shared.interleaved))) {
              l = n;
              do {
                (i |= l.lane), (l = l.next);
              } while (l !== n);
            } else null === a && (l.shared.lanes = 0);
            (Fu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Ia(e, n, t) {}
        var Ua = new r.Component().refs;
        function Aa(e, n, t, r) {}
        var Va = {
          isMounted: function (e) {},
          enqueueSetState: function (e, n, t) {},
          enqueueReplaceState: function (e, n, t) {},
          enqueueForceUpdate: function (e, n) {},
        };
        function $a(e, n, t, r, l, a, i) {}
        function Ba(e, n, t) {}
        function Ha(e, n, t, r) {}
        function Wa(e, n, t, r) {}
        function Qa(e, n, t) {
          if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(a(309));
                var r = t.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var l = r,
                i = "" + e;
              return null !== n && null !== n.ref && "function" === typeof n.ref && n.ref._stringRef === i
                ? n.ref
                : ((n = function (e) {}),
                  (n._stringRef = i),
                  n);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!t._owner) throw Error(a(290, e));
          }
          return e;
        }
        function qa(e, n) {}
        function Ka(e) {}
        function Xa(e) {
          function n(n, t) {
            if (e) {
              var r = n.deletions;
              null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
            }
          }
          function t(t, r) {
            if (!e) return null;
            for (; null !== r; ) n(t, r), (r = r.sibling);
            return null;
          }
          function r(e, n) {
            for (e = new Map(); null !== n; ) null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
            return e;
          }
          function l(e, n) {
            return ((e = Ms(e, n)).index = 0), (e.sibling = null), e;
          }
          function i(n, t, r) {
            return (n.index = r), e ? (null !== (r = n.alternate) ? ((r = r.index) < t ? ((n.flags |= 2), t) : r) : ((n.flags |= 2), t)) : ((n.flags |= 1048576), t);
          }
          function o(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function u(e, n, t, r) {}
          function s(e, n, t, r) {
            var a = t.type;
            return a === _
              ? f(e, n, t.props.children, r, t.key)
              : null !== n && (n.elementType === a || ("object" === typeof a && null !== a && a.$$typeof === O && Ka(a) === n.type))
              ? (((r = l(n, t.props)).ref = Qa(e, n, t)), (r.return = e), r)
              : (((r = Ds(t.type, t.key, t.props, null, e.mode, r)).ref = Qa(e, n, t)), (r.return = e), r);
          }
          function c(e, n, t, r) {}
          function f(e, n, t, r, a) {}
          function d(e, n, t) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n) return ((n = Is("" + n, e.mode, t)).return = e), n;
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return ((t = Ds(n.type, n.key, n.props, null, e.mode, t)).ref = Qa(e, null, n)), (t.return = e), t;
                case S:
                  return ((n = Us(n, e.mode, t)).return = e), n;
                case O:
                  return d(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || D(n)) return ((n = js(n, e.mode, t, null)).return = e), n;
              qa(e, n);
            }
            return null;
          }
          function p(e, n, t, r) {
            var l = null !== n ? n.key : null;
            if (("string" === typeof t && "" !== t) || "number" === typeof t) return null !== l ? null : u(e, n, "" + t, r);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return t.key === l ? s(e, n, t, r) : null;
                case S:
                  return t.key === l ? c(e, n, t, r) : null;
                case O:
                  return p(e, n, (l = t._init)(t._payload), r);
              }
              if (ne(t) || D(t)) return null !== l ? null : f(e, n, t, r, null);
              qa(e, t);
            }
            return null;
          }
          function h(e, n, t, r, l) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r) return u(n, (e = e.get(t) || null), "" + r, l);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(n, (e = e.get(null === r.key ? t : r.key) || null), r, l);
                case S:
                  return c(n, (e = e.get(null === r.key ? t : r.key) || null), r, l);
                case O:
                  return h(e, n, t, (0, r._init)(r._payload), l);
              }
              if (ne(r) || D(r)) return f(n, (e = e.get(t) || null), r, l, null);
              qa(n, r);
            }
            return null;
          }
          function m(l, a, o, u) {
            for (var s = null, c = null, f = a, m = (a = 0), v = null; null !== f && m < o.length; m++) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(l, f, o[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && n(l, f), (a = i(g, a, m)), null === c ? (s = g) : (c.sibling = g), (c = g), (f = v);
            }
            if (m === o.length) return t(l, f), la && Zl(l, m), s;
            if (null === f) {
              for (; m < o.length; m++) null !== (f = d(l, o[m], u)) && ((a = i(f, a, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
              return la && Zl(l, m), s;
            }
            for (f = r(l, f); m < o.length; m++) null !== (v = h(f, l, m, o[m], u)) && (e && null !== v.alternate && f.delete(null === v.key ? m : v.key), (a = i(v, a, m)), null === c ? (s = v) : (c.sibling = v), (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return n(l, e);
                }),
              la && Zl(l, m),
              s
            );
          }
          function v(l, o, u, s) {}
          return function e(r, a, i, u) {
            if (("object" === typeof i && null !== i && i.type === _ && null === i.key && (i = i.props.children), "object" === typeof i && null !== i)) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var s = i.key, c = a; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === _) {
                          if (7 === c.tag) {
                            t(r, c.sibling), ((a = l(c, i.props.children)).return = r), (r = a);
                            break e;
                          }
                        } else if (c.elementType === s || ("object" === typeof s && null !== s && s.$$typeof === O && Ka(s) === c.type)) {
                          t(r, c.sibling), ((a = l(c, i.props)).ref = Qa(r, c, i)), (a.return = r), (r = a);
                          break e;
                        }
                        t(r, c);
                        break;
                      }
                      n(r, c), (c = c.sibling);
                    }
                    i.type === _ ? (((a = js(i.props.children, r.mode, u, i.key)).return = r), (r = a)) : (((u = Ds(i.type, i.key, i.props, null, r.mode, u)).ref = Qa(r, a, i)), (u.return = r), (r = u));
                  }
                  return o(r);
                case S:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                          t(r, a.sibling), ((a = l(a, i.children || [])).return = r), (r = a);
                          break e;
                        }
                        t(r, a);
                        break;
                      }
                      n(r, a), (a = a.sibling);
                    }
                    ((a = Us(i, r.mode, u)).return = r), (r = a);
                  }
                  return o(r);
                case O:
                  return e(r, a, (c = i._init)(i._payload), u);
              }
              if (ne(i)) return m(r, a, i, u);
              if (D(i)) return v(r, a, i, u);
              qa(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i), null !== a && 6 === a.tag ? (t(r, a.sibling), ((a = l(a, i)).return = r), (r = a)) : (t(r, a), ((a = Is(i, r.mode, u)).return = r), (r = a)), o(r))
              : t(r, a);
          };
        }
        var Ya = Xa(!0),
          Ga = Xa(!1),
          Za = {},
          Ja = xl(Za),
          ei = xl(Za),
          ni = xl(Za);
        function ti(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function ri(e, n) {
          switch ((Cl(ni, n), Cl(ei, e), Cl(Ja, Za), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : ue(null, "");
              break;
            default:
              n = ue((n = (e = 8 === e ? n.parentNode : n).namespaceURI || null), (e = e.tagName));
          }
          El(Ja), Cl(Ja, n);
        }
        function li() {
          El(Ja), El(ei), El(ni);
        }
        function ai(e) {
          ti(ni.current);
          var n = ti(Ja.current),
            t = ue(n, e.type);
          n !== t && (Cl(ei, e), Cl(Ja, t));
        }
        function ii(e) {
          ei.current === e && (El(Ja), El(ei));
        }
        var oi = xl(0);
        function ui(e) {}
        var si = [];
        function ci() {
          for (var e = 0; e < si.length; e++) si[e]._workInProgressVersionPrimary = null;
          si.length = 0;
        }
        var fi = k.ReactCurrentDispatcher,
          di = k.ReactCurrentBatchConfig,
          pi = 0,
          hi = null,
          mi = null,
          vi = null,
          gi = !1,
          yi = !1,
          bi = 0,
          ki = 0;
        function wi() {}
        function Si(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++) if (!or(e[t], n[t])) return !1;
          return !0;
        }
        function _i(e, n, t, r, l, i) {
          if (((pi = i), (hi = n), (n.memoizedState = null), (n.updateQueue = null), (n.lanes = 0), (fi.current = null === e || null === e.memoizedState ? io : oo), (e = t(r, l)), yi)) {
            i = 0;
            do {
              if (((yi = !1), (bi = 0), 25 <= i)) throw Error(a(301));
              (i += 1), (vi = mi = null), (n.updateQueue = null), (fi.current = uo), (e = t(r, l));
            } while (yi);
          }
          if (((fi.current = ao), (n = null !== mi && null !== mi.next), (pi = 0), (vi = mi = hi = null), (gi = !1), n)) throw Error(a(300));
          return e;
        }
        function xi() {
          var e = 0 !== bi;
          return (bi = 0), e;
        }
        function Ei() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === vi ? (hi.memoizedState = vi = e) : (vi = vi.next = e), vi;
        }
        function Ci() {
          if (null === mi) {
            var e = hi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var n = null === vi ? hi.memoizedState : vi.next;
          if (null !== n) (vi = n), (mi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = { memoizedState: (mi = e).memoizedState, baseState: mi.baseState, baseQueue: mi.baseQueue, queue: mi.queue, next: null }), null === vi ? (hi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ni(e, n) {
          return "function" === typeof n ? n(e) : n;
        }
        function Pi(e) {
          var n = Ci(),
            t = n.queue;
          if (null === t) throw Error(a(311));
          t.lastRenderedReducer = e;
          var r = mi,
            l = r.baseQueue,
            i = t.pending;
          if (null !== i) {
            if (null !== l) {
              var o = l.next;
              (l.next = i.next), (i.next = o);
            }
            (r.baseQueue = l = i), (t.pending = null);
          }
          if (null !== l) {
            (i = l.next), (r = r.baseState);
            var u = (o = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((pi & f) === f) null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                null === s ? ((u = s = d), (o = r)) : (s = s.next = d), (hi.lanes |= f), (Fu |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (o = r) : (s.next = u), or(r, n.memoizedState) || (ko = !0), (n.memoizedState = r), (n.baseState = o), (n.baseQueue = s), (t.lastRenderedState = r);
          }
          if (null !== (e = t.interleaved)) {
            l = e;
            do {
              (i = l.lane), (hi.lanes |= i), (Fu |= i), (l = l.next);
            } while (l !== e);
          } else null === l && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function Li(e) {}
        function zi() {}
        function Ti(e, n) {}
        function Oi(e, n, t) {}
        function Ri(e, n, t, r) {}
        function Mi(e, n, t) {}
        function Di(e) {}
        function ji(e) {}
        function Fi(e) {
          var n = Ei();
          return (
            "function" === typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ni, lastRenderedState: e }),
            (n.queue = e),
            (e = e.dispatch = no.bind(null, hi, e)),
            [n.memoizedState, e]
          );
        }
        function Ii(e, n, t, r) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
            null === (n = hi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }), (hi.updateQueue = n), (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return Ci().memoizedState;
        }
        function Ai(e, n, t, r) {
          var l = Ei();
          (hi.flags |= e), (l.memoizedState = Ii(1 | n, t, void 0, void 0 === r ? null : r));
        }
        function Vi(e, n, t, r) {
          var l = Ci();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((a = i.destroy), null !== r && Si(r, i.deps))) return void (l.memoizedState = Ii(n, t, a, r));
          }
          (hi.flags |= e), (l.memoizedState = Ii(1 | n, t, a, r));
        }
        function $i(e, n) {
          return Ai(8390656, 8, e, n);
        }
        function Bi(e, n) {
          return Vi(2048, 8, e, n);
        }
        function Hi(e, n) {}
        function Wi(e, n) {}
        function Qi(e, n) {}
        function qi(e, n, t) {}
        function Ki() {}
        function Xi(e, n) {
          var t = Ci();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && Si(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
        }
        function Yi(e, n) {}
        function Gi(e, n, t) {}
        function Zi(e, n) {}
        function Ji() {}
        function eo(e, n, t) {}
        function no(e, n, t) {
          var r = ts(e),
            l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
          if (to(e)) ro(n, l);
          else {
            var a = e.alternate;
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = n.lastRenderedReducer))
              try {
                var i = n.lastRenderedState,
                  o = a(i, t);
                if (((l.hasEagerState = !0), (l.eagerState = o), or(o, i))) {
                  var u = n.interleaved;
                  return null === u ? ((l.next = l), Na(n)) : ((l.next = u.next), (u.next = l)), void (n.interleaved = l);
                }
              } catch (s) {}
            null !== (t = Pa(e, n, l, r)) && (rs(t, e, r, (l = ns())), lo(t, n, r));
          }
        }
        function to(e) {
          var n = e.alternate;
          return e === hi || (null !== n && n === hi);
        }
        function ro(e, n) {}
        function lo(e, n, t) {
          if (0 !== (4194240 & t)) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        var ao = {
            readContext: Ea,
            useCallback: wi,
            useContext: wi,
            useEffect: wi,
            useImperativeHandle: wi,
            useInsertionEffect: wi,
            useLayoutEffect: wi,
            useMemo: wi,
            useReducer: wi,
            useRef: wi,
            useState: wi,
            useDebugValue: wi,
            useDeferredValue: wi,
            useTransition: wi,
            useMutableSource: wi,
            useSyncExternalStore: wi,
            useId: wi,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: Ea,
            useCallback: function (e, n) {
              return (Ei().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: Ea,
            useEffect: $i,
            useImperativeHandle: function (e, n, t) {},
            useLayoutEffect: function (e, n) {},
            useInsertionEffect: function (e, n) {},
            useMemo: function (e, n) {},
            useReducer: function (e, n, t) {},
            useRef: function (e) {
              return (e = { current: e }), (Ei().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: Ki,
            useDeferredValue: function (e) {},
            useTransition: function () {},
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {},
            useId: function () {},
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Ea,
            useCallback: Xi,
            useContext: Ea,
            useEffect: Bi,
            useImperativeHandle: qi,
            useInsertionEffect: Hi,
            useLayoutEffect: Wi,
            useMemo: Yi,
            useReducer: Pi,
            useRef: Ui,
            useState: function () {
              return Pi(Ni);
            },
            useDebugValue: Ki,
            useDeferredValue: function (e) {},
            useTransition: function () {},
            useMutableSource: zi,
            useSyncExternalStore: Ti,
            useId: Ji,
            unstable_isNewReconciler: !1,
          },
          uo = {
            readContext: Ea,
            useCallback: Xi,
            useContext: Ea,
            useEffect: Bi,
            useImperativeHandle: qi,
            useInsertionEffect: Hi,
            useLayoutEffect: Wi,
            useMemo: Yi,
            useReducer: Li,
            useRef: Ui,
            useState: function () {},
            useDebugValue: Ki,
            useDeferredValue: function (e) {},
            useTransition: function () {},
            useMutableSource: zi,
            useSyncExternalStore: Ti,
            useId: Ji,
            unstable_isNewReconciler: !1,
          };
        function so(e, n) {}
        function co(e, n, t) {}
        function fo(e, n) {}
        var po = "function" === typeof WeakMap ? WeakMap : Map;
        function ho(e, n, t) {}
        function mo(e, n, t) {}
        function vo(e, n, t) {}
        function go(e) {}
        function yo(e, n, t, r, l) {}
        var bo = k.ReactCurrentOwner,
          ko = !1;
        function wo(e, n, t, r) {
          n.child = null === e ? Ga(n, null, t, r) : Ya(n, e.child, t, r);
        }
        function So(e, n, t, r, l) {}
        function _o(e, n, t, r, l) {}
        function xo(e, n, t, r, l) {}
        function Eo(e, n, t) {}
        function Co(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) && ((n.flags |= 512), (n.flags |= 2097152));
        }
        function No(e, n, t, r, l) {
          var a = Ol(t) ? zl : Pl.current;
          return (
            (a = Tl(n, a)),
            xa(n, l),
            (t = _i(e, n, t, r, a, l)),
            (r = xi()),
            null === e || ko ? (la && r && ea(n), (n.flags |= 1), wo(e, n, t, l), n.child) : ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~l), Wo(e, n, l))
          );
        }
        function Po(e, n, t, r, l) {}
        function Lo(e, n, t, r, l, a) {}
        function zo(e) {
          var n = e.stateNode;
          n.pendingContext ? Ml(0, n.pendingContext, n.pendingContext !== n.context) : n.context && Ml(0, n.context, !1), ri(e, n.containerInfo);
        }
        function To(e, n, t, r, l) {}
        var Oo,
          Ro,
          Mo,
          Do,
          jo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fo(e) {}
        function Io(e, n, t) {}
        function Uo(e, n) {}
        function Ao(e, n, t, r) {}
        function Vo(e, n, t) {}
        function $o(e, n, t, r, l) {}
        function Bo(e, n, t) {}
        function Ho(e, n) {
          0 === (1 & n.mode) && null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function Wo(e, n, t) {
          if ((null !== e && (n.dependencies = e.dependencies), (Fu |= n.lanes), 0 === (t & n.childLanes))) return null;
          if (null !== e && n.child !== e.child) throw Error(a(153));
          if (null !== n.child) {
            for (t = Ms((e = n.child), e.pendingProps), n.child = t, t.return = n; null !== e.sibling; ) (e = e.sibling), ((t = t.sibling = Ms(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Qo(e, n) {}
        function qo(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            r = 0;
          if (n) for (var l = e.child; null !== l; ) (t |= l.lanes | l.childLanes), (r |= 14680064 & l.subtreeFlags), (r |= 14680064 & l.flags), (l.return = e), (l = l.sibling);
          else for (l = e.child; null !== l; ) (t |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = t), n;
        }
        function Ko(e, n, t) {
          var r = n.pendingProps;
          switch ((na(n), n.tag)) {
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
              return qo(n), null;
            case 1:
            case 17:
              return Ol(n.type) && Rl(), qo(n), null;
            case 3:
              return (
                (r = n.stateNode),
                li(),
                El(Ll),
                El(Pl),
                ci(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) || (fa(n) ? (n.flags |= 4) : null === e || (e.memoizedState.isDehydrated && 0 === (256 & n.flags)) || ((n.flags |= 1024), null !== aa && (os(aa), (aa = null)))),
                Ro(e, n),
                qo(n),
                null
              );
            case 5:
              ii(n);
              var l = ti(ni.current);
              if (((t = n.type), null !== e && null != n.stateNode)) Mo(e, n, t, r, l), e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(a(166));
                  return qo(n), null;
                }
                if (((e = ti(Ja.current)), fa(n))) {
                  (r = n.stateNode), (t = n.type);
                  var i = n.memoizedProps;
                  switch (((r[dl] = n), (r[pl] = i), (e = 0 !== (1 & n.mode)), t)) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < Dr.length; l++) Ur(Dr[l], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }), Ur("invalid", r);
                      break;
                    case "textarea":
                      le(r, i), Ur("invalid", r);
                  }
                  for (var u in (ye(t, i), (l = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), (l = ["children", s]))
                          : "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e), (l = ["children", "" + s]))
                        : o.hasOwnProperty(u) && null != s && "onScroll" === u && Ur("scroll", r);
                    }
                  switch (t) {
                    case "input":
                      Q(r), J(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = l), (n.updateQueue = r), null !== r && (n.flags |= 4);
                } else {
                  (u = 9 === l.nodeType ? l : l.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(t)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === t
                        ? (((e = u.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(t, { is: r.is }))
                        : ((e = u.createElement(t)), "select" === t && ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, t)),
                    (e[dl] = n),
                    (e[pl] = r),
                    Oo(e, n, !1, !1),
                    (n.stateNode = e);
                  e: {
                    switch (((u = be(t, r)), t)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (l = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (l = r);
                        break;
                      case "video":
                      case "audio":
                        for (l = 0; l < Dr.length; l++) Ur(Dr[l], e);
                        l = r;
                        break;
                      case "source":
                        Ur("error", e), (l = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (l = r);
                        break;
                      case "details":
                        Ur("toggle", e), (l = r);
                        break;
                      case "input":
                        Y(e, r), (l = X(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        l = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }), (l = F({}, r, { value: void 0 })), Ur("invalid", e);
                        break;
                      case "textarea":
                        le(e, r), (l = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ye(t, l), (s = l)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== t || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (o.hasOwnProperty(i) ? null != c && "onScroll" === i && Ur("scroll", e) : null != c && b(e, i, c, u));
                      }
                    switch (t) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value && e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple), null != (i = r.value) ? te(e, !!r.multiple, i, !1) : null != r.defaultValue && te(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof l.onClick && (e.onclick = Jr);
                    }
                    switch (t) {
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
                  r && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return qo(n), null;
            case 6:
              if (e && null != n.stateNode) Do(e, n, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === n.stateNode) throw Error(a(166));
                if (((t = ti(ni.current)), ti(Ja.current), fa(n))) {
                  if (((r = n.stateNode), (t = n.memoizedProps), (r[dl] = n), (i = r.nodeValue !== t) && null !== (e = ta)))
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, t, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, t, 0 !== (1 & e.mode));
                    }
                  i && (n.flags |= 4);
                } else ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[dl] = n), (n.stateNode = r);
              }
              return qo(n), null;
            case 13:
              if ((El(oi), (r = n.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))) {
                if (la && null !== ra && 0 !== (1 & n.mode) && 0 === (128 & n.flags)) da(), pa(), (n.flags |= 98560), (i = !1);
                else if (((i = fa(n)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (!(i = null !== (i = n.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
                    i[dl] = n;
                  } else pa(), 0 === (128 & n.flags) && (n.memoizedState = null), (n.flags |= 4);
                  qo(n), (i = !1);
                } else null !== aa && (os(aa), (aa = null)), (i = !0);
                if (!i) return 65536 & n.flags ? n : null;
              }
              return 0 !== (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && ((n.child.flags |= 8192), 0 !== (1 & n.mode) && (null === e || 0 !== (1 & oi.current) ? 0 === Du && (Du = 3) : vs())),
                  null !== n.updateQueue && (n.flags |= 4),
                  qo(n),
                  null);
            case 4:
              return li(), Ro(e, n), null === e && $r(n.stateNode.containerInfo), qo(n), null;
            case 10:
              return Sa(n.type._context), qo(n), null;
            case 19:
              if ((El(oi), null === (i = n.memoizedState))) return qo(n), null;
              if (((r = 0 !== (128 & n.flags)), null === (u = i.rendering)))
                if (r) Qo(i, !1);
                else {
                  if (0 !== Du || (null !== e && 0 !== (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (u = ui(e))) {
                        for (n.flags |= 128, Qo(i, !1), null !== (r = u.updateQueue) && ((n.updateQueue = r), (n.flags |= 4)), n.subtreeFlags = 0, r = t, t = n.child; null !== t; )
                          (e = r),
                            ((i = t).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                            (t = t.sibling);
                        return Cl(oi, (1 & oi.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail && Ge() > Bu && ((n.flags |= 128), (r = !0), Qo(i, !1), (n.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(u))) {
                    if (((n.flags |= 128), (r = !0), null !== (t = e.updateQueue) && ((n.updateQueue = t), (n.flags |= 4)), Qo(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !la)) return qo(n), null;
                  } else 2 * Ge() - i.renderingStartTime > Bu && 1073741824 !== t && ((n.flags |= 128), (r = !0), Qo(i, !1), (n.lanes = 4194304));
                i.isBackwards ? ((u.sibling = n.child), (n.child = u)) : (null !== (t = i.last) ? (t.sibling = u) : (n.child = u), (i.last = u));
              }
              return null !== i.tail ? ((n = i.tail), (i.rendering = n), (i.tail = n.sibling), (i.renderingStartTime = Ge()), (n.sibling = null), (t = oi.current), Cl(oi, r ? (1 & t) | 2 : 1 & t), n) : (qo(n), null);
            case 22:
            case 23:
              return (
                ds(), (r = null !== n.memoizedState), null !== e && (null !== e.memoizedState) !== r && (n.flags |= 8192), r && 0 !== (1 & n.mode) ? 0 !== (1073741824 & Ru) && (qo(n), 6 & n.subtreeFlags && (n.flags |= 8192)) : qo(n), null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, n.tag));
        }
        function Xo(e, n) {}
        (Oo = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (Ro = function () {}),
          (Mo = function (e, n, t, r) {
            var l = e.memoizedProps;
            if (l !== r) {
              (e = n.stateNode), ti(Ja.current);
              var a,
                i = null;
              switch (t) {
                case "input":
                  (l = X(e, l)), (r = X(e, r)), (i = []);
                  break;
                case "select":
                  (l = F({}, l, { value: void 0 })), (r = F({}, r, { value: void 0 })), (i = []);
                  break;
                case "textarea":
                  (l = re(e, l)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof l.onClick && "function" === typeof r.onClick && (e.onclick = Jr);
              }
              for (c in (ye(t, r), (t = null), l))
                if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
                  if ("style" === c) {
                    var u = l[c];
                    for (a in u) u.hasOwnProperty(a) && (t || (t = {}), (t[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (((u = null != l ? l[c] : void 0), r.hasOwnProperty(c) && s !== u && (null != s || null != u)))
                  if ("style" === c)
                    if (u) {
                      for (a in u) !u.hasOwnProperty(a) || (s && s.hasOwnProperty(a)) || (t || (t = {}), (t[a] = ""));
                      for (a in s) s.hasOwnProperty(a) && u[a] !== s[a] && (t || (t = {}), (t[a] = s[a]));
                    } else t || (i || (i = []), i.push(c, t)), (t = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), null != s && u !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) || (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (o.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ur("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
              }
              t && (i = i || []).push("style", t);
              var c = i;
              (n.updateQueue = c) && (n.flags |= 4);
            }
          }),
          (Do = function (e, n, t, r) {});
        var Yo = !1,
          Go = !1,
          Zo = "function" === typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function eu(e, n) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (r) {
                Es(e, n, r);
              }
            else t.current = null;
        }
        function nu(e, n, t) {}
        var tu = !1;
        function ru(e, n, t) {
          var r = n.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var l = (r = r.next);
            do {
              if ((l.tag & e) === e) {
                var a = l.destroy;
                (l.destroy = void 0), void 0 !== a && nu(n, t, a);
              }
              l = l.next;
            } while (l !== r);
          }
        }
        function lu(e, n) {
          if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function au(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), "function" === typeof n ? n(e) : (n.current = e);
          }
        }
        function iu(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), iu(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (n = e.stateNode) && (delete n[dl], delete n[pl], delete n[ml], delete n[vl], delete n[gl]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e), (null !== (t = t._reactRootContainer) && void 0 !== t) || null !== n.onclick || (n.onclick = Jr));
          else if (4 !== r && null !== (e = e.child)) for (su(e, n, t), e = e.sibling; null !== e; ) su(e, n, t), (e = e.sibling);
        }
        function cu(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== r && null !== (e = e.child)) for (cu(e, n, t), e = e.sibling; null !== e; ) cu(e, n, t), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, n, t) {
          for (t = t.child; null !== t; ) hu(e, n, t), (t = t.sibling);
        }
        function hu(e, n, t) {
          if (an && "function" === typeof an.onCommitFiberUnmount)
            try {
              an.onCommitFiberUnmount(ln, t);
            } catch (o) {}
          switch (t.tag) {
            case 5:
              Go || eu(t, n);
            case 6:
              var r = fu,
                l = du;
              (fu = null), pu(e, n, t), (du = l), null !== (fu = r) && (du ? ((e = fu), (t = t.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t)) : fu.removeChild(t.stateNode));
              break;
            case 18:
              null !== fu && (du ? ((e = fu), (t = t.stateNode), 8 === e.nodeType ? ul(e.parentNode, t) : 1 === e.nodeType && ul(e, t), Bn(e)) : ul(fu, t.stateNode));
              break;
            case 4:
              (r = fu), (l = du), (fu = t.stateNode.containerInfo), (du = !0), pu(e, n, t), (fu = r), (du = l);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Go && null !== (r = t.updateQueue) && null !== (r = r.lastEffect)) {
                l = r = r.next;
                do {
                  var a = l,
                    i = a.destroy;
                  (a = a.tag), void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && nu(t, n, i), (l = l.next);
                } while (l !== r);
              }
              pu(e, n, t);
              break;
            case 1:
              if (!Go && (eu(t, n), "function" === typeof (r = t.stateNode).componentWillUnmount))
                try {
                  (r.props = t.memoizedProps), (r.state = t.memoizedState), r.componentWillUnmount();
                } catch (o) {
                  Es(t, n, o);
                }
              pu(e, n, t);
              break;
            case 21:
              pu(e, n, t);
              break;
            case 22:
              1 & t.mode ? ((Go = (r = Go) || null !== t.memoizedState), pu(e, n, t), (Go = r)) : pu(e, n, t);
              break;
            default:
              pu(e, n, t);
          }
        }
        function mu(e) {}
        function vu(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var l = t[r];
              try {
                var i = e,
                  o = n,
                  u = o;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(a(160));
                hu(i, o, l), (fu = null), (du = !1);
                var s = l.alternate;
                null !== s && (s.return = null), (l.return = null);
              } catch (c) {
                Es(l, n, c);
              }
            }
          if (12854 & n.subtreeFlags) for (n = n.child; null !== n; ) gu(n, e), (n = n.sibling);
        }
        function gu(e, n) {
          var t = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(n, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), lu(3, e);
                } catch (v) {
                  Es(e, e.return, v);
                }
                try {
                  ru(5, e, e.return);
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 1:
              vu(n, e), yu(e), 512 & r && null !== t && eu(t, t.return);
              break;
            case 5:
              if ((vu(n, e), yu(e), 512 & r && null !== t && eu(t, t.return), 32 & e.flags)) {
                var l = e.stateNode;
                try {
                  de(l, "");
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              if (4 & r && null != (l = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== t ? t.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u && "radio" === i.type && null != i.name && G(l, i), be(u, o);
                    var c = be(u, i);
                    for (o = 0; o < s.length; o += 2) {
                      var f = s[o],
                        d = s[o + 1];
                      "style" === f ? ve(l, d) : "dangerouslySetInnerHTML" === f ? fe(l, d) : "children" === f ? de(l, d) : b(l, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        Z(l, i);
                        break;
                      case "textarea":
                        ae(l, i);
                        break;
                      case "select":
                        var p = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h ? te(l, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? te(l, !!i.multiple, i.defaultValue, !0) : te(l, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    l[pl] = i;
                  } catch (v) {
                    Es(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vu(n, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (l = e.stateNode), (i = e.memoizedProps);
                try {
                  l.nodeValue = i;
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 3:
              if ((vu(n, e), yu(e), 4 & r && null !== t && t.memoizedState.isDehydrated))
                try {
                  Bn(n.containerInfo);
                } catch (v) {
                  Es(e, e.return, v);
                }
              break;
            case 4:
            default:
              vu(n, e), yu(e);
              break;
            case 13:
              vu(n, e), yu(e), 8192 & (l = e.child).flags && ((i = null !== l.memoizedState), (l.stateNode.isHidden = i), !i || (null !== l.alternate && null !== l.alternate.memoizedState) || ($u = Ge())), 4 & r && mu(e);
              break;
            case 22:
              if (((f = null !== t && null !== t.memoizedState), 1 & e.mode ? ((Go = (c = Go) || f), vu(n, e), (Go = c)) : vu(n, e), yu(e), 8192 & r)) {
                if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode)))
                  for (Jo = e, f = e.child; null !== f; ) {
                    for (d = Jo = f; null !== Jo; ) {
                      switch (((h = (p = Jo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (t = p.return);
                            try {
                              (n = r), (m.props = n.memoizedProps), (m.state = n.memoizedState), m.componentWillUnmount();
                            } catch (v) {
                              Es(r, t, v);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Su(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jo = h)) : Su(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (l = d.stateNode),
                          c
                            ? "function" === typeof (i = l.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode), (o = void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null), (u.style.display = me("display", o)));
                      } catch (v) {
                        Es(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        Es(e, e.return, v);
                      }
                  } else if (((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) && null !== d.child) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(n, e), yu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function yu(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (ou(t)) {
                    var r = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var l = r.stateNode;
                  32 & r.flags && (de(l, ""), (r.flags &= -33)), cu(e, uu(e), l);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (o) {
              Es(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function bu(e, n, t) {
          (Jo = e), ku(e, n, t);
        }
        function ku(e, n, t) {
          for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
            var l = Jo,
              a = l.child;
            if (22 === l.tag && r) {
              var i = null !== l.memoizedState || Yo;
              if (!i) {
                var o = l.alternate,
                  u = (null !== o && null !== o.memoizedState) || Go;
                o = Yo;
                var s = Go;
                if (((Yo = i), (Go = u) && !s)) for (Jo = l; null !== Jo; ) (u = (i = Jo).child), 22 === i.tag && null !== i.memoizedState ? _u(l) : null !== u ? ((u.return = i), (Jo = u)) : _u(l);
                for (; null !== a; ) (Jo = a), ku(a, n, t), (a = a.sibling);
                (Jo = l), (Yo = o), (Go = s);
              }
              wu(e);
            } else 0 !== (8772 & l.subtreeFlags) && null !== a ? ((a.return = l), (Jo = a)) : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Jo; ) {
            var n = Jo;
            if (0 !== (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 !== (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go || lu(5, n);
                      break;
                    case 1:
                      var r = n.stateNode;
                      if (4 & n.flags && !Go)
                        if (null === t) r.componentDidMount();
                        else {
                          var l = n.elementType === n.type ? t.memoizedProps : va(n.type, t.memoizedProps);
                          r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                        }
                      var i = n.updateQueue;
                      null !== i && Ia(n, i, r);
                      break;
                    case 3:
                      var o = n.updateQueue;
                      if (null !== o) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Ia(n, o, t);
                      }
                      break;
                    case 5:
                      var u = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = u;
                        var s = n.memoizedProps;
                        switch (n.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && t.focus();
                            break;
                          case "img":
                            s.src && (t.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var c = n.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bn(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Go || (512 & n.flags && au(n));
              } catch (p) {
                Es(n, n.return, p);
              }
            }
            if (n === e) {
              Jo = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), (Jo = t);
              break;
            }
            Jo = n.return;
          }
        }
        function Su(e) {}
        function _u(e) {}
        var xu,
          Eu = Math.ceil,
          Cu = k.ReactCurrentDispatcher,
          Nu = k.ReactCurrentOwner,
          Pu = k.ReactCurrentBatchConfig,
          Lu = 0,
          zu = null,
          Tu = null,
          Ou = 0,
          Ru = 0,
          Mu = xl(0),
          Du = 0,
          ju = null,
          Fu = 0,
          Iu = 0,
          Uu = 0,
          Au = null,
          Vu = null,
          $u = 0,
          Bu = 1 / 0,
          Hu = null,
          Wu = !1,
          Qu = null,
          qu = null,
          Ku = !1,
          Xu = null,
          Yu = 0,
          Gu = 0,
          Zu = null,
          Ju = -1,
          es = 0;
        function ns() {
          return 0 !== (6 & Lu) ? Ge() : -1 !== Ju ? Ju : (Ju = Ge());
        }
        function ts(e) {
          return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Lu) && 0 !== Ou ? Ou & -Ou : null !== ma.transition ? (0 === es && (es = vn()), es) : 0 !== (e = kn) ? e : (e = void 0 === (e = window.event) ? 16 : Gn(e.type));
        }
        function rs(e, n, t, r) {
          if (50 < Gu) throw ((Gu = 0), (Zu = null), Error(a(185)));
          yn(e, t, r), (0 !== (2 & Lu) && e === zu) || (e === zu && (0 === (2 & Lu) && (Iu |= t), 4 === Du && us(e, Ou)), ls(e, r), 1 === t && 0 === Lu && 0 === (1 & n.mode) && ((Bu = Ge() + 500), Ul && $l()));
        }
        function ls(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
              var i = 31 - on(a),
                o = 1 << i,
                u = l[i];
              -1 === u ? (0 !== (o & t) && 0 === (o & r)) || (l[i] = hn(o, n)) : u <= n && (e.expiredLanes |= o), (a &= ~o);
            }
          })(e, n);
          var r = pn(e, e === zu ? Ou : 0);
          if (0 === r) null !== t && Ke(t), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((n = r & -r), e.callbackPriority !== n)) {
            if ((null != t && Ke(t), 1 === n))
              0 === e.tag
                ? (function (e) {})(ss.bind(null, e))
                : Vl(ss.bind(null, e)),
                il(function () {
                  0 === (6 & Lu) && $l();
                }),
                (t = null);
            else {
              switch (wn(r)) {
                case 1:
                  t = Je;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = rn;
              }
              t = zs(t, as.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function as(e, n) {
          if (((Ju = -1), (es = 0), 0 !== (6 & Lu))) throw Error(a(327));
          var t = e.callbackNode;
          if (_s() && e.callbackNode !== t) return null;
          var r = pn(e, e === zu ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n) n = gs(e, r);
          else {
            n = r;
            var l = Lu;
            Lu |= 2;
            var i = ms();
            for ((zu === e && Ou === n) || ((Hu = null), (Bu = Ge() + 500), ps(e, n)); ; )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            wa(), (Cu.current = i), (Lu = l), null !== Tu ? (n = 0) : ((zu = null), (Ou = 0), (n = Du));
          }
          if (0 !== n) {
            if ((2 === n && 0 !== (l = mn(e)) && ((r = l), (n = is(e, l))), 1 === n)) throw ((t = ju), ps(e, 0), us(e, r), ls(e, Ge()), t);
            if (6 === n) us(e, r);
            else {
              if (
                ((l = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {})(l) &&
                  (2 === (n = gs(e, r)) && 0 !== (i = mn(e)) && ((r = i), (n = is(e, i))), 1 === n))
              )
                throw ((t = ju), ps(e, 0), us(e, r), ls(e, Ge()), t);
              switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Ss(e, Vu, Hu);
                  break;
                case 3:
                  if ((us(e, r), (130023424 & r) === r && 10 < (n = $u + 500 - Ge()))) {
                    if (0 !== pn(e, 0)) break;
                    if (((l = e.suspendedLanes) & r) !== r) {
                      ns(), (e.pingedLanes |= e.suspendedLanes & l);
                      break;
                    }
                    e.timeoutHandle = rl(Ss.bind(null, e, Vu, Hu), n);
                    break;
                  }
                  Ss(e, Vu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (n = e.eventTimes, l = -1; 0 < r; ) {
                    var o = 31 - on(r);
                    (i = 1 << o), (o = n[o]) > l && (l = o), (r &= ~i);
                  }
                  if (((r = l), 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r))) {
                    e.timeoutHandle = rl(Ss.bind(null, e, Vu, Hu), r);
                    break;
                  }
                  Ss(e, Vu, Hu);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ls(e, Ge()), e.callbackNode === t ? as.bind(null, e) : null;
        }
        function is(e, n) {}
        function os(e) {}
        function us(e, n) {}
        function ss(e) {
          if (0 !== (6 & Lu)) throw Error(a(327));
          _s();
          var n = pn(e, 0);
          if (0 === (1 & n)) return ls(e, Ge()), null;
          var t = gs(e, n);
          if (0 !== e.tag && 2 === t) {
            var r = mn(e);
            0 !== r && ((n = r), (t = is(e, r)));
          }
          if (1 === t) throw ((t = ju), ps(e, 0), us(e, n), ls(e, Ge()), t);
          if (6 === t) throw Error(a(345));
          return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), Ss(e, Vu, Hu), ls(e, Ge()), null;
        }
        function cs(e, n) {
          var t = Lu;
          Lu |= 1;
          try {
            return e(n);
          } finally {
            0 === (Lu = t) && ((Bu = Ge() + 500), Ul && $l());
          }
        }
        function fs(e) {}
        function ds() {}
        function ps(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), ll(t)), null !== Tu))
            for (t = Tu.return; null !== t; ) {
              var r = t;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && Rl();
                  break;
                case 3:
                  li(), El(Ll), El(Pl), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  li();
                  break;
                case 13:
                case 19:
                  El(oi);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              t = t.return;
            }
          if (((zu = e), (Tu = e = Ms(e.current, null)), (Ou = Ru = n), (Du = 0), (ju = null), (Uu = Iu = Fu = 0), (Vu = Au = null), null !== Ca)) {
            for (n = 0; n < Ca.length; n++)
              if (null !== (r = (t = Ca[n]).interleaved)) {
                t.interleaved = null;
                var l = r.next,
                  a = t.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = l), (r.next = i);
                }
                t.pending = r;
              }
            Ca = null;
          }
          return e;
        }
        function hs(e, n) {}
        function ms() {
          var e = Cu.current;
          return (Cu.current = ao), null === e ? ao : e;
        }
        function vs() {}
        function gs(e, n) {
          var t = Lu;
          Lu |= 2;
          var r = ms();
          for ((zu === e && Ou === n) || ((Hu = null), ps(e, n)); ; )
            try {
              ys();
              break;
            } catch (l) {
              hs(e, l);
            }
          if ((wa(), (Lu = t), (Cu.current = r), null !== Tu)) throw Error(a(261));
          return (zu = null), (Ou = 0), Du;
        }
        function ys() {
          for (; null !== Tu; ) ks(Tu);
        }
        function bs() {}
        function ks(e) {
          var n = xu(e.alternate, e, Ru);
          (e.memoizedProps = e.pendingProps), null === n ? ws(e) : (Tu = n), (Nu.current = null);
        }
        function ws(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 === (32768 & n.flags))) {
              if (null !== (t = Ko(t, n, Ru))) return void (Tu = t);
            } else {
              if (null !== (t = Xo(t, n))) return (t.flags &= 32767), void (Tu = t);
              if (null === e) return (Du = 6), void (Tu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (Tu = n);
            Tu = n = e;
          } while (null !== n);
          0 === Du && (Du = 5);
        }
        function Ss(e, n, t) {
          var r = kn,
            l = Pu.transition;
          try {
            (Pu.transition = null),
              (kn = 1),
              (function (e, n, t, r) {
                do {
                  _s();
                } while (null !== Xu);
                if (0 !== (6 & Lu)) throw Error(a(327));
                t = e.finishedWork;
                var l = e.finishedLanes;
                if (null === t) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= n), (e.mutableReadLanes &= n), (e.entangledLanes &= n), (n = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var l = 31 - on(t),
                        a = 1 << l;
                      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~a);
                    }
                  })(e, i),
                  e === zu && ((Tu = zu = null), (Ou = 0)),
                  (0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    zs(nn, function () {
                      return _s(), null;
                    })),
                  (i = 0 !== (15990 & t.flags)),
                  0 !== (15990 & t.subtreeFlags) || i)
                ) {
                  (i = Pu.transition), (Pu.transition = null);
                  var o = kn;
                  kn = 1;
                  var u = Lu;
                  (Lu |= 4),
                    (Nu.current = null),
                    (function (e, n) {
                      if (((el = Wn), pr((e = dr())))) {
                        if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r = (t = ((t = e.ownerDocument) && t.defaultView) || window).getSelection && t.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              t = r.anchorNode;
                              var l = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                t.nodeType, i.nodeType;
                              } catch (w) {
                                t = null;
                                break e;
                              }
                              var o = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              n: for (;;) {
                                for (var h; d !== t || (0 !== l && 3 !== d.nodeType) || (u = o + l), d !== i || (0 !== r && 3 !== d.nodeType) || (s = o + r), 3 === d.nodeType && (o += d.nodeValue.length), null !== (h = d.firstChild); )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break n;
                                  if ((p === t && ++c === l && (u = o), p === i && ++f === r && (s = o), null !== (h = d.nextSibling))) break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              t = -1 === u || -1 === s ? null : { start: u, end: s };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (nl = { focusedElem: e, selectionRange: t }, Wn = !1, Jo = n; null !== Jo; )
                        if (((e = (n = Jo).child), 0 !== (1028 & n.subtreeFlags) && null !== e)) (e.return = n), (Jo = e);
                        else
                          for (; null !== Jo; ) {
                            n = Jo;
                            try {
                              var m = n.alternate;
                              if (0 !== (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = n.stateNode,
                                        b = y.getSnapshotBeforeUpdate(n.elementType === n.type ? v : va(n.type, v), g);
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var k = n.stateNode.containerInfo;
                                    1 === k.nodeType ? (k.textContent = "") : 9 === k.nodeType && k.documentElement && k.removeChild(k.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Es(n, n.return, w);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), (Jo = e);
                              break;
                            }
                            Jo = n.return;
                          }
                      (m = tu), (tu = !1);
                    })(e, t),
                    gu(t, e),
                    hr(nl),
                    (Wn = !!el),
                    (nl = el = null),
                    (e.current = t),
                    bu(t, e, l),
                    Ye(),
                    (Lu = u),
                    (kn = o),
                    (Pu.transition = i);
                } else e.current = t;
                if (
                  (Ku && ((Ku = !1), (Xu = e), (Yu = l)),
                  (i = e.pendingLanes),
                  0 === i && (qu = null),
                  (function (e) {
                    if (an && "function" === typeof an.onCommitFiberRoot)
                      try {
                        an.onCommitFiberRoot(ln, e, void 0, 128 === (128 & e.current.flags));
                      } catch (n) {}
                  })(t.stateNode),
                  ls(e, Ge()),
                  null !== n)
                )
                  for (r = e.onRecoverableError, t = 0; t < n.length; t++) (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
                if (Wu) throw ((Wu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && _s(), (i = e.pendingLanes), 0 !== (1 & i) ? (e === Zu ? Gu++ : ((Gu = 0), (Zu = e))) : (Gu = 0), $l();
              })(e, n, t, r);
          } finally {
            (Pu.transition = l), (kn = r);
          }
          return null;
        }
        function _s() {
          if (null !== Xu) {
            var e = wn(Yu),
              n = Pu.transition,
              t = kn;
            try {
              if (((Pu.transition = null), (kn = 16 > e ? 16 : e), null === Xu)) var r = !1;
              else {
                if (((e = Xu), (Xu = null), (Yu = 0), 0 !== (6 & Lu))) throw Error(a(331));
                var l = Lu;
                for (Lu |= 4, Jo = e.current; null !== Jo; ) {
                  var i = Jo,
                    o = i.child;
                  if (0 !== (16 & Jo.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Jo = c; null !== Jo; ) {
                          var f = Jo;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jo = d);
                          else
                            for (; null !== Jo; ) {
                              var p = (f = Jo).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                Jo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jo = p);
                                break;
                              }
                              Jo = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Jo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o) (o.return = i), (Jo = o);
                  else
                    e: for (; null !== Jo; ) {
                      if (0 !== (2048 & (i = Jo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jo = y);
                        break e;
                      }
                      Jo = i.return;
                    }
                }
                var b = e.current;
                for (Jo = b; null !== Jo; ) {
                  var k = (o = Jo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== k) (k.return = o), (Jo = k);
                  else
                    e: for (o = b; null !== Jo; ) {
                      if (0 !== (2048 & (u = Jo).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              lu(9, u);
                          }
                        } catch (S) {
                          Es(u, u.return, S);
                        }
                      if (u === o) {
                        Jo = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Jo = w);
                        break e;
                      }
                      Jo = u.return;
                    }
                }
                if (((Lu = l), $l(), an && "function" === typeof an.onPostCommitFiberRoot))
                  try {
                    an.onPostCommitFiberRoot(ln, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (kn = t), (Pu.transition = n);
            }
          }
          return !1;
        }
        function xs(e, n, t) {}
        function Es(e, n, t) {}
        function Cs(e, n, t) {}
        function Ns(e, n) {}
        function Ps(e) {}
        function Ls(e, n) {}
        function zs(e, n) {
          return qe(e, n);
        }
        function Ts(e, n, t, r) {
          (this.tag = e),
            (this.key = t),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Os(e, n, t, r) {
          return new Ts(e, n, t, r);
        }
        function Rs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ms(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Os(e.tag, n, e.key, e.mode)).elementType = e.elementType), (t.type = e.type), (t.stateNode = e.stateNode), (t.alternate = e), (e.alternate = t))
              : ((t.pendingProps = n), (t.type = e.type), (t.flags = 0), (t.subtreeFlags = 0), (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies = null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function Ds(e, n, t, r, l, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Rs(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case _:
                return js(t.children, l, i, n);
              case x:
                (o = 8), (l |= 8);
                break;
              case E:
                return ((e = Os(12, t, n, 2 | l)).elementType = E), (e.lanes = i), e;
              case L:
                return ((e = Os(13, t, n, l)).elementType = L), (e.lanes = i), e;
              case z:
                return ((e = Os(19, t, n, l)).elementType = z), (e.lanes = i), e;
              case R:
                return Fs(t, l, i, n);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      o = 10;
                      break e;
                    case N:
                      o = 9;
                      break e;
                    case P:
                      o = 11;
                      break e;
                    case T:
                      o = 14;
                      break e;
                    case O:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return ((n = Os(o, t, n, l)).elementType = e), (n.type = r), (n.lanes = i), n;
        }
        function js(e, n, t, r) {}
        function Fs(e, n, t, r) {}
        function Is(e, n, t) {
          return ((e = Os(6, e, null, n)).lanes = t), e;
        }
        function Us(e, n, t) {}
        function As(e, n, t, r, l) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gn(0)),
            (this.expirationTimes = gn(-1)),
            (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
            (this.entanglements = gn(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = l),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vs(e, n, t, r, l, a, i, o, u) {
          return (
            (e = new As(e, n, t, o, u)),
            1 === n ? ((n = 1), !0 === a && (n |= 8)) : (n = 0),
            (a = Os(3, null, null, n)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
            Ta(a),
            e
          );
        }
        function $s(e) {
          if (!e) return Nl;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(a(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (Ol(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (Ol(t)) return Dl(e, t, n);
          }
          return n;
        }
        function Bs(e, n, t, r, l, a, i, o, u) {}
        function Hs(e, n, t, r) {
          var l = n.current,
            a = ns(),
            i = ts(l);
          return (
            (t = $s(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = Ra(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (n.callback = r),
            null !== (e = Ma(l, n, i)) && (rs(e, l, i, a), Da(e, l, i)),
            i
          );
        }
        function Ws(e) {}
        function Qs(e, n) {}
        function qs(e, n) {}
        xu = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || Ll.current) ko = !0;
            else {
              if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                return (
                  (ko = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        zo(n), pa();
                        break;
                      case 5:
                        ai(n);
                        break;
                      case 1:
                        Ol(n.type) && jl(n);
                        break;
                      case 4:
                        ri(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = n.type._context,
                          l = n.memoizedProps.value;
                        Cl(ga, r._currentValue), (r._currentValue = l);
                        break;
                      case 13:
                        if (null !== (r = n.memoizedState))
                          return null !== r.dehydrated ? (Cl(oi, 1 & oi.current), (n.flags |= 128), null) : 0 !== (t & n.child.childLanes) ? Io(e, n, t) : (Cl(oi, 1 & oi.current), null !== (e = Wo(e, n, t)) ? e.sibling : null);
                        Cl(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (((r = 0 !== (t & n.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Bo(e, n, t);
                          n.flags |= 128;
                        }
                        if ((null !== (l = n.memoizedState) && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), Cl(oi, oi.current), r)) break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), Eo(e, n, t);
                    }
                    return Wo(e, n, t);
                  })(e, n, t)
                );
              ko = 0 !== (131072 & e.flags);
            }
          else (ko = !1), la && 0 !== (1048576 & n.flags) && Jl(n, Ql, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var r = n.type;
              Ho(e, n), (e = n.pendingProps);
              var l = Tl(n, Pl.current);
              xa(n, t), (l = _i(null, n, r, e, l, t));
              var i = xi();
              return (
                (n.flags |= 1),
                "object" === typeof l && null !== l && "function" === typeof l.render && void 0 === l.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    Ol(r) ? ((i = !0), jl(n)) : (i = !1),
                    (n.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null),
                    Ta(n),
                    (l.updater = Va),
                    (n.stateNode = l),
                    (l._reactInternals = n),
                    Wa(n, r, e, t),
                    (n = Lo(null, n, r, !0, i, t)))
                  : ((n.tag = 0), la && i && ea(n), wo(null, n, l, t), (n = n.child)),
                n
              );
            case 16:
              r = n.elementType;
              e: {
                switch (
                  (Ho(e, n),
                  (e = n.pendingProps),
                  (r = (l = r._init)(r._payload)),
                  (n.type = r),
                  (l = n.tag = (function (e) {})(r)),
                  (e = va(r, e)),
                  l)
                ) {
                  case 0:
                    n = No(null, n, r, e, t);
                    break e;
                  case 1:
                    n = Po(null, n, r, e, t);
                    break e;
                  case 11:
                    n = So(null, n, r, e, t);
                    break e;
                  case 14:
                    n = _o(null, n, r, va(r.type, e), t);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return n;
            case 0:
              return (r = n.type), (l = n.pendingProps), No(e, n, r, (l = n.elementType === r ? l : va(r, l)), t);
            case 1:
              return (r = n.type), (l = n.pendingProps), Po(e, n, r, (l = n.elementType === r ? l : va(r, l)), t);
            case 3:
              e: {
                if ((zo(n), null === e)) throw Error(a(387));
                (r = n.pendingProps), (l = (i = n.memoizedState).element), Oa(e, n), Fa(n, r, null, t);
                var o = n.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (((i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }), (n.updateQueue.baseState = i), (n.memoizedState = i), 256 & n.flags)) {
                    n = To(e, n, r, t, (l = so(Error(a(423)), n)));
                    break e;
                  }
                  if (r !== l) {
                    n = To(e, n, r, t, (l = so(Error(a(424)), n)));
                    break e;
                  }
                  for (ra = sl(n.stateNode.containerInfo.firstChild), ta = n, la = !0, aa = null, t = Ga(n, null, r, t), n.child = t; t; ) (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((pa(), r === l)) {
                    n = Wo(e, n, t);
                    break e;
                  }
                  wo(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                ai(n),
                null === e && sa(n),
                (r = n.type),
                (l = n.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = l.children),
                tl(r, l) ? (o = null) : null !== i && tl(r, i) && (n.flags |= 32),
                Co(e, n),
                wo(e, n, o, t),
                n.child
              );
            case 6:
              return null === e && sa(n), null;
            case 13:
              return Io(e, n, t);
            case 4:
              return ri(n, n.stateNode.containerInfo), (r = n.pendingProps), null === e ? (n.child = Ya(n, null, r, t)) : wo(e, n, r, t), n.child;
            case 11:
              return (r = n.type), (l = n.pendingProps), So(e, n, r, (l = n.elementType === r ? l : va(r, l)), t);
            case 7:
              return wo(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return wo(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (((r = n.type._context), (l = n.pendingProps), (i = n.memoizedProps), (o = l.value), Cl(ga, r._currentValue), (r._currentValue = o), null !== i))
                  if (or(i.value, o)) {
                    if (i.children === l.children && !Ll.current) {
                      n = Wo(e, n, t);
                      break e;
                    }
                  } else
                    for (null !== (i = n.child) && (i.return = n); null !== i; ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        o = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Ra(-1, t & -t)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f ? (s.next = s) : ((s.next = f.next), (f.next = s)), (c.pending = s);
                              }
                            }
                            (i.lanes |= t), null !== (s = i.alternate) && (s.lanes |= t), _a(i.return, t, n), (u.lanes |= t);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag) o = i.type === n.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(a(341));
                        (o.lanes |= t), null !== (u = o.alternate) && (u.lanes |= t), _a(o, t, n), (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === n) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                wo(e, n, l.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (l = n.type), (r = n.pendingProps.children), xa(n, t), (r = r((l = Ea(l)))), (n.flags |= 1), wo(e, n, r, t), n.child;
            case 14:
              return (l = va((r = n.type), n.pendingProps)), _o(e, n, r, (l = va(r.type, l)), t);
            case 15:
              return xo(e, n, n.type, n.pendingProps, t);
            case 17:
              return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : va(r, l)), Ho(e, n), (n.tag = 1), Ol(r) ? ((e = !0), jl(n)) : (e = !1), xa(n, t), Ba(n, r, l), Wa(n, r, l, t), Lo(null, n, r, !0, e, t);
            case 19:
              return Bo(e, n, t);
            case 22:
              return Eo(e, n, t);
          }
          throw Error(a(156, n.tag));
        };
        var Ks =
          "function" === typeof reportError
            ? reportError
            : function (e) {};
        function Xs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {}
        function Gs(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Zs(e) {}
        function Js() {}
        function ec(e, n, t, r, l) {}
        (Ys.prototype.render = Xs.prototype.render = function (e) {
          var n = this._internalRoot;
          if (null === n) throw Error(a(409));
          Hs(e, n, null, null);
        }),
          (Ys.prototype.unmount = Xs.prototype.unmount = function () {}),
          (Ys.prototype.unstable_scheduleHydration = function (e) {}),
          (Sn = function (e) {}),
          (_n = function (e) {}),
          (xn = function (e) {}),
          (En = function () {}),
          (Cn = function (e, n) {}),
          (Se = function (e, n, t) {}),
          (Pe = cs),
          (Le = fs);
        var nc = { usingClientEntryPoint: !1, Events: [bl, kl, wl, Ce, Ne, cs] },
          tc = { findFiberByHostInstance: yl, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
          rc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {},
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {},
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!lc.isDisabled && lc.supportsFiber)
            try {
              (ln = lc.inject(rc)), (an = lc);
            } catch (ce) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc),
          (n.createPortal = function (e, n) {}),
          (n.createRoot = function (e, n) {
            if (!Gs(e)) throw Error(a(299));
            var t = !1,
              r = "",
              l = Ks;
            return (
              null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (t = !0), void 0 !== n.identifierPrefix && (r = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (n = Vs(e, 1, !1, null, 0, t, 0, r, l)),
              (e[hl] = n.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new Xs(n)
            );
          }),
          (n.findDOMNode = function (e) {}),
          (n.flushSync = function (e) {}),
          (n.hydrate = function (e, n, t) {}),
          (n.hydrateRoot = function (e, n, t) {}),
          (n.render = function (e, n, t) {}),
          (n.unmountComponentAtNode = function (e) {}),
          (n.unstable_batchedUpdates = cs),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {}),
          (n.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, n, t) {
        var r = t(164);
        (n.createRoot = r.createRoot), (n.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, n, t) {
        !(function e() {
          if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
              console.error(n);
            }
        })(),
          (e.exports = t(463));
      },
      374: function (e, n, t) {
        var r = t(791),
          l = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, n, t) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n)) i.call(n, r) && !u.hasOwnProperty(r) && (a[r] = n[r]);
          if (e && e.defaultProps) for (r in (n = e.defaultProps)) void 0 === a[r] && (a[r] = n[r]);
          return { $$typeof: l, type: e, key: s, ref: c, props: a, _owner: o.current };
        }
        (n.Fragment = a), (n.jsx = s), (n.jsxs = s);
      },
      117: function (e, n) {
        var t = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          l = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {},
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, n, t) {
          (this.props = e), (this.context = n), (this.refs = v), (this.updater = t || h);
        }
        function y() {}
        function b(e, n, t) {}
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, n) {}),
          (g.prototype.forceUpdate = function (e) {}),
          (y.prototype = g.prototype);
        var k = (b.prototype = new y());
        (k.constructor = b), m(k, g.prototype), (k.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          _ = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, n, r) {}
        function C(e) {}
        var N = /\/+/g;
        function P(e, n) {}
        function L(e, n, l, a, i) {}
        function z(e, n, t) {}
        function T(e) {}
        var O = { current: null },
          R = { transition: null },
          M = { ReactCurrentDispatcher: O, ReactCurrentBatchConfig: R, ReactCurrentOwner: _ };
        (n.Children = {
          map: z,
          forEach: function (e, n, t) {},
          count: function (e) {},
          toArray: function (e) {},
          only: function (e) {},
        }),
          (n.Component = g),
          (n.Fragment = l),
          (n.Profiler = i),
          (n.PureComponent = b),
          (n.StrictMode = a),
          (n.Suspense = c),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (n.cloneElement = function (e, n, r) {}),
          (n.createContext = function (e) {}),
          (n.createElement = E),
          (n.createFactory = function (e) {}),
          (n.createRef = function () {}),
          (n.forwardRef = function (e) {}),
          (n.isValidElement = C),
          (n.lazy = function (e) {}),
          (n.memo = function (e, n) {}),
          (n.startTransition = function (e) {}),
          (n.unstable_act = function () {}),
          (n.useCallback = function (e, n) {
            return O.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {}),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {}),
          (n.useEffect = function (e, n) {
            return O.current.useEffect(e, n);
          }),
          (n.useId = function () {}),
          (n.useImperativeHandle = function (e, n, t) {}),
          (n.useInsertionEffect = function (e, n) {}),
          (n.useLayoutEffect = function (e, n) {}),
          (n.useMemo = function (e, n) {}),
          (n.useReducer = function (e, n, t) {}),
          (n.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (n.useState = function (e) {
            return O.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {}),
          (n.useTransition = function () {}),
          (n.version = "18.2.0");
      },
      791: function (e, n, t) {
        e.exports = t(117);
      },
      184: function (e, n, t) {
        e.exports = t(374);
      },
      813: function (e, n) {
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var r = (t - 1) >>> 1,
              l = e[r];
            if (!(0 < a(l, n))) break e;
            (e[r] = n), (e[t] = l), (t = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function l(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, l = e.length, i = l >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                u = e[o],
                s = o + 1,
                c = e[s];
              if (0 > a(u, t)) s < l && 0 > a(c, u) ? ((e[r] = c), (e[s] = t), (r = s)) : ((e[r] = u), (e[o] = t), (r = o));
              else {
                if (!(s < l && 0 > a(c, t))) break e;
                (e[r] = c), (e[s] = t), (r = s);
              }
            }
          }
          return n;
        }
        function a(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var i = performance;
          n.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            u = o.now();
          n.unstable_now = function () {};
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var n = r(c); null !== n; ) {
            if (null === n.callback) l(c);
            else {
              if (!(n.startTime <= e)) break;
              l(c), (n.sortIndex = n.expirationTime), t(s, n);
            }
            n = r(c);
          }
        }
        function w(e) {}
        function S(e, t) {
          (m = !1), v && ((v = !1), y(C), (C = -1)), (h = !0);
          var a = p;
          try {
            for (k(t), d = r(s); null !== d && (!(d.expirationTime > t) || (e && !L())); ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var o = i(d.expirationTime <= t);
                (t = n.unstable_now()), "function" === typeof o ? (d.callback = o) : d === r(s) && l(s), k(t);
              } else l(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && M(w, f.startTime - t), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var _,
          x = !1,
          E = null,
          C = -1,
          N = 5,
          P = -1;
        function L() {
          return !(n.unstable_now() - P < N);
        }
        function z() {
          if (null !== E) {
            var e = n.unstable_now();
            P = e;
            var t = !0;
            try {
              t = E(!0, e);
            } finally {
              t ? _() : ((x = !1), (E = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          _ = function () {};
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            O = T.port2;
          (T.port1.onmessage = z),
            (_ = function () {
              O.postMessage(null);
            });
        } else
          _ = function () {};
        function R(e) {
          (E = e), x || ((x = !0), _());
        }
        function M(e, t) {}
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {}),
          (n.unstable_continueExecution = function () {}),
          (n.unstable_forceFrameRate = function (e) {}),
          (n.unstable_getCurrentPriorityLevel = function () {}),
          (n.unstable_getFirstCallbackNode = function () {}),
          (n.unstable_next = function (e) {}),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {}),
          (n.unstable_scheduleCallback = function (e, l, a) {
            var i = n.unstable_now();
            switch (("object" === typeof a && null !== a ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i) : (a = i), e)) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = { id: f++, callback: l, priorityLevel: e, startTime: a, expirationTime: (o = a + o), sortIndex: -1 }),
              a > i ? ((e.sortIndex = a), t(c, e), null === r(s) && e === r(c) && (v ? (y(C), (C = -1)) : (v = !0), M(w, a - i))) : ((e.sortIndex = o), t(s, e), m || h || ((m = !0), R(S))),
              e
            );
          }),
          (n.unstable_shouldYield = L),
          (n.unstable_wrapCallback = function (e) {});
      },
      296: function (e, n, t) {
        e.exports = t(813);
      },
    },
    n = {};
  function t(r) {
    var l = n[r];
    if (void 0 !== l) return l.exports;
    var a = (n[r] = { exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  !(function () {
    var e = t(791),
      n = t(250),
      r = t(184),
      l = function (n) {
        var t = e.useRef();
        return (0, r.jsx)("li", {
          ref: t,
          className: "event" + (n.slim ? " event_slim" : ""),
          children: (0, r.jsxs)("button", {
            className: "event__button",
            children: [
              (0, r.jsx)("span", { className: "event__icon event__icon_".concat(n.icon), role: "img", "aria-label": n.iconLabel }),
              (0, r.jsx)("h4", { className: "event__title", children: n.title }),
              n.subtitle && (0, r.jsx)("span", { className: "event__subtitle", children: n.subtitle }),
            ],
          }),
        });
      };
    function a(e) {
      return (
        (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {}),
        a(e)
      );
    }
    function i(e) {
      var n = (function (e, n) {
        if ("object" !== a(e) || null === e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var r = t.call(e, n || "default");
          if ("object" !== a(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === n ? String : Number)(e);
      })(e, "string");
      return "symbol" === a(n) ? n : String(n);
    }
    function o(e, n, t) {
      return (n = i(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
    }
    function u(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n &&
          (r = r.filter(function (n) {})),
          t.push.apply(t, r);
      }
      return t;
    }
    function s(e, n) {}
    function c(e, n) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {})(e, n) ||
        (function (e, n) {})(e, n) ||
        (function () {})()
      );
    }
    for (
      var f = {
          all: {
            title: "\u0412\u0441\u0435",
            items: [
              { icon: "light2", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Xiaomi Yeelight LED Smart Bulb", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "D-Link Omna 180 Cam", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00" },
              { icon: "temp", iconLabel: "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430", title: "Elgato Eve Degree Connected", subtitle: "\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0434\u043e 17:00" },
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "LIFX Mini Day & Dusk A60 E27", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00" },
              { icon: "light2", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Xiaomi Mi Air Purifier 2S", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Philips Zhirui", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Philips Zhirui", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
              { icon: "light2", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Xiaomi Mi Air Purifier 2S", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
            ],
          },
          kitchen: {
            title: "\u041a\u0443\u0445\u043d\u044f",
            items: [
              { icon: "light2", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Xiaomi Yeelight LED Smart Bulb", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
              { icon: "temp", iconLabel: "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430", title: "Elgato Eve Degree Connected", subtitle: "\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0434\u043e 17:00" },
            ],
          },
          hall: {
            title: "\u0417\u0430\u043b",
            items: [
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Philips Zhirui", subtitle: "\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
              { icon: "light2", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Xiaomi Mi Air Purifier 2S", subtitle: "\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
            ],
          },
          lights: {
            title: "\u041b\u0430\u043c\u043f\u043e\u0447\u043a\u0438",
            items: [
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "D-Link Omna 180 Cam", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00" },
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "LIFX Mini Day & Dusk A60 E27", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00" },
              { icon: "light2", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Xiaomi Mi Air Purifier 2S", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
              { icon: "light", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Philips Zhirui", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" },
            ],
          },
          cameras: {
            title: "\u041a\u0430\u043c\u0435\u0440\u044b",
            items: [{ icon: "light2", iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435", title: "Xiaomi Mi Air Purifier 2S", subtitle: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e" }],
          },
        },
        d = 0;
      d < 6;
      ++d
    )
      f.all.items = f.all.items.concat(f.all.items);
    var p = Object.keys(f),
      h = function () {
        var n = e.useRef(),
          t = c(e.useState(new URLSearchParams(window.location.search).get("tab") || "all"), 2),
          a = t[0],
          i = t[1],
          s = c(e.useState(!1), 2),
          d = s[0],
          h = s[1],
          m = (0, e.useCallback)(
            function (e) {
              i(e);
            },
            [i]
          ),
          v = (0, e.useCallback)(
            function (e) {
              h(e);
            },
            [h]
          );
        e.useEffect(
          function () {
            var e = 200 * f[a].items.length > n.current.offsetWidth;
            v(e);
          },
          [a, v]
        );
        return (0, r.jsxs)("section", {
          className: "section main__devices",
          children: [
            (0, r.jsxs)("div", {
              className: "section__title",
              children: [
                (0, r.jsx)("h2", { className: "section__title-header", children: "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430" }),
                (0, r.jsx)("select", {
                  className: "section__select",
                  defaultValue: "all",
                  onInput: function (e) {
                    return m(e.target.value);
                  },
                  children: p.map(function (e) {
                    return (0, r.jsx)("option", { value: e, children: f[e].title }, e);
                  }),
                }),
                (0, r.jsx)("ul", {
                  role: "tablist",
                  className: "section__tabs",
                  children: p.map(function (e) {
                    return (0, r.jsx)(
                      "li",
                      {
                        role: "tab",
                        "aria-selected": e === a ? "true" : "false",
                        tabIndex: e === a ? "0" : void 0,
                        className: "section__tab" + (e === a ? " section__tab_active" : ""),
                        id: "tab_".concat(e),
                        "aria-controls": "panel_".concat(e),
                        onClick: function () {
                          return m(e);
                        },
                        children: f[e].title,
                      },
                      e
                    );
                  }),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "section__panel-wrapper",
              children: [
                (0, r.jsx)("div", {
                  ref: n,
                  role: "tabpanel",
                  className: "section__panel",
                  id: "panel_".concat(a),
                  "aria-labelledby": "tab_".concat(a),
                  children: (0, r.jsx)("ul", {
                    className: "section__panel-list",
                    children: f[a].items.map(function (e, n) {
                      return (0, r.jsx)(
                        l,
                        (function (e) {
                          for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {};
                            n % 2
                              ? u(Object(t), !0).forEach(function (n) {
                                  o(e, n, t[n]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                              : u(Object(t)).forEach(function (n) {
                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                });
                          }
                          return e;
                        })({}, e),
                        n
                      );
                    }),
                  }),
                }),
                d &&
                  (0, r.jsx)("div", {
                    className: "section__arrow",
                    onClick: function () {
                      n.current.scrollTo({ left: n.current.scrollLeft + 400, behavior: "smooth" });
                    },
                  }),
              ],
            }),
          ],
        });
      };
    function m() {
      return (0, r.jsxs)("main", {
        className: "main",
        children: [
          (0, r.jsxs)("section", {
            className: "section main__general",
            children: [
              (0, r.jsx)("h2", { className: "section__title section__title-header section__main-title", children: "\u0413\u043b\u0430\u0432\u043d\u043e\u0435" }),
              (0, r.jsxs)("div", {
                className: "hero-dashboard",
                children: [
                  (0, r.jsxs)("div", {
                    className: "hero-dashboard__primary",
                    children: [
                      (0, r.jsx)("h3", { className: "hero-dashboard__title", children: "\u041f\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043d\u043d\u0430\u0434\u0438\u0439!" }),
                      (0, r.jsx)("p", {
                        className: "hero-dashboard__subtitle",
                        children:
                          "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043e\u043a\u043d\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u044b, \u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430.",
                      }),
                      (0, r.jsxs)("ul", {
                        className: "hero-dashboard__info",
                        children: [
                          (0, r.jsxs)("li", {
                            className: "hero-dashboard__item",
                            children: [
                              (0, r.jsx)("div", { className: "hero-dashboard__item-title", children: "\u0414\u043e\u043c\u0430" }),
                              (0, r.jsxs)("div", { className: "hero-dashboard__item-details", children: ["+23", (0, r.jsx)("span", { className: "a11y-hidden", children: "\xb0" })] }),
                            ],
                          }),
                          (0, r.jsxs)("li", {
                            className: "hero-dashboard__item",
                            children: [
                              (0, r.jsx)("div", { className: "hero-dashboard__item-title", children: "\u0417\u0430 \u043e\u043a\u043d\u043e\u043c" }),
                              (0, r.jsxs)("div", {
                                className: "hero-dashboard__item-details",
                                children: [
                                  "+19",
                                  (0, r.jsx)("span", { className: "a11y-hidden", children: "\xb0" }),
                                  (0, r.jsx)("div", { className: "hero-dashboard__icon hero-dashboard__icon_rain", role: "img", "aria-label": "\u0414\u043e\u0436\u0434\u044c" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("ul", {
                    className: "hero-dashboard__schedule",
                    children: [
                      (0, r.jsx)(l, {
                        icon: "temp",
                        iconLabel: "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                        title: "Philips Cooler",
                        subtitle: "\u041d\u0430\u0447\u043d\u0435\u0442 \u043e\u0445\u043b\u0430\u0436\u0434\u0430\u0442\u044c \u0432 16:30",
                      }),
                      (0, r.jsx)(l, {
                        icon: "light",
                        iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",
                        title: "Xiaomi Yeelight LED Smart Bulb",
                        subtitle: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00",
                      }),
                      (0, r.jsx)(l, {
                        icon: "light",
                        iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",
                        title: "Xiaomi Yeelight LED Smart Bulb",
                        subtitle: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)("section", {
            className: "section main__scripts",
            children: [
              (0, r.jsx)("h2", { className: "section__title section__title-header", children: "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438" }),
              (0, r.jsxs)("ul", {
                className: "event-grid",
                children: [
                  (0, r.jsx)(l, {
                    slim: !0,
                    icon: "light2",
                    iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",
                    title: "\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u0441\u0432\u0435\u0442 \u0432 \u0434\u043e\u043c\u0435 \u0438 \u0432\u043e \u0434\u0432\u043e\u0440\u0435",
                  }),
                  (0, r.jsx)(l, { slim: !0, icon: "schedule", iconLabel: "\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435", title: "\u042f \u0443\u0445\u043e\u0436\u0443" }),
                  (0, r.jsx)(l, {
                    slim: !0,
                    icon: "light2",
                    iconLabel: "\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",
                    title: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0432\u0435\u0442 \u0432 \u043a\u043e\u0440\u0438\u0434\u043e\u0440\u0435",
                  }),
                  (0, r.jsx)(l, {
                    slim: !0,
                    icon: "temp2",
                    iconLabel: "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                    title: "\u041d\u0430\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u044f\u0447\u0443\u044e \u0432\u0430\u043d\u043d\u0443",
                    subtitle: "\u041d\u0430\u0447\u043d\u0451\u0442\u0441\u044f \u0432 18:00",
                  }),
                  (0, r.jsx)(l, {
                    slim: !0,
                    icon: "temp2",
                    iconLabel: "\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
                    title: "\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043e\u043b \u0442\u0451\u043f\u043b\u044b\u043c \u0432\u043e \u0432\u0441\u0435\u0439 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435",
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsx)(h, {}),
        ],
      });
    }
    function v() {
      var n = c(e.useState(!1), 2),
        t = n[0],
        l = n[1],
        a = c(e.useState(!1), 2),
        i = a[0],
        o = a[1],
        u = e.useCallback(
          function () {
            i || o(!0),
              l(function (e) {
                return !e;
              });
          },
          [i]
        );
      return (0, r.jsxs)("header", {
        className: "header",
        children: [
          (0, r.jsx)("a", { href: "/", className: "header__logo", "aria-label": "\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u043e\u043c" }),
          (0, r.jsx)("button", {
            className: "header__menu",
            "aria-expanded": t ? "true" : "false",
            onClick: u,
            children: (0, r.jsx)("span", {
              className: "header__menu-text a11y-hidden",
              children: t ? "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e" : "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
            }),
          }),
          (0, r.jsxs)("ul", {
            className: "header__links" + (t ? " header__links_opened" : "") + (i ? " header__links-toggled" : ""),
            children: [
              (0, r.jsx)("li", { className: "header__item", children: (0, r.jsx)("a", { className: "header__link header__link_current", href: "/", "aria-current": "page", children: "\u0421\u0432\u043e\u0434\u043a\u0430" }) }),
              (0, r.jsx)("li", { className: "header__item", children: (0, r.jsx)("a", { className: "header__link", href: "/devices", children: "\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430" }) }),
              (0, r.jsx)("li", { className: "header__item", children: (0, r.jsx)("a", { className: "header__link", href: "/scripts", children: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0438" }) }),
            ],
          }),
        ],
      });
    }
    n.createRoot(document.getElementById("app")).render((0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(v, {}), (0, r.jsx)(m, {})] }));
  })();
})();
//# sourceMappingURL=main.cc126b1b.js.map
