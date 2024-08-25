'use strict';
(() => {
	var Pp = Object.create;
	var B = Object.defineProperty;
	var Mp = Object.getOwnPropertyDescriptor;
	var xp = Object.getOwnPropertyNames,
		Ss = Object.getOwnPropertySymbols,
		Dp = Object.getPrototypeOf,
		qs = Object.prototype.hasOwnProperty,
		Cp = Object.prototype.propertyIsEnumerable;
	var Vn = (e, r, n) =>
			r in e ? B(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[r] = n),
		te = (e, r) => {
			for (var n in r || (r = {})) qs.call(r, n) && Vn(e, n, r[n]);
			if (Ss)
				for (var o = Ss(r), s = 0, u = o.length, n; s < u; s++)
					(n = o[s]), Cp.call(r, n) && Vn(e, n, r[n]);
			return e;
		};
	var g = (e, r) => () => (e && (r = e((e = 0))), r);
	var i = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
		wp = (e, r) => {
			for (var n in r) B(e, n, { get: r[n], enumerable: !0 });
		},
		js = (e, r, n, o) => {
			if ((r && typeof r == 'object') || typeof r == 'function')
				for (var s = xp(r), u = 0, d = s.length, c; u < d; u++)
					(c = s[u]),
						!qs.call(e, c) &&
							c !== n &&
							B(e, c, {
								get: ((f) => r[f]).bind(null, c),
								enumerable: !(o = Mp(r, c)) || o.enumerable,
							});
			return e;
		};
	var Op = (e, r, n) => (
			(n = e != null ? Pp(Dp(e)) : {}),
			js(r || !e || !e.__esModule ? B(n, 'default', { value: e, enumerable: !0 }) : n, e)
		),
		Lp = (e) => js(B({}, '__esModule', { value: !0 }), e);
	var a = (e, r, n) => (Vn(e, typeof r != 'symbol' ? r + '' : r, n), n);
	var re = (e, r, n) =>
		new Promise((o, s) => {
			var u = (f) => {
					try {
						c(n.next(f));
					} catch (p) {
						s(p);
					}
				},
				d = (f) => {
					try {
						c(n.throw(f));
					} catch (p) {
						s(p);
					}
				},
				c = (f) => (f.done ? o(f.value) : Promise.resolve(f.value).then(u, d));
			c((n = n.apply(e, r)).next());
		});
	var v,
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
			(v = 'fp-'),
				(Gn = ''.concat(v, 'widget_root')),
				(K_ = ''.concat(v, 'view')),
				(q = ''.concat(v, 'widget-view')),
				(R = ''.concat(q, 's')),
				(j = ''.concat(q, '-active')),
				(Bn = ''.concat(v, 'loading')),
				(J_ = ''.concat(v, 'caption-text')),
				(Q_ = ''.concat(v, 'subheading-text')),
				(X_ = ''.concat(v, 'table-body-text')),
				(eh = ''.concat(v, 'body-text')),
				(th = ''.concat(v, 'title-text')),
				(rh = ''.concat(v, 'highlight-color')),
				(nh = ''.concat(v, 'highlight-contrast-color')),
				(oh = ''.concat(v, 'border-color')),
				(ih = ''.concat(v, 'shadow-color')),
				(ah = ''.concat(v, 'separator-color')),
				(sh = ''.concat(v, 'hide')),
				(uh = ''.concat(v, 'column-header')),
				(lh = ''.concat(v, 'text-button'));
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
	var Sp,
		Us,
		Rs = g(() => {
			'use strict';
			(Sp = (e) => {
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
				(Us = Sp);
		});
	var qp,
		E,
		T = g(() => {
			'use strict';
			(qp = (e, r) => {
				let n = document.createElement(e);
				return (
					Object.keys(r).forEach((o) => {
						n.setAttribute(o, r[o]);
					}),
					n
				);
			}),
				(E = qp);
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
	var jp,
		C,
		z = g(() => {
			'use strict';
			(jp = (e) => document.createTextNode(e)), (C = jp);
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
	wp(au, {
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
		__esDecorate: () => Tp,
		__exportStar: () => Gs,
		__extends: () => Ws,
		__generator: () => Vs,
		__importDefault: () => eu,
		__importStar: () => Xs,
		__makeTemplateObject: () => Qs,
		__metadata: () => Hs,
		__param: () => Ns,
		__propKey: () => Rp,
		__read: () => Jn,
		__rest: () => Is,
		__runInitializers: () => Up,
		__setFunctionName: () => Fp,
		__spread: () => Bs,
		__spreadArray: () => Ys,
		__spreadArrays: () => zs,
		__values: () => oe,
		default: () => Ip,
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
	function Tp(e, r, n, o, s, u) {
		function d(S) {
			if (S !== void 0 && typeof S != 'function') throw new TypeError('Function expected');
			return S;
		}
		for (
			var c = o.kind,
				f = c === 'getter' ? 'get' : c === 'setter' ? 'set' : 'value',
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
			var O = (0, n[P])(c === 'accessor' ? { get: _.get, set: _.set } : _[f], x);
			if (c === 'accessor') {
				if (O === void 0) continue;
				if (O === null || typeof O != 'object') throw new TypeError('Object expected');
				(y = d(O.get)) && (_.get = y),
					(y = d(O.set)) && (_.set = y),
					(y = d(O.init)) && s.unshift(y);
			} else (y = d(O)) && (c === 'field' ? s.unshift(y) : (_[f] = y));
		}
		p && Object.defineProperty(p, o.name, _), (h = !0);
	}
	function Up(e, r, n) {
		for (var o = arguments.length > 2, s = 0; s < r.length; s++)
			n = o ? r[s].call(e, n) : r[s].call(e);
		return o ? n : void 0;
	}
	function Rp(e) {
		return typeof e == 'symbol' ? e : ''.concat(e);
	}
	function Fp(e, r, n) {
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
			function f(_) {
				try {
					p(o.throw(_));
				} catch (y) {
					d(y);
				}
			}
			function p(_) {
				_.done ? u(_.value) : s(_.value).then(c, f);
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
				return f([p, _]);
			};
		}
		function f(p) {
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
				f(o[h](P));
			} catch (x) {
				y(u[0][3], x);
			}
		}
		function f(h) {
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
					return new Promise(function (c, f) {
						(d = e[u](d)), s(c, f, d.done, d.value);
					});
				};
		}
		function s(u, d, c, f) {
			Promise.resolve(f).then(function (p) {
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
		return Ap(r, e), r;
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
			(e.error = e.hasError ? new Wp(o, e.error, 'An error was suppressed during disposal.') : o),
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
		Ap,
		Wp,
		Ip,
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
			Ap = Object.create
				? function (e, r) {
						Object.defineProperty(e, 'default', { enumerable: !0, value: r });
					}
				: function (e, r) {
						e.default = r;
					};
			Wp =
				typeof SuppressedError == 'function'
					? SuppressedError
					: function (e, r, n) {
							var o = new Error(n);
							return (o.name = 'SuppressedError'), (o.error = e), (o.suppressed = r), o;
						};
			Ip = {
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
		var kp = l(),
			Xn = class extends kp.DomainEvent {};
		se.ClubCreated = Xn;
	});
	var lu = i((ue) => {
		'use strict';
		Object.defineProperty(ue, '__esModule', { value: !0 });
		ue.ClubDeleted = void 0;
		var Np = l(),
			eo = class extends Np.DomainEvent {};
		ue.ClubDeleted = eo;
	});
	var du = i((le) => {
		'use strict';
		Object.defineProperty(le, '__esModule', { value: !0 });
		le.ClubUpdated = void 0;
		var Hp = l(),
			to = class extends Hp.DomainEvent {};
		le.ClubUpdated = to;
	});
	var M = i((de) => {
		'use strict';
		Object.defineProperty(de, '__esModule', { value: !0 });
		de.EntityExportAvailableEvent = void 0;
		var $p = l(),
			ro = class extends $p.DomainEvent {
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
		var Vp = M(),
			no = class extends Vp.EntityExportAvailableEvent {};
		ce.ClubsExportAvailable = no;
	});
	var pu = i((pe) => {
		'use strict';
		Object.defineProperty(pe, '__esModule', { value: !0 });
		pe.ClubsExportRequested = void 0;
		var Gp = l(),
			oo = class extends Gp.DomainEvent {};
		pe.ClubsExportRequested = oo;
	});
	var vu = i((A) => {
		'use strict';
		Object.defineProperty(A, '__esModule', { value: !0 });
		A.RefreshCoachAdded = A.CoachAdded = void 0;
		var Bp = l(),
			ve = class extends Bp.DomainEvent {};
		A.CoachAdded = ve;
		var io = class extends ve {};
		A.RefreshCoachAdded = io;
	});
	var fu = i((W) => {
		'use strict';
		Object.defineProperty(W, '__esModule', { value: !0 });
		W.RefreshCoachRemoved = W.CoachRemoved = void 0;
		var zp = l(),
			fe = class extends zp.DomainEvent {};
		W.CoachRemoved = fe;
		var ao = class extends fe {};
		W.RefreshCoachRemoved = ao;
	});
	var Z = i((me) => {
		'use strict';
		Object.defineProperty(me, '__esModule', { value: !0 });
		me.CompetitionEvent = void 0;
		var Yp = l(),
			so = class extends Yp.DomainEvent {};
		me.CompetitionEvent = so;
	});
	var mu = i((be) => {
		'use strict';
		Object.defineProperty(be, '__esModule', { value: !0 });
		be.CompetitionCreated = void 0;
		var Zp = Z(),
			uo = class extends Zp.CompetitionEvent {};
		be.CompetitionCreated = uo;
	});
	var bu = i((Ee) => {
		'use strict';
		Object.defineProperty(Ee, '__esModule', { value: !0 });
		Ee.CompetitionDeleted = void 0;
		var Kp = l(),
			lo = class extends Kp.DomainEvent {};
		Ee.CompetitionDeleted = lo;
	});
	var I = i((_e) => {
		'use strict';
		Object.defineProperty(_e, '__esModule', { value: !0 });
		_e.EntityFollowedEvent = void 0;
		var Jp = l(),
			co = class extends Jp.DomainEvent {};
		_e.EntityFollowedEvent = co;
	});
	var Eu = i((he) => {
		'use strict';
		Object.defineProperty(he, '__esModule', { value: !0 });
		he.CompetitionFollowed = void 0;
		var Qp = I(),
			po = class extends Qp.EntityFollowedEvent {};
		he.CompetitionFollowed = po;
	});
	var _u = i((ye) => {
		'use strict';
		Object.defineProperty(ye, '__esModule', { value: !0 });
		ye.CompetitionImageUpdated = void 0;
		var Xp = Z(),
			vo = class extends Xp.CompetitionEvent {};
		ye.CompetitionImageUpdated = vo;
	});
	var hu = i((ge) => {
		'use strict';
		Object.defineProperty(ge, '__esModule', { value: !0 });
		ge.CompetitionSeasonActivated = void 0;
		var ev = l(),
			fo = class extends ev.DomainEvent {};
		ge.CompetitionSeasonActivated = fo;
	});
	var yu = i((Pe) => {
		'use strict';
		Object.defineProperty(Pe, '__esModule', { value: !0 });
		Pe.CompetitionSeasonCreated = void 0;
		var tv = l(),
			mo = class extends tv.DomainEvent {};
		Pe.CompetitionSeasonCreated = mo;
	});
	var gu = i((Me) => {
		'use strict';
		Object.defineProperty(Me, '__esModule', { value: !0 });
		Me.CompetitionSeasonDeactivated = void 0;
		var rv = l(),
			bo = class extends rv.DomainEvent {};
		Me.CompetitionSeasonDeactivated = bo;
	});
	var Pu = i((xe) => {
		'use strict';
		Object.defineProperty(xe, '__esModule', { value: !0 });
		xe.CompetitionSeasonDeleted = void 0;
		var nv = l(),
			Eo = class extends nv.DomainEvent {};
		xe.CompetitionSeasonDeleted = Eo;
	});
	var Mu = i((De) => {
		'use strict';
		Object.defineProperty(De, '__esModule', { value: !0 });
		De.CompetitionSeasonFormStandingsTeasered = void 0;
		var ov = l(),
			_o = class extends ov.DomainEvent {};
		De.CompetitionSeasonFormStandingsTeasered = _o;
	});
	var xu = i((Ce) => {
		'use strict';
		Object.defineProperty(Ce, '__esModule', { value: !0 });
		Ce.CompetitionSeasonTopScorersCreated = void 0;
		var iv = l(),
			ho = class extends iv.DomainEvent {};
		Ce.CompetitionSeasonTopScorersCreated = ho;
	});
	var Du = i((we) => {
		'use strict';
		Object.defineProperty(we, '__esModule', { value: !0 });
		we.CompetitionSeasonTopScorersDeleted = void 0;
		var av = l(),
			yo = class extends av.DomainEvent {};
		we.CompetitionSeasonTopScorersDeleted = yo;
	});
	var Cu = i((Oe) => {
		'use strict';
		Object.defineProperty(Oe, '__esModule', { value: !0 });
		Oe.CompetitionSeasonUpdated = void 0;
		var sv = l(),
			go = class extends sv.DomainEvent {};
		Oe.CompetitionSeasonUpdated = go;
	});
	var wu = i((Le) => {
		'use strict';
		Object.defineProperty(Le, '__esModule', { value: !0 });
		Le.CompetitionSeasonsExportAvailable = void 0;
		var uv = M(),
			Po = class extends uv.EntityExportAvailableEvent {};
		Le.CompetitionSeasonsExportAvailable = Po;
	});
	var Ou = i((Se) => {
		'use strict';
		Object.defineProperty(Se, '__esModule', { value: !0 });
		Se.CompetitionSeasonsExportRequested = void 0;
		var lv = l(),
			Mo = class extends lv.DomainEvent {};
		Se.CompetitionSeasonsExportRequested = Mo;
	});
	var k = i((qe) => {
		'use strict';
		Object.defineProperty(qe, '__esModule', { value: !0 });
		qe.EntityUnfollowedEvent = void 0;
		var dv = l(),
			xo = class extends dv.DomainEvent {};
		qe.EntityUnfollowedEvent = xo;
	});
	var Lu = i((je) => {
		'use strict';
		Object.defineProperty(je, '__esModule', { value: !0 });
		je.CompetitionUnfollowed = void 0;
		var cv = k(),
			Do = class extends cv.EntityUnfollowedEvent {};
		je.CompetitionUnfollowed = Do;
	});
	var Su = i((Te) => {
		'use strict';
		Object.defineProperty(Te, '__esModule', { value: !0 });
		Te.CompetitionUpdated = void 0;
		var pv = Z(),
			Co = class extends pv.CompetitionEvent {};
		Te.CompetitionUpdated = Co;
	});
	var qu = i((Ue) => {
		'use strict';
		Object.defineProperty(Ue, '__esModule', { value: !0 });
		Ue.CupTeamSeasonCreated = void 0;
		var vv = l(),
			wo = class extends vv.DomainEvent {};
		Ue.CupTeamSeasonCreated = wo;
	});
	var ju = i((Re) => {
		'use strict';
		Object.defineProperty(Re, '__esModule', { value: !0 });
		Re.CupTeamSeasonDeleted = void 0;
		var fv = l(),
			Oo = class extends fv.DomainEvent {};
		Re.CupTeamSeasonDeleted = Oo;
	});
	var Tu = i((Fe) => {
		'use strict';
		Object.defineProperty(Fe, '__esModule', { value: !0 });
		Fe.CupTeamSeasonsExportAvailable = void 0;
		var mv = M(),
			Lo = class extends mv.EntityExportAvailableEvent {};
		Fe.CupTeamSeasonsExportAvailable = Lo;
	});
	var Uu = i((Ae) => {
		'use strict';
		Object.defineProperty(Ae, '__esModule', { value: !0 });
		Ae.CupTeamSeasonsExportRequested = void 0;
		var bv = l(),
			So = class extends bv.DomainEvent {};
		Ae.CupTeamSeasonsExportRequested = So;
	});
	var Ru = i((We) => {
		'use strict';
		Object.defineProperty(We, '__esModule', { value: !0 });
		We.DistrictCreated = void 0;
		var Ev = l(),
			qo = class extends Ev.DomainEvent {};
		We.DistrictCreated = qo;
	});
	var Fu = i((Ie) => {
		'use strict';
		Object.defineProperty(Ie, '__esModule', { value: !0 });
		Ie.DistrictDeleted = void 0;
		var _v = l(),
			jo = class extends _v.DomainEvent {};
		Ie.DistrictDeleted = jo;
	});
	var Au = i((ke) => {
		'use strict';
		Object.defineProperty(ke, '__esModule', { value: !0 });
		ke.DistrictUpdated = void 0;
		var hv = l(),
			To = class extends hv.DomainEvent {};
		ke.DistrictUpdated = To;
	});
	var K = i((Ne) => {
		'use strict';
		Object.defineProperty(Ne, '__esModule', { value: !0 });
		Ne.EntitiesForDistrictRequested = void 0;
		var yv = l(),
			Uo = class extends yv.DomainEvent {};
		Ne.EntitiesForDistrictRequested = Uo;
	});
	var Wu = i((He) => {
		'use strict';
		Object.defineProperty(He, '__esModule', { value: !0 });
		He.FollowableTopicDeleted = void 0;
		var gv = l(),
			Ro = class extends gv.DomainEvent {};
		He.FollowableTopicDeleted = Ro;
	});
	var Iu = i(($e) => {
		'use strict';
		Object.defineProperty($e, '__esModule', { value: !0 });
		$e.GalleriesForDistrictRequested = void 0;
		var Pv = K(),
			Fo = class extends Pv.EntitiesForDistrictRequested {};
		$e.GalleriesForDistrictRequested = Fo;
	});
	var ku = i((Ve) => {
		'use strict';
		Object.defineProperty(Ve, '__esModule', { value: !0 });
		Ve.GalleryDeleted = void 0;
		var Mv = l(),
			Ao = class extends Mv.DomainEvent {};
		Ve.GalleryDeleted = Ao;
	});
	var Nu = i((Ge) => {
		'use strict';
		Object.defineProperty(Ge, '__esModule', { value: !0 });
		Ge.GalleryUpdated = void 0;
		var xv = l(),
			Wo = class extends xv.DomainEvent {};
		Ge.GalleryUpdated = Wo;
	});
	var Hu = i((Be) => {
		'use strict';
		Object.defineProperty(Be, '__esModule', { value: !0 });
		Be.ImageCreated = void 0;
		var Dv = l(),
			Io = class extends Dv.DomainEvent {};
		Be.ImageCreated = Io;
	});
	var $u = i((ze) => {
		'use strict';
		Object.defineProperty(ze, '__esModule', { value: !0 });
		ze.ImageDeleted = void 0;
		var Cv = l(),
			ko = class extends Cv.DomainEvent {};
		ze.ImageDeleted = ko;
	});
	var Vu = i((Ye) => {
		'use strict';
		Object.defineProperty(Ye, '__esModule', { value: !0 });
		Ye.ImagesUploaded = void 0;
		var wv = l(),
			No = class extends wv.DomainEvent {};
		Ye.ImagesUploaded = No;
	});
	var Gu = i((Ze) => {
		'use strict';
		Object.defineProperty(Ze, '__esModule', { value: !0 });
		Ze.ImportBatchUploaded = void 0;
		var Ov = l(),
			Ho = class extends Ov.DomainEvent {};
		Ze.ImportBatchUploaded = Ho;
	});
	var Bu = i((Ke) => {
		'use strict';
		Object.defineProperty(Ke, '__esModule', { value: !0 });
		Ke.LiveTickerMatchResultUpdated = void 0;
		var Lv = l(),
			$o = class extends Lv.DomainEvent {};
		Ke.LiveTickerMatchResultUpdated = $o;
	});
	var zu = i((Je) => {
		'use strict';
		Object.defineProperty(Je, '__esModule', { value: !0 });
		Je.LiveTickerPremiumAwardReceived = void 0;
		var Sv = l(),
			Vo = class extends Sv.DomainEvent {};
		Je.LiveTickerPremiumAwardReceived = Vo;
	});
	var Yu = i((N) => {
		'use strict';
		Object.defineProperty(N, '__esModule', { value: !0 });
		N.RefreshMatchAborted = N.MatchAborted = void 0;
		var qv = l(),
			Qe = class extends qv.DomainEvent {};
		N.MatchAborted = Qe;
		var Go = class extends Qe {};
		N.RefreshMatchAborted = Go;
	});
	var Zu = i((H) => {
		'use strict';
		Object.defineProperty(H, '__esModule', { value: !0 });
		H.RefreshMatchCancelled = H.MatchCancelled = void 0;
		var jv = l(),
			Xe = class extends jv.DomainEvent {};
		H.MatchCancelled = Xe;
		var Bo = class extends Xe {};
		H.RefreshMatchCancelled = Bo;
	});
	var Ku = i((et) => {
		'use strict';
		Object.defineProperty(et, '__esModule', { value: !0 });
		et.MatchCreated = void 0;
		var Tv = l(),
			zo = class extends Tv.DomainEvent {};
		et.MatchCreated = zo;
	});
	var Ju = i((tt) => {
		'use strict';
		Object.defineProperty(tt, '__esModule', { value: !0 });
		tt.MatchDeleted = void 0;
		var Uv = l(),
			Yo = class extends Uv.DomainEvent {};
		tt.MatchDeleted = Yo;
	});
	var nt = i((rt) => {
		'use strict';
		Object.defineProperty(rt, '__esModule', { value: !0 });
		rt.MatchDistrictRelationEvent = void 0;
		var Rv = l(),
			Zo = class extends Rv.DomainEvent {};
		rt.MatchDistrictRelationEvent = Zo;
	});
	var Qu = i((ot) => {
		'use strict';
		Object.defineProperty(ot, '__esModule', { value: !0 });
		ot.MatchDistrictRelationCreated = void 0;
		var Fv = nt(),
			Ko = class extends Fv.MatchDistrictRelationEvent {};
		ot.MatchDistrictRelationCreated = Ko;
	});
	var Xu = i((it) => {
		'use strict';
		Object.defineProperty(it, '__esModule', { value: !0 });
		it.MatchDistrictRelationDeleted = void 0;
		var Av = nt(),
			Jo = class extends Av.MatchDistrictRelationEvent {};
		it.MatchDistrictRelationDeleted = Jo;
	});
	var el = i((at) => {
		'use strict';
		Object.defineProperty(at, '__esModule', { value: !0 });
		at.MatchEventChance = void 0;
		var Wv = l(),
			Qo = class extends Wv.DomainEvent {};
		at.MatchEventChance = Qo;
	});
	var tl = i((st) => {
		'use strict';
		Object.defineProperty(st, '__esModule', { value: !0 });
		st.MatchEventDeleted = void 0;
		var Iv = l(),
			Xo = class extends Iv.DomainEvent {};
		st.MatchEventDeleted = Xo;
	});
	var rl = i((ut) => {
		'use strict';
		Object.defineProperty(ut, '__esModule', { value: !0 });
		ut.MatchEventGoalDenied = void 0;
		var kv = l(),
			ei = class extends kv.DomainEvent {};
		ut.MatchEventGoalDenied = ei;
	});
	var nl = i((lt) => {
		'use strict';
		Object.defineProperty(lt, '__esModule', { value: !0 });
		lt.MatchEventGoal = void 0;
		var Nv = l(),
			ti = class extends Nv.DomainEvent {};
		lt.MatchEventGoal = ti;
	});
	var ol = i((dt) => {
		'use strict';
		Object.defineProperty(dt, '__esModule', { value: !0 });
		dt.MatchEventInterimResult = void 0;
		var Hv = l(),
			ri = class extends Hv.DomainEvent {};
		dt.MatchEventInterimResult = ri;
	});
	var il = i((ct) => {
		'use strict';
		Object.defineProperty(ct, '__esModule', { value: !0 });
		ct.MatchEventLineupsCompleted = void 0;
		var $v = l(),
			ni = class extends $v.DomainEvent {};
		ct.MatchEventLineupsCompleted = ni;
	});
	var al = i((pt) => {
		'use strict';
		Object.defineProperty(pt, '__esModule', { value: !0 });
		pt.MatchEventOwnGoal = void 0;
		var Vv = l(),
			oi = class extends Vv.DomainEvent {};
		pt.MatchEventOwnGoal = oi;
	});
	var sl = i((vt) => {
		'use strict';
		Object.defineProperty(vt, '__esModule', { value: !0 });
		vt.MatchEventPenaltyFail = void 0;
		var Gv = l(),
			ii = class extends Gv.DomainEvent {};
		vt.MatchEventPenaltyFail = ii;
	});
	var ul = i((ft) => {
		'use strict';
		Object.defineProperty(ft, '__esModule', { value: !0 });
		ft.MatchEventRedCard = void 0;
		var Bv = l(),
			ai = class extends Bv.DomainEvent {};
		ft.MatchEventRedCard = ai;
	});
	var ll = i((mt) => {
		'use strict';
		Object.defineProperty(mt, '__esModule', { value: !0 });
		mt.MatchEventTimePenalty = void 0;
		var zv = l(),
			si = class extends zv.DomainEvent {};
		mt.MatchEventTimePenalty = si;
	});
	var dl = i((bt) => {
		'use strict';
		Object.defineProperty(bt, '__esModule', { value: !0 });
		bt.MatchEventUpdated = void 0;
		var Yv = l(),
			ui = class extends Yv.DomainEvent {};
		bt.MatchEventUpdated = ui;
	});
	var cl = i((Et) => {
		'use strict';
		Object.defineProperty(Et, '__esModule', { value: !0 });
		Et.MatchEventWhistleOvertimeStartFirstHalftime = void 0;
		var Zv = l(),
			li = class extends Zv.DomainEvent {};
		Et.MatchEventWhistleOvertimeStartFirstHalftime = li;
	});
	var pl = i((_t) => {
		'use strict';
		Object.defineProperty(_t, '__esModule', { value: !0 });
		_t.MatchEventWhistleOvertimeStartSecondHalftime = void 0;
		var Kv = l(),
			di = class extends Kv.DomainEvent {};
		_t.MatchEventWhistleOvertimeStartSecondHalftime = di;
	});
	var vl = i((ht) => {
		'use strict';
		Object.defineProperty(ht, '__esModule', { value: !0 });
		ht.MatchEventWhistleOvertimeStopFirstHalftime = void 0;
		var Jv = l(),
			ci = class extends Jv.DomainEvent {};
		ht.MatchEventWhistleOvertimeStopFirstHalftime = ci;
	});
	var fl = i((yt) => {
		'use strict';
		Object.defineProperty(yt, '__esModule', { value: !0 });
		yt.MatchEventWhistleOvertimeStopSecondHalftime = void 0;
		var Qv = l(),
			pi = class extends Qv.DomainEvent {};
		yt.MatchEventWhistleOvertimeStopSecondHalftime = pi;
	});
	var ml = i((gt) => {
		'use strict';
		Object.defineProperty(gt, '__esModule', { value: !0 });
		gt.MatchEventWhistlePenaltyShootoutStart = void 0;
		var Xv = l(),
			vi = class extends Xv.DomainEvent {};
		gt.MatchEventWhistlePenaltyShootoutStart = vi;
	});
	var bl = i((Pt) => {
		'use strict';
		Object.defineProperty(Pt, '__esModule', { value: !0 });
		Pt.MatchEventWhistlePenaltyShootoutStop = void 0;
		var ef = l(),
			fi = class extends ef.DomainEvent {};
		Pt.MatchEventWhistlePenaltyShootoutStop = fi;
	});
	var El = i((Mt) => {
		'use strict';
		Object.defineProperty(Mt, '__esModule', { value: !0 });
		Mt.MatchEventWhistleRegularStartFirstHalftime = void 0;
		var tf = l(),
			mi = class extends tf.DomainEvent {};
		Mt.MatchEventWhistleRegularStartFirstHalftime = mi;
	});
	var _l = i((xt) => {
		'use strict';
		Object.defineProperty(xt, '__esModule', { value: !0 });
		xt.MatchEventWhistleRegularStartSecondHalftime = void 0;
		var rf = l(),
			bi = class extends rf.DomainEvent {};
		xt.MatchEventWhistleRegularStartSecondHalftime = bi;
	});
	var hl = i((Dt) => {
		'use strict';
		Object.defineProperty(Dt, '__esModule', { value: !0 });
		Dt.MatchEventWhistleRegularStopFirstHalftime = void 0;
		var nf = l(),
			Ei = class extends nf.DomainEvent {};
		Dt.MatchEventWhistleRegularStopFirstHalftime = Ei;
	});
	var yl = i((Ct) => {
		'use strict';
		Object.defineProperty(Ct, '__esModule', { value: !0 });
		Ct.MatchEventWhistleRegularStopSecondHalftime = void 0;
		var of = l(),
			_i = class extends of.DomainEvent {};
		Ct.MatchEventWhistleRegularStopSecondHalftime = _i;
	});
	var gl = i((wt) => {
		'use strict';
		Object.defineProperty(wt, '__esModule', { value: !0 });
		wt.MatchEventYellowCard = void 0;
		var af = l(),
			hi = class extends af.DomainEvent {};
		wt.MatchEventYellowCard = hi;
	});
	var Pl = i((Ot) => {
		'use strict';
		Object.defineProperty(Ot, '__esModule', { value: !0 });
		Ot.MatchEventYellowRedCard = void 0;
		var sf = l(),
			yi = class extends sf.DomainEvent {};
		Ot.MatchEventYellowRedCard = yi;
	});
	var Ml = i((Lt) => {
		'use strict';
		Object.defineProperty(Lt, '__esModule', { value: !0 });
		Lt.MatchFollowed = void 0;
		var uf = I(),
			gi = class extends uf.EntityFollowedEvent {};
		Lt.MatchFollowed = gi;
	});
	var xl = i((St) => {
		'use strict';
		Object.defineProperty(St, '__esModule', { value: !0 });
		St.MatchGalleryRemoved = void 0;
		var lf = l(),
			Pi = class extends lf.DomainEvent {};
		St.MatchGalleryRemoved = Pi;
	});
	var Dl = i((qt) => {
		'use strict';
		Object.defineProperty(qt, '__esModule', { value: !0 });
		qt.MatchGalleryUploaded = void 0;
		var df = l(),
			Mi = class extends df.DomainEvent {};
		qt.MatchGalleryUploaded = Mi;
	});
	var Cl = i((jt) => {
		'use strict';
		Object.defineProperty(jt, '__esModule', { value: !0 });
		jt.MatchPlaylistDeleted = void 0;
		var cf = l(),
			xi = class extends cf.DomainEvent {};
		jt.MatchPlaylistDeleted = xi;
	});
	var wl = i((Tt) => {
		'use strict';
		Object.defineProperty(Tt, '__esModule', { value: !0 });
		Tt.MatchPlaylistUpdated = void 0;
		var pf = l(),
			Di = class extends pf.DomainEvent {};
		Tt.MatchPlaylistUpdated = Di;
	});
	var Ol = i((Ut) => {
		'use strict';
		Object.defineProperty(Ut, '__esModule', { value: !0 });
		Ut.MatchPlaylistUploaded = void 0;
		var vf = l(),
			Ci = class extends vf.DomainEvent {};
		Ut.MatchPlaylistUploaded = Ci;
	});
	var Ll = i(($) => {
		'use strict';
		Object.defineProperty($, '__esModule', { value: !0 });
		$.RefreshMatchResultSaved = $.MatchResultSaved = void 0;
		var ff = l(),
			Rt = class extends ff.DomainEvent {};
		$.MatchResultSaved = Rt;
		var wi = class extends Rt {};
		$.RefreshMatchResultSaved = wi;
	});
	var Sl = i((Ft) => {
		'use strict';
		Object.defineProperty(Ft, '__esModule', { value: !0 });
		Ft.MatchInterimResultSaved = void 0;
		var mf = l(),
			Oi = class extends mf.DomainEvent {};
		Ft.MatchInterimResultSaved = Oi;
	});
	var ql = i((At) => {
		'use strict';
		Object.defineProperty(At, '__esModule', { value: !0 });
		At.MatchResultReset = void 0;
		var bf = l(),
			Li = class extends bf.DomainEvent {};
		At.MatchResultReset = Li;
	});
	var jl = i((Wt) => {
		'use strict';
		Object.defineProperty(Wt, '__esModule', { value: !0 });
		Wt.MatchShifted = void 0;
		var Ef = l(),
			Si = class extends Ef.DomainEvent {};
		Wt.MatchShifted = Si;
	});
	var Tl = i((It) => {
		'use strict';
		Object.defineProperty(It, '__esModule', { value: !0 });
		It.MatchStarted = void 0;
		var _f = l(),
			qi = class extends _f.DomainEvent {};
		It.MatchStarted = qi;
	});
	var Ul = i((kt) => {
		'use strict';
		Object.defineProperty(kt, '__esModule', { value: !0 });
		kt.MatchUnfollowed = void 0;
		var hf = k(),
			ji = class extends hf.EntityUnfollowedEvent {};
		kt.MatchUnfollowed = ji;
	});
	var Rl = i((Nt) => {
		'use strict';
		Object.defineProperty(Nt, '__esModule', { value: !0 });
		Nt.MatchUpdated = void 0;
		var yf = l(),
			Ti = class extends yf.DomainEvent {};
		Nt.MatchUpdated = Ti;
	});
	var Fl = i((Ht) => {
		'use strict';
		Object.defineProperty(Ht, '__esModule', { value: !0 });
		Ht.MatchVideoElementCreated = void 0;
		var gf = l(),
			Ui = class extends gf.DomainEvent {};
		Ht.MatchVideoElementCreated = Ui;
	});
	var Vt = i(($t) => {
		'use strict';
		Object.defineProperty($t, '__esModule', { value: !0 });
		$t.MatchVideoEmbeddingEvent = void 0;
		var Pf = l(),
			Ri = class extends Pf.DomainEvent {};
		$t.MatchVideoEmbeddingEvent = Ri;
	});
	var Al = i((Gt) => {
		'use strict';
		Object.defineProperty(Gt, '__esModule', { value: !0 });
		Gt.MatchVideoEmbeddingCreated = void 0;
		var Mf = Vt(),
			Fi = class extends Mf.MatchVideoEmbeddingEvent {};
		Gt.MatchVideoEmbeddingCreated = Fi;
	});
	var Wl = i((Bt) => {
		'use strict';
		Object.defineProperty(Bt, '__esModule', { value: !0 });
		Bt.MatchVideoEmbeddingDeleted = void 0;
		var xf = Vt(),
			Ai = class extends xf.MatchVideoEmbeddingEvent {};
		Bt.MatchVideoEmbeddingDeleted = Ai;
	});
	var Il = i((zt) => {
		'use strict';
		Object.defineProperty(zt, '__esModule', { value: !0 });
		zt.MatchesExportAvailable = void 0;
		var Df = M(),
			Wi = class extends Df.EntityExportAvailableEvent {};
		zt.MatchesExportAvailable = Wi;
	});
	var kl = i((Yt) => {
		'use strict';
		Object.defineProperty(Yt, '__esModule', { value: !0 });
		Yt.MatchesExportRequested = void 0;
		var Cf = l(),
			Ii = class extends Cf.DomainEvent {};
		Yt.MatchesExportRequested = Ii;
	});
	var Nl = i((Zt) => {
		'use strict';
		Object.defineProperty(Zt, '__esModule', { value: !0 });
		Zt.NewsDeleted = void 0;
		var wf = l(),
			ki = class extends wf.DomainEvent {};
		Zt.NewsDeleted = ki;
	});
	var Hl = i((Kt) => {
		'use strict';
		Object.defineProperty(Kt, '__esModule', { value: !0 });
		Kt.NewsExportAvailable = void 0;
		var Of = M(),
			Ni = class extends Of.EntityExportAvailableEvent {};
		Kt.NewsExportAvailable = Ni;
	});
	var $l = i((Jt) => {
		'use strict';
		Object.defineProperty(Jt, '__esModule', { value: !0 });
		Jt.NewsExportRequested = void 0;
		var Lf = l(),
			Hi = class extends Lf.DomainEvent {};
		Jt.NewsExportRequested = Hi;
	});
	var Vl = i((Qt) => {
		'use strict';
		Object.defineProperty(Qt, '__esModule', { value: !0 });
		Qt.NewsForDistrictRequested = void 0;
		var Sf = K(),
			$i = class extends Sf.EntitiesForDistrictRequested {};
		Qt.NewsForDistrictRequested = $i;
	});
	var Gl = i((Xt) => {
		'use strict';
		Object.defineProperty(Xt, '__esModule', { value: !0 });
		Xt.NewsImageUpdated = void 0;
		var qf = l(),
			Vi = class extends qf.DomainEvent {};
		Xt.NewsImageUpdated = Vi;
	});
	var Bl = i((er) => {
		'use strict';
		Object.defineProperty(er, '__esModule', { value: !0 });
		er.NewsPublished = void 0;
		var jf = l(),
			Gi = class extends jf.DomainEvent {};
		er.NewsPublished = Gi;
	});
	var zi = i((tr) => {
		'use strict';
		Object.defineProperty(tr, '__esModule', { value: !0 });
		tr.SlugRenamed = void 0;
		var Tf = l(),
			Bi = class extends Tf.DomainEvent {};
		tr.SlugRenamed = Bi;
	});
	var zl = i((rr) => {
		'use strict';
		Object.defineProperty(rr, '__esModule', { value: !0 });
		rr.NewsSlugRenamed = void 0;
		var Uf = zi(),
			Yi = class extends Uf.SlugRenamed {};
		rr.NewsSlugRenamed = Yi;
	});
	var Yl = i((nr) => {
		'use strict';
		Object.defineProperty(nr, '__esModule', { value: !0 });
		nr.NewsUnpublished = void 0;
		var Rf = l(),
			Zi = class extends Rf.DomainEvent {};
		nr.NewsUnpublished = Zi;
	});
	var Zl = i((or) => {
		'use strict';
		Object.defineProperty(or, '__esModule', { value: !0 });
		or.NewsUpdated = void 0;
		var Ff = l(),
			Ki = class extends Ff.DomainEvent {};
		or.NewsUpdated = Ki;
	});
	var Kl = i((ir) => {
		'use strict';
		Object.defineProperty(ir, '__esModule', { value: !0 });
		ir.PowerRankingCreated = void 0;
		var Af = l(),
			Ji = class extends Af.DomainEvent {};
		ir.PowerRankingCreated = Ji;
	});
	var Jl = i((ar) => {
		'use strict';
		Object.defineProperty(ar, '__esModule', { value: !0 });
		ar.PowerRankingDeleted = void 0;
		var Wf = l(),
			Qi = class extends Wf.DomainEvent {};
		ar.PowerRankingDeleted = Qi;
	});
	var Ql = i((sr) => {
		'use strict';
		Object.defineProperty(sr, '__esModule', { value: !0 });
		sr.PowerRankingUpdated = void 0;
		var If = l(),
			Xi = class extends If.DomainEvent {};
		sr.PowerRankingUpdated = Xi;
	});
	var Xl = i((ur) => {
		'use strict';
		Object.defineProperty(ur, '__esModule', { value: !0 });
		ur.ProfileCreated = void 0;
		var kf = l(),
			ea = class extends kf.DomainEvent {};
		ur.ProfileCreated = ea;
	});
	var ed = i((lr) => {
		'use strict';
		Object.defineProperty(lr, '__esModule', { value: !0 });
		lr.ProfileDeleted = void 0;
		var Nf = l(),
			ta = class extends Nf.DomainEvent {};
		lr.ProfileDeleted = ta;
	});
	var td = i((dr) => {
		'use strict';
		Object.defineProperty(dr, '__esModule', { value: !0 });
		dr.ProfileFollowed = void 0;
		var Hf = I(),
			ra = class extends Hf.EntityFollowedEvent {};
		dr.ProfileFollowed = ra;
	});
	var rd = i((cr) => {
		'use strict';
		Object.defineProperty(cr, '__esModule', { value: !0 });
		cr.ProfileImageUpdated = void 0;
		var $f = l(),
			na = class extends $f.DomainEvent {};
		cr.ProfileImageUpdated = na;
	});
	var nd = i((pr) => {
		'use strict';
		Object.defineProperty(pr, '__esModule', { value: !0 });
		pr.ProfileInjured = void 0;
		var Vf = l(),
			oa = class extends Vf.DomainEvent {};
		pr.ProfileInjured = oa;
	});
	var od = i((vr) => {
		'use strict';
		Object.defineProperty(vr, '__esModule', { value: !0 });
		vr.ProfileSeasonBanCreated = void 0;
		var Gf = l(),
			ia = class extends Gf.DomainEvent {};
		vr.ProfileSeasonBanCreated = ia;
	});
	var id = i((fr) => {
		'use strict';
		Object.defineProperty(fr, '__esModule', { value: !0 });
		fr.ProfileSeasonBanDeleted = void 0;
		var Bf = l(),
			aa = class extends Bf.DomainEvent {};
		fr.ProfileSeasonBanDeleted = aa;
	});
	var ad = i((mr) => {
		'use strict';
		Object.defineProperty(mr, '__esModule', { value: !0 });
		mr.ProfileSeasonBanUpdated = void 0;
		var zf = l(),
			sa = class extends zf.DomainEvent {};
		mr.ProfileSeasonBanUpdated = sa;
	});
	var sd = i((br) => {
		'use strict';
		Object.defineProperty(br, '__esModule', { value: !0 });
		br.ProfileSeasonInjuryDeleted = void 0;
		var Yf = l(),
			ua = class extends Yf.DomainEvent {};
		br.ProfileSeasonInjuryDeleted = ua;
	});
	var ud = i((Er) => {
		'use strict';
		Object.defineProperty(Er, '__esModule', { value: !0 });
		Er.ProfileSeasonInjuryUpdated = void 0;
		var Zf = l(),
			la = class extends Zf.DomainEvent {};
		Er.ProfileSeasonInjuryUpdated = la;
	});
	var ld = i((_r) => {
		'use strict';
		Object.defineProperty(_r, '__esModule', { value: !0 });
		_r.ProfileTransferCreated = void 0;
		var Kf = l(),
			da = class extends Kf.DomainEvent {};
		_r.ProfileTransferCreated = da;
	});
	var dd = i((hr) => {
		'use strict';
		Object.defineProperty(hr, '__esModule', { value: !0 });
		hr.ProfileTransferDeleted = void 0;
		var Jf = l(),
			ca = class extends Jf.DomainEvent {};
		hr.ProfileTransferDeleted = ca;
	});
	var cd = i((yr) => {
		'use strict';
		Object.defineProperty(yr, '__esModule', { value: !0 });
		yr.ProfileTransferUpdated = void 0;
		var Qf = l(),
			pa = class extends Qf.DomainEvent {};
		yr.ProfileTransferUpdated = pa;
	});
	var pd = i((gr) => {
		'use strict';
		Object.defineProperty(gr, '__esModule', { value: !0 });
		gr.ProfileTransfersForDistrictRequested = void 0;
		var Xf = K(),
			va = class extends Xf.EntitiesForDistrictRequested {};
		gr.ProfileTransfersForDistrictRequested = va;
	});
	var vd = i((Pr) => {
		'use strict';
		Object.defineProperty(Pr, '__esModule', { value: !0 });
		Pr.ProfileUnfollowed = void 0;
		var em = k(),
			fa = class extends em.EntityUnfollowedEvent {};
		Pr.ProfileUnfollowed = fa;
	});
	var fd = i((Mr) => {
		'use strict';
		Object.defineProperty(Mr, '__esModule', { value: !0 });
		Mr.ProfileUpdated = void 0;
		var tm = l(),
			ma = class extends tm.DomainEvent {};
		Mr.ProfileUpdated = ma;
	});
	var md = i((xr) => {
		'use strict';
		Object.defineProperty(xr, '__esModule', { value: !0 });
		xr.PushNotificationSubmitted = void 0;
		var rm = l(),
			ba = class extends rm.DomainEvent {};
		xr.PushNotificationSubmitted = ba;
	});
	var _a = i((Dr) => {
		'use strict';
		Object.defineProperty(Dr, '__esModule', { value: !0 });
		Dr.RoundEvent = void 0;
		var nm = l(),
			Ea = class extends nm.DomainEvent {};
		Dr.RoundEvent = Ea;
	});
	var bd = i((Cr) => {
		'use strict';
		Object.defineProperty(Cr, '__esModule', { value: !0 });
		Cr.RoundUpdated = void 0;
		var om = _a(),
			ha = class extends om.RoundEvent {};
		Cr.RoundUpdated = ha;
	});
	var Ed = i((wr) => {
		'use strict';
		Object.defineProperty(wr, '__esModule', { value: !0 });
		wr.SeasonCreated = void 0;
		var im = l(),
			ya = class extends im.DomainEvent {};
		wr.SeasonCreated = ya;
	});
	var _d = i((Or) => {
		'use strict';
		Object.defineProperty(Or, '__esModule', { value: !0 });
		Or.SeasonDeleted = void 0;
		var am = l(),
			ga = class extends am.DomainEvent {};
		Or.SeasonDeleted = ga;
	});
	var hd = i((Lr) => {
		'use strict';
		Object.defineProperty(Lr, '__esModule', { value: !0 });
		Lr.SeasonUpdated = void 0;
		var sm = l(),
			Pa = class extends sm.DomainEvent {};
		Lr.SeasonUpdated = Pa;
	});
	var yd = i((Sr) => {
		'use strict';
		Object.defineProperty(Sr, '__esModule', { value: !0 });
		Sr.StreamEntryCreated = void 0;
		var um = l(),
			Ma = class extends um.DomainEvent {};
		Sr.StreamEntryCreated = Ma;
	});
	var gd = i((qr) => {
		'use strict';
		Object.defineProperty(qr, '__esModule', { value: !0 });
		qr.StreamEntryDeleted = void 0;
		var lm = l(),
			xa = class extends lm.DomainEvent {};
		qr.StreamEntryDeleted = xa;
	});
	var Pd = i((jr) => {
		'use strict';
		Object.defineProperty(jr, '__esModule', { value: !0 });
		jr.StreamEntryUpdated = void 0;
		var dm = l(),
			Da = class extends dm.DomainEvent {};
		jr.StreamEntryUpdated = Da;
	});
	var Ur = i((Tr) => {
		'use strict';
		Object.defineProperty(Tr, '__esModule', { value: !0 });
		Tr.TeamEvent = void 0;
		var cm = l(),
			Ca = class extends cm.DomainEvent {};
		Tr.TeamEvent = Ca;
	});
	var Md = i((Rr) => {
		'use strict';
		Object.defineProperty(Rr, '__esModule', { value: !0 });
		Rr.TeamCreated = void 0;
		var pm = Ur(),
			wa = class extends pm.TeamEvent {};
		Rr.TeamCreated = wa;
	});
	var xd = i((Fr) => {
		'use strict';
		Object.defineProperty(Fr, '__esModule', { value: !0 });
		Fr.TeamDeleted = void 0;
		var vm = l(),
			Oa = class extends vm.DomainEvent {};
		Fr.TeamDeleted = Oa;
	});
	var Dd = i((Ar) => {
		'use strict';
		Object.defineProperty(Ar, '__esModule', { value: !0 });
		Ar.TeamFollowed = void 0;
		var fm = I(),
			La = class extends fm.EntityFollowedEvent {};
		Ar.TeamFollowed = La;
	});
	var Cd = i((Wr) => {
		'use strict';
		Object.defineProperty(Wr, '__esModule', { value: !0 });
		Wr.TeamSeasonCreated = void 0;
		var mm = l(),
			Sa = class extends mm.DomainEvent {};
		Wr.TeamSeasonCreated = Sa;
	});
	var wd = i((Ir) => {
		'use strict';
		Object.defineProperty(Ir, '__esModule', { value: !0 });
		Ir.TeamSeasonDeleted = void 0;
		var bm = l(),
			qa = class extends bm.DomainEvent {};
		Ir.TeamSeasonDeleted = qa;
	});
	var Od = i((kr) => {
		'use strict';
		Object.defineProperty(kr, '__esModule', { value: !0 });
		kr.TeamSeasonImageUpdated = void 0;
		var Em = l(),
			ja = class extends Em.DomainEvent {};
		kr.TeamSeasonImageUpdated = ja;
	});
	var Ld = i((Nr) => {
		'use strict';
		Object.defineProperty(Nr, '__esModule', { value: !0 });
		Nr.TeamSeasonUpdated = void 0;
		var _m = l(),
			Ta = class extends _m.DomainEvent {};
		Nr.TeamSeasonUpdated = Ta;
	});
	var Sd = i((Hr) => {
		'use strict';
		Object.defineProperty(Hr, '__esModule', { value: !0 });
		Hr.TeamSeasonsExportAvailable = void 0;
		var hm = M(),
			Ua = class extends hm.EntityExportAvailableEvent {};
		Hr.TeamSeasonsExportAvailable = Ua;
	});
	var qd = i(($r) => {
		'use strict';
		Object.defineProperty($r, '__esModule', { value: !0 });
		$r.TeamSeasonsExportRequested = void 0;
		var ym = l(),
			Ra = class extends ym.DomainEvent {};
		$r.TeamSeasonsExportRequested = Ra;
	});
	var jd = i((Vr) => {
		'use strict';
		Object.defineProperty(Vr, '__esModule', { value: !0 });
		Vr.TeamUnfollowed = void 0;
		var gm = k(),
			Fa = class extends gm.EntityUnfollowedEvent {};
		Vr.TeamUnfollowed = Fa;
	});
	var Td = i((Gr) => {
		'use strict';
		Object.defineProperty(Gr, '__esModule', { value: !0 });
		Gr.TeamUpdated = void 0;
		var Pm = Ur(),
			Aa = class extends Pm.TeamEvent {};
		Gr.TeamUpdated = Aa;
	});
	var Ud = i((Br) => {
		'use strict';
		Object.defineProperty(Br, '__esModule', { value: !0 });
		Br.TeamsExportAvailable = void 0;
		var Mm = M(),
			Wa = class extends Mm.EntityExportAvailableEvent {};
		Br.TeamsExportAvailable = Wa;
	});
	var Rd = i((zr) => {
		'use strict';
		Object.defineProperty(zr, '__esModule', { value: !0 });
		zr.TeamsExportRequested = void 0;
		var xm = l(),
			Ia = class extends xm.DomainEvent {};
		zr.TeamsExportRequested = Ia;
	});
	var Fd = i((Yr) => {
		'use strict';
		Object.defineProperty(Yr, '__esModule', { value: !0 });
		Yr.TopElevenCreated = void 0;
		var Dm = l(),
			ka = class extends Dm.DomainEvent {};
		Yr.TopElevenCreated = ka;
	});
	var Ad = i((Zr) => {
		'use strict';
		Object.defineProperty(Zr, '__esModule', { value: !0 });
		Zr.TopElevenDeleted = void 0;
		var Cm = l(),
			Na = class extends Cm.DomainEvent {};
		Zr.TopElevenDeleted = Na;
	});
	var Wd = i((Kr) => {
		'use strict';
		Object.defineProperty(Kr, '__esModule', { value: !0 });
		Kr.TopElevenUpdated = void 0;
		var wm = l(),
			Ha = class extends wm.DomainEvent {};
		Kr.TopElevenUpdated = Ha;
	});
	var Id = i((Jr) => {
		'use strict';
		Object.defineProperty(Jr, '__esModule', { value: !0 });
		Jr.TopElevensExportAvailable = void 0;
		var Om = M(),
			$a = class extends Om.EntityExportAvailableEvent {};
		Jr.TopElevensExportAvailable = $a;
	});
	var kd = i((Qr) => {
		'use strict';
		Object.defineProperty(Qr, '__esModule', { value: !0 });
		Qr.TopElevensExportRequested = void 0;
		var Lm = l(),
			Va = class extends Lm.DomainEvent {};
		Qr.TopElevensExportRequested = Va;
	});
	var J = i((Xr) => {
		'use strict';
		Object.defineProperty(Xr, '__esModule', { value: !0 });
		Xr.UserEvent = void 0;
		var Sm = l(),
			Ga = class extends Sm.DomainEvent {};
		Xr.UserEvent = Ga;
	});
	var Nd = i((en) => {
		'use strict';
		Object.defineProperty(en, '__esModule', { value: !0 });
		en.UserCreated = void 0;
		var qm = J(),
			Ba = class extends qm.UserEvent {};
		en.UserCreated = Ba;
	});
	var Hd = i((tn) => {
		'use strict';
		Object.defineProperty(tn, '__esModule', { value: !0 });
		tn.UserExportAvailable = void 0;
		var jm = M(),
			za = class extends jm.EntityExportAvailableEvent {};
		tn.UserExportAvailable = za;
	});
	var $d = i((rn) => {
		'use strict';
		Object.defineProperty(rn, '__esModule', { value: !0 });
		rn.UserExportRequested = void 0;
		var Tm = l(),
			Ya = class extends Tm.DomainEvent {};
		rn.UserExportRequested = Ya;
	});
	var Vd = i((nn) => {
		'use strict';
		Object.defineProperty(nn, '__esModule', { value: !0 });
		nn.UserFlaggedAsActive = void 0;
		var Um = J(),
			Za = class extends Um.UserEvent {};
		nn.UserFlaggedAsActive = Za;
	});
	var Gd = i((on) => {
		'use strict';
		Object.defineProperty(on, '__esModule', { value: !0 });
		on.UserFlaggedAsInactive = void 0;
		var Rm = J(),
			Ka = class extends Rm.UserEvent {};
		on.UserFlaggedAsInactive = Ka;
	});
	var Bd = i((an) => {
		'use strict';
		Object.defineProperty(an, '__esModule', { value: !0 });
		an.UserFollowsExportAvailable = void 0;
		var Fm = M(),
			Ja = class extends Fm.EntityExportAvailableEvent {};
		an.UserFollowsExportAvailable = Ja;
	});
	var zd = i((sn) => {
		'use strict';
		Object.defineProperty(sn, '__esModule', { value: !0 });
		sn.UserFollowsExportRequested = void 0;
		var Am = l(),
			Qa = class extends Am.DomainEvent {};
		sn.UserFollowsExportRequested = Qa;
	});
	var Yd = i((un) => {
		'use strict';
		Object.defineProperty(un, '__esModule', { value: !0 });
		un.UserSoftDeleted = void 0;
		var Wm = l(),
			Xa = class extends Wm.DomainEvent {};
		un.UserSoftDeleted = Xa;
	});
	var ts = i((ln) => {
		'use strict';
		Object.defineProperty(ln, '__esModule', { value: !0 });
		ln.VideoEvent = void 0;
		var Im = l(),
			es = class extends Im.DomainEvent {};
		ln.VideoEvent = es;
	});
	var Zd = i((dn) => {
		'use strict';
		Object.defineProperty(dn, '__esModule', { value: !0 });
		dn.VideoCreated = void 0;
		var km = ts(),
			rs = class extends km.VideoEvent {};
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
		var Nm = uu();
		Object.defineProperty(t, 'ClubCreated', {
			enumerable: !0,
			get: function () {
				return Nm.ClubCreated;
			},
		});
		var Hm = lu();
		Object.defineProperty(t, 'ClubDeleted', {
			enumerable: !0,
			get: function () {
				return Hm.ClubDeleted;
			},
		});
		var $m = du();
		Object.defineProperty(t, 'ClubUpdated', {
			enumerable: !0,
			get: function () {
				return $m.ClubUpdated;
			},
		});
		var Vm = cu();
		Object.defineProperty(t, 'ClubsExportAvailable', {
			enumerable: !0,
			get: function () {
				return Vm.ClubsExportAvailable;
			},
		});
		var Gm = pu();
		Object.defineProperty(t, 'ClubsExportRequested', {
			enumerable: !0,
			get: function () {
				return Gm.ClubsExportRequested;
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
		var Bm = mu();
		Object.defineProperty(t, 'CompetitionCreated', {
			enumerable: !0,
			get: function () {
				return Bm.CompetitionCreated;
			},
		});
		var zm = bu();
		Object.defineProperty(t, 'CompetitionDeleted', {
			enumerable: !0,
			get: function () {
				return zm.CompetitionDeleted;
			},
		});
		var Ym = Z();
		Object.defineProperty(t, 'CompetitionEvent', {
			enumerable: !0,
			get: function () {
				return Ym.CompetitionEvent;
			},
		});
		var Zm = Eu();
		Object.defineProperty(t, 'CompetitionFollowed', {
			enumerable: !0,
			get: function () {
				return Zm.CompetitionFollowed;
			},
		});
		var Km = _u();
		Object.defineProperty(t, 'CompetitionImageUpdated', {
			enumerable: !0,
			get: function () {
				return Km.CompetitionImageUpdated;
			},
		});
		var Jm = hu();
		Object.defineProperty(t, 'CompetitionSeasonActivated', {
			enumerable: !0,
			get: function () {
				return Jm.CompetitionSeasonActivated;
			},
		});
		var Qm = yu();
		Object.defineProperty(t, 'CompetitionSeasonCreated', {
			enumerable: !0,
			get: function () {
				return Qm.CompetitionSeasonCreated;
			},
		});
		var Xm = gu();
		Object.defineProperty(t, 'CompetitionSeasonDeactivated', {
			enumerable: !0,
			get: function () {
				return Xm.CompetitionSeasonDeactivated;
			},
		});
		var e1 = Pu();
		Object.defineProperty(t, 'CompetitionSeasonDeleted', {
			enumerable: !0,
			get: function () {
				return e1.CompetitionSeasonDeleted;
			},
		});
		var t1 = Mu();
		Object.defineProperty(t, 'CompetitionSeasonFormStandingsTeasered', {
			enumerable: !0,
			get: function () {
				return t1.CompetitionSeasonFormStandingsTeasered;
			},
		});
		var r1 = xu();
		Object.defineProperty(t, 'CompetitionSeasonTopScorersCreated', {
			enumerable: !0,
			get: function () {
				return r1.CompetitionSeasonTopScorersCreated;
			},
		});
		var n1 = Du();
		Object.defineProperty(t, 'CompetitionSeasonTopScorersDeleted', {
			enumerable: !0,
			get: function () {
				return n1.CompetitionSeasonTopScorersDeleted;
			},
		});
		var o1 = Cu();
		Object.defineProperty(t, 'CompetitionSeasonUpdated', {
			enumerable: !0,
			get: function () {
				return o1.CompetitionSeasonUpdated;
			},
		});
		var i1 = wu();
		Object.defineProperty(t, 'CompetitionSeasonsExportAvailable', {
			enumerable: !0,
			get: function () {
				return i1.CompetitionSeasonsExportAvailable;
			},
		});
		var a1 = Ou();
		Object.defineProperty(t, 'CompetitionSeasonsExportRequested', {
			enumerable: !0,
			get: function () {
				return a1.CompetitionSeasonsExportRequested;
			},
		});
		var s1 = Lu();
		Object.defineProperty(t, 'CompetitionUnfollowed', {
			enumerable: !0,
			get: function () {
				return s1.CompetitionUnfollowed;
			},
		});
		var u1 = Su();
		Object.defineProperty(t, 'CompetitionUpdated', {
			enumerable: !0,
			get: function () {
				return u1.CompetitionUpdated;
			},
		});
		var l1 = qu();
		Object.defineProperty(t, 'CupTeamSeasonCreated', {
			enumerable: !0,
			get: function () {
				return l1.CupTeamSeasonCreated;
			},
		});
		var d1 = ju();
		Object.defineProperty(t, 'CupTeamSeasonDeleted', {
			enumerable: !0,
			get: function () {
				return d1.CupTeamSeasonDeleted;
			},
		});
		var c1 = Tu();
		Object.defineProperty(t, 'CupTeamSeasonsExportAvailable', {
			enumerable: !0,
			get: function () {
				return c1.CupTeamSeasonsExportAvailable;
			},
		});
		var p1 = Uu();
		Object.defineProperty(t, 'CupTeamSeasonsExportRequested', {
			enumerable: !0,
			get: function () {
				return p1.CupTeamSeasonsExportRequested;
			},
		});
		var v1 = Ru();
		Object.defineProperty(t, 'DistrictCreated', {
			enumerable: !0,
			get: function () {
				return v1.DistrictCreated;
			},
		});
		var f1 = Fu();
		Object.defineProperty(t, 'DistrictDeleted', {
			enumerable: !0,
			get: function () {
				return f1.DistrictDeleted;
			},
		});
		var m1 = Au();
		Object.defineProperty(t, 'DistrictUpdated', {
			enumerable: !0,
			get: function () {
				return m1.DistrictUpdated;
			},
		});
		var b1 = l();
		Object.defineProperty(t, 'DomainEvent', {
			enumerable: !0,
			get: function () {
				return b1.DomainEvent;
			},
		});
		var E1 = K();
		Object.defineProperty(t, 'EntitiesForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return E1.EntitiesForDistrictRequested;
			},
		});
		var _1 = M();
		Object.defineProperty(t, 'EntityExportAvailableEvent', {
			enumerable: !0,
			get: function () {
				return _1.EntityExportAvailableEvent;
			},
		});
		var h1 = I();
		Object.defineProperty(t, 'EntityFollowedEvent', {
			enumerable: !0,
			get: function () {
				return h1.EntityFollowedEvent;
			},
		});
		var y1 = k();
		Object.defineProperty(t, 'EntityUnfollowedEvent', {
			enumerable: !0,
			get: function () {
				return y1.EntityUnfollowedEvent;
			},
		});
		var g1 = Wu();
		Object.defineProperty(t, 'FollowableTopicDeleted', {
			enumerable: !0,
			get: function () {
				return g1.FollowableTopicDeleted;
			},
		});
		var P1 = Iu();
		Object.defineProperty(t, 'GalleriesForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return P1.GalleriesForDistrictRequested;
			},
		});
		var M1 = ku();
		Object.defineProperty(t, 'GalleryDeleted', {
			enumerable: !0,
			get: function () {
				return M1.GalleryDeleted;
			},
		});
		var x1 = Nu();
		Object.defineProperty(t, 'GalleryUpdated', {
			enumerable: !0,
			get: function () {
				return x1.GalleryUpdated;
			},
		});
		var D1 = Hu();
		Object.defineProperty(t, 'ImageCreated', {
			enumerable: !0,
			get: function () {
				return D1.ImageCreated;
			},
		});
		var C1 = $u();
		Object.defineProperty(t, 'ImageDeleted', {
			enumerable: !0,
			get: function () {
				return C1.ImageDeleted;
			},
		});
		var w1 = Vu();
		Object.defineProperty(t, 'ImagesUploaded', {
			enumerable: !0,
			get: function () {
				return w1.ImagesUploaded;
			},
		});
		var O1 = Gu();
		Object.defineProperty(t, 'ImportBatchUploaded', {
			enumerable: !0,
			get: function () {
				return O1.ImportBatchUploaded;
			},
		});
		var L1 = Bu();
		Object.defineProperty(t, 'LiveTickerMatchResultUpdated', {
			enumerable: !0,
			get: function () {
				return L1.LiveTickerMatchResultUpdated;
			},
		});
		var S1 = zu();
		Object.defineProperty(t, 'LiveTickerPremiumAwardReceived', {
			enumerable: !0,
			get: function () {
				return S1.LiveTickerPremiumAwardReceived;
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
		var q1 = Ku();
		Object.defineProperty(t, 'MatchCreated', {
			enumerable: !0,
			get: function () {
				return q1.MatchCreated;
			},
		});
		var j1 = Ju();
		Object.defineProperty(t, 'MatchDeleted', {
			enumerable: !0,
			get: function () {
				return j1.MatchDeleted;
			},
		});
		var T1 = Qu();
		Object.defineProperty(t, 'MatchDistrictRelationCreated', {
			enumerable: !0,
			get: function () {
				return T1.MatchDistrictRelationCreated;
			},
		});
		var U1 = Xu();
		Object.defineProperty(t, 'MatchDistrictRelationDeleted', {
			enumerable: !0,
			get: function () {
				return U1.MatchDistrictRelationDeleted;
			},
		});
		var R1 = nt();
		Object.defineProperty(t, 'MatchDistrictRelationEvent', {
			enumerable: !0,
			get: function () {
				return R1.MatchDistrictRelationEvent;
			},
		});
		var F1 = el();
		Object.defineProperty(t, 'MatchEventChance', {
			enumerable: !0,
			get: function () {
				return F1.MatchEventChance;
			},
		});
		var A1 = tl();
		Object.defineProperty(t, 'MatchEventDeleted', {
			enumerable: !0,
			get: function () {
				return A1.MatchEventDeleted;
			},
		});
		var W1 = rl();
		Object.defineProperty(t, 'MatchEventGoalDenied', {
			enumerable: !0,
			get: function () {
				return W1.MatchEventGoalDenied;
			},
		});
		var I1 = nl();
		Object.defineProperty(t, 'MatchEventGoal', {
			enumerable: !0,
			get: function () {
				return I1.MatchEventGoal;
			},
		});
		var k1 = ol();
		Object.defineProperty(t, 'MatchEventInterimResult', {
			enumerable: !0,
			get: function () {
				return k1.MatchEventInterimResult;
			},
		});
		var N1 = il();
		Object.defineProperty(t, 'MatchEventLineupsCompleted', {
			enumerable: !0,
			get: function () {
				return N1.MatchEventLineupsCompleted;
			},
		});
		var H1 = al();
		Object.defineProperty(t, 'MatchEventOwnGoal', {
			enumerable: !0,
			get: function () {
				return H1.MatchEventOwnGoal;
			},
		});
		var $1 = sl();
		Object.defineProperty(t, 'MatchEventPenaltyFail', {
			enumerable: !0,
			get: function () {
				return $1.MatchEventPenaltyFail;
			},
		});
		var V1 = ul();
		Object.defineProperty(t, 'MatchEventRedCard', {
			enumerable: !0,
			get: function () {
				return V1.MatchEventRedCard;
			},
		});
		var G1 = ll();
		Object.defineProperty(t, 'MatchEventTimePenalty', {
			enumerable: !0,
			get: function () {
				return G1.MatchEventTimePenalty;
			},
		});
		var B1 = dl();
		Object.defineProperty(t, 'MatchEventUpdated', {
			enumerable: !0,
			get: function () {
				return B1.MatchEventUpdated;
			},
		});
		var z1 = cl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStartFirstHalftime', {
			enumerable: !0,
			get: function () {
				return z1.MatchEventWhistleOvertimeStartFirstHalftime;
			},
		});
		var Y1 = pl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStartSecondHalftime', {
			enumerable: !0,
			get: function () {
				return Y1.MatchEventWhistleOvertimeStartSecondHalftime;
			},
		});
		var Z1 = vl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStopFirstHalftime', {
			enumerable: !0,
			get: function () {
				return Z1.MatchEventWhistleOvertimeStopFirstHalftime;
			},
		});
		var K1 = fl();
		Object.defineProperty(t, 'MatchEventWhistleOvertimeStopSecondHalftime', {
			enumerable: !0,
			get: function () {
				return K1.MatchEventWhistleOvertimeStopSecondHalftime;
			},
		});
		var J1 = ml();
		Object.defineProperty(t, 'MatchEventWhistlePenaltyShootoutStart', {
			enumerable: !0,
			get: function () {
				return J1.MatchEventWhistlePenaltyShootoutStart;
			},
		});
		var Q1 = bl();
		Object.defineProperty(t, 'MatchEventWhistlePenaltyShootoutStop', {
			enumerable: !0,
			get: function () {
				return Q1.MatchEventWhistlePenaltyShootoutStop;
			},
		});
		var X1 = El();
		Object.defineProperty(t, 'MatchEventWhistleRegularStartFirstHalftime', {
			enumerable: !0,
			get: function () {
				return X1.MatchEventWhistleRegularStartFirstHalftime;
			},
		});
		var eb = _l();
		Object.defineProperty(t, 'MatchEventWhistleRegularStartSecondHalftime', {
			enumerable: !0,
			get: function () {
				return eb.MatchEventWhistleRegularStartSecondHalftime;
			},
		});
		var tb = hl();
		Object.defineProperty(t, 'MatchEventWhistleRegularStopFirstHalftime', {
			enumerable: !0,
			get: function () {
				return tb.MatchEventWhistleRegularStopFirstHalftime;
			},
		});
		var rb = yl();
		Object.defineProperty(t, 'MatchEventWhistleRegularStopSecondHalftime', {
			enumerable: !0,
			get: function () {
				return rb.MatchEventWhistleRegularStopSecondHalftime;
			},
		});
		var nb = gl();
		Object.defineProperty(t, 'MatchEventYellowCard', {
			enumerable: !0,
			get: function () {
				return nb.MatchEventYellowCard;
			},
		});
		var ob = Pl();
		Object.defineProperty(t, 'MatchEventYellowRedCard', {
			enumerable: !0,
			get: function () {
				return ob.MatchEventYellowRedCard;
			},
		});
		var ib = Ml();
		Object.defineProperty(t, 'MatchFollowed', {
			enumerable: !0,
			get: function () {
				return ib.MatchFollowed;
			},
		});
		var ab = xl();
		Object.defineProperty(t, 'MatchGalleryRemoved', {
			enumerable: !0,
			get: function () {
				return ab.MatchGalleryRemoved;
			},
		});
		var sb = Dl();
		Object.defineProperty(t, 'MatchGalleryUploaded', {
			enumerable: !0,
			get: function () {
				return sb.MatchGalleryUploaded;
			},
		});
		var ub = Cl();
		Object.defineProperty(t, 'MatchPlaylistDeleted', {
			enumerable: !0,
			get: function () {
				return ub.MatchPlaylistDeleted;
			},
		});
		var lb = wl();
		Object.defineProperty(t, 'MatchPlaylistUpdated', {
			enumerable: !0,
			get: function () {
				return lb.MatchPlaylistUpdated;
			},
		});
		var db = Ol();
		Object.defineProperty(t, 'MatchPlaylistUploaded', {
			enumerable: !0,
			get: function () {
				return db.MatchPlaylistUploaded;
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
		var cb = Sl();
		Object.defineProperty(t, 'MatchInterimResultSaved', {
			enumerable: !0,
			get: function () {
				return cb.MatchInterimResultSaved;
			},
		});
		var pb = ql();
		Object.defineProperty(t, 'MatchResultReset', {
			enumerable: !0,
			get: function () {
				return pb.MatchResultReset;
			},
		});
		var vb = jl();
		Object.defineProperty(t, 'MatchShifted', {
			enumerable: !0,
			get: function () {
				return vb.MatchShifted;
			},
		});
		var fb = Tl();
		Object.defineProperty(t, 'MatchStarted', {
			enumerable: !0,
			get: function () {
				return fb.MatchStarted;
			},
		});
		var mb = Ul();
		Object.defineProperty(t, 'MatchUnfollowed', {
			enumerable: !0,
			get: function () {
				return mb.MatchUnfollowed;
			},
		});
		var bb = Rl();
		Object.defineProperty(t, 'MatchUpdated', {
			enumerable: !0,
			get: function () {
				return bb.MatchUpdated;
			},
		});
		var Eb = Fl();
		Object.defineProperty(t, 'MatchVideoElementCreated', {
			enumerable: !0,
			get: function () {
				return Eb.MatchVideoElementCreated;
			},
		});
		var _b = Al();
		Object.defineProperty(t, 'MatchVideoEmbeddingCreated', {
			enumerable: !0,
			get: function () {
				return _b.MatchVideoEmbeddingCreated;
			},
		});
		var hb = Wl();
		Object.defineProperty(t, 'MatchVideoEmbeddingDeleted', {
			enumerable: !0,
			get: function () {
				return hb.MatchVideoEmbeddingDeleted;
			},
		});
		var yb = Vt();
		Object.defineProperty(t, 'MatchVideoEmbeddingEvent', {
			enumerable: !0,
			get: function () {
				return yb.MatchVideoEmbeddingEvent;
			},
		});
		var gb = Il();
		Object.defineProperty(t, 'MatchesExportAvailable', {
			enumerable: !0,
			get: function () {
				return gb.MatchesExportAvailable;
			},
		});
		var Pb = kl();
		Object.defineProperty(t, 'MatchesExportRequested', {
			enumerable: !0,
			get: function () {
				return Pb.MatchesExportRequested;
			},
		});
		var Mb = Nl();
		Object.defineProperty(t, 'NewsDeleted', {
			enumerable: !0,
			get: function () {
				return Mb.NewsDeleted;
			},
		});
		var xb = Hl();
		Object.defineProperty(t, 'NewsExportAvailable', {
			enumerable: !0,
			get: function () {
				return xb.NewsExportAvailable;
			},
		});
		var Db = $l();
		Object.defineProperty(t, 'NewsExportRequested', {
			enumerable: !0,
			get: function () {
				return Db.NewsExportRequested;
			},
		});
		var Cb = Vl();
		Object.defineProperty(t, 'NewsForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return Cb.NewsForDistrictRequested;
			},
		});
		var wb = Gl();
		Object.defineProperty(t, 'NewsImageUpdated', {
			enumerable: !0,
			get: function () {
				return wb.NewsImageUpdated;
			},
		});
		var Ob = Bl();
		Object.defineProperty(t, 'NewsPublished', {
			enumerable: !0,
			get: function () {
				return Ob.NewsPublished;
			},
		});
		var Lb = zl();
		Object.defineProperty(t, 'NewsSlugRenamed', {
			enumerable: !0,
			get: function () {
				return Lb.NewsSlugRenamed;
			},
		});
		var Sb = Yl();
		Object.defineProperty(t, 'NewsUnpublished', {
			enumerable: !0,
			get: function () {
				return Sb.NewsUnpublished;
			},
		});
		var qb = Zl();
		Object.defineProperty(t, 'NewsUpdated', {
			enumerable: !0,
			get: function () {
				return qb.NewsUpdated;
			},
		});
		var jb = Kl();
		Object.defineProperty(t, 'PowerRankingCreated', {
			enumerable: !0,
			get: function () {
				return jb.PowerRankingCreated;
			},
		});
		var Tb = Jl();
		Object.defineProperty(t, 'PowerRankingDeleted', {
			enumerable: !0,
			get: function () {
				return Tb.PowerRankingDeleted;
			},
		});
		var Ub = Ql();
		Object.defineProperty(t, 'PowerRankingUpdated', {
			enumerable: !0,
			get: function () {
				return Ub.PowerRankingUpdated;
			},
		});
		var Rb = Xl();
		Object.defineProperty(t, 'ProfileCreated', {
			enumerable: !0,
			get: function () {
				return Rb.ProfileCreated;
			},
		});
		var Fb = ed();
		Object.defineProperty(t, 'ProfileDeleted', {
			enumerable: !0,
			get: function () {
				return Fb.ProfileDeleted;
			},
		});
		var Ab = td();
		Object.defineProperty(t, 'ProfileFollowed', {
			enumerable: !0,
			get: function () {
				return Ab.ProfileFollowed;
			},
		});
		var Wb = rd();
		Object.defineProperty(t, 'ProfileImageUpdated', {
			enumerable: !0,
			get: function () {
				return Wb.ProfileImageUpdated;
			},
		});
		var Ib = nd();
		Object.defineProperty(t, 'ProfileInjured', {
			enumerable: !0,
			get: function () {
				return Ib.ProfileInjured;
			},
		});
		var kb = od();
		Object.defineProperty(t, 'ProfileSeasonBanCreated', {
			enumerable: !0,
			get: function () {
				return kb.ProfileSeasonBanCreated;
			},
		});
		var Nb = id();
		Object.defineProperty(t, 'ProfileSeasonBanDeleted', {
			enumerable: !0,
			get: function () {
				return Nb.ProfileSeasonBanDeleted;
			},
		});
		var Hb = ad();
		Object.defineProperty(t, 'ProfileSeasonBanUpdated', {
			enumerable: !0,
			get: function () {
				return Hb.ProfileSeasonBanUpdated;
			},
		});
		var $b = sd();
		Object.defineProperty(t, 'ProfileSeasonInjuryDeleted', {
			enumerable: !0,
			get: function () {
				return $b.ProfileSeasonInjuryDeleted;
			},
		});
		var Vb = ud();
		Object.defineProperty(t, 'ProfileSeasonInjuryUpdated', {
			enumerable: !0,
			get: function () {
				return Vb.ProfileSeasonInjuryUpdated;
			},
		});
		var Gb = ld();
		Object.defineProperty(t, 'ProfileTransferCreated', {
			enumerable: !0,
			get: function () {
				return Gb.ProfileTransferCreated;
			},
		});
		var Bb = dd();
		Object.defineProperty(t, 'ProfileTransferDeleted', {
			enumerable: !0,
			get: function () {
				return Bb.ProfileTransferDeleted;
			},
		});
		var zb = cd();
		Object.defineProperty(t, 'ProfileTransferUpdated', {
			enumerable: !0,
			get: function () {
				return zb.ProfileTransferUpdated;
			},
		});
		var Yb = pd();
		Object.defineProperty(t, 'ProfileTransfersForDistrictRequested', {
			enumerable: !0,
			get: function () {
				return Yb.ProfileTransfersForDistrictRequested;
			},
		});
		var Zb = vd();
		Object.defineProperty(t, 'ProfileUnfollowed', {
			enumerable: !0,
			get: function () {
				return Zb.ProfileUnfollowed;
			},
		});
		var Kb = fd();
		Object.defineProperty(t, 'ProfileUpdated', {
			enumerable: !0,
			get: function () {
				return Kb.ProfileUpdated;
			},
		});
		var Jb = md();
		Object.defineProperty(t, 'PushNotificationSubmitted', {
			enumerable: !0,
			get: function () {
				return Jb.PushNotificationSubmitted;
			},
		});
		var Qb = _a();
		Object.defineProperty(t, 'RoundEvent', {
			enumerable: !0,
			get: function () {
				return Qb.RoundEvent;
			},
		});
		var Xb = bd();
		Object.defineProperty(t, 'RoundUpdated', {
			enumerable: !0,
			get: function () {
				return Xb.RoundUpdated;
			},
		});
		var eE = Ed();
		Object.defineProperty(t, 'SeasonCreated', {
			enumerable: !0,
			get: function () {
				return eE.SeasonCreated;
			},
		});
		var tE = _d();
		Object.defineProperty(t, 'SeasonDeleted', {
			enumerable: !0,
			get: function () {
				return tE.SeasonDeleted;
			},
		});
		var rE = hd();
		Object.defineProperty(t, 'SeasonUpdated', {
			enumerable: !0,
			get: function () {
				return rE.SeasonUpdated;
			},
		});
		var nE = zi();
		Object.defineProperty(t, 'SlugRenamed', {
			enumerable: !0,
			get: function () {
				return nE.SlugRenamed;
			},
		});
		var oE = yd();
		Object.defineProperty(t, 'StreamEntryCreated', {
			enumerable: !0,
			get: function () {
				return oE.StreamEntryCreated;
			},
		});
		var iE = gd();
		Object.defineProperty(t, 'StreamEntryDeleted', {
			enumerable: !0,
			get: function () {
				return iE.StreamEntryDeleted;
			},
		});
		var aE = Pd();
		Object.defineProperty(t, 'StreamEntryUpdated', {
			enumerable: !0,
			get: function () {
				return aE.StreamEntryUpdated;
			},
		});
		var sE = Md();
		Object.defineProperty(t, 'TeamCreated', {
			enumerable: !0,
			get: function () {
				return sE.TeamCreated;
			},
		});
		var uE = xd();
		Object.defineProperty(t, 'TeamDeleted', {
			enumerable: !0,
			get: function () {
				return uE.TeamDeleted;
			},
		});
		var lE = Ur();
		Object.defineProperty(t, 'TeamEvent', {
			enumerable: !0,
			get: function () {
				return lE.TeamEvent;
			},
		});
		var dE = Dd();
		Object.defineProperty(t, 'TeamFollowed', {
			enumerable: !0,
			get: function () {
				return dE.TeamFollowed;
			},
		});
		var cE = Cd();
		Object.defineProperty(t, 'TeamSeasonCreated', {
			enumerable: !0,
			get: function () {
				return cE.TeamSeasonCreated;
			},
		});
		var pE = wd();
		Object.defineProperty(t, 'TeamSeasonDeleted', {
			enumerable: !0,
			get: function () {
				return pE.TeamSeasonDeleted;
			},
		});
		var vE = Od();
		Object.defineProperty(t, 'TeamSeasonImageUpdated', {
			enumerable: !0,
			get: function () {
				return vE.TeamSeasonImageUpdated;
			},
		});
		var fE = Ld();
		Object.defineProperty(t, 'TeamSeasonUpdated', {
			enumerable: !0,
			get: function () {
				return fE.TeamSeasonUpdated;
			},
		});
		var mE = Sd();
		Object.defineProperty(t, 'TeamSeasonsExportAvailable', {
			enumerable: !0,
			get: function () {
				return mE.TeamSeasonsExportAvailable;
			},
		});
		var bE = qd();
		Object.defineProperty(t, 'TeamSeasonsExportRequested', {
			enumerable: !0,
			get: function () {
				return bE.TeamSeasonsExportRequested;
			},
		});
		var EE = jd();
		Object.defineProperty(t, 'TeamUnfollowed', {
			enumerable: !0,
			get: function () {
				return EE.TeamUnfollowed;
			},
		});
		var _E = Td();
		Object.defineProperty(t, 'TeamUpdated', {
			enumerable: !0,
			get: function () {
				return _E.TeamUpdated;
			},
		});
		var hE = Ud();
		Object.defineProperty(t, 'TeamsExportAvailable', {
			enumerable: !0,
			get: function () {
				return hE.TeamsExportAvailable;
			},
		});
		var yE = Rd();
		Object.defineProperty(t, 'TeamsExportRequested', {
			enumerable: !0,
			get: function () {
				return yE.TeamsExportRequested;
			},
		});
		var gE = Fd();
		Object.defineProperty(t, 'TopElevenCreated', {
			enumerable: !0,
			get: function () {
				return gE.TopElevenCreated;
			},
		});
		var PE = Ad();
		Object.defineProperty(t, 'TopElevenDeleted', {
			enumerable: !0,
			get: function () {
				return PE.TopElevenDeleted;
			},
		});
		var ME = Wd();
		Object.defineProperty(t, 'TopElevenUpdated', {
			enumerable: !0,
			get: function () {
				return ME.TopElevenUpdated;
			},
		});
		var xE = Id();
		Object.defineProperty(t, 'TopElevensExportAvailable', {
			enumerable: !0,
			get: function () {
				return xE.TopElevensExportAvailable;
			},
		});
		var DE = kd();
		Object.defineProperty(t, 'TopElevensExportRequested', {
			enumerable: !0,
			get: function () {
				return DE.TopElevensExportRequested;
			},
		});
		var CE = Nd();
		Object.defineProperty(t, 'UserCreated', {
			enumerable: !0,
			get: function () {
				return CE.UserCreated;
			},
		});
		var wE = J();
		Object.defineProperty(t, 'UserEvent', {
			enumerable: !0,
			get: function () {
				return wE.UserEvent;
			},
		});
		var OE = Hd();
		Object.defineProperty(t, 'UserExportAvailable', {
			enumerable: !0,
			get: function () {
				return OE.UserExportAvailable;
			},
		});
		var LE = $d();
		Object.defineProperty(t, 'UserExportRequested', {
			enumerable: !0,
			get: function () {
				return LE.UserExportRequested;
			},
		});
		var SE = Vd();
		Object.defineProperty(t, 'UserFlaggedAsActive', {
			enumerable: !0,
			get: function () {
				return SE.UserFlaggedAsActive;
			},
		});
		var qE = Gd();
		Object.defineProperty(t, 'UserFlaggedAsInactive', {
			enumerable: !0,
			get: function () {
				return qE.UserFlaggedAsInactive;
			},
		});
		var jE = Bd();
		Object.defineProperty(t, 'UserFollowsExportAvailable', {
			enumerable: !0,
			get: function () {
				return jE.UserFollowsExportAvailable;
			},
		});
		var TE = zd();
		Object.defineProperty(t, 'UserFollowsExportRequested', {
			enumerable: !0,
			get: function () {
				return TE.UserFollowsExportRequested;
			},
		});
		var UE = Yd();
		Object.defineProperty(t, 'UserSoftDeleted', {
			enumerable: !0,
			get: function () {
				return UE.UserSoftDeleted;
			},
		});
		var RE = Zd();
		Object.defineProperty(t, 'VideoCreated', {
			enumerable: !0,
			get: function () {
				return RE.VideoCreated;
			},
		});
		var FE = ts();
		Object.defineProperty(t, 'VideoEvent', {
			enumerable: !0,
			get: function () {
				return FE.VideoEvent;
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
		var AE = ps(),
			Es = class extends AE.ShortUser {
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
		var WE = rc();
		Object.defineProperty(m, 'Coach', {
			enumerable: !0,
			get: function () {
				return WE.Coach;
			},
		});
		var IE = nc();
		Object.defineProperty(m, 'CompetitionSeasonTopScorers', {
			enumerable: !0,
			get: function () {
				return IE.CompetitionSeasonTopScorers;
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
		var kE = ic();
		Object.defineProperty(m, 'MatchPlaylist', {
			enumerable: !0,
			get: function () {
				return kE.MatchPlaylist;
			},
		});
		var NE = ac();
		Object.defineProperty(m, 'NewsCategory', {
			enumerable: !0,
			get: function () {
				return NE.NewsCategory;
			},
		});
		var HE = sc();
		Object.defineProperty(m, 'News', {
			enumerable: !0,
			get: function () {
				return HE.News;
			},
		});
		var $E = uc();
		Object.defineProperty(m, 'RequestUser', {
			enumerable: !0,
			get: function () {
				return $E.RequestUser;
			},
		});
		var VE = ps();
		Object.defineProperty(m, 'ShortUser', {
			enumerable: !0,
			get: function () {
				return VE.ShortUser;
			},
		});
		var GE = lc();
		Object.defineProperty(m, 'TeamEventData', {
			enumerable: !0,
			get: function () {
				return GE.TeamEventData;
			},
		});
		var BE = dc();
		Object.defineProperty(m, 'TeamSeason', {
			enumerable: !0,
			get: function () {
				return BE.TeamSeason;
			},
		});
		var zE = cc();
		Object.defineProperty(m, 'Team', {
			enumerable: !0,
			get: function () {
				return zE.Team;
			},
		});
		var YE = vc();
		Object.defineProperty(m, 'TopElevenType', {
			enumerable: !0,
			get: function () {
				return YE.TopElevenType;
			},
		});
		var ZE = fc();
		Object.defineProperty(m, 'UploadedImages', {
			enumerable: !0,
			get: function () {
				return ZE.UploadedImages;
			},
		});
		var KE = mc();
		Object.defineProperty(m, 'User', {
			enumerable: !0,
			get: function () {
				return KE.User;
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
			JE = hs(),
			Rn = class Rn {
				static imageTypeToEntityType(r) {
					if (r === JE.ImageType.Player) return Rc.EntityType.Profile;
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
		var QE = hc();
		Object.defineProperty(b, 'CompetitionCategoryType', {
			enumerable: !0,
			get: function () {
				return QE.CompetitionCategoryType;
			},
		});
		var XE = Cn();
		Object.defineProperty(b, 'EntityType', {
			enumerable: !0,
			get: function () {
				return XE.EntityType;
			},
		});
		var e_ = hs();
		Object.defineProperty(b, 'ImageType', {
			enumerable: !0,
			get: function () {
				return e_.ImageType;
			},
		});
		var t_ = Pc();
		Object.defineProperty(b, 'MatchEventSubType', {
			enumerable: !0,
			get: function () {
				return t_.MatchEventSubType;
			},
		});
		var r_ = xc();
		Object.defineProperty(b, 'MatchEventType', {
			enumerable: !0,
			get: function () {
				return r_.MatchEventType;
			},
		});
		var n_ = Cc();
		Object.defineProperty(b, 'MatchFlag', {
			enumerable: !0,
			get: function () {
				return n_.MatchFlag;
			},
		});
		var o_ = Oc();
		Object.defineProperty(b, 'MatchTeamSeasonOutcome', {
			enumerable: !0,
			get: function () {
				return o_.MatchTeamSeasonOutcome;
			},
		});
		var i_ = Sc();
		Object.defineProperty(b, 'ProfilePlayerSeasonFlag', {
			enumerable: !0,
			get: function () {
				return i_.ProfilePlayerSeasonFlag;
			},
		});
		var a_ = jc();
		Object.defineProperty(b, 'PushNotificationDeviceType', {
			enumerable: !0,
			get: function () {
				return a_.PushNotificationDeviceType;
			},
		});
		var s_ = Uc();
		Object.defineProperty(b, 'RoundType', {
			enumerable: !0,
			get: function () {
				return s_.RoundType;
			},
		});
		var u_ = Fc();
		Object.defineProperty(b, 'TypeMappings', {
			enumerable: !0,
			get: function () {
				return u_.TypeMappings;
			},
		});
		var l_ = Wc();
		Object.defineProperty(b, 'UserStatusType', {
			enumerable: !0,
			get: function () {
				return l_.UserStatusType;
			},
		});
		var d_ = kc();
		Object.defineProperty(b, 'VideoActionType', {
			enumerable: !0,
			get: function () {
				return d_.VideoActionType;
			},
		});
		var c_ = Hc();
		Object.defineProperty(b, 'UserRole', {
			enumerable: !0,
			get: function () {
				return c_.UserRole;
			},
		});
		var p_ = Vc();
		Object.defineProperty(b, 'MatchTickerType', {
			enumerable: !0,
			get: function () {
				return p_.MatchTickerType;
			},
		});
	});
	var Bc = i((X) => {
		'use strict';
		Object.defineProperty(X, '__esModule', { value: !0 });
		var gs = (su(), Lp(au));
		gs.__exportStar(tc(), X);
		gs.__exportStar(Ec(), X);
		gs.__exportStar(Gc(), X);
	});
	var zc,
		G,
		Ps,
		Yc,
		v_,
		f_,
		m_,
		b_,
		E_,
		__,
		h_,
		Zc,
		Kc,
		Ms = g(() => {
			'use strict';
			T();
			z();
			L();
			Zn();
			Y();
			(zc = Op(Bc())),
				(G = ''.concat(v, 'widget-footer')),
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
				(v_ = (e) => /(testspiele|uebergangsliga|ohne-liga-teams)/.test(e)),
				(f_ = (e) => (e.names ? !e.clubSlug : !1)),
				(m_ = {
					team: (e) => f_(e),
					match: (e) => {
						var r;
						return v_((r = e.competition) == null ? void 0 : r.slug);
					},
				}),
				(b_ = (e, r) => {
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
				(E_ = (e, r) => {
					let n = b_(e, r),
						o = E('a', { href: n.url, target: '_blank' }),
						s = E('span', { class: Ps });
					return s.appendChild(C(''.concat(n.name, ' auf FuPa'))), o.appendChild(s), o;
				}),
				(__ = (e) => {
					let r = e.querySelector(':scope > blockquote');
					return r ? r.querySelector(':scope > a') : null;
				}),
				(h_ = (e) => {
					let r = e.querySelector(':scope > a');
					return r || __(e);
				}),
				(Zc = (e, r, n, o, s) => {
					let u = s ? h_(e) : E_(n, o);
					if ((m_[o](n) && (u = E('div', {})), !u))
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
	var y_,
		Qc,
		Xc = g(() => {
			'use strict';
			L();
			(y_ = (e, r) => {
				var p, _, y, h, P;
				let n = (p = r == null ? void 0 : r.width) != null ? p : '16',
					o = (_ = r == null ? void 0 : r.height) != null ? _ : '16',
					s = (y = r == null ? void 0 : r.viewBox) != null ? y : '0 0 24 24',
					u = (h = r == null ? void 0 : r.fill) != null ? h : 'currentColor',
					d = ''
						.concat(v, 'svg-icon ')
						.concat((P = r == null ? void 0 : r.classNames) != null ? P : ''),
					c = 'http://www.w3.org/2000/svg',
					f = document.createElementNS(c, 'svg');
				return (
					f.setAttribute('viewBox', s),
					f.setAttribute('width', n),
					f.setAttribute('height', o),
					f.setAttribute('fill', u),
					f.setAttribute('class', d),
					Object.entries(e).forEach((x) => {
						let D = x[0];
						x[1].forEach((S) => {
							let Os = document.createElementNS(c, D);
							Object.entries(S).forEach((Ls) => {
								let yp = Ls[0],
									gp = Ls[1];
								Os.setAttribute(yp, gp);
							}),
								f.appendChild(Os);
						});
					}),
					f
				);
			}),
				(Qc = y_);
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
		g_,
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
			(xs = ''.concat(v, 'widget-placeholder-message')),
				(g_ = (e = 'Widget wird geladen...') => {
					let r = E('div', {
							id: Bn,
							class: ''.concat(v, 'widget-placeholder-container'),
							style: w()
								? ''
								: 'box-sizing: border-box; width: 100%; min-height: 200px; display: flex; justify-content: center; align-items: center; flex-direction: column; background-color: inherit; padding: 32px 16px; color: #616672;',
						}),
						n = E('div', { class: ''.concat(v, 'animation-bounce') }),
						o = E('div', { class: ''.concat(v, 'animation-rotate') });
					o.appendChild(
						Qc(ep, { width: '24px', height: '24px', classNames: ''.concat(v, 'svg-football') }),
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
				(np = g_);
		});
	var ee,
		Cs,
		Hn,
		P_,
		M_,
		op,
		ip,
		ws = g(() => {
			'use strict';
			T();
			z();
			zn();
			L();
			Y();
			(ee = ''.concat(v, 'widget-tab')),
				(Cs = ''.concat(ee, 's')),
				(Hn = ''.concat(ee, '-active')),
				(P_ = (e, r, n) => {
					var c;
					let o = r.querySelector('.'.concat(ee, '.').concat(Hn));
					o && o.classList.remove(Hn), e.currentTarget.classList.add(Hn);
					let u = r.querySelector('#'.concat(q, '-').concat(n));
					if (u && u.children.length === 0) {
						let f = r.querySelector('#'.concat(R));
						if (f) {
							let p = f.clientHeight;
							f.setAttribute('style', 'min-height: '.concat(p, 'px;'));
						}
					}
					let d =
						(c = r.querySelector('.'.concat(R))) == null ? void 0 : c.getElementsByClassName(j)[0];
					d && d.classList.remove(j), u && u.classList.add(j);
				}),
				(M_ = (e, r, n) => {
					let o = E('div', { class: ''.concat(ee, ' ').concat(r === 0 ? Hn : '') }),
						s = E('div', { class: ''.concat(ee, '-label') });
					return (
						s.appendChild(C(Ts[e])),
						o.appendChild(s),
						o.addEventListener('click', (u) => P_(u, n, r)),
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
							let u = M_(o, s, r);
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
	var x_,
		D_,
		C_,
		w_,
		O_,
		L_,
		S_,
		q_,
		j_,
		T_,
		U_,
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
			(x_ = (e, r, n) => {
				if (!e) return;
				let o = E('link', {
					id: ''.concat(v).concat(n != null ? n : '', '-custom-css'),
					rel: 'stylesheet',
					type: 'text/css',
					media: 'all',
					href: 'https://widget-api.fupa.net/'.concat(e),
				});
				r ? r.appendChild(o) : document.head.appendChild(o);
			}),
				(D_ = (e) => {
					let n = ('host' in e ? e.host : e).getBoundingClientRect(),
						o = { y: window.innerHeight, x: window.innerWidth },
						s = { y: o.y / 2, x: o.x / 4 };
					return n.top < o.y + window.scrollY + s.y && n.left < o.x + window.scrollX + s.x;
				}),
				(C_ = (e, r) => {
					if (D_(r)) e();
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
				(w_ = (e, r) => {
					let n = new Fs(
						r,
						j,
						() => {
							e(), n.disconnect();
						},
						() => {},
					);
				}),
				(O_ = {
					'team-standings': 'vendor/team/standings/3ISBEIR2.js',
					'team-squad': 'vendor/team/squad/ZKU24KOZ.js',
					'team-statistics': 'vendor/team/statistics/LGAQ5EMP.js',
					'team-matches': 'vendor/team/matches/W3HPCOVQ.js',
					'team-liveticker': 'vendor/team/liveticker/APECZKVH.js',
					'match-liveticker': 'vendor/match/liveticker/SZ77N3L6.js',
				}),
				(L_ = (e, r, n, o, s) => {
					let u = r === 0,
						d = E('section', {
							id: ''.concat(q, '-').concat(r),
							name: e,
							class: ''.concat(q, ' ').concat(u ? j : ''),
						}),
						c = O_[e];
					if (!c) throw new Error('Unknown widget view '.concat(e));
					let f = () => {
						let p = np('Daten werden geladen...');
						d.appendChild(p), T_('https://widget-api.fupa.net/'.concat(c), e, d, o, s);
					};
					return u ? C_(f, n) : w_(f, d), d;
				}),
				(S_ = (e) => {
					let r = window.getComputedStyle(e);
					return r.display === 'none' || r.visibility !== 'visible' ? !1 : r.opacity >= '0.1';
				}),
				(q_ = () => {
					let e = document.querySelectorAll('.'.concat(v, 'widget-footer'));
					return Array.from(e).every((r) => S_(r));
				}),
				(j_ = (e, r, n, o) => {
					if (!r) return;
					let s = o ? ''.concat(v).concat(o) : ''.concat(v, 'wrapper'),
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
						let y = L_(p, _, r, n, o);
						c.appendChild(y);
					}),
						u.appendChild(c);
					let f = Yc();
					if ((u.appendChild(f), r.appendChild(u), Zc(r, f, e.entity, e.type, o), !q_()))
						throw new U();
				}),
				(T_ = (e, r, n, o, s) => {
					let u = E('script', {
						id: ''
							.concat(v)
							.concat(r, '-view-script')
							.concat(s ? '-'.concat(s) : ''),
						type: 'text/javascript',
						src: e,
						'data-root-id': o != null ? o : '',
					});
					n.appendChild(u);
				}),
				(U_ = (e) => {
					if (!Object.keys(Nn).includes(e)) throw new Error('Unexpected Entity-Type: '.concat(e));
					return 'Dem Widget ist kein '
						.concat(Nn[e], ' zugeordnet. Füge dem Widget im Konfigurator ein ')
						.concat(Nn[e], ' hinzu, um es anzeigen zu können.');
				}),
				(ap = (e, r, n) => {
					var u;
					if (!r) throw new Error('No rootId was provided.');
					if (!e.entity) {
						let d = U_(e.type);
						throw new Error(d);
					}
					let o = Us(r),
						s = (u = o.shadowRoot) != null ? u : o;
					e.customCss && x_(e.customCss, s, n), j_(e, s, r, n);
				});
		});
	var R_,
		up,
		lp = g(() => {
			'use strict';
			T();
			L();
			z();
			(R_ = (e = 'Es ist ein unbekannter Fehler aufgetreten') => {
				let r = E('div', {
						id: ''.concat(v, 'widget-error'),
						class: ''.concat(v, 'widget-placeholder-container'),
					}),
					n = E('div', { class: ''.concat(v, 'widget-placeholder-message') });
				return n.appendChild(C('Fehler (FuPa-Widget): '.concat(e))), r.appendChild(n), r;
			}),
				(up = R_);
		});
	var cp,
		dp = g(() => {
			cp = 'https://widget-api.fupa.net/vendor/RFKJXDEJ.css';
		});
	var pp,
		A_,
		vp,
		W_,
		I_,
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
				(A_ = (e, r) => {
					var s;
					let n = (s = e.shadowRoot) != null ? s : e,
						o = up(r);
					n.appendChild(o);
				}),
				(vp = (e) => {
					w() ||
						((e.style.height = '232px'), (e.style.display = 'grid'), (e.style.alignItems = 'end'));
				}),
				(W_ = (e) => {
					let r = document.querySelectorAll('[id^="'.concat(e, '"]'));
					r && r.forEach((n) => n.removeAttribute('style'));
				}),
				(I_ = (e) => {
					var n;
					let r = (n = e.shadowRoot) != null ? n : e;
					for (; r.firstChild; ) r.firstChild.remove();
				}),
				(fp = (e, r) => {
					I_(e);
					let n = r ? r.message : 'Es ist ein unbekannter Fehler aufgetreten.';
					A_(e, n);
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
						W_(n), rp(r(n)), ip(r(n)), Kc(r(n));
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
		var k_ = (e) =>
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
			N_ = () => {
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
			V_ = (e, r) => !!e.querySelector('#'.concat(v).concat(r)),
			G_ = (e) => {
				let r = (s) => {
						Array.from(s.removedNodes).forEach((d) => {
							if (d instanceof HTMLElement && d.id.startsWith(Gn)) {
								const index = e.indexOf(d.id);
								if (index >= 0) {
									e.splice(index, 1);
								}
							}
						});

						Array.from(s.addedNodes).forEach((d) => {
							if (d instanceof HTMLElement && d.id.startsWith(Gn)) {
								let c = e.indexOf(d.id) >= 0;
								hp(d, c);
							}
						});
					},
					n = (s) => {
						s.forEach((u) => r(u));
					};
				new MutationObserver(n).observe(document, {
					childList: true,
					subtree: true,
					attributes: !1,
					characterData: !1,
				});
			},
			B_ = () =>
				re($n, null, function* () {
					if (window.FuPaWidgetIsCalled) return;
					window.FuPaWidgetIsCalled = !0;
					let e = z_(),
						r = N_(),
						n = r.map((o) => o.id);
					G_(n),
						(e.onload = () => bp(n, pp)),
						r.forEach((o, s) => {
							let u = n.indexOf(o.id) !== s;
							hp(o, u);
						});
				}),
			hp = (e, r) =>
				re($n, null, function* () {
					let n = e.id,
						o = H_(n);
					if (!V_(e, o)) {
						vp(e);
						try {
							$_(r, o);
							let s = yield k_(o);
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
