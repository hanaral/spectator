(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{170:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The HTTP object provides methods to make additional requests during your Spectator request operation. The objects methods are the same\nas HTTP methods.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("All methods take a mandatory URL string as first parameter and an optional config object as second parameter.")]),t._v(" "),e("p",[t._v("When the HTTP request is finished it returns either a response object or undefined if the request failed.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),e("p",[t._v("The config object configures the HTTP requests. It consists only of fields which are all optional to set.")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("The headers field is an flat object which currently consists of string-string pairs. All headers defined here will be added the the HTTP request")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("Sets the timeout for the HTTP request")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),e("p",[t._v("The two helper functions "),e("router-link",{attrs:{to:"/scripting/helper.html#urlencoded-data"}},[t._v("UrlEncoded")]),t._v(" and "),e("router-link",{attrs:{to:"/scripting/helper.html#formdata-data"}},[t._v("FormData")]),t._v(" are converting the objects to an "),e("em",[t._v("url encoded")]),t._v(" or "),e("em",[t._v("form data")]),t._v(" format.")],1),t._v(" "),t._m(35),t._v(" "),t._m(36)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("Note:")]),this._v(" The corresponding HTTP "),s("code",[this._v("delete")]),this._v(" method is named "),s("code",[this._v("destroy")]),this._v(" because delete is a keyword in JavaScript.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"get-url-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-url-config","aria-hidden":"true"}},[this._v("#")]),this._v(" get(url[, config])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("url")]),this._v(" A valid URI string. If the URI is not valid the request is aborted")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("config")]),this._v(" An object, "),s("a",{attrs:{href:"#config-object-for-http"}},[this._v("see below for more")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("returns")]),this._v(" a response object or undefined if the request failed")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"post-url-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-url-config","aria-hidden":"true"}},[this._v("#")]),this._v(" post(url[, config])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("url")]),this._v(" A valid URI string. If the URI is not valid the request is aborted")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("config")]),this._v(" An object, "),s("a",{attrs:{href:"#config-object-for-http"}},[this._v("see below for more")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("returns")]),this._v(" a response object or undefined if the request failed")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"put-url-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put-url-config","aria-hidden":"true"}},[this._v("#")]),this._v(" put(url[, config])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("url")]),this._v(" A valid URI string. If the URI is not valid the request is aborted")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("config")]),this._v(" An object, "),s("a",{attrs:{href:"#config-object-for-http"}},[this._v("see below for more")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("returns")]),this._v(" a response object or undefined if the request failed")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"patch-url-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patch-url-config","aria-hidden":"true"}},[this._v("#")]),this._v(" patch(url[, config])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("url")]),this._v(" A valid URI string. If the URI is not valid the request is aborted")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("config")]),this._v(" An object, "),s("a",{attrs:{href:"#config-object-for-http"}},[this._v("see below for more")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("returns")]),this._v(" a response object or undefined if the request failed")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"destroy-url-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy-url-config","aria-hidden":"true"}},[this._v("#")]),this._v(" destroy(url[, config])")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("url")]),this._v(" A valid URI string. If the URI is not valid the request is aborted")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("config")]),this._v(" An object, "),s("a",{attrs:{href:"#config-object-for-http"}},[this._v("see below for more")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("returns")]),this._v(" a response object or undefined if the request failed")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("em",[s("strong",[this._v("Example:")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before_sending")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://httpbin.org/get"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"config-object-for-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-object-for-http","aria-hidden":"true"}},[this._v("#")]),this._v(" Config Object for HTTP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("Note:")]),this._v(" As the HTTP requests are not concurrent right now it is recommended to set at least the timeout field so your application won't freeze to death.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers","aria-hidden":"true"}},[this._v("#")]),this._v(" headers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("headers")]),this._v(" is of type "),s("em",[this._v("object")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeout","aria-hidden":"true"}},[this._v("#")]),this._v(" timeout")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("timeout")]),this._v(" is of type "),s("em",[this._v("string")]),this._v(" or "),s("em",[this._v("number")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body","aria-hidden":"true"}},[this._v("#")]),this._v(" body")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("body")]),this._v(" is of type "),s("em",[this._v("string")]),this._v(" or "),s("em",[this._v("object")]),this._v("\nSets the HTTP body for the request. This field will be ignored when the HTTP method has no body (e.g. GET).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If the type of the body value is a string, the string will be sent as is. By default the content-type will be set to "),s("em",[s("strong",[this._v("text/plain")])]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If the users specifies a different content-type in the "),s("strong",[this._v("header")]),this._v(" section, this value will be taken.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When the type of the body value is an object, it will be serialized to JSON and sent with the content-type "),s("em",[s("strong",[this._v("application/json")])]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("em",[s("strong",[this._v("Example:")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before_sending")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8000/login"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"headers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo:"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timeout"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baz"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"there"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8000/foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UrlEncoded")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parse"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8000/foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FormData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"For a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Form"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res4 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8000/xml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"headers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/xml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<someXml></someXml>"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=a.exports}}]);