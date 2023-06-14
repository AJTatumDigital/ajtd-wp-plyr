/*!
 * mux-embed
 * @version 4.25.1
 * @copyright 2023 Mux, Inc
 */
!(function () {
	var e, t;
	(e = this),
		(t = function () {
			return (function () {
				var e = {
						80: function (e, t, r) {
							e.exports = r(728).default;
						},
						728: function (e, t, r) {
							"use strict";
							r.d(t, {
								default: function () {
									return er;
								},
							});
							var a = r(48),
								n = r.n(a),
								i = function () {
									return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
										/[xy]/g,
										function (e) {
											var t = (16 * Math.random()) | 0;
											return ("x" === e ? t : (3 & t) | 8).toString(16);
										}
									);
								},
								o = function () {
									return (
										"000000" +
										((Math.random() * Math.pow(36, 6)) << 0).toString(36)
									).slice(-6);
								},
								s = function (e) {
									return e && void 0 !== e.nodeName
										? (e.muxId || (e.muxId = e.id || o()), e.muxId)
										: e;
								},
								u = function (e) {
									var t;
									e && void 0 !== e.nodeName
										? (e = s((t = e)))
										: (t = document.querySelector(e));
									var r = t && t.nodeName ? t.nodeName.toLowerCase() : "";
									return [t, e, r];
								},
								l = r(640),
								d = r.n(l),
								c = d().methodFactory;
							(d().methodFactory = function (e, t, r) {
								var a = c(e, t, r);
								return function () {
									for (var e = ["[mux]"], t = 0; t < arguments.length; t++)
										e.push(arguments[t]);
									a.apply(void 0, e);
								};
							}),
								d().setLevel(d().getLevel());
							var f = d();
							function p() {
								return (
									"1" ===
									(n().doNotTrack ||
										(n().navigator && n().navigator.doNotTrack))
								);
							}
							var _ = {
									now: function () {
										var e = n().performance,
											t = e && e.timing,
											r = t && t.navigationStart,
											a =
												"number" == typeof r && "function" == typeof e.now
													? r + e.now()
													: Date.now();
										return Math.round(a);
									},
								},
								h = function (e) {
									return v(e)[0];
								},
								v = function (e) {
									if ("string" != typeof e || "" === e) return ["localhost"];
									var t,
										r = (e.match(
											/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
										) || [])[4];
									return (
										r && (t = (r.match(/[^\.]+\.[^\.]+$/) || [])[0]), [r, t]
									);
								},
								m = {
									exists: function () {
										var e = n().performance;
										return void 0 !== (e && e.timing);
									},
									domContentLoadedEventEnd: function () {
										var e = n().performance,
											t = e && e.timing;
										return t && t.domContentLoadedEventEnd;
									},
									navigationStart: function () {
										var e = n().performance,
											t = e && e.timing;
										return t && t.navigationStart;
									},
								};
							function y(e, t, r) {
								(r = void 0 === r ? 1 : r), (e[t] = e[t] || 0), (e[t] += r);
							}
							var b = [
									"x-request-id",
									"cf-ray",
									"x-amz-cf-id",
									"x-akamai-request-id",
								],
								g = ["x-cdn", "content-type"].concat(b);
							function w(e) {
								var t = {};
								return (
									(e = e || "")
										.trim()
										.split(/[\r\n]+/)
										.forEach(function (e) {
											if (e) {
												var r = e.split(": "),
													a = r.shift();
												a &&
													(g.indexOf(a.toLowerCase()) >= 0 ||
														0 === a.toLowerCase().indexOf("x-litix-")) &&
													(t[a] = r.join(": "));
											}
										}),
									t
								);
							}
							function T(e) {
								if (e) {
									var t = b.find(function (t) {
										return void 0 !== e[t];
									});
									return t ? e[t] : void 0;
								}
							}
							var E = function (e) {
								var t = {};
								for (var r in e) {
									var a = e[r];
									-1 !== a["DATA-ID"].search("io.litix.data.") &&
										(t[a["DATA-ID"].replace("io.litix.data.", "")] = a.VALUE);
								}
								return t;
							};
							function k(e, t) {
								var r = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var a = Object.getOwnPropertySymbols(e);
									t &&
										(a = a.filter(function (t) {
											return Object.getOwnPropertyDescriptor(e, t).enumerable;
										})),
										r.push.apply(r, a);
								}
								return r;
							}
							function O(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = null != arguments[t] ? arguments[t] : {};
									t % 2
										? k(Object(r), !0).forEach(function (t) {
												D(e, t, r[t]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(
												e,
												Object.getOwnPropertyDescriptors(r)
										  )
										: k(Object(r)).forEach(function (t) {
												Object.defineProperty(
													e,
													t,
													Object.getOwnPropertyDescriptor(r, t)
												);
										  });
								}
								return e;
							}
							function D(e, t, r) {
								return (
									t in e
										? Object.defineProperty(e, t, {
												value: r,
												enumerable: !0,
												configurable: !0,
												writable: !0,
										  })
										: (e[t] = r),
									e
								);
							}
							var x = function (e) {
									if (!e) return {};
									var t = m.navigationStart(),
										r = e.loading,
										a = r ? r.start : e.trequest,
										n = r ? r.first : e.tfirst,
										i = r ? r.end : e.tload;
									return {
										bytesLoaded: e.total,
										requestStart: Math.round(t + a),
										responseStart: Math.round(t + n),
										responseEnd: Math.round(t + i),
									};
								},
								S = function (e) {
									if (e && "function" == typeof e.getAllResponseHeaders)
										return w(e.getAllResponseHeaders());
								};
							function q(e, t) {
								var r = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var a = Object.getOwnPropertySymbols(e);
									t &&
										(a = a.filter(function (t) {
											return Object.getOwnPropertyDescriptor(e, t).enumerable;
										})),
										r.push.apply(r, a);
								}
								return r;
							}
							function P(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = null != arguments[t] ? arguments[t] : {};
									t % 2
										? q(Object(r), !0).forEach(function (t) {
												A(e, t, r[t]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(
												e,
												Object.getOwnPropertyDescriptors(r)
										  )
										: q(Object(r)).forEach(function (t) {
												Object.defineProperty(
													e,
													t,
													Object.getOwnPropertyDescriptor(r, t)
												);
										  });
								}
								return e;
							}
							function A(e, t, r) {
								return (
									t in e
										? Object.defineProperty(e, t, {
												value: r,
												enumerable: !0,
												configurable: !0,
												writable: !0,
										  })
										: (e[t] = r),
									e
								);
							}
							var R = function (e, t) {
									if (!e || "function" != typeof e.getRequests) return {};
									var r = e.getRequests({ state: "executed" });
									if (0 === r.length) return {};
									var a,
										n = r[r.length - 1],
										i = h(n.url),
										o = n.url,
										s = n.bytesLoaded,
										u = new Date(n.requestStartDate).getTime(),
										l = new Date(n.firstByteDate).getTime(),
										d = new Date(n.requestEndDate).getTime(),
										c = isNaN(n.duration) ? 0 : n.duration,
										f =
											"function" == typeof t.getMetricsFor
												? t.getMetricsFor(n.mediaType).HttpList
												: t.getDashMetrics().getHttpRequests(n.mediaType);
									return (
										f.length > 0 &&
											(a = w(f[f.length - 1]._responseHeaders || "")),
										{
											requestStart: u,
											requestResponseStart: l,
											requestResponseEnd: d,
											requestBytesLoaded: s,
											requestResponseHeaders: a,
											requestMediaDuration: c,
											requestHostname: i,
											requestUrl: o,
											requestId: a ? T(a) : void 0,
										}
									);
								},
								I = function (e, t) {
									var r = t.getQualityFor(e),
										a = t.getCurrentTrackFor(e).bitrateList;
									return a
										? {
												currentLevel: r,
												renditionWidth: a[r].width || null,
												renditionHeight: a[r].height || null,
												renditionBitrate: a[r].bandwidth,
										  }
										: {};
								},
								j = function (e) {
									var t;
									return null === (t = e.match(/.*codecs\*?="(.*)"/)) ||
										void 0 === t
										? void 0
										: t[1];
								};
							function L(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var C = 0,
								N = (function () {
									function e() {
										!(function (e, t) {
											if (!(e instanceof t))
												throw new TypeError(
													"Cannot call a class as a function"
												);
										})(this, e);
									}
									var t, r, a;
									return (
										(t = e),
										(r = [
											{
												key: "on",
												value: function (e, t, r) {
													return (
														(t._eventEmitterGuid = t._eventEmitterGuid || ++C),
														(this._listeners = this._listeners || {}),
														(this._listeners[e] = this._listeners[e] || []),
														r && (t = t.bind(r)),
														this._listeners[e].push(t),
														t
													);
												},
											},
											{
												key: "off",
												value: function (e, t) {
													var r = this._listeners && this._listeners[e];
													r &&
														r.forEach(function (e, a) {
															e._eventEmitterGuid === t._eventEmitterGuid &&
																r.splice(a, 1);
														});
												},
											},
											{
												key: "one",
												value: function (e, t, r) {
													var a = this;
													t._eventEmitterGuid = t._eventEmitterGuid || ++C;
													var n = function n() {
														a.off(e, n), t.apply(r || this, arguments);
													};
													(n._eventEmitterGuid = t._eventEmitterGuid),
														this.on(e, n);
												},
											},
											{
												key: "emit",
												value: function (e, t) {
													var r = this;
													if (this._listeners) {
														t = t || {};
														var a = this._listeners["before*"] || [],
															n = this._listeners[e] || [],
															i = this._listeners["after" + e] || [],
															o = function (t, a) {
																(t = t.slice()).forEach(function (t) {
																	t.call(r, { type: e }, a);
																});
															};
														o(a, t), o(n, t), o(i, t);
													}
												},
											},
										]),
										r && L(t.prototype, r),
										a && L(t, a),
										Object.defineProperty(t, "prototype", { writable: !1 }),
										e
									);
								})(),
								H = N;
							function M(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var B = (function () {
								function e(t) {
									var r = this;
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e),
										(this.pm = t),
										(this._playbackHeartbeatInterval = null),
										(this._playheadShouldBeProgressing = !1),
										t.on("playing", function () {
											r._playheadShouldBeProgressing = !0;
										}),
										t.on(
											"play",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"playing",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"adbreakstart",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"adplay",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"adplaying",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"seeking",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"devicewake",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"viewstart",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"rebufferstart",
											this._startPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"pause",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"ended",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"viewend",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"error",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"aderror",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"adpause",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"adended",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on(
											"adbreakend",
											this._stopPlaybackHeartbeatInterval.bind(this)
										),
										t.on("seeked", function () {
											t.data.player_is_paused
												? r._stopPlaybackHeartbeatInterval()
												: r._startPlaybackHeartbeatInterval();
										}),
										t.on("timeupdate", function () {
											null !== r._playbackHeartbeatInterval &&
												t.emit("playbackheartbeat");
										}),
										t.on("devicesleep", function (e, a) {
											null !== r._playbackHeartbeatInterval &&
												(n().clearInterval(r._playbackHeartbeatInterval),
												t.emit("playbackheartbeatend", {
													viewer_time: a.viewer_time,
												}),
												(r._playbackHeartbeatInterval = null));
										});
								}
								var t, r, a;
								return (
									(t = e),
									(r = [
										{
											key: "_startPlaybackHeartbeatInterval",
											value: function () {
												var e = this;
												null === this._playbackHeartbeatInterval &&
													(this.pm.emit("playbackheartbeat"),
													(this._playbackHeartbeatInterval = n().setInterval(
														function () {
															e.pm.emit("playbackheartbeat");
														},
														this.pm.playbackHeartbeatTime
													)));
											},
										},
										{
											key: "_stopPlaybackHeartbeatInterval",
											value: function () {
												(this._playheadShouldBeProgressing = !1),
													null !== this._playbackHeartbeatInterval &&
														(n().clearInterval(this._playbackHeartbeatInterval),
														this.pm.emit("playbackheartbeatend"),
														(this._playbackHeartbeatInterval = null));
											},
										},
									]) && M(t.prototype, r),
									a && M(t, a),
									Object.defineProperty(t, "prototype", { writable: !1 }),
									e
								);
							})();
							function U(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function F(e, t, r) {
								return (
									t && U(e.prototype, t),
									r && U(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var G = F(function e(t) {
								var r = this;
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError("Cannot call a class as a function");
								})(this, e),
									t.on("viewinit", function () {
										r.viewErrored = !1;
									}),
									t.on("error", function (e, a) {
										try {
											var n = t.errorTranslator({
												player_error_code: a.player_error_code,
												player_error_message: a.player_error_message,
												player_error_context: a.player_error_context,
											});
											n
												? ((t.data.player_error_code =
														n.player_error_code || a.player_error_code),
												  (t.data.player_error_message =
														n.player_error_message || a.player_error_message),
												  (t.data.player_error_context =
														n.player_error_context || a.player_error_context),
												  (r.viewErrored = !0))
												: (delete t.data.player_error_code,
												  delete t.data.player_error_message,
												  delete t.data.player_error_context);
										} catch (e) {
											t.mux.log.warn(
												"Exception in error translator callback.",
												e
											),
												(r.viewErrored = !0);
										}
									});
							});
							function W(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var Q = (function () {
								function e(t) {
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e),
										(this.pm = t),
										(this._watchTimeTrackerLastCheckedTime = null),
										t.on("playbackheartbeat", this._updateWatchTime.bind(this)),
										t.on(
											"playbackheartbeatend",
											this._clearWatchTimeState.bind(this)
										);
								}
								var t, r, a;
								return (
									(t = e),
									(r = [
										{
											key: "_updateWatchTime",
											value: function (e, t) {
												var r = t.viewer_time;
												null === this._watchTimeTrackerLastCheckedTime &&
													(this._watchTimeTrackerLastCheckedTime = r),
													y(
														this.pm.data,
														"view_watch_time",
														r - this._watchTimeTrackerLastCheckedTime
													),
													(this._watchTimeTrackerLastCheckedTime = r);
											},
										},
										{
											key: "_clearWatchTimeState",
											value: function (e, t) {
												this._updateWatchTime(e, t),
													(this._watchTimeTrackerLastCheckedTime = null);
											},
										},
									]) && W(t.prototype, r),
									a && W(t, a),
									Object.defineProperty(t, "prototype", { writable: !1 }),
									e
								);
							})();
							function V(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var J = (function () {
								function e(t) {
									var r = this;
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e),
										(this.pm = t),
										(this._playbackTimeTrackerLastPlayheadPosition = -1),
										(this._lastTime = _.now()),
										(this._isAdPlaying = !1),
										t.on(
											"playbackheartbeat",
											this._updatePlaybackTime.bind(this)
										),
										t.on(
											"playbackheartbeatend",
											this._clearPlaybackTimeState.bind(this)
										),
										t.on("seeking", this._clearPlaybackTimeState.bind(this)),
										t.on("adplaying", function () {
											r._isAdPlaying = !0;
										}),
										t.on("adended", function () {
											r._isAdPlaying = !1;
										}),
										t.on("adpause", function () {
											r._isAdPlaying = !1;
										}),
										t.on("adbreakstart", function () {
											r._isAdPlaying = !1;
										}),
										t.on("adbreakend", function () {
											r._isAdPlaying = !1;
										}),
										t.on("adplay", function () {
											r._isAdPlaying = !1;
										});
								}
								var t, r, a;
								return (
									(t = e),
									(r = [
										{
											key: "_updatePlaybackTime",
											value: function () {
												var e = this.pm.data.player_playhead_time,
													t = _.now(),
													r = -1;
												this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
												e > this._playbackTimeTrackerLastPlayheadPosition
													? (r =
															e - this._playbackTimeTrackerLastPlayheadPosition)
													: this._isAdPlaying && (r = t - this._lastTime),
													r > 0 &&
														r <= 1e3 &&
														y(this.pm.data, "view_content_playback_time", r),
													(this._playbackTimeTrackerLastPlayheadPosition = e),
													(this._lastTime = t);
											},
										},
										{
											key: "_clearPlaybackTimeState",
											value: function () {
												this._updatePlaybackTime(),
													(this._playbackTimeTrackerLastPlayheadPosition = -1);
											},
										},
									]) && V(t.prototype, r),
									a && V(t, a),
									Object.defineProperty(t, "prototype", { writable: !1 }),
									e
								);
							})();
							function K(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var z = (function () {
								function e(t) {
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e),
										(this.pm = t);
									var r = this._updatePlayheadTime.bind(this);
									t.on("playbackheartbeat", r),
										t.on("playbackheartbeatend", r),
										t.on("timeupdate", r),
										t.on("destroy", function () {
											t.off("timeupdate", r);
										});
								}
								var t, r, a;
								return (
									(t = e),
									(r = [
										{
											key: "_updateMaxPlayheadPosition",
											value: function () {
												this.pm.data.view_max_playhead_position =
													void 0 === this.pm.data.view_max_playhead_position
														? this.pm.data.player_playhead_time
														: Math.max(
																this.pm.data.view_max_playhead_position,
																this.pm.data.player_playhead_time
														  );
											},
										},
										{
											key: "_updatePlayheadTime",
											value: function (e, t) {
												var r = this,
													a = function () {
														r.pm.currentFragmentPDT &&
															r.pm.currentFragmentStart &&
															(r.pm.data.player_program_time =
																r.pm.currentFragmentPDT +
																r.pm.data.player_playhead_time -
																r.pm.currentFragmentStart);
													};
												if (t && t.player_playhead_time)
													(this.pm.data.player_playhead_time =
														t.player_playhead_time),
														a(),
														this._updateMaxPlayheadPosition();
												else if (this.pm.getPlayheadTime) {
													var n = this.pm.getPlayheadTime();
													void 0 !== n &&
														((this.pm.data.player_playhead_time = n),
														a(),
														this._updateMaxPlayheadPosition());
												}
											},
										},
									]) && K(t.prototype, r),
									a && K(t, a),
									Object.defineProperty(t, "prototype", { writable: !1 }),
									e
								);
							})();
							function Y(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function X(e, t, r) {
								return (
									t && Y(e.prototype, t),
									r && Y(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var $ = 3e5,
								Z = X(function e(t) {
									if (
										((function (e, t) {
											if (!(e instanceof t))
												throw new TypeError(
													"Cannot call a class as a function"
												);
										})(this, e),
										!t.disableRebufferTracking)
									) {
										var r,
											a = function (e, t) {
												n(t), (r = void 0);
											},
											n = function (e) {
												if (r) {
													var a = e.viewer_time - r;
													y(t.data, "view_rebuffer_duration", a),
														(r = e.viewer_time),
														t.data.view_rebuffer_duration > $ &&
															(t.emit("viewend"),
															t.send("viewend"),
															t.mux.log.warn(
																"Ending view after rebuffering for longer than ".concat(
																	$,
																	"ms, future events will be ignored unless a programchange or videochange occurs."
																)
															));
												}
												t.data.view_watch_time >= 0 &&
													t.data.view_rebuffer_count > 0 &&
													((t.data.view_rebuffer_frequency =
														t.data.view_rebuffer_count /
														t.data.view_watch_time),
													(t.data.view_rebuffer_percentage =
														t.data.view_rebuffer_duration /
														t.data.view_watch_time));
											};
										t.on("playbackheartbeat", function (e, t) {
											return n(t);
										}),
											t.on("rebufferstart", function (e, n) {
												r ||
													(y(t.data, "view_rebuffer_count", 1),
													(r = n.viewer_time),
													t.one("rebufferend", a));
											}),
											t.on("viewinit", function () {
												(r = void 0), t.off("rebufferend", a);
											});
									}
								});
							function ee(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var te = (function () {
									function e(t) {
										var r = this;
										!(function (e, t) {
											if (!(e instanceof t))
												throw new TypeError(
													"Cannot call a class as a function"
												);
										})(this, e),
											(this.pm = t),
											t.disableRebufferTracking ||
												t.disablePlayheadRebufferTracking ||
												((this._lastCheckedTime = null),
												(this._lastPlayheadTime = null),
												(this._lastPlayheadTimeUpdatedTime = null),
												t.on(
													"playbackheartbeat",
													this._checkIfRebuffering.bind(this)
												),
												t.on(
													"playbackheartbeatend",
													this._cleanupRebufferTracker.bind(this)
												),
												t.on("seeking", function () {
													r._cleanupRebufferTracker(null, {
														viewer_time: _.now(),
													});
												}));
									}
									var t, r, a;
									return (
										(t = e),
										(r = [
											{
												key: "_checkIfRebuffering",
												value: function (e, t) {
													if (
														this.pm.seekingTracker.isSeeking ||
														this.pm.adTracker.isAdBreak ||
														!this.pm.playbackHeartbeat
															._playheadShouldBeProgressing
													)
														this._cleanupRebufferTracker(e, t);
													else if (null !== this._lastCheckedTime)
														if (
															this._lastPlayheadTime ===
															this.pm.data.player_playhead_time
														) {
															var r =
																t.viewer_time -
																this._lastPlayheadTimeUpdatedTime;
															"number" ==
																typeof this.pm.sustainedRebufferThreshold &&
																r >= this.pm.sustainedRebufferThreshold &&
																(this._rebuffering ||
																	((this._rebuffering = !0),
																	this.pm.emit("rebufferstart", {
																		viewer_time:
																			this._lastPlayheadTimeUpdatedTime,
																	}))),
																(this._lastCheckedTime = t.viewer_time);
														} else this._cleanupRebufferTracker(e, t, !0);
													else this._prepareRebufferTrackerState(t.viewer_time);
												},
											},
											{
												key: "_clearRebufferTrackerState",
												value: function () {
													(this._lastCheckedTime = null),
														(this._lastPlayheadTime = null),
														(this._lastPlayheadTimeUpdatedTime = null);
												},
											},
											{
												key: "_prepareRebufferTrackerState",
												value: function (e) {
													(this._lastCheckedTime = e),
														(this._lastPlayheadTime =
															this.pm.data.player_playhead_time),
														(this._lastPlayheadTimeUpdatedTime = e);
												},
											},
											{
												key: "_cleanupRebufferTracker",
												value: function (e, t) {
													var r =
														arguments.length > 2 &&
														void 0 !== arguments[2] &&
														arguments[2];
													if (this._rebuffering)
														(this._rebuffering = !1),
															this.pm.emit("rebufferend", {
																viewer_time: t.viewer_time,
															});
													else {
														if (null === this._lastCheckedTime) return;
														var a =
																this.pm.data.player_playhead_time -
																this._lastPlayheadTime,
															n =
																t.viewer_time -
																this._lastPlayheadTimeUpdatedTime;
														"number" ==
															typeof this.pm.minimumRebufferDuration &&
															a > 0 &&
															n - a > this.pm.minimumRebufferDuration &&
															((this._lastCheckedTime = null),
															this.pm.emit("rebufferstart", {
																viewer_time: this._lastPlayheadTimeUpdatedTime,
															}),
															this.pm.emit("rebufferend", {
																viewer_time:
																	this._lastPlayheadTimeUpdatedTime + n - a,
															}));
													}
													r
														? this._prepareRebufferTrackerState(t.viewer_time)
														: this._clearRebufferTrackerState();
												},
											},
										]),
										r && ee(t.prototype, r),
										a && ee(t, a),
										Object.defineProperty(t, "prototype", { writable: !1 }),
										e
									);
								})(),
								re = te;
							function ae(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var ne = (function () {
								function e(t) {
									var r = this;
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e),
										(this.pm = t),
										t.on("viewinit", function () {
											var e = t.data,
												a = e.view_id;
											if (!e.view_program_changed) {
												var n = function (e, n) {
													var i = n.viewer_time;
													"playing" === e.type &&
													void 0 === t.data.view_time_to_first_frame
														? r.calculateTimeToFirstFrame(i || _.now(), a)
														: "adplaying" !== e.type ||
														  (void 0 !== t.data.view_time_to_first_frame &&
																!r._inPrerollPosition()) ||
														  r.calculateTimeToFirstFrame(i || _.now(), a);
												};
												t.one("playing", n),
													t.one("adplaying", n),
													t.one("viewend", function () {
														t.off("playing", n), t.off("adplaying", n);
													});
											}
										});
								}
								var t, r, a;
								return (
									(t = e),
									(r = [
										{
											key: "_inPrerollPosition",
											value: function () {
												return (
													void 0 === this.pm.data.view_content_playback_time ||
													this.pm.data.view_content_playback_time <= 1e3
												);
											},
										},
										{
											key: "calculateTimeToFirstFrame",
											value: function (e, t) {
												t === this.pm.data.view_id &&
													(this.pm.watchTimeTracker._updateWatchTime(null, {
														viewer_time: e,
													}),
													(this.pm.data.view_time_to_first_frame =
														this.pm.data.view_watch_time),
													(this.pm.data.player_autoplay_on ||
														this.pm.data.video_is_autoplay) &&
														this.NAVIGATION_START &&
														(this.pm.data.view_aggregate_startup_time =
															this.pm.data.view_start +
															this.pm.data.view_watch_time -
															this.NAVIGATION_START));
											},
										},
									]) && ae(t.prototype, r),
									a && ae(t, a),
									Object.defineProperty(t, "prototype", { writable: !1 }),
									e
								);
							})();
							function ie(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function oe(e, t, r) {
								return (
									t && ie(e.prototype, t),
									r && ie(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var se = oe(function e(t) {
								var r = this;
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError("Cannot call a class as a function");
								})(this, e),
									t.on("viewinit", function () {
										r._lastPlayheadPosition = -1;
									}),
									[
										"pause",
										"rebufferstart",
										"seeking",
										"error",
										"adbreakstart",
										"hb",
									].forEach(function (e) {
										t.on(e, function () {
											if (
												r._lastPlayheadPosition >= 0 &&
												t.data.player_playhead_time >= 0 &&
												r._lastPlayerWidth >= 0 &&
												r._lastSourceWidth > 0 &&
												r._lastPlayerHeight >= 0 &&
												r._lastSourceHeight > 0
											) {
												var e =
													t.data.player_playhead_time - r._lastPlayheadPosition;
												if (e < 0) return void (r._lastPlayheadPosition = -1);
												var a = Math.min(
														r._lastPlayerWidth / r._lastSourceWidth,
														r._lastPlayerHeight / r._lastSourceHeight
													),
													n = Math.max(0, a - 1),
													i = Math.max(0, 1 - a);
												(t.data.view_max_upscale_percentage = Math.max(
													t.data.view_max_upscale_percentage || 0,
													n
												)),
													(t.data.view_max_downscale_percentage = Math.max(
														t.data.view_max_downscale_percentage || 0,
														i
													)),
													y(t.data, "view_total_content_playback_time", e),
													y(t.data, "view_total_upscaling", n * e),
													y(t.data, "view_total_downscaling", i * e);
											}
											r._lastPlayheadPosition = -1;
										});
									}),
									["playing", "hb"].forEach(function (e) {
										t.on(e, function () {
											(r._lastPlayheadPosition = t.data.player_playhead_time),
												(r._lastPlayerWidth = t.data.player_width),
												(r._lastPlayerHeight = t.data.player_height),
												(r._lastSourceWidth = t.data.video_source_width),
												(r._lastSourceHeight = t.data.video_source_height);
										});
									});
							});
							function ue(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function le(e, t, r) {
								return (
									t && ue(e.prototype, t),
									r && ue(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var de = le(function e(t) {
								var r = this;
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError("Cannot call a class as a function");
								})(this, e),
									(this.isSeeking = !1),
									t.on("seeking", function (e, a) {
										Object.assign(t.data, a),
											(r._lastSeekingTime = _.now()),
											!1 === r.isSeeking &&
												((r.isSeeking = !0), t.send("seeking"));
									}),
									t.on("seeked", function () {
										r.isSeeking = !1;
										var e = r._lastSeekingTime || _.now(),
											a = _.now() - e;
										y(t.data, "view_seek_count", 1),
											y(t.data, "view_seek_duration", a);
										var n = t.data.view_max_seek_time || 0;
										t.data.view_max_seek_time = Math.max(n, a);
									}),
									t.on("viewend", function () {
										r.isSeeking = !1;
									});
							});
							function ce(e, t) {
								return (
									(function (e) {
										if (Array.isArray(e)) return e;
									})(e) ||
									(function (e, t) {
										var r =
											null == e
												? null
												: ("undefined" != typeof Symbol &&
														e[Symbol.iterator]) ||
												  e["@@iterator"];
										if (null != r) {
											var a,
												n,
												i = [],
												o = !0,
												s = !1;
											try {
												for (
													r = r.call(e);
													!(o = (a = r.next()).done) &&
													(i.push(a.value), !t || i.length !== t);
													o = !0
												);
											} catch (e) {
												(s = !0), (n = e);
											} finally {
												try {
													o || null == r.return || r.return();
												} finally {
													if (s) throw n;
												}
											}
											return i;
										}
									})(e, t) ||
									(function (e, t) {
										if (e) {
											if ("string" == typeof e) return fe(e, t);
											var r = Object.prototype.toString.call(e).slice(8, -1);
											return (
												"Object" === r &&
													e.constructor &&
													(r = e.constructor.name),
												"Map" === r || "Set" === r
													? Array.from(e)
													: "Arguments" === r ||
													  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
													? fe(e, t)
													: void 0
											);
										}
									})(e, t) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									})()
								);
							}
							function fe(e, t) {
								(null == t || t > e.length) && (t = e.length);
								for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
								return a;
							}
							function pe(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							var _e = function (e, t) {
									e.push(t),
										e.sort(function (e, t) {
											return e.viewer_time - t.viewer_time;
										});
								},
								he = [
									"adbreakstart",
									"adrequest",
									"adresponse",
									"adplay",
									"adplaying",
									"adpause",
									"adended",
									"adbreakend",
									"aderror",
								],
								ve = (function () {
									function e(t) {
										var r = this;
										!(function (e, t) {
											if (!(e instanceof t))
												throw new TypeError(
													"Cannot call a class as a function"
												);
										})(this, e),
											(this.pm = t),
											t.on("viewinit", function () {
												(r.isAdBreak = !1),
													(r._currentAdRequestNumber = 0),
													(r._currentAdResponseNumber = 0),
													(r._adRequests = []),
													(r._adResponses = []),
													(r._adHasPlayed = !1),
													(r._wouldBeNewAdPlay = !0),
													(r._prerollPlayTime = void 0);
											}),
											he.forEach(function (e) {
												return t.on(e, r._updateAdData.bind(r));
											});
										var a = function () {
											r.isAdBreak = !1;
										};
										t.on("adbreakstart", function () {
											r.isAdBreak = !0;
										}),
											t.on("play", a),
											t.on("playing", a),
											t.on("viewend", a),
											t.on("adrequest", function (e, a) {
												(a = Object.assign(
													{
														ad_request_id:
															"generatedAdRequestId" +
															r._currentAdRequestNumber++,
													},
													a
												)),
													_e(r._adRequests, a),
													y(t.data, "view_ad_request_count"),
													r.inPrerollPosition() &&
														((t.data.view_preroll_requested = !0),
														r._adHasPlayed ||
															y(t.data, "view_preroll_request_count"));
											}),
											t.on("adresponse", function (e, a) {
												(a = Object.assign(
													{
														ad_request_id:
															"generatedAdRequestId" +
															r._currentAdResponseNumber++,
													},
													a
												)),
													_e(r._adResponses, a);
												var n = r.findAdRequest(a.ad_request_id);
												n &&
													y(
														t.data,
														"view_ad_request_time",
														Math.max(0, a.viewer_time - n.viewer_time)
													);
											}),
											t.on("adplay", function (e, a) {
												(r._adHasPlayed = !0),
													r._wouldBeNewAdPlay &&
														((r._wouldBeNewAdPlay = !1),
														y(t.data, "view_ad_played_count")),
													r.inPrerollPosition() &&
														!t.data.view_preroll_played &&
														((t.data.view_preroll_played = !0),
														r._adRequests.length > 0 &&
															(t.data.view_preroll_request_time = Math.max(
																0,
																a.viewer_time - r._adRequests[0].viewer_time
															)),
														t.data.view_start &&
															(t.data.view_startup_preroll_request_time =
																Math.max(0, a.viewer_time - t.data.view_start)),
														(r._prerollPlayTime = a.viewer_time));
											}),
											t.on("adplaying", function (e, a) {
												r.inPrerollPosition() &&
													void 0 === t.data.view_preroll_load_time &&
													void 0 !== r._prerollPlayTime &&
													((t.data.view_preroll_load_time =
														a.viewer_time - r._prerollPlayTime),
													(t.data.view_startup_preroll_load_time =
														a.viewer_time - r._prerollPlayTime));
											}),
											t.on("adended", function () {
												r._wouldBeNewAdPlay = !0;
											}),
											t.on("aderror", function () {
												r._wouldBeNewAdPlay = !0;
											});
									}
									var t, r, a;
									return (
										(t = e),
										(r = [
											{
												key: "inPrerollPosition",
												value: function () {
													return (
														void 0 ===
															this.pm.data.view_content_playback_time ||
														this.pm.data.view_content_playback_time <= 1e3
													);
												},
											},
											{
												key: "findAdRequest",
												value: function (e) {
													for (var t = 0; t < this._adRequests.length; t++)
														if (this._adRequests[t].ad_request_id === e)
															return this._adRequests[t];
												},
											},
											{
												key: "_updateAdData",
												value: function (e, t) {
													if (this.inPrerollPosition()) {
														if (
															!this.pm.data.view_preroll_ad_tag_hostname &&
															t.ad_tag_url
														) {
															var r = ce(v(t.ad_tag_url), 2),
																a = r[0],
																n = r[1];
															(this.pm.data.view_preroll_ad_tag_domain = n),
																(this.pm.data.view_preroll_ad_tag_hostname = a);
														}
														if (
															!this.pm.data.view_preroll_ad_asset_hostname &&
															t.ad_asset_url
														) {
															var i = ce(v(t.ad_asset_url), 2),
																o = i[0],
																s = i[1];
															(this.pm.data.view_preroll_ad_asset_domain = s),
																(this.pm.data.view_preroll_ad_asset_hostname =
																	o);
														}
													}
													(this.pm.data.ad_asset_url =
														null == t ? void 0 : t.ad_asset_url),
														(this.pm.data.ad_tag_url =
															null == t ? void 0 : t.ad_tag_url),
														(this.pm.data.ad_creative_id =
															null == t ? void 0 : t.ad_creative_id),
														(this.pm.data.ad_id = null == t ? void 0 : t.ad_id),
														(this.pm.data.ad_universal_id =
															null == t ? void 0 : t.ad_universal_id);
												},
											},
										]) && pe(t.prototype, r),
										a && pe(t, a),
										Object.defineProperty(t, "prototype", { writable: !1 }),
										e
									);
								})();
							function me(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function ye(e, t, r) {
								return (
									t && me(e.prototype, t),
									r && me(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var be = ye(function e(t) {
								var r, a;
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError("Cannot call a class as a function");
								})(this, e);
								var i = function () {
										t.disableRebufferTracking ||
											(r &&
												(y(
													t.data,
													"view_waiting_rebuffer_duration",
													_.now() - r
												),
												(r = !1),
												n().clearInterval(a)));
									},
									o = !1,
									s = function () {
										(o = !1), i();
									};
								t.on("waiting", function () {
									o &&
										(t.disableRebufferTracking ||
											(y(t.data, "view_waiting_rebuffer_count", 1),
											(r = _.now()),
											(a = n().setInterval(function () {
												if (r) {
													var e = _.now();
													y(t.data, "view_waiting_rebuffer_duration", e - r),
														(r = e);
												}
											}, 250))));
								}),
									t.on("playing", function () {
										i(), (o = !0);
									}),
									t.on("pause", s),
									t.on("seeking", s);
							});
							function ge(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function we(e, t, r) {
								return (
									t && ge(e.prototype, t),
									r && ge(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var Te = we(function e(t) {
									var r = this;
									!(function (e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									})(this, e);
									var a = function () {
											(r.lastWallClockTime = _.now()), t.on("before*", n);
										},
										n = function (e) {
											var a = _.now(),
												n = r.lastWallClockTime;
											(r.lastWallClockTime = a),
												a - n > 3e4 &&
													(t.emit("devicesleep", { viewer_time: n }),
													Object.assign(t.data, { viewer_time: n }),
													t.send("devicesleep"),
													t.emit("devicewake", { viewer_time: a }),
													Object.assign(t.data, { viewer_time: a }),
													t.send("devicewake"));
										};
									t.one("playbackheartbeat", a),
										t.on("playbackheartbeatend", function () {
											t.off("before*", n), t.one("playbackheartbeat", a);
										});
								}),
								Ee = r(375),
								ke = r(655),
								Oe = r.n(ke),
								De = "muxData",
								xe = function () {
									var e;
									try {
										e = Ee.parse(Oe().get(De) || "");
									} catch (t) {
										e = {};
									}
									return e;
								},
								Se = function (e) {
									try {
										Oe().set(De, Ee.stringify(e), { expires: 7300 });
									} catch (e) {}
								},
								qe = function () {
									var e = xe();
									return (
										(e.mux_viewer_id = e.mux_viewer_id || i()),
										(e.msn = e.msn || Math.random()),
										Se(e),
										{ mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
									);
								};
							function Pe(e, t) {
								var r = t.beaconCollectionDomain,
									a = t.beaconDomain;
								if (r) return "https://" + r;
								var n = a || "litix.io";
								return (e = e || "inferred").match(/^[a-z0-9]+$/)
									? "https://" + e + "." + n
									: "https://img.litix.io/a.gif";
							}
							var Ae = function () {
									var e;
									switch (Re()) {
										case "cellular":
											e = "cellular";
											break;
										case "ethernet":
											e = "wired";
											break;
										case "wifi":
											e = "wifi";
											break;
										case void 0:
											break;
										default:
											e = "other";
									}
									return e;
								},
								Re = function () {
									var e = n().navigator,
										t =
											e &&
											(e.connection || e.mozConnection || e.webkitConnection);
									return t && t.type;
								};
							Ae.getConnectionFromAPI = Re;
							var Ie = Ae,
								je = Ce({
									a: "env",
									b: "beacon",
									c: "custom",
									d: "ad",
									e: "event",
									f: "experiment",
									i: "internal",
									m: "mux",
									n: "response",
									p: "player",
									q: "request",
									r: "retry",
									s: "session",
									t: "timestamp",
									u: "viewer",
									v: "video",
									w: "page",
									x: "view",
									y: "sub",
								}),
								Le = Ce({
									ad: "ad",
									ag: "aggregate",
									ap: "api",
									al: "application",
									ar: "architecture",
									as: "asset",
									au: "autoplay",
									av: "average",
									bi: "bitrate",
									br: "break",
									bw: "browser",
									by: "bytes",
									ca: "cached",
									cb: "cancel",
									cc: "codec",
									cd: "code",
									cg: "category",
									ch: "changed",
									cl: "canceled",
									cn: "config",
									co: "count",
									ce: "counter",
									cp: "complete",
									cr: "creative",
									ct: "content",
									cu: "current",
									cx: "connection",
									cz: "context",
									dg: "downscaling",
									dm: "domain",
									dn: "cdn",
									do: "downscale",
									dr: "drm",
									dp: "dropped",
									du: "duration",
									dv: "device",
									ec: "encoding",
									ed: "edge",
									en: "end",
									eg: "engine",
									em: "embed",
									er: "error",
									es: "errorcode",
									et: "errortext",
									ee: "event",
									ev: "events",
									ex: "expires",
									ep: "experiments",
									fa: "failed",
									fi: "first",
									fm: "family",
									ft: "format",
									fp: "fps",
									fq: "frequency",
									fr: "frame",
									fs: "fullscreen",
									ha: "has",
									hb: "holdback",
									he: "headers",
									ho: "host",
									hn: "hostname",
									ht: "height",
									id: "id",
									ii: "init",
									in: "instance",
									ip: "ip",
									is: "is",
									ke: "key",
									la: "language",
									lb: "labeled",
									le: "level",
									li: "live",
									ld: "loaded",
									lo: "load",
									ls: "lists",
									lt: "latency",
									ma: "max",
									md: "media",
									me: "message",
									mf: "manifest",
									mi: "mime",
									ml: "midroll",
									mm: "min",
									mn: "manufacturer",
									mo: "model",
									mx: "mux",
									ne: "newest",
									nm: "name",
									no: "number",
									on: "on",
									os: "os",
									pa: "paused",
									pb: "playback",
									pd: "producer",
									pe: "percentage",
									pf: "played",
									pg: "program",
									ph: "playhead",
									pi: "plugin",
									pl: "preroll",
									pn: "playing",
									po: "poster",
									pr: "preload",
									ps: "position",
									pt: "part",
									py: "property",
									ra: "rate",
									rd: "requested",
									re: "rebuffer",
									rf: "rendition",
									rm: "remote",
									ro: "ratio",
									rp: "response",
									rq: "request",
									rs: "requests",
									sa: "sample",
									se: "session",
									sk: "seek",
									sm: "stream",
									so: "source",
									sq: "sequence",
									sr: "series",
									st: "start",
									su: "startup",
									sv: "server",
									sw: "software",
									ta: "tag",
									tc: "tech",
									te: "text",
									tg: "target",
									th: "throughput",
									ti: "time",
									tl: "total",
									to: "to",
									tt: "title",
									ty: "type",
									ug: "upscaling",
									un: "universal",
									up: "upscale",
									ur: "url",
									us: "user",
									va: "variant",
									vd: "viewed",
									vi: "video",
									ve: "version",
									vw: "view",
									vr: "viewer",
									wd: "width",
									wa: "watch",
									wt: "waiting",
								});
							function Ce(e) {
								var t = {};
								for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
								return t;
							}
							function Ne(e) {
								var t = {},
									r = {};
								return (
									Object.keys(e).forEach(function (a) {
										var n = !1;
										if (e.hasOwnProperty(a) && void 0 !== e[a]) {
											var i = a.split("_"),
												o = i[0],
												s = je[o];
											s ||
												(f.info(
													"Data key word `" + i[0] + "` not expected in " + a
												),
												(s = o + "_")),
												i.splice(1).forEach(function (e) {
													"url" === e && (n = !0),
														Le[e]
															? (s += Le[e])
															: Number(e) && Math.floor(Number(e)) === Number(e)
															? (s += e)
															: (f.info(
																	"Data key word `" +
																		e +
																		"` not expected in " +
																		a
															  ),
															  (s += "_" + e + "_"));
												}),
												n ? (r[s] = e[a]) : (t[s] = e[a]);
										}
									}),
									Object.assign(t, r)
								);
							}
							var He = {
									maxBeaconSize: 300,
									maxQueueLength: 3600,
									baseTimeBetweenBeacons: 1e4,
									maxPayloadKBSize: 500,
								},
								Me = [
									"hb",
									"requestcompleted",
									"requestfailed",
									"requestcanceled",
								],
								Be = "https://img.litix.io",
								Ue = function (e) {
									var t =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: {};
									(this._beaconUrl = e || Be),
										(this._eventQueue = []),
										(this._postInFlight = !1),
										(this._failureCount = 0),
										(this._sendTimeout = !1),
										(this._options = Object.assign({}, He, t));
								};
							(Ue.prototype.queueEvent = function (e, t) {
								var r = Object.assign({}, t);
								return (
									(this._eventQueue.length <= this._options.maxQueueLength ||
										"eventrateexceeded" === e) &&
									(this._eventQueue.push(r),
									this._sendTimeout || this._startBeaconSending(),
									this._eventQueue.length <= this._options.maxQueueLength)
								);
							}),
								(Ue.prototype.flushEvents = function () {
									var e =
										arguments.length > 0 &&
										void 0 !== arguments[0] &&
										arguments[0];
									e && 1 === this._eventQueue.length
										? this._eventQueue.pop()
										: (this._eventQueue.length && this._sendBeaconQueue(),
										  this._startBeaconSending());
								}),
								(Ue.prototype.destroy = function () {
									var e =
										arguments.length > 0 &&
										void 0 !== arguments[0] &&
										arguments[0];
									(this.destroyed = !0),
										e ? this._clearBeaconQueue() : this.flushEvents(),
										n().clearTimeout(this._sendTimeout);
								}),
								(Ue.prototype._clearBeaconQueue = function () {
									var e =
											this._eventQueue.length > this._options.maxBeaconSize
												? this._eventQueue.length - this._options.maxBeaconSize
												: 0,
										t = this._eventQueue.slice(e);
									e > 0 &&
										Object.assign(
											t[t.length - 1],
											Ne({ mux_view_message: "event queue truncated" })
										);
									var r = this._createPayload(t);
									Ge(this._beaconUrl, r, !0, function () {});
								}),
								(Ue.prototype._sendBeaconQueue = function () {
									var e = this;
									if (!this._postInFlight) {
										var t = this._eventQueue.slice(
											0,
											this._options.maxBeaconSize
										);
										(this._eventQueue = this._eventQueue.slice(
											this._options.maxBeaconSize
										)),
											(this._postInFlight = !0);
										var r = this._createPayload(t),
											a = _.now();
										Ge(this._beaconUrl, r, !1, function (r, n) {
											n
												? ((e._eventQueue = t.concat(e._eventQueue)),
												  (e._failureCount += 1),
												  f.info("Error sending beacon: " + n))
												: (e._failureCount = 0),
												(e._roundTripTime = _.now() - a),
												(e._postInFlight = !1);
										});
									}
								}),
								(Ue.prototype._getNextBeaconTime = function () {
									if (!this._failureCount)
										return this._options.baseTimeBetweenBeacons;
									var e = Math.pow(2, this._failureCount - 1);
									return (
										(1 + (e *= Math.random())) *
										this._options.baseTimeBetweenBeacons
									);
								}),
								(Ue.prototype._startBeaconSending = function () {
									var e = this;
									n().clearTimeout(this._sendTimeout),
										this.destroyed ||
											(this._sendTimeout = n().setTimeout(function () {
												e._eventQueue.length && e._sendBeaconQueue(),
													e._startBeaconSending();
											}, this._getNextBeaconTime()));
								}),
								(Ue.prototype._createPayload = function (e) {
									var t,
										r,
										a,
										n = this,
										i = { transmission_timestamp: Math.round(_.now()) };
									this._roundTripTime &&
										(i.rtt_ms = Math.round(this._roundTripTime));
									var o = function () {
											(t = JSON.stringify({ metadata: i, events: r || e })),
												(a = t.length / 1024);
										},
										s = function () {
											return a <= n._options.maxPayloadKBSize;
										};
									return (
										o(),
										s() ||
											(f.info(
												"Payload size is too big (" +
													a +
													" kb). Removing unnecessary events."
											),
											(r = e.filter(function (e) {
												return -1 === Me.indexOf(e.e);
											})),
											o()),
										s() ||
											(f.info(
												"Payload size still too big (" +
													a +
													" kb). Cropping fields.."
											),
											r.forEach(function (e) {
												for (var t in e) {
													var r = e[t];
													"string" == typeof r &&
														r.length > 51200 &&
														(e[t] = r.substring(0, 51200));
												}
											}),
											o()),
										t
									);
								});
							var Fe = function (e) {
									return e.length <= 57344;
								},
								Ge = function (e, t, r, a) {
									if (
										r &&
										navigator &&
										navigator.sendBeacon &&
										navigator.sendBeacon(e, t)
									)
										a();
									else if (n().fetch)
										n()
											.fetch(e, {
												method: "POST",
												body: t,
												headers: { "Content-Type": "text/plain" },
												keepalive: Fe(t),
											})
											.then(function (e) {
												return a(null, e.ok ? null : "Error");
											})
											.catch(function (e) {
												return a(null, e);
											});
									else {
										if (n().XMLHttpRequest) {
											var i = new (n().XMLHttpRequest)();
											return (
												(i.onreadystatechange = function () {
													if (4 === i.readyState)
														return a(null, 200 !== i.status ? "error" : void 0);
												}),
												i.open("POST", e),
												i.setRequestHeader("Content-Type", "text/plain"),
												void i.send(t)
											);
										}
										a();
									}
								},
								We = Ue;
							function Qe(e, t) {
								return (
									(function (e) {
										if (Array.isArray(e)) return e;
									})(e) ||
									(function (e, t) {
										var r =
											null == e
												? null
												: ("undefined" != typeof Symbol &&
														e[Symbol.iterator]) ||
												  e["@@iterator"];
										if (null != r) {
											var a,
												n,
												i = [],
												o = !0,
												s = !1;
											try {
												for (
													r = r.call(e);
													!(o = (a = r.next()).done) &&
													(i.push(a.value), !t || i.length !== t);
													o = !0
												);
											} catch (e) {
												(s = !0), (n = e);
											} finally {
												try {
													o || null == r.return || r.return();
												} finally {
													if (s) throw n;
												}
											}
											return i;
										}
									})(e, t) ||
									(function (e, t) {
										if (e) {
											if ("string" == typeof e) return Ve(e, t);
											var r = Object.prototype.toString.call(e).slice(8, -1);
											return (
												"Object" === r &&
													e.constructor &&
													(r = e.constructor.name),
												"Map" === r || "Set" === r
													? Array.from(e)
													: "Arguments" === r ||
													  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
													? Ve(e, t)
													: void 0
											);
										}
									})(e, t) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									})()
								);
							}
							function Ve(e, t) {
								(null == t || t > e.length) && (t = e.length);
								for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
								return a;
							}
							function Je(e, t) {
								var r = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var a = Object.getOwnPropertySymbols(e);
									t &&
										(a = a.filter(function (t) {
											return Object.getOwnPropertyDescriptor(e, t).enumerable;
										})),
										r.push.apply(r, a);
								}
								return r;
							}
							function Ke(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = null != arguments[t] ? arguments[t] : {};
									t % 2
										? Je(Object(r), !0).forEach(function (t) {
												$e(e, t, r[t]);
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(
												e,
												Object.getOwnPropertyDescriptors(r)
										  )
										: Je(Object(r)).forEach(function (t) {
												Object.defineProperty(
													e,
													t,
													Object.getOwnPropertyDescriptor(r, t)
												);
										  });
								}
								return e;
							}
							function ze(e) {
								return (
									(ze =
										"function" == typeof Symbol &&
										"symbol" == typeof Symbol.iterator
											? function (e) {
													return typeof e;
											  }
											: function (e) {
													return e &&
														"function" == typeof Symbol &&
														e.constructor === Symbol &&
														e !== Symbol.prototype
														? "symbol"
														: typeof e;
											  }),
									ze(e)
								);
							}
							function Ye(e, t) {
								if (!(e instanceof t))
									throw new TypeError("Cannot call a class as a function");
							}
							function Xe(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function $e(e, t, r) {
								return (
									t in e
										? Object.defineProperty(e, t, {
												value: r,
												enumerable: !0,
												configurable: !0,
												writable: !0,
										  })
										: (e[t] = r),
									e
								);
							}
							var Ze = [
									"env_key",
									"view_id",
									"view_sequence_number",
									"player_sequence_number",
									"beacon_domain",
									"player_playhead_time",
									"viewer_time",
									"mux_api_version",
									"event",
									"video_id",
									"player_instance_id",
								],
								et = [
									"adplay",
									"adplaying",
									"adpause",
									"adfirstquartile",
									"admidpoint",
									"adthirdquartile",
									"adended",
									"adresponse",
									"adrequest",
								],
								tt = ["ad_id", "ad_creative_id", "ad_universal_id"],
								rt = ["viewstart", "error", "ended", "viewend"],
								at = (function () {
									function e(t, r) {
										var a,
											i,
											o,
											s,
											u,
											l,
											d,
											c,
											f,
											p,
											_,
											h,
											v,
											m,
											y,
											b =
												arguments.length > 2 && void 0 !== arguments[2]
													? arguments[2]
													: {};
										Ye(this, e),
											$e(this, "previousBeaconData", null),
											$e(this, "lastEventTime", 0),
											$e(this, "rateLimited", !1),
											(this.mux = t),
											(this.envKey = r),
											(this.options = b),
											(this.eventQueue = new We(Pe(this.envKey, this.options))),
											(this.sampleRate =
												null !== (a = this.options.sampleRate) && void 0 !== a
													? a
													: 1),
											(this.disableCookies =
												null !== (i = this.options.disableCookies) &&
												void 0 !== i &&
												i),
											(this.respectDoNotTrack =
												null !== (o = this.options.respectDoNotTrack) &&
												void 0 !== o &&
												o),
											(this.previousBeaconData = null),
											(this.lastEventTime = 0),
											(this.rateLimited = !1),
											(this.pageLevelData = {
												mux_api_version: this.mux.API_VERSION,
												mux_embed: this.mux.NAME,
												mux_embed_version: this.mux.VERSION,
												viewer_application_name:
													null === (s = this.options.platform) || void 0 === s
														? void 0
														: s.name,
												viewer_application_version:
													null === (u = this.options.platform) || void 0 === u
														? void 0
														: u.version,
												viewer_application_engine:
													null === (l = this.options.platform) || void 0 === l
														? void 0
														: l.layout,
												viewer_device_name:
													null === (d = this.options.platform) || void 0 === d
														? void 0
														: d.product,
												viewer_device_category: "",
												viewer_device_manufacturer:
													null === (c = this.options.platform) || void 0 === c
														? void 0
														: c.manufacturer,
												viewer_os_family:
													null === (f = this.options.platform) ||
													void 0 === f ||
													null === (p = f.os) ||
													void 0 === p
														? void 0
														: p.family,
												viewer_os_architecture:
													null === (_ = this.options.platform) ||
													void 0 === _ ||
													null === (h = _.os) ||
													void 0 === h
														? void 0
														: h.architecture,
												viewer_os_version:
													null === (v = this.options.platform) ||
													void 0 === v ||
													null === (m = v.os) ||
													void 0 === m
														? void 0
														: m.version,
												viewer_connection_type: Ie(),
												page_url:
													null === n() ||
													void 0 === n() ||
													null === (y = n().location) ||
													void 0 === y
														? void 0
														: y.href,
											}),
											(this.viewerData = this.disableCookies ? {} : qe());
									}
									var t, r, a;
									return (
										(t = e),
										(r = [
											{
												key: "send",
												value: function (e, t) {
													var r;
													if (e && null != t && t.view_id) {
														if (this.respectDoNotTrack && p())
															return f.info(
																"Not sending `" +
																	e +
																	"` because Do Not Track is enabled"
															);
														if (!t || "object" !== ze(t))
															return f.error(
																"A data object was expected in send() but was not provided"
															);
														var a,
															n,
															o = this.disableCookies
																? {}
																: ((a = xe()),
																  (n = _.now()),
																  a.session_start &&
																		((a.sst = a.session_start),
																		delete a.session_start),
																  a.session_id &&
																		((a.sid = a.session_id),
																		delete a.session_id),
																  a.session_expires &&
																		((a.sex = a.session_expires),
																		delete a.session_expires),
																  (!a.sex || a.sex < n) &&
																		((a.sid = i()), (a.sst = n)),
																  (a.sex = n + 15e5),
																  Se(a),
																  {
																		session_id: a.sid,
																		session_start: a.sst,
																		session_expires: a.sex,
																  }),
															s = Ke(
																Ke(
																	Ke(Ke(Ke({}, this.pageLevelData), t), o),
																	this.viewerData
																),
																{},
																{ event: e, env_key: this.envKey }
															);
														s.user_id &&
															((s.viewer_user_id = s.user_id),
															delete s.user_id);
														var u =
																(null !== (r = s.mux_sample_number) &&
																void 0 !== r
																	? r
																	: 0) >= this.sampleRate,
															l = Ne(this._deduplicateBeaconData(e, s));
														if (
															((this.lastEventTime = this.mux.utils.now()), u)
														)
															return f.info(
																"Not sending event due to sample rate restriction",
																e,
																s,
																l
															);
														if (
															(this.envKey ||
																f.info(
																	"Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",
																	e,
																	s,
																	l
																),
															!this.rateLimited)
														)
															if (
																(f.info("Sending event", e, s, l),
																(this.rateLimited = !this.eventQueue.queueEvent(
																	e,
																	l
																)),
																this.mux.WINDOW_UNLOADING && "viewend" === e)
															)
																this.eventQueue.destroy(!0);
															else if (
																(this.mux.WINDOW_HIDDEN && "hb" === e
																	? this.eventQueue.flushEvents(!0)
																	: rt.indexOf(e) >= 0 &&
																	  this.eventQueue.flushEvents(),
																this.rateLimited)
															)
																return (
																	(s.event = "eventrateexceeded"),
																	(l = Ne(s)),
																	this.eventQueue.queueEvent(s.event, l),
																	f.error(
																		"Beaconing disabled due to rate limit."
																	)
																);
													}
												},
											},
											{
												key: "destroy",
												value: function () {
													this.eventQueue.destroy(!1);
												},
											},
											{
												key: "_deduplicateBeaconData",
												value: function (e, t) {
													var r = this,
														a = {},
														n = t.view_id;
													if (
														"-1" === n ||
														"viewstart" === e ||
														"viewend" === e ||
														!this.previousBeaconData ||
														this.mux.utils.now() - this.lastEventTime >= 6e5
													)
														(a = Ke({}, t)),
															n && (this.previousBeaconData = a),
															n &&
																"viewend" === e &&
																(this.previousBeaconData = null);
													else {
														var i = 0 === e.indexOf("request");
														Object.entries(t).forEach(function (t) {
															var n = Qe(t, 2),
																o = n[0],
																s = n[1];
															r.previousBeaconData &&
																(s !== r.previousBeaconData[o] ||
																	Ze.indexOf(o) > -1 ||
																	r.objectHasChanged(
																		i,
																		o,
																		s,
																		r.previousBeaconData[o]
																	) ||
																	r.eventRequiresKey(e, o)) &&
																((a[o] = s), (r.previousBeaconData[o] = s));
														});
													}
													return a;
												},
											},
											{
												key: "objectHasChanged",
												value: function (e, t, r, a) {
													return !(
														!e ||
														0 !== t.indexOf("request_") ||
														("request_response_headers" !== t &&
															"object" === ze(r) &&
															"object" === ze(a) &&
															Object.keys(r || {}).length ===
																Object.keys(a || {}).length)
													);
												},
											},
											{
												key: "eventRequiresKey",
												value: function (e, t) {
													return (
														("renditionchange" === e &&
															0 === t.indexOf("video_source_")) ||
														!(!tt.includes(t) || !et.includes(e))
													);
												},
											},
										]) && Xe(t.prototype, r),
										a && Xe(t, a),
										Object.defineProperty(t, "prototype", { writable: !1 }),
										e
									);
								})();
							function nt(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function it(e, t, r) {
								return (
									t && nt(e.prototype, t),
									r && nt(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var ot = it(function e(t) {
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError("Cannot call a class as a function");
								})(this, e);
								var r = 0,
									a = 0,
									n = 0,
									i = 0,
									o = 0,
									s = 0,
									u = 0;
								t.on("requestcompleted", function (e, s) {
									var u,
										l,
										d = s.request_start,
										c = s.request_response_start,
										f = s.request_response_end,
										p = s.request_bytes_loaded;
									if (
										(i++,
										c
											? ((u = c - (null != d ? d : 0)),
											  (l = (null != f ? f : 0) - c))
											: (l = (null != f ? f : 0) - (null != d ? d : 0)),
										l > 0 && p && p > 0)
									) {
										var _ = (p / l) * 8e3;
										o++,
											(a += p),
											(n += l),
											(t.data.view_min_request_throughput = Math.min(
												t.data.view_min_request_throughput || 1 / 0,
												_
											)),
											(t.data.view_average_request_throughput = (a / n) * 8e3),
											(t.data.view_request_count = i),
											u > 0 &&
												((r += u),
												(t.data.view_max_request_latency = Math.max(
													t.data.view_max_request_latency || 0,
													u
												)),
												(t.data.view_average_request_latency = r / o));
									}
								}),
									t.on("requestfailed", function (e, r) {
										i++,
											s++,
											(t.data.view_request_count = i),
											(t.data.view_request_failed_count = s);
									}),
									t.on("requestcanceled", function (e, r) {
										i++,
											u++,
											(t.data.view_request_count = i),
											(t.data.view_request_canceled_count = u);
									});
							});
							function st(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function ut(e, t, r) {
								return (
									t && st(e.prototype, t),
									r && st(e, r),
									Object.defineProperty(e, "prototype", { writable: !1 }),
									e
								);
							}
							var lt = ut(function e(t) {
								var r = this;
								!(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError("Cannot call a class as a function");
								})(this, e),
									t.on("before*", function (e, a) {
										var n = a.viewer_time,
											i = _.now(),
											o = r._lastEventTime;
										if (((r._lastEventTime = i), o && i - o > 36e5)) {
											var s = Object.keys(t.data).reduce(function (e, r) {
												return 0 === r.indexOf("video_")
													? Object.assign(
															e,
															(function (e, t, r) {
																return (
																	t in e
																		? Object.defineProperty(e, t, {
																				value: r,
																				enumerable: !0,
																				configurable: !0,
																				writable: !0,
																		  })
																		: (e[t] = r),
																	e
																);
															})({}, r, t.data[r])
													  )
													: e;
											}, {});
											t.mux.log.info(
												"Received event after at least an hour inactivity, creating a new view"
											),
												t.emit(
													"viewinit",
													Object.assign({ viewer_time: n }, s)
												),
												t.playbackHeartbeat._playheadShouldBeProgressing &&
													"play" !== e.type &&
													"adbreakstart" !== e.type &&
													(t.emit("play", { viewer_time: n }),
													"playing" !== e.type &&
														t.emit("playing", { viewer_time: n }));
										}
									});
							});
							function dt(e) {
								return (
									(dt =
										"function" == typeof Symbol &&
										"symbol" == typeof Symbol.iterator
											? function (e) {
													return typeof e;
											  }
											: function (e) {
													return e &&
														"function" == typeof Symbol &&
														e.constructor === Symbol &&
														e !== Symbol.prototype
														? "symbol"
														: typeof e;
											  }),
									dt(e)
								);
							}
							function ct(e, t) {
								return (
									(function (e) {
										if (Array.isArray(e)) return e;
									})(e) ||
									(function (e, t) {
										var r =
											null == e
												? null
												: ("undefined" != typeof Symbol &&
														e[Symbol.iterator]) ||
												  e["@@iterator"];
										if (null != r) {
											var a,
												n,
												i = [],
												o = !0,
												s = !1;
											try {
												for (
													r = r.call(e);
													!(o = (a = r.next()).done) &&
													(i.push(a.value), !t || i.length !== t);
													o = !0
												);
											} catch (e) {
												(s = !0), (n = e);
											} finally {
												try {
													o || null == r.return || r.return();
												} finally {
													if (s) throw n;
												}
											}
											return i;
										}
									})(e, t) ||
									(function (e, t) {
										if (e) {
											if ("string" == typeof e) return ft(e, t);
											var r = Object.prototype.toString.call(e).slice(8, -1);
											return (
												"Object" === r &&
													e.constructor &&
													(r = e.constructor.name),
												"Map" === r || "Set" === r
													? Array.from(e)
													: "Arguments" === r ||
													  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
													? ft(e, t)
													: void 0
											);
										}
									})(e, t) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									})()
								);
							}
							function ft(e, t) {
								(null == t || t > e.length) && (t = e.length);
								for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
								return a;
							}
							function pt(e, t) {
								for (var r = 0; r < t.length; r++) {
									var a = t[r];
									(a.enumerable = a.enumerable || !1),
										(a.configurable = !0),
										"value" in a && (a.writable = !0),
										Object.defineProperty(e, a.key, a);
								}
							}
							function _t(e, t) {
								return (
									(_t = Object.setPrototypeOf
										? Object.setPrototypeOf.bind()
										: function (e, t) {
												return (e.__proto__ = t), e;
										  }),
									_t(e, t)
								);
							}
							function ht(e) {
								var t = (function () {
									if ("undefined" == typeof Reflect || !Reflect.construct)
										return !1;
									if (Reflect.construct.sham) return !1;
									if ("function" == typeof Proxy) return !0;
									try {
										return (
											Boolean.prototype.valueOf.call(
												Reflect.construct(Boolean, [], function () {})
											),
											!0
										);
									} catch (e) {
										return !1;
									}
								})();
								return function () {
									var r,
										a = yt(e);
									if (t) {
										var n = yt(this).constructor;
										r = Reflect.construct(a, arguments, n);
									} else r = a.apply(this, arguments);
									return vt(this, r);
								};
							}
							function vt(e, t) {
								if (t && ("object" === dt(t) || "function" == typeof t))
									return t;
								if (void 0 !== t)
									throw new TypeError(
										"Derived constructors may only return object or undefined"
									);
								return mt(e);
							}
							function mt(e) {
								if (void 0 === e)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called"
									);
								return e;
							}
							function yt(e) {
								return (
									(yt = Object.setPrototypeOf
										? Object.getPrototypeOf.bind()
										: function (e) {
												return e.__proto__ || Object.getPrototypeOf(e);
										  }),
									yt(e)
								);
							}
							var bt = [
									"viewstart",
									"ended",
									"loadstart",
									"pause",
									"play",
									"playing",
									"ratechange",
									"waiting",
									"adplay",
									"adpause",
									"adended",
									"aderror",
									"adplaying",
									"adrequest",
									"adresponse",
									"adbreakstart",
									"adbreakend",
									"adfirstquartile",
									"admidpoint",
									"adthirdquartile",
									"rebufferstart",
									"rebufferend",
									"seeked",
									"error",
									"hb",
									"requestcompleted",
									"requestfailed",
									"requestcanceled",
									"renditionchange",
								],
								gt = (function (e) {
									!(function (e, t) {
										if ("function" != typeof t && null !== t)
											throw new TypeError(
												"Super expression must either be null or a function"
											);
										(e.prototype = Object.create(t && t.prototype, {
											constructor: { value: e, writable: !0, configurable: !0 },
										})),
											Object.defineProperty(e, "prototype", { writable: !1 }),
											t && _t(e, t);
									})(o, e);
									var t,
										r,
										a,
										n = ht(o);
									function o(e, t, r) {
										var a;
										!(function (e, t) {
											if (!(e instanceof t))
												throw new TypeError(
													"Cannot call a class as a function"
												);
										})(this, o),
											((a = n.call(this)).DOM_CONTENT_LOADED_EVENT_END =
												m.domContentLoadedEventEnd()),
											(a.NAVIGATION_START = m.navigationStart()),
											(a.mux = e),
											(a.id = t),
											((r = Object.assign(
												{
													debug: !1,
													minimumRebufferDuration: 250,
													sustainedRebufferThreshold: 1e3,
													playbackHeartbeatTime: 25,
													beaconDomain: "litix.io",
													sampleRate: 1,
													disableCookies: !1,
													respectDoNotTrack: !1,
													disableRebufferTracking: !1,
													disablePlayheadRebufferTracking: !1,
													errorTranslator: function (e) {
														return e;
													},
												},
												r
											)).data = r.data || {}),
											r.data.property_key &&
												((r.data.env_key = r.data.property_key),
												delete r.data.property_key),
											f.setLevel(r.debug ? "debug" : "warn"),
											(a.getPlayheadTime = r.getPlayheadTime),
											(a.getStateData =
												r.getStateData ||
												function () {
													return {};
												}),
											(a.getAdData = r.getAdData || function () {}),
											(a.minimumRebufferDuration = r.minimumRebufferDuration),
											(a.sustainedRebufferThreshold =
												r.sustainedRebufferThreshold),
											(a.playbackHeartbeatTime = r.playbackHeartbeatTime),
											(a.disableRebufferTracking = r.disableRebufferTracking),
											a.disableRebufferTracking &&
												a.mux.log.warn(
													"Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."
												),
											(a.disablePlayheadRebufferTracking =
												r.disablePlayheadRebufferTracking),
											(a.errorTranslator = r.errorTranslator),
											(a.playbackEventDispatcher = new at(
												e,
												r.data.env_key,
												r
											)),
											(a.data = {
												player_instance_id: i(),
												mux_sample_rate: r.sampleRate,
												beacon_domain: r.beaconCollectionDomain
													? r.beaconCollectionDomain
													: r.beaconDomain,
											}),
											(a.data.view_sequence_number = 1),
											(a.data.player_sequence_number = 1),
											(a.oldEmit = a.emit),
											(a.emit = function (e, t) {
												(t = Object.assign(
													{ viewer_time: this.mux.utils.now() },
													t
												)),
													this.oldEmit(e, t);
											});
										var s = function () {
											void 0 === this.data.view_start &&
												((this.data.view_start = this.mux.utils.now()),
												this.emit("viewstart"));
										}.bind(mt(a));
										a.on("viewinit", function (e, t) {
											this._resetVideoData(),
												this._resetViewData(),
												this._resetErrorData(),
												this._updateStateData(),
												Object.assign(this.data, t),
												this._initializeViewData(),
												this.one("play", s),
												this.one("adbreakstart", s);
										});
										var u = function (e) {
											this.emit("viewend"),
												this.send("viewend"),
												this.emit("viewinit", e);
										}.bind(mt(a));
										if (
											(a.on("videochange", function (e, t) {
												u(t);
											}),
											a.on("programchange", function (e, t) {
												this.data.player_is_paused &&
													this.mux.log.warn(
														"The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."
													),
													u(Object.assign(t, { view_program_changed: !0 })),
													s(),
													this.emit("play"),
													this.emit("playing");
											}),
											a.on("fragmentchange", function (e, t) {
												(this.currentFragmentPDT = t.currentFragmentPDT),
													(this.currentFragmentStart = t.currentFragmentStart);
											}),
											a.on("destroy", a.destroy),
											"undefined" != typeof window &&
												"function" == typeof window.addEventListener &&
												"function" == typeof window.removeEventListener)
										) {
											var l = function () {
												var e = void 0 !== a.data.view_start;
												(a.mux.WINDOW_HIDDEN =
													"hidden" === document.visibilityState),
													e &&
														a.mux.WINDOW_HIDDEN &&
														(a.data.player_is_paused || a.emit("hb"));
											};
											window.addEventListener("visibilitychange", l, !1);
											var d = function (e) {
												e.persisted || a.destroy();
											};
											window.addEventListener("pagehide", d, !1),
												a.on("destroy", function () {
													window.removeEventListener("visibilitychange", l),
														window.removeEventListener("pagehide", d);
												});
										}
										return (
											a.on("playerready", function (e, t) {
												Object.assign(this.data, t);
											}),
											bt.forEach(function (e) {
												a.on(e, function (t, r) {
													0 !== e.indexOf("ad") && this._updateStateData(),
														Object.assign(this.data, r),
														this._sanitizeData();
												}),
													a.on("after" + e, function () {
														("error" !== e || this.errorTracker.viewErrored) &&
															this.send(e);
													});
											}),
											a.on("viewend", function (e, t) {
												Object.assign(a.data, t);
											}),
											a.one("playerready", function (e) {
												var t = this.mux.utils.now();
												this.data.player_init_time &&
													(this.data.player_startup_time =
														t - this.data.player_init_time),
													!this.mux.PLAYER_TRACKED &&
														this.NAVIGATION_START &&
														((this.mux.PLAYER_TRACKED = !0),
														(this.data.player_init_time ||
															this.DOM_CONTENT_LOADED_EVENT_END) &&
															(this.data.page_load_time =
																Math.min(
																	this.data.player_init_time || 1 / 0,
																	this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0
																) - this.NAVIGATION_START)),
													this.send("playerready"),
													delete this.data.player_startup_time,
													delete this.data.page_load_time;
											}),
											(a.longResumeTracker = new lt(mt(a))),
											(a.errorTracker = new G(mt(a))),
											new Te(mt(a)),
											(a.seekingTracker = new de(mt(a))),
											(a.playheadTime = new z(mt(a))),
											(a.playbackHeartbeat = new B(mt(a))),
											new se(mt(a)),
											(a.watchTimeTracker = new Q(mt(a))),
											new J(mt(a)),
											(a.adTracker = new ve(mt(a))),
											new re(mt(a)),
											new Z(mt(a)),
											new ne(mt(a)),
											new be(mt(a)),
											new ot(mt(a)),
											r.hlsjs && a.addHLSJS(r),
											r.dashjs && a.addDashJS(r),
											a.emit("viewinit", r.data),
											a
										);
									}
									return (
										(t = o),
										(r = [
											{
												key: "destroy",
												value: function () {
													this._destroyed ||
														((this._destroyed = !0),
														void 0 !== this.data.view_start &&
															(this.emit("viewend"), this.send("viewend")),
														this.playbackEventDispatcher.destroy(),
														this.removeHLSJS(),
														this.removeDashJS(),
														window.clearTimeout(this._heartBeatTimeout));
												},
											},
											{
												key: "send",
												value: function (e) {
													if (this.data.view_id) {
														var t = Object.assign({}, this.data);
														if (
															(void 0 === t.video_source_is_live &&
																(t.player_source_duration === 1 / 0 ||
																t.video_source_duration === 1 / 0
																	? (t.video_source_is_live = !0)
																	: (t.player_source_duration > 0 ||
																			t.video_source_duration > 0) &&
																	  (t.video_source_is_live = !1)),
															t.video_source_is_live ||
																[
																	"player_program_time",
																	"player_manifest_newest_program_time",
																	"player_live_edge_program_time",
																	"player_program_time",
																	"video_holdback",
																	"video_part_holdback",
																	"video_target_duration",
																	"video_part_target_duration",
																].forEach(function (e) {
																	t[e] = void 0;
																}),
															(t.video_source_url =
																t.video_source_url || t.player_source_url),
															t.video_source_url)
														) {
															var r = ct(v(t.video_source_url), 2),
																a = r[0],
																n = r[1];
															(t.video_source_domain = n),
																(t.video_source_hostname = a);
														}
														delete t.ad_request_id,
															this.playbackEventDispatcher.send(e, t),
															this.data.view_sequence_number++,
															this.data.player_sequence_number++,
															this._restartHeartBeat(),
															"viewend" === e && delete this.data.view_id;
													}
												},
											},
											{
												key: "_updateStateData",
												value: function () {
													Object.assign(this.data, this.getStateData()),
														this.playheadTime._updatePlayheadTime(),
														this._sanitizeData();
												},
											},
											{
												key: "_sanitizeData",
												value: function () {
													var e = this;
													[
														"player_width",
														"player_height",
														"video_source_width",
														"video_source_height",
														"player_playhead_time",
														"video_source_bitrate",
													].forEach(function (t) {
														var r = parseInt(e.data[t], 10);
														e.data[t] = isNaN(r) ? void 0 : r;
													}),
														["player_source_url", "video_source_url"].forEach(
															function (t) {
																if (e.data[t]) {
																	var r = e.data[t].toLowerCase();
																	(0 !== r.indexOf("data:") &&
																		0 !== r.indexOf("blob:")) ||
																		(e.data[t] = "MSE style URL");
																}
															}
														);
												},
											},
											{
												key: "_resetVideoData",
												value: function (e, t) {
													var r = this;
													Object.keys(this.data).forEach(function (e) {
														0 === e.indexOf("video_") && delete r.data[e];
													});
												},
											},
											{
												key: "_resetViewData",
												value: function () {
													var e = this;
													Object.keys(this.data).forEach(function (t) {
														0 === t.indexOf("view_") && delete e.data[t];
													}),
														(this.data.view_sequence_number = 1);
												},
											},
											{
												key: "_resetErrorData",
												value: function (e, t) {
													delete this.data.player_error_code,
														delete this.data.player_error_message;
												},
											},
											{
												key: "_initializeViewData",
												value: function () {
													var e = this,
														t = (this.data.view_id = i()),
														r = function () {
															t === e.data.view_id &&
																y(e.data, "player_view_count", 1);
														};
													this.data.player_is_paused
														? this.one("play", r)
														: r();
												},
											},
											{
												key: "_restartHeartBeat",
												value: function () {
													var e = this;
													window.clearTimeout(this._heartBeatTimeout),
														this.errorTracker.viewErrored ||
															(this._heartBeatTimeout = window.setTimeout(
																function () {
																	e.data.player_is_paused || e.emit("hb");
																},
																1e4
															));
												},
											},
											{
												key: "addHLSJS",
												value: function (e) {
													e.hlsjs
														? this.hlsjs
															? this.mux.log.warn(
																	"An instance of HLS.js is already being monitored for this player."
															  )
															: ((this.hlsjs = e.hlsjs),
															  (function (e, t, r) {
																	var a =
																			arguments.length > 4
																				? arguments[4]
																				: void 0,
																		n = e.log,
																		i = e.utils.secondsToMs,
																		o = function (e) {
																			var t,
																				r = parseInt(a.version);
																			return (
																				1 === r &&
																					null !== e.programDateTime &&
																					(t = e.programDateTime),
																				0 === r &&
																					null !== e.pdt &&
																					(t = e.pdt),
																				t
																			);
																		};
																	if (m.exists()) {
																		var s = function (r, a) {
																				return e.emit(t, r, a);
																			},
																			u = function (e, t) {
																				var r = t.levels,
																					a = t.audioTracks,
																					n = t.url,
																					i = t.stats,
																					o = t.networkDetails,
																					u = t.sessionData,
																					l = {},
																					d = {};
																				r.forEach(function (e, t) {
																					l[t] = {
																						width: e.width,
																						height: e.height,
																						bitrate: e.bitrate,
																						attrs: e.attrs,
																					};
																				}),
																					a.forEach(function (e, t) {
																						d[t] = {
																							name: e.name,
																							language: e.lang,
																							bitrate: e.bitrate,
																						};
																					});
																				var c = x(i),
																					f = c.bytesLoaded,
																					p = c.requestStart,
																					_ = c.responseStart,
																					v = c.responseEnd;
																				s(
																					"requestcompleted",
																					O(
																						O({}, E(u)),
																						{},
																						{
																							request_event_type: e,
																							request_bytes_loaded: f,
																							request_start: p,
																							request_response_start: _,
																							request_response_end: v,
																							request_type: "manifest",
																							request_hostname: h(n),
																							request_response_headers: S(o),
																							request_rendition_lists: {
																								media: l,
																								audio: d,
																								video: {},
																							},
																						}
																					)
																				);
																			};
																		r.on(a.Events.MANIFEST_LOADED, u);
																		var l = function (e, t) {
																			var r = t.details,
																				a = t.level,
																				n = t.networkDetails,
																				u = t.stats,
																				l = x(u),
																				d = l.bytesLoaded,
																				c = l.requestStart,
																				f = l.responseStart,
																				p = l.responseEnd,
																				_ = r.fragments[r.fragments.length - 1],
																				v = o(_) + i(_.duration);
																			s("requestcompleted", {
																				request_event_type: e,
																				request_bytes_loaded: d,
																				request_start: c,
																				request_response_start: f,
																				request_response_end: p,
																				request_current_level: a,
																				request_type: "manifest",
																				request_hostname: h(r.url),
																				request_response_headers: S(n),
																				video_holdback:
																					r.holdBack && i(r.holdBack),
																				video_part_holdback:
																					r.partHoldBack && i(r.partHoldBack),
																				video_part_target_duration:
																					r.partTarget && i(r.partTarget),
																				video_target_duration:
																					r.targetduration &&
																					i(r.targetduration),
																				video_source_is_live: r.live,
																				player_manifest_newest_program_time:
																					isNaN(v) ? void 0 : v,
																			});
																		};
																		r.on(a.Events.LEVEL_LOADED, l);
																		var d = function (e, t) {
																			var r = t.details,
																				a = t.networkDetails,
																				n = t.stats,
																				i = x(n),
																				o = i.bytesLoaded,
																				u = i.requestStart,
																				l = i.responseStart,
																				d = i.responseEnd;
																			s("requestcompleted", {
																				request_event_type: e,
																				request_bytes_loaded: o,
																				request_start: u,
																				request_response_start: l,
																				request_response_end: d,
																				request_type: "manifest",
																				request_hostname: h(r.url),
																				request_response_headers: S(a),
																			});
																		};
																		r.on(a.Events.AUDIO_TRACK_LOADED, d);
																		var c = function (e, t) {
																			var a = t.stats,
																				n = t.networkDetails,
																				i = t.frag;
																			a = a || i.stats;
																			var o = x(a),
																				u = o.bytesLoaded,
																				l = o.requestStart,
																				d = o.responseStart,
																				c = o.responseEnd,
																				f = n ? S(n) : void 0,
																				p = {
																					request_event_type: e,
																					request_bytes_loaded: u,
																					request_start: l,
																					request_response_start: d,
																					request_response_end: c,
																					request_hostname: n
																						? h(n.responseURL)
																						: void 0,
																					request_id: f ? T(f) : void 0,
																					request_response_headers: f,
																					request_media_duration: i.duration,
																					request_url:
																						null == n ? void 0 : n.responseURL,
																				};
																			"main" === i.type
																				? ((p.request_type = "media"),
																				  (p.request_current_level = i.level),
																				  (p.request_video_width = (
																						r.levels[i.level] || {}
																				  ).width),
																				  (p.request_video_height = (
																						r.levels[i.level] || {}
																				  ).height),
																				  (p.request_labeled_bitrate = (
																						r.levels[i.level] || {}
																				  ).bitrate))
																				: (p.request_type = i.type),
																				s("requestcompleted", p);
																		};
																		r.on(a.Events.FRAG_LOADED, c);
																		var f = function (e, t) {
																			var r = t.frag,
																				a = r.start,
																				n = {
																					currentFragmentPDT: o(r),
																					currentFragmentStart: i(a),
																				};
																			s("fragmentchange", n);
																		};
																		r.on(a.Events.FRAG_CHANGED, f);
																		var p = function (e, t) {
																			var r = t.type,
																				n = t.details,
																				i = t.response,
																				o = t.fatal,
																				u = t.frag,
																				l = t.networkDetails,
																				d =
																					(null == u ? void 0 : u.url) ||
																					t.url ||
																					"",
																				c = l ? S(l) : void 0;
																			if (
																				((n !==
																					a.ErrorDetails.MANIFEST_LOAD_ERROR &&
																					n !==
																						a.ErrorDetails
																							.MANIFEST_LOAD_TIMEOUT &&
																					n !==
																						a.ErrorDetails.FRAG_LOAD_ERROR &&
																					n !==
																						a.ErrorDetails.FRAG_LOAD_TIMEOUT &&
																					n !==
																						a.ErrorDetails.LEVEL_LOAD_ERROR &&
																					n !==
																						a.ErrorDetails.LEVEL_LOAD_TIMEOUT &&
																					n !==
																						a.ErrorDetails
																							.AUDIO_TRACK_LOAD_ERROR &&
																					n !==
																						a.ErrorDetails
																							.AUDIO_TRACK_LOAD_TIMEOUT &&
																					n !==
																						a.ErrorDetails
																							.SUBTITLE_LOAD_ERROR &&
																					n !==
																						a.ErrorDetails
																							.SUBTITLE_LOAD_TIMEOUT &&
																					n !== a.ErrorDetails.KEY_LOAD_ERROR &&
																					n !==
																						a.ErrorDetails.KEY_LOAD_TIMEOUT) ||
																					s("requestfailed", {
																						request_error: n,
																						request_url: d,
																						request_hostname: h(d),
																						request_id: c ? T(c) : void 0,
																						request_type:
																							n ===
																								a.ErrorDetails
																									.FRAG_LOAD_ERROR ||
																							n ===
																								a.ErrorDetails.FRAG_LOAD_TIMEOUT
																								? "media"
																								: n ===
																										a.ErrorDetails
																											.AUDIO_TRACK_LOAD_ERROR ||
																								  n ===
																										a.ErrorDetails
																											.AUDIO_TRACK_LOAD_TIMEOUT
																								? "audio"
																								: n ===
																										a.ErrorDetails
																											.SUBTITLE_LOAD_ERROR ||
																								  n ===
																										a.ErrorDetails
																											.SUBTITLE_LOAD_TIMEOUT
																								? "subtitle"
																								: n ===
																										a.ErrorDetails
																											.KEY_LOAD_ERROR ||
																								  n ===
																										a.ErrorDetails
																											.KEY_LOAD_TIMEOUT
																								? "encryption"
																								: "manifest",
																						request_error_code:
																							null == i ? void 0 : i.code,
																						request_error_text:
																							null == i ? void 0 : i.text,
																					}),
																				o)
																			) {
																				var f,
																					p =
																						"".concat(
																							d ? "url: ".concat(d, "\n") : ""
																						) +
																						"".concat(
																							i && (i.code || i.text)
																								? "response: "
																										.concat(i.code, ", ")
																										.concat(i.text, "\n")
																								: ""
																						) +
																						"".concat(
																							t.reason
																								? "failure reason: ".concat(
																										t.reason,
																										"\n"
																								  )
																								: ""
																						) +
																						"".concat(
																							t.level
																								? "level: ".concat(
																										t.level,
																										"\n"
																								  )
																								: ""
																						) +
																						"".concat(
																							t.parent
																								? "parent stream controller: ".concat(
																										t.parent,
																										"\n"
																								  )
																								: ""
																						) +
																						"".concat(
																							t.buffer
																								? "buffer length: ".concat(
																										t.buffer,
																										"\n"
																								  )
																								: ""
																						) +
																						"".concat(
																							t.error
																								? "error: ".concat(
																										t.error,
																										"\n"
																								  )
																								: ""
																						) +
																						"".concat(
																							t.event
																								? "event: ".concat(
																										t.event,
																										"\n"
																								  )
																								: ""
																						) +
																						"".concat(
																							t.err
																								? "error message: ".concat(
																										null === (f = t.err) ||
																											void 0 === f
																											? void 0
																											: f.message,
																										"\n"
																								  )
																								: ""
																						);
																				s("error", {
																					player_error_code: r,
																					player_error_message: n,
																					player_error_context: p,
																				});
																			}
																		};
																		r.on(a.Events.ERROR, p);
																		var _ = function (e, t) {
																			var r = t.frag,
																				a = (r && r._url) || "";
																			s("requestcanceled", {
																				request_event_type: e,
																				request_url: a,
																				request_type: "media",
																				request_hostname: h(a),
																			});
																		};
																		r.on(
																			a.Events.FRAG_LOAD_EMERGENCY_ABORTED,
																			_
																		);
																		var v = function (e, t) {
																			var a = t.level,
																				i = r.levels[a];
																			if (i && i.attrs && i.attrs.BANDWIDTH) {
																				var o,
																					u = i.attrs.BANDWIDTH,
																					l = parseFloat(i.attrs["FRAME-RATE"]);
																				isNaN(l) || (o = l),
																					u
																						? s("renditionchange", {
																								video_source_fps: o,
																								video_source_bitrate: u,
																								video_source_width: i.width,
																								video_source_height: i.height,
																								video_source_rendition_name:
																									i.name,
																								video_source_codec:
																									null == i
																										? void 0
																										: i.videoCodec,
																						  })
																						: n.warn(
																								"missing BANDWIDTH from HLS manifest parsed by HLS.js"
																						  );
																			}
																		};
																		r.on(a.Events.LEVEL_SWITCHED, v),
																			(r._stopMuxMonitor = function () {
																				r.off(a.Events.MANIFEST_LOADED, u),
																					r.off(a.Events.LEVEL_LOADED, l),
																					r.off(a.Events.AUDIO_TRACK_LOADED, d),
																					r.off(a.Events.FRAG_LOADED, c),
																					r.off(a.Events.FRAG_CHANGED, f),
																					r.off(a.Events.ERROR, p),
																					r.off(
																						a.Events
																							.FRAG_LOAD_EMERGENCY_ABORTED,
																						_
																					),
																					r.off(a.Events.LEVEL_SWITCHED, v),
																					r.off(
																						a.Events.DESTROYING,
																						r._stopMuxMonitor
																					),
																					delete r._stopMuxMonitor;
																			}),
																			r.on(
																				a.Events.DESTROYING,
																				r._stopMuxMonitor
																			);
																	} else
																		n.warn(
																			"performance timing not supported. Not tracking HLS.js."
																		);
															  })(
																	this.mux,
																	this.id,
																	e.hlsjs,
																	{},
																	e.Hls || window.Hls
															  ))
														: this.mux.log.warn(
																"You must pass a valid hlsjs instance in order to track it."
														  );
												},
											},
											{
												key: "removeHLSJS",
												value: function () {
													var e;
													this.hlsjs &&
														((e = this.hlsjs) &&
															"function" == typeof e._stopMuxMonitor &&
															e._stopMuxMonitor(),
														(this.hlsjs = void 0));
												},
											},
											{
												key: "addDashJS",
												value: function (e) {
													e.dashjs
														? this.dashjs
															? this.mux.log.warn(
																	"An instance of Dash.js is already being monitored for this player."
															  )
															: ((this.dashjs = e.dashjs),
															  (function (e, t, r) {
																	var a = e.log;
																	if (r && r.on) {
																		var n = function (r, a) {
																				return e.emit(t, r, a);
																			},
																			i = function (e) {
																				var t = e.type,
																					r = (e.data || {}).url;
																				n("requestcompleted", {
																					request_event_type: t,
																					request_start: 0,
																					request_response_start: 0,
																					request_response_end: 0,
																					request_bytes_loaded: -1,
																					request_type: "manifest",
																					request_hostname: h(r),
																					request_url: r,
																				});
																			};
																		r.on("manifestLoaded", i);
																		var o = {},
																			s = function (e) {
																				var t = e.type,
																					a = e.fragmentModel,
																					i = (e.chunk || {}).mediaInfo || {},
																					s = i.type,
																					u = i.bitrateList,
																					l = {};
																				(u = u || []).forEach(function (e, t) {
																					(l[t] = {}),
																						(l[t].width = e.width),
																						(l[t].height = e.height),
																						(l[t].bitrate = e.bandwidth),
																						(l[t].attrs = {});
																				}),
																					"video" === s
																						? (o.video = l)
																						: "audio" === s
																						? (o.audio = l)
																						: (o.media = l);
																				var d = R(a, r),
																					c = d.requestStart,
																					f = d.requestResponseStart,
																					p = d.requestResponseEnd,
																					_ = d.requestResponseHeaders,
																					h = d.requestMediaDuration,
																					v = d.requestHostname,
																					m = d.requestUrl,
																					y = d.requestId;
																				n("requestcompleted", {
																					request_event_type: t,
																					request_start: c,
																					request_response_start: f,
																					request_response_end: p,
																					request_bytes_loaded: -1,
																					request_type: s + "_init",
																					request_response_headers: _,
																					request_hostname: v,
																					request_id: y,
																					request_url: m,
																					request_media_duration: h,
																					request_rendition_lists: o,
																				});
																			};
																		r.on("initFragmentLoaded", s);
																		var u = function (e) {
																			var t = e.type,
																				a = e.fragmentModel,
																				i = e.chunk || {},
																				o = i.mediaInfo,
																				s = i.start,
																				u = (o || {}).type,
																				l = R(a, r),
																				d = l.requestStart,
																				c = l.requestResponseStart,
																				f = l.requestResponseEnd,
																				p = l.requestBytesLoaded,
																				_ = l.requestResponseHeaders,
																				h = l.requestMediaDuration,
																				v = l.requestHostname,
																				m = l.requestUrl,
																				y = l.requestId,
																				b = I(u, r),
																				g = b.currentLevel,
																				w = b.renditionWidth,
																				T = b.renditionHeight,
																				E = b.renditionBitrate;
																			n("requestcompleted", {
																				request_event_type: t,
																				request_start: d,
																				request_response_start: c,
																				request_response_end: f,
																				request_bytes_loaded: p,
																				request_type: u,
																				request_response_headers: _,
																				request_hostname: v,
																				request_id: y,
																				request_url: m,
																				request_media_start_time: s,
																				request_media_duration: h,
																				request_current_level: g,
																				request_labeled_bitrate: E,
																				request_video_width: w,
																				request_video_height: T,
																			});
																		};
																		r.on("mediaFragmentLoaded", u);
																		var l = {
																				video: void 0,
																				audio: void 0,
																				totalBitrate: void 0,
																			},
																			d = function () {
																				if (
																					l.video &&
																					"number" == typeof l.video.bitrate
																				) {
																					if (l.video.width && l.video.height) {
																						var e = l.video.bitrate;
																						return (
																							l.audio &&
																								"number" ==
																									typeof l.audio.bitrate &&
																								(e += l.audio.bitrate),
																							e !== l.totalBitrate
																								? ((l.totalBitrate = e),
																								  {
																										video_source_bitrate: e,
																										video_source_height:
																											l.video.height,
																										video_source_width:
																											l.video.width,
																										video_source_codec: j(
																											l.video.codec
																										),
																								  })
																								: void 0
																						);
																					}
																					a.warn(
																						"have bitrate info for video but missing width/height"
																					);
																				}
																			},
																			c = function (e, t, i) {
																				if ("number" == typeof e.newQuality) {
																					var o = e.mediaType;
																					if ("audio" === o || "video" === o) {
																						var s = r
																							.getBitrateInfoListFor(o)
																							.find(function (t) {
																								return (
																									t.qualityIndex ===
																									e.newQuality
																								);
																							});
																						if (
																							s &&
																							"number" == typeof s.bitrate
																						) {
																							l[o] = P(
																								P({}, s),
																								{},
																								{
																									codec:
																										r.getCurrentTrackFor(o)
																											.codec,
																								}
																							);
																							var u = d();
																							u && n("renditionchange", u);
																						} else
																							a.warn(
																								"missing bitrate info for ".concat(
																									o
																								)
																							);
																					}
																				} else
																					a.warn(
																						"missing evt.newQuality in qualityChangeRendered event",
																						e
																					);
																			};
																		r.on("qualityChangeRendered", c);
																		var f = function (e) {
																			var t = e.request,
																				r = e.mediaType;
																			n("requestcanceled", {
																				request_event_type:
																					(t = t || {}).type + "_" + t.action,
																				request_url: t.url,
																				request_type: r,
																				request_hostname: h(t.url),
																			});
																		};
																		r.on("fragmentLoadingAbandoned", f);
																		var p = function (e) {
																			var t,
																				r,
																				a = e.error,
																				i =
																					(null == a ||
																					null === (t = a.data) ||
																					void 0 === t
																						? void 0
																						: t.request) || {},
																				o =
																					(null == a ||
																					null === (r = a.data) ||
																					void 0 === r
																						? void 0
																						: r.response) || {};
																			27 === (null == a ? void 0 : a.code) &&
																				n("requestfailed", {
																					request_error:
																						i.type + "_" + i.action,
																					request_url: i.url,
																					request_hostname: h(i.url),
																					request_type: i.mediaType,
																					request_error_code: o.status,
																					request_error_text: o.statusText,
																				});
																			var s =
																				"".concat(
																					null != i && i.url
																						? "url: ".concat(i.url, "\n")
																						: ""
																				) +
																				"".concat(
																					(null != o && o.status) ||
																						(null != o && o.statusText)
																						? "response: "
																								.concat(
																									null == o ? void 0 : o.status,
																									", "
																								)
																								.concat(
																									null == o
																										? void 0
																										: o.statusText,
																									"\n"
																								)
																						: ""
																				);
																			n("error", {
																				player_error_code:
																					null == a ? void 0 : a.code,
																				player_error_message:
																					null == a ? void 0 : a.message,
																				player_error_context: s,
																			});
																		};
																		r.on("error", p),
																			(r._stopMuxMonitor = function () {
																				r.off("manifestLoaded", i),
																					r.off("initFragmentLoaded", s),
																					r.off("mediaFragmentLoaded", u),
																					r.off("qualityChangeRendered", c),
																					r.off("error", p),
																					r.off("fragmentLoadingAbandoned", f),
																					delete r._stopMuxMonitor;
																			});
																	} else
																		a.warn(
																			"Invalid dash.js player reference. Monitoring blocked."
																		);
															  })(this.mux, this.id, e.dashjs))
														: this.mux.log.warn(
																"You must pass a valid dashjs instance in order to track it."
														  );
												},
											},
											{
												key: "removeDashJS",
												value: function () {
													var e;
													this.dashjs &&
														((e = this.dashjs) &&
															"function" == typeof e._stopMuxMonitor &&
															e._stopMuxMonitor(),
														(this.dashjs = void 0));
												},
											},
										]),
										r && pt(t.prototype, r),
										a && pt(t, a),
										Object.defineProperty(t, "prototype", { writable: !1 }),
										o
									);
								})(H),
								wt = gt,
								Tt = r(153),
								Et = r.n(Tt);
							function kt(e) {
								return (
									(kt =
										"function" == typeof Symbol &&
										"symbol" == typeof Symbol.iterator
											? function (e) {
													return typeof e;
											  }
											: function (e) {
													return e &&
														"function" == typeof Symbol &&
														e.constructor === Symbol &&
														e !== Symbol.prototype
														? "symbol"
														: typeof e;
											  }),
									kt(e)
								);
							}
							function Ot(e, t) {
								return (
									(function (e) {
										if (Array.isArray(e)) return e;
									})(e) ||
									(function (e, t) {
										var r =
											null == e
												? null
												: ("undefined" != typeof Symbol &&
														e[Symbol.iterator]) ||
												  e["@@iterator"];
										if (null != r) {
											var a,
												n,
												i = [],
												o = !0,
												s = !1;
											try {
												for (
													r = r.call(e);
													!(o = (a = r.next()).done) &&
													(i.push(a.value), !t || i.length !== t);
													o = !0
												);
											} catch (e) {
												(s = !0), (n = e);
											} finally {
												try {
													o || null == r.return || r.return();
												} finally {
													if (s) throw n;
												}
											}
											return i;
										}
									})(e, t) ||
									(function (e, t) {
										if (e) {
											if ("string" == typeof e) return Dt(e, t);
											var r = Object.prototype.toString.call(e).slice(8, -1);
											return (
												"Object" === r &&
													e.constructor &&
													(r = e.constructor.name),
												"Map" === r || "Set" === r
													? Array.from(e)
													: "Arguments" === r ||
													  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
													? Dt(e, t)
													: void 0
											);
										}
									})(e, t) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									})()
								);
							}
							function Dt(e, t) {
								(null == t || t > e.length) && (t = e.length);
								for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
								return a;
							}
							var xt,
								St = [
									"loadstart",
									"pause",
									"play",
									"playing",
									"seeking",
									"seeked",
									"timeupdate",
									"ratechange",
									"stalled",
									"waiting",
									"error",
									"ended",
								],
								qt = {
									1: "MEDIA_ERR_ABORTED",
									2: "MEDIA_ERR_NETWORK",
									3: "MEDIA_ERR_DECODE",
									4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
								};
							n() && n().WeakMap && (xt = new WeakMap());
							var Pt = "#EXT-X-TARGETDURATION",
								At = "#EXT-X-PART-INF",
								Rt = "#EXT-X-SERVER-CONTROL",
								It = "#EXTINF",
								jt = "#EXT-X-PROGRAM-DATE-TIME",
								Lt = "#EXT-X-VERSION",
								Ct = "#EXT-X-SESSION-DATA",
								Nt = function (e) {
									return (
										(this.buffer = ""),
										(this.manifest = {
											segments: [],
											serverControl: {},
											sessionData: {},
										}),
										(this.currentUri = {}),
										this.process(e),
										this.manifest
									);
								};
							(Nt.prototype.process = function (e) {
								var t;
								for (
									this.buffer += e, t = this.buffer.indexOf("\n");
									t > -1;
									t = this.buffer.indexOf("\n")
								)
									this.processLine(this.buffer.substring(0, t)),
										(this.buffer = this.buffer.substring(t + 1));
							}),
								(Nt.prototype.processLine = function (e) {
									var t = e.indexOf(":"),
										r = Wt(e, t),
										a = r[0],
										n = 2 === r.length ? Bt(r[1]) : void 0;
									if ("#" !== a[0])
										(this.currentUri.uri = a),
											this.manifest.segments.push(this.currentUri),
											this.manifest.targetDuration &&
												!("duration" in this.currentUri) &&
												(this.currentUri.duration =
													this.manifest.targetDuration),
											(this.currentUri = {});
									else
										switch (a) {
											case Pt:
												if (!isFinite(n) || n < 0) return;
												(this.manifest.targetDuration = n), this.setHoldBack();
												break;
											case At:
												Ht(this.manifest, r),
													this.manifest.partInf.partTarget &&
														(this.manifest.partTargetDuration =
															this.manifest.partInf.partTarget),
													this.setHoldBack();
												break;
											case Rt:
												Ht(this.manifest, r), this.setHoldBack();
												break;
											case It:
												0 === n
													? (this.currentUri.duration = 0.01)
													: n > 0 && (this.currentUri.duration = n);
												break;
											case jt:
												var i = n,
													o = new Date(i);
												this.manifest.dateTimeString ||
													((this.manifest.dateTimeString = i),
													(this.manifest.dateTimeObject = o)),
													(this.currentUri.dateTimeString = i),
													(this.currentUri.dateTimeObject = o);
												break;
											case Lt:
												Ht(this.manifest, r);
												break;
											case Ct:
												var s = Qt(r[1]),
													u = E(s);
												Object.assign(this.manifest.sessionData, u);
										}
								}),
								(Nt.prototype.setHoldBack = function () {
									var e = this.manifest,
										t = e.serverControl,
										r = e.targetDuration,
										a = e.partTargetDuration;
									if (t) {
										var n = "holdBack",
											i = "partHoldBack",
											o = r && 3 * r,
											s = a && 2 * a;
										r && !t.hasOwnProperty(n) && (t[n] = o),
											o && t[n] < o && (t[n] = o),
											a && !t.hasOwnProperty(i) && (t[i] = 3 * a),
											a && t[i] < s && (t[i] = s);
									}
								});
							var Ht = function (e, t) {
									var r,
										a = Mt(t[0].replace("#EXT-X-", ""));
									Gt(t[1])
										? ((r = {}), (r = Object.assign(Ft(t[1]), r)))
										: (r = Bt(t[1])),
										(e[a] = r);
								},
								Mt = function (e) {
									return e.toLowerCase().replace(/-(\w)/g, function (e) {
										return e[1].toUpperCase();
									});
								},
								Bt = function (e) {
									if ("yes" === e.toLowerCase() || "no" === e.toLowerCase())
										return "yes" === e.toLowerCase();
									var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
									return isNaN(t) ? e : t;
								},
								Ut = function (e) {
									var t = {},
										r = e.split("=");
									return r.length > 1 && (t[Mt(r[0])] = Bt(r[1])), t;
								},
								Ft = function (e) {
									for (var t = e.split(","), r = {}, a = 0; t.length > a; a++) {
										var n = t[a],
											i = Ut(n);
										r = Object.assign(i, r);
									}
									return r;
								},
								Gt = function (e) {
									return e.indexOf("=") > -1;
								},
								Wt = function (e, t) {
									return -1 === t
										? [e]
										: [e.substring(0, t), e.substring(t + 1)];
								},
								Qt = function (e) {
									var t = {};
									if (e) {
										var r = e.search(",");
										return (
											[e.slice(0, r), e.slice(r + 1)].forEach(function (e, r) {
												for (
													var a = e.replace(/['"]+/g, "").split("="), n = 0;
													n < a.length;
													n++
												)
													"DATA-ID" === a[n] && (t["DATA-ID"] = a[1 - n]),
														"VALUE" === a[n] && (t.VALUE = a[1 - n]);
											}),
											{ data: t }
										);
									}
								},
								Vt = Nt,
								Jt = {
									safeCall: function (e, t, r, a) {
										var n = a;
										if (e && "function" == typeof e[t])
											try {
												n = e[t].apply(e, r);
											} catch (e) {
												f.info("safeCall error", e);
											}
										return n;
									},
									safeIncrement: y,
									getComputedStyle: function (e, t) {
										var r;
										if (
											e &&
											t &&
											n() &&
											"function" == typeof n().getComputedStyle
										)
											return (
												xt && xt.has(e) && (r = xt.get(e)),
												r ||
													((r = n().getComputedStyle(e, null)),
													xt && xt.set(e, r)),
												r.getPropertyValue(t)
											);
									},
									secondsToMs: function (e) {
										return Math.floor(1e3 * e);
									},
									assign: Object.assign,
									headersStringToObject: w,
									cdnHeadersToRequestId: T,
									extractHostnameAndDomain: v,
									extractHostname: h,
									manifestParser: Vt,
									generateShortID: o,
									generateUUID: i,
									now: _.now,
								},
								Kt = {
									PLAYER_READY: "playerready",
									VIEW_INIT: "viewinit",
									VIDEO_CHANGE: "videochange",
									PLAY: "play",
									PAUSE: "pause",
									PLAYING: "playing",
									TIME_UPDATE: "timeupdate",
									SEEKING: "seeking",
									SEEKED: "seeked",
									REBUFFER_START: "rebufferstart",
									REBUFFER_END: "rebufferend",
									ERROR: "error",
									ENDED: "ended",
									RENDITION_CHANGE: "renditionchange",
									ORIENTATION_CHANGE: "orientationchange",
									AD_REQUEST: "adrequest",
									AD_RESPONSE: "adresponse",
									AD_BREAK_START: "adbreakstart",
									AD_PLAY: "adplay",
									AD_PLAYING: "adplaying",
									AD_PAUSE: "adpause",
									AD_FIRST_QUARTILE: "adfirstquartile",
									AD_MID_POINT: "admidpoint",
									AD_THIRD_QUARTILE: "adthirdquartile",
									AD_ENDED: "adended",
									AD_BREAK_END: "adbreakend",
									AD_ERROR: "aderror",
									REQUEST_COMPLETED: "requestcompleted",
									REQUEST_FAILED: "requestfailed",
									REQUEST_CANCELLED: "requestcanceled",
								};
							function zt(e, t) {
								return (
									(function (e) {
										if (Array.isArray(e)) return e;
									})(e) ||
									(function (e, t) {
										var r =
											null == e
												? null
												: ("undefined" != typeof Symbol &&
														e[Symbol.iterator]) ||
												  e["@@iterator"];
										if (null != r) {
											var a,
												n,
												i = [],
												o = !0,
												s = !1;
											try {
												for (
													r = r.call(e);
													!(o = (a = r.next()).done) &&
													(i.push(a.value), !t || i.length !== t);
													o = !0
												);
											} catch (e) {
												(s = !0), (n = e);
											} finally {
												try {
													o || null == r.return || r.return();
												} finally {
													if (s) throw n;
												}
											}
											return i;
										}
									})(e, t) ||
									(function (e, t) {
										if (e) {
											if ("string" == typeof e) return Yt(e, t);
											var r = Object.prototype.toString.call(e).slice(8, -1);
											return (
												"Object" === r &&
													e.constructor &&
													(r = e.constructor.name),
												"Map" === r || "Set" === r
													? Array.from(e)
													: "Arguments" === r ||
													  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
													? Yt(e, t)
													: void 0
											);
										}
									})(e, t) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									})()
								);
							}
							function Yt(e, t) {
								(null == t || t > e.length) && (t = e.length);
								for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
								return a;
							}
							var Xt = {},
								$t = function e(t) {
									var r = arguments;
									"string" == typeof t
										? e.hasOwnProperty(t)
											? n().setTimeout(function () {
													(r = Array.prototype.splice.call(r, 1)),
														e[t].apply(null, r);
											  }, 0)
											: f.warn("`" + t + "` is an unknown task")
										: "function" == typeof t
										? n().setTimeout(function () {
												t(e);
										  }, 0)
										: f.warn("`" + t + "` is invalid.");
								},
								Zt = {
									loaded: _.now(),
									NAME: "mux-embed",
									VERSION: "4.25.1",
									API_VERSION: "2.1",
									PLAYER_TRACKED: !1,
									monitor: function (e, t) {
										return (function (e, t, r) {
											var a = Ot(u(t), 3),
												n = a[0],
												i = a[1],
												o = a[2],
												s = e.log,
												l = e.utils.getComputedStyle,
												d = e.utils.secondsToMs;
											if (!n)
												return s.error(
													"No element was found with the `" +
														i +
														"` query selector."
												);
											if ("video" !== o && "audio" !== o)
												return s.error(
													"The element of `" + i + "` was not a media element."
												);
											n.mux &&
												(n.mux.destroy(),
												delete n.mux,
												s.warn(
													"Already monitoring this video element, replacing existing event listeners"
												)),
												((r = Object.assign(
													{ automaticErrorTracking: !0 },
													r
												)).data = Object.assign(
													{
														player_software: "HTML5 Video Element",
														player_mux_plugin_name: "VideoElementMonitor",
														player_mux_plugin_version: e.VERSION,
													},
													r.data
												)),
												(r.getPlayheadTime = function () {
													return d(n.currentTime);
												}),
												(r.getStateData = function () {
													var e,
														t,
														a = this.hlsjs && this.hlsjs.url,
														i =
															this.dashjs &&
															kt("function" === this.dashjs.getSource) &&
															this.dashjs.getSource(),
														o = {
															player_is_paused: n.paused,
															player_playhead_time: d(n.currentTime),
															player_width: parseInt(l(n, "width")),
															player_height: parseInt(l(n, "height")),
															player_autoplay_on: n.autoplay,
															player_preload_on: n.preload,
															player_language_code: n.lang,
															player_is_fullscreen:
																Et() &&
																!!(
																	Et().fullscreenElement ||
																	Et().webkitFullscreenElement ||
																	Et().mozFullScreenElement ||
																	Et().msFullscreenElement
																),
															video_poster_url: n.poster,
															video_source_url: a || i || n.currentSrc,
															video_source_duration: d(n.duration),
															video_source_height: n.videoHeight,
															video_source_width: n.videoWidth,
															view_dropped_frame_count:
																null === (e = n) ||
																void 0 === e ||
																null === (t = e.getVideoPlaybackQuality) ||
																void 0 === t
																	? void 0
																	: t.call(e).droppedVideoFrames,
														},
														s = r.getPlayheadTime();
													if (n.getStartDate && s > 0) {
														var u = n.getStartDate();
														if (
															u &&
															"function" == typeof u.getTime &&
															u.getTime()
														) {
															var c = u.getTime();
															if (
																((o.player_program_time = c + s),
																n.seekable.length > 0)
															) {
																var f =
																	c + n.seekable.end(n.seekable.length - 1);
																o.player_live_edge_program_time = f;
															}
														}
													}
													return o;
												}),
												(n.mux = n.mux || {}),
												(n.mux.deleted = !1),
												(n.mux.emit = function (t, r) {
													e.emit(i, t, r);
												});
											var c = function () {
												s.error(
													"The monitor for this video element has already been destroyed."
												);
											};
											(n.mux.destroy = function () {
												Object.keys(n.mux.listeners).forEach(function (e) {
													n.removeEventListener(e, n.mux.listeners[e], !1);
												}),
													delete n.mux.listeners,
													(n.mux.destroy = c),
													(n.mux.swapElement = c),
													(n.mux.emit = c),
													(n.mux.addHLSJS = c),
													(n.mux.addDashJS = c),
													(n.mux.removeHLSJS = c),
													(n.mux.removeDashJS = c),
													(n.mux.deleted = !0),
													e.emit(i, "destroy");
											}),
												(n.mux.swapElement = function (t) {
													var r = Ot(u(t), 3),
														a = r[0],
														i = r[1],
														o = r[2];
													return a
														? "video" !== o && "audio" !== o
															? e.log.error(
																	"The element of `" +
																		i +
																		"` was not a media element."
															  )
															: ((a.muxId = n.muxId),
															  delete n.muxId,
															  (a.mux = a.mux || {}),
															  (a.mux.listeners = Object.assign(
																	{},
																	n.mux.listeners
															  )),
															  delete n.mux.listeners,
															  Object.keys(a.mux.listeners).forEach(function (
																	e
															  ) {
																	n.removeEventListener(
																		e,
																		a.mux.listeners[e],
																		!1
																	),
																		a.addEventListener(
																			e,
																			a.mux.listeners[e],
																			!1
																		);
															  }),
															  (a.mux.swapElement = n.mux.swapElement),
															  (a.mux.destroy = n.mux.destroy),
															  delete n.mux,
															  void (n = a))
														: e.log.error(
																"No element was found with the `" +
																	i +
																	"` query selector."
														  );
												}),
												(n.mux.addHLSJS = function (t) {
													e.addHLSJS(i, t);
												}),
												(n.mux.addDashJS = function (t) {
													e.addDashJS(i, t);
												}),
												(n.mux.removeHLSJS = function () {
													e.removeHLSJS(i);
												}),
												(n.mux.removeDashJS = function () {
													e.removeDashJS(i);
												}),
												e.init(i, r),
												e.emit(i, "playerready"),
												n.paused ||
													(e.emit(i, "play"),
													n.readyState > 2 && e.emit(i, "playing")),
												(n.mux.listeners = {}),
												St.forEach(function (t) {
													("error" !== t || r.automaticErrorTracking) &&
														((n.mux.listeners[t] = function () {
															var r = {};
															if ("error" === t) {
																if (!n.error) return;
																if (1 === n.error.code) return;
																(r.player_error_code = n.error.code),
																	(r.player_error_message =
																		qt[n.error.code] || n.error.message);
															}
															e.emit(i, t, r);
														}),
														n.addEventListener(t, n.mux.listeners[t], !1));
												});
										})($t, e, t);
									},
									destroyMonitor: function (e) {
										var t = zt(u(e), 1)[0];
										t && t.mux && "function" == typeof t.mux.destroy
											? t.mux.destroy()
											: f.error(
													"A video element monitor for `" +
														e +
														"` has not been initialized via `mux.monitor`."
											  );
									},
									addHLSJS: function (e, t) {
										var r = s(e);
										Xt[r]
											? Xt[r].addHLSJS(t)
											: f.error(
													"A monitor for `" + r + "` has not been initialized."
											  );
									},
									addDashJS: function (e, t) {
										var r = s(e);
										Xt[r]
											? Xt[r].addDashJS(t)
											: f.error(
													"A monitor for `" + r + "` has not been initialized."
											  );
									},
									removeHLSJS: function (e) {
										var t = s(e);
										Xt[t]
											? Xt[t].removeHLSJS()
											: f.error(
													"A monitor for `" + t + "` has not been initialized."
											  );
									},
									removeDashJS: function (e) {
										var t = s(e);
										Xt[t]
											? Xt[t].removeDashJS()
											: f.error(
													"A monitor for `" + t + "` has not been initialized."
											  );
									},
									init: function (e, t) {
										p() &&
											t &&
											t.respectDoNotTrack &&
											f.info(
												"The browser's Do Not Track flag is enabled - Mux beaconing is disabled."
											);
										var r = s(e);
										Xt[r] = new wt($t, r, t);
									},
									emit: function (e, t, r) {
										var a = s(e);
										Xt[a]
											? (Xt[a].emit(t, r), "destroy" === t && delete Xt[a])
											: f.error(
													"A monitor for `" + a + "` has not been initialized."
											  );
									},
									checkDoNotTrack: p,
									log: f,
									utils: Jt,
									events: Kt,
									WINDOW_HIDDEN: !1,
									WINDOW_UNLOADING: !1,
								};
							Object.assign($t, Zt),
								void 0 !== n() &&
									"function" == typeof n().addEventListener &&
									n().addEventListener(
										"pagehide",
										function (e) {
											e.persisted || ($t.WINDOW_UNLOADING = !0);
										},
										!1
									);
							var er = $t;
						},
						655: function (e, t, r) {
							var a, n;
							function i(e) {
								return (
									(i =
										"function" == typeof Symbol &&
										"symbol" == typeof Symbol.iterator
											? function (e) {
													return typeof e;
											  }
											: function (e) {
													return e &&
														"function" == typeof Symbol &&
														e.constructor === Symbol &&
														e !== Symbol.prototype
														? "symbol"
														: typeof e;
											  }),
									i(e)
								);
								/*!
								 * JavaScript Cookie v2.1.3
								 * https://github.com/js-cookie/js-cookie
								 *
								 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
								 * Released under the MIT license
								 */
							}
							!(function (o) {
								var s = !1;
								if (
									(void 0 ===
										(n =
											"function" == typeof (a = o) ? a.call(t, r, t, e) : a) ||
										(e.exports = n),
									(s = !0),
									"object" === i(t) && ((e.exports = o()), (s = !0)),
									!s)
								) {
									var u = window.Cookies,
										l = (window.Cookies = o());
									l.noConflict = function () {
										return (window.Cookies = u), l;
									};
								}
							})(function () {
								var e = function () {
									for (var e = 0, t = {}; e < arguments.length; e++) {
										var r = arguments[e];
										for (var a in r) t[a] = r[a];
									}
									return t;
								};
								return (function t(r) {
									function a(t, n, i) {
										var o;
										if ("undefined" != typeof document) {
											if (arguments.length > 1) {
												if (
													"number" ==
													typeof (i = e({ path: "/" }, a.defaults, i)).expires
												) {
													var s = new Date();
													s.setMilliseconds(
														s.getMilliseconds() + 864e5 * i.expires
													),
														(i.expires = s);
												}
												try {
													(o = JSON.stringify(n)), /^[\{\[]/.test(o) && (n = o);
												} catch (e) {}
												return (
													(n = r.write
														? r.write(n, t)
														: encodeURIComponent(String(n)).replace(
																/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
																decodeURIComponent
														  )),
													(t = (t = (t = encodeURIComponent(String(t))).replace(
														/%(23|24|26|2B|5E|60|7C)/g,
														decodeURIComponent
													)).replace(/[\(\)]/g, escape)),
													(document.cookie = [
														t,
														"=",
														n,
														i.expires
															? "; expires=" + i.expires.toUTCString()
															: "",
														i.path ? "; path=" + i.path : "",
														i.domain ? "; domain=" + i.domain : "",
														i.secure ? "; secure" : "",
													].join(""))
												);
											}
											t || (o = {});
											for (
												var u = document.cookie
														? document.cookie.split("; ")
														: [],
													l = /(%[0-9A-Z]{2})+/g,
													d = 0;
												d < u.length;
												d++
											) {
												var c = u[d].split("="),
													f = c.slice(1).join("=");
												'"' === f.charAt(0) && (f = f.slice(1, -1));
												try {
													var p = c[0].replace(l, decodeURIComponent);
													if (
														((f = r.read
															? r.read(f, p)
															: r(f, p) || f.replace(l, decodeURIComponent)),
														this.json)
													)
														try {
															f = JSON.parse(f);
														} catch (e) {}
													if (t === p) {
														o = f;
														break;
													}
													t || (o[p] = f);
												} catch (e) {}
											}
											return o;
										}
									}
									return (
										(a.set = a),
										(a.get = function (e) {
											return a.call(a, e);
										}),
										(a.getJSON = function () {
											return a.apply({ json: !0 }, [].slice.call(arguments));
										}),
										(a.defaults = {}),
										(a.remove = function (t, r) {
											a(t, "", e(r, { expires: -1 }));
										}),
										(a.withConverter = t),
										a
									);
								})(function () {});
							});
						},
						153: function (e, t, r) {
							var a,
								n =
									void 0 !== r.g
										? r.g
										: "undefined" != typeof window
										? window
										: {},
								i = r(558);
							"undefined" != typeof document
								? (a = document)
								: (a = n["__GLOBAL_DOCUMENT_CACHE@4"]) ||
								  (a = n["__GLOBAL_DOCUMENT_CACHE@4"] = i),
								(e.exports = a);
						},
						48: function (e, t, r) {
							var a;
							(a =
								"undefined" != typeof window
									? window
									: void 0 !== r.g
									? r.g
									: "undefined" != typeof self
									? self
									: {}),
								(e.exports = a);
						},
						640: function (e, t, r) {
							var a, n;
							!(function (i, o) {
								"use strict";
								(a = function () {
									var e = function () {},
										t = "undefined",
										r =
											typeof window !== t &&
											typeof window.navigator !== t &&
											/Trident\/|MSIE /.test(window.navigator.userAgent),
										a = ["trace", "debug", "info", "warn", "error"];
									function n(e, t) {
										var r = e[t];
										if ("function" == typeof r.bind) return r.bind(e);
										try {
											return Function.prototype.bind.call(r, e);
										} catch (t) {
											return function () {
												return Function.prototype.apply.apply(r, [
													e,
													arguments,
												]);
											};
										}
									}
									function i() {
										console.log &&
											(console.log.apply
												? console.log.apply(console, arguments)
												: Function.prototype.apply.apply(console.log, [
														console,
														arguments,
												  ])),
											console.trace && console.trace();
									}
									function o(a) {
										return (
											"debug" === a && (a = "log"),
											typeof console !== t &&
												("trace" === a && r
													? i
													: void 0 !== console[a]
													? n(console, a)
													: void 0 !== console.log
													? n(console, "log")
													: e)
										);
									}
									function s(t, r) {
										for (var n = 0; n < a.length; n++) {
											var i = a[n];
											this[i] = n < t ? e : this.methodFactory(i, t, r);
										}
										this.log = this.debug;
									}
									function u(e, r, a) {
										return function () {
											typeof console !== t &&
												(s.call(this, r, a), this[e].apply(this, arguments));
										};
									}
									function l(e, t, r) {
										return o(e) || u.apply(this, arguments);
									}
									function d(e, r, n) {
										var i,
											o = this;
										r = null == r ? "WARN" : r;
										var u = "loglevel";
										function d(e) {
											var r = (a[e] || "silent").toUpperCase();
											if (typeof window !== t && u) {
												try {
													return void (window.localStorage[u] = r);
												} catch (e) {}
												try {
													window.document.cookie =
														encodeURIComponent(u) + "=" + r + ";";
												} catch (e) {}
											}
										}
										function c() {
											var e;
											if (typeof window !== t && u) {
												try {
													e = window.localStorage[u];
												} catch (e) {}
												if (typeof e === t)
													try {
														var r = window.document.cookie,
															a = r.indexOf(encodeURIComponent(u) + "=");
														-1 !== a && (e = /^([^;]+)/.exec(r.slice(a))[1]);
													} catch (e) {}
												return void 0 === o.levels[e] && (e = void 0), e;
											}
										}
										function f() {
											if (typeof window !== t && u) {
												try {
													return void window.localStorage.removeItem(u);
												} catch (e) {}
												try {
													window.document.cookie =
														encodeURIComponent(u) +
														"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
												} catch (e) {}
											}
										}
										"string" == typeof e
											? (u += ":" + e)
											: "symbol" == typeof e && (u = void 0),
											(o.name = e),
											(o.levels = {
												TRACE: 0,
												DEBUG: 1,
												INFO: 2,
												WARN: 3,
												ERROR: 4,
												SILENT: 5,
											}),
											(o.methodFactory = n || l),
											(o.getLevel = function () {
												return i;
											}),
											(o.setLevel = function (r, a) {
												if (
													("string" == typeof r &&
														void 0 !== o.levels[r.toUpperCase()] &&
														(r = o.levels[r.toUpperCase()]),
													!(
														"number" == typeof r &&
														r >= 0 &&
														r <= o.levels.SILENT
													))
												)
													throw (
														"log.setLevel() called with invalid level: " + r
													);
												if (
													((i = r),
													!1 !== a && d(r),
													s.call(o, r, e),
													typeof console === t && r < o.levels.SILENT)
												)
													return "No console available for logging";
											}),
											(o.setDefaultLevel = function (e) {
												(r = e), c() || o.setLevel(e, !1);
											}),
											(o.resetLevel = function () {
												o.setLevel(r, !1), f();
											}),
											(o.enableAll = function (e) {
												o.setLevel(o.levels.TRACE, e);
											}),
											(o.disableAll = function (e) {
												o.setLevel(o.levels.SILENT, e);
											});
										var p = c();
										null == p && (p = r), o.setLevel(p, !1);
									}
									var c = new d(),
										f = {};
									c.getLogger = function (e) {
										if (
											("symbol" != typeof e && "string" != typeof e) ||
											"" === e
										)
											throw new TypeError(
												"You must supply a name when creating a logger."
											);
										var t = f[e];
										return (
											t || (t = f[e] = new d(e, c.getLevel(), c.methodFactory)),
											t
										);
									};
									var p = typeof window !== t ? window.log : void 0;
									return (
										(c.noConflict = function () {
											return (
												typeof window !== t &&
													window.log === c &&
													(window.log = p),
												c
											);
										}),
										(c.getLoggers = function () {
											return f;
										}),
										(c.default = c),
										c
									);
								}),
									void 0 ===
										(n = "function" == typeof a ? a.call(t, r, t, e) : a) ||
										(e.exports = n);
							})();
						},
						375: function (e, t) {
							"use strict";
							var r = Object.prototype.hasOwnProperty;
							function a(e) {
								try {
									return decodeURIComponent(e.replace(/\+/g, " "));
								} catch (e) {
									return null;
								}
							}
							function n(e) {
								try {
									return encodeURIComponent(e);
								} catch (e) {
									return null;
								}
							}
							(t.stringify = function (e, t) {
								t = t || "";
								var a,
									i,
									o = [];
								for (i in ("string" != typeof t && (t = "?"), e))
									if (r.call(e, i)) {
										if (
											((a = e[i]) || (null != a && !isNaN(a)) || (a = ""),
											(i = n(i)),
											(a = n(a)),
											null === i || null === a)
										)
											continue;
										o.push(i + "=" + a);
									}
								return o.length ? t + o.join("&") : "";
							}),
								(t.parse = function (e) {
									for (
										var t, r = /([^=?#&]+)=?([^&]*)/g, n = {};
										(t = r.exec(e));

									) {
										var i = a(t[1]),
											o = a(t[2]);
										null === i || null === o || i in n || (n[i] = o);
									}
									return n;
								});
						},
						558: function () {},
					},
					t = {};
				function r(a) {
					var n = t[a];
					if (void 0 !== n) return n.exports;
					var i = (t[a] = { exports: {} });
					return e[a].call(i.exports, i, i.exports, r), i.exports;
				}
				return (
					(r.n = function (e) {
						var t =
							e && e.__esModule
								? function () {
										return e.default;
								  }
								: function () {
										return e;
								  };
						return r.d(t, { a: t }), t;
					}),
					(r.d = function (e, t) {
						for (var a in t)
							r.o(t, a) &&
								!r.o(e, a) &&
								Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
					}),
					(r.g = (function () {
						if ("object" == typeof globalThis) return globalThis;
						try {
							return this || new Function("return this")();
						} catch (e) {
							if ("object" == typeof window) return window;
						}
					})()),
					(r.o = function (e, t) {
						return Object.prototype.hasOwnProperty.call(e, t);
					}),
					r(80)
				);
			})();
		}),
		"object" == typeof exports && "object" == typeof module
			? (module.exports = t())
			: "object" == typeof exports
			? (exports.mux = t())
			: (e.mux = t());
})();