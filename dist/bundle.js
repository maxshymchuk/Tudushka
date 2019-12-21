!(function(e) {
  var n = {};
  function t(o) {
    if (n[o]) return n[o].exports;
    var r = (n[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
    }),
    (t.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function(e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if ((t.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & n && 'string' != typeof e))
        for (var r in e)
          t.d(
            o,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return o;
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ''),
    t((t.s = 27));
})([
  function(e, n, t) {
    'use strict';
    e.exports = function(e) {
      var n = [];
      return (
        (n.toString = function() {
          return this.map(function(n) {
            var t = (function(e, n) {
              var t = e[1] || '',
                o = e[3];
              if (!o) return t;
              if (n && 'function' == typeof btoa) {
                var r =
                    ((a = o),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(c)),
                    '/*# '.concat(l, ' */')),
                  i = o.sources.map(function(e) {
                    return '/*# sourceURL='.concat(o.sourceRoot).concat(e, ' */');
                  });
                return [t]
                  .concat(i)
                  .concat([r])
                  .join('\n');
              }
              var a, c, l;
              return [t].join('\n');
            })(n, e);
            return n[2] ? '@media '.concat(n[2], '{').concat(t, '}') : t;
          }).join('');
        }),
        (n.i = function(e, t) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var o = {}, r = 0; r < this.length; r++) {
            var i = this[r][0];
            null != i && (o[i] = !0);
          }
          for (var a = 0; a < e.length; a++) {
            var c = e[a];
            (null != c[0] && o[c[0]]) ||
              (t && !c[2] ? (c[2] = t) : t && (c[2] = '('.concat(c[2], ') and (').concat(t, ')')), n.push(c));
          }
        }),
        n
      );
    };
  },
  function(e, n, t) {
    'use strict';
    var o,
      r = {},
      i = function() {
        return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
      },
      a = (function() {
        var e = {};
        return function(n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        };
      })();
    function c(e, n) {
      for (var t = [], o = {}, r = 0; r < e.length; r++) {
        var i = e[r],
          a = n.base ? i[0] + n.base : i[0],
          c = { css: i[1], media: i[2], sourceMap: i[3] };
        o[a] ? o[a].parts.push(c) : t.push((o[a] = { id: a, parts: [c] }));
      }
      return t;
    }
    function l(e, n) {
      for (var t = 0; t < e.length; t++) {
        var o = e[t],
          i = r[o.id],
          a = 0;
        if (i) {
          for (i.refs++; a < i.parts.length; a++) i.parts[a](o.parts[a]);
          for (; a < o.parts.length; a++) i.parts.push(m(o.parts[a], n));
        } else {
          for (var c = []; a < o.parts.length; a++) c.push(m(o.parts[a], n));
          r[o.id] = { id: o.id, refs: 1, parts: c };
        }
      }
    }
    function d(e) {
      var n = document.createElement('style');
      if (void 0 === e.attributes.nonce) {
        var o = t.nc;
        o && (e.attributes.nonce = o);
      }
      if (
        (Object.keys(e.attributes).forEach(function(t) {
          n.setAttribute(t, e.attributes[t]);
        }),
        'function' == typeof e.insert)
      )
        e.insert(n);
      else {
        var r = a(e.insert || 'head');
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        r.appendChild(n);
      }
      return n;
    }
    var s,
      u =
        ((s = []),
        function(e, n) {
          return (s[e] = n), s.filter(Boolean).join('\n');
        });
    function g(e, n, t, o) {
      var r = t ? '' : o.css;
      if (e.styleSheet) e.styleSheet.cssText = u(n, r);
      else {
        var i = document.createTextNode(r),
          a = e.childNodes;
        a[n] && e.removeChild(a[n]), a.length ? e.insertBefore(i, a[n]) : e.appendChild(i);
      }
    }
    function b(e, n, t) {
      var o = t.css,
        r = t.media,
        i = t.sourceMap;
      if (
        (r && e.setAttribute('media', r),
        i &&
          btoa &&
          (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var M = null,
      h = 0;
    function m(e, n) {
      var t, o, r;
      if (n.singleton) {
        var i = h++;
        (t = M || (M = d(n))), (o = g.bind(null, t, i, !1)), (r = g.bind(null, t, i, !0));
      } else
        (t = d(n)),
          (o = b.bind(null, t, n)),
          (r = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(t);
          });
      return (
        o(e),
        function(n) {
          if (n) {
            if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
            o((e = n));
          } else r();
        }
      );
    }
    e.exports = function(e, n) {
      ((n = n || {}).attributes = 'object' == typeof n.attributes ? n.attributes : {}),
        n.singleton || 'boolean' == typeof n.singleton || (n.singleton = i());
      var t = c(e, n);
      return (
        l(t, n),
        function(e) {
          for (var o = [], i = 0; i < t.length; i++) {
            var a = t[i],
              d = r[a.id];
            d && (d.refs--, o.push(d));
          }
          e && l(c(e, n), n);
          for (var s = 0; s < o.length; s++) {
            var u = o[s];
            if (0 === u.refs) {
              for (var g = 0; g < u.parts.length; g++) u.parts[g]();
              delete r[u.id];
            }
          }
        }
      );
    };
  },
  function(e, n, t) {
    'use strict';
    e.exports = function(e, n) {
      return 'string' != typeof (e = e.__esModule ? e.default : e)
        ? e
        : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
          /["'() \t\n]/.test(e) || n ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"') : e);
    };
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwOXB0IiB2aWV3Qm94PSIwIC0zNiA1MDkuMjQ4IDUwOSIgd2lkdGg9IjUwOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNzEuOTAyMzQ0IDQzOC4wNzQyMTktMTcxLjkwMjM0NC0xNzEuOTAyMzQ0IDEwMC42MjUtMTAwLjYwOTM3NSA3MS4yNzczNDQgNzEuMjk2ODc1IDIzNi43MjI2NTYtMjM2LjczNDM3NSAxMDAuNjIxMDk0IDEwMC42MjEwOTR6bTAgMCIgZmlsbD0iI2FkZGIzMSIvPjwvc3ZnPg==';
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzAuOTAyIDcwLjkwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzAuOTAyIDcwLjkwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNNjUuNjk1LDIzLjE2MWMtMC4wMTItMC4xODItMC4wNDctMC4zNjEtMC4xMTEtMC41NDlsLTAuMDY2LTAuMTc2DQoJCQljLTAuMTEtMC4yNDQtMC4yNDYtMC40NDctMC40MTktMC42MTlMNDMuODkyLDAuNjFjLTAuMTctMC4xNjgtMC4zNy0wLjMwMy0wLjY0LTAuNDI2Yy0wLjA0NC0wLjAxOC0wLjA4Ny0wLjAzMy0wLjE1OS0wLjA1Nw0KCQkJYy0wLjE5LTAuMDY0LTAuMzc0LTAuMTAyLTAuNTcyLTAuMTExTDQyLjQxNiwwSDI4LjQwNWMtNS4wMzgsMC05LjEzNyw0LjA5OC05LjEzNyw5LjEzN3YxLjIyOWgtNC45NDQNCgkJCWMtNS4wMzcsMC05LjEzNiw0LjEtOS4xMzYsOS4xMzd2NDIuMjYyYzAsNS4wMzcsNC4wOTksOS4xMzcsOS4xMzYsOS4xMzdoMjguMTc1YzUuMDM3LDAsOS4xMzYtNC4xLDkuMTM2LTkuMTM3di0xLjIzaDQuOTQzDQoJCQljNS4wMzgsMCw5LjEzNy00LjA5OCw5LjEzNy05LjEzN1YyMy4zMDFMNjUuNjk1LDIzLjE2MXogTTQ0LjUwNyw3LjE0NWwxNC4wNjEsMTQuMDYzaC05LjExMWMtMi43MjksMC00Ljk0OS0yLjIyMS00Ljk0OS00Ljk1MQ0KCQkJTDQ0LjUwNyw3LjE0NUw0NC41MDcsNy4xNDV6IE00Ny40NDgsNjEuNzY0YzAsMi43My0yLjIyMSw0Ljk1MS00Ljk1LDQuOTUxSDE0LjMyM2MtMi43MjksMC00Ljk1LTIuMjIxLTQuOTUtNC45NTFWMTkuNTAyDQoJCQljMC0yLjczLDIuMjIxLTQuOTUxLDQuOTUtNC45NTFoMTEuOTE4djEyLjA3YzAsNS4wMzksNC4wOTksOS4xMzcsOS4xMzcsOS4xMzdoMTIuMDdWNjEuNzY0eiBNMzAuNDI3LDI2LjYyMnYtOS4xMWwxNC4wNjIsMTQuMDYxDQoJCQloLTkuMTFDMzIuNjQ3LDMxLjU3MywzMC40MjcsMjkuMzUyLDMwLjQyNywyNi42MjJ6IE02MS41MjgsNTEuMzk3YzAsMi43My0yLjIyMSw0Ljk1MS00Ljk1LDQuOTUxaC00Ljk0M1YzMy42NjVsLTAuMDItMC4xMzcNCgkJCWMtMC4wMTItMC4xODItMC4wNDYtMC4zNTUtMC4xMS0wLjU0N2wtMC4wNzItMC4xODljLTAuMTExLTAuMjQyLTAuMjQ2LTAuNDM5LTAuNDEtMC42MDRsLTIxLjIxLTIxLjIxMw0KCQkJYy0wLjE2OC0wLjE2Ni0wLjM2OS0wLjMwMS0wLjU4NS0wLjM5OGMtMC4wNjItMC4wMjktMC4xMjYtMC4wNTUtMC4yMDctMC4wOGMtMC4xODUtMC4wNjQtMC4zNzMtMC4xMDItMC41NDctMC4xMTF2MC4wMDQNCgkJCWwtMC4xMzktMC4wMjNoLTQuODgxVjkuMTM4YzAtMi43MywyLjIyMS00Ljk1MSw0Ljk1MS00Ljk1MWgxMS45MTh2MTIuMDdjMCw1LjAzOSw0LjA5OCw5LjEzNyw5LjEzNSw5LjEzN2gxMi4wN1Y1MS4zOTd6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjkuNjUsMzguNzQ3YzAtMS4xMDQtMC44OTYtMi0yLTJzLTIsMC44OTYtMiwydjcuMTcyaC03LjE3MmMtMS4xMDQsMC0yLDAuODk2LTIsMg0KCQkJYzAsMS4xMDUsMC44OTYsMiwyLDJoNy4xNzJ2Ny4xNzJjMCwxLjEwNSwwLjg5NiwyLDIsMnMyLTAuODk1LDItMnYtNy4xNzJoNy4xNzNjMS4xMDQsMCwyLTAuODk1LDItMmMwLTEuMTA0LTAuODk2LTItMi0ySDI5LjY1DQoJCQlWMzguNzQ3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NDMuMjk0IDQ0My4yOTQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDQzLjI5NCA0NDMuMjk0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNzcuMDU5IDMzMi40NzFoMjcuNzA2di01NS40MTJoNTUuNDEydi0yNy43MDZoLTU1LjQxMnYtNTUuNDEyaC0yNy43MDZ2NTUuNDEyaC01NS40MTJ2MjcuNzA2aDU1LjQxMnoiLz48cGF0aCBkPSJtNDE1LjU4OCA4My4xMThoLTIwMi4wNThsLTUxLjM1My01MS4zNTNjLTIuNTk3LTIuNTk3LTYuMTE1LTQuMDU4LTkuNzk0LTQuMDU4aC0xMjQuNjc3Yy0xNS4yNzQtLjAwMS0yNy43MDYgMTIuNDMxLTI3LjcwNiAyNy43MDV2MzMyLjQ3MWMwIDE1LjI3MyAxMi40MzIgMjcuNzA2IDI3LjcwNiAyNy43MDZoMzg3Ljg4MmMxNS4yNzMgMCAyNy43MDYtMTIuNDMyIDI3LjcwNi0yNy43MDZ2LTI3Ny4wNTljMC0xNS4yNzQtMTIuNDMyLTI3LjcwNi0yNy43MDYtMjcuNzA2em0wIDMwNC43NjRoLTM4Ny44ODJ2LTMzMi40N2gxMTguOTRsNTEuMzU0IDUxLjM1M2MyLjU5NyAyLjU5NyA2LjExNSA0LjA1OCA5Ljc5NCA0LjA1OGgyMDcuNzk0eiIvPjwvc3ZnPg==';
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTAwLjY5OCwxMTUuMTY0TDQ2NC45MDMsNzkuMzdjLTE1LjM0LTE1LjM0MS00MC45MDgtMTUuMzQxLTU2LjI0OCwwTDIxMC45MzIsMjc4Ljc5OEwxMDMuNTQ4LDE3MS40MTMgICAgYy0xNS4zNDEtMTUuMzQtNDAuOTA4LTE1LjM0LTU2LjI0OCwwbC0zNS43OTQsMzUuNzk0Yy0xNS4zNCwxNS4zNC0xNS4zNCw0MC45MDgsMCw1Ni4yNDlsMTY4Ljc0NiwxNjguNzQ2ICAgIGM2LjgxOCw2LjgxOCwxNy4wNDUsMTEuOTMyLDI4Ljk3NiwxMS45MzJoMS43MDVjMTAuMjI3LDAsMjAuNDU0LTMuNDA5LDI3LjI3Mi0xMS45MzJsMjYwLjc4OS0yNjAuNzkgICAgQzUxNi4wMzgsMTU2LjA3Miw1MTYuMDM4LDEzMC41MDUsNTAwLjY5OCwxMTUuMTY0eiBNNDc2LjgzNSwxNDcuNTVsLTI2MC43OSwyNjAuNzg5Yy0xLjcwNSwxLjcwNS0zLjQwOSwxLjcwNS0zLjQwOSwxLjcwNWgtMS43MDUgICAgYy0xLjcwNSwwLTMuNDA5LDAtMy40MDktMS43MDVMMzguNzc2LDIzOS41OTRjLTMuNDA5LTMuNDA5LTMuNDA5LTYuODE4LTEuNzA1LTguNTIzbDM1Ljc5NC0zNS43OTQgICAgYzEuNzA0LTEuNzA1LDMuNDA5LTEuNzA1LDMuNDA5LTEuNzA1czMuNDA5LDAsMy40MDksMS43MDVsMTE5LjMxNSwxMTkuMzE1YzYuODE4LDYuODE4LDE3LjA0NSw2LjgxOCwyMy44NjMsMGwyMTEuMzU5LTIxMS4zNTkgICAgYzMuNDA5LTMuNDA5LDUuMTEzLTMuNDA5LDguNTIzLDBsMzUuNzk1LDM1Ljc5NEM0NzguNTM5LDE0MC43MzIsNDc4LjUzOSwxNDQuMTQxLDQ3Ni44MzUsMTQ3LjU1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4K';
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwOS4yNDhwdCIgdmlld0JveD0iMCAwIDUwOS4yNDggNTA5LjI0OCIgd2lkdGg9IjUwOS4yNDhwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzkzLjgyNDIxOSA1MDkuMjQ2MDk0LTEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5IDEzOS4xOTkyMTktMTE1LjQyNTc4MS0xMTUuNDIxODc1IDEzOS4xOTkyMTktMTM5LjE5OTIxOS0xMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyNTc4MS0xMTUuNDI1NzgxIDEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5LTEzOS4xOTkyMTkgMTE1LjQyMTg3NSAxMTUuNDI1NzgxLTEzOS4xOTkyMTkgMTM5LjE5OTIxOSAxMzkuMTk5MjE5IDEzOS4xOTkyMTl6bTAgMCIgZmlsbD0iI2U3NmU1NCIvPjwvc3ZnPg==';
  },
  function(e, n, t) {
    var o = t(9);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    (e.exports = t(0)(!1)).push([
      e.i,
      "html *::-webkit-scrollbar {\n  width: 10px;\n}\nhtml *::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: transparent;\n  box-sizing: border-box;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n}\n\nbody {\n  margin: 0;\n  font-family: 'Zilla Slab', serif;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: 'Zilla Slab', serif;\n}\ninput:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n",
      ''
    ]);
  },
  function(e, n, t) {
    var o = t(11);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    n = e.exports = t(0)(!1);
    var o = t(2),
      r = o(t(12)),
      i = o(t(4)),
      a = o(t(5)),
      c = o(t(6));
    n.push([
      e.i,
      ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n@keyframes rotating {\n  0% {\n    transform: rotate(0);\n  }\n  50%,\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fading-moving-top {\n  0% {\n    top: 50px;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes fading-moving-left {\n  0% {\n    left: -50px;\n    opacity: 0;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes fading {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes bubble {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shaking {\n  0% {\n    transform: rotate(0);\n  }\n  33% {\n    transform: rotate(-5deg);\n  }\n  66% {\n    transform: rotate(5deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes disappearing {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n.hello {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  overflow: hidden;\n  user-select: none;\n}\n.hello .logo {\n  min-width: 100px;\n  min-height: 100px;\n  padding: 20px;\n  border-radius: 50%;\n  background: url(' +
        r +
        ") no-repeat center center #fff;\n  background-size: 80%;\n  position: relative;\n  top: 30px;\n  z-index: 2;\n  animation: rotating 6s 1s infinite normal ease-in-out;\n}\n.hello .title {\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 3rem;\n  color: #fff;\n  padding: 30px 0;\n  font-weight: bold;\n  letter-spacing: 5px;\n  background-color: var(--accent-color);\n}\n.hello .details {\n  font-size: 1rem;\n  padding: 30px 0;\n}\n.hello .button {\n  border-radius: var(--button-border-radius);\n  border: 0;\n  background-color: var(--menu-button-color);\n  margin: 5px 0;\n  padding: 5px 10px;\n  line-height: 20px;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  padding: 8px 100px;\n  transition: all 0.5s;\n}\n.hello .button.menu__create_note:before,\n.hello .button.menu__create_folder:before,\n.hello .button.menu__open_completed:before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin-right: 5px;\n}\n.hello .button.menu__create_note:before {\n  background: url(" +
        i +
        ') no-repeat center center;\n  background-size: 80%;\n}\n.hello .button.menu__create_folder:before {\n  background: url(' +
        a +
        ') no-repeat center center;\n  background-size: 80%;\n}\n.hello .button.menu__open_completed:before {\n  background: url(' +
        c +
        ') no-repeat center center;\n  background-size: 80%;\n}\n.hello .button:hover {\n  background-color: var(--menu-button-hover-color);\n}\n.hello .button:hover {\n  background-color: var(--accent-color);\n  padding: 8px 200px;\n  color: #fff;\n}\n',
      ''
    ]);
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3MzcgNzM3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3MzcgNzM3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRjAwO30NCgkuc3Qxe2ZpbGw6IzAwRkYwMDt9DQoJLnN0MntmaWxsOiMwMDAwRkY7fQ0KCS5zdDN7ZmlsbDojRkYwMDAwO30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzNjkiIGN5PSIxMDAiIHI9IjEwMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMTAwIiBjeT0iMzY4LjIiIHI9IjEwMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iNjM3IiBjeT0iMzY4LjIiIHI9IjEwMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMzY5IiBjeT0iNjM3IiByPSIxMDAiLz4NCjwvc3ZnPg0K';
  },
  function(e, n, t) {
    var o = t(14);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    n = e.exports = t(0)(!1);
    var o = t(2),
      r = o(t(3)),
      i = o(t(15));
    n.push([
      e.i,
      ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.grid {\n  display: grid;\n  justify-content: center;\n  padding: 25px 20px;\n  grid: 240px / repeat(auto-fill, 200px);\n  grid-gap: var(--grid-gap);\n  user-select: none;\n  position: relative;\n}\n.grid .item {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 240px;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n}\n.grid .item .complete {\n  position: absolute;\n  border: 0;\n  width: 30px;\n  height: 30px;\n  margin: 10px;\n  border-radius: 50%;\n  bottom: -40px;\n  right: 0;\n  background: url(' +
        r +
        ') no-repeat center center var(--hover-button-color);\n  background-size: 60%;\n  cursor: pointer;\n  transition: bottom var(--transition-time), background-color var(--transition-time);\n}\n.grid .item .complete:hover {\n  background-color: var(--placeholder-color);\n}\n.grid .item .title-section {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #000;\n  padding: 0 10px;\n  min-height: 40px;\n}\n.grid .item .title-section .title {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 40px;\n  font-size: 1.5rem;\n}\n.grid .item .checkbox {\n  display: none;\n}\n.grid .item .checkbox + .checkbox__label {\n  cursor: pointer;\n  min-width: 30px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  border: 5px solid var(--hover-button-color);\n  transition: border var(--transition-time), box-shadow var(--transition-time);\n}\n.grid .item .checkbox:checked + .checkbox__label {\n  border: 15px solid var(--hover-button-color);\n}\n.grid .item .checkbox:not(:checked) + .checkbox__label {\n  border: 5px solid transparent;\n}\n.grid .item:hover .complete {\n  bottom: 0;\n}\n.grid .item:hover .checkbox + .checkbox__label {\n  box-shadow: inset 0 0 0 5px var(--hover-button-color);\n}\n.grid .item.folder {\n  background: url(' +
        i +
        ') no-repeat center 65% var(--folder-color);\n  background-size: 60%;\n  transition: background-color var(--transition-time);\n}\n.grid .item.folder:hover {\n  background-color: var(--folder-hover-color);\n}\n.grid .item.note {\n  transition: box-shadow var(--transition-time);\n  box-shadow: var(--box-shadow);\n}\n.grid .item.note:hover {\n  box-shadow: 0 0 10px 5px var(--box-shadow-color);\n}\n.grid .item.note .content {\n  display: block;\n  justify-self: stretch;\n  margin: 10px;\n  margin-top: 0;\n  padding-right: 5px;\n  word-break: break-word;\n  overflow-y: auto;\n}\n.grid .item.note .content p {\n  padding: 5px 0;\n  margin: 0;\n}\n',
      ''
    ]);
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTggNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4IDU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRUZDRTRBOyIgZD0iTTQ2LjMyNCw1Mi41SDEuNTY1Yy0xLjAzLDAtMS43NzktMC45NzgtMS41MS0xLjk3M2wxMC4xNjYtMjcuODcxDQoJYzAuMTg0LTAuNjgyLDAuODAzLTEuMTU2LDEuNTEtMS4xNTZINTYuNDljMS4wMywwLDEuNTEsMC45ODQsMS41MSwxLjk3M0w0Ny44MzQsNTEuMzQ0QzQ3LjY1LDUyLjAyNiw0Ny4wMzEsNTIuNSw0Ni4zMjQsNTIuNXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFQkJBMTY7IiBkPSJNNTAuMjY4LDEyLjVIMjVsLTUtN0gxLjczMkMwLjc3Niw1LjUsMCw2LjI3NSwwLDcuMjMyVjQ5Ljk2YzAuMDY5LDAuMDAyLDAuMTM4LDAuMDA2LDAuMjA1LDAuMDENCgkJbDEwLjAxNS0yNy4zMTRjMC4xODQtMC42ODMsMC44MDMtMS4xNTYsMS41MS0xLjE1Nkg1MnYtNy4yNjhDNTIsMTMuMjc1LDUxLjIyNCwxMi41LDUwLjI2OCwxMi41eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';
  },
  function(e, n, t) {
    var o = t(17);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    n = e.exports = t(0)(!1);
    var o = t(2),
      r = o(t(3)),
      i = o(t(7));
    n.push([
      e.i,
      ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n@keyframes rotating {\n  0% {\n    transform: rotate(0);\n  }\n  50%,\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fading-moving-top {\n  0% {\n    top: 50px;\n    opacity: 0;\n  }\n  100% {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes fading-moving-left {\n  0% {\n    left: -50px;\n    opacity: 0;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes fading {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes bubble {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shaking {\n  0% {\n    transform: rotate(0);\n  }\n  33% {\n    transform: rotate(-5deg);\n  }\n  66% {\n    transform: rotate(5deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes disappearing {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n.editor {\n  display: flex;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--inactive-background-color);\n  z-index: 999;\n}\n.editor .note {\n  position: relative;\n  width: 100%;\n  height: 70%;\n  max-width: 500px;\n  margin: auto;\n  padding-top: 80px;\n  box-sizing: border-box;\n  position: relative;\n  box-shadow: var(--box-shadow);\n}\n.editor .note .controls {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: #fff;\n  max-width: 500px;\n  position: absolute;\n  top: 0;\n}\n.editor .note .controls .reject,\n.editor .note .controls .submit {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-color: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.editor .note .controls .reject.submit,\n.editor .note .controls .submit.submit {\n  background: url(' +
        r +
        ') no-repeat center center;\n  background-size: 50%;\n}\n.editor .note .controls .reject.reject,\n.editor .note .controls .submit.reject {\n  background: url(' +
        i +
        ') no-repeat center center;\n  background-size: 50%;\n}\n.editor .note .controls .reject:hover,\n.editor .note .controls .submit:hover {\n  background-color: var(--hover-button-color);\n}\n.editor .note .controls .input__note_title {\n  width: 100%;\n  line-height: 40px;\n  padding: 0 20px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 0;\n  box-sizing: border-box;\n  background-color: var(--folder-color);\n}\n.editor .note .textarea__note_content {\n  display: block;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  resize: none;\n  border: 0;\n  padding: 20px;\n  font-size: 1.2rem;\n}\n.editor .note .textarea__note_content::placeholder {\n  color: var(--placeholder-color);\n}\n',
      ''
    ]);
  },
  function(e, n, t) {
    var o = t(19);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    (e.exports = t(0)(!1)).push([
      e.i,
      ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.breadcrumbs {\n  display: inline-block;\n  position: relative;\n  opacity: 0;\n  margin: 0 20px;\n  line-height: 20px;\n  border-radius: var(--border-radius);\n  padding: 0 10px;\n  background-color: var(--menu-color);\n  z-index: 1;\n}\n',
      ''
    ]);
  },
  function(e, n, t) {
    var o = t(21);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    n = e.exports = t(0)(!1);
    var o = t(2)(t(22));
    n.push([
      e.i,
      ':root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.list-section {\n  display: flex;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--inactive-background-color);\n  z-index: 999;\n  overflow-y: hidden;\n}\n.list-section .reject {\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 60px;\n  height: 60px;\n  margin: 20px;\n  border: 0;\n  border-radius: 50%;\n  background: url(' +
        o +
        ') no-repeat center center;\n  background-size: 40%;\n  cursor: pointer;\n  transition: background-color var(--transition-time);\n}\n.list-section .reject:hover {\n  background-color: var(--hover-button-color);\n}\n.list-section .list {\n  width: 100%;\n  max-width: 500px;\n  max-height: 100%;\n  margin: auto;\n  position: relative;\n}\n.list-section .list .item {\n  height: auto;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  margin: 10px 0;\n}\n.list-section .list .item .title {\n  font-size: 2rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.list-section .list .item .content {\n  font-size: 1.2rem;\n}\n.list-section .list .item .content p {\n  margin: 0;\n}\n.list-section .list .item label {\n  display: none;\n}\n.list-section .list .item input {\n  display: none;\n}\n',
      ''
    ]);
  },
  function(e, n) {
    e.exports =
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI4LjIyOCwyMy45ODZMNDcuMDkyLDUuMTIyYzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMEwyMy45ODYsMTkuNzQ0TDUuMTIxLDAuODgNCgkJYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0Mg0KCQlDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkNCgkJczEuNTM1LTAuMjkzLDIuMTIxLTAuODc5YzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJMMjguMjI4LDIzLjk4NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
  },
  function(e, n, t) {
    var o = t(24);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    n = e.exports = t(0)(!1);
    var o = t(2),
      r = o(t(4)),
      i = o(t(5)),
      a = o(t(6));
    n.push([
      e.i,
      ":root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.menu {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  opacity: 0;\n  padding: 20px;\n  z-index: 1;\n}\n.menu button {\n  border-radius: var(--button-border-radius);\n  border: 0;\n  background-color: var(--menu-button-color);\n  margin: 5px 0;\n  padding: 5px 10px;\n  line-height: 20px;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.menu button.menu__create_note:before,\n.menu button.menu__create_folder:before,\n.menu button.menu__open_completed:before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin-right: 5px;\n}\n.menu button.menu__create_note:before {\n  background: url(" +
        r +
        ') no-repeat center center;\n  background-size: 80%;\n}\n.menu button.menu__create_folder:before {\n  background: url(' +
        i +
        ') no-repeat center center;\n  background-size: 80%;\n}\n.menu button.menu__open_completed:before {\n  background: url(' +
        a +
        ') no-repeat center center;\n  background-size: 80%;\n}\n.menu button:hover {\n  background-color: var(--menu-button-hover-color);\n}\n.menu button.menu__open_completed {\n  background-color: var(--accent-color);\n  color: #fff;\n  font-weight: bold;\n}\n.menu button:not(:last-child) {\n  margin-right: 10px;\n}\n',
      ''
    ]);
  },
  function(e, n, t) {
    var o = t(26);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var r = { insert: 'head', singleton: !1 };
    t(1)(o, r);
    o.locals && (e.exports = o.locals);
  },
  function(e, n, t) {
    n = e.exports = t(0)(!1);
    var o = t(2),
      r = o(t(3)),
      i = o(t(7));
    n.push([
      e.i,
      ":root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n:root {\n  --accent-color: rgb(42, 209, 0);\n  --transition-time: 0.25s;\n  --border-radius: 10px;\n  --button-border-radius: 5px;\n  --grid-gap: 20px;\n  --box-shadow: 0 0 20px 0 var(--box-shadow-color);\n  --box-shadow-color: #aaa;\n  --placeholder-color: rgba(0, 0, 0, 0.5);\n  --hover-button-color: rgba(0, 0, 0, 0.1);\n  --inactive-background-color: rgba(255, 255, 255, var(--inactive-background-opacity));\n  --inactive-background-opacity: 0.75;\n  --menu-color: #ddd;\n  --menu-button-color: #eee;\n  --menu-button-hover-color: #eaeaea;\n  --folder-color: #eee;\n  --folder-hover-color: #ddd;\n}\n\n.dialog-container {\n  display: flex;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: var(--inactive-background-color);\n  z-index: 999;\n}\n.dialog-container .dialog {\n  position: relative;\n  margin: auto;\n  box-shadow: var(--box-shadow);\n}\n.dialog-container .dialog .content input[type='text'] {\n  width: 100%;\n  line-height: 40px;\n  padding: 0 20px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  border: 0;\n  box-sizing: border-box;\n}\n.dialog-container .dialog .controls {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: #fff;\n}\n.dialog-container .dialog .controls button {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-color: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.dialog-container .dialog .controls button.submit {\n  background: url(" +
        r +
        ') no-repeat center center;\n  background-size: 50%;\n}\n.dialog-container .dialog .controls button.reject {\n  background: url(' +
        i +
        ') no-repeat center center;\n  background-size: 50%;\n}\n.dialog-container .dialog .controls button:hover {\n  background-color: var(--hover-button-color);\n}\n',
      ''
    ]);
  },
  function(e, n, t) {
    'use strict';
    t.r(n);
    t(8), t(10), t(13);
    function o(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
            return t;
          }
        })(e) ||
        (function(e) {
          if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError('Invalid attempt to spread non-iterable instance');
        })()
      );
    }
    function r(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var i = (function() {
      function e() {
        !(function(e, n) {
          if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      var n, t, i;
      return (
        (n = e),
        (i = [
          {
            key: 'generateId',
            value: function(e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : o('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'),
                  t = '',
                  r = 0;
                r < e;
                r++
              )
                t += n[Math.trunc(Math.random() * n.length)];
              return t;
            }
          },
          {
            key: 'rand',
            value: function(e, n) {
              return Math.trunc(Math.random() * (n - e + 1)) + e;
            }
          }
        ]),
        (t = null) && r(n.prototype, t),
        i && r(n, i),
        e
      );
    })();
    t(16);
    function a(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var c = { Normal: 'normal', Reverse: 'reverse' },
      l = (function() {
        function e() {
          !(function(e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
          })(this, e);
        }
        var n, t, o;
        return (
          (n = e),
          (o = [
            {
              key: 'Animate',
              value: function(e, n, t) {
                e &&
                  (n.time || (n.time = 500),
                  n.animeType || (n.animeType = 'ease-in-out'),
                  n.dir || (n.dir = c.Normal),
                  n.count || (n.count = 1),
                  n.fillMode || (n.fillMode = 'forwards'),
                  (e.style.animation = [
                    n.name,
                    ''.concat(n.time / 1e3, 's'),
                    n.dir,
                    n.animeType,
                    n.count,
                    n.fillMode
                  ].join(' ')),
                  (e.style.pointerEvents = 'none'),
                  setTimeout(function() {
                    t && t(), (e.style.animation = ''), (e.style.pointerEvents = 'auto');
                  }, n.time));
              }
            }
          ]),
          (t = null) && a(n.prototype, t),
          o && a(n, o),
          e
        );
      })();
    function d(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var s = (function() {
      function e(n) {
        var t = this;
        !(function(e, n) {
          if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.title = n ? n.Title : ''),
          (this.content = n ? n.Content : '');
        var o = document.getElementById('template__editor').content.cloneNode(!0);
        (this.editor = o.querySelector('.editor')),
          (this.note = this.editor.querySelector('.note')),
          (this.textarea = this.editor.querySelector('.textarea__note_content')),
          (this.inputTitle = this.editor.querySelector('.input__note_title')),
          (this.submit = this.editor.querySelector('.submit')),
          (this.reject = this.editor.querySelector('.reject')),
          n &&
            ((this.inputTitle.value = this.title),
            (this.textarea.value = this.content),
            (this.textarea.style.color = n.color),
            (this.textarea.style.backgroundColor = n.backgroundColor)),
          this.submit.addEventListener('click', function() {
            n
              ? ((n.Title = t.inputTitle.value), (n.Content = t.textarea.value))
              : T.AddNote(t.inputTitle.value, t.textarea.value),
              t.close();
          }),
          this.reject.addEventListener('click', function() {
            t.close();
          }),
          document.body.appendChild(this.editor),
          l.Animate(this.editor, { name: 'fading', dir: c.Normal }),
          l.Animate(this.note, { name: 'fading-moving-top', dir: c.Normal }),
          console.log('Editor created');
      }
      var n, t, o;
      return (
        (n = e),
        (t = [
          {
            key: 'close',
            value: function() {
              var e = this;
              l.Animate(this.note, { name: 'fading-moving-top', dir: c.Reverse }),
                l.Animate(this.editor, { name: 'fading', dir: c.Reverse }, function() {
                  document.body.removeChild(e.editor);
                });
            }
          }
        ]) && d(n.prototype, t),
        o && d(n, o),
        e
      );
    })();
    t(18);
    function u(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var g,
      b = (function() {
        function e(n) {
          var t = this;
          !(function(e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.path = ['root']),
            (this.element = n),
            l.Animate(this.element, { name: 'fading-moving-left', dir: c.Normal }, function() {
              t.element.style.opacity = 1;
            }),
            this.Redraw();
        }
        var n, t, o;
        return (
          (n = e),
          (t = [
            {
              key: 'AddPath',
              value: function(e) {
                this.path.push(e),
                  this.Redraw(),
                  l.Animate(this.element, {
                    name: 'bubble',
                    dir: c.Normal,
                    animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
                  });
              }
            },
            {
              key: 'RemovePath',
              value: function() {
                this.path.pop(),
                  this.Redraw(),
                  l.Animate(this.element, {
                    name: 'bubble',
                    dir: c.Normal,
                    animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
                  });
              }
            },
            {
              key: 'Redraw',
              value: function() {
                this.element.innerText = this.path.join(' / ');
              }
            }
          ]) && u(n.prototype, t),
          o && u(n, o),
          e
        );
      })(),
      M = function() {
        var e = document.getElementById('breadcrumbs');
        g = new b(e);
      };
    t(20);
    function h(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var m,
      p = (function() {
        function e() {
          var n = this;
          !(function(e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.list = []);
          var t = document.getElementById('template__list').content.cloneNode(!0);
          (this.listSectionElem = t.querySelector('.list-section')),
            (this.listElem = t.querySelector('.list')),
            (this.reject = t.querySelector('.reject')),
            this.reject.addEventListener('click', function() {
              (n.listSectionElem.style.overflowY = 'hidden'),
                l.Animate(n.listSectionElem, { name: 'fading', dir: c.Reverse }, function() {
                  document.body.removeChild(n.listSectionElem);
                }),
                l.Animate(n.listElem, { name: 'fading-moving-top', dir: c.Reverse });
            });
        }
        var n, t, o;
        return (
          (n = e),
          (t = [
            {
              key: 'Add',
              value: function(e) {
                T.Unselect(e), e.item.removeAttribute('draggable'), this.list.push(e);
              }
            },
            {
              key: 'Remove',
              value: function(e) {
                this.list.splice(this.list.indexOf(e), 1);
              }
            },
            {
              key: 'Show',
              value: function() {
                var e = this;
                this.list.forEach(function(n) {
                  e.listElem.appendChild(n.Element);
                }),
                  document.body.appendChild(this.listSectionElem),
                  l.Animate(this.listSectionElem, { name: 'fading', dir: c.Normal }, function() {
                    e.listSectionElem.style.overflowY = 'auto';
                  }),
                  l.Animate(this.listElem, { name: 'fading-moving-top', dir: c.Normal });
              }
            }
          ]) && h(n.prototype, t),
          o && h(n, o),
          e
        );
      })(),
      f = function() {
        m = new p();
      };
    function x(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var y = [
        ['#EDE604', '#000'],
        ['#FFCC01', '#000'],
        ['#FEAC00', '#000'],
        ['#FF8100', '#FFF'],
        ['#FF5800', '#FFF'],
        ['#FF3BA7', '#FFF'],
        ['#CC42A2', '#FFF'],
        ['#9F49AC', '#FFF'],
        ['#486EAF', '#FFF'],
        ['#179067', '#FFF'],
        ['#50B517', '#FFF'],
        ['#9ED112', '#000']
      ],
      v = 'note',
      N = 'folder',
      w = 'backFolder',
      L = 'folder',
      j = (function() {
        function e() {
          !(function(e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.id = i.generateId(16)),
            (this.title = 'Title'),
            (this.content = 'Content');
          var n = i.rand(0, y.length - 1);
          (this.backgroundColor = y[n][0]), (this.color = y[n][1]);
        }
        var n, t, o;
        return (
          (n = e),
          (t = [
            {
              key: 'itemSelect',
              value: function(e) {
                e.target.checked ? T.Select(this) : T.Unselect(this);
              }
            },
            {
              key: 'itemDragOver',
              value: function(e) {
                e.preventDefault();
              }
            },
            {
              key: 'itemDragStart',
              value: function() {
                (this.itemType !== v && this.folderType !== L) || T.isSelected(this) || T.Select(this),
                  console.log('Item drag started');
              }
            },
            {
              key: 'itemDragEnd',
              value: function() {
                T.UnselectAll(), console.log('Item drag ended');
              }
            },
            {
              key: 'itemOption',
              value: function(e) {
                e.preventDefault();
              }
            },
            {
              key: 'itemOpen',
              value: function() {
                switch (this.itemType) {
                  case N:
                    this.folderType === w
                      ? ((T.CurrentDir = this.prevFolder), g.RemovePath(this.title))
                      : ((T.CurrentDir = this), g.AddPath(this.title));
                    break;
                  case v:
                    new s(this);
                }
                console.log('Item opened');
              }
            },
            {
              key: 'itemComplete',
              value: function() {
                var e = this;
                m.Add(this),
                  l.Animate(this.item, { name: 'disappearing', dir: c.Normal }, function() {
                    T.RemoveItem(e);
                  }),
                  console.log('Item completed');
              }
            },
            {
              key: 'itemDrop',
              value: function(e) {
                var n = this;
                if ((e.preventDefault(), T.Selected))
                  for (var t = 0; t < T.Selected.length; t++)
                    if (T.Selected[t] !== this) {
                      switch (T.Selected[t].itemType) {
                        case v:
                          switch (this.folderType) {
                            case L:
                              this.notes.push(T.Selected[t]);
                              break;
                            case w:
                              this.prevFolder.notes.push(T.Selected[t]);
                          }
                          break;
                        case N:
                          switch (this.folderType) {
                            case L:
                              T.Selected[t].folders.forEach(function(e) {
                                return (e.prevFolder = n);
                              }),
                                this.folders.push(T.Selected[t]);
                              break;
                            case w:
                              T.Selected[t].folders.forEach(function(e) {
                                return (e.prevFolder = n.prevFolder);
                              }),
                                this.prevFolder.folders.push(T.Selected[t]);
                          }
                      }
                      T.RemoveItem(T.Selected[t]), l.Animate(this.item, { name: 'shaking', dir: c.Normal, time: 300 });
                    }
                T.UnselectAll(), console.log('Item dropped');
              }
            },
            {
              key: 'CreateNote',
              value: function(e, n) {
                var t = this;
                (this.itemType = v), e && (this.title = e), n && (this.content = n);
                var o = document.getElementById('template__grid_note').content.cloneNode(!0);
                (this.item = o.querySelector('.item')),
                  this.item.setAttribute('id', this.id),
                  (this.completeElem = o.querySelector('.complete')),
                  (this.checkboxElem = o.querySelector('.checkbox')),
                  (this.checkboxLabelElem = o.querySelector('.checkbox__label')),
                  (this.titleSectionElem = o.querySelector('.title-section')),
                  (this.contentElem = o.querySelector('.content')),
                  (this.footerElem = o.querySelector('.footer')),
                  (this.item.style.backgroundColor = this.backgroundColor),
                  (this.item.style.color = this.color),
                  (this.titleSectionElem.style.borderColor = this.color),
                  this.checkboxElem.setAttribute('id', 'checkbox_'.concat(this.id)),
                  this.checkboxLabelElem.setAttribute('for', 'checkbox_'.concat(this.id)),
                  (this.titleSectionElem.querySelector('.title').innerText = this.title),
                  (this.contentElem.innerHTML = marked(this.content)),
                  this.completeElem.addEventListener('click', function(e) {
                    e.stopPropagation(), t.itemComplete();
                  }),
                  this.checkboxElem.addEventListener('change', function(e) {
                    return t.itemSelect(e);
                  }),
                  this.checkboxLabelElem.addEventListener('dblclick', function(e) {
                    return e.stopPropagation();
                  }),
                  this.item.addEventListener('dragstart', function() {
                    return t.itemDragStart();
                  }),
                  this.item.addEventListener('dragend', function() {
                    return t.itemDragEnd();
                  }),
                  this.item.addEventListener('dblclick', function() {
                    return t.itemOpen();
                  }),
                  this.item.addEventListener('contextmenu', function(e) {
                    return t.itemOption(e);
                  }),
                  l.Animate(this.item, {
                    name: 'bubble',
                    dir: c.Normal,
                    animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
                  }),
                  console.log('Note created');
              }
            },
            {
              key: 'CreateFolder',
              value: function(e, n) {
                var t = this;
                (this.itemType = N), (this.folderType = e), n && (this.title = n);
                var o = document.getElementById('template__grid_folder').content.cloneNode(!0);
                (this.item = o.querySelector('.item')),
                  this.item.setAttribute('id', this.id),
                  (this.checkboxElem = o.querySelector('.checkbox')),
                  (this.checkboxLabelElem = o.querySelector('.checkbox__label')),
                  (this.titleSectionElem = o.querySelector('.title-section')),
                  this.checkboxElem.setAttribute('id', 'checkbox_'.concat(this.id)),
                  this.checkboxLabelElem.setAttribute('for', 'checkbox_'.concat(this.id)),
                  (this.titleSectionElem.querySelector('.title').innerText = this.title),
                  this.folderType === w && (this.prevFolder = T.CurrentDir),
                  (this.folders = []),
                  (this.notes = []),
                  this.folderType === w
                    ? (this.item.removeAttribute('draggable'),
                      this.titleSectionElem.removeChild(this.checkboxElem),
                      this.titleSectionElem.removeChild(this.checkboxLabelElem))
                    : (this.checkboxElem.addEventListener('change', function(e) {
                        return t.itemSelect(e);
                      }),
                      this.checkboxLabelElem.addEventListener('dblclick', function(e) {
                        return e.stopPropagation();
                      })),
                  this.item.addEventListener('dragstart', function() {
                    return t.itemDragStart();
                  }),
                  this.item.addEventListener('drop', function(e) {
                    return t.itemDrop(e);
                  }),
                  this.item.addEventListener('dragover', function(e) {
                    return t.itemDragOver(e);
                  }),
                  this.item.addEventListener('dragend', function() {
                    return t.itemDragEnd();
                  }),
                  this.item.addEventListener('dblclick', function() {
                    return t.itemOpen();
                  }),
                  this.item.addEventListener('contextmenu', function(e) {
                    return t.itemOption(e);
                  }),
                  l.Animate(this.item, {
                    name: 'bubble',
                    dir: c.Normal,
                    animeType: 'cubic-bezier(1.000, 1.030, 0.045, 1.475)'
                  }),
                  console.log('Folder created - '.concat(this.folderType));
              }
            },
            {
              key: 'Element',
              get: function() {
                return this.item;
              }
            },
            {
              key: 'Id',
              get: function() {
                return this.id;
              }
            },
            {
              key: 'Type',
              get: function() {
                return this.itemType;
              }
            },
            {
              key: 'Title',
              get: function() {
                return this.title;
              },
              set: function(e) {
                (this.title = e), (this.titleSectionElem.querySelector('.title').innerText = this.title);
              }
            },
            {
              key: 'Content',
              get: function() {
                return this.content;
              },
              set: function(e) {
                (this.content = e), (this.contentElem.innerHTML = marked(this.content));
              }
            }
          ]) && x(n.prototype, t),
          o && x(n, o),
          e
        );
      })();
    function D(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var T,
      k = (function() {
        function e(n) {
          !(function(e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.grid = n),
            (this.selected = []);
        }
        var n, t, o;
        return (
          (n = e),
          (t = [
            {
              key: 'AddNote',
              value: function(e, n) {
                var t = new j();
                t.CreateNote(e, n), this.currentDir.notes.push(t), this.Redraw(), console.log('Note added');
              }
            },
            {
              key: 'AddFolder',
              value: function(e) {
                var n = new j(),
                  t = new j();
                n.CreateFolder(L, e),
                  t.CreateFolder(w, '...'),
                  n.folders.push(t),
                  this.currentDir.folders.push(n),
                  this.currentDir.folders.sort(function(e, n) {
                    return e.Title > n.Title ? 1 : -1;
                  }),
                  this.Redraw(),
                  console.log('Folder added');
              }
            },
            {
              key: 'RemoveItem',
              value: function(e) {
                switch (e.itemType) {
                  case v:
                    this.currentDir.notes.splice(this.currentDir.notes.indexOf(e), 1);
                    break;
                  case N:
                    this.currentDir.folders.splice(this.currentDir.folders.indexOf(e), 1);
                }
                this.Redraw();
              }
            },
            {
              key: 'Redraw',
              value: function() {
                var e = this;
                (this.grid.innerHTML = ''),
                  this.currentDir.folders &&
                    this.currentDir.folders.forEach(function(n) {
                      n.folderType === w
                        ? ((n.Element.style.backgroundImage = 'url(./src/images/back.svg)'),
                          e.grid.insertAdjacentElement('afterbegin', n.Element))
                        : e.grid.appendChild(n.Element);
                    }),
                  this.currentDir.notes &&
                    this.currentDir.notes.forEach(function(n) {
                      e.grid.appendChild(n.Element);
                    });
              }
            },
            {
              key: 'isSelected',
              value: function(e) {
                return this.selected.includes(e);
              }
            },
            {
              key: 'Select',
              value: function(e) {
                (e.Element.querySelector('.checkbox').checked = !0), this.selected.push(e);
              }
            },
            {
              key: 'Unselect',
              value: function(e) {
                (e.Element.querySelector('.checkbox').checked = !1), this.selected.splice(this.selected.indexOf(e), 1);
              }
            },
            {
              key: 'UnselectAll',
              value: function() {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (var o, r = this.selected[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
                    var i = o.value;
                    this.Unselect(i);
                  }
                } catch (e) {
                  (n = !0), (t = e);
                } finally {
                  try {
                    e || null == r.return || r.return();
                  } finally {
                    if (n) throw t;
                  }
                }
              }
            },
            {
              key: 'Element',
              get: function() {
                return this.grid;
              }
            },
            {
              key: 'CurrentDir',
              get: function() {
                return this.currentDir;
              },
              set: function(e) {
                (this.currentDir = e), this.Redraw();
              }
            },
            {
              key: 'Selected',
              get: function() {
                return this.selected;
              }
            }
          ]) && D(n.prototype, t),
          o && D(n, o),
          e
        );
      })(),
      I = function() {
        var e = document.createElement('section');
        e.setAttribute('class', 'grid'),
          e.setAttribute('id', 'grid'),
          document.body.appendChild(e),
          ((T = new k(e)).CurrentDir = new j()),
          T.CurrentDir.CreateFolder(L, 'root'),
          console.log('Grid inited');
      };
    t(23), t(25);
    function z(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var C = (function() {
        function e() {
          !(function(e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
          })(this, e);
        }
        var n, t, o;
        return (
          (n = e),
          (o = [
            {
              key: 'Prompt',
              value: function(e, n) {
                var t,
                  o = this;
                (this.dialogTemplate =
                  ((t = document.getElementById('template__dialog').content.cloneNode(!0)),
                  console.log('Dialog inited'),
                  t.querySelector('.dialog-container'))),
                  (this.dialog = this.dialogTemplate.querySelector('.dialog'));
                var r = document.createElement('input'),
                  i = document.createElement('button'),
                  a = document.createElement('button');
                r.setAttribute('class', 'dialog__title'),
                  r.setAttribute('type', 'text'),
                  i.setAttribute('class', 'submit'),
                  a.setAttribute('class', 'reject'),
                  (r.placeholder = e),
                  i.addEventListener('click', function() {
                    o.close(o.dialogTemplate), n(r.value);
                  }),
                  a.addEventListener('click', function() {
                    return o.close(o.dialogTemplate);
                  }),
                  this.dialog.querySelector('.content').appendChild(r),
                  this.dialog.querySelector('.controls').appendChild(i),
                  this.dialog.querySelector('.controls').appendChild(a),
                  document.body.appendChild(this.dialogTemplate),
                  l.Animate(this.dialogTemplate, { name: 'fading', dir: c.Normal }),
                  l.Animate(this.dialog, { name: 'fading-moving-top', dir: c.Normal });
              }
            },
            { key: 'Confirm', value: function() {} },
            { key: 'Alert', value: function() {} },
            { key: 'DatePicker', value: function() {} },
            { key: 'Notify', value: function() {} },
            {
              key: 'close',
              value: function(e) {
                l.Animate(this.dialog, { name: 'fading-moving-top', dir: c.Reverse }),
                  l.Animate(this.dialogTemplate, { name: 'fading', dir: c.Reverse }, function() {
                    document.body.removeChild(e);
                  });
              }
            }
          ]),
          (t = null) && z(n.prototype, t),
          o && z(n, o),
          e
        );
      })(),
      S = function() {
        var e = document.querySelector('header .menu');
        e.querySelector('.menu__create_note').addEventListener('click', function() {
          return new s();
        }),
          e.querySelector('.menu__create_folder').addEventListener('click', function() {
            return C.Prompt('Folder name:', T.AddFolder.bind(T));
          }),
          e.querySelector('.menu__open_completed').addEventListener('click', function() {
            return m.Show();
          }),
          l.Animate(e, { name: 'fading-moving-left', dir: c.Normal }, function() {
            e.style.opacity = 1;
          }),
          console.log('Menu inited');
      };
    function E(e) {
      M(),
        I(),
        S(),
        f(),
        l.Animate(e, { name: 'fading', dir: c.Reverse }, function() {
          document.body.removeChild(e);
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
      !(function() {
        if ((localStorage.clear(), localStorage.getItem('visited'))) E();
        else {
          var e = document
            .getElementById('template__hello')
            .content.cloneNode(!0)
            .querySelector('.hello');
          document.body.appendChild(e),
            l.Animate(e, { name: 'fading', dir: c.Normal }),
            localStorage.setItem('visited', !0),
            e.querySelector('input[type="button"]').addEventListener('click', function() {
              E(e);
            });
        }
      })(),
        console.log('App inited');
    });
  }
]);
