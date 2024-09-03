'use strict';
(() => {
	var Mp = Object.create;
	var B = Object.defineProperty;
	var xp = Object.getOwnPropertyDescriptor;
	var Dp = Object.getOwnPropertyNames,
		Ss = Object.getOwnPropertySymbols,
		Cp = Object.getPrototypeOf,
		qs = Object.prototype.hasOwnProperty,
		wp = Object.prototype.propertyIsEnumerable;
	var Vn = (e, r, n) =>
			r in e ? B(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[r] = n),
		te = (e, r) => {
			for (var n in r || (r = {})) qs.call(r, n) && Vn(e, n, r[n]);
			if (Ss)
				for (var o = Ss(r), s = 0, u = o.length, n; s < u; s++)
					(n = o[s]), wp.call(r, n) && Vn(e, n, r[n]);
			return e;
		};
	var g = (e, r) => () => (e && (r = e((e = 0))), r);
	var i = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
		Op = (e, r) => {
			for (var n in r) B(e, n, { get: r[n], enumerable: !0 });
		},
		js = (e, r, n, o) => {
			if ((r && typeof r == 'object') || typeof r == 'function')
				for (var s = Dp(r), u = 0, d = s.length, c; u < d; u++)
					(c = s[u]),
						!qs.call(e, c) &&
							c !== n &&
							B(e, c, {
								get: ((v) => r[v]).bind(null, c),
								enumerable: !(o = xp(r, c)) || o.enumerable,
							});
			return e;
		};
	var Lp = (e, r, n) => (
			(n = e != null ? Mp(Cp(e)) : {}),
			js(r || !e || !e.__esModule ? B(n, 'default', { value: e, enumerable: !0 }) : n, e)
		),
		Sp = (e) => js(B({}, '__esModule', { value: !0 }), e);
	var a = (e, r, n) => (Vn(e, typeof r != 'symbol' ? r + '' : r, n), n);
	var re = (e, r, n) =>
		new Promise((o, s) => {
			var u = (v) => {
					try {
						c(n.next(v));
					} catch (p) {
						s(p);
					}
				},
				d = (v) => {
					try {
						c(n.throw(v));
					} catch (p) {
						s(p);
					}
				},
				c = (v) => (v.done ? o(v.value) : Promise.resolve(v.value).then(u, d));
			c((n = n.apply(e, r)).next());
		});
	var f,
		Gn,
		K_,
		q,
		R,
		j,
		Bn,
		J_,
		Q_,
		X_,
		eh,
		th,
		rh,
		nh,
		oh,
		ih,
		ah,
		sh,
		uh,
		lh,
		L = g(() => {
			'use strict';
			(f = 'fp-'),
				(Gn = ''.concat(f, 'widget_root')),
				(K_ = ''.concat(f, 'view')),
				(q = ''.concat(f, 'widget-view')),
				(R = ''.concat(q, 's')),
				(j = ''.concat(q, '-active')),
				(Bn = ''.concat(f, 'loading')),
				(J_ = ''.concat(f, 'caption-text')),
				(Q_ = ''.concat(f, 'subheading-text')),
				(X_ = ''.concat(f, 'table-body-text')),
				(eh = ''.concat(f, 'body-text')),
				(th = ''.concat(f, 'title-text')),
				(rh = ''.concat(f, 'highlight-color')),
				(nh = ''.concat(f, 'highlight-contrast-color')),
				(oh = ''.concat(f, 'border-color')),
				(ih = ''.concat(f, 'shadow-color')),
				(ah = ''.concat(f, 'separator-color')),
				(sh = ''.concat(f, 'hide')),
				(uh = ''.concat(f, 'column-header')),
				(lh = ''.concat(f, 'text-button'));
		});
	var Ts,
		zn = g(() => {
			'use strict';
			Ts = {
				'team-standings': 'Tabelle',
				'team-squad': 'Kader',
				'team-statistics': 'Spielerstatistik',
				'team-matches': 'Spielplan',
				'team-liveticker': 'Liveticker',
				'match-liveticker': 'Liveticker',
			};
		});
	var qp,
		Us,
		Rs = g(() => {
			'use strict';
			(qp = (e) => {
				let r = document.getElementById(e);
				if (!r)
					throw new Error(
						'Das Root-Element konnte nicht gefunden werden. Bitte stelle sicher, dass in deinem HTML an der Stelle, an der das Widget dargestellt werden soll, ein div-Element mit der id "'.concat(
							e,
							'" existiert.',
						),
					);
				return r;
			}),
				(Us = qp);
		});
	var jp,
		E,
		T = g(() => {
			'use strict';
			(jp = (e, r) => {
				let n = document.createElement(e);
				return (
					Object.keys(r).forEach((o) => {
						n.setAttribute(o, r[o]);
					}),
					n
				);
			}),
				(E = jp);
		});
	var Yn,
		Fs,
		As = g(() => {
			'use strict';
			(Yn = class {
				constructor(r, n, o, s) {
					this.mutationCallback = (r) => {
						r.forEach((n) => {
							if (n.type === 'attributes' && n.attributeName === 'class') {
								let o = n.target.classList.contains(this.classToWatch);
								this.lastClassState !== o &&
									((this.lastClassState = o),
									o ? this.classAddedCallback() : this.classRemovedCallback());
							}
						});
					};
					(this.targetNode = r),
						(this.classToWatch = n),
						(this.classAddedCallback = o),
						(this.classRemovedCallback = s),
						(this.lastClassState = r.classList.contains(this.classToWatch)),
						(this.observer = new MutationObserver(this.mutationCallback)),
						this.observe();
				}
				observe() {
					this.observer.observe(this.targetNode, { attributes: !0 });
				}
				disconnect() {
					this.observer.disconnect();
				}
			}),
				(Fs = Yn);
		});
	var Tp,
		C,
		z = g(() => {
			'use strict';
			(Tp = (e) => document.createTextNode(e)), (C = Tp);
		});
	var U,
		Zn = g(() => {
			'use strict';
			U = class extends Error {
				constructor(r) {
					super(),
						(this.message =
							r != null
								? r
								: 'Das Widget kann aufgrund von fehlenden Elementen nicht richtig dargestellt werden. Bitte prüfe, ob du den Widget-Code richtig übernommen hast und keine Elemente aktiv ausblendest.'),
						(this.name = 'AssertionException');
				}
			};
		});
	var w,
		Y = g(() => {
			'use strict';
			w = () => !!Array.from(document.styleSheets).find((r) => r.title === 'fp-widget-css');
		});
	var au = {};
	Op(au, {
		__addDisposableResource: () => ou,
		__assign: () => ne,
		__asyncDelegator: () => Ks,
		__asyncGenerator: () => Zs,
		__asyncValues: () => Js,
		__await: () => F,
		__awaiter: () => $s,
		__classPrivateFieldGet: () => tu,
		__classPrivateFieldIn: () => nu,
		__classPrivateFieldSet: () => ru,
		__createBinding: () => ie,
		__decorate: () => ks,
		__disposeResources: () => iu,
		__esDecorate: () => Up,
		__exportStar: () => Gs,
		__extends: () => Ws,
		__generator: () => Vs,
		__importDefault: () => eu,
		__importStar: () => Xs,
		__makeTemplateObject: () => Qs,
		__metadata: () => Hs,
		__param: () => Ns,
		__propKey: () => Fp,
		__read: () => Jn,
		__rest: () => Is,
		__runInitializers: () => Rp,
		__setFunctionName: () => Ap,
		__spread: () => Bs,
		__spreadArray: () => Ys,
		__spreadArrays: () => zs,
		__values: () => oe,
		default: () => kp,
	});
	function Ws(e, r) {
		if (typeof r != 'function' && r !== null)
			throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
		Kn(e, r);
		function n() {
			this.constructor = e;
		}
		e.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
	}
	function Is(e, r) {
		var n = {};
		for (var o in e)
			Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (n[o] = e[o]);
		if (e != null && typeof Object.getOwnPropertySymbols == 'function')
			for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
				r.indexOf(o[s]) < 0 &&
					Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
					(n[o[s]] = e[o[s]]);
		return n;
	}
	function ks(e, r, n, o) {
		var s = arguments.length,
			u = s < 3 ? r : o === null ? (o = Object.getOwnPropertyDescriptor(r, n)) : o,
			d;
		if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
			u = Reflect.decorate(e, r, n, o);
		else
			for (var c = e.length - 1; c >= 0; c--)
				(d = e[c]) && (u = (s < 3 ? d(u) : s > 3 ? d(r, n, u) : d(r, n)) || u);
		return s > 3 && u && Object.defineProperty(r, n, u), u;
	}
	function Ns(e, r) {
		return function (n, o) {
			r(n, o, e);
		};
	}
	function Up(e, r, n, o, s, u) {
		function d(S) {
			if (S !== void 0 && typeof S != 'function') throw new TypeError('Function expected');
			return S;
		}
		for (
			var c = o.kind,
				v = c === 'getter' ? 'get' : c === 'setter' ? 'set' : 'value',
				p = !r && e ? (o.static ? e : e.prototype) : null,
				_ = r || (p ? Object.getOwnPropertyDescriptor(p, o.name) : {}),
				y,
				h = !1,
				P = n.length - 1;
			P >= 0;
			P--
		) {
			var x = {};
			for (var D in o) x[D] = D === 'access' ? {} : o[D];
			for (var D in o.access) x.access[D] = o.access[D];
			x.addInitializer = function (S) {
				if (h) throw new TypeError('Cannot add initializers after decoration has completed');
				u.push(d(S || null));
			};
			var O = (0, n[P])(c === 'accessor' ? { get: _.get, set: _.set } : _[v], x);
			if (c === 'accessor') {
				if (O === void 0) continue;
				if (O === null || typeof O != 'object') throw new TypeError('Object expected');
				(y = d(O.get)) && (_.get = y),
					(y = d(O.set)) && (_.set = y),
					(y = d(O.init)) && s.unshift(y);
			} else (y = d(O)) && (c === 'field' ? s.unshift(y) : (_[v] = y));
		}
		p && Object.defineProperty(p, o.name, _), (h = !0);
	}
	function Rp(e, r, n) {
		for (var o = arguments.length > 2, s = 0; s < r.length; s++)
			n = o ? r[s].call(e, n) : r[s].call(e);
		return o ? n : void 0;
	}
	function Fp(e) {
		return typeof e == 'symbol' ? e : ''.concat(e);
	}
	function Ap(e, r, n) {
		return (
			typeof r == 'symbol' && (r = r.description ? '['.concat(r.description, ']') : ''),
			Object.defineProperty(e, 'name', { configurable: !0, value: n ? ''.concat(n, ' ', r) : r })
		);
	}
	function Hs(e, r) {
		if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
			return Reflect.metadata(e, r);
	}
	function $s(e, r, n, o) {
		function s(u) {
			return u instanceof n
				? u
				: new n(function (d) {
						d(u);
					});
		}
		return new (n || (n = Promise))(function (u, d) {
			function c(_) {
				try {
					p(o.next(_));
				} catch (y) {
					d(y);
				}
			}
			function v(_) {
				try {
					p(o.throw(_));
				} catch (y) {
					d(y);
				}
			}
			function p(_) {
				_.done ? u(_.value) : s(_.value).then(c, v);
			}
			p((o = o.apply(e, r || [])).next());
		});
	}
	function Vs(e, r) {
		var n = {
				label: 0,
				sent: function () {
					if (u[0] & 1) throw u[1];
					return u[1];
				},
				trys: [],
				ops: [],
			},
			o,
			s,
			u,
			d;
		return (
			(d = { next: c(0), throw: c(1), return: c(2) }),
			typeof Symbol == 'function' &&
				(d[Symbol.iterator] = function () {
					return this;
				}),
			d
		);
		function c(p) {
			return function (_) {
				return v([p, _]);
			};
		}
		function v(p) {
			if (o) throw new TypeError('Generator is already executing.');
			for (; d && ((d = 0), p[0] && (n = 0)), n; )
				try {
					if (
						((o = 1),
						s &&
							(u =
								p[0] & 2
									? s.return
									: p[0]
										? s.throw || ((u = s.return) && u.call(s), 0)
										: s.next) &&
							!(u = u.call(s, p[1])).done)
					)
						return u;
					switch (((s = 0), u && (p = [p[0] & 2, u.value]), p[0])) {
						case 0:
						case 1:
							u = p;
							break;
						case 4:
							return n.label++, { value: p[1], done: !1 };
						case 5:
							n.label++, (s = p[1]), (p = [0]);
							continue;
						case 7:
							(p = n.ops.pop()), n.trys.pop();
							continue;
						default:
							if (
								((u = n.trys), !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2))
							) {
								n = 0;
								continue;
							}
							if (p[0] === 3 && (!u || (p[1] > u[0] && p[1] < u[3]))) {
								n.label = p[1];
								break;
							}
							if (p[0] === 6 && n.label < u[1]) {
								(n.label = u[1]), (u = p);
								break;
							}
							if (u && n.label < u[2]) {
								(n.label = u[2]), n.ops.push(p);
								break;
							}
							u[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					p = r.call(e, n);
				} catch (_) {
					(p = [6, _]), (s = 0);
				} finally {
					o = u = 0;
				}
			if (p[0] & 5) throw p[1];
			return { value: p[0] ? p[1] : void 0, done: !0 };
		}
	}
	function Gs(e, r) {
		for (var n in e) n !== 'default' && !Object.prototype.hasOwnProperty.call(r, n) && ie(r, e, n);
	}
	function oe(e) {
		var r = typeof Symbol == 'function' && Symbol.iterator,
			n = r && e[r],
			o = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == 'number')
			return {
				next: function () {
					return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
				},
			};
		throw new TypeError(r ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
	}
	function Jn(e, r) {
		var n = typeof Symbol == 'function' && e[Symbol.iterator];
		if (!n) return e;
		var o = n.call(e),
			s,
			u = [],
			d;
		try {
			for (; (r === void 0 || r-- > 0) && !(s = o.next()).done; ) u.push(s.value);
		} catch (c) {
			d = { error: c };
		} finally {
			try {
				s && !s.done && (n = o.return) && n.call(o);
			} finally {
				if (d) throw d.error;
			}
		}
		return u;
	}
	function Bs() {
		for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(Jn(arguments[r]));
		return e;
	}
	function zs() {
		for (var e = 0, r = 0, n = arguments.length; r < n; r++) e += arguments[r].length;
		for (var o = Array(e), s = 0, r = 0; r < n; r++)
			for (var u = arguments[r], d = 0, c = u.length; d < c; d++, s++) o[s] = u[d];
		return o;
	}
	function Ys(e, r, n) {
		if (n || arguments.length === 2)
			for (var o = 0, s = r.length, u; o < s; o++)
				(u || !(o in r)) && (u || (u = Array.prototype.slice.call(r, 0, o)), (u[o] = r[o]));
		return e.concat(u || Array.prototype.slice.call(r));
	}
	function F(e) {
		return this instanceof F ? ((this.v = e), this) : new F(e);
	}
	function Zs(e, r, n) {
		if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
		var o = n.apply(e, r || []),
			s,
			u = [];
		return (
			(s = {}),
			d('next'),
			d('throw'),
			d('return'),
			(s[Symbol.asyncIterator] = function () {
				return this;
			}),
			s
		);
		function d(h) {
			o[h] &&
				(s[h] = function (P) {
					return new Promise(function (x, D) {
						u.push([h, P, x, D]) > 1 || c(h, P);
					});
				});
		}
		function c(h, P) {
			try {
				v(o[h](P));
			} catch (x) {
				y(u[0][3], x);
			}
		}
		function v(h) {
			h.value instanceof F ? Promise.resolve(h.value.v).then(p, _) : y(u[0][2], h);
		}
		function p(h) {
			c('next', h);
		}
		function _(h) {
			c('throw', h);
		}
		function y(h, P) {
			h(P), u.shift(), u.length && c(u[0][0], u[0][1]);
		}
	}
	function Ks(e) {
		var r, n;
		return (
			(r = {}),
			o('next'),
			o('throw', function (s) {
				throw s;
			}),
			o('return'),
			(r[Symbol.iterator] = function () {
				return this;
			}),
			r
		);
		function o(s, u) {
			r[s] = e[s]
				? function (d) {
						return (n = !n) ? { value: F(e[s](d)), done: !1 } : u ? u(d) : d;
					}
				: u;
		}
	}
	function Js(e) {
		if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
		var r = e[Symbol.asyncIterator],
			n;
		return r
			? r.call(e)
			: ((e = typeof oe == 'function' ? oe(e) : e[Symbol.iterator]()),
				(n = {}),
				o('next'),
				o('throw'),
				o('return'),
				(n[Symbol.asyncIterator] = function () {
					return this;
				}),
				n);
		function o(u) {
			n[u] =
				e[u] &&
				function (d) {
					return new Promise(function (c, v) {
						(d = e[u](d)), s(c, v, d.done, d.value);
					});
				};
		}
		function s(u, d, c, v) {
			Promise.resolve(v).then(function (p) {
				u({ value: p, done: c });
			}, d);
		}
	}
	function Qs(e, r) {
		return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: r }) : (e.raw = r), e;
	}
	function Xs(e) {
		if (e && e.__esModule) return e;
		var r = {};
		if (e != null)
			for (var n in e) n !== 'default' && Object.prototype.hasOwnProperty.call(e, n) && ie(r, e, n);
		return Wp(r, e), r;
	}
	function eu(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function tu(e, r, n, o) {
		if (n === 'a' && !o) throw new TypeError('Private accessor was defined without a getter');
		if (typeof r == 'function' ? e !== r || !o : !r.has(e))
			throw new TypeError(
				'Cannot read private member from an object whose class did not declare it',
			);
		return n === 'm' ? o : n === 'a' ? o.call(e) : o ? o.value : r.get(e);
	}
	function ru(e, r, n, o, s) {
		if (o === 'm') throw new TypeError('Private method is not writable');
		if (o === 'a' && !s) throw new TypeError('Private accessor was defined without a setter');
		if (typeof r == 'function' ? e !== r || !s : !r.has(e))
			throw new TypeError(
				'Cannot write private member to an object whose class did not declare it',
			);
		return o === 'a' ? s.call(e, n) : s ? (s.value = n) : r.set(e, n), n;
	}
	function nu(e, r) {
		if (r === null || (typeof r != 'object' && typeof r != 'function'))
			throw new TypeError("Cannot use 'in' operator on non-object");
		return typeof e == 'function' ? r === e : e.has(r);
	}
	function ou(e, r, n) {
		if (r != null) {
			if (typeof r != 'object' && typeof r != 'function') throw new TypeError('Object expected.');
			var o;
			if (n) {
				if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
				o = r[Symbol.asyncDispose];
			}
			if (o === void 0) {
				if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
				o = r[Symbol.dispose];
			}
			if (typeof o != 'function') throw new TypeError('Object not disposable.');
			e.stack.push({ value: r, dispose: o, async: n });
		} else n && e.stack.push({ async: !0 });
		return r;
	}
	function iu(e) {
		function r(o) {
			(e.error = e.hasError ? new Ip(o, e.error, 'An error was suppressed during disposal.') : o),
				(e.hasError = !0);
		}
		function n() {
			for (; e.stack.length; ) {
				var o = e.stack.pop();
				try {
					var s = o.dispose && o.dispose.call(o.value);
					if (o.async)
						return Promise.resolve(s).then(n, function (u) {
							return r(u), n();
						});
				} catch (u) {
					r(u);
				}
			}
			if (e.hasError) throw e.error;
		}
		return n();
	}
	var Kn,
		ne,
		ie,
		Wp,
		Ip,
		kp,
		su = g(() => {
			Kn = function (e, r) {
				return (
					(Kn =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (n, o) {
								n.__proto__ = o;
							}) ||
						function (n, o) {
							for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
						}),
					Kn(e, r)
				);
			};
			ne = function () {
				return (
					(ne =
						Object.assign ||
						function (r) {
							for (var n, o = 1, s = arguments.length; o < s; o++) {
								n = arguments[o];
								for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
							}
							return r;
						}),
					ne.apply(this, arguments)
				);
			};
			ie = Object.create
				? function (e, r, n, o) {
						o === void 0 && (o = n);
						var s = Object.getOwnPropertyDescriptor(r, n);
						(!s || ('get' in s ? !r.__esModule : s.writable || s.configurable)) &&
							(s = {
								enumerable: !0,
								get: function () {
									return r[n];
								},
							}),
							Object.defineProperty(e, o, s);
					}
				: function (e, r, n, o) {
						o === void 0 && (o = n), (e[o] = r[n]);
					};
			Wp = Object.create
				? function (e, r) {
						Object.defineProperty(e, 'default', { enumerable: !0, value: r });
					}
				: function (e, r) {
						e.default = r;
					};
			Ip =
				typeof SuppressedError == 'function'
					? SuppressedError
					: function (e, r, n) {
							var o = new Error(n);
							return (o.name = 'SuppressedError'), (o.error = e), (o.suppressed = r), o;
						};
			kp = {
				__extends: Ws,
				__assign: ne,
				__rest: Is,
				__decorate: ks,
				__param: Ns,
				__metadata: Hs,
				__awaiter: $s,
				__generator: Vs,
				__createBinding: ie,
				__exportStar: Gs,
				__values: oe,
				__read: Jn,
				__spread: Bs,
				__spreadArrays: zs,
				__spreadArray: Ys,
				__await: F,
				__asyncGenerator: Zs,
				__asyncDelegator: Ks,
				__asyncValues: Js,
				__makeTemplateObject: Qs,
				__importStar: Xs,
				__importDefault: eu,
				__classPrivateFieldGet: tu,
				__classPrivateFieldSet: ru,
				__classPrivateFieldIn: nu,
				__addDisposableResource: ou,
				__disposeResources: iu,
			};
		});
	var l = i((ae) => {
		'use strict';
		Object.defineProperty(ae, '__esModule', { value: !0 });
		ae.DomainEvent = void 0;
		var Qn = class {
			constructor(r, n, o, s, u) {
				a(this, 'event');
				a(this, 'data');
				a(this, 'timestamp');
				a(this, 'principal');
				a(this, 'attempt');
				(this.event = r),
					(this.data = n),
					(this.timestamp = o ? o.toISOString() : new Date().toISOString()),
					(this.principal = s),
					(this.attempt = u);
			}
		};
		ae.DomainEvent = Qn;
	});
	var uu = i((se) => {
		'use strict';
		Object.defineProperty(se, '__esModule', { value: !0 });
		se.ClubCreated = void 0;
		var Np = l(),
			Xn = class extends Np.DomainEvent {};
		se.ClubCreated = Xn;
	});
	var lu = i((ue) => {
		'use strict';
		Object.defineProperty(ue, '__esModule', { value: !0 });
		ue.ClubDeleted = void 0;
		var Hp = l(),
			eo = class extends Hp.DomainEvent {};
		ue.ClubDeleted = eo;
	});
	var du = i((le) => {
		'use strict';
		Object.defineProperty(le, '__esModule', { value: !0 });
		le.ClubUpdated = void 0;
		var $p = l(),
			to = class extends $p.DomainEvent {};
		le.ClubUpdated = to;
	});
	var M = i((de) => {
		'use strict';
		Object.defineProperty(de, '__esModule', { value: !0 });
		de.EntityExportAvailableEvent = void 0;
		var Vp = l(),
			ro = class extends Vp.DomainEvent {
				constructor(n, o, s, u, d, c) {
					super(n, o, s, d, c);
					a(this, 'context');
					this.context = u;
				}
			};
		de.EntityExportAvailableEvent = ro;
	});
	var cu = i((ce) => {
		'use strict';
		Object.defineProperty(ce, '__esModule', { value: !0 });
		ce.ClubsExportAvailable = void 0;
		var Gp = M(),
			no = class extends Gp.EntityExportAvailableEvent {};
		ce.ClubsExportAvailable = no;
	});
	var pu = i((pe) => {
		'use strict';
		Object.defineProperty(pe, '__esModule', { value: !0 });
		pe.ClubsExportRequested = void 0;
		var Bp = l(),
			oo = class extends Bp.DomainEvent {};
		pe.ClubsExportRequested = oo;
	});
	var vu = i((A) => {
		'use strict';
		Object.defineProperty(A, '__esModule', { value: !0 });
		A.RefreshCoachAdded = A.CoachAdded = void 0;
		var zp = l(),
			ve = class extends zp.DomainEvent {};
		A.CoachAdded = ve;
		var io = class extends ve {};
		A.RefreshCoachAdded = io;
	});
	var fu = i((W) => {
		'use strict';
		Object.defineProperty(W, '__esModule', { value: !0 });
		W.RefreshCoachRemoved = W.CoachRemoved = void 0;
		var Yp = l(),
			fe = class extends Yp.DomainEvent {};
		W.CoachRemoved = fe;
		var ao = class extends fe {};
		W.RefreshCoachRemoved = ao;
	});
	var Z = i((me) => {
		'use strict';
		Object.defineProperty(me, '__esModule', { value: !0 });
		me.CompetitionEvent = void 0;
		var Zp = l(),
			so = class extends Zp.DomainEvent {};
		me.CompetitionEvent = so;
	});
	var mu = i((be) => {
		'use strict';
		Object.defineProperty(be, '__esModule', { value: !0 });
		be.CompetitionCreated = void 0;
		var Kp = Z(),
			uo = class extends Kp.CompetitionEvent {};
		be.CompetitionCreated = uo;
	});
	var bu = i((Ee) => {
		'use strict';
		Object.defineProperty(Ee, '__esModule', { value: !0 });
		Ee.CompetitionDeleted = void 0;
		var Jp = l(),
			lo = class extends Jp.DomainEvent {};
		Ee.CompetitionDeleted = lo;
	});
	var I = i((_e) => {
		'use strict';
		Object.defineProperty(_e, '__esModule', { value: !0 });
		_e.EntityFollowedEvent = void 0;
		var Qp = l(),
			co = class extends Qp.DomainEvent {};
		_e.EntityFollowedEvent = co;
	});
	var Eu = i((he) => {
		'use strict';
		Object.defineProperty(he, '__esModule', { value: !0 });
		he.CompetitionFollowed = void 0;
		var Xp = I(),
			po = class extends Xp.EntityFollowedEvent {};
		he.CompetitionFollowed = po;
	});
	var _u = i((ye) => {
		'use strict';
		Object.defineProperty(ye, '__esModule', { value: !0 });
		ye.CompetitionImageUpdated = void 0;
		var ev = Z(),
			vo = class extends ev.CompetitionEvent {};
		ye.CompetitionImageUpdated = vo;
	});
	var hu = i((ge) => {
		'use strict';
		Object.defineProperty(ge, '__esModule', { value: !0 });
		ge.CompetitionSeasonActivated = void 0;
		var tv = l(),
			fo = class extends tv.DomainEvent {};
		ge.CompetitionSeasonActivated = fo;
	});
	var yu = i((Pe) => {
		'use strict';
		Object.defineProperty(Pe, '__esModule', { value: !0 });
		Pe.CompetitionSeasonCreated = void 0;
		var rv = l(),
			mo = class extends rv.DomainEvent {};
		Pe.CompetitionSeasonCreated = mo;
	});
	var gu = i((Me) => {
		'use strict';
		Object.defineProperty(Me, '__esModule', { value: !0 });
		Me.CompetitionSeasonDeactivated = void 0;
		var nv = l(),
			bo = class extends nv.DomainEvent {};
		Me.CompetitionSeasonDeactivated = bo;
	});
	var Pu = i((xe) => {
		'use strict';
		Object.defineProperty(xe, '__esModule', { value: !0 });
		xe.CompetitionSeasonDeleted = void 0;
		var ov = l(),
			Eo = class extends ov.DomainEvent {};
		xe.CompetitionSeasonDeleted = Eo;
	});
	var Mu = i((De) => {
		'use strict';
		Object.defineProperty(De, '__esModule', { value: !0 });
		De.CompetitionSeasonFormStandingsTeasered = void 0;
		var iv = l(),
			_o = class extends iv.DomainEvent {};
		De.CompetitionSeasonFormStandingsTeasered = _o;
	});
	var xu = i((Ce) => {
		'use strict';
		Object.defineProperty(Ce, '__esModule', { value: !0 });
		Ce.CompetitionSeasonTopScorersCreated = void 0;
		var av = l(),
			ho = class extends av.DomainEvent {};
		Ce.CompetitionSeasonTopScorersCreated = ho;
	});
	var Du = i((we) => {
		'use strict';
		Object.defineProperty(we, '__esModule', { value: !0 });
		we.CompetitionSeasonTopScorersDeleted = void 0;
		var sv = l(),
			yo = class extends sv.DomainEvent {};
		we.CompetitionSeasonTopScorersDeleted = yo;
	});
	var Cu = i((Oe) => {
		'use strict';
		Object.defineProperty(Oe, '__esModule', { value: !0 });
		Oe.CompetitionSeasonUpdated = void 0;
		var uv = l(),
			go = class extends uv.DomainEvent {};
		Oe.CompetitionSeasonUpdated = go;
	});
	var wu = i((Le) => {
		'use strict';
		Object.defineProperty(Le, '__esModule', { value: !0 });
		Le.CompetitionSeasonsExportAvailable = void 0;
		var lv = M(),
			Po = class extends lv.EntityExportAvailableEvent {};
		Le.CompetitionSeasonsExportAvailable = Po;
	});
	var Ou = i((Se) => {
		'use strict';
		Object.defineProperty(Se, '__esModule', { value: !0 });
		Se.CompetitionSeasonsExportRequested = void 0;
		var dv = l(),
			Mo = class extends dv.DomainEvent {};
		Se.CompetitionSeasonsExportRequested = Mo;
	});
	var k = i((qe) => {
		'use strict';
		Object.defineProperty(qe, '__esModule', { value: !0 });
		qe.EntityUnfollowedEvent = void 0;
		var cv = l(),
			xo = class extends cv.DomainEvent {};
		qe.EntityUnfollowedEvent = xo;
	});
	var Lu = i((je) => {
		'use strict';
		Object.defineProperty(je, '__esModule', { value: !0 });
		je.CompetitionUnfollowed = void 0;
		var pv = k(),
			Do = class extends pv.EntityUnfollowedEvent {};
		je.CompetitionUnfollowed = Do;
	});
	var Su = i((Te) => {
		'use strict';
		Object.defineProperty(Te, '__esModule', { value: !0 });
		Te.CompetitionUpdated = void 0;
		var vv = Z(),
			Co = class extends vv.CompetitionEvent {};
		Te.CompetitionUpdated = Co;
	});
	var qu = i((Ue) => {
		'use strict';
		Object.defineProperty(Ue, '__esModule', { value: !0 });
		Ue.CupTeamSeasonCreated = void 0;
		var fv = l(),
			wo = class extends fv.DomainEvent {};
		Ue.CupTeamSeasonCreated = wo;
	});
	var ju = i((Re) => {
		'use strict';
		Object.defineProperty(Re, '__esModule', { value: !0 });
		Re.CupTeamSeasonDeleted = void 0;
		var mv = l(),
			Oo = class extends mv.DomainEvent {};
		Re.CupTeamSeasonDeleted = Oo;
	});
	var Tu = i((Fe) => {
		'use strict';
		Object.defineProperty(Fe, '__esModule', { value: !0 });
		Fe.CupTeamSeasonsExportAvailable = void 0;
		var bv = M(),
			Lo = class extends bv.EntityExportAvailableEvent {};
		Fe.CupTeamSeasonsExportAvailable = Lo;
	});
	var Uu = i((Ae) => {
		'use strict';
		Object.defineProperty(Ae, '__esModule', { value: !0 });
		Ae.CupTeamSeasonsExportRequested = void 0;
		var Ev = l(),
			So = class extends Ev.DomainEvent {};
		Ae.CupTeamSeasonsExportRequested = So;
	});
	var Ru = i((We) => {
		'use strict';
		Object.defineProperty(We, '__esModule', { value: !0 });
		We.DistrictCreated = void 0;
		var _v = l(),
			qo = class extends _v.DomainEvent {};
		We.DistrictCreated = qo;
	});
	var Fu = i((Ie) => {
		'use strict';
		Object.defineProperty(Ie, '__esModule', { value: !0 });
		Ie.DistrictDeleted = void 0;
		var hv = l(),
			jo = class extends hv.DomainEvent {};
		Ie.DistrictDeleted = jo;
	});
	var Au = i((ke) => {
		'use strict';
		Object.defineProperty(ke, '__esModule', { value: !0 });
		ke.DistrictUpdated = void 0;
		var yv = l(),
			To = class extends yv.DomainEvent {};
		ke.DistrictUpdated = To;
	});
	var K = i((Ne) => {
		'use strict';
		Object.defineProperty(Ne, '__esModule', { value: !0 });
		Ne.EntitiesForDistrictRequested = void 0;
		var gv = l(),
			Uo = class extends gv.DomainEvent {};
		Ne.EntitiesForDistrictRequested = Uo;
	});
	var Wu = i((He) => {
		'use strict';
		Object.defineProperty(He, '__esModule', { value: !0 });
		He.FollowableTopicDeleted = void 0;
		var Pv = l(),
			Ro = class extends Pv.DomainEvent {};
		He.FollowableTopicDeleted = Ro;
	});
	var Iu = i(($e) => {
		'use strict';
		Object.defineProperty($e, '__esModule', { value: !0 });
		$e.GalleriesForDistrictRequested = void 0;
		var Mv = K(),
			Fo = class extends Mv.EntitiesForDistrictRequested {};
		$e.GalleriesForDistrictRequested = Fo;
	});
	var ku = i((Ve) => {
		'use strict';
		Object.defineProperty(Ve, '__esModule', { value: !0 });
		Ve.GalleryDeleted = void 0;
		var xv = l(),
			Ao = class extends xv.DomainEvent {};
		Ve.GalleryDeleted = Ao;
	});
	var Nu = i((Ge) => {
		'use strict';
		Object.defineProperty(Ge, '__esModule', { value: !0 });
		Ge.GalleryUpdated = void 0;
		var Dv = l(),
			Wo = class extends Dv.DomainEvent {};
		Ge.GalleryUpdated = Wo;
	});
	var Hu = i((Be) => {
		'use strict';
		Object.defineProperty(Be, '__esModule', { value: !0 });
		Be.ImageCreated = void 0;
		var Cv = l(),
			Io = class extends Cv.DomainEvent {};
		Be.ImageCreated = Io;
	});
	var $u = i((ze) => {
		'use strict';
		Object.defineProperty(ze, '__esModule', { value: !0 });
		ze.ImageDeleted = void 0;
		var wv = l(),
			ko = class extends wv.DomainEvent {};
		ze.ImageDeleted = ko;
	});
	var Vu = i((Ye) => {
		'use strict';
		Object.defineProperty(Ye, '__esModule', { value: !0 });
		Ye.ImagesUploaded = void 0;
		var Ov = l(),
			No = class extends Ov.DomainEvent {};
		Ye.ImagesUploaded = No;
	});
	var Gu = i((Ze) => {
		'use strict';
		Object.defineProperty(Ze, '__esModule', { value: !0 });
		Ze.ImportBatchUploaded = void 0;
		var Lv = l(),
			Ho = class extends Lv.DomainEvent {};
		Ze.ImportBatchUploaded = Ho;
	});
	var Bu = i((Ke) => {
		'use strict';
		Object.defineProperty(Ke, '__esModule', { value: !0 });
		Ke.LiveTickerMatchResultUpdated = void 0;
		var Sv = l(),
			$o = class extends Sv.DomainEvent {};
		Ke.LiveTickerMatchResultUpdated = $o;
	});
	var zu = i((Je) => {
		'use strict';
		Object.defineProperty(Je, '__esModule', { value: !0 });
		Je.LiveTickerPremiumAwardReceived = void 0;
		var qv = l(),
			Vo = class extends qv.DomainEvent {};
		Je.LiveTickerPremiumAwardReceived = Vo;
	});
	var Yu = i((N) => {
		'use strict';
		Object.defineProperty(N, '__esModule', { value: !0 });
		N.RefreshMatchAborted = N.MatchAborted = void 0;
		var jv = l(),
			Qe = class extends jv.DomainEvent {};
		N.MatchAborted = Qe;
		var Go = class extends Qe {};
		N.RefreshMatchAborted = Go;
	});
	var Zu = i((H) => {
		'use strict';
		Object.defineProperty(H, '__esModule', { value: !0 });
		H.RefreshMatchCancelled = H.MatchCancelled = void 0;
		var Tv = l(),
			Xe = class extends Tv.DomainEvent {};
		H.MatchCancelled = Xe;
		var Bo = class extends Xe {};
		H.RefreshMatchCancelled = Bo;
	});
	var Ku = i((et) => {
		'use strict';
		Object.defineProperty(et, '__esModule', { value: !0 });
		et.MatchCreated = void 0;
		var Uv = l(),
			zo = class extends Uv.DomainEvent {};
		et.MatchCreated = zo;
	});
	var Ju = i((tt) => {
		'use strict';
		Object.defineProperty(tt, '__esModule', { value: !0 });
		tt.MatchDeleted = void 0;
		var Rv = l(),
			Yo = class extends Rv.DomainEvent {};
		tt.MatchDeleted = Yo;
	});
	var nt = i((rt) => {
		'use strict';
		Object.defineProperty(rt, '__esModule', { value: !0 });
		rt.MatchDistrictRelationEvent = void 0;
		var Fv = l(),
			Zo = class extends Fv.DomainEvent {};
		rt.MatchDistrictRelationEvent = Zo;
	});
	var Qu = i((ot) => {
		'use strict';
		Object.defineProperty(ot, '__esModule', { value: !0 });
		ot.MatchDistrictRelationCreated = void 0;
		var Av = nt(),
			Ko = class extends Av.MatchDistrictRelationEvent {};
		ot.MatchDistrictRelationCreated = Ko;
	});
	var Xu = i((it) => {
		'use strict';
		Object.defineProperty(it, '__esModule', { value: !0 });
		it.MatchDistrictRelationDeleted = void 0;
		var Wv = nt(),
			Jo = class extends Wv.MatchDistrictRelationEvent {};
		it.MatchDistrictRelationDeleted = Jo;
	});
	var el = i((at) => {
		'use strict';
		Object.defineProperty(at, '__esModule', { value: !0 });
		at.MatchEventChance = void 0;
		var Iv = l(),
			Qo = class extends Iv.DomainEvent {};
		at.MatchEventChance = Qo;
	});
	var tl = i((st) => {
		'use strict';
		Object.defineProperty(st, '__esModule', { value: !0 });
		st.MatchEventDeleted = void 0;
		var kv = l(),
			Xo = class extends kv.DomainEvent {};
		st.MatchEventDeleted = Xo;
	});
	var rl = i((ut) => {
		'use strict';
		Object.defineProperty(ut, '__esModule', { value: !0 });
		ut.MatchEventGoalDenied = void 0;
		var Nv = l(),
			ei = class extends Nv.DomainEvent {};
		ut.MatchEventGoalDenied = ei;
	});
	var nl = i((lt) => {
		'use strict';
		Object.defineProperty(lt, '__esModule', { value: !0 });
		lt.MatchEventGoal = void 0;
		var Hv = l(),
			ti = class extends Hv.DomainEvent {};
		lt.MatchEventGoal = ti;
	});
	var ol = i((dt) => {
		'use strict';
		Object.defineProperty(dt, '__esModule', { value: !0 });
		dt.MatchEventInterimResult = void 0;
		var $v = l(),
			ri = class extends $v.DomainEvent {};
		dt.MatchEventInterimResult = ri;
	});
	var il = i((ct) => {
		'use strict';
		Object.defineProperty(ct, '__esModule', { value: !0 });
		ct.MatchEventLineupsCompleted = void 0;
		var Vv = l(),
			ni = class extends Vv.DomainEvent {};
		ct.MatchEventLineupsCompleted = ni;
	});
	var al = i((pt) => {
		'use strict';
		Object.defineProperty(pt, '__esModule', { value: !0 });
		pt.MatchEventOwnGoal = void 0;
		var Gv = l(),
			oi = class extends Gv.DomainEvent {};
		pt.MatchEventOwnGoal = oi;
	});
	var sl = i((vt) => {
		'use strict';
		Object.defineProperty(vt, '__esModule', { value: !0 });
		vt.MatchEventPenaltyFail = void 0;
		var Bv = l(),
			ii = class extends Bv.DomainEvent {};
		vt.MatchEventPenaltyFail = ii;
	});
	var ul = i((ft) => {
		'use strict';
		Object.defineProperty(ft, '__esModule', { value: !0 });
		ft.MatchEventRedCard = void 0;
		var zv = l(),
			ai = class extends zv.DomainEvent {};
		ft.MatchEventRedCard = ai;
	});
	var ll = i((mt) => {
		'use strict';
		Object.defineProperty(mt, '__esModule', { value: !0 });
		mt.MatchEventTimePenalty = void 0;
		var Yv = l(),
			si = class extends Yv.DomainEvent {};
		mt.MatchEventTimePenalty = si;
	});
	var dl = i((bt) => {
		'use strict';
		Object.defineProperty(bt, '__esModule', { value: !0 });
		bt.MatchEventUpdated = void 0;
		var Zv = l(),
			ui = class extends Zv.DomainEvent {};
		bt.MatchEventUpdated = ui;
	});
	var cl = i((Et) => {
		'use strict';
		Object.defineProperty(Et, '__esModule', { value: !0 });
		Et.MatchEventWhistleOvertimeStartFirstHalftime = void 0;
		var Kv = l(),
			li = class extends Kv.DomainEvent {};
		Et.MatchEventWhistleOvertimeStartFirstHalftime = li;
	});
	var pl = i((_t) => {
		'use strict';
		Object.defineProperty(_t, '__esModule', { value: !0 });
		_t.MatchEventWhistleOvertimeStartSecondHalftime = void 0;
		var Jv = l(),
			di = class extends Jv.DomainEvent {};
		_t.MatchEventWhistleOvertimeStartSecondHalftime = di;
	});
	var vl = i((ht) => {
		'use strict';
		Object.defineProperty(ht, '__esModule', { value: !0 });
		ht.MatchEventWhistleOvertimeStopFirstHalftime = void 0;
		var Qv = l(),
			ci = class extends Qv.DomainEvent {};
		ht.MatchEventWhistleOvertimeStopFirstHalftime = ci;
	});
	var fl = i((yt) => {
		'use strict';
		Object.defineProperty(yt, '__esModule', { value: !0 });
		yt.MatchEventWhistleOvertimeStopSecondHalftime = void 0;
		var Xv = l(),
			pi = class extends Xv.DomainEvent {};
		yt.MatchEventWhistleOvertimeStopSecondHalftime = pi;
	});
	var ml = i((gt) => {
		'use strict';
		Object.defineProperty(gt, '__esModule', { value: !0 });
		gt.MatchEventWhistlePenaltyShootoutStart = void 0;
		var ef = l(),
			vi = class extends ef.DomainEvent {};
		gt.MatchEventWhistlePenaltyShootoutStart = vi;
	});
	var bl = i((Pt) => {
		'use strict';
		Object.defineProperty(Pt, '__esModule', { value: !0 });
		Pt.MatchEventWhistlePenaltyShootoutStop = void 0;
		var tf = l(),
			fi = class extends tf.DomainEvent {};
		Pt.MatchEventWhistlePenaltyShootoutStop = fi;
	});
	var El = i((Mt) => {
		'use strict';
		Object.defineProperty(Mt, '__esModule', { value: !0 });
		Mt.MatchEventWhistleRegularStartFirstHalftime = void 0;
		var rf = l(),
			mi = class extends rf.DomainEvent {};
		Mt.MatchEventWhistleRegularStartFirstHalftime = mi;
	});
	var _l = i((xt) => {
		'use strict';
		Object.defineProperty(xt, '__esModule', { value: !0 });
		xt.MatchEventWhistleRegularStartSecondHalftime = void 0;
		var nf = l(),
			bi = class extends nf.DomainEvent {};
		xt.MatchEventWhistleRegularStartSecondHalftime = bi;
	});
	var hl = i((Dt) => {
		'use strict';
		Object.defineProperty(Dt, '__esModule', { value: !0 });
		Dt.MatchEventWhistleRegularStopFirstHalftime = void 0;
		var of = l(),
			Ei = class extends of.DomainEvent {};
		Dt.MatchEventWhistleRegularStopFirstHalftime = Ei;
	});
	var yl = i((Ct) => {
		'use strict';
		Object.defineProperty(Ct, '__esModule', { value: !0 });
		Ct.MatchEventWhistleRegularStopSecondHalftime = void 0;
		var af = l(),
			_i = class extends af.DomainEvent {};
		Ct.MatchEventWhistleRegularStopSecondHalftime = _i;
	});
	var gl = i((wt) => {
		'use strict';
		Object.defineProperty(wt, '__esModule', { value: !0 });
		wt.MatchEventYellowCard = void 0;
		var sf = l(),
			hi = class extends sf.DomainEvent {};
		wt.MatchEventYellowCard = hi;
	});
	var Pl = i((Ot) => {
		'use strict';
		Object.defineProperty(Ot, '__esModule', { value: !0 });
		Ot.MatchEventYellowRedCard = void 0;
		var uf = l(),
			yi = class extends uf.DomainEvent {};
		Ot.MatchEventYellowRedCard = yi;
	});
	var Ml = i((Lt) => {
		'use strict';
		Object.defineProperty(Lt, '__esModule', { value: !0 });
		Lt.MatchFollowed = void 0;
		var lf = I(),
			gi = class extends lf.EntityFollowedEvent {};
		Lt.MatchFollowed = gi;
	});
	var xl = i((St) => {
		'use strict';
		Object.defineProperty(St, '__esModule', { value: !0 });
		St.MatchGalleryRemoved = void 0;
		var df = l(),
			Pi = class extends df.DomainEvent {};
		St.MatchGalleryRemoved = Pi;
	});
	var Dl = i((qt) => {
		'use strict';
		Object.defineProperty(qt, '__esModule', { value: !0 });
		qt.MatchGalleryUploaded = void 0;
		var cf = l(),
			Mi = class extends cf.DomainEvent {};
		qt.MatchGalleryUploaded = Mi;
	});
	var Cl = i((jt) => {
		'use strict';
		Object.defineProperty(jt, '__esModule', { value: !0 });
		jt.MatchPlaylistDeleted = void 0;
		var pf = l(),
			xi = class extends pf.DomainEvent {};
		jt.MatchPlaylistDeleted = xi;
	});
	var wl = i((Tt) => {
		'use strict';
		Object.defineProperty(Tt, '__esModule', { value: !0 });
		Tt.MatchPlaylistUpdated = void 0;
		var vf = l(),
			Di = class extends vf.DomainEvent {};
		Tt.MatchPlaylistUpdated = Di;
	});
	var Ol = i((Ut) => {
		'use strict';
		Object.defineProperty(Ut, '__esModule', { value: !0 });
		Ut.MatchPlaylistUploaded = void 0;
		var ff = l(),
			Ci = class extends ff.DomainEvent {};
		Ut.MatchPlaylistUploaded = Ci;
	});
	var Ll = i(($) => {
		'use strict';
		Object.defineProperty($, '__esModule', { value: !0 });
		$.RefreshMatchResultSaved = $.MatchResultSaved = void 0;
		var mf = l(),
			Rt = class extends mf.DomainEvent {};
		$.MatchResultSaved = Rt;
		var wi = class extends Rt {};
		$.RefreshMatchResultSaved = wi;
	});
	var Sl = i((Ft) => {
		'use strict';
		Object.defineProperty(Ft, '__esModule', { value: !0 });
		Ft.MatchInterimResultSaved = void 0;
		var bf = l(),
			Oi = class extends bf.DomainEvent {};
		Ft.MatchInterimResultSaved = Oi;
	});
	var ql = i((At) => {
		'use strict';
		Object.defineProperty(At, '__esModule', { value: !0 });
		At.MatchResultReset = void 0;
		var Ef = l(),
			Li = class extends Ef.DomainEvent {};
		At.MatchResultReset = Li;
	});
	var jl = i((Wt) => {
		'use strict';
		Object.defineProperty(Wt, '__esModule', { value: !0 });
		Wt.MatchShifted = void 0;
		var _f = l(),
			Si = class extends _f.DomainEvent {};
		Wt.MatchShifted = Si;
	});
	var Tl = i((It) => {
		'use strict';
		Object.defineProperty(It, '__esModule', { value: !0 });
		It.MatchStarted = void 0;
		var hf = l(),
			qi = class extends hf.DomainEvent {};
		It.MatchStarted = qi;
	});
	var Ul = i((kt) => {
		'use strict';
		Object.defineProperty(kt, '__esModule', { value: !0 });
		kt.MatchUnfollowed = void 0;
		var yf = k(),
			ji = class extends yf.EntityUnfollowedEvent {};
		kt.MatchUnfollowed = ji;
	});
	var Rl = i((Nt) => {
		'use strict';
		Object.defineProperty(Nt, '__esModule', { value: !0 });
		Nt.MatchUpdated = void 0;
		var gf = l(),
			Ti = class extends gf.DomainEvent {};
		Nt.MatchUpdated = Ti;
	});
	var Fl = i((Ht) => {
		'use strict';
		Object.defineProperty(Ht, '__esModule', { value: !0 });
		Ht.MatchVideoElementCreated = void 0;
		var Pf = l(),
			Ui = class extends Pf.DomainEvent {};
		Ht.MatchVideoElementCreated = Ui;
	});
	var Vt = i(($t) => {
		'use strict';
		Object.defineProperty($t, '__esModule', { value: !0 });
		$t.MatchVideoEmbeddingEvent = void 0;
		var Mf = l(),
			Ri = class extends Mf.DomainEvent {};
		$t.MatchVideoEmbeddingEvent = Ri;
	});
	var Al = i((Gt) => {
		'use strict';
		Object.defineProperty(Gt, '__esModule', { value: !0 });
		Gt.MatchVideoEmbeddingCreated = void 0;
		var xf = Vt(),
			Fi = class extends xf.MatchVideoEmbeddingEvent {};
		Gt.MatchVideoEmbeddingCreated = Fi;
	});
	var Wl = i((Bt) => {
		'use strict';
		Object.defineProperty(Bt, '__esModule', { value: !0 });
		Bt.MatchVideoEmbeddingDeleted = void 0;
		var Df = Vt(),
			Ai = class extends Df.MatchVideoEmbeddingEvent {};
		Bt.MatchVideoEmbeddingDeleted = Ai;
	});
	var Il = i((zt) => {
		'use strict';
		Object.defineProperty(zt, '__esModule', { value: !0 });
		zt.MatchesExportAvailable = void 0;
		var Cf = M(),
			Wi = class extends Cf.EntityExportAvailableEvent {};
		zt.MatchesExportAvailable = Wi;
	});
	var kl = i((Yt) => {
		'use strict';
		Object.defineProperty(Yt, '__esModule', { value: !0 });
		Yt.MatchesExportRequested = void 0;
		var wf = l(),
			Ii = class extends wf.DomainEvent {};
		Yt.MatchesExportRequested = Ii;
	});
	var Nl = i((Zt) => {
		'use strict';
		Object.defineProperty(Zt, '__esModule', { value: !0 });
		Zt.NewsDeleted = void 0;
		var Of = l(),
			ki = class extends Of.DomainEvent {};
		Zt.NewsDeleted = ki;
	});
	var Hl = i((Kt) => {
		'use strict';
		Object.defineProperty(Kt, '__esModule', { value: !0 });
		Kt.NewsExportAvailable = void 0;
		var Lf = M(),
			Ni = class extends Lf.EntityExportAvailableEvent {};
		Kt.NewsExportAvailable = Ni;
	});
	var $l = i((Jt) => {
		'use strict';
		Object.defineProperty(Jt, '__esModule', { value: !0 });
		Jt.NewsExportRequested = void 0;
		var Sf = l(),
			Hi = class extends Sf.DomainEvent {};
		Jt.NewsExportRequested = Hi;
	});
	var Vl = i((Qt) => {
		'use strict';
		Object.defineProperty(Qt, '__esModule', { value: !0 });
		Qt.NewsForDistrictRequested = void 0;
		var qf = K(),
			$i = class extends qf.EntitiesForDistrictRequested {};
		Qt.NewsForDistrictRequested = $i;
	});
	var Gl = i((Xt) => {
		'use strict';
		Object.defineProperty(Xt, '__esModule', { value: !0 });
		Xt.NewsImageUpdated = void 0;
		var jf = l(),
			Vi = class extends jf.DomainEvent {};
		Xt.NewsImageUpdated = Vi;
	});
	var Bl = i((er) => {
		'use strict';
		Object.defineProperty(er, '__esModule', { value: !0 });
		er.NewsPublished = void 0;
		var Tf = l(),
			Gi = class extends Tf.DomainEvent {};
		er.NewsPublished = Gi;
	});
	var zi = i((tr) => {
		'use strict';
		Object.defineProperty(tr, '__esModule', { value: !0 });
		tr.SlugRenamed = void 0;
		var Uf = l(),
			Bi = class extends Uf.DomainEvent {};
		tr.SlugRenamed = Bi;
	});
	var zl = i((rr) => {
		'use strict';
		Object.defineProperty(rr, '__esModule', { value: !0 });
		rr.NewsSlugRenamed = void 0;
		var Rf = zi(),
			Yi = class extends Rf.SlugRenamed {};
		rr.NewsSlugRenamed = Yi;
	});
	var Yl = i((nr) => {
		'use strict';
		Object.defineProperty(nr, '__esModule', { value: !0 });
		nr.NewsUnpublished = void 0;
		var Ff = l(),
			Zi = class extends Ff.DomainEvent {};
		nr.NewsUnpublished = Zi;
	});
	var Zl = i((or) => {
		'use strict';
		Object.defineProperty(or, '__esModule', { value: !0 });
		or.NewsUpdated = void 0;
		var Af = l(),
			Ki = class extends Af.DomainEvent {};
		or.NewsUpdated = Ki;
	});
	var Kl = i((ir) => {
		'use strict';
		Object.defineProperty(ir, '__esModule', { value: !0 });
		ir.PowerRankingCreated = void 0;
		var Wf = l(),
			Ji = class extends Wf.DomainEvent {};
		ir.PowerRankingCreated = Ji;
	});
	var Jl = i((ar) => {
		'use strict';
		Object.defineProperty(ar, '__esModule', { value: !0 });
		ar.PowerRankingDeleted = void 0;
		var If = l(),
			Qi = class extends If.DomainEvent {};
		ar.PowerRankingDeleted = Qi;
	});
	var Ql = i((sr) => {
		'use strict';
		Object.defineProperty(sr, '__esModule', { value: !0 });
		sr.PowerRankingUpdated = void 0;
		var kf = l(),
			Xi = class extends kf.DomainEvent {};
		sr.PowerRankingUpdated = Xi;
	});
	var Xl = i((ur) => {
		'use strict';
		Object.defineProperty(ur, '__esModule', { value: !0 });
		ur.ProfileCreated = void 0;
		var Nf = l(),
			ea = class extends Nf.DomainEvent {};
		ur.ProfileCreated = ea;
	});
	var ed = i((lr) => {
		'use strict';
		Object.defineProperty(lr, '__esModule', { value: !0 });
		lr.ProfileDeleted = void 0;
		var Hf = l(),
			ta = class extends Hf.DomainEvent {};
		lr.ProfileDeleted = ta;
	});
	var td = i((dr) => {
		'use strict';
		Object.defineProperty(dr, '__esModule', { value: !0 });
		dr.ProfileFollowed = void 0;
		var $f = I(),
			ra = class extends $f.EntityFollowedEvent {};
		dr.ProfileFollowed = ra;
	});
	var rd = i((cr) => {
		'use strict';
		Object.defineProperty(cr, '__esModule', { value: !0 });
		cr.ProfileImageUpdated = void 0;
		var Vf = l(),
			na = class extends Vf.DomainEvent {};
		cr.ProfileImageUpdated = na;
	});
	var nd = i((pr) => {
		'use strict';
		Object.defineProperty(pr, '__esModule', { value: !0 });
		pr.ProfileInjured = void 0;
		var Gf = l(),
			oa = class extends Gf.DomainEvent {};
		pr.ProfileInjured = oa;
	});
	var od = i((vr) => {
		'use strict';
		Object.defineProperty(vr, '__esModule', { value: !0 });
		vr.ProfileSeasonBanCreated = void 0;
		var Bf = l(),
			ia = class extends Bf.DomainEvent {};
		vr.ProfileSeasonBanCreated = ia;
	});
	var id = i((fr) => {
		'use strict';
		Object.defineProperty(fr, '__esModule', { value: !0 });
		fr.ProfileSeasonBanDeleted = void 0;
		var zf = l(),
			aa = class extends zf.DomainEvent {};
		fr.ProfileSeasonBanDeleted = aa;
	});
	var ad = i((mr) => {
		'use strict';
		Object.defineProperty(mr, '__esModule', { value: !0 });
		mr.ProfileSeasonBanUpdated = void 0;
		var Yf = l(),
			sa = class extends Yf.DomainEvent {};
		mr.ProfileSeasonBanUpdated = sa;
	});
	var sd = i((br) => {
		'use strict';
		Object.defineProperty(br, '__esModule', { value: !0 });
		br.ProfileSeasonInjuryDeleted = void 0;
		var Zf = l(),
			ua = class extends Zf.DomainEvent {};
		br.ProfileSeasonInjuryDeleted = ua;
	});
	var ud = i((Er) => {
		'use strict';
		Object.defineProperty(Er, '__esModule', { value: !0 });
		Er.ProfileSeasonInjuryUpdated = void 0;
		var Kf = l(),
			la = class extends Kf.DomainEvent {};
		Er.ProfileSeasonInjuryUpdated = la;
	});
	var ld = i((_r) => {
		'use strict';
		Object.defineProperty(_r, '__esModule', { value: !0 });
		_r.ProfileTransferCreated = void 0;
		var Jf = l(),
			da = class extends Jf.DomainEvent {};
		_r.ProfileTransferCreated = da;
	});
	var dd = i((hr) => {
		'use strict';
		Object.defineProperty(hr, '__esModule', { value: !0 });
		hr.ProfileTransferDeleted = void 0;
		var Qf = l(),
			ca = class extends Qf.DomainEvent {};
		hr.ProfileTransferDeleted = ca;
	});
	var cd = i((yr) => {
		'use strict';
		Object.defineProperty(yr, '__esModule', { value: !0 });
		yr.ProfileTransferUpdated = void 0;
		var Xf = l(),
			pa = class extends Xf.DomainEvent {};
		yr.ProfileTransferUpdated = pa;
	});
	var pd = i((gr) => {
		'use strict';
		Object.defineProperty(gr, '__esModule', { value: !0 });
		gr.ProfileTransfersForDistrictRequested = void 0;
		var em = K(),
			va = class extends em.EntitiesForDistrictRequested {};
		gr.ProfileTransfersForDistrictRequested = va;
	});
	var vd = i((Pr) => {
		'use strict';
		Object.defineProperty(Pr, '__esModule', { value: !0 });
		Pr.ProfileUnfollowed = void 0;
		var tm = k(),
			fa = class extends tm.EntityUnfollowedEvent {};
		Pr.ProfileUnfollowed = fa;
	});
	var fd = i((Mr) => {
		'use strict';
		Object.defineProperty(Mr, '__esModule', { value: !0 });
		Mr.ProfileUpdated = void 0;
		var rm = l(),
			ma = class extends rm.DomainEvent {};
		Mr.ProfileUpdated = ma;
	});
	var md = i((xr) => {
		'use strict';
		Object.defineProperty(xr, '__esModule', { value: !0 });
		xr.PushNotificationSubmitted = void 0;
		var nm = l(),
			ba = class extends nm.DomainEvent {};
		xr.PushNotificationSubmitted = ba;
	});
	var _a = i((Dr) => {
		'use strict';
		Object.defineProperty(Dr, '__esModule', { value: !0 });
		Dr.RoundEvent = void 0;
		var om = l(),
			Ea = class extends om.DomainEvent {};
		Dr.RoundEvent = Ea;
	});
	var bd = i((Cr) => {
		'use strict';
		Object.defineProperty(Cr, '__esModule', { value: !0 });
		Cr.RoundUpdated = void 0;
		var im = _a(),
			ha = class extends im.RoundEvent {};
		Cr.RoundUpdated = ha;
	});
	var Ed = i((wr) => {
		'use strict';
		Object.defineProperty(wr, '__esModule', { value: !0 });
		wr.SeasonCreated = void 0;
		var am = l(),
			ya = class extends am.DomainEvent {};
		wr.SeasonCreated = ya;
	});
	var _d = i((Or) => {
		'use strict';
		Object.defineProperty(Or, '__esModule', { value: !0 });
		Or.SeasonDeleted = void 0;
		var sm = l(),
			ga = class extends sm.DomainEvent {};
		Or.SeasonDeleted = ga;
	});
	var hd = i((Lr) => {
		'use strict';
		Object.defineProperty(Lr, '__esModule', { value: !0 });
		Lr.SeasonUpdated = void 0;
		var um = l(),
			Pa = class extends um.DomainEvent {};
		Lr.SeasonUpdated = Pa;
	});
	var yd = i((Sr) => {
		'use strict';
		Object.defineProperty(Sr, '__esModule', { value: !0 });
		Sr.StreamEntryCreated = void 0;
		var lm = l(),
			Ma = class extends lm.DomainEvent {};
		Sr.StreamEntryCreated = Ma;
	});
	var gd = i((qr) => {
		'use strict';
		Object.defineProperty(qr, '__esModule', { value: !0 });
		qr.StreamEntryDeleted = void 0;
		var dm = l(),
			xa = class extends dm.DomainEvent {};
		qr.StreamEntryDeleted = xa;
	});
	var Pd = i((jr) => {
		'use strict';
		Object.defineProperty(jr, '__esModule', { value: !0 });
		jr.StreamEntryUpdated = void 0;
		var cm = l(),
			Da = class extends cm.DomainEvent {};
		jr.StreamEntryUpdated = Da;
	});
	var Ur = i((Tr) => {
		'use strict';
		Object.defineProperty(Tr, '__esModule', { value: !0 });
		Tr.TeamEvent = void 0;
		var pm = l(),
			Ca = class extends pm.DomainEvent {};
		Tr.TeamEvent = Ca;
	});
	var Md = i((Rr) => {
		'use strict';
		Object.defineProperty(Rr, '__esModule', { value: !0 });
		Rr.TeamCreated = void 0;
		var vm = Ur(),
			wa = class extends vm.TeamEvent {};
		Rr.TeamCreated = wa;
	});
	var xd = i((Fr) => {
		'use strict';
		Object.defineProperty(Fr, '__esModule', { value: !0 });
		Fr.TeamDeleted = void 0;
		var fm = l(),
			Oa = class extends fm.DomainEvent {};
		Fr.TeamDeleted = Oa;
	});
	var Dd = i((Ar) => {
		'use strict';
		Object.defineProperty(Ar, '__esModule', { value: !0 });
		Ar.TeamFollowed = void 0;
		var mm = I(),
			La = class extends mm.EntityFollowedEvent {};
		Ar.TeamFollowed = La;
	});
	var Cd = i((Wr) => {
		'use strict';
		Object.defineProperty(Wr, '__esModule', { value: !0 });
		Wr.TeamSeasonCreated = void 0;
		var bm = l(),
			Sa = class extends bm.DomainEvent {};
		Wr.TeamSeasonCreated = Sa;
	});
	var wd = i((Ir) => {
		'use strict';
		Object.defineProperty(Ir, '__esModule', { value: !0 });
		Ir.TeamSeasonDeleted = void 0;
		var Em = l(),
			qa = class extends Em.DomainEvent {};
		Ir.TeamSeasonDeleted = qa;
	});
	var Od = i((kr) => {
		'use strict';
		Object.defineProperty(kr, '__esModule', { value: !0 });
		kr.TeamSeasonImageUpdated = void 0;
		var _m = l(),
			ja = class extends _m.DomainEvent {};
		kr.TeamSeasonImageUpdated = ja;
	});
	var Ld = i((Nr) => {
		'use strict';
		Object.defineProperty(Nr, '__esModule', { value: !0 });
		Nr.TeamSeasonUpdated = void 0;
		var hm = l(),
			Ta = class extends hm.DomainEvent {};
		Nr.TeamSeasonUpdated = Ta;
	});
	var Sd = i((Hr) => {
		'use strict';
		Object.defineProperty(Hr, '__esModule', { value: !0 });
		Hr.TeamSeasonsExportAvailable = void 0;
		var ym = M(),
			Ua = class extends ym.EntityExportAvailableEvent {};
		Hr.TeamSeasonsExportAvailable = Ua;
	});
	var qd = i(($r) => {
		'use strict';
		Object.defineProperty($r, '__esModule', { value: !0 });
		$r.TeamSeasonsExportRequested = void 0;
		var gm = l(),
			Ra = class extends gm.DomainEvent {};
		$r.TeamSeasonsExportRequested = Ra;
	});
	var jd = i((Vr) => {
		'use strict';
		Object.defineProperty(Vr, '__esModule', { value: !0 });
		Vr.TeamUnfollowed = void 0;
		var Pm = k(),
			Fa = class extends Pm.EntityUnfollowedEvent {};
		Vr.TeamUnfollowed = Fa;
	});
	var Td = i((Gr) => {
		'use strict';
		Object.defineProperty(Gr, '__esModule', { value: !0 });
		Gr.TeamUpdated = void 0;
		var Mm = Ur(),
			Aa = class extends Mm.TeamEvent {};
		Gr.TeamUpdated = Aa;
	});
	var Ud = i((Br) => {
		'use strict';
		Object.defineProperty(Br, '__esModule', { value: !0 });
		Br.TeamsExportAvailable = void 0;
		var xm = M(),
			Wa = class extends xm.EntityExportAvailableEvent {};
		Br.TeamsExportAvailable = Wa;
	});
	var Rd = i((zr) => {
		'use strict';
		Object.defineProperty(zr, '__esModule', { value: !0 });
		zr.TeamsExportRequested = void 0;
		var Dm = l(),
			Ia = class extends Dm.DomainEvent {};
		zr.TeamsExportRequested = Ia;
	});
	var Fd = i((Yr) => {
		'use strict';
		Object.defineProperty(Yr, '__esModule', { value: !0 });
		Yr.TopElevenCreated = void 0;
		var Cm = l(),
			ka = class extends Cm.DomainEvent {};
		Yr.TopElevenCreated = ka;
	});
	var Ad = i((Zr) => {
		'use strict';
		Object.defineProperty(Zr, '__esModule', { value: !0 });
		Zr.TopElevenDeleted = void 0;
		var wm = l(),
			Na = class extends wm.DomainEvent {};
		Zr.TopElevenDeleted = Na;
	});
	var Wd = i((Kr) => {
		'use strict';
		Object.defineProperty(Kr, '__esModule', { value: !0 });
		Kr.TopElevenUpdated = void 0;
		var Om = l(),
			Ha = class extends Om.DomainEvent {};
		Kr.TopElevenUpdated = Ha;
	});
	var Id = i((Jr) => {
		'use strict';
		Object.defineProperty(Jr, '__esModule', { value: !0 });
		Jr.TopElevensExportAvailable = void 0;
		var Lm = M(),
			$a = class extends Lm.EntityExportAvailableEvent {};
		Jr.TopElevensExportAvailable = $a;
	});
	var kd = i((Qr) => {
		'use strict';
		Object.defineProperty(Qr, '__esModule', { value: !0 });
		Qr.TopElevensExportRequested = void 0;
		var Sm = l(),
			Va = class extends Sm.DomainEvent {};
		Qr.TopElevensExportRequested = Va;
	});
	var J = i((Xr) => {
		'use strict';
		Object.defineProperty(Xr, '__esModule', { value: !0 });
		Xr.UserEvent = void 0;
		var qm = l(),
			Ga = class extends qm.DomainEvent {};
		Xr.UserEvent = Ga;
	});
	var Nd = i((en) => {
		'use strict';
		Object.defineProperty(en, '__esModule', { value: !0 });
		en.UserCreated = void 0;
		var jm = J(),
			Ba = class extends jm.UserEvent {};
		en.UserCreated = Ba;
	});
	var Hd = i((tn) => {
		'use strict';
		Object.defineProperty(tn, '__esModule', { value: !0 });
		tn.UserExportAvailable = void 0;
		var Tm = M(),
			za = class extends Tm.EntityExportAvailableEvent {};
		tn.UserExportAvailable = za;
	});
	var $d = i((rn) => {
		'use strict';
		Object.defineProperty(rn, '__esModule', { value: !0 });
		rn.UserExportRequested = void 0;
		var Um = l(),
			Ya = class extends Um.DomainEvent {};
		rn.UserExportRequested = Ya;
	});
	var Vd = i((nn) => {
		'use strict';
		Object.defineProperty(nn, '__esModule', { value: !0 });
		nn.UserFlaggedAsActive = void 0;
		var Rm = J(),
			Za = class extends Rm.UserEvent {};
		nn.UserFlaggedAsActive = Za;
	});
	var Gd = i((on) => {
		'use strict';
		Object.defineProperty(on, '__esModule', { value: !0 });
		on.UserFlaggedAsInactive = void 0;
		var Fm = J(),
			Ka = class extends Fm.UserEvent {};
		on.UserFlaggedAsInactive = Ka;
	});
	var Bd = i((an) => {
		'use strict';
		Object.defineProperty(an, '__esModule', { value: !0 });
		an.UserFollowsExportAvailable = void 0;
		var Am = M(),
			Ja = class extends Am.EntityExportAvailableEvent {};
		an.UserFollowsExportAvailable = Ja;
	});
	var zd = i((sn) => {
		'use strict';
		Object.defineProperty(sn, '__esModule', { value: !0 });
		sn.UserFollowsExportRequested = void 0;
		var Wm = l(),
			Qa = class extends Wm.DomainEvent {};
		sn.UserFollowsExportRequested = Qa;
	});
	var Yd = i((un) => {
		'use strict';
		Object.defineProperty(un, '__esModule', { value: !0 });
		un.UserSoftDeleted = void 0;
		var Im = l(),
			Xa = class extends Im.DomainEvent {};
		un.UserSoftDeleted = Xa;
	});
	var ts = i((ln) => {
		'use strict';
		Object.defineProperty(ln, '__esModule', { value: !0 });
		ln.VideoEvent = void 0;
		var km = l(),
			es = class extends km.DomainEvent {};
		ln.VideoEvent = es;
	});
	var Zd = i((dn) => {
		'use strict';
		Object.defineProperty(dn, '__esModule', { value: !0 });
		dn.VideoCreated = void 0;
		var Nm = ts(),
			rs = class extends Nm.VideoEvent {};
		dn.VideoCreated = rs;
	});
	var tc = i((t) => {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 });
		t.RefreshMatchAborted =
			t.MatchAborted =
			t.LiveTickerPremiumAwardReceived =
			t.LiveTickerMatchResultUpdated =
			t.ImportBatchUploaded =
			t.ImagesUploaded =
			t.ImageDeleted =
			t.ImageCreated =
			t.GalleryUpdated =
			t.GalleryDeleted =
			t.GalleriesForDistrictRequested =
			t.FollowableTopicDeleted =
			t.EntityUnfollowedEvent =
			t.EntityFollowedEvent =
			t.EntityExportAvailableEvent =
			t.EntitiesForDistrictRequested =
			t.DomainEvent =
			t.DistrictUpdated =
			t.DistrictDeleted =
			t.DistrictCreated =
			t.CupTeamSeasonsExportRequested =
			t.CupTeamSeasonsExportAvailable =
			t.CupTeamSeasonDeleted =
			t.CupTeamSeasonCreated =
			t.CompetitionUpdated =
			t.CompetitionUnfollowed =
			t.CompetitionSeasonsExportRequested =
			t.CompetitionSeasonsExportAvailable =
			t.CompetitionSeasonUpdated =
			t.CompetitionSeasonTopScorersDeleted =
			t.CompetitionSeasonTopScorersCreated =
			t.CompetitionSeasonFormStandingsTeasered =
			t.CompetitionSeasonDeleted =
			t.CompetitionSeasonDeactivated =
			t.CompetitionSeasonCreated =
			t.CompetitionSeasonActivated =
			t.CompetitionImageUpdated =
			t.CompetitionFollowed =
			t.CompetitionEvent =
			t.CompetitionDeleted =
			t.CompetitionCreated =
			t.RefreshCoachRemoved =
			t.CoachRemoved =
			t.RefreshCoachAdded =
			t.CoachAdded =
			t.ClubsExportRequested =
			t.ClubsExportAvailable =
			t.ClubUpdated =
			t.ClubDeleted =
			t.ClubCreated =
				void 0;
		t.MatchesExportRequested =
			t.MatchesExportAvailable =
			t.MatchVideoEmbeddingEvent =
			t.MatchVideoEmbeddingDeleted =
			t.MatchVideoEmbeddingCreated =
			t.MatchVideoElementCreated =
			t.MatchUpdated =
			t.MatchUnfollowed =
			t.MatchStarted =
			t.MatchShifted =
			t.MatchResultReset =
			t.MatchInterimResultSaved =
			t.RefreshMatchResultSaved =
			t.MatchResultSaved =
			t.MatchPlaylistUploaded =
			t.MatchPlaylistUpdated =
			t.MatchPlaylistDeleted =
			t.MatchGalleryUploaded =
			t.MatchGalleryRemoved =
			t.MatchFollowed =
			t.MatchEventYellowRedCard =
			t.MatchEventYellowCard =
			t.MatchEventWhistleRegularStopSecondHalftime =
			t.MatchEventWhistleRegularStopFirstHalftime =
			t.MatchEventWhistleRegularStartSecondHalftime =
			t.MatchEventWhistleRegularStartFirstHalftime =
			t.MatchEventWhistlePenaltyShootoutStop =
			t.MatchEventWhistlePenaltyShootoutStart =
			t.MatchEventWhistleOvertimeStopSecondHalftime =
			t.MatchEventWhistleOvertimeStopFirstHalftime =
			t.MatchEventWhistleOvertimeStartSecondHalftime =
			t.MatchEventWhistleOvertimeStartFirstHalftime =
			t.MatchEventUpdated =
			t.MatchEventTimePenalty =
			t.MatchEventRedCard =
			t.MatchEventPenaltyFail =
			t.MatchEventOwnGoal =
			t.MatchEventLineupsCompleted =
			t.MatchEventInterimResult =
			t.MatchEventGoal =
			t.MatchEventGoalDenied =
			t.MatchEventDeleted =
			t.MatchEventChance =
			t.MatchDistrictRelationEvent =
			t.MatchDistrictRelationDeleted =
			t.MatchDistrictRelationCreated =
			t.MatchDeleted =
			t.MatchCreated =
			t.RefreshMatchCancelled =
			t.MatchCancelled =
				void 0;
		t.TeamUpdated =
			t.TeamUnfollowed =
			t.TeamSeasonsExportRequested =
			t.TeamSeasonsExportAvailable =
			t.TeamSeasonUpdated =
			t.TeamSeasonImageUpdated =
			t.TeamSeasonDeleted =
			t.TeamSeasonCreated =
			t.TeamFollowed =
			t.TeamEvent =
			t.TeamDeleted =
			t.TeamCreated =
			t.StreamEntryUpdated =
			t.StreamEntryDeleted =
			t.StreamEntryCreated =
			t.SlugRenamed =
			t.SeasonUpdated =
			t.SeasonDeleted =
			t.SeasonCreated =
			t.RoundUpdated =
			t.RoundEvent =
			t.PushNotificationSubmitted =
			t.ProfileUpdated =
			t.ProfileUnfollowed =
			t.ProfileTransfersForDistrictRequested =
			t.ProfileTransferUpdated =
			t.ProfileTransferDeleted =
			t.ProfileTransferCreated =
			t.ProfileSeasonInjuryUpdated =
			t.ProfileSeasonInjuryDeleted =
			t.ProfileSeasonBanUpdated =
			t.ProfileSeasonBanDeleted =
			t.ProfileSeasonBanCreated =
			t.ProfileInjured =
			t.ProfileImageUpdated =
			t.ProfileFollowed =
			t.ProfileDeleted =
			t.ProfileCreated =
			t.PowerRankingUpdated =
			t.PowerRankingDeleted =
			t.PowerRankingCreated =
			t.NewsUpdated =
			t.NewsUnpublished =
			t.NewsSlugRenamed =
			t.NewsPublished =
			t.NewsImageUpdated =
			t.NewsForDistrictRequested =
			t.NewsExportRequested =
			t.NewsExportAvailable =
			t.NewsDeleted =
				void 0;
		t.VideoEvent =
			t.VideoCreated =
			t.UserSoftDeleted =
			t.UserFollowsExportRequested =
			t.UserFollowsExportAvailable =
			t.UserFlaggedAsInactive =
			t.UserFlaggedAsActive =
			t.UserExportRequested =
			t.UserExportAvailable =
			t.UserEvent =
			t.UserCreated =
			t.TopElevensExportRequested =
			t.TopElevensExportAvailable =
			t.TopElevenUpdated =
			t.TopElevenDeleted =
			t.TopElevenCreated =
			t.TeamsExportRequested =
			t.TeamsExportAvailable =
				void 0;
		var Hm = uu();
		Object.defineProperty(t, 'ClubCreated', {
			enumerable: !0,
			get: function () {
				return Hm.ClubCreated;
			},
		});
		var $m = lu();
		Object.defineProperty(t, 'ClubDeleted', {
			enumerable: !0,
			get: function () {
				return $m.ClubDeleted;
			},
		});
		var Vm = du();
		Object.defineProperty(t, 'ClubUpdated', {
			enumerable: !0,
			get: function () {
				return Vm.ClubUpdated;
			},
		});
		var Gm = cu();
		Object.defineProperty(t, 'ClubsExportAvailable', {
			enumerable: !0,
			get: function () {
				return Gm.ClubsExportAvailable;
			},
		});
		var Bm = pu();
		Object.defineProperty(t, 'ClubsExportRequested', {
			enumerable: !0,
			get: function () {
				return Bm.ClubsExportRequested;
			},
		});
		var Kd = vu();
		Object.defineProperty(t, 'CoachAdded', {
			enumerable: !0,
			get: function () {
				return Kd.CoachAdded;
			},
		});
		Object.defineProperty(t, 'RefreshCoachAdded', {
			enumerable: !0,
			get: function () {
				return Kd.RefreshCoachAdded;
			},
		});
		var Jd = fu();
		Object.defineProperty(t, 'CoachRemoved', {
			enumerable: !0,
			get: function () {
				return Jd.CoachRemoved;
			},
		});
		Object.defineProperty(t, 'RefreshCoachRemoved', {
			enumerable: !0,
			get: function () {
				return Jd.RefreshCoachRemoved;
			},
		});
		var zm = mu();
		Object.defineProperty(t, 'CompetitionCreated', {
			enumerable: !0,
			get: function () {
				return zm.CompetitionCreated;
			},
		});
		var Ym = bu();
		Object.defineProperty(t, 'CompetitionDeleted', {
			enumerable: !0,
			get: function () {
				return Ym.CompetitionDeleted;
			},
		});
		var Zm = Z();
		Object.defineProperty(t, 'CompetitionEvent', {
			enumerable: !0,
			get: function () {
				return Zm.CompetitionEvent;
			},
		});
		var Km = Eu();
		Object.defineProperty(t, 'CompetitionFollowed', {
			enumerable: !0,
			get: function () {
				return Km.CompetitionFollowed;
			},
		});
		var Jm = _u();
		Object.defineProperty(t, 'CompetitionImageUpdated', {
			enumerable: !0,
			get: function () {
				return Jm.CompetitionImageUpdated;
			},
		});
		var Qm = hu();
		Object.defineProperty(t, 'CompetitionSeasonActivated', {
			enumerable: !0,
			get: function () {
				return Qm.CompetitionSeasonActivated;
			},
		});
		var Xm = yu();
		Object.defineProperty(t, 'CompetitionSeasonCreated', {
			enumerable: !0,
			get: function () {
				return Xm.CompetitionSeasonCreated;
			},
		});
		var e1 = gu();
		Object.defineProperty(t, 'CompetitionSeasonDeactivated', {
			enumerable: !0,
			get: function () {
				return e1.CompetitionSeasonDeactivated;
			},
		});
		var t1 = Pu();
		Object.defineProperty(t, 'CompetitionSeasonDeleted', {
			enumerable: !0,
			get: function () {
				return t1.CompetitionSeasonDeleted;
			},
		});
		var r1 = Mu();
		Object.defineProperty(t, 'CompetitionSeasonFormStandingsTeasered', {
			enumerable: !0,
			get: function () {
				return r1.CompetitionSeasonFormStandingsTeasered;
			},
		});
		var n1 = xu();
		Object.defineProperty(t, 'CompetitionSeasonTopScorersCreated', {
			enumerable: !0,
			get: function () {
				return n1.CompetitionSeasonTopScorersCreated;
			},
		});
		var o1 = Du();
		Object.defineProperty(t, 'CompetitionSeasonTopScorersDeleted', {
			enumerable: !0,
			get: function () {
				return o1.CompetitionSeasonTopScorersDeleted;
			},
		});
		var i1 = Cu();
		Object.defineProperty(t, 'CompetitionSeasonUpdated', {
			enumerable: !0,
			get: function () {
				return i1.CompetitionSeasonUpdated;
			},
		});
		var a1 = wu();
		Object.defineProperty(t, 'CompetitionSeasonsExportAvailable', {
			enumerable: !0,
			get: function () {
				return a1.CompetitionSeasonsExportAvailable;
			},
		});
		var s1 = Ou();
		Object.defineProperty(t, 'CompetitionSeasonsExportRequested', {
			enumerable: !0,
			get: function () {
				return s1.CompetitionSeasonsExportRequested;
			},
		});
		var u1 = Lu();
		Object.defineProperty(t, 'CompetitionUnfollowed', {
			enumerable: !0,
			get: function () {
				return u1.CompetitionUnfollowed;
			},
		});
		var l1 = Su();
		Object.defineProperty(t, 'CompetitionUpdated', {
			enumerable: !0,
			get: function () {
				return l1.CompetitionUpdated;
			},
		});
		var d1 = qu();
		Object.defineProperty(t, 'CupTeamSeasonCreated', {
			enumerable: !0,
			get: function () {
				return d1.CupTeamSeasonCreated;
			},
		});
		var c1 = ju();
		Object.defineProperty(t, 'CupTeamSeasonDeleted', {
			enumerable: !0,
			get: function () {
				return c1.CupTeamSeasonDeleted;
			},
		});
		var p1 = Tu();
		Object.defineProperty(t, 'CupTeamSeasonsExportAvailable', {
			enumerable: !0,
			get: function () {
				return p1.CupTeamSeasonsExportAvailable;
			},
		});
		var v1 = Uu();
		Object.defineProperty(t, 'CupTeamSeasonsExportRequested', {
			enumerable: !0,
			get: function () {
				return v1.CupTeamSeasonsExportRequested;
			},
		});
		var f1 = Ru();
		Object.defineProperty(t, 'DistrictCreated', {
			enumerable: !0,
			get: function () {
				return f1.DistrictCreated;
			},
		});
		var m1 = Fu();
		Object.defineProperty(t, 'DistrictDeleted', {
			enumerable: !0,
			get: function () {
				return m1.DistrictDeleted;
			},
		});
		var b1 = Au();
		Object.defineProperty(t, 'DistrictUpdated', {
			enumerable: !0,
			get: function () {
				return b1.DistrictUpdated;
			},
		});
		var E1 = l();
		Object.defineProperty(t, 'DomainEvent', {
			enumerable: !0,
			get: function () {
				return E1.DomainEvent;
			},
		});
		var _1 = K();
		Object.defineProperty(t, 'EntitiesForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return _1.EntitiesForDistrictRequested;
			},
		});
		var h1 = M();
		Object.defineProperty(t, 'EntityExportAvailableEvent', {
			enumerable: !0,
			get: function () {
				return h1.EntityExportAvailableEvent;
			},
		});
		var y1 = I();
		Object.defineProperty(t, 'EntityFollowedEvent', {
			enumerable: !0,
			get: function () {
				return y1.EntityFollowedEvent;
			},
		});
		var g1 = k();
		Object.defineProperty(t, 'EntityUnfollowedEvent', {
			enumerable: !0,
			get: function () {
				return g1.EntityUnfollowedEvent;
			},
		});
		var P1 = Wu();
		Object.defineProperty(t, 'FollowableTopicDeleted', {
			enumerable: !0,
			get: function () {
				return P1.FollowableTopicDeleted;
			},
		});
		var M1 = Iu();
		Object.defineProperty(t, 'GalleriesForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return M1.GalleriesForDistrictRequested;
			},
		});
		var x1 = ku();
		Object.defineProperty(t, 'GalleryDeleted', {
			enumerable: !0,
			get: function () {
				return x1.GalleryDeleted;
			},
		});
		var D1 = Nu();
		Object.defineProperty(t, 'GalleryUpdated', {
			enumerable: !0,
			get: function () {
				return D1.GalleryUpdated;
			},
		});
		var C1 = Hu();
		Object.defineProperty(t, 'ImageCreated', {
			enumerable: !0,
			get: function () {
				return C1.ImageCreated;
			},
		});
		var w1 = $u();
		Object.defineProperty(t, 'ImageDeleted', {
			enumerable: !0,
			get: function () {
				return w1.ImageDeleted;
			},
		});
		var O1 = Vu();
		Object.defineProperty(t, 'ImagesUploaded', {
			enumerable: !0,
			get: function () {
				return O1.ImagesUploaded;
			},
		});
		var L1 = Gu();
		Object.defineProperty(t, 'ImportBatchUploaded', {
			enumerable: !0,
			get: function () {
				return L1.ImportBatchUploaded;
			},
		});
		var S1 = Bu();
		Object.defineProperty(t, 'LiveTickerMatchResultUpdated', {
			enumerable: !0,
			get: function () {
				return S1.LiveTickerMatchResultUpdated;
			},
		});
		var q1 = zu();
		Object.defineProperty(t, 'LiveTickerPremiumAwardReceived', {
			enumerable: !0,
			get: function () {
				return q1.LiveTickerPremiumAwardReceived;
			},
		});
		var Qd = Yu();
		Object.defineProperty(t, 'MatchAborted', {
			enumerable: !0,
			get: function () {
				return Qd.MatchAborted;
			},
		});
		Object.defineProperty(t, 'RefreshMatchAborted', {
			enumerable: !0,
			get: function () {
				return Qd.RefreshMatchAborted;
			},
		});
		var Xd = Zu();
		Object.defineProperty(t, 'MatchCancelled', {
			enumerable: !0,
			get: function () {
				return Xd.MatchCancelled;
			},
		});
		Object.defineProperty(t, 'RefreshMatchCancelled', {
			enumerable: !0,
			get: function () {
				return Xd.RefreshMatchCancelled;
			},
		});
		var j1 = Ku();
		Object.defineProperty(t, 'MatchCreated', {
			enumerable: !0,
			get: function () {
				return j1.MatchCreated;
			},
		});
		var T1 = Ju();
		Object.defineProperty(t, 'MatchDeleted', {
			enumerable: !0,
			get: function () {
				return T1.MatchDeleted;
			},
		});
		var U1 = Qu();
		Object.defineProperty(t, 'MatchDistrictRelationCreated', {
			enumerable: !0,
			get: function () {
				return U1.MatchDistrictRelationCreated;
			},
		});
		var R1 = Xu();
		Object.defineProperty(t, 'MatchDistrictRelationDeleted', {
			enumerable: !0,
			get: function () {
				return R1.MatchDistrictRelationDeleted;
			},
		});
		var F1 = nt();
		Object.defineProperty(t, 'MatchDistrictRelationEvent', {
			enumerable: !0,
			get: function () {
				return F1.MatchDistrictRelationEvent;
			},
		});
		var A1 = el();
		Object.defineProperty(t, 'MatchEventChance', {
			enumerable: !0,
			get: function () {
				return A1.MatchEventChance;
			},
		});
		var W1 = tl();
		Object.defineProperty(t, 'MatchEventDeleted', {
			enumerable: !0,
			get: function () {
				return W1.MatchEventDeleted;
			},
		});
		var I1 = rl();
		Object.defineProperty(t, 'MatchEventGoalDenied', {
			enumerable: !0,
			get: function () {
				return I1.MatchEventGoalDenied;
			},
		});
		var k1 = nl();
		Object.defineProperty(t, 'MatchEventGoal', {
			enumerable: !0,
			get: function () {
				return k1.MatchEventGoal;
			},
		});
		var N1 = ol();
		Object.defineProperty(t, 'MatchEventInterimResult', {
			enumerable: !0,
			get: function () {
				return N1.MatchEventInterimResult;
			},
		});
		var H1 = il();
		Object.defineProperty(t, 'MatchEventLineupsCompleted', {
			enumerable: !0,
			get: function () {
				return H1.MatchEventLineupsCompleted;
			},
		});
		var $1 = al();
		Object.defineProperty(t, 'MatchEventOwnGoal', {
			enumerable: !0,
			get: function () {
				return $1.MatchEventOwnGoal;
			},
		});
		var V1 = sl();
		Object.defineProperty(t, 'MatchEventPenaltyFail', {
			enumerable: !0,
			get: function () {
				return V1.MatchEventPenaltyFail;
			},
		});
		var G1 = ul();
		Object.defineProperty(t, 'MatchEventRedCard', {
			enumerable: !0,
			get: function () {
				return G1.MatchEventRedCard;
			},
		});
		var B1 = ll();
		Object.defineProperty(t, 'MatchEventTimePenalty', {
			enumerable: !0,
			get: function () {
				return B1.MatchEventTimePenalty;
			},
		});
		var z1 = dl();
		Object.defineProperty(t, 'MatchEventUpdated', {
			enumerable: !0,
			get: function () {
				return z1.MatchEventUpdated;
			},
		});
		var Y1 = cl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStartFirstHalftime', {
			enumerable: !0,
			get: function () {
				return Y1.MatchEventWhistleOvertimeStartFirstHalftime;
			},
		});
		var Z1 = pl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStartSecondHalftime', {
			enumerable: !0,
			get: function () {
				return Z1.MatchEventWhistleOvertimeStartSecondHalftime;
			},
		});
		var K1 = vl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStopFirstHalftime', {
			enumerable: !0,
			get: function () {
				return K1.MatchEventWhistleOvertimeStopFirstHalftime;
			},
		});
		var J1 = fl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStopSecondHalftime', {
			enumerable: !0,
			get: function () {
				return J1.MatchEventWhistleOvertimeStopSecondHalftime;
			},
		});
		var Q1 = ml();
		Object.defineProperty(t, 'MatchEventWhistlePenaltyShootoutStart', {
			enumerable: !0,
			get: function () {
				return Q1.MatchEventWhistlePenaltyShootoutStart;
			},
		});
		var X1 = bl();
		Object.defineProperty(t, 'MatchEventWhistlePenaltyShootoutStop', {
			enumerable: !0,
			get: function () {
				return X1.MatchEventWhistlePenaltyShootoutStop;
			},
		});
		var eb = El();
		Object.defineProperty(t, 'MatchEventWhistleRegularStartFirstHalftime', {
			enumerable: !0,
			get: function () {
				return eb.MatchEventWhistleRegularStartFirstHalftime;
			},
		});
		var tb = _l();
		Object.defineProperty(t, 'MatchEventWhistleRegularStartSecondHalftime', {
			enumerable: !0,
			get: function () {
				return tb.MatchEventWhistleRegularStartSecondHalftime;
			},
		});
		var rb = hl();
		Object.defineProperty(t, 'MatchEventWhistleRegularStopFirstHalftime', {
			enumerable: !0,
			get: function () {
				return rb.MatchEventWhistleRegularStopFirstHalftime;
			},
		});
		var nb = yl();
		Object.defineProperty(t, 'MatchEventWhistleRegularStopSecondHalftime', {
			enumerable: !0,
			get: function () {
				return nb.MatchEventWhistleRegularStopSecondHalftime;
			},
		});
		var ob = gl();
		Object.defineProperty(t, 'MatchEventYellowCard', {
			enumerable: !0,
			get: function () {
				return ob.MatchEventYellowCard;
			},
		});
		var ib = Pl();
		Object.defineProperty(t, 'MatchEventYellowRedCard', {
			enumerable: !0,
			get: function () {
				return ib.MatchEventYellowRedCard;
			},
		});
		var ab = Ml();
		Object.defineProperty(t, 'MatchFollowed', {
			enumerable: !0,
			get: function () {
				return ab.MatchFollowed;
			},
		});
		var sb = xl();
		Object.defineProperty(t, 'MatchGalleryRemoved', {
			enumerable: !0,
			get: function () {
				return sb.MatchGalleryRemoved;
			},
		});
		var ub = Dl();
		Object.defineProperty(t, 'MatchGalleryUploaded', {
			enumerable: !0,
			get: function () {
				return ub.MatchGalleryUploaded;
			},
		});
		var lb = Cl();
		Object.defineProperty(t, 'MatchPlaylistDeleted', {
			enumerable: !0,
			get: function () {
				return lb.MatchPlaylistDeleted;
			},
		});
		var db = wl();
		Object.defineProperty(t, 'MatchPlaylistUpdated', {
			enumerable: !0,
			get: function () {
				return db.MatchPlaylistUpdated;
			},
		});
		var cb = Ol();
		Object.defineProperty(t, 'MatchPlaylistUploaded', {
			enumerable: !0,
			get: function () {
				return cb.MatchPlaylistUploaded;
			},
		});
		var ec = Ll();
		Object.defineProperty(t, 'MatchResultSaved', {
			enumerable: !0,
			get: function () {
				return ec.MatchResultSaved;
			},
		});
		Object.defineProperty(t, 'RefreshMatchResultSaved', {
			enumerable: !0,
			get: function () {
				return ec.RefreshMatchResultSaved;
			},
		});
		var pb = Sl();
		Object.defineProperty(t, 'MatchInterimResultSaved', {
			enumerable: !0,
			get: function () {
				return pb.MatchInterimResultSaved;
			},
		});
		var vb = ql();
		Object.defineProperty(t, 'MatchResultReset', {
			enumerable: !0,
			get: function () {
				return vb.MatchResultReset;
			},
		});
		var fb = jl();
		Object.defineProperty(t, 'MatchShifted', {
			enumerable: !0,
			get: function () {
				return fb.MatchShifted;
			},
		});
		var mb = Tl();
		Object.defineProperty(t, 'MatchStarted', {
			enumerable: !0,
			get: function () {
				return mb.MatchStarted;
			},
		});
		var bb = Ul();
		Object.defineProperty(t, 'MatchUnfollowed', {
			enumerable: !0,
			get: function () {
				return bb.MatchUnfollowed;
			},
		});
		var Eb = Rl();
		Object.defineProperty(t, 'MatchUpdated', {
			enumerable: !0,
			get: function () {
				return Eb.MatchUpdated;
			},
		});
		var _b = Fl();
		Object.defineProperty(t, 'MatchVideoElementCreated', {
			enumerable: !0,
			get: function () {
				return _b.MatchVideoElementCreated;
			},
		});
		var hb = Al();
		Object.defineProperty(t, 'MatchVideoEmbeddingCreated', {
			enumerable: !0,
			get: function () {
				return hb.MatchVideoEmbeddingCreated;
			},
		});
		var yb = Wl();
		Object.defineProperty(t, 'MatchVideoEmbeddingDeleted', {
			enumerable: !0,
			get: function () {
				return yb.MatchVideoEmbeddingDeleted;
			},
		});
		var gb = Vt();
		Object.defineProperty(t, 'MatchVideoEmbeddingEvent', {
			enumerable: !0,
			get: function () {
				return gb.MatchVideoEmbeddingEvent;
			},
		});
		var Pb = Il();
		Object.defineProperty(t, 'MatchesExportAvailable', {
			enumerable: !0,
			get: function () {
				return Pb.MatchesExportAvailable;
			},
		});
		var Mb = kl();
		Object.defineProperty(t, 'MatchesExportRequested', {
			enumerable: !0,
			get: function () {
				return Mb.MatchesExportRequested;
			},
		});
		var xb = Nl();
		Object.defineProperty(t, 'NewsDeleted', {
			enumerable: !0,
			get: function () {
				return xb.NewsDeleted;
			},
		});
		var Db = Hl();
		Object.defineProperty(t, 'NewsExportAvailable', {
			enumerable: !0,
			get: function () {
				return Db.NewsExportAvailable;
			},
		});
		var Cb = $l();
		Object.defineProperty(t, 'NewsExportRequested', {
			enumerable: !0,
			get: function () {
				return Cb.NewsExportRequested;
			},
		});
		var wb = Vl();
		Object.defineProperty(t, 'NewsForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return wb.NewsForDistrictRequested;
			},
		});
		var Ob = Gl();
		Object.defineProperty(t, 'NewsImageUpdated', {
			enumerable: !0,
			get: function () {
				return Ob.NewsImageUpdated;
			},
		});
		var Lb = Bl();
		Object.defineProperty(t, 'NewsPublished', {
			enumerable: !0,
			get: function () {
				return Lb.NewsPublished;
			},
		});
		var Sb = zl();
		Object.defineProperty(t, 'NewsSlugRenamed', {
			enumerable: !0,
			get: function () {
				return Sb.NewsSlugRenamed;
			},
		});
		var qb = Yl();
		Object.defineProperty(t, 'NewsUnpublished', {
			enumerable: !0,
			get: function () {
				return qb.NewsUnpublished;
			},
		});
		var jb = Zl();
		Object.defineProperty(t, 'NewsUpdated', {
			enumerable: !0,
			get: function () {
				return jb.NewsUpdated;
			},
		});
		var Tb = Kl();
		Object.defineProperty(t, 'PowerRankingCreated', {
			enumerable: !0,
			get: function () {
				return Tb.PowerRankingCreated;
			},
		});
		var Ub = Jl();
		Object.defineProperty(t, 'PowerRankingDeleted', {
			enumerable: !0,
			get: function () {
				return Ub.PowerRankingDeleted;
			},
		});
		var Rb = Ql();
		Object.defineProperty(t, 'PowerRankingUpdated', {
			enumerable: !0,
			get: function () {
				return Rb.PowerRankingUpdated;
			},
		});
		var Fb = Xl();
		Object.defineProperty(t, 'ProfileCreated', {
			enumerable: !0,
			get: function () {
				return Fb.ProfileCreated;
			},
		});
		var Ab = ed();
		Object.defineProperty(t, 'ProfileDeleted', {
			enumerable: !0,
			get: function () {
				return Ab.ProfileDeleted;
			},
		});
		var Wb = td();
		Object.defineProperty(t, 'ProfileFollowed', {
			enumerable: !0,
			get: function () {
				return Wb.ProfileFollowed;
			},
		});
		var Ib = rd();
		Object.defineProperty(t, 'ProfileImageUpdated', {
			enumerable: !0,
			get: function () {
				return Ib.ProfileImageUpdated;
			},
		});
		var kb = nd();
		Object.defineProperty(t, 'ProfileInjured', {
			enumerable: !0,
			get: function () {
				return kb.ProfileInjured;
			},
		});
		var Nb = od();
		Object.defineProperty(t, 'ProfileSeasonBanCreated', {
			enumerable: !0,
			get: function () {
				return Nb.ProfileSeasonBanCreated;
			},
		});
		var Hb = id();
		Object.defineProperty(t, 'ProfileSeasonBanDeleted', {
			enumerable: !0,
			get: function () {
				return Hb.ProfileSeasonBanDeleted;
			},
		});
		var $b = ad();
		Object.defineProperty(t, 'ProfileSeasonBanUpdated', {
			enumerable: !0,
			get: function () {
				return $b.ProfileSeasonBanUpdated;
			},
		});
		var Vb = sd();
		Object.defineProperty(t, 'ProfileSeasonInjuryDeleted', {
			enumerable: !0,
			get: function () {
				return Vb.ProfileSeasonInjuryDeleted;
			},
		});
		var Gb = ud();
		Object.defineProperty(t, 'ProfileSeasonInjuryUpdated', {
			enumerable: !0,
			get: function () {
				return Gb.ProfileSeasonInjuryUpdated;
			},
		});
		var Bb = ld();
		Object.defineProperty(t, 'ProfileTransferCreated', {
			enumerable: !0,
			get: function () {
				return Bb.ProfileTransferCreated;
			},
		});
		var zb = dd();
		Object.defineProperty(t, 'ProfileTransferDeleted', {
			enumerable: !0,
			get: function () {
				return zb.ProfileTransferDeleted;
			},
		});
		var Yb = cd();
		Object.defineProperty(t, 'ProfileTransferUpdated', {
			enumerable: !0,
			get: function () {
				return Yb.ProfileTransferUpdated;
			},
		});
		var Zb = pd();
		Object.defineProperty(t, 'ProfileTransfersForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return Zb.ProfileTransfersForDistrictRequested;
			},
		});
		var Kb = vd();
		Object.defineProperty(t, 'ProfileUnfollowed', {
			enumerable: !0,
			get: function () {
				return Kb.ProfileUnfollowed;
			},
		});
		var Jb = fd();
		Object.defineProperty(t, 'ProfileUpdated', {
			enumerable: !0,
			get: function () {
				return Jb.ProfileUpdated;
			},
		});
		var Qb = md();
		Object.defineProperty(t, 'PushNotificationSubmitted', {
			enumerable: !0,
			get: function () {
				return Qb.PushNotificationSubmitted;
			},
		});
		var Xb = _a();
		Object.defineProperty(t, 'RoundEvent', {
			enumerable: !0,
			get: function () {
				return Xb.RoundEvent;
			},
		});
		var eE = bd();
		Object.defineProperty(t, 'RoundUpdated', {
			enumerable: !0,
			get: function () {
				return eE.RoundUpdated;
			},
		});
		var tE = Ed();
		Object.defineProperty(t, 'SeasonCreated', {
			enumerable: !0,
			get: function () {
				return tE.SeasonCreated;
			},
		});
		var rE = _d();
		Object.defineProperty(t, 'SeasonDeleted', {
			enumerable: !0,
			get: function () {
				return rE.SeasonDeleted;
			},
		});
		var nE = hd();
		Object.defineProperty(t, 'SeasonUpdated', {
			enumerable: !0,
			get: function () {
				return nE.SeasonUpdated;
			},
		});
		var oE = zi();
		Object.defineProperty(t, 'SlugRenamed', {
			enumerable: !0,
			get: function () {
				return oE.SlugRenamed;
			},
		});
		var iE = yd();
		Object.defineProperty(t, 'StreamEntryCreated', {
			enumerable: !0,
			get: function () {
				return iE.StreamEntryCreated;
			},
		});
		var aE = gd();
		Object.defineProperty(t, 'StreamEntryDeleted', {
			enumerable: !0,
			get: function () {
				return aE.StreamEntryDeleted;
			},
		});
		var sE = Pd();
		Object.defineProperty(t, 'StreamEntryUpdated', {
			enumerable: !0,
			get: function () {
				return sE.StreamEntryUpdated;
			},
		});
		var uE = Md();
		Object.defineProperty(t, 'TeamCreated', {
			enumerable: !0,
			get: function () {
				return uE.TeamCreated;
			},
		});
		var lE = xd();
		Object.defineProperty(t, 'TeamDeleted', {
			enumerable: !0,
			get: function () {
				return lE.TeamDeleted;
			},
		});
		var dE = Ur();
		Object.defineProperty(t, 'TeamEvent', {
			enumerable: !0,
			get: function () {
				return dE.TeamEvent;
			},
		});
		var cE = Dd();
		Object.defineProperty(t, 'TeamFollowed', {
			enumerable: !0,
			get: function () {
				return cE.TeamFollowed;
			},
		});
		var pE = Cd();
		Object.defineProperty(t, 'TeamSeasonCreated', {
			enumerable: !0,
			get: function () {
				return pE.TeamSeasonCreated;
			},
		});
		var vE = wd();
		Object.defineProperty(t, 'TeamSeasonDeleted', {
			enumerable: !0,
			get: function () {
				return vE.TeamSeasonDeleted;
			},
		});
		var fE = Od();
		Object.defineProperty(t, 'TeamSeasonImageUpdated', {
			enumerable: !0,
			get: function () {
				return fE.TeamSeasonImageUpdated;
			},
		});
		var mE = Ld();
		Object.defineProperty(t, 'TeamSeasonUpdated', {
			enumerable: !0,
			get: function () {
				return mE.TeamSeasonUpdated;
			},
		});
		var bE = Sd();
		Object.defineProperty(t, 'TeamSeasonsExportAvailable', {
			enumerable: !0,
			get: function () {
				return bE.TeamSeasonsExportAvailable;
			},
		});
		var EE = qd();
		Object.defineProperty(t, 'TeamSeasonsExportRequested', {
			enumerable: !0,
			get: function () {
				return EE.TeamSeasonsExportRequested;
			},
		});
		var _E = jd();
		Object.defineProperty(t, 'TeamUnfollowed', {
			enumerable: !0,
			get: function () {
				return _E.TeamUnfollowed;
			},
		});
		var hE = Td();
		Object.defineProperty(t, 'TeamUpdated', {
			enumerable: !0,
			get: function () {
				return hE.TeamUpdated;
			},
		});
		var yE = Ud();
		Object.defineProperty(t, 'TeamsExportAvailable', {
			enumerable: !0,
			get: function () {
				return yE.TeamsExportAvailable;
			},
		});
		var gE = Rd();
		Object.defineProperty(t, 'TeamsExportRequested', {
			enumerable: !0,
			get: function () {
				return gE.TeamsExportRequested;
			},
		});
		var PE = Fd();
		Object.defineProperty(t, 'TopElevenCreated', {
			enumerable: !0,
			get: function () {
				return PE.TopElevenCreated;
			},
		});
		var ME = Ad();
		Object.defineProperty(t, 'TopElevenDeleted', {
			enumerable: !0,
			get: function () {
				return ME.TopElevenDeleted;
			},
		});
		var xE = Wd();
		Object.defineProperty(t, 'TopElevenUpdated', {
			enumerable: !0,
			get: function () {
				return xE.TopElevenUpdated;
			},
		});
		var DE = Id();
		Object.defineProperty(t, 'TopElevensExportAvailable', {
			enumerable: !0,
			get: function () {
				return DE.TopElevensExportAvailable;
			},
		});
		var CE = kd();
		Object.defineProperty(t, 'TopElevensExportRequested', {
			enumerable: !0,
			get: function () {
				return CE.TopElevensExportRequested;
			},
		});
		var wE = Nd();
		Object.defineProperty(t, 'UserCreated', {
			enumerable: !0,
			get: function () {
				return wE.UserCreated;
			},
		});
		var OE = J();
		Object.defineProperty(t, 'UserEvent', {
			enumerable: !0,
			get: function () {
				return OE.UserEvent;
			},
		});
		var LE = Hd();
		Object.defineProperty(t, 'UserExportAvailable', {
			enumerable: !0,
			get: function () {
				return LE.UserExportAvailable;
			},
		});
		var SE = $d();
		Object.defineProperty(t, 'UserExportRequested', {
			enumerable: !0,
			get: function () {
				return SE.UserExportRequested;
			},
		});
		var qE = Vd();
		Object.defineProperty(t, 'UserFlaggedAsActive', {
			enumerable: !0,
			get: function () {
				return qE.UserFlaggedAsActive;
			},
		});
		var jE = Gd();
		Object.defineProperty(t, 'UserFlaggedAsInactive', {
			enumerable: !0,
			get: function () {
				return jE.UserFlaggedAsInactive;
			},
		});
		var TE = Bd();
		Object.defineProperty(t, 'UserFollowsExportAvailable', {
			enumerable: !0,
			get: function () {
				return TE.UserFollowsExportAvailable;
			},
		});
		var UE = zd();
		Object.defineProperty(t, 'UserFollowsExportRequested', {
			enumerable: !0,
			get: function () {
				return UE.UserFollowsExportRequested;
			},
		});
		var RE = Yd();
		Object.defineProperty(t, 'UserSoftDeleted', {
			enumerable: !0,
			get: function () {
				return RE.UserSoftDeleted;
			},
		});
		var FE = Zd();
		Object.defineProperty(t, 'VideoCreated', {
			enumerable: !0,
			get: function () {
				return FE.VideoCreated;
			},
		});
		var AE = ts();
		Object.defineProperty(t, 'VideoEvent', {
			enumerable: !0,
			get: function () {
				return AE.VideoEvent;
			},
		});
	});
	var rc = i((cn) => {
		'use strict';
		Object.defineProperty(cn, '__esModule', { value: !0 });
		cn.Coach = void 0;
		var ns = class {
			constructor() {
				a(this, 'player');
				a(this, 'team');
				a(this, 'links');
			}
		};
		cn.Coach = ns;
	});
	var nc = i((pn) => {
		'use strict';
		Object.defineProperty(pn, '__esModule', { value: !0 });
		pn.CompetitionSeasonTopScorers = void 0;
		var os = class {
			constructor() {
				a(this, 'id');
				a(this, 'competition');
				a(this, 'firstScorer');
				a(this, 'secondScorer');
				a(this, 'thirdScorer');
				a(this, 'createdAt');
			}
		};
		pn.CompetitionSeasonTopScorers = os;
	});
	var oc = i((V) => {
		'use strict';
		Object.defineProperty(V, '__esModule', { value: !0 });
		V.RelatedGallery = V.Gallery = void 0;
		var is = class {
			constructor() {
				a(this, 'id');
				a(this, 'slug');
				a(this, 'title');
				a(this, 'created');
				a(this, 'user');
				a(this, 'userAlias');
				a(this, 'match');
				a(this, 'thumbnail');
				a(this, 'competition');
				a(this, 'links');
				a(this, 'isActive');
			}
		};
		V.Gallery = is;
		var as = class {
			constructor() {
				a(this, 'id');
				a(this, 'slug');
				a(this, 'thumbnail');
			}
		};
		V.RelatedGallery = as;
	});
	var ic = i((vn) => {
		'use strict';
		Object.defineProperty(vn, '__esModule', { value: !0 });
		vn.MatchPlaylist = void 0;
		var ss = class {
			constructor() {
				a(this, 'id');
				a(this, 'slug');
				a(this, 'title');
				a(this, 'match');
				a(this, 'user');
				a(this, 'userAlias');
				a(this, 'dateCreated');
				a(this, 'updatedAt');
				a(this, 'recorderId');
				a(this, 'isActive');
				a(this, 'videosCount');
				a(this, 'thumbnail');
				a(this, 'competition');
				a(this, 'links');
			}
		};
		vn.MatchPlaylist = ss;
	});
	var ac = i((fn) => {
		'use strict';
		Object.defineProperty(fn, '__esModule', { value: !0 });
		fn.NewsCategory = void 0;
		var us = class {
			constructor() {
				a(this, 'id');
				a(this, 'description');
			}
		};
		fn.NewsCategory = us;
	});
	var sc = i((mn) => {
		'use strict';
		Object.defineProperty(mn, '__esModule', { value: !0 });
		mn.News = void 0;
		var ls = class {
			constructor() {
				a(this, 'id');
				a(this, 'slug');
				a(this, 'linkUrl');
				a(this, 'visible');
				a(this, 'author');
				a(this, 'authorAlias');
				a(this, 'category');
				a(this, 'title');
				a(this, 'subtitle');
				a(this, 'teaserText');
				a(this, 'text');
				a(this, 'publishDate');
				a(this, 'modifiedDate');
				a(this, 'googlebot');
				a(this, 'auto_redirect_url');
				a(this, 'image');
				a(this, 'attachements');
				a(this, 'links');
			}
		};
		mn.News = ls;
	});
	var uc = i((bn) => {
		'use strict';
		Object.defineProperty(bn, '__esModule', { value: !0 });
		bn.RequestUser = void 0;
		var ds = class {
			constructor() {
				a(this, 'id');
				a(this, 'name');
				a(this, 'email');
				a(this, 'phone');
			}
		};
		bn.RequestUser = ds;
	});
	var ps = i((En) => {
		'use strict';
		Object.defineProperty(En, '__esModule', { value: !0 });
		En.ShortUser = void 0;
		var cs = class {
			constructor() {
				a(this, 'id');
				a(this, 'firebaseId');
				a(this, 'slug');
				a(this, 'firstName');
				a(this, 'lastName');
				a(this, 'image');
				a(this, 'linkUrl');
				a(this, 'district');
			}
		};
		En.ShortUser = cs;
	});
	var lc = i((_n) => {
		'use strict';
		Object.defineProperty(_n, '__esModule', { value: !0 });
		_n.TeamEventData = void 0;
		var vs = class {
			constructor() {
				a(this, 'id');
				a(this, 'slug');
				a(this, 'clubId');
				a(this, 'clubSlug');
				a(this, 'names');
				a(this, 'level');
				a(this, 'image');
				a(this, 'ageGroup');
			}
		};
		_n.TeamEventData = vs;
	});
	var dc = i((hn) => {
		'use strict';
		Object.defineProperty(hn, '__esModule', { value: !0 });
		hn.TeamSeason = void 0;
		var fs = class {
			constructor() {
				a(this, 'id');
				a(this, 'teamId');
				a(this, 'slug');
				a(this, 'name');
				a(this, 'image');
				a(this, 'teamImage');
				a(this, 'origin');
				a(this, 'ageGroup');
				a(this, 'competition');
				a(this, 'linkUrl');
				a(this, 'level');
				a(this, 'clubSlug');
				a(this, 'club');
				a(this, 'teams');
				a(this, 'team');
				a(this, 'nextTeamSeason');
				a(this, 'contacts');
				a(this, 'withoutScoring');
				a(this, 'syndicate');
				a(this, 'captain');
				a(this, 'viceCaptain');
				a(this, 'withdraw');
				a(this, 'seasonTarget');
				a(this, 'targetDescription');
				a(this, 'championFavourit');
				a(this, 'rank');
			}
		};
		hn.TeamSeason = fs;
	});
	var cc = i((yn) => {
		'use strict';
		Object.defineProperty(yn, '__esModule', { value: !0 });
		yn.Team = void 0;
		var ms = class {
			constructor() {
				a(this, 'id');
				a(this, 'slug');
				a(this, 'club_id');
				a(this, 'clubId');
				a(this, 'clubSlug');
				a(this, 'names');
				a(this, 'level');
				a(this, 'image');
				a(this, 'ageGroup');
			}
		};
		yn.Team = ms;
	});
	var vc = i((gn) => {
		'use strict';
		Object.defineProperty(gn, '__esModule', { value: !0 });
		gn.TopElevenType = void 0;
		var pc;
		(function (e) {
			(e[(e.Weekly = 1)] = 'Weekly'),
				(e[(e.Yearly = 2)] = 'Yearly'),
				(e[(e.Custom = 3)] = 'Custom');
		})(pc || (gn.TopElevenType = pc = {}));
	});
	var fc = i((Pn) => {
		'use strict';
		Object.defineProperty(Pn, '__esModule', { value: !0 });
		Pn.UploadedImages = void 0;
		var bs = class {
			constructor() {
				a(this, 'type');
				a(this, 'id');
				a(this, 'bucket');
				a(this, 'images');
				a(this, 'primaryImage');
			}
		};
		Pn.UploadedImages = bs;
	});
	var mc = i((Mn) => {
		'use strict';
		Object.defineProperty(Mn, '__esModule', { value: !0 });
		Mn.User = void 0;
		var WE = ps(),
			Es = class extends WE.ShortUser {
				constructor() {
					super(...arguments);
					a(this, 'status');
					a(this, 'email');
					a(this, 'privateAddress');
					a(this, 'birthday');
					a(this, 'avatar');
					a(this, 'createdAt');
					a(this, 'rewardPoints');
					a(this, 'tickerCount');
					a(this, 'region');
				}
			};
		Mn.User = Es;
	});
	var Ec = i((m) => {
		'use strict';
		Object.defineProperty(m, '__esModule', { value: !0 });
		m.User =
			m.UploadedImages =
			m.TopElevenType =
			m.Team =
			m.TeamSeason =
			m.TeamEventData =
			m.ShortUser =
			m.RequestUser =
			m.News =
			m.NewsCategory =
			m.MatchPlaylist =
			m.RelatedGallery =
			m.Gallery =
			m.CompetitionSeasonTopScorers =
			m.Coach =
				void 0;
		var IE = rc();
		Object.defineProperty(m, 'Coach', {
			enumerable: !0,
			get: function () {
				return IE.Coach;
			},
		});
		var kE = nc();
		Object.defineProperty(m, 'CompetitionSeasonTopScorers', {
			enumerable: !0,
			get: function () {
				return kE.CompetitionSeasonTopScorers;
			},
		});
		var bc = oc();
		Object.defineProperty(m, 'Gallery', {
			enumerable: !0,
			get: function () {
				return bc.Gallery;
			},
		});
		Object.defineProperty(m, 'RelatedGallery', {
			enumerable: !0,
			get: function () {
				return bc.RelatedGallery;
			},
		});
		var NE = ic();
		Object.defineProperty(m, 'MatchPlaylist', {
			enumerable: !0,
			get: function () {
				return NE.MatchPlaylist;
			},
		});
		var HE = ac();
		Object.defineProperty(m, 'NewsCategory', {
			enumerable: !0,
			get: function () {
				return HE.NewsCategory;
			},
		});
		var $E = sc();
		Object.defineProperty(m, 'News', {
			enumerable: !0,
			get: function () {
				return $E.News;
			},
		});
		var VE = uc();
		Object.defineProperty(m, 'RequestUser', {
			enumerable: !0,
			get: function () {
				return VE.RequestUser;
			},
		});
		var GE = ps();
		Object.defineProperty(m, 'ShortUser', {
			enumerable: !0,
			get: function () {
				return GE.ShortUser;
			},
		});
		var BE = lc();
		Object.defineProperty(m, 'TeamEventData', {
			enumerable: !0,
			get: function () {
				return BE.TeamEventData;
			},
		});
		var zE = dc();
		Object.defineProperty(m, 'TeamSeason', {
			enumerable: !0,
			get: function () {
				return zE.TeamSeason;
			},
		});
		var YE = cc();
		Object.defineProperty(m, 'Team', {
			enumerable: !0,
			get: function () {
				return YE.Team;
			},
		});
		var ZE = vc();
		Object.defineProperty(m, 'TopElevenType', {
			enumerable: !0,
			get: function () {
				return ZE.TopElevenType;
			},
		});
		var KE = fc();
		Object.defineProperty(m, 'UploadedImages', {
			enumerable: !0,
			get: function () {
				return KE.UploadedImages;
			},
		});
		var JE = mc();
		Object.defineProperty(m, 'User', {
			enumerable: !0,
			get: function () {
				return JE.User;
			},
		});
	});
	var hc = i((xn) => {
		'use strict';
		Object.defineProperty(xn, '__esModule', { value: !0 });
		xn.CompetitionCategoryType = void 0;
		var _c;
		(function (e) {
			(e[(e.League = 1)] = 'League'),
				(e[(e.IndoorCup = 2)] = 'IndoorCup'),
				(e[(e.Tournament = 3)] = 'Tournament'),
				(e[(e.OutdoorCup = 4)] = 'OutdoorCup'),
				(e[(e.Relegation = 5)] = 'Relegation');
		})(_c || (xn.CompetitionCategoryType = _c = {}));
	});
	var Cn = i((Dn) => {
		'use strict';
		Object.defineProperty(Dn, '__esModule', { value: !0 });
		Dn.EntityType = void 0;
		var yc;
		(function (e) {
			(e.Club = 'club'),
				(e.Profile = 'profile'),
				(e.Player = 'profile'),
				(e.Competition = 'competition'),
				(e.CompetitionSeason = 'competition-season'),
				(e.Team = 'team'),
				(e.TeamSeason = 'team-season'),
				(e.Match = 'match'),
				(e.User = 'user'),
				(e.News = 'news'),
				(e.Gallery = 'gallery'),
				(e.Transfer = 'transfer'),
				(e.PlayerSeason = 'player-season'),
				(e.ProfileFunction = 'profile-function'),
				(e.Region = 'region'),
				(e.District = 'district'),
				(e.ElevenOfTheWeek = 'eleven-of-the-week'),
				(e.Video = 'video'),
				(e.Referee = 'referee'),
				(e.Season = 'season'),
				(e.PlayerPosition = 'player-position'),
				(e.PowerRanking = 'power-ranking'),
				(e.FupaTv = 'fupa-tv'),
				(e.Cobranding = 'cobranding'),
				(e.MatchPlayer = 'match-player'),
				(e.Syndicate = 'syndicate'),
				(e.CompetitionSeasonTopScorers = 'competition-season-top-scorers'),
				(e.MatchFact = 'match-fact');
		})(yc || (Dn.EntityType = yc = {}));
	});
	var hs = i((Q) => {
		'use strict';
		Object.defineProperty(Q, '__esModule', { value: !0 });
		Q.ImageType = void 0;
		var _s = Cn(),
			wn;
		(function (e) {
			(e.Club = 'club'),
				(e.Competition = 'competition'),
				(e.District = 'district'),
				(e.Team = 'team'),
				(e.User = 'user'),
				(e.Contact = 'contact'),
				(e.Player = 'player'),
				(e.Referee = 'referee'),
				(e.RefereeGroup = 'referee-group'),
				(e.Cobranding = 'cobranding'),
				(e.CobrandingWhite = 'cobranding-white'),
				(e.Video = 'video'),
				(e.MatchEvent = 'match-event'),
				(e.Venue = 'venue'),
				(e.Gallery = 'gallery'),
				(e.TeamImage = 'team-image'),
				(e.News = 'news'),
				(e.Reward = 'reward'),
				(e.MatchEmbedding = 'match-embedding');
		})(wn || (Q.ImageType = wn = {}));
		wn || (Q.ImageType = wn = {});
	});
	var Pc = i((On) => {
		'use strict';
		Object.defineProperty(On, '__esModule', { value: !0 });
		On.MatchEventSubType = void 0;
		var gc;
		(function (e) {
			(e.None = ''),
				(e.GoalOwnGoal = 'goal_own_goal'),
				(e.GoalFreekick = 'goal_freekick'),
				(e.PenaltyFoul = 'penalty_foul'),
				(e.PenaltyHand = 'penalty_hand'),
				(e.PenaltyShootout = 'penalty_shootout'),
				(e.GoalShot = 'goal_shot'),
				(e.GoalHeaded = 'goal_headed'),
				(e.GoalDistanceShot = 'goal_distance_shot'),
				(e.GoalScrounger = 'goal_scrounger'),
				(e.CardYellow = 'card_yellow'),
				(e.CardYellowRed = 'card_yellow_red'),
				(e.CardRed = 'card_red'),
				(e.TimeoutStart = 'timeout_start'),
				(e.TimeoutStop = 'timeout_stop'),
				(e.WhistleRegularStartFirstHalftime = 'whistle_regular_start_first_halftime'),
				(e.WhistleRegularStopFirstHalftime = 'whistle_regular_stop_first_halftime'),
				(e.WhistleRegularStartSecondHalftime = 'whistle_regular_start_second_halftime'),
				(e.WhistleRegularStopSecondHalftime = 'whistle_regular_stop_second_halftime'),
				(e.WhistleOvertimeStartFirstHalftime = 'whistle_overtime_start_first_halftime'),
				(e.WhistleOvertimeStopFirstHalftime = 'whistle_overtime_stop_first_halftime'),
				(e.WhistleOvertimeStartSecondHalftime = 'whistle_overtime_start_second_halftime'),
				(e.WhistleOvertimeStopSecondHalftime = 'whistle_overtime_stop_second_halftime'),
				(e.WhistlePenaltyShootoutStart = 'whistle_penalty_shootout_start'),
				(e.WhistlePenaltyShootoutStop = 'whistle_penalty_shootout_stop'),
				(e.TimePenaltyStart = 'time_penalty_start'),
				(e.TimePenaltyStop = 'time_penalty_stop');
		})(gc || (On.MatchEventSubType = gc = {}));
	});
	var xc = i((Ln) => {
		'use strict';
		Object.defineProperty(Ln, '__esModule', { value: !0 });
		Ln.MatchEventType = void 0;
		var Mc;
		(function (e) {
			(e.Card = 'card'),
				(e.Chance = 'chance'),
				(e.Goal = 'goal'),
				(e.PenaltyFail = 'penaltyfail'),
				(e.Substitute = 'substitute'),
				(e.Text = 'text'),
				(e.Timeout = 'timeout'),
				(e.Whistle = 'whistle'),
				(e.TimePenalty = 'timepenalty'),
				(e.TeamFoul = 'teamfoul'),
				(e.LineupEntered = 'lineupentered'),
				(e.LineupsCompleted = 'lineupscompleted');
		})(Mc || (Ln.MatchEventType = Mc = {}));
	});
	var Cc = i((Sn) => {
		'use strict';
		Object.defineProperty(Sn, '__esModule', { value: !0 });
		Sn.MatchFlag = void 0;
		var Dc;
		(function (e) {
			(e.FuPaTV = 'fupatv'),
				(e.Gallery = 'gallery'),
				(e.Ticker = 'ticker'),
				(e.Verdict = 'verdict'),
				(e.Overtime = 'overtime'),
				(e.Penalty = 'penalty'),
				(e.Cancelled = 'cancelled'),
				(e.Aborted = 'aborted');
		})(Dc || (Sn.MatchFlag = Dc = {}));
	});
	var Oc = i((qn) => {
		'use strict';
		Object.defineProperty(qn, '__esModule', { value: !0 });
		qn.MatchTeamSeasonOutcome = void 0;
		var wc;
		(function (e) {
			(e.Win = 'win'), (e.Draw = 'draw'), (e.Loss = 'loss');
		})(wc || (qn.MatchTeamSeasonOutcome = wc = {}));
	});
	var Sc = i((jn) => {
		'use strict';
		Object.defineProperty(jn, '__esModule', { value: !0 });
		jn.ProfilePlayerSeasonFlag = void 0;
		var Lc;
		(function (e) {
			(e.Injured = 'injured'),
				(e.Banned = 'banned'),
				(e.New = 'new'),
				(e.Captain = 'captain'),
				(e.ViceCaptain = 'viceCaptain');
		})(Lc || (jn.ProfilePlayerSeasonFlag = Lc = {}));
	});
	var jc = i((Tn) => {
		'use strict';
		Object.defineProperty(Tn, '__esModule', { value: !0 });
		Tn.PushNotificationDeviceType = void 0;
		var qc;
		(function (e) {
			(e.All = 'all'), (e.Mobile = 'mobile'), (e.Desktop = 'desktop');
		})(qc || (Tn.PushNotificationDeviceType = qc = {}));
	});
	var Uc = i((Un) => {
		'use strict';
		Object.defineProperty(Un, '__esModule', { value: !0 });
		Un.RoundType = void 0;
		var Tc;
		(function (e) {
			(e.League = 'league'), (e.CupGroup = 'cupgroup'), (e.CupKo = 'cupko');
		})(Tc || (Un.RoundType = Tc = {}));
	});
	var Fc = i((Fn) => {
		'use strict';
		Object.defineProperty(Fn, '__esModule', { value: !0 });
		Fn.TypeMappings = void 0;
		var Rc = Cn(),
			QE = hs(),
			Rn = class Rn {
				static imageTypeToEntityType(r) {
					if (r === QE.ImageType.Player) return Rc.EntityType.Profile;
					if (Rn.VALID_ENTITY_TYPES.includes(r)) return r;
				}
			};
		a(Rn, 'VALID_ENTITY_TYPES', Object.values(Rc.EntityType));
		var ys = Rn;
		Fn.TypeMappings = ys;
	});
	var Wc = i((An) => {
		'use strict';
		Object.defineProperty(An, '__esModule', { value: !0 });
		An.UserStatusType = void 0;
		var Ac;
		(function (e) {
			(e.Active = 'active'), (e.Blocked = 'blocked'), (e.Deleted = 'deleted');
		})(Ac || (An.UserStatusType = Ac = {}));
	});
	var kc = i((Wn) => {
		'use strict';
		Object.defineProperty(Wn, '__esModule', { value: !0 });
		Wn.VideoActionType = void 0;
		var Ic;
		(function (e) {
			(e.Default = '__default'),
				(e.Goal = 'Tor'),
				(e.Chance = 'Chance'),
				(e.Highlight = 'Highlight'),
				(e.RedCard = 'Platzverweis'),
				(e.IndoorGoal = 'Tor'),
				(e.IndoorHighlight = 'Highlight'),
				(e.Interview = 'Interview'),
				(e.Foul = 'Foul');
		})(Ic || (Wn.VideoActionType = Ic = {}));
	});
	var Hc = i((In) => {
		'use strict';
		Object.defineProperty(In, '__esModule', { value: !0 });
		In.UserRole = void 0;
		var Nc;
		(function (e) {
			(e[(e.Admin = 1)] = 'Admin'),
				(e[(e.RegionManager = 2)] = 'RegionManager'),
				(e[(e.CompetitionManager = 3)] = 'CompetitionManager'),
				(e[(e.ClubManager = 4)] = 'ClubManager'),
				(e[(e.User = 5)] = 'User'),
				(e[(e.Guest = 6)] = 'Guest');
		})(Nc || (In.UserRole = Nc = {}));
	});
	var Vc = i((kn) => {
		'use strict';
		Object.defineProperty(kn, '__esModule', { value: !0 });
		kn.MatchTickerType = void 0;
		var $c;
		(function (e) {
			(e.Live = 'live'), (e.Soft = 'soft');
		})($c || (kn.MatchTickerType = $c = {}));
	});
	var Gc = i((b) => {
		'use strict';
		Object.defineProperty(b, '__esModule', { value: !0 });
		b.MatchTickerType =
			b.UserRole =
			b.VideoActionType =
			b.UserStatusType =
			b.TypeMappings =
			b.RoundType =
			b.PushNotificationDeviceType =
			b.ProfilePlayerSeasonFlag =
			b.MatchTeamSeasonOutcome =
			b.MatchFlag =
			b.MatchEventType =
			b.MatchEventSubType =
			b.ImageType =
			b.EntityType =
			b.CompetitionCategoryType =
				void 0;
		var XE = hc();
		Object.defineProperty(b, 'CompetitionCategoryType', {
			enumerable: !0,
			get: function () {
				return XE.CompetitionCategoryType;
			},
		});
		var e_ = Cn();
		Object.defineProperty(b, 'EntityType', {
			enumerable: !0,
			get: function () {
				return e_.EntityType;
			},
		});
		var t_ = hs();
		Object.defineProperty(b, 'ImageType', {
			enumerable: !0,
			get: function () {
				return t_.ImageType;
			},
		});
		var r_ = Pc();
		Object.defineProperty(b, 'MatchEventSubType', {
			enumerable: !0,
			get: function () {
				return r_.MatchEventSubType;
			},
		});
		var n_ = xc();
		Object.defineProperty(b, 'MatchEventType', {
			enumerable: !0,
			get: function () {
				return n_.MatchEventType;
			},
		});
		var o_ = Cc();
		Object.defineProperty(b, 'MatchFlag', {
			enumerable: !0,
			get: function () {
				return o_.MatchFlag;
			},
		});
		var i_ = Oc();
		Object.defineProperty(b, 'MatchTeamSeasonOutcome', {
			enumerable: !0,
			get: function () {
				return i_.MatchTeamSeasonOutcome;
			},
		});
		var a_ = Sc();
		Object.defineProperty(b, 'ProfilePlayerSeasonFlag', {
			enumerable: !0,
			get: function () {
				return a_.ProfilePlayerSeasonFlag;
			},
		});
		var s_ = jc();
		Object.defineProperty(b, 'PushNotificationDeviceType', {
			enumerable: !0,
			get: function () {
				return s_.PushNotificationDeviceType;
			},
		});
		var u_ = Uc();
		Object.defineProperty(b, 'RoundType', {
			enumerable: !0,
			get: function () {
				return u_.RoundType;
			},
		});
		var l_ = Fc();
		Object.defineProperty(b, 'TypeMappings', {
			enumerable: !0,
			get: function () {
				return l_.TypeMappings;
			},
		});
		var d_ = Wc();
		Object.defineProperty(b, 'UserStatusType', {
			enumerable: !0,
			get: function () {
				return d_.UserStatusType;
			},
		});
		var c_ = kc();
		Object.defineProperty(b, 'VideoActionType', {
			enumerable: !0,
			get: function () {
				return c_.VideoActionType;
			},
		});
		var p_ = Hc();
		Object.defineProperty(b, 'UserRole', {
			enumerable: !0,
			get: function () {
				return p_.UserRole;
			},
		});
		var v_ = Vc();
		Object.defineProperty(b, 'MatchTickerType', {
			enumerable: !0,
			get: function () {
				return v_.MatchTickerType;
			},
		});
	});
	var Bc = i((X) => {
		'use strict';
		Object.defineProperty(X, '__esModule', { value: !0 });
		var gs = (su(), Sp(au));
		gs.__exportStar(tc(), X);
		gs.__exportStar(Ec(), X);
		gs.__exportStar(Gc(), X);
	});
	var zc,
		G,
		Ps,
		Yc,
		f_,
		m_,
		b_,
		E_,
		__,
		h_,
		y_,
		Zc,
		Kc,
		Ms = g(() => {
			'use strict';
			T();
			z();
			L();
			Zn();
			Y();
			(zc = Lp(Bc())),
				(G = ''.concat(f, 'widget-footer')),
				(Ps = ''.concat(G, ' ').concat(G, '-link')),
				(Yc = () => {
					let e = w()
							? {}
							: {
									style:
										'display: flex; font-family: "PT Sans", sans-serif; box-sizing: border-box; width: 100%; justify-content: space-between; padding: 8px 16px; font-size: 12px; max-width: 970px; margin: auto;',
								},
						r = E(
							'div',
							te({ id: G, class: ''.concat(G, ' ').concat(G, '-container'), role: 'footer' }, e),
						),
						n = E('a', { href: 'https://widget.fupa.net', target: '_blank' }),
						o = E('span', { class: Ps });
					return o.appendChild(C('© FuPa Widget')), n.appendChild(o), r.appendChild(n), r;
				}),
				(f_ = (e) => /(testspiele|uebergangsliga|ohne-liga-teams)/.test(e)),
				(m_ = (e) => (e.names ? !e.clubSlug : !1)),
				(b_ = {
					team: (e) => m_(e),
					match: (e) => {
						var r;
						return f_((r = e.competition) == null ? void 0 : r.slug);
					},
				}),
				(E_ = (e, r) => {
					switch (r) {
						case 'team':
							let n = e;
							return { url: 'https://www.fupa.net/club/'.concat(n.slug), name: n.names.middle };
						case 'match':
							let o = e,
								s = o.competition.category === zc.CompetitionCategoryType.League ? 'league' : 'cup';
							return {
								url: 'https://www.fupa.net/'.concat(s, '/').concat(o.competition.slug),
								name: o.competition.name,
							};
						default:
							throw new Error('Unknown entity type '.concat(r));
					}
				}),
				(__ = (e, r) => {
					let n = E_(e, r),
						o = E('a', { href: n.url, target: '_blank' }),
						s = E('span', { class: Ps });
					return s.appendChild(C(''.concat(n.name, ' auf FuPa'))), o.appendChild(s), o;
				}),
				(h_ = (e) => {
					let r = e.querySelector(':scope > blockquote');
					return r ? r.querySelector(':scope > a') : null;
				}),
				(y_ = (e) => {
					let r = e.querySelector(':scope > a');
					return r || h_(e);
				}),
				(Zc = (e, r, n, o, s) => {
					let u = s ? y_(e) : __(n, o);
					if ((b_[o](n) && (u = E('div', {})), !u))
						throw new U(
							'Der Widget-Code wurde nicht korrekt übernommen und das Widget kann deshalb nicht gerendert werden. Bitte übernimm den Widget-Code 1:1 aus dem Konfigurator.',
						);
					u.setAttribute('class', Ps), r.insertBefore(u, r.firstChild);
				}),
				(Kc = (e) => {
					let r = e.querySelector('#'.concat(G));
					r && r.removeAttribute('style');
				});
		});
	var Nn,
		Jc = g(() => {
			'use strict';
			Nn = { team: 'Team', match: 'Spiel' };
		});
	var g_,
		Qc,
		Xc = g(() => {
			'use strict';
			L();
			(g_ = (e, r) => {
				var p, _, y, h, P;
				let n = (p = r == null ? void 0 : r.width) != null ? p : '16',
					o = (_ = r == null ? void 0 : r.height) != null ? _ : '16',
					s = (y = r == null ? void 0 : r.viewBox) != null ? y : '0 0 24 24',
					u = (h = r == null ? void 0 : r.fill) != null ? h : 'currentColor',
					d = ''
						.concat(f, 'svg-icon ')
						.concat((P = r == null ? void 0 : r.classNames) != null ? P : ''),
					c = 'http://www.w3.org/2000/svg',
					v = document.createElementNS(c, 'svg');
				return (
					v.setAttribute('viewBox', s),
					v.setAttribute('width', n),
					v.setAttribute('height', o),
					v.setAttribute('fill', u),
					v.setAttribute('class', d),
					Object.entries(e).forEach((x) => {
						let D = x[0];
						x[1].forEach((S) => {
							let Os = document.createElementNS(c, D);
							Object.entries(S).forEach((Ls) => {
								let gp = Ls[0],
									Pp = Ls[1];
								Os.setAttribute(gp, Pp);
							}),
								v.appendChild(Os);
						});
					}),
					v
				);
			}),
				(Qc = g_);
		});
	var ep,
		tp = g(() => {
			'use strict';
			ep = {
				path: [
					{ d: 'M13.16 10.14L16.37 5.54L12.46 1.89L6.99 3.85L7.17 9L13.16 10.14Z' },
					{ d: 'M11.07 19.47L14.02 22.54L19.16 20.34L20 15.8L14.89 15.17L11.07 19.47Z' },
					{
						d: 'M14.57 0.27L15.79 0.61L16.95 1.07L18.05 1.64L19.09 2.31L20.04 3.09L20.91 3.96L21.68 4.91L22.36 5.94L22.93 7.04L23.39 8.21L23.72 9.42L23.93 10.69L24 12L23.93 13.31L23.72 14.57L23.39 15.79L22.93 16.95L22.36 18.05L21.68 19.09L20.91 20.04L20.04 20.91L19.09 21.68L18.05 22.36L16.95 22.93L15.79 23.39L14.57 23.72L13.31 23.93L12 24L10.99 23.96L10.01 23.83L9.05 23.63L8.12 23.36L7.23 23.01L6.37 22.6L5.55 22.12L4.78 21.58L4.05 20.98L3.37 20.33L2.74 19.63L2.17 18.88L1.66 18.08L1.21 17.25L0.82 16.37L0.76 16.29L0.76 16.21L0.67 15.95L0.58 15.68L0.49 15.41L0.42 15.14L0.34 14.87L0.28 14.59L0.22 14.31L0.17 14.03L0.12 13.75L0.09 13.46L0.05 13.17L0.03 12.88L0.01 12.59L0 12.29L0 12L0.07 10.69L0.27 9.42L0.61 8.21L1.07 7.04L1.64 5.94L2.31 4.91L3.09 3.96L3.96 3.09L4.91 2.31L5.94 1.64L7.04 1.07L8.21 0.61L9.42 0.27L10.69 0.07L12 0L13.31 0.07L14.57 0.27ZM10.96 0.67L10.45 0.73L9.95 0.81L9.46 0.91L8.97 1.03L8.49 1.18L8.02 1.34L7.57 1.53L7.12 1.73L6.68 1.95L6.25 2.19L5.83 2.45L5.43 2.72L5.04 3.01L4.3 4.19L1.46 7.71L1.36 7.98L1.26 8.25L1.17 8.52L1.08 8.8L1.01 9.08L0.94 9.36L0.87 9.64L0.81 9.93L0.76 10.22L0.72 10.51L0.69 10.8L0.66 11.1L0.64 11.4L0.63 11.7L0.62 12L0.62 12.14L0.63 12.29L0.63 12.43L0.64 12.58L0.65 12.72L0.66 12.86L0.67 13.01L0.68 13.15L0.7 13.29L0.72 13.43L0.73 13.57L0.76 13.71L0.78 13.85L0.8 13.99L0.83 14.13L0.9 11.71L4.2 12.84L6.31 18.27L4.1 20.17L4.52 20.56L4.96 20.92L5.41 21.26L5.89 21.58L6.38 21.88L6.88 22.15L7.4 22.4L7.94 22.62L8.48 22.82L9.04 22.98L9.61 23.12L10.2 23.23L10.79 23.31L11.39 23.36L12 23.37L13.21 23.31L14.39 23.12L15.53 22.81L16.61 22.39L17.64 21.87L18.61 21.25L19.5 20.54L20.32 19.74L21.06 18.86L21.71 17.92L22.26 16.9L22.7 15.83L23.04 14.71L23.26 13.54L23.36 12.34L22.19 12.04L20.35 6.85L20.82 4.82L20.57 4.53L20.32 4.25L20.05 3.98L19.78 3.71L19.5 3.45L19.21 3.21L18.91 2.97L18.6 2.74L18.29 2.53L17.97 2.32L17.64 2.13L17.3 1.94L16.96 1.77L16.61 1.6L16.25 1.45L13.46 1.1L12.19 0.63L12.17 0.63L12.16 0.63L12.15 0.63L12.12 0.63L12.07 0.63L12.05 0.62L12.04 0.62L12.02 0.62L12.01 0.62L12 0.62L11.48 0.64L10.96 0.67ZM14.57 0.27L15.79 0.61L16.95 1.07L18.05 1.64L19.09 2.31L20.04 3.09L20.91 3.96L21.68 4.91L22.36 5.94L22.93 7.04L23.39 8.21L23.72 9.42L23.93 10.69L24 12L23.93 13.31L23.72 14.57L23.39 15.79L22.93 16.95L22.36 18.05L21.68 19.09L20.91 20.04L20.04 20.91L19.09 21.68L18.05 22.36L16.95 22.93L15.79 23.39L14.57 23.72L13.31 23.93L12 24L10.99 23.96L10.01 23.83L9.05 23.63L8.12 23.36L7.23 23.01L6.37 22.6L5.55 22.12L4.78 21.58L4.05 20.98L3.37 20.33L2.74 19.63L2.17 18.88L1.66 18.08L1.21 17.25L0.82 16.37L0.76 16.29L0.76 16.21L0.67 15.95L0.58 15.68L0.49 15.41L0.42 15.14L0.34 14.87L0.28 14.59L0.22 14.31L0.17 14.03L0.12 13.75L0.09 13.46L0.05 13.17L0.03 12.88L0.01 12.59L0 12.29L0 12L0.07 10.69L0.27 9.42L0.61 8.21L1.07 7.04L1.64 5.94L2.31 4.91L3.09 3.96L3.96 3.09L4.91 2.31L5.94 1.64L7.04 1.07L8.21 0.61L9.42 0.27L10.69 0.07L12 0L13.31 0.07L14.57 0.27ZM10.96 0.67L10.45 0.73L9.95 0.81L9.46 0.91L8.97 1.03L8.49 1.18L8.02 1.34L7.57 1.53L7.12 1.73L6.68 1.95L6.25 2.19L5.83 2.45L5.43 2.72L5.04 3.01L4.3 4.19L1.46 7.71L1.36 7.98L1.26 8.25L1.17 8.52L1.08 8.8L1.01 9.08L0.94 9.36L0.87 9.64L0.81 9.93L0.76 10.22L0.72 10.51L0.69 10.8L0.66 11.1L0.64 11.4L0.63 11.7L0.62 12L0.62 12.14L0.63 12.29L0.63 12.43L0.64 12.58L0.65 12.72L0.66 12.86L0.67 13.01L0.68 13.15L0.7 13.29L0.72 13.43L0.73 13.57L0.76 13.71L0.78 13.85L0.8 13.99L0.83 14.13L0.9 11.71L4.2 12.84L6.31 18.27L4.1 20.17L4.52 20.56L4.96 20.92L5.41 21.26L5.89 21.58L6.38 21.88L6.88 22.15L7.4 22.4L7.94 22.62L8.48 22.82L9.04 22.98L9.61 23.12L10.2 23.23L10.79 23.31L11.39 23.36L12 23.37L13.21 23.31L14.39 23.12L15.53 22.81L16.61 22.39L17.64 21.87L18.61 21.25L19.5 20.54L20.32 19.74L21.06 18.86L21.71 17.92L22.26 16.9L22.7 15.83L23.04 14.71L23.26 13.54L23.36 12.34L22.19 12.04L20.35 6.85L20.82 4.82L20.57 4.53L20.32 4.25L20.05 3.98L19.78 3.71L19.5 3.45L19.21 3.21L18.91 2.97L18.6 2.74L18.29 2.53L17.97 2.32L17.64 2.13L17.3 1.94L16.96 1.77L16.61 1.6L16.25 1.45L13.46 1.1L12.19 0.63L12.17 0.63L12.16 0.63L12.15 0.63L12.12 0.63L12.07 0.63L12.05 0.62L12.04 0.62L12.02 0.62L12.01 0.62L12 0.62L11.48 0.64L10.96 0.67Z',
					},
				],
			};
		});
	var xs,
		P_,
		rp,
		np,
		Ds = g(() => {
			'use strict';
			T();
			L();
			z();
			Xc();
			tp();
			Y();
			(xs = ''.concat(f, 'widget-placeholder-message')),
				(P_ = (e = 'Widget wird geladen...') => {
					let r = E('div', {
							id: Bn,
							class: ''.concat(f, 'widget-placeholder-container'),
							style: w()
								? ''
								: 'box-sizing: border-box; width: 100%; min-height: 200px; display: flex; justify-content: center; align-items: center; flex-direction: column; background-color: inherit; padding: 32px 16px; color: #616672;',
						}),
						n = E('div', { class: ''.concat(f, 'animation-bounce') }),
						o = E('div', { class: ''.concat(f, 'animation-rotate') });
					o.appendChild(
						Qc(ep, { width: '24px', height: '24px', classNames: ''.concat(f, 'svg-football') }),
					),
						n.appendChild(o),
						r.appendChild(n);
					let s = E('div', {
						id: xs,
						class: xs,
						style: w()
							? ''
							: 'font-family: "PT Sans", sans-serif; font-size: 16px; color: inherit; margin-top: 16px; text-align: center;',
					});
					return s.appendChild(C(e)), r.appendChild(s), r;
				}),
				(rp = (e) => {
					let r = e.querySelector('#'.concat(Bn));
					r && r.removeAttribute('style');
					let n = e.querySelector('#'.concat(xs));
					n && n.removeAttribute('style');
				}),
				(np = P_);
		});
	var ee,
		Cs,
		Hn,
		M_,
		x_,
		op,
		ip,
		ws = g(() => {
			'use strict';
			T();
			z();
			zn();
			L();
			Y();
			(ee = ''.concat(f, 'widget-tab')),
				(Cs = ''.concat(ee, 's')),
				(Hn = ''.concat(ee, '-active')),
				(M_ = (e, r, n) => {
					var c;
					let o = r.querySelector('.'.concat(ee, '.').concat(Hn));
					o && o.classList.remove(Hn), e.currentTarget.classList.add(Hn);
					let u = r.querySelector('#'.concat(q, '-').concat(n));
					if (u && u.children.length === 0) {
						let v = r.querySelector('#'.concat(R));
						if (v) {
							let p = v.clientHeight;
							v.setAttribute('style', 'min-height: '.concat(p, 'px;'));
						}
					}
					let d =
						(c = r.querySelector('.'.concat(R))) == null ? void 0 : c.getElementsByClassName(j)[0];
					d && d.classList.remove(j), u && u.classList.add(j);
				}),
				(x_ = (e, r, n) => {
					let o = E('div', { class: ''.concat(ee, ' ').concat(r === 0 ? Hn : '') }),
						s = E('div', { class: ''.concat(ee, '-label') });
					return (
						s.appendChild(C(Ts[e])),
						o.appendChild(s),
						o.addEventListener('click', (u) => M_(u, n, r)),
						o
					);
				}),
				(op = (e, r) => {
					if (!e.views.length) throw new Error('A wrong configuration-object was provided.');
					let n = E('div', {
						id: Cs,
						class: Cs,
						style: w() ? '' : 'display: flex; height: 58px; visibility: hidden',
					});
					return (
						e.views.forEach((o, s) => {
							let u = x_(o, s, r);
							n.appendChild(u);
						}),
						n
					);
				}),
				(ip = (e) => {
					let r = e.querySelector('#'.concat(Cs));
					r && r.removeAttribute('style');
				});
		});
	var D_,
		C_,
		w_,
		O_,
		L_,
		S_,
		q_,
		j_,
		T_,
		U_,
		R_,
		ap,
		sp = g(() => {
			'use strict';
			L();
			zn();
			Rs();
			T();
			As();
			Ms();
			Jc();
			Zn();
			Ds();
			ws();
			(D_ = (e, r, n) => {
				if (!e) return;
				let o = E('link', {
					id: ''.concat(f).concat(n != null ? n : '', '-custom-css'),
					rel: 'stylesheet',
					type: 'text/css',
					media: 'all',
					href: 'https://widget-api.fupa.net/'.concat(e),
				});
				r ? r.appendChild(o) : document.head.appendChild(o);
			}),
				(C_ = (e) => {
					let n = ('host' in e ? e.host : e).getBoundingClientRect(),
						o = { y: window.innerHeight, x: window.innerWidth },
						s = { y: o.y / 2, x: o.x / 4 };
					return n.top < o.y + window.scrollY + s.y && n.left < o.x + window.scrollX + s.x;
				}),
				(w_ = (e, r) => {
					if (C_(r)) e();
					else {
						let n = { rootMargin: '50px', threshold: 0.001 },
							o = (u, d) => {
								u.forEach((c) => {
									c.isIntersecting && (e(), d.disconnect());
								});
							};
						new IntersectionObserver(o, n).observe(r);
					}
				}),
				(O_ = (e, r) => {
					let n = new Fs(
						r,
						j,
						() => {
							e(), n.disconnect();
						},
						() => {},
					);
				}),
				(L_ = {
					'team-standings': 'vendor/team/standings/3ISBEIR2.js',
					'team-squad': 'vendor/team/squad/ZKU24KOZ.js',
					'team-statistics': 'vendor/team/statistics/LGAQ5EMP.js',
					'team-matches': 'vendor/team/matches/W3HPCOVQ.js',
					'team-liveticker': 'vendor/team/liveticker/APECZKVH.js',
					'match-liveticker': 'vendor/match/liveticker/SZ77N3L6.js',
				}),
				(S_ = (e, r, n, o, s) => {
					let u = r === 0,
						d = E('section', {
							id: ''.concat(q, '-').concat(r),
							name: e,
							class: ''.concat(q, ' ').concat(u ? j : ''),
						}),
						c = L_[e];
					if (!c) throw new Error('Unknown widget view '.concat(e));
					let v = () => {
						let p = np('Daten werden geladen...');
						d.appendChild(p), U_('https://widget-api.fupa.net/'.concat(c), e, d, o, s);
					};
					return u ? w_(v, n) : O_(v, d), d;
				}),
				(q_ = (e) => {
					let r = window.getComputedStyle(e);
					return r.display === 'none' || r.visibility !== 'visible' ? !1 : r.opacity >= '0.1';
				}),
				(j_ = () => {
					let e = document.querySelectorAll('.'.concat(f, 'widget-footer'));
					return Array.from(e).every((r) => q_(r));
				}),
				(T_ = (e, r, n, o) => {
					if (!r) return;
					let s = o ? ''.concat(f).concat(o) : ''.concat(f, 'wrapper'),
						u = E('article', { id: s, class: s }),
						d = e.views.length > 1 ? op(e, r) : null;
					d && u.appendChild(d);
					let c = E(
						'div',
						te(
							{ id: R, class: R, 'data-entity': JSON.stringify(e.entity) },
							e.viewConfig && { 'data-config': JSON.stringify(e.viewConfig) },
						),
					);
					e.views.forEach((p, _) => {
						let y = S_(p, _, r, n, o);
						c.appendChild(y);
					}),
						u.appendChild(c);
					let v = Yc();
					if ((u.appendChild(v), r.appendChild(u), Zc(r, v, e.entity, e.type, o), !j_()))
						throw new U();
				}),
				(U_ = (e, r, n, o, s) => {
					let u = E('script', {
						id: ''
							.concat(f)
							.concat(r, '-view-script')
							.concat(s ? '-'.concat(s) : ''),
						type: 'text/javascript',
						src: e,
						'data-root-id': o != null ? o : '',
					});
					n.appendChild(u);
				}),
				(R_ = (e) => {
					if (!Object.keys(Nn).includes(e)) throw new Error('Unexpected Entity-Type: '.concat(e));
					return 'Dem Widget ist kein '
						.concat(Nn[e], ' zugeordnet. Füge dem Widget im Konfigurator ein ')
						.concat(Nn[e], ' hinzu, um es anzeigen zu können.');
				}),
				(ap = (e, r, n) => {
					var u;
					if (!r) throw new Error('No rootId was provided.');
					if (!e.entity) {
						let d = R_(e.type);
						throw new Error(d);
					}
					let o = Us(r),
						s = (u = o.shadowRoot) != null ? u : o;
					e.customCss && D_(e.customCss, s, n), T_(e, s, r, n);
				});
		});
	var F_,
		up,
		lp = g(() => {
			'use strict';
			T();
			L();
			z();
			(F_ = (e = 'Es ist ein unbekannter Fehler aufgetreten') => {
				let r = E('div', {
						id: ''.concat(f, 'widget-error'),
						class: ''.concat(f, 'widget-placeholder-container'),
					}),
					n = E('div', { class: ''.concat(f, 'widget-placeholder-message') });
				return n.appendChild(C('Fehler (FuPa-Widget): '.concat(e))), r.appendChild(n), r;
			}),
				(up = F_);
		});
	var cp,
		dp = g(() => {
			cp = 'https://widget-api.fupa.net/vendor/RFKJXDEJ.css';
		});
	var pp,
		W_,
		vp,
		I_,
		k_,
		fp,
		mp,
		bp,
		Ep,
		_p = g(() => {
			'use strict';
			lp();
			T();
			dp();
			Ds();
			ws();
			Ms();
			Y();
			(pp = (e) => {
				let r = document.getElementById(e);
				if (!r)
					throw new Error(
						'Das Root-Element konnte nicht gefunden werden. Bitte stelle sicher, dass in deinem HTML an der Stelle, an der das Widget dargestellt werden soll, ein div-Element mit der id "'.concat(
							e,
							'" existiert.',
						),
					);
				return r;
			}),
				(W_ = (e, r) => {
					var s;
					let n = (s = e.shadowRoot) != null ? s : e,
						o = up(r);
					n.appendChild(o);
				}),
				(vp = (e) => {
					w() ||
						((e.style.height = '232px'), (e.style.display = 'grid'), (e.style.alignItems = 'end'));
				}),
				(I_ = (e) => {
					let r = document.querySelectorAll('[id^="'.concat(e, '"]'));
					r && r.forEach((n) => n.removeAttribute('style'));
				}),
				(k_ = (e) => {
					var n;
					let r = (n = e.shadowRoot) != null ? n : e;
					for (; r.firstChild; ) r.firstChild.remove();
				}),
				(fp = (e, r) => {
					k_(e);
					let n = r ? r.message : 'Es ist ein unbekannter Fehler aufgetreten.';
					W_(e, n);
				}),
				(mp = () =>
					E('link', {
						id: 'widget-css',
						title: 'fp-widget-css',
						rel: 'stylesheet',
						type: 'text/css',
						href: cp,
						media: 'all',
					})),
				(bp = (e, r) => {
					e.forEach((n) => {
						I_(n), rp(r(n)), ip(r(n)), Kc(r(n));
					});
				}),
				(Ep = (e) => {
					document.readyState == 'complete'
						? e()
						: window.addEventListener(
								'load',
								() => {
									e();
								},
								{ once: !0 },
							);
				});
		});
	var Y_ = i(($n) => {
		L();
		sp();
		_p();
		var N_ = (e) =>
				re($n, null, function* () {
					var n;
					let r = yield fetch('https://widget-api.fupa.net/v1/widgets/'.concat(e));
					if (r.ok) return yield r.json();
					if (r.status >= 400 && r.status < 500) {
						let o = yield r.json(),
							s = (n = o.error.translated_message) != null ? n : o.error.message;
						throw new Error(s);
					}
					throw r.status >= 500
						? new Error(
								'Es ist ein Problem am Server aufgetreten. Bitte versuche es später erneut.',
							)
						: new Error(r.statusText);
				}),
			hp = () => {
				let e = document.querySelectorAll('[id^="'.concat(Gn, '"]'));
				return Array.from(e);
			},
			H_ = (e) => {
				var n;
				let r = (n = e.match(/fp-widget_root-(.*)/)) == null ? void 0 : n[1];
				if (!r)
					throw new Error(
						'Es ist keine Widget-Id angegeben. Bitte gib die Id eines Widgets über das "data-id"-Attribut im script-Tag an, um die Konfiguration des Widgets beziehen zu können.',
					);
				return r;
			},
			$_ = (e, r) => {
				if (e)
					throw new Error(
						'Widget-Id ist nicht eindeutig. Mehrere Elemente mit der Widget-Id '.concat(
							r,
							' sind auf der Seite vorhanden.',
						),
					);
			},
			V_ = (e, r) => !!e.querySelector('#'.concat(f).concat(r)),
			G_ = () => {
				let e = (o) => {
						Array.from(o.addedNodes).forEach((u) => {
							if (u instanceof HTMLElement && u.id.startsWith(Gn)) {
								let c =
									hp()
										.map((v) => v.id)
										.filter((v) => v === u.id).length > 1;
								yp(u, c);
							}
						});
					},
					r = (o) => {
						o.forEach((s) => e(s));
					};
				new MutationObserver(r).observe(document, {
					childList: !0,
					subtree: !0,
					attributes: !1,
					characterData: !1,
				});
			},
			B_ = () =>
				re($n, null, function* () {
					if (window.FuPaWidgetIsCalled) return;
					window.FuPaWidgetIsCalled = !0;
					let e = z_(),
						r = hp(),
						n = r.map((o) => o.id);
					G_(),
						(e.onload = () => bp(n, pp)),
						r.forEach((o, s) => {
							let u = n.indexOf(o.id) !== s;
							yp(o, u);
						});
				}),
			yp = (e, r) =>
				re($n, null, function* () {
					let n = e.id,
						o = H_(n);
					if (!V_(e, o)) {
						vp(e);
						try {
							$_(r, o);
							let s = yield N_(o);
							ap(s, n, o);
						} catch (s) {
							fp(e, s);
						}
					}
				}),
			z_ = () => {
				let e = mp();
				return document.getElementById(e.id) || document.head.appendChild(e), e;
			};
		Ep(B_);
	});
	Y_();
})();
