(window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = [].slice,
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = function(t) {
                        return t.jquery || t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType)
                    },
                    a = r.prototype = i.to({}, .1, {}),
                    o = [];
                r.version = "1.10.2", a.constructor = r, a.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, a.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, a.updateTo = function(t, e) {
                    var s, r = this.ratio;
                    e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var n = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                    }
                    return this
                }, a.render = function(t, e, i) {
                    var s, r, n, a, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._totalTime,
                        c = this._cycle;
                    if (t >= u ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / this._duration, l = this._easeType, _ = this._easePower, (1 === l || 3 === l && h >= .5) && (h = 1 - h), 3 === l && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === l ? 1 - h : 2 === l ? h : .5 > this._time / this._duration ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), p === this._time && !i) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === f && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), this._cycle !== c && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || o)))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, a, h, l, _, u) {
                    h = h || 0;
                    var p, f, c, m, d = a.delay || 0,
                        g = [],
                        v = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), l.apply(u || this, _ || o)
                        };
                    for (t instanceof Array || ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s.call(t, 0))), p = t.length, c = 0; p > c; c++) {
                        f = {};
                        for (m in a) f[m] = a[m];
                        f.delay = d, c === p - 1 && l && (f.onComplete = v), g[c] = new r(t[c], e, f), d += h
                    }
                    return g
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    for (var e, s = i.getTweensOf(t), r = s.length; --r > -1;)
                        if (e = s[r], e._active || e._startTime === e._timeline._time && e._timeline._active) return !0;
                    return !1
                };
                var h = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(h(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    l = r.getAllTweens = function(e) {
                        return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = l(0 != r),
                        _ = h.length,
                        u = i && s && r;
                    for (o = 0; _ > o; o++) a = h[o], (u || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var a, o, h, l, _, u = i._tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s(t, 0)), t instanceof Array)
                            for (l = t.length; --l > -1;) r.killChildTweensOf(t[l], e);
                        else {
                            a = [];
                            for (h in u)
                                for (o = u[h].target.parentNode; o;) o === t && (a = a.concat(u[h].tweens)), o = o.parentNode;
                            for (_ = a.length, l = 0; _ > l; l++) e && a[l].totalTime(a[l].totalDuration()), a[l]._enabled(!1, !1)
                        }
                    }
                };
                var _ = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = l(r), h = i && s && r, _ = o.length; --_ > -1;) a = o[_], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    _(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    _(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || 1e-6, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, a.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, a.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, a.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, a.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, a.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, a.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, a.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, a.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], i instanceof Array && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        r.tweens instanceof Array && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = [],
                    n = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    a = function(t, e, i, s) {
                        t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || r)
                    },
                    o = r.slice,
                    h = s.prototype = new e;
                return s.version = "1.10.2", h.constructor = s, h.kill()._gc = !1, h.to = function(t, e, s, r) {
                    return e ? this.add(new i(t, e, s), r) : this.set(t, s, r)
                }, h.from = function(t, e, s, r) {
                    return this.add(i.from(t, e, s), r)
                }, h.fromTo = function(t, e, s, r, n) {
                    return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, h.staggerTo = function(t, e, r, a, h, l, _, u) {
                    var p, f = new s({
                        onComplete: l,
                        onCompleteParams: _,
                        onCompleteScope: u
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), !(t instanceof Array) && t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType) && (t = o.call(t, 0)), a = a || 0, p = 0; t.length > p; p++) r.startAt && (r.startAt = n(r.startAt)), f.to(t[p], e, n(r), p * a);
                    return this.add(f, h)
                }, h.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, h.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, h.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, h.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, h.add = function(r, n, a, o) {
                    var h, l, _, u, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array) {
                            for (a = a || "normal", o = o || 0, h = n, l = r.length, _ = 0; l > _; _++)(u = r[_]) instanceof Array && (u = new s({
                                tweens: u
                            })), this.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === a ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === a && (u._startTime -= u.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                        for (p = this; p._gc && p._timeline;) p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
                    return this
                }, h.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, h._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this._last._startTime && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                }, h.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, h.insert = h.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, h.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, h.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, h.addPause = function(t, e, i, s) {
                    return this.call(a, ["{self}", e, i, s], this, t)
                }, h.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, h.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, h._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r instanceof Array)
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, h.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, h.stop = function() {
                    return this.paused(!0)
                }, h.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, h.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, l = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._time,
                        u = this._startTime,
                        p = this._timeScale,
                        f = this._paused;
                    if (t >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, t = l + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== _ && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= _)
                            for (s = this._first; s && (a = s._next, !this._paused || f);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || f);)(s._active || _ >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._gc || (u === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                    }
                }, h._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, h.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, h.getTweensOf = function(t, e) {
                    for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
                    return n
                }, h._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, h.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, h._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, h.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, h.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return this
                }, h._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * t, !1) : this._time / this.duration()
                }, h.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, h.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, h.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, h.rawTime = function() {
                    return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = [],
                    n = new i(null, null, 1, 0),
                    a = function(t) {
                        for (; t;) {
                            if (t._paused) return !0;
                            t = t._timeline
                        }
                        return !1
                    },
                    o = s.prototype = new t;
                return o.constructor = s, o.kill()._gc = !1, s.version = "1.10.2", o.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, o.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, o.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, o.tweenTo = function(t, i) {
                    i = i || {};
                    var s, a, o = {
                        ease: n,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(t), a = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || .001, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
                    }, a
                }, o.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, o.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._duration,
                        p = this._time,
                        f = this._totalTime,
                        c = this._startTime,
                        m = this._timeScale,
                        d = this._rawPrevTime,
                        g = this._paused,
                        v = this._cycle;
                    if (t >= _ ? (this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === u && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = u, t = u + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === u && this._rawPrevTime > 0 && !this._locked) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === u && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : (this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = u + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = u - this._time), this._time > u ? (this._time = u, t = u + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== v && !this._locked) {
                        var y = this._yoyo && 0 !== (1 & v),
                            T = y === (this._yoyo && 0 !== (1 & this._cycle)),
                            x = this._totalTime,
                            w = this._cycle,
                            b = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = v * u, v > this._cycle ? y = !y : this._totalTime += u, this._time = p, this._rawPrevTime = 0 === u ? d - 1e-5 : d, this._cycle = v, this._locked = !0, p = y ? 0 : u, this.render(p, e, 0 === u), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (p = y ? u + 1e-6 : -1e-6, this.render(p, !0, !1)), this._locked = !1, this._paused && !g) return;
                        this._time = P, this._totalTime = x, this._cycle = w, this._rawPrevTime = b
                    }
                    if (!(this._time !== p && this._first || i || h)) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= p)
                        for (s = this._first; s && (a = s._next, !this._paused || g);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || g);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._locked || this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                }, o.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        o = this.getChildren(t, e, i),
                        h = 0,
                        l = o.length;
                    for (s = 0; l > s; s++) r = o[s], r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (a(r._timeline) || (n[h++] = r));
                    return n
                }, o.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, o.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, o.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, o.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, o.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, o.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, o.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, o.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, o.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, o.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = Math.PI / 180,
                    i = [],
                    s = [],
                    r = [],
                    n = {},
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            f = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    l = function(t, e, n, a, o) {
                        var l, _, u, p, f, c, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; w > l; l++) f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, o ? (y = i[l], T = s[l], x = .25 * (T + y) * e / (a ? .5 : r[l] || .5), c = u - (u - _) * (a ? .5 * e : 0 !== y ? x / y : 0), m = u + (p - u) * (a ? .5 * e : 0 !== T ? x / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * e, m = u + .5 * (p - u) * e, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, e, r, n) {
                        var o, h, l, _, u, p, f = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][e]) && "=" === p.charAt(1) && (t[h][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][e], 0, 0, t[-1 > o ? 0 : 1][e]), f;
                        for (h = 0; o > h; h++) l = t[h][e], _ = t[h + 1][e], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][e], i[h] = (i[h] || 0) + (_ - l) * (_ - l), s[h] = (s[h] || 0) + (u - _) * (u - _));
                        return f[h] = new a(t[h][e], 0, 0, t[h + 1][e]), f
                    },
                    u = function(t, e, a, h, u, p) {
                        var f, c, m, d, g, v, y, T, x = {},
                            w = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == e && (e = 1);
                        for (c in t[0]) w.push(c);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;)
                                if (c = w[f], Math.abs(b[c] - T[c]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (i.length = s.length = r.length = 0, f = w.length; --f > -1;) c = w[f], n[c] = -1 !== u.indexOf("," + c + ","), x[c] = _(t, c, n[c], p);
                        for (f = i.length; --f > -1;) i[f] = Math.sqrt(i[f]), s[f] = Math.sqrt(s[f]);
                        if (!h) {
                            for (f = w.length; --f > -1;)
                                if (n[c])
                                    for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / s[d] + m[d].da / i[d], r[d] = (r[d] || 0) + g * g;
                            for (f = r.length; --f > -1;) r[f] = Math.sqrt(r[f])
                        }
                        for (f = w.length, d = a ? 4 : 1; --f > -1;) c = w[f], m = x[c], l(m, e, a, h, n[c]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return x
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, h, l, _, u, p, f, c, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    c = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            p = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = c(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;)
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            return !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                f = this._func,
                                c = this._target;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0), f[n] ? c[n](h) : c[n] = h;
                            if (this._autoRotate) {
                                var m, d, g, v, y, T, x, w = this._autoRotate;
                                for (r = w.length; --r > -1;) n = w[r][2], T = w[r][3] || 0, x = w[r][4] === !0 ? 1 : t, a = this._beziers[w[r][0]], m = this._beziers[w[r][1]], a && m && (a = a[i], m = m[i], d = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, d += (v - d) * o, v += (a.c + (a.d - a.c) * o - v) * o, g = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, g += (y - g) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = Math.atan2(y - g, v - d) * x + T, f[n] ? c[n](h) : c[n] = h)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = window._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var i = t._internals,
                            s = i._parseToProxy,
                            r = i._setPluginRatio,
                            n = i.CSSPropTween;
                        i._registerComplexSpecialProp("bezier", {
                            parser: function(t, i, a, o, h, l) {
                                i instanceof Array && (i = {
                                    values: i
                                }), l = new m;
                                var _, u, p, f = i.values,
                                    c = f.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > c) return h;
                                for (_ = 0; c >= _; _++) p = s(t, f[_], o, h, l, c !== _), d[_] = p.end;
                                for (u in i) g[u] = i[u];
                                return g.values = d, h = new n(t, "bezier", 0, 0, p.pt, 2), h.data = p, h.plugin = l, h.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (_ = g.autoRotate === !0 ? 0 : Number(g.autoRotate) * e,
                                    g.autoRotate = null != p.end.left ? [
                                        ["left", "top", "rotation", _, !0]
                                    ] : null != p.end.x && [
                                        ["x", "y", "rotation", _, !0]
                                    ]), g.autoRotate && (o._transform || o._enableTransforms(!1), p.autoRotate = o._target._gsTransform), l._onInitTween(p.proxy, g, o._tween), h
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.10.2", a.API = 2, a.defaultTransformPerspective = 0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h
                };
                var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/,
                    x = /opacity:([^;]*)/,
                    w = /alpha\(opacity *=.+?\)/i,
                    b = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    D = Math.PI / 180,
                    I = 180 / Math.PI,
                    F = {},
                    X = document,
                    N = X.createElement("div"),
                    L = X.createElement("img"),
                    E = a._internals = {
                        _specialProps: o
                    },
                    z = navigator.userAgent,
                    Y = function() {
                        var t, e = z.indexOf("Android"),
                            i = X.createElement("div");
                        return u = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === e || Number(z.substr(e + 8, 1)) > 3), f = u && 6 > Number(z.substr(z.indexOf("Version/") + 8, 1)), p = -1 !== z.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z), c = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], !!t && /^0.55/.test(t.style.opacity)
                    }(),
                    U = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    B = function(t) {
                        window.console && console.log(t)
                    },
                    j = "",
                    V = "",
                    q = function(t, e) {
                        e = e || N;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (V = 3 === s ? "ms" : i[s], j = "-" + V.toLowerCase() + "-", V + t) : null
                    },
                    Z = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                    W = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return Y || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
                    },
                    $ = function(t, e, i, s, r) {
                        if ("px" === s || !s) return i;
                        if ("auto" === s || !i) return 0;
                        var n, a = A.test(e),
                            o = t,
                            h = N.style,
                            l = 0 > i;
                        return l && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || X.body, h[a ? "width" : "height"] = i + s), o.appendChild(N), n = parseFloat(N[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(N), 0 !== n || r || (n = $(t, e, i, s, !0))), l ? -n : n
                    },
                    G = function(t, e, i) {
                        if ("absolute" !== W(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = W(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    Q = function(t, e) {
                        var i, s, r = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(S, k)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) r[i.replace(S, k)] = e[i];
                        return Y || (r.opacity = U(t)), s = bt(t, e, !1), r.rotation = s.rotation * I, r.skewX = s.skewX * I, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, wt && (r.z = s.z, r.rotationX = s.rotationX * I, r.rotationY = s.rotationY * I, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    H = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : G(t, a), void 0 !== l[a] && (o = new ut(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    K = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    tt = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = K[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(W(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(W(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    et = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    it = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    st = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    rt = function(t, e, i, s) {
                        var r, n, a, o, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t * D : (r = 2 * Math.PI, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? D : 1) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    nt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    at = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ot = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), nt[t] ? nt[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = at(r + 1 / 3, e, i), t[1] = at(r, e, i), t[2] = at(r - 1 / 3, e, i), t) : (t = t.match(m) || nt.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : nt.black
                    },
                    ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in nt) ht += "|" + h + "\\b";
                ht = RegExp(ht + ")", "gi");
                var lt = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(ht) || [""])[0] : "",
                            a = t.split(n).join("").match(g) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(m, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, f, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (c = t.replace(M, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                                return c.join(",")
                            }
                            if (e = (t.match(ht) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, _ > f--)
                                for (; _ > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(g) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    _t = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ut = (E._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    pt = (E._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            f = {},
                            c = i._transform,
                            m = F;
                        for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new ut(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new ut(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    }, E.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pt || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    ft = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
                        i = i || n || "", a = new pt(t, e, 0, 0, a, _ ? 2 : 1, null, (!1), o, i, s), s += "";
                        var u, p, f, c, g, v, y, T, x, w, P, S, R = i.split(", ").join(",").split(" "),
                            k = s.split(", ").join(",").split(" "),
                            A = R.length,
                            C = l !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), A = R.length), A !== k.length && (R = (n || "").split(" "), A = R.length), a.plugin = h, a.setRatio = _, u = 0; A > u; u++)
                            if (c = R[u], g = k[u], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, it(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
                            else if (r && ("#" === c.charAt(0) || nt[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = ot(c), g = ot(g), x = c.length + g.length > 6, x && !Y && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[u]).join("transparent")) : (Y || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? "," : S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                        else if (v = c.match(m)) {
                            if (y = g.match(d), !y || y.length !== v.length) return a;
                            for (f = 0, p = 0; v.length > p; p++) P = v[p], w = c.indexOf(P, f), a.appendXtra(c.substr(f, w - f), Number(P), it(y[p], P), "", C && "px" === c.substr(w + P.length, 2), 0 === p), f = w + P.length;
                            a["xs" + a.l] += c.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + c : c;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ct = 9;
                for (h = pt.prototype, h.l = h.pr = 0; --ct > 0;) h["xn" + ct] = 0, h["xs" + ct] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var mt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? q(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || lt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    dt = E._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new mt(n[s], e)
                    },
                    gt = function(t) {
                        if (!o[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            dt(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                    return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (B("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = mt.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return ft(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(W(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    dt(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new pt(t, r, 0, 0, a, 2, r, (!1), i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                };
                var vt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    yt = q("transform"),
                    Tt = j + "transform",
                    xt = q("transformOrigin"),
                    wt = null !== q("perspective"),
                    bt = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            y = 0 > v.scaleX,
                            T = 2e-5,
                            x = 1e5,
                            w = -Math.PI + 1e-4,
                            b = Math.PI - 1e-4,
                            P = wt ? parseFloat(W(t, xt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        for (yt ? r = W(t, Tt, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(C), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]), n[o] = (l = h - (h |= 0)) ? (0 | l * x + (0 > l ? -.5 : .5)) / x + h : h;
                        if (16 === n.length) {
                            var S = n[8],
                                R = n[9],
                                k = n[10],
                                A = n[12],
                                O = n[13],
                                M = n[14];
                            if (v.zOrigin && (M = -v.zOrigin, A = S * M - n[12], O = R * M - n[13], M = k * M + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                                var D, I, F, X, N, L, E, z = n[0],
                                    Y = n[1],
                                    U = n[2],
                                    B = n[3],
                                    j = n[4],
                                    V = n[5],
                                    q = n[6],
                                    Z = n[7],
                                    $ = n[11],
                                    G = v.rotationX = Math.atan2(q, k),
                                    Q = w > G || G > b;
                                G && (X = Math.cos(-G), N = Math.sin(-G), D = j * X + S * N, I = V * X + R * N, F = q * X + k * N, S = j * -N + S * X, R = V * -N + R * X, k = q * -N + k * X, $ = Z * -N + $ * X, j = D, V = I, q = F), G = v.rotationY = Math.atan2(S, z), G && (L = w > G || G > b, X = Math.cos(-G), N = Math.sin(-G), D = z * X - S * N, I = Y * X - R * N, F = U * X - k * N, R = Y * N + R * X, k = U * N + k * X, $ = B * N + $ * X, z = D, Y = I, U = F), G = v.rotation = Math.atan2(Y, V), G && (E = w > G || G > b, X = Math.cos(-G), N = Math.sin(-G), z = z * X + j * N, I = Y * X + V * N, V = Y * -N + V * X, q = U * -N + q * X, Y = I), E && Q ? v.rotation = v.rotationX = 0 : E && L ? v.rotation = v.rotationY = 0 : L && Q && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(z * z + Y * Y) * x + .5) / x, v.scaleY = (0 | Math.sqrt(V * V + R * R) * x + .5) / x, v.scaleZ = (0 | Math.sqrt(q * q + k * k) * x + .5) / x, v.skewX = 0, v.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, v.x = A, v.y = O, v.z = M
                            }
                        } else if (!(wt && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === W(t, "display", e))) {
                            var H = n.length >= 6,
                                K = H ? n[0] : 1,
                                J = n[1] || 0,
                                tt = n[2] || 0,
                                et = H ? n[3] : 1;
                            v.x = n[4] || 0, v.y = n[5] || 0, _ = Math.sqrt(K * K + J * J), u = Math.sqrt(et * et + tt * tt), p = K || J ? Math.atan2(J, K) : v.rotation || 0, f = tt || et ? Math.atan2(tt, et) + p : v.skewX || 0, c = _ - Math.abs(v.scaleX || 0), m = u - Math.abs(v.scaleY || 0), Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (y ? (_ *= -1, f += 0 >= p ? Math.PI : -Math.PI, p += 0 >= p ? Math.PI : -Math.PI) : (u *= -1, f += 0 >= f ? Math.PI : -Math.PI)), d = (p - v.rotation) % Math.PI, g = (f - v.skewX) % Math.PI, (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > w && b > d && !1 | d * x || g > w && b > g && !1 | g * x) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = f), wt && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = P;
                        for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
                        return i && (t._gsTransform = v), v
                    },
                    Pt = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation,
                            n = r + s.skewX,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var f, m, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                w = s.x,
                                b = s.y;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + m * h), b += m - (f * l + m * _)), v) f = d / 2, m = g / 2, x += ", Dx=" + (f - (f * o + m * h) + w) + ", Dy=" + (m - (f * l + m * _) + b) + ")";
                            else {
                                var P, S, R, k = 8 > c ? 1 : -1;
                                for (f = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), ct = 0; 4 > ct; ct++) S = J[ct], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== s[S] ? 2 > ct ? -s.ieOffsetX : -s.ieOffsetY : 2 > ct ? f - s.ieOffsetX : m - s.ieOffsetY, u[S] = (s[S] = Math.round(i - R * (0 === ct || 2 === ct ? 1 : k))) + "px";
                                x += ", sizingMethod='auto expand')"
                            }
                            u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, x) : x + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
                        }
                    },
                    St = function() {
                        var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, x, w, b, P, S, R, k, A = this.data,
                            C = this.t.style,
                            O = A.rotation,
                            M = A.scaleX,
                            D = A.scaleY,
                            I = A.scaleZ;
                        if (p && (S = C.top ? "top" : C.bottom ? "bottom" : parseFloat(W(this.t, "top", null, !1)) ? "bottom" : "top", x = W(this.t, S, null, !1), R = parseFloat(x) || 0, k = x.substr((R + "").length) || "px", A._ffFix = !A._ffFix, C[S] = (A._ffFix ? R + .05 : R - .05) + k), O || A.skewX) y = Math.cos(O), T = Math.sin(O), t = y, r = T, A.skewX && (O -= A.skewX, y = Math.cos(O), T = Math.sin(O)), e = -T, n = y;
                        else {
                            if (!A.rotationY && !A.rotationX && 1 === I) return void(C[yt] = "translate3d(" + A.x + "px," + A.y + "px," + A.z + "px)" + (1 !== M || 1 !== D ? " scale(" + M + "," + D + ")" : ""));
                            t = n = 1, e = r = 0
                        }
                        _ = 1, i = s = a = o = h = l = u = f = c = 0, d = A.perspective, m = d ? -1 / d : 0, g = A.zOrigin, v = 1e5, O = A.rotationY, O && (y = Math.cos(O), T = Math.sin(O), h = _ * -T, f = m * -T, i = t * T, a = r * T, _ *= y, m *= y, t *= y, r *= y), O = A.rotationX, O && (y = Math.cos(O), T = Math.sin(O), x = e * y + i * T, w = n * y + a * T, b = l * y + _ * T, P = c * y + m * T, i = e * -T + i * y, a = n * -T + a * y, _ = l * -T + _ * y, m = c * -T + m * y, e = x, n = w, l = b, c = P), 1 !== I && (i *= I, a *= I, _ *= I, m *= I), 1 !== D && (e *= D, n *= D, l *= D, c *= D), 1 !== M && (t *= M, r *= M, h *= M, f *= M), g && (u -= g, s = i * u, o = a * u, u = _ * u + g), s = (x = (s += A.x) - (s |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + s : s, o = (x = (o += A.y) - (o |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + o : o, u = (x = (u += A.z) - (u |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + u : u, C[yt] = "matrix3d(" + [(0 | t * v) / v, (0 | r * v) / v, (0 | h * v) / v, (0 | f * v) / v, (0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, s, o, u, d ? 1 + -u / d : 1].join(",") + ")"
                    },
                    Rt = function() {
                        var t, e, i, s, r, n, a, o, h, l = this.data,
                            _ = this.t,
                            u = _.style;
                        p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(W(_, "top", null, !1)) ? "bottom" : "top", e = W(_, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + s), l.rotation || l.skewX ? (r = l.rotation, n = r - l.skewX, a = 1e5, o = l.scaleX * a, h = l.scaleY * a, u[yt] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[yt] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
                    };
                dt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function(t, e, i, s, n, a, o) {
                        if (s._transform) return n;
                        var h, l, _, u, p, f, c, m = s._transform = bt(t, r, !0, o.parseTransform),
                            d = t.style,
                            g = 1e-6,
                            v = vt.length,
                            y = o,
                            T = {};
                        if ("string" == typeof y.transform && yt) _ = d.cssText, d[yt] = y.transform, d.display = "block", h = bt(t, null, !1), d.cssText = _;
                        else if ("object" == typeof y) {
                            if (h = {
                                    scaleX: st(null != y.scaleX ? y.scaleX : y.scale, m.scaleX),
                                    scaleY: st(null != y.scaleY ? y.scaleY : y.scale, m.scaleY),
                                    scaleZ: st(null != y.scaleZ ? y.scaleZ : y.scale, m.scaleZ),
                                    x: st(y.x, m.x),
                                    y: st(y.y, m.y),
                                    z: st(y.z, m.z),
                                    perspective: st(y.transformPerspective, m.perspective)
                                }, c = y.directionalRotation, null != c)
                                if ("object" == typeof c)
                                    for (_ in c) y[_] = c[_];
                                else y.rotation = c;
                            h.rotation = rt("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : "rotationZ" in y ? y.rotationZ : m.rotation * I, m.rotation, "rotation", T), wt && (h.rotationX = rt("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : m.rotationX * I || 0, m.rotationX, "rotationX", T), h.rotationY = rt("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : m.rotationY * I || 0, m.rotationY, "rotationY", T)), h.skewX = null == y.skewX ? m.skewX : rt(y.skewX, m.skewX), h.skewY = null == y.skewY ? m.skewY : rt(y.skewY, m.skewY), (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                        }
                        for (null != y.force3D && (m.force3D = y.force3D, f = !0), p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == y.scale || (h.scaleZ = 1); --v > -1;) i = vt[v], u = h[i] - m[i], (u > g || -g > u || null != F[i]) && (f = !0, n = new pt(m, i, m[i], u, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                        return u = y.transformOrigin, (u || wt && p && m.zOrigin) && (yt ? (f = !0, i = xt, u = (u || W(t, i, r, !1, "50% 50%")) + "", n = new pt(d, i, 0, 0, n, (-1), "transformOrigin"), n.b = d[i], n.plugin = a, wt ? (_ = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0, n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px", n = new pt(m, "zOrigin", 0, 0, n, (-1), n.n), n.b = _, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : et(u + "", m)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
                    },
                    prefix: !0
                }), dt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), dt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, f, c, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = q(b[h])), u = _ = W(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (x / d) + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = ft(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: lt("0px 0px 0px 0px", !1, !0)
                }), dt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, f = "background-position",
                            m = r || Z(t, null),
                            d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = W(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                            for (o = d.split(" "), h = g.split(" "), L.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - L.width : t.offsetHeight - L.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: et
                }), dt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: et
                }), dt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), dt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), dt("transformStyle", {
                    prefix: !0
                }), dt("backfaceVisibility", {
                    prefix: !0
                }), dt("margin", {
                    parser: _t("marginTop,marginRight,marginBottom,marginLeft")
                }), dt("padding", {
                    parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), dt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > c ? (h = t.currentStyle, l = 8 > c ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(W(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), dt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), dt("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), dt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(W(t, "borderTopWidth", r, !1, "0px") + " " + W(t, "borderTopStyle", r, !1, "solid") + " " + W(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                    }
                }), dt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new pt(n, a, 0, 0, r, (-1), i, (!1), 0, n[a], e)
                    }
                });
                var kt = function(t) {
                    var e, i = this.t,
                        s = i.filter || W(this.data, "filter"),
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") ? (i.removeAttribute("filter"), e = !W(this.data, "filter")) : (i.filter = s.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter += " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
                };
                dt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(W(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return e = parseFloat(e), l && 1 === o && "hidden" === W(t, "visibility", r) && 0 !== e && (o = 0), Y ? n = new pt(h, "opacity", o, e - o, n) : (n = new pt(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = kt), l && (n = new pt(h, "visibility", 0, 0, n, (-1), null, (!1), 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n)), n
                    }
                });
                var At = function(t, e) {
                        e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
                    },
                    Ct = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : At(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                dt("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, f, c = t.className,
                            m = t.style.cssText;
                        if (a = n._classNamePT = new pt(t, s, 0, 0, a, 2), a.setRatio = Ct, a.pr = -11, i = !0, a.b = c, _ = Q(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, l = H(t, _, Q(t), h, p), t.className = c, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var Ot = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                        if ("all" === this.e) return this.t.style.cssText = "", void(this.t._gsTransform && delete this.t._gsTransform);
                        for (var e, i = this.t.style, s = this.e.split(","), r = s.length, n = o.transform.parse; --r > -1;) e = s[r], o[e] && (e = o[e].parse === n ? yt : o[e].p), At(i, e)
                    }
                };
                for (dt("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new pt(t, s, 0, 0, n, 2), n.setRatio = Ot, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ct = h.length; ct--;) gt(h[ct]);
                h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, p, c, m, d, g, v, y, T, w = t.style;
                    if (_ && "" === w.zIndex && (h = W(t, "zIndex", r), ("auto" === h || "" === h) && (w.zIndex = 0)), "string" == typeof e && (m = w.cssText, h = Q(t, r), w.cssText = m + ";" + e, h = H(t, h, Q(t)).difs, !Y && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, yt ? u && (_ = !0, "" === w.zIndex && (v = W(t, "zIndex", r), ("auto" === v || "" === v) && (w.zIndex = 0)), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                        y = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && wt ? St : yt ? Rt : Pt, y.data = this._transform || bt(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (g = p._next, c = m; c && c.pr > p.pr;) c = c._next;
                            (p._prev = c ? c._prev : d) ? p._prev._next = p: m = p, (p._next = c) ? c._prev = p : d = p, p = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, h, _, u, p, f, c, m, d, g, v = t.style;
                    for (a in e) f = e[a], h = o[a], h ? i = h.parse(t, f, a, this, i, n, e) : (p = W(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(f) ? (d || (f = ot(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = ft(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p), c = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = tt(t, a, r), c = "px") : "left" === a || "top" === a ? (_ = G(t, a, r), c = "px") : (_ = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = d ? f.substr((u + "").length) || "" : ""), "" === m && (m = s[a] || c), f = u || 0 === u ? (g ? u + _ : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = $(t, a, _, c), "%" === m ? (_ /= $(t, a, 100, "%") / 100, _ > 100 && (_ = 100), e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= $(t, a, 1, "em") : (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pt(v, a, u || _ || 0, 0, i, (-1), a, (!1), 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : B("invalid " + a + " tween value: " + e[a]) : (i = new pt(v, a, _, u - _, i, 0, a, l !== !1 && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = ft(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, h._enableTransforms = function(t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || bt(this._target, r, !0)
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Mt = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Mt(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(Q(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Mt(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, Mt(t, l, u), o.render(i, !0), Mt(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = H(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i),
                            e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(t, e) {
                    var i;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {};
                    for (i in e) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;) e = i[s], this._target.setAttribute(e, this._proxy[e] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = window.GreenSockGlobals || window,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    c = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), f = u; --f > -1;) a = l[f], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), c
            }, !0)
    }),
    function(t) {
        "use strict";
        var e, i, s, r, n, a = t.GreenSockGlobals || t,
            o = function(t) {
                var e, i = t.split("."),
                    s = a;
                for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                return s
            },
            h = o("com.greensock"),
            l = [].slice,
            _ = function() {},
            u = {},
            p = function(e, i, s, r) {
                this.sc = u[e] ? u[e].sc : [], u[e] = this, this.gsClass = null, this.func = s;
                var n = [];
                this.check = function(h) {
                    for (var l, _, f, c, m = i.length, d = m; --m > -1;)(l = u[i[m]] || new p(i[m], [])).gsClass ? (n[m] = l.gsClass, d--) : h && l.sc.push(this);
                    if (0 === d && s)
                        for (_ = ("com.greensock." + e).split("."), f = _.pop(), c = o(_.join("."))[f] = this.gsClass = s.apply(s, n), r && (a[f] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function() {
                                return c
                            }) : "undefined" != typeof module && module.exports && (module.exports = c)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                }, this.check(!0)
            },
            f = t._gsDefine = function(t, e, i, s) {
                return new p(t, e, i, s)
            },
            c = h._class = function(t, e, i) {
                return e = e || function() {}, f(t, [], function() {
                    return e
                }, i), e
            };
        f.globals = a;
        var m = [0, 0, 1, 1],
            d = [],
            g = c("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? m.concat(e) : m
            }, !0),
            v = g.map = {},
            y = g.register = function(t, e, i, s) {
                for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (n = l[_], r = s ? c("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], v[n + "." + o] = v[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (s = g.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > -1;) s = e[i] + ",Power" + i, y(new g(null, null, 1, i), s, "easeOut", !0), y(new g(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")), y(new g(null, null, 3, i), s, "easeInOut");
        v.linear = h.easing.Linear.easeIn, v.swing = h.easing.Quad.easeInOut;
        var T = c("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function(t, e, i, s, a) {
            a = a || 0;
            var o, h, l = this._listeners[t],
                _ = 0;
            for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) o = l[h], o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && a > o.pr && (_ = h + 1);
            l.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: a
            }), this !== r || n || r.wake()
        }, s.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return void s.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
        };
        var x = t.requestAnimationFrame,
            w = t.cancelAnimationFrame,
            b = Date.now || function() {
                return (new Date).getTime()
            },
            P = b();
        for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > -1 && !x;) x = t[e[i] + "RequestAnimationFrame"], w = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
        c("Ticker", function(t, e) {
            var i, s, a, o, h, l = this,
                u = b(),
                p = e !== !1 && x,
                f = function(t) {
                    P = b(), l.time = (P - u) / 1e3;
                    var e, r = l.time - h;
                    (!i || r > 0 || t === !0) && (l.frame++, h += r + (r >= o ? .004 : o - r), e = !0), t !== !0 && (a = s(f)), e && l.dispatchEvent("tick")
                };
            T.call(l), this.time = this.frame = 0, this.tick = function() {
                f(!0)
            }, this.sleep = function() {
                null != a && (p && w ? w(a) : clearTimeout(a), s = _, a = null, l === r && (n = !1))
            }, this.wake = function() {
                null !== a && l.sleep(), s = 0 === i ? _ : p && x ? x : function(t) {
                    return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                }, l === r && (n = !0), f(2)
            }, this.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, void l.wake()) : i
            }, this.useRAF = function(t) {
                return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
            }, l.fps(t), setTimeout(function() {
                p && (!a || 5 > l.frame) && l.useRAF(!1)
            }, 1500)
        }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
        var S = c("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, E) {
                n || r.wake();
                var i = this.vars.useFrames ? L : E;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        r = S.ticker = new h.Ticker, s = S.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var R = function() {
            b() - P > 2e3 && r.wake(), setTimeout(R, 2e3)
        };
        R(), s.play = function(t, e) {
            return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {}, s.invalidate = function() {
            return this
        }, s._enabled = function(t, e) {
            return n || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (n || r.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        a = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                        for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
            }
            return this
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                n || t || r.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === s || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var k = c("core.SimpleTimeline", function(t) {
            S.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = k.prototype = new S, s.constructor = k, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, s.rawTime = function() {
            return n || r.wake(), this._totalTime
        };
        var A = c("TweenLite", function(e, i, s) {
                if (S.call(this, i, s), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : A.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    h = this.vars.overwrite;
                if (this._overwrite = h = null == h ? N[A.defaultOverwrite] : "number" == typeof h ? h >> 0 : N[h], (o || e instanceof Array) && "number" != typeof e[0])
                    for (this._targets = a = l.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(l.call(n, 0))) : (this._siblings[r] = z(n, this, !1), 1 === h && this._siblings[r].length > 1 && Y(n, this, null, 1, this._siblings[r])) : (n = a[r--] = A.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                else this._propLookup = {}, this._siblings = z(e, this, !1), 1 === h && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
            C = function(e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            O = function(t, e) {
                var i, s = {};
                for (i in t) X[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!D[i] || D[i] && D[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        s = A.prototype = new S, s.constructor = A, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, A.version = "1.10.2", A.defaultEase = s._ease = new g(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = r, A.autoSleep = !0, A.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (A.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        };
        var M = A._internals = {},
            D = A._plugins = {},
            I = A._tweenLookup = {},
            F = 0,
            X = M.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            N = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            L = S._rootFramesTimeline = new k,
            E = S._rootTimeline = new k;
        E._startTime = r.time, L._startTime = r.frame, E._active = L._active = !0, S._updateRoot = function() {
            if (E.render((r.time - E._startTime) * E._timeScale, !1, !1), L.render((r.frame - L._startTime) * L._timeScale, !1, !1), !(r.frame % 120)) {
                var t, e, i;
                for (i in I) {
                    for (e = I[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete I[i]
                }
                if (i = E._first, (!i || i._paused) && A.autoSleep && !L._first && 1 === r._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || r.sleep()
                }
            }
        }, r.addEventListener("tick", S._updateRoot);
        var z = function(t, e, i) {
                var s, r, n = t._gsTweenID;
                if (I[n || (t._gsTweenID = n = "t" + F++)] || (I[n] = {
                        target: t,
                        tweens: []
                    }), e && (s = I[n].tweens, s[r = s.length] = e, i))
                    for (; --r > -1;) s[r] === e && s.splice(r, 1);
                return I[n].tweens
            },
            Y = function(t, e, i, s, r) {
                var n, a, o, h;
                if (1 === s || s >= 4) {
                    for (h = r.length, n = 0; h > n; n++)
                        if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var l, _ = e._startTime + 1e-10,
                    u = [],
                    p = 0,
                    f = 0 === e._duration;
                for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || U(e, 0, f), 0 === U(o, l, f) && (u[p++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[p++] = o)));
                for (n = p; --n > -1;) o = u[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            U = function(t, e, i) {
                for (var s = t._timeline, r = s._timeScale, n = t._startTime, a = 1e-10; s._timeline;) {
                    if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * a > n - e ? a : (n += t.totalDuration() / t._timeScale / r) > e + a ? 0 : n - e - a
            };
        s._init = function() {
            var t, e, i, s, r = this.vars,
                n = this._overwrittenProps,
                a = this._duration,
                o = r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, r.startAt), o)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== a) return
            } else if (r.runBackwards && r.immediateRender && 0 !== a)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else if (0 === this._time) {
                i = {};
                for (s in r) X[s] && "autoCSS" !== s || (i[s] = r[s]);
                return i.overwrite = 0, void(this._startAt = A.to(this.target, 0, i))
            }
            if (this._ease = h ? h instanceof g ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new g(h, r.easeParams) : v[h] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && A._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, s, r) {
            var n, a, o, h, l, _;
            if (null == e) return !1;
            this.vars.css || e.style && e !== t && e.nodeType && D.css && this.vars.autoCSS !== !1 && O(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], X[n]) _ instanceof Array && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (D[n] && (h = new D[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: n,
                            pg: !0,
                            pr: h._priority
                        }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = l = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Y(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
        }, s.render = function(t, e, i) {
            var s, r, n, a = this._time;
            if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var o = t / this._duration,
                    h = this._easeType,
                    l = this._easePower;
                (1 === h || 3 === h && o >= .5) && (o = 1 - o), 3 === h && (o *= 2), 1 === l ? o *= o : 2 === l ? o *= o * o : 3 === l ? o *= o * o * o : 4 === l && (o *= o * o * o * o), this.ratio = 1 === h ? 1 - o : 2 === h ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
            } else this.ratio = this._ease.getRatio(t / this._duration);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || d)))
            }
        }, s._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
            var i, s, r, n, a, o, h, l;
            if ((e instanceof Array || C(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    h = t || a, l = t !== s && "all" !== s && t !== a && (null == t || t._tempKill !== !0);
                    for (r in h)(n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, s._enabled = function(t, e) {
            if (n || r.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = z(s[i], this, !0);
                else this._siblings = z(this.target, this, !0)
            }
            return S.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, A.to = function(t, e, i) {
            return new A(t, e, i)
        }, A.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i)
        }, A.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new A(t, e, s)
        }, A.delayedCall = function(t, e, i, s, r) {
            return new A(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, A.set = function(t, e) {
            return new A(t, 0, e)
        }, A.killTweensOf = A.killDelayedCallsTo = function(t, e) {
            for (var i = A.getTweensOf(t), s = i.length; --s > -1;) i[s]._kill(e, t)
        }, A.getTweensOf = function(t) {
            if (null == t) return [];
            t = "string" != typeof t ? t : A.selector(t) || t;
            var e, i, s, r;
            if ((t instanceof Array || C(t)) && "number" != typeof t[0]) {
                for (e = t.length, i = []; --e > -1;) i = i.concat(A.getTweensOf(t[e]));
                for (e = i.length; --e > -1;)
                    for (r = i[e], s = e; --s > -1;) r === i[s] && i.splice(e, 1)
            } else
                for (i = z(t).concat(), e = i.length; --e > -1;) i[e]._gc && i.splice(e, 1);
            return i
        };
        var B = c("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = B.prototype
        }, !0);
        if (s = B.prototype, B.version = "1.10.1", B.API = 2, s._firstPT = null, s._addTween = function(t, e, i, s, r, n) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: n
                }, o._next && (o._next._prev = o), o) : void 0
            }, s.setRatio = function(t) {
                for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, s._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, s._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, A._onPluginEvent = function(t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, B.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === B.API && (D[(new t[e])._propName] = t[e]);
                return !0
            }, f.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    r = t.overwriteProps,
                    n = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        B.call(this, i, s), this._overwriteProps = r || []
                    }, t.global === !0),
                    o = a.prototype = new B(i);
                o.constructor = a, a.API = t.API;
                for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, B.activate([a]), a
            }, e = t._gsQueue) {
            for (i = 0; e.length > i; i++) e[i]();
            for (s in u) u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        n = !1
    }(window);
! function() {
    "use strict";
    var e = function() {
        this.init()
    };
    e.prototype = {
        init: function() {
            var e = this || n;
            return e._counter = 1e3, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
        },
        volume: function(e) {
            var o = this || n;
            if (e = parseFloat(e), o.ctx || _(), void 0 !== e && e >= 0 && e <= 1) {
                if (o._volume = e, o._muted) return o;
                o.usingWebAudio && (o.masterGain.gain.value = e);
                for (var t = 0; t < o._howls.length; t++)
                    if (!o._howls[t]._webAudio)
                        for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                            var i = o._howls[t]._soundById(r[a]);
                            i && i._node && (i._node.volume = i._volume * e)
                        }
                    return o
            }
            return o._volume
        },
        mute: function(e) {
            var o = this || n;
            o.ctx || _(), o._muted = e, o.usingWebAudio && (o.masterGain.gain.value = e ? 0 : o._volume);
            for (var t = 0; t < o._howls.length; t++)
                if (!o._howls[t]._webAudio)
                    for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                        var i = o._howls[t]._soundById(r[a]);
                        i && i._node && (i._node.muted = !!e || i._muted)
                    }
                return o
        },
        unload: function() {
            for (var e = this || n, o = e._howls.length - 1; o >= 0; o--) e._howls[o].unload();
            return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, _()), e
        },
        codecs: function(e) {
            return (this || n)._codecs[e.replace(/^x-/, "")]
        },
        _setup: function() {
            var e = this || o;
            if (e.state = e.ctx ? e.ctx.state || "running" : "running", e._autoSuspend(), !e.usingWebAudio)
                if ("undefined" != typeof Audio) try {
                    var n = new Audio;
                    void 0 === n.oncanplaythrough && (e._canPlayEvent = "canplay")
                } catch (o) {
                    e.noAudio = !0
                } else e.noAudio = !0;
            try {
                var n = new Audio;
                n.muted && (e.noAudio = !0)
            } catch (e) {}
            return e.noAudio || e._setupCodecs(), e
        },
        _setupCodecs: function() {
            var e = this || o,
                n = null;
            try {
                n = "undefined" != typeof Audio ? new Audio : null
            } catch (o) {
                return e
            }
            if (!n || "function" != typeof n.canPlayType) return e;
            var t = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                a = r && parseInt(r[0].split("/")[1], 10) < 33;
            return e._codecs = {
                mp3: !(a || !t && !n.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!t,
                opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(/^no$/, "")
            }, e
        },
        _enableMobileAudio: function() {
            var e = this || n,
                o = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
                t = !!("ontouchend" in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0);
            if (!e._mobileEnabled && e.ctx && (o || t)) {
                e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                var r = function() {
                    n._autoResume();
                    var o = e.ctx.createBufferSource();
                    o.buffer = e._scratchBuffer, o.connect(e.ctx.destination), void 0 === o.start ? o.noteOn(0) : o.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), o.onended = function() {
                        o.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchend", r, !0)
                    }
                };
                return document.addEventListener("touchend", r, !0), e
            }
        },
        _autoSuspend: function() {
            var e = this;
            if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
                for (var o = 0; o < e._howls.length; o++)
                    if (e._howls[o]._webAudio)
                        for (var t = 0; t < e._howls[o]._sounds.length; t++)
                            if (!e._howls[o]._sounds[t]._paused) return e;
                return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
                    e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function() {
                        e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                    }))
                }, 3e4), e
            }
        },
        _autoResume: function() {
            var e = this;
            if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function() {
                e.state = "running";
                for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume")
            }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
        }
    };
    var n = new e,
        o = function(e) {
            var n = this;
            return e.src && 0 !== e.src.length ? void n.init(e) : void console.error("An array of source files must be passed with any new Howl.")
        };
    o.prototype = {
        init: function(e) {
            var o = this;
            return n.ctx || _(), o._autoplay = e.autoplay || !1, o._format = "string" != typeof e.format ? e.format : [e.format], o._html5 = e.html5 || !1, o._muted = e.mute || !1, o._loop = e.loop || !1, o._pool = e.pool || 5, o._preload = "boolean" != typeof e.preload || e.preload, o._rate = e.rate || 1, o._sprite = e.sprite || {}, o._src = "string" != typeof e.src ? e.src : [e.src], o._volume = void 0 !== e.volume ? e.volume : 1, o._duration = 0, o._state = "unloaded", o._sounds = [], o._endTimers = {}, o._queue = [], o._onend = e.onend ? [{
                fn: e.onend
            }] : [], o._onfade = e.onfade ? [{
                fn: e.onfade
            }] : [], o._onload = e.onload ? [{
                fn: e.onload
            }] : [], o._onloaderror = e.onloaderror ? [{
                fn: e.onloaderror
            }] : [], o._onpause = e.onpause ? [{
                fn: e.onpause
            }] : [], o._onplay = e.onplay ? [{
                fn: e.onplay
            }] : [], o._onstop = e.onstop ? [{
                fn: e.onstop
            }] : [], o._onmute = e.onmute ? [{
                fn: e.onmute
            }] : [], o._onvolume = e.onvolume ? [{
                fn: e.onvolume
            }] : [], o._onrate = e.onrate ? [{
                fn: e.onrate
            }] : [], o._onseek = e.onseek ? [{
                fn: e.onseek
            }] : [], o._onresume = [], o._webAudio = n.usingWebAudio && !o._html5, void 0 !== n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(), n._howls.push(o), o._autoplay && o._queue.push({
                event: "play",
                action: function() {
                    o.play()
                }
            }), o._preload && o.load(), o
        },
        load: function() {
            var e = this,
                o = null;
            if (n.noAudio) return void e._emit("loaderror", null, "No audio support.");
            "string" == typeof e._src && (e._src = [e._src]);
            for (var r = 0; r < e._src.length; r++) {
                var i, u;
                if (e._format && e._format[r]) i = e._format[r];
                else {
                    if ("string" != typeof(u = e._src[r])) {
                        e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue
                    }
                    i = /^data:audio\/([^;,]+);/i.exec(u), i || (i = /\.([^.]+)$/.exec(u.split("?", 1)[0])), i && (i = i[1].toLowerCase())
                }
                if (i || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), i && n.codecs(i)) {
                    o = e._src[r];
                    break
                }
            }
            return o ? (e._src = o, e._state = "loading", "https:" === window.location.protocol && "http:" === o.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new t(e), e._webAudio && a(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.")
        },
        play: function(e, o) {
            var t = this,
                r = null;
            if ("number" == typeof e) r = e, e = null;
            else {
                if ("string" == typeof e && "loaded" === t._state && !t._sprite[e]) return null;
                if (void 0 === e) {
                    e = "__default";
                    for (var a = 0, i = 0; i < t._sounds.length; i++) t._sounds[i]._paused && !t._sounds[i]._ended && (a++, r = t._sounds[i]._id);
                    1 === a ? e = null : r = null
                }
            }
            var u = r ? t._soundById(r) : t._inactiveSound();
            if (!u) return null;
            if (r && !e && (e = u._sprite || "__default"), "loaded" !== t._state) {
                u._sprite = e, u._ended = !1;
                var d = u._id;
                return t._queue.push({
                    event: "play",
                    action: function() {
                        t.play(d)
                    }
                }), d
            }
            if (r && !u._paused) return o || setTimeout(function() {
                t._emit("play", u._id)
            }, 0), u._id;
            t._webAudio && n._autoResume();
            var _ = Math.max(0, u._seek > 0 ? u._seek : t._sprite[e][0] / 1e3),
                s = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - _),
                l = 1e3 * s / Math.abs(u._rate);
            u._paused = !1, u._ended = !1, u._sprite = e, u._seek = _, u._start = t._sprite[e][0] / 1e3, u._stop = (t._sprite[e][0] + t._sprite[e][1]) / 1e3, u._loop = !(!u._loop && !t._sprite[e][2]);
            var c = u._node;
            if (t._webAudio) {
                var f = function() {
                        t._refreshBuffer(u);
                        var e = u._muted || t._muted ? 0 : u._volume;
                        c.gain.setValueAtTime(e, n.ctx.currentTime), u._playStart = n.ctx.currentTime, void 0 === c.bufferSource.start ? u._loop ? c.bufferSource.noteGrainOn(0, _, 86400) : c.bufferSource.noteGrainOn(0, _, s) : u._loop ? c.bufferSource.start(0, _, 86400) : c.bufferSource.start(0, _, s), l !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l)), o || setTimeout(function() {
                            t._emit("play", u._id)
                        }, 0)
                    },
                    p = "running" === n.state;
                if ("loaded" === t._state && p) f();
                else {
                    var v = p || "loaded" !== t._state ? "load" : "resume";
                    t.once(v, f, p ? u._id : null), t._clearTimer(u._id)
                }
            } else {
                var m = function() {
                        c.currentTime = _, c.muted = u._muted || t._muted || n._muted || c.muted, c.volume = u._volume * n.volume(), c.playbackRate = u._rate, c.play(), l !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l)), o || t._emit("play", u._id)
                    },
                    g = "loaded" === t._state && (window && window.ejecta || !c.readyState && n._navigator.isCocoonJS);
                if (4 === c.readyState || g) m();
                else {
                    var h = function() {
                        m(), c.removeEventListener(n._canPlayEvent, h, !1)
                    };
                    c.addEventListener(n._canPlayEvent, h, !1), t._clearTimer(u._id)
                }
            }
            return u._id
        },
        pause: function(e) {
            var n = this;
            if ("loaded" !== n._state) return n._queue.push({
                event: "pause",
                action: function() {
                    n.pause(e)
                }
            }), n;
            for (var o = n._getSoundIds(e), t = 0; t < o.length; t++) {
                n._clearTimer(o[t]);
                var r = n._soundById(o[t]);
                if (r && !r._paused && (r._seek = n.seek(o[t]), r._rateSeek = 0, r._paused = !0, n._stopFade(o[t]), r._node))
                    if (n._webAudio) {
                        if (!r._node.bufferSource) continue;
                        void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), n._cleanBuffer(r._node)
                    } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                arguments[1] || n._emit("pause", r ? r._id : null)
            }
            return n
        },
        stop: function(e, n) {
            var o = this;
            if ("loaded" !== o._state) return o._queue.push({
                event: "stop",
                action: function() {
                    o.stop(e)
                }
            }), o;
            for (var t = o._getSoundIds(e), r = 0; r < t.length; r++) {
                o._clearTimer(t[r]);
                var a = o._soundById(t[r]);
                a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, o._stopFade(t[r]), a._node && (o._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), o._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause())), n || o._emit("stop", a._id))
            }
            return o
        },
        mute: function(e, o) {
            var t = this;
            if ("loaded" !== t._state) return t._queue.push({
                event: "mute",
                action: function() {
                    t.mute(e, o)
                }
            }), t;
            if (void 0 === o) {
                if ("boolean" != typeof e) return t._muted;
                t._muted = e
            }
            for (var r = t._getSoundIds(o), a = 0; a < r.length; a++) {
                var i = t._soundById(r[a]);
                i && (i._muted = e, t._webAudio && i._node ? i._node.gain.setValueAtTime(e ? 0 : i._volume, n.ctx.currentTime) : i._node && (i._node.muted = !!n._muted || e), t._emit("mute", i._id))
            }
            return t
        },
        volume: function() {
            var e, o, t = this,
                r = arguments;
            if (0 === r.length) return t._volume;
            1 === r.length || 2 === r.length && void 0 === r[1] ? t._getSoundIds().indexOf(r[0]) >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0]) : r.length >= 2 && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
            var a;
            if (!(void 0 !== e && e >= 0 && e <= 1)) return a = o ? t._soundById(o) : t._sounds[0], a ? a._volume : 0;
            if ("loaded" !== t._state) return t._queue.push({
                event: "volume",
                action: function() {
                    t.volume.apply(t, r)
                }
            }), t;
            void 0 === o && (t._volume = e), o = t._getSoundIds(o);
            for (var i = 0; i < o.length; i++)(a = t._soundById(o[i])) && (a._volume = e, r[2] || t._stopFade(o[i]), t._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(e, n.ctx.currentTime) : a._node && !a._muted && (a._node.volume = e * n.volume()), t._emit("volume", a._id));
            return t
        },
        fade: function(e, o, t, r) {
            var a = this,
                i = Math.abs(e - o),
                u = e > o ? "out" : "in",
                d = i / .01,
                _ = d > 0 ? t / d : t;
            if (_ < 4 && (d = Math.ceil(d / (4 / _)), _ = 4), "loaded" !== a._state) return a._queue.push({
                event: "fade",
                action: function() {
                    a.fade(e, o, t, r)
                }
            }), a;
            a.volume(e, r);
            for (var s = a._getSoundIds(r), l = 0; l < s.length; l++) {
                var c = a._soundById(s[l]);
                if (c) {
                    if (r || a._stopFade(s[l]), a._webAudio && !c._muted) {
                        var f = n.ctx.currentTime,
                            p = f + t / 1e3;
                        c._volume = e, c._node.gain.setValueAtTime(e, f), c._node.gain.linearRampToValueAtTime(o, p)
                    }
                    var v = e;
                    c._interval = setInterval(function(n, t) {
                        d > 0 && (v += "in" === u ? .01 : -.01), v = Math.max(0, v), v = Math.min(1, v), v = Math.round(100 * v) / 100, a._webAudio ? (void 0 === r && (a._volume = v), t._volume = v) : a.volume(v, n, !0), (o < e && v <= o || o > e && v >= o) && (clearInterval(t._interval), t._interval = null, a.volume(o, n), a._emit("fade", n))
                    }.bind(a, s[l], c), _)
                }
            }
            return a
        },
        _stopFade: function(e) {
            var o = this,
                t = o._soundById(e);
            return t && t._interval && (o._webAudio && t._node.gain.cancelScheduledValues(n.ctx.currentTime), clearInterval(t._interval), t._interval = null, o._emit("fade", e)), o
        },
        loop: function() {
            var e, n, o, t = this,
                r = arguments;
            if (0 === r.length) return t._loop;
            if (1 === r.length) {
                if ("boolean" != typeof r[0]) return !!(o = t._soundById(parseInt(r[0], 10))) && o._loop;
                e = r[0], t._loop = e
            } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
            for (var a = t._getSoundIds(n), i = 0; i < a.length; i++)(o = t._soundById(a[i])) && (o._loop = e, t._webAudio && o._node && o._node.bufferSource && (o._node.bufferSource.loop = e, e && (o._node.bufferSource.loopStart = o._start || 0, o._node.bufferSource.loopEnd = o._stop)));
            return t
        },
        rate: function() {
            var e, o, t = this,
                r = arguments;
            if (0 === r.length) o = t._sounds[0]._id;
            else if (1 === r.length) {
                var a = t._getSoundIds(),
                    i = a.indexOf(r[0]);
                i >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0])
            } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
            var u;
            if ("number" != typeof e) return u = t._soundById(o), u ? u._rate : t._rate;
            if ("loaded" !== t._state) return t._queue.push({
                event: "rate",
                action: function() {
                    t.rate.apply(t, r)
                }
            }), t;
            void 0 === o && (t._rate = e), o = t._getSoundIds(o);
            for (var d = 0; d < o.length; d++)
                if (u = t._soundById(o[d])) {
                    u._rateSeek = t.seek(o[d]), u._playStart = t._webAudio ? n.ctx.currentTime : u._playStart, u._rate = e, t._webAudio && u._node && u._node.bufferSource ? u._node.bufferSource.playbackRate.value = e : u._node && (u._node.playbackRate = e);
                    var _ = t.seek(o[d]),
                        s = (t._sprite[u._sprite][0] + t._sprite[u._sprite][1]) / 1e3 - _,
                        l = 1e3 * s / Math.abs(u._rate);
                    !t._endTimers[o[d]] && u._paused || (t._clearTimer(o[d]), t._endTimers[o[d]] = setTimeout(t._ended.bind(t, u), l)), t._emit("rate", u._id)
                }
            return t
        },
        seek: function() {
            var e, o, t = this,
                r = arguments;
            if (0 === r.length) o = t._sounds[0]._id;
            else if (1 === r.length) {
                var a = t._getSoundIds(),
                    i = a.indexOf(r[0]);
                i >= 0 ? o = parseInt(r[0], 10) : (o = t._sounds[0]._id, e = parseFloat(r[0]))
            } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
            if (void 0 === o) return t;
            if ("loaded" !== t._state) return t._queue.push({
                event: "seek",
                action: function() {
                    t.seek.apply(t, r)
                }
            }), t;
            var u = t._soundById(o);
            if (u) {
                if (!("number" == typeof e && e >= 0)) {
                    if (t._webAudio) {
                        var d = t.playing(o) ? n.ctx.currentTime - u._playStart : 0,
                            _ = u._rateSeek ? u._rateSeek - u._seek : 0;
                        return u._seek + (_ + d * Math.abs(u._rate))
                    }
                    return u._node.currentTime
                }
                var s = t.playing(o);
                s && t.pause(o, !0), u._seek = e, u._ended = !1, t._clearTimer(o), s && t.play(o, !0), !t._webAudio && u._node && (u._node.currentTime = e), t._emit("seek", o)
            }
            return t
        },
        playing: function(e) {
            var n = this;
            if ("number" == typeof e) {
                var o = n._soundById(e);
                return !!o && !o._paused
            }
            for (var t = 0; t < n._sounds.length; t++)
                if (!n._sounds[t]._paused) return !0;
            return !1
        },
        duration: function(e) {
            var n = this,
                o = n._duration,
                t = n._soundById(e);
            return t && (o = n._sprite[t._sprite][1] / 1e3), o
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var e = this, o = e._sounds, t = 0; t < o.length; t++) {
                o[t]._paused || e.stop(o[t]._id), e._webAudio || (/MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) || (o[t]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), o[t]._node.removeEventListener("error", o[t]._errorFn, !1), o[t]._node.removeEventListener(n._canPlayEvent, o[t]._loadFn, !1)), delete o[t]._node, e._clearTimer(o[t]._id);
                var a = n._howls.indexOf(e);
                a >= 0 && n._howls.splice(a, 1)
            }
            var i = !0;
            for (t = 0; t < n._howls.length; t++)
                if (n._howls[t]._src === e._src) {
                    i = !1;
                    break
                }
            return r && i && delete r[e._src], n.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
        },
        on: function(e, n, o, t) {
            var r = this,
                a = r["_on" + e];
            return "function" == typeof n && a.push(t ? {
                id: o,
                fn: n,
                once: t
            } : {
                id: o,
                fn: n
            }), r
        },
        off: function(e, n, o) {
            var t = this,
                r = t["_on" + e],
                a = 0;
            if ("number" == typeof n && (o = n, n = null), n || o)
                for (a = 0; a < r.length; a++) {
                    var i = o === r[a].id;
                    if (n === r[a].fn && i || !n && i) {
                        r.splice(a, 1);
                        break
                    }
                } else if (e) t["_on" + e] = [];
                else {
                    var u = Object.keys(t);
                    for (a = 0; a < u.length; a++) 0 === u[a].indexOf("_on") && Array.isArray(t[u[a]]) && (t[u[a]] = [])
                }
            return t
        },
        once: function(e, n, o) {
            var t = this;
            return t.on(e, n, o, 1), t
        },
        _emit: function(e, n, o) {
            for (var t = this, r = t["_on" + e], a = r.length - 1; a >= 0; a--) r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function(e) {
                e.call(this, n, o)
            }.bind(t, r[a].fn), 0), r[a].once && t.off(e, r[a].fn, r[a].id));
            return t
        },
        _loadQueue: function() {
            var e = this;
            if (e._queue.length > 0) {
                var n = e._queue[0];
                e.once(n.event, function() {
                    e._queue.shift(), e._loadQueue()
                }), n.action()
            }
            return e
        },
        _ended: function(e) {
            var o = this,
                t = e._sprite;
            if (!o._webAudio && o._node && !o._node.ended) return setTimeout(o._ended.bind(o, e), 100), o;
            var r = !(!e._loop && !o._sprite[t][2]);
            if (o._emit("end", e._id), !o._webAudio && r && o.stop(e._id, !0).play(e._id), o._webAudio && r) {
                o._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = n.ctx.currentTime;
                var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                o._endTimers[e._id] = setTimeout(o._ended.bind(o, e), a)
            }
            return o._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, o._clearTimer(e._id), o._cleanBuffer(e._node), n._autoSuspend()), o._webAudio || r || o.stop(e._id), o
        },
        _clearTimer: function(e) {
            var n = this;
            return n._endTimers[e] && (clearTimeout(n._endTimers[e]), delete n._endTimers[e]), n
        },
        _soundById: function(e) {
            for (var n = this, o = 0; o < n._sounds.length; o++)
                if (e === n._sounds[o]._id) return n._sounds[o];
            return null
        },
        _inactiveSound: function() {
            var e = this;
            e._drain();
            for (var n = 0; n < e._sounds.length; n++)
                if (e._sounds[n]._ended) return e._sounds[n].reset();
            return new t(e)
        },
        _drain: function() {
            var e = this,
                n = e._pool,
                o = 0,
                t = 0;
            if (!(e._sounds.length < n)) {
                for (t = 0; t < e._sounds.length; t++) e._sounds[t]._ended && o++;
                for (t = e._sounds.length - 1; t >= 0; t--) {
                    if (o <= n) return;
                    e._sounds[t]._ended && (e._webAudio && e._sounds[t]._node && e._sounds[t]._node.disconnect(0), e._sounds.splice(t, 1), o--)
                }
            }
        },
        _getSoundIds: function(e) {
            var n = this;
            if (void 0 === e) {
                for (var o = [], t = 0; t < n._sounds.length; t++) o.push(n._sounds[t]._id);
                return o
            }
            return [e]
        },
        _refreshBuffer: function(e) {
            var o = this;
            return e._node.bufferSource = n.ctx.createBufferSource(), e._node.bufferSource.buffer = r[o._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop), e._node.bufferSource.playbackRate.value = e._rate, o
        },
        _cleanBuffer: function(e) {
            var n = this;
            if (n._scratchBuffer) {
                e.bufferSource.onended = null, e.bufferSource.disconnect(0);
                try {
                    e.bufferSource.buffer = n._scratchBuffer
                } catch (e) {}
            }
            return e.bufferSource = null, n
        }
    };
    var t = function(e) {
        this._parent = e, this.init()
    };
    t.prototype = {
        init: function() {
            var e = this,
                o = e._parent;
            return e._muted = o._muted, e._loop = o._loop, e._volume = o._volume, e._rate = o._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, o._sounds.push(e), e.create(), e
        },
        create: function() {
            var e = this,
                o = e._parent,
                t = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
            return o._webAudio ? (e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), e._node.gain.setValueAtTime(t, n.ctx.currentTime), e._node.paused = !0, e._node.connect(n.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(n._canPlayEvent, e._loadFn, !1), e._node.src = o._src, e._node.preload = "auto", e._node.volume = t * n.volume(), e._node.load()), e
        },
        reset: function() {
            var e = this,
                o = e._parent;
            return e._muted = o._muted, e._loop = o._loop, e._volume = o._volume, e._rate = o._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, e
        },
        _errorListener: function() {
            var e = this;
            e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
        },
        _loadListener: function() {
            var e = this,
                o = e._parent;
            o._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(o._sprite).length && (o._sprite = {
                __default: [0, 1e3 * o._duration]
            }), "loaded" !== o._state && (o._state = "loaded", o._emit("load"), o._loadQueue()), e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1)
        }
    };
    var r = {},
        a = function(e) {
            var n = e._src;
            if (r[n]) return e._duration = r[n].duration, void d(e);
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var o = atob(n.split(",")[1]), t = new Uint8Array(o.length), a = 0; a < o.length; ++a) t[a] = o.charCodeAt(a);
                u(t.buffer, e)
            } else {
                var _ = new XMLHttpRequest;
                _.open("GET", n, !0), _.responseType = "arraybuffer", _.onload = function() {
                    var n = (_.status + "")[0];
                    return "0" !== n && "2" !== n && "3" !== n ? void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".") : void u(_.response, e)
                }, _.onerror = function() {
                    e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete r[n], e.load())
                }, i(_)
            }
        },
        i = function(e) {
            try {
                e.send()
            } catch (n) {
                e.onerror()
            }
        },
        u = function(e, o) {
            n.ctx.decodeAudioData(e, function(e) {
                e && o._sounds.length > 0 && (r[o._src] = e, d(o, e))
            }, function() {
                o._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        d = function(e, n) {
            n && !e._duration && (e._duration = n.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                __default: [0, 1e3 * e._duration]
            }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
        },
        _ = function() {
            try {
                "undefined" != typeof AudioContext ? n.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1
            } catch (e) {
                n.usingWebAudio = !1
            }
            var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
                o = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                t = o ? parseInt(o[1], 10) : null;
            if (e && t && t < 9) {
                var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
                (n._navigator && n._navigator.standalone && !r || n._navigator && !n._navigator.standalone && !r) && (n.usingWebAudio = !1)
            }
            n.usingWebAudio && (n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), n.masterGain.gain.value = n._muted ? 0 : 1, n.masterGain.connect(n.ctx.destination)), n._setup()
        };
    "function" == typeof define && define.amd && define([], function() {
        return {
            Howler: n,
            Howl: o
        }
    }), "undefined" != typeof exports && (exports.Howler = n, exports.Howl = o), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = n, window.Howl = o, window.Sound = t) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = n, global.Howl = o, global.Sound = t)
}(), ! function() {
    "use strict";
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
        var n = this;
        if (!n.ctx || !n.ctx.listener) return n;
        for (var o = n._howls.length - 1; o >= 0; o--) n._howls[o].stereo(e);
        return n
    }, HowlerGlobal.prototype.pos = function(e, n, o) {
        var t = this;
        return t.ctx && t.ctx.listener ? (n = "number" != typeof n ? t._pos[1] : n, o = "number" != typeof o ? t._pos[2] : o, "number" != typeof e ? t._pos : (t._pos = [e, n, o], t.ctx.listener.setPosition(t._pos[0], t._pos[1], t._pos[2]), t)) : t
    }, HowlerGlobal.prototype.orientation = function(e, n, o, t, r, a) {
        var i = this;
        if (!i.ctx || !i.ctx.listener) return i;
        var u = i._orientation;
        return n = "number" != typeof n ? u[1] : n, o = "number" != typeof o ? u[2] : o, t = "number" != typeof t ? u[3] : t, r = "number" != typeof r ? u[4] : r, a = "number" != typeof a ? u[5] : a, "number" != typeof e ? u : (i._orientation = [e, n, o, t, r, a], i.ctx.listener.setOrientation(e, n, o, t, r, a), i)
    }, Howl.prototype.init = function(e) {
        return function(n) {
            var o = this;
            return o._orientation = n.orientation || [1, 0, 0], o._stereo = n.stereo || null, o._pos = n.pos || null, o._pannerAttr = {
                coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : 360,
                coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : 360,
                coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : 0,
                distanceModel: void 0 !== n.distanceModel ? n.distanceModel : "inverse",
                maxDistance: void 0 !== n.maxDistance ? n.maxDistance : 1e4,
                panningModel: void 0 !== n.panningModel ? n.panningModel : "HRTF",
                refDistance: void 0 !== n.refDistance ? n.refDistance : 1,
                rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : 1
            }, o._onstereo = n.onstereo ? [{
                fn: n.onstereo
            }] : [], o._onpos = n.onpos ? [{
                fn: n.onpos
            }] : [], o._onorientation = n.onorientation ? [{
                fn: n.onorientation
            }] : [], e.call(this, n)
        }
    }(Howl.prototype.init), Howl.prototype.stereo = function(n, o) {
        var t = this;
        if (!t._webAudio) return t;
        if ("loaded" !== t._state) return t._queue.push({
            event: "stereo",
            action: function() {
                t.stereo(n, o)
            }
        }), t;
        var r = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if (void 0 === o) {
            if ("number" != typeof n) return t._stereo;
            t._stereo = n, t._pos = [n, 0, 0]
        }
        for (var a = t._getSoundIds(o), i = 0; i < a.length; i++) {
            var u = t._soundById(a[i]);
            if (u) {
                if ("number" != typeof n) return u._stereo;
                u._stereo = n, u._pos = [n, 0, 0], u._node && (u._pannerAttr.panningModel = "equalpower", u._panner && u._panner.pan || e(u, r), "spatial" === r ? u._panner.setPosition(n, 0, 0) : u._panner.pan.value = n), t._emit("stereo", u._id)
            }
        }
        return t
    }, Howl.prototype.pos = function(n, o, t, r) {
        var a = this;
        if (!a._webAudio) return a;
        if ("loaded" !== a._state) return a._queue.push({
            event: "pos",
            action: function() {
                a.pos(n, o, t, r)
            }
        }), a;
        if (o = "number" != typeof o ? 0 : o, t = "number" != typeof t ? -.5 : t, void 0 === r) {
            if ("number" != typeof n) return a._pos;
            a._pos = [n, o, t]
        }
        for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
            var d = a._soundById(i[u]);
            if (d) {
                if ("number" != typeof n) return d._pos;
                d._pos = [n, o, t], d._node && (d._panner && !d._panner.pan || e(d, "spatial"), d._panner.setPosition(n, o, t)), a._emit("pos", d._id)
            }
        }
        return a
    }, Howl.prototype.orientation = function(n, o, t, r) {
        var a = this;
        if (!a._webAudio) return a;
        if ("loaded" !== a._state) return a._queue.push({
            event: "orientation",
            action: function() {
                a.orientation(n, o, t, r)
            }
        }), a;
        if (o = "number" != typeof o ? a._orientation[1] : o, t = "number" != typeof t ? a._orientation[2] : t, void 0 === r) {
            if ("number" != typeof n) return a._orientation;
            a._orientation = [n, o, t]
        }
        for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
            var d = a._soundById(i[u]);
            if (d) {
                if ("number" != typeof n) return d._orientation;
                d._orientation = [n, o, t], d._node && (d._panner || (d._pos || (d._pos = a._pos || [0, 0, -.5]), e(d, "spatial")), d._panner.setOrientation(n, o, t)), a._emit("orientation", d._id)
            }
        }
        return a
    }, Howl.prototype.pannerAttr = function() {
        var n, o, t, r = this,
            a = arguments;
        if (!r._webAudio) return r;
        if (0 === a.length) return r._pannerAttr;
        if (1 === a.length) {
            if ("object" != typeof a[0]) return t = r._soundById(parseInt(a[0], 10)), t ? t._pannerAttr : r._pannerAttr;
            n = a[0], void 0 === o && (r._pannerAttr = {
                coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : r._coneInnerAngle,
                coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : r._coneOuterAngle,
                coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : r._coneOuterGain,
                distanceModel: void 0 !== n.distanceModel ? n.distanceModel : r._distanceModel,
                maxDistance: void 0 !== n.maxDistance ? n.maxDistance : r._maxDistance,
                panningModel: void 0 !== n.panningModel ? n.panningModel : r._panningModel,
                refDistance: void 0 !== n.refDistance ? n.refDistance : r._refDistance,
                rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : r._rolloffFactor
            })
        } else 2 === a.length && (n = a[0], o = parseInt(a[1], 10));
        for (var i = r._getSoundIds(o), u = 0; u < i.length; u++)
            if (t = r._soundById(i[u])) {
                var d = t._pannerAttr;
                d = {
                    coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : d.coneInnerAngle,
                    coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : d.coneOuterAngle,
                    coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : d.coneOuterGain,
                    distanceModel: void 0 !== n.distanceModel ? n.distanceModel : d.distanceModel,
                    maxDistance: void 0 !== n.maxDistance ? n.maxDistance : d.maxDistance,
                    panningModel: void 0 !== n.panningModel ? n.panningModel : d.panningModel,
                    refDistance: void 0 !== n.refDistance ? n.refDistance : d.refDistance,
                    rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : d.rolloffFactor
                };
                var _ = t._panner;
                _ ? (_.coneInnerAngle = d.coneInnerAngle, _.coneOuterAngle = d.coneOuterAngle, _.coneOuterGain = d.coneOuterGain, _.distanceModel = d.distanceModel, _.maxDistance = d.maxDistance, _.panningModel = d.panningModel, _.refDistance = d.refDistance, _.rolloffFactor = d.rolloffFactor) : (t._pos || (t._pos = r._pos || [0, 0, -.5]), e(t, "spatial"))
            }
        return r
    }, Sound.prototype.init = function(e) {
        return function() {
            var n = this,
                o = n._parent;
            n._orientation = o._orientation, n._stereo = o._stereo, n._pos = o._pos, n._pannerAttr = o._pannerAttr, e.call(this), n._stereo ? o.stereo(n._stereo) : n._pos && o.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
        }
    }(Sound.prototype.init), Sound.prototype.reset = function(e) {
        return function() {
            var n = this,
                o = n._parent;
            return n._orientation = o._orientation, n._pos = o._pos, n._pannerAttr = o._pannerAttr, e.call(this)
        }
    }(Sound.prototype.reset);
    var e = function(e, n) {
        n = n || "spatial", "spatial" === n ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.panningModel = e._pannerAttr.panningModel, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.value = e._stereo), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id)
    }
}();
var vis = function() {
    var i, e, n = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (i in n)
        if (i in document) {
            e = n[i];
            break
        }
    return function(n) {
        return n && document.addEventListener(e, n), !document[i]
    }
}();
vis(function() {
    vis() ? setTimeout(function() {
        visibleResume()
    }, 300) : visiblePause()
});
var notIE = void 0 === document.documentMode,
    isChromium = window.chrome;
notIE && !isChromium || (window.addEventListener ? (window.addEventListener("focus", function(i) {
    setTimeout(function() {
        visibleResume()
    }, 300)
}, !1), window.addEventListener("blur", function(i) {
    visiblePause()
}, !1)) : (window.attachEvent("focus", function(i) {
    setTimeout(function() {
        visibleResume()
    }, 300)
}), window.attachEvent("blur", function(i) {
    visiblePause()
})));

function visibleResume() {
    famobiPauseActive || (hasFocus || (userInput && userInput.checkKeyFocus(), muted || "pause" == gameState || "splash" == gameState || "loading" == gameState || (Howler.mute(!1), playMusic())), hasFocus = !0)
}

function visiblePause() {
    famobiPauseActive || (hasFocus = !1, Howler.mute(!0), music.pause())
}

function playMusic() {
    music.playing() || music.play()
}

function isStock() {
    var a = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return a && parseFloat(a[1]) < 537
}

function resetGameData() {
    isBonusLevel ? (bonusLevelNum = 24, oGameData = {
        speedSecs: 0,
        overtakes: 0,
        coins: 0,
        dist: 0,
        time: 2500,
        levelStage: 0,
        totalLevelScore: 0,
        totalLevelCoins: 0,
        aSceneryOrderLeft: randomise(aLevelData[bonusLevelNum].aScenery),
        aSceneryOrderRight: randomise(aLevelData[bonusLevelNum].aScenery)
    }) : (oGameData = {
        speedSecs: 0,
        overtakes: 0,
        coins: 0,
        dist: 0,
        time: 950 * getRaceDist() - levelNum / aLevelData.length * 2300,
        levelStage: 0,
        totalLevelScore: 0,
        totalLevelCoins: 0,
        aSceneryOrderLeft: randomise(aLevelData[levelNum].aScenery),
        aSceneryOrderRight: randomise(aLevelData[levelNum].aScenery)
    }, 0 == levelNum && (oGameData.time += 300))
}

function randomise(a) {
    for (var t = a.slice(0), e = t.length - 1; e > 0; e--) {
        var i = Math.floor(Math.random() * (e + 1)),
            s = t[e];
        t[e] = t[i], t[i] = s
    }
    return t
}

function extGameLoad() {
    loadPreAssets()
}

function initTiltCheck() {
    isMobile && window.DeviceOrientationEvent ? (window.addEventListener("deviceorientation", startOrientTest, !1), window.setTimeout(endOrientTest, 1e3)) : initSplash()
}

function initSplash() {
    gameState = "splash", window.famobi_onPauseRequested = function() {
        Howler.mute(!0), music.pause(), famobiPauseActive = !0
    }, window.famobi_onResumeRequested = function() {
        muted || "pause" == gameState || (Howler.mute(!1), music.play()), famobiPauseActive = !1
    }, resizeCanvas(), getLatestData(), 1 != audioType || muted || (playMusic(), hasFocus || music.pause()), initStartScreen()
}

function getLatestData() {
    totalScore = saveDataHandler.aLevelStore[0], totalCoins = saveDataHandler.aLevelStore[1], curBike = saveDataHandler.getLatestBike(), saveDataHandler.getLastUnlockedLevel() > 0 && (firstRun = !1)
}

function startOrientTest(a) {
    orientTestInc += a.gamma + a.beta + a.alpha
}

function endOrientTest() {
    hasTilt = orientTestInc > 0, window.removeEventListener("deviceorientation", startOrientTest, !1), 3 == saveDataHandler.getControlState() ? controlMethod = hasTilt ? 0 : 1 : (controlMethod = saveDataHandler.getControlState(), hasTilt || 0 != controlMethod || (controlMethod = 1)), initSplash()
}

function initStartScreen() {
    gameState = "start";
    try {
       
    } catch (a) {}
    userInput.removeHitArea("moreGames"), 1 == audioType && music.fade(music.volume(), .25, 500), levelScore = 0, levelNum = 0, background = new Elements.Background("titleBg");
    var t, e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 0],
            align: [.5, .7],
            id: oImageIds.playBut
        },
        i = {
            oImgData: assetLib.getData("moreGamesBut"),
            aPos: [100, -45],
            align: [0, 1],
            id: "none",
            scale: .3,
            noMove: !0
        },
        s = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-80, 30],
            align: [1, 0],
            id: oImageIds.infoBut,
            noMove: !0
        },
        o = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-140, -40],
            align: [1, 1],
            id: oImageIds.shopBut,
            noMove: !0
        };
    t = saveDataHandler.getLatestBike() < 8 && totalCoins >= aBikeData[saveDataHandler.getLatestBike() + 1].cost ? {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-50, -55],
        align: [1, 1],
        id: oImageIds.newBikeBut,
        noMove: !0
    } : {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-50, -40],
        align: [1, 1],
        id: oImageIds.bikeBut,
        noMove: !0
    }, userInput.addHitArea("shopFromStart", butEventHandler, null, "image", o), userInput.addHitArea("bikeFromStart", butEventHandler, null, "image", t), userInput.addHitArea("playFromStart", butEventHandler, null, "image", e), userInput.addHitArea("moreGames", butEventHandler, null, "image", i), userInput.addHitArea("credits", butEventHandler, null, "image", s);
    var r = new Array(e, i, s, o, t);
    addMuteBut(r), panel = new Elements.Panel(gameState, r), panel.startTween1(), previousTime = (new Date).getTime(), updateStartScreenEvent()
}

function addMuteBut(a) {
    if (1 == audioType) {
        var t = oImageIds.muteBut0;
        muted && (t = oImageIds.muteBut1);
        var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-30, 30],
            align: [1, 0],
            id: t,
            noMove: !0
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", e), a.push(e)
    }
}

function initCreditsScreen() {
    gameState = "credits";
    try {
        
    } catch (a) {}
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [50, -40],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0
        },
        e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-30, -30],
            align: [1, 1],
            id: oImageIds.resetBut,
            noMove: !0
        };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", t), userInput.addHitArea("resetData", butEventHandler, null, "image", e);
    var i = new Array(t, e);
    addMuteBut(i), panel = new Elements.Panel(gameState, i), panel.startTween1(), previousTime = (new Date).getTime(), updateCreditsScreenEvent()
}

function initMapScreen() {
    gameState = "map";
    try {
      
    } catch (a) {}
    totalScore = saveDataHandler.aLevelStore[0], totalCoins = saveDataHandler.aLevelStore[1];
    var t, e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [50, -40],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0
        },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-140, -40],
            align: [1, 1],
            id: oImageIds.shopBut,
            noMove: !0
        };
    t = saveDataHandler.getLatestBike() < 8 && totalCoins >= aBikeData[saveDataHandler.getLatestBike() + 1].cost ? {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-50, -55],
        align: [1, 1],
        id: oImageIds.newBikeBut,
        noMove: !0
    } : {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-50, -40],
        align: [1, 1],
        id: oImageIds.bikeBut,
        noMove: !0
    }, saveDataHandler.getCalendarStatus() && saveDataHandler.getLastUnlockedLevel() > 0 && userInput.addHitArea("calendarFromMap", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 80 - 50, canvas.height - 40 - 41, canvas.width / 2 + 80 - 50, canvas.height + 40 - 41]
    }, !0), userInput.addHitArea("backFromMap", butEventHandler, null, "image", e), userInput.addHitArea("shopFromMap", butEventHandler, null, "image", i), userInput.addHitArea("bikeFromMap", butEventHandler, null, "image", t);
    var s = new Array(e, i, t);
    addMuteBut(s), panel = new Elements.Panel(gameState, s), userInput.addHitArea("mapTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 50, canvas.width, canvas.height - 80]
    }, !0), panel.mapButIdToHighlight = -1;
    var o = Math.min(saveDataHandler.getLastUnlockedLevel(), aLevelData.length - 1);
    panel.mapPosX = panel.mapPosRealX = Math.max(Math.min(aLevelData[o].x - canvas.width / 2, 1600 - canvas.width), 0), panel.mapPosY = panel.mapPosRealY = Math.max(Math.min(aLevelData[o].y - canvas.height / 2, 1111 - canvas.height), 0), panel.mapScale = 1, canvas.width > 1600 && (panel.mapScale = canvas.width / 1600), canvas.height > 1111 && (panel.mapScale = Math.max(canvas.height / 1111, panel.mapScale)), panel.startTween1(), previousTime = (new Date).getTime(), updateMapScreenEvent()
}

function toggleMapButs(a) {}

function initUpgradeScreen() {
    gameState = "upgrade", background = new Elements.Background("garageBg");
    var a, t = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [50, -40],
        align: [0, 1],
        id: oImageIds.backBut,
        noMove: !0
    };
    a = saveDataHandler.getLatestBike() < 8 && totalCoins >= aBikeData[saveDataHandler.getLatestBike() + 1].cost ? {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-50, -55],
        align: [1, 1],
        id: oImageIds.newBikeBut,
        noMove: !0
    } : {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-50, -40],
        align: [1, 1],
        id: oImageIds.bikeBut,
        noMove: !0
    }, userInput.addHitArea("playFromUpgrade", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 60, canvas.height / 2 + 145 - 43, canvas.width / 2 + 60, canvas.height / 2 + 145 + 43]
    }, !0), userInput.addHitArea("upgradeLeft", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 - 175 + 45, canvas.height / 2 + 135 + 30]
    }, !0), userInput.addHitArea("upgradeRight", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 + 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 + 175 + 45, canvas.height / 2 + 135 + 30]
    }, !0);
    for (var e = new Array({
            x: canvas.width / 2 - 90,
            y: canvas.height / 2 - 5
        }, {
            x: canvas.width / 2 + 120,
            y: canvas.height / 2 - 5
        }, {
            x: canvas.width / 2 - 90,
            y: canvas.height / 2 + 65
        }, {
            x: canvas.width / 2 + 120,
            y: canvas.height / 2 + 65
        }), i = 0; i < e.length; i++) userInput.addHitArea("buyUpgrade", butEventHandler, {
        id: i
    }, "rect", {
        aRect: [e[i].x - 60, e[i].y - 25, e[i].x + 60, e[i].y + 25]
    }, !1);
    userInput.addHitArea("backFromUpgrade", butEventHandler, null, "image", t), userInput.addHitArea("bikeFromUpgrade", butEventHandler, null, "image", a);
    var s = new Array(t, a);
    addMuteBut(s), panel = new Elements.Panel(gameState, s), panel.startTween1(), previousTime = (new Date).getTime(), updateUpgradeScreenEvent()
}

function initBikeShopScreen(a) {
    "undefined" == typeof a && (a = !1), gameState = "bikeShop";
    try {
       
    } catch (t) {}
    background = new Elements.Background("garageBg");
    var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [50, -40],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0
        },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-50, -40],
            align: [1, 1],
            id: oImageIds.shopBut,
            noMove: !0
        };
    userInput.addHitArea("playFromBikeShop", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 60, canvas.height / 2 + 145 - 43, canvas.width / 2 + 60, canvas.height / 2 + 145 + 43]
    }, !0), userInput.addHitArea("bikeShopLeft", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 - 175 + 45, canvas.height / 2 + 135 + 30]
    }, !0), userInput.addHitArea("bikeShopRight", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 + 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 + 175 + 45, canvas.height / 2 + 135 + 30]
    }, !0), userInput.addHitArea("buyBike", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 115, canvas.height / 2 + 72 - 30, canvas.width / 2 + 115, canvas.height / 2 + 72 + 30]
    }, !1), userInput.addHitArea("backFromBikeShop", butEventHandler, null, "image", e), userInput.addHitArea("shopFromBikeShop", butEventHandler, null, "image", i);
    var s = new Array(e, i);
    addMuteBut(s), curBikeShopId = a ? curBike : Math.min(curBike + 1, aBikeData.length - 1), panel = new Elements.Panel(gameState, s), panel.startTween1(), previousTime = (new Date).getTime(), updateBikeShopScreenEvent()
}

function initTut() {
    gameState = "tut";
    try {
       
    } catch (a) {}
    if (isMobile) {
        var t = -75;
        hasTilt && (t = 0), userInput.addHitArea("controlBut0", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 150 - 65 + t, canvas.height / 2 + 50 - 85, canvas.width / 2 - 150 + 65 + t, canvas.height / 2 + 50]
        }, !0), userInput.addHitArea("controlBut1", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 65 + t, canvas.height / 2 + 50 - 85, canvas.width / 2 + 65 + t, canvas.height / 2 + 50]
        }, !0), userInput.addHitArea("controlBut2", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 + 150 - 65 + t, canvas.height / 2 + 50 - 85, canvas.width / 2 + 150 + 65 + t, canvas.height / 2 + 50]
        }, !1)
    }
    var e = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-77, -57],
        align: [1, 1],
        id: oImageIds.playBut,
        scale: .75
    };
    userInput.addHitArea("playFromTut", butEventHandler, null, "image", e);
    var i = new Array(e);
    addMuteBut(i), panel = new Elements.Panel(gameState, i), panel.startTween1(), firstRun = !1, previousTime = (new Date).getTime(), updateTutEvent()
}

function initGame() {
   gameState = "game", playSound("raceStart"), 1 == audioType && music.fade(music.volume(), .5, 1e3), resetGameData();
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-80, 30],
        align: [1, 0],
        id: oImageIds.pauseBut,
        noMove: !0
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", a);
    var t = new Array(a);
    addMuteBut(t), panel = new Elements.Panel(gameState, t), panel.startTween1(), road = new Elements.Road, bike = new Elements.Bike, leftSteer = 0, rightSteer = 0, manualSteering = 0, startDragX = 0, dragState = 0, vehicleRate = 0, vehicleRelease = 0, isAccelerating = !1, aVehicles = new Array, aVehicleLanes = new Array, curTime = oGameData.time, levelOver = !1, engineInc = 0, sceneryInc = 0;
    for (var e = 0; e < 4; e++) {
        var i = new Array;
        aVehicleLanes.push(i)
    }
    oLaneSpeeds = {
        lane0: 0,
        lane1: 0,
        lane2: 0,
        lane3: 0
    };
    for (var e = 0; e < 4; e++) oLaneSpeeds["lane" + e] = getSlowLaneSpeed(), tweenLaneSpeed(e);
    for (var e = 0; e < 3; e++) addVehicle(100 * Math.random() + vehicleStartRowNum);
    hud = new Elements.Hud, setControl(), previousTime = (new Date).getTime(), updateGameEvent()
}

function getSlowLaneSpeed() {
    return 10 * Math.random() + 30
}

function getRandomLaneSpeed() {
    return 30 * Math.random() + 42
}

function tweenLaneSpeed(a, t) {
    "undefined" == typeof t && (t = !1);
    var e;
    switch (e = t ? getSlowLaneSpeed() : getRandomLaneSpeed(), a) {
        case 0:
            laneTween0 && laneTween0.kill(), laneTween0 = TweenLite.to(oLaneSpeeds, 5 * Math.random() + 3, {
                lane0: e,
                ease: "Quad.easeOut",
                onComplete: function() {
                    tweenLaneSpeed(0)
                }
            });
            break;
        case 1:
            laneTween1 && laneTween1.kill(), laneTween1 = TweenLite.to(oLaneSpeeds, 5 * Math.random() + 3, {
                lane1: e,
                ease: "Quad.easeOut",
                onComplete: function() {
                    tweenLaneSpeed(1)
                }
            });
            break;
        case 2:
            laneTween2 && laneTween2.kill(), laneTween2 = TweenLite.to(oLaneSpeeds, 5 * Math.random() + 3, {
                lane2: e,
                ease: "Quad.easeOut",
                onComplete: function() {
                    tweenLaneSpeed(2)
                }
            });
            break;
        case 3:
            laneTween3 && laneTween3.kill(), laneTween3 = TweenLite.to(oLaneSpeeds, 5 * Math.random() + 3, {
                lane3: e,
                ease: "Quad.easeOut",
                onComplete: function() {
                    tweenLaneSpeed(3)
                }
            })
    }
}

function clearControl() {
    window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", devOrientHandler, !1), userInput.removeHitArea("steerLeft"), userInput.removeHitArea("steerRight"), userInput.removeKey("steerRight"), userInput.removeKey("steerLeft"), userInput.removeKey("acc"), userInput.removeHitArea("steerTouch"), userInput.removeHitArea("accelerate")
}

function setControl() {
    0 == controlMethod ? window.DeviceOrientationEvent && window.addEventListener("deviceorientation", devOrientHandler, !1) : 1 == controlMethod ? isMobile ? (userInput.addHitArea("steerLeft", butEventHandler, {
        multiTouch: !0
    }, "rect", {
        aRect: [0, 60, canvas.width / 2, canvas.height]
    }, !0), userInput.addHitArea("steerRight", butEventHandler, {
        multiTouch: !0
    }, "rect", {
        aRect: [canvas.width / 2, 60, canvas.width, canvas.height]
    }, !0)) : (userInput.addKey("steerRight", butEventHandler, null, 39), userInput.addKey("steerLeft", butEventHandler, null, 37)) : userInput.addHitArea("steerTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 60, canvas.width, canvas.height]
    }, !0)
}

function devOrientHandler(a) {
    oTiltData.gamma = a.gamma, oTiltData.beta = a.beta, oTiltData.alpha = a.alpha, manualSteering = canvas.width > canvas.height ? oTiltData.gamma > 0 ? Math.max(Math.min(oTiltData.beta / 12, 1), -1) : Math.max(Math.min(oTiltData.beta / -12, 1), -1) : oTiltData.beta > 0 ? Math.max(Math.min(oTiltData.gamma / -12, 1), -1) : Math.max(Math.min(oTiltData.gamma / 12, 1), -1)
}

function initPause() {
    gameState = "pause";
    try {
       
    } catch (a) {}
    var t, e;
    if (rightSteer = leftSteer = 0, isMobile) {
        var i = -75;
        hasTilt && (i = 0), userInput.addHitArea("controlBut0", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 150 - 65 + i, canvas.height / 2 + 50 - 85, canvas.width / 2 - 150 + 65 + i, canvas.height / 2 + 50]
        }, !0), userInput.addHitArea("controlBut1", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 65 + i, canvas.height / 2 + 50 - 85, canvas.width / 2 + 65 + i, canvas.height / 2 + 50]
        }, !0), userInput.addHitArea("controlBut2", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 + 150 - 65 + i, canvas.height / 2 + 50 - 85, canvas.width / 2 + 150 + 65 + i, canvas.height / 2 + 50]
        }, !1), t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-77, -57],
            align: [1, 1],
            id: oImageIds.playBut,
            scale: .75,
            noMove: !0
        }, e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-195, -57],
            align: [1, 1],
            id: oImageIds.retryBut,
            scale: .75,
            noMove: !0
        }
    } else t = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [80, 0],
        align: [.5, .5],
        id: oImageIds.playBut,
        noMove: !0
    }, e = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-80, 0],
        align: [.5, .5],
        id: oImageIds.retryBut,
        noMove: !0
    };
    var s = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [50, -30],
        align: [0, 1],
        id: oImageIds.quitBut,
        noMove: !0,
        text: "quit"
    };
    road.curveTween && road.curveTween.pause(), userInput.addHitArea("resumeGameFromPause", butEventHandler, null, "image", t), userInput.addHitArea("restartGameFromPause", butEventHandler, null, "image", e), userInput.addHitArea("quitGameFromPause", butEventHandler, null, "image", s);
    var o = new Array(t, s, e);
    panel = new Elements.Panel(gameState, o), panel.startTween1(), previousTime = (new Date).getTime(), background = new Elements.Background("titleBg"), updatePauseEvent()
}

function resumeGame() {
   gameState = "game", engineInc = 0, road.curveTween && road.curveTween.resume();
    var a = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [-80, 30],
        align: [1, 0],
        id: oImageIds.pauseBut,
        noMove: !0
    };
    userInput.addHitArea("pause", butEventHandler, null, "image", a);
    var t = new Array(a);
    addMuteBut(t), clearControl(), setControl(), panel = new Elements.Panel(gameState, t), panel.startTween1(), previousTime = (new Date).getTime(), updateGameEvent()
}

function butEventHandler(a, t) {
    switch (a) {
        case "langSelect":
            curLang = t.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), preAssetLib = new Utils.AssetLoader(curLang, [{
                id: "preloadImage",
                file: "images/preloadImage.jpg"
            }], ctx, canvas.width, canvas.height, (!1)), preAssetLib.onReady(initLoadAssets);
            break;
        case "credits":
            playSound("click"), userInput.removeHitArea("playFromStart"), userInput.removeHitArea("shopFromStart"), userInput.removeHitArea("bikeFromStart"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), userInput.removeHitArea("mute"), initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click"), userInput.removeHitArea("backFromCredits"), userInput.removeHitArea("resetData"), userInput.removeHitArea("mute"), initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
            playSound("click");
            try {
               window.open("http://www.myfreegames.net","_blank");
            } catch (e) {}
            break;
        case "resetData":
            playSound("click"), userInput.removeHitArea("backFromCredits"), userInput.removeHitArea("resetData"), userInput.removeHitArea("mute");
            var i = function() {
                saveDataHandler.resetData(), firstRun = !0, getLatestData(), initStartScreen()
            };
            window.famobi_analytics.trackEvent("EVENT_CUSTOM", {
                event: "EVENT_RESETDATA"
            }).then(i, i);
            break;
        case "playFromStart":
            playSound("click"), userInput.removeHitArea("playFromStart"), userInput.removeHitArea("shopFromStart"), userInput.removeHitArea("bikeFromStart"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), userInput.removeHitArea("mute"), initMapScreen();
            break;
        case "shopFromStart":
            playSound("click"), userInput.removeHitArea("playFromStart"), userInput.removeHitArea("shopFromStart"), userInput.removeHitArea("bikeFromStart"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), userInput.removeHitArea("mute"), initUpgradeScreen();
            break;
        case "bikeFromStart":
            playSound("click"), userInput.removeHitArea("playFromStart"), userInput.removeHitArea("shopFromStart"), userInput.removeHitArea("bikeFromStart"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), userInput.removeHitArea("mute"), initBikeShopScreen();
            break;
        case "mapTouch":
            if (t.isBeingDragged && !t.hasLeft && mapTouchFirst) panel.mapPosX = Math.max(Math.min(panel.mapStartX - t.x, 1600 - canvas.width), 0), panel.mapPosY = Math.max(Math.min(panel.mapStartY - t.y, 1111 - canvas.height), 0);
            else if (t.isDown && 0 == t.isBeingDragged) playSound("click"), panel.mapTween && panel.mapTween.kill(), panel.mapStartX = panel.mapPosRealX + t.x, panel.mapDragX = t.x, panel.mapStartY = panel.mapPosRealY + t.y, panel.mapDragY = t.y, mapTouchFirst = !0;
            else if (mapTouchFirst && (mapTouchFirst = !1, Math.abs(panel.mapDragY - t.y) < 10))
                for (var s = 0; s < aLevelData.length; s++) {
                    var o, r;
                    if (s == saveDataHandler.getLastUnlockedLevel() ? (r = 65, o = -65, aLevelData[s].y < 200 && (o = 65)) : (o = -45, r = 45, aLevelData[s].y < 200 && (o = 45)), s <= saveDataHandler.getLastUnlockedLevel() && t.x + panel.mapPosX > (aLevelData[s].x - 40) * panel.mapScale && t.x + panel.mapPosX < (aLevelData[s].x + 40) * panel.mapScale && t.y + panel.mapPosY > (aLevelData[s].y + o - r) * panel.mapScale && t.y + panel.mapPosY < (aLevelData[s].y + o + r) * panel.mapScale) {
                        levelNum = s, userInput.removeHitArea("calendarFromMap"), userInput.removeHitArea("backFromMap"), userInput.removeHitArea("shopFromMap"), userInput.removeHitArea("bikeFromMap"), userInput.removeHitArea("mapTouch"), userInput.removeHitArea("mute"), isBonusLevel = !1, firstRun ? initTut() : window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSTART, {
                            levelName: (levelNum + 1).toString()
                        }).then(initGame, initGame);
                        break
                    }
                }
            break;
        case "playFromTut":
            playSound("click"), userInput.removeHitArea("playFromTut"), userInput.removeHitArea("controlBut0"), userInput.removeHitArea("controlBut1"), userInput.removeHitArea("controlBut2"), userInput.removeHitArea("mute"), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSTART, {
                levelName: (levelNum + 1).toString()
            }).then(initGame, initGame);
            break;
        case "calendarFromMap":
            playSound("mapBut"), userInput.removeHitArea("calendarFromMap"), userInput.removeHitArea("backFromMap"), userInput.removeHitArea("shopFromMap"), userInput.removeHitArea("bikeFromMap"), userInput.removeHitArea("mapTouch"), userInput.removeHitArea("mute"), isBonusLevel = !0, window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSTART, {
                levelName: "daily_bonus_level"
            }).then(initGame, initGame);
            break;
        case "backFromMap":
            playSound("click"), userInput.removeHitArea("calendarFromMap"), userInput.removeHitArea("backFromMap"), userInput.removeHitArea("shopFromMap"), userInput.removeHitArea("bikeFromMap"), userInput.removeHitArea("mapTouch"), userInput.removeHitArea("mute"), initStartScreen();
            break;
        case "shopFromMap":
            playSound("click"), userInput.removeHitArea("calendarFromMap"), userInput.removeHitArea("backFromMap"), userInput.removeHitArea("shopFromMap"), userInput.removeHitArea("bikeFromMap"), userInput.removeHitArea("mapTouch"), userInput.removeHitArea("mute"), initUpgradeScreen();
            break;
        case "bikeFromMap":
            playSound("click"), userInput.removeHitArea("calendarFromMap"), userInput.removeHitArea("backFromMap"), userInput.removeHitArea("shopFromMap"), userInput.removeHitArea("bikeFromMap"), userInput.removeHitArea("mapTouch"), userInput.removeHitArea("mute"), initBikeShopScreen();
            break;
        case "upgradeLeft":
            if (curBike > 0)
                for (curBike--, playSound("click"); !saveDataHandler.hasBike(curBike) && curBike > 0;) curBike--;
            break;
        case "upgradeRight":
            if (curBike < saveDataHandler.getLatestBike())
                for (curBike++, playSound("click"); !saveDataHandler.hasBike(curBike) && curBike < saveDataHandler.getLatestBike();) curBike++;
            break;
        case "buyUpgrade":
            if (saveDataHandler.getBikeUpgrade(curBike, t.id) < 5) {
                var h = upgradeBaseCost + upgradeInc * saveDataHandler.getBikeUpgrade(curBike, t.id) + curBike * upgradeBikeInc;
                totalCoins >= h && (totalCoins -= h, saveDataHandler.addUpgrade(curBike, t.id), saveDataHandler.setTotalCoins(totalCoins), saveDataHandler.saveData(), playSound("buyUpgrade"))
            }
            break;
        case "backFromUpgrade":
            playSound("click"), userInput.removeHitArea("backFromUpgrade"), userInput.removeHitArea("bikeFromUpgrade"), userInput.removeHitArea("upgradeLeft"), userInput.removeHitArea("upgradeRight"), userInput.removeHitArea("buyUpgrade"), userInput.removeHitArea("playFromUpgrade"), userInput.removeHitArea("mute"), initMapScreen();
            break;
        case "bikeFromUpgrade":
            playSound("click"), userInput.removeHitArea("backFromUpgrade"), userInput.removeHitArea("bikeFromUpgrade"), userInput.removeHitArea("upgradeLeft"), userInput.removeHitArea("upgradeRight"), userInput.removeHitArea("buyUpgrade"), userInput.removeHitArea("playFromUpgrade"), userInput.removeHitArea("mute"), initBikeShopScreen();
            break;
        case "playFromUpgrade":
            playSound("click"), userInput.removeHitArea("backFromUpgrade"), userInput.removeHitArea("bikeFromUpgrade"), userInput.removeHitArea("upgradeLeft"), userInput.removeHitArea("upgradeRight"), userInput.removeHitArea("buyUpgrade"), userInput.removeHitArea("playFromUpgrade"), userInput.removeHitArea("mute"), initMapScreen();
            break;
        case "bikeShopLeft":
            curBikeShopId > 0 && (curBikeShopId--, playSound("click"), saveDataHandler.hasBike(curBikeShopId) && (curBike = curBikeShopId));
            break;
        case "bikeShopRight":
            curBikeShopId < aBikeData.length - 1 && (curBikeShopId++, playSound("click"), saveDataHandler.hasBike(curBikeShopId) && (curBike = curBikeShopId));
            break;
        case "buyBike":
            if (!saveDataHandler.hasBike(curBikeShopId)) {
                var h = aBikeData[curBikeShopId].cost;
                totalCoins >= h && (totalCoins -= h, saveDataHandler.addBike(curBikeShopId), saveDataHandler.setTotalCoins(totalCoins), saveDataHandler.saveData(), curBike = curBikeShopId, userInput.removeHitArea("backFromBikeShop"), userInput.removeHitArea("shopFromBikeShop"), userInput.removeHitArea("bikeShopLeft"), userInput.removeHitArea("bikeShopRight"), userInput.removeHitArea("buyBike"), userInput.removeHitArea("playFromBikeShop"), userInput.removeHitArea("mute"), initBikeShopScreen(!0), playSound("buyBike"))
            }
            break;
        case "backFromBikeShop":
            playSound("click"), userInput.removeHitArea("backFromBikeShop"), userInput.removeHitArea("shopFromBikeShop"), userInput.removeHitArea("bikeShopLeft"), userInput.removeHitArea("bikeShopRight"), userInput.removeHitArea("buyBike"), userInput.removeHitArea("playFromBikeShop"), userInput.removeHitArea("mute"), initMapScreen();
            break;
        case "shopFromBikeShop":
            playSound("click"), userInput.removeHitArea("backFromBikeShop"), userInput.removeHitArea("shopFromBikeShop"), userInput.removeHitArea("bikeShopLeft"), userInput.removeHitArea("bikeShopRight"), userInput.removeHitArea("buyBike"), userInput.removeHitArea("playFromBikeShop"), userInput.removeHitArea("mute"), initUpgradeScreen();
            break;
        case "playFromBikeShop":
            saveDataHandler.hasBike(curBikeShopId) && (userInput.removeHitArea("backFromBikeShop"), userInput.removeHitArea("shopFromBikeShop"), userInput.removeHitArea("bikeShopLeft"), userInput.removeHitArea("bikeShopRight"), userInput.removeHitArea("buyBike"), userInput.removeHitArea("playFromBikeShop"), userInput.removeHitArea("mute"), initMapScreen(), playSound("click"));
            break;
        case "steerLeft":
            leftSteer = t.isDown ? 1 : 0;
            break;
        case "steerRight":
            rightSteer = t.isDown ? -1 : 0;
            break;
        case "steerTouch":
            t.isDown && !t.isBeingDragged ? (0 == dragState && (startDragX = t.x), dragState = 1) : 1 == dragState && t.isBeingDragged ? manualSteering = Math.min(Math.max((startDragX - t.x) / 200, -1), 1) : 1 == dragState && (dragState = 0, manualSteering = 0);
            break;
        case "controlBut0":
            playSound("click"), controlMethod = 0, saveDataHandler.setControlState(controlMethod), saveDataHandler.saveData();
            break;
        case "controlBut1":
            playSound("click"), controlMethod = 1, saveDataHandler.setControlState(controlMethod), saveDataHandler.saveData();
            break;
        case "controlBut2":
            playSound("click"), controlMethod = 2, saveDataHandler.setControlState(controlMethod), saveDataHandler.saveData();
            break;
        case "playFromLevelComplete":
            playSound("click"), userInput.removeHitArea("playFromLevelComplete"), userInput.removeHitArea("backFromLevelComplete"), userInput.removeHitArea("shopFromLevelComplete"), userInput.removeHitArea("bikeFromLevelComplete"), userInput.removeHitArea("mute"), initMapScreen();
            break;
        case "shopFromLevelComplete":
            playSound("click"), userInput.removeHitArea("playFromLevelComplete"), userInput.removeHitArea("shopFromLevelComplete"), userInput.removeHitArea("bikeFromLevelComplete"), userInput.removeHitArea("mute"), initUpgradeScreen();
            break;
        case "bikeFromLevelComplete":
            playSound("click"), userInput.removeHitArea("playFromLevelComplete"), userInput.removeHitArea("shopFromLevelComplete"), userInput.removeHitArea("bikeFromLevelComplete"), userInput.removeHitArea("mute"), initBikeShopScreen();
            break;
        case "playFromLevelFail":
            playSound("click"), userInput.removeHitArea("playFromLevelFail"), userInput.removeHitArea("backFromLevelFail"), userInput.removeHitArea("shopFromLevelFail"), userInput.removeHitArea("bikeFromLevelFail"), userInput.removeHitArea("mute"), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELRESTART, {
                levelName: (levelNum + 1).toString()
            }).then(initGame, initGame);
            break;
        case "backFromLevelFail":
            playSound("click"), userInput.removeHitArea("playFromLevelFail"), userInput.removeHitArea("backFromLevelFail"), userInput.removeHitArea("shopFromLevelFail"), userInput.removeHitArea("bikeFromLevelFail"), userInput.removeHitArea("mute"), initMapScreen();
            break;
        case "shopFromLevelFail":
            playSound("click"), userInput.removeHitArea("playFromLevelFail"), userInput.removeHitArea("backFromLevelFail"), userInput.removeHitArea("shopFromLevelFail"), userInput.removeHitArea("bikeFromLevelFail"), userInput.removeHitArea("mute"), initUpgradeScreen();
            break;
        case "bikeFromLevelFail":
            playSound("click"), userInput.removeHitArea("playFromLevelFail"), userInput.removeHitArea("backFromLevelFail"), userInput.removeHitArea("shopFromLevelFail"), userInput.removeHitArea("bikeFromLevelFail"), userInput.removeHitArea("mute"), initBikeShopScreen();
            break;
        case "mute":
            if (playSound("click"), toggleMute(), muted) {
                panel.switchBut(oImageIds.muteBut0, oImageIds.muteBut1);
                try {
                    window.famobi_analytics.trackEvent(famobi_analytics.EVENT_VOLUMECHANGE, {
                        bgmVolume: 0,
                        sfxVolume: 0
                    })
                } catch (e) {}
            } else {
                panel.switchBut(oImageIds.muteBut1, oImageIds.muteBut0);
                try {
                    window.famobi_analytics.trackEvent(famobi_analytics.EVENT_VOLUMECHANGE, {
                        bgmVolume: 1,
                        sfxVolume: 1
                    })
                } catch (e) {}
            }
            break;
        case "pause":
            playSound("click"), 1 == audioType ? (Howler.mute(!0), playMusic()) : 2 == audioType && music.pause(), userInput.removeHitArea("pause"), userInput.removeHitArea("steerRight"), userInput.removeHitArea("steerLeft"), userInput.removeHitArea("steerTouch"), userInput.removeKey("steerRight"), userInput.removeKey("steerLeft"), window.removeEventListener("deviceorientation", devOrientHandler, !1), userInput.removeHitArea("mute"), initPause();
            break;
        case "resumeGameFromPause":
            playSound("click"), 1 == audioType ? muted || (Howler.mute(!1), playMusic()) : 2 == audioType && (muted || playMusic()), userInput.removeHitArea("quitGameFromPause"), userInput.removeHitArea("resumeGameFromPause"), userInput.removeHitArea("restartGameFromPause"), userInput.removeHitArea("controlBut0"), userInput.removeHitArea("controlBut1"), userInput.removeHitArea("controlBut2"), resumeGame();
            break;
        case "quitGameFromPause":
            playSound("click");
            try {
                window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
                    levelName: (levelNum + 1).toString(),
                    reason: "quit"
                })
            } catch (e) {}
            sound.stop(), 1 == audioType ? muted || (Howler.mute(!1), playMusic()) : 2 == audioType && (muted || playMusic()), userInput.removeHitArea("quitGameFromPause"), userInput.removeHitArea("resumeGameFromPause"), userInput.removeHitArea("restartGameFromPause"), userInput.removeHitArea("controlBut0"), userInput.removeHitArea("controlBut1"), userInput.removeHitArea("controlBut2"), userInput.removeHitArea("mute"), levelScore = 0, initStartScreen();
            break;
        case "restartGameFromPause":
            playSound("click");
            try {
                window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
                    levelName: (levelNum + 1).toString(),
                    reason: "draw"
                })
            } catch (e) {}
            try {
                window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELRESTART, {
                    levelName: (levelNum + 1).toString()
                })
            } catch (e) {}
            1 == audioType ? muted || (Howler.mute(!1), playMusic()) : 2 == audioType && (muted || playMusic()), userInput.removeHitArea("quitGameFromPause"), userInput.removeHitArea("resumeGameFromPause"), userInput.removeHitArea("restartGameFromPause"), userInput.removeHitArea("controlBut0"), userInput.removeHitArea("controlBut1"), userInput.removeHitArea("controlBut2"), userInput.removeHitArea("mute"), levelScore = 0, initGame()
    }
}

function getRaceDist() {
    return isBonusLevel ? 2 : 2.5 + levelNum / 10
}

function hasCrashed() {
    sound.stop(), playSound("crash" + Math.floor(2 * Math.random())), playSound("rev0"), engineInc = 0, lastWhooshLane = -1, tweenLaneSpeed(Math.floor(4 * Math.random()), !0), road.speed *= .5, hud.showCrash(), bike.showCrash()
}

function updateScore(a) {
    levelScore += a
}

function initLevelComplete() {
    window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_LEVELRESULT), gameState = "levelComplete", playSound("scoreTotal0"), background = new Elements.Background("garageBg"), 1 == audioType && music.fade(music.volume(), .25, 500), oGameData.totalLevelScore = Math.round(curTime / 10) + 10 * oGameData.overtakes + 10 * oGameData.speedSecs + oGameData.coins, oGameData.totalLevelCoins = Math.round(oGameData.coins + curTime / 10 + oGameData.overtakes + oGameData.speedSecs), totalScore = Math.min(totalScore + oGameData.totalLevelScore, 99999), totalCoins = Math.min(totalCoins + oGameData.totalLevelCoins, 99999), saveDataHandler.setTotalScore(totalScore), saveDataHandler.setTotalCoins(totalCoins), isBonusLevel ? saveDataHandler.setCalendarComplete() : levelNum == saveDataHandler.getLastUnlockedLevel() && (saveDataHandler.setLevelComplete(levelNum), levelNum++), saveDataHandler.saveData(), playSound("levelComplete"), userInput.removeHitArea("mute");
    var a, t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 130],
            align: [.5, .5],
            id: oImageIds.playBut,
            scale: 1e-4
        },
        e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-140, -40],
            align: [1, 1],
            id: oImageIds.shopBut,
            scale: 1e-4,
            noMove: !0
        };
    a = saveDataHandler.getLatestBike() < 8 && totalCoins >= aBikeData[saveDataHandler.getLatestBike() + 1].cost ? {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-50, -55],
            align: [1, 1],
            id: oImageIds.newBikeBut,
            scale: 1e-4,
            noMove: !0
        } : {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-50, -40],
            align: [1, 1],
            id: oImageIds.bikeBut,
            scale: 1e-4,
            noMove: !0
        }, userInput.addHitArea("playFromLevelComplete", butEventHandler, null, "image", t),
        userInput.addHitArea("shopFromLevelComplete", butEventHandler, null, "image", e), userInput.addHitArea("bikeFromLevelComplete", butEventHandler, null, "image", a);
    for (var i = new Array(t, e, a), s = 0; s < i.length; s++) "undefined" == typeof i[s].noMove && (i[s].doMove = !0), i[s].noMove = !0;
    addMuteBut(i), panel = new Elements.Panel(gameState, i), panel.startLevelCompleteTween(), previousTime = (new Date).getTime();
    var o = function() {
        for (var s = 0; s < i.length; s++) i[s].doMove && (i[s].noMove = !1), i[s].scale = 1;
        userInput.addHitArea("playFromLevelComplete", butEventHandler, null, "image", t), userInput.addHitArea("shopFromLevelComplete", butEventHandler, null, "image", e), userInput.addHitArea("bikeFromLevelComplete", butEventHandler, null, "image", a)
    };
    setTimeout(function() {
        Promise.all([window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSUCCESS, {
            levelName: levelNum.toString()
        }), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSCORE, {
            levelName: levelNum.toString(),
            levelScore: oGameData.totalLevelScore
        }), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_TOTALSCORE, {
            totalScore: totalScore
        })]).then(function() {
            o()
        }, function() {
            o()
        })
    }, 2e3), updateLevelComplete()
}

function initLevelFail() {
    window.famobi_analytics.trackScreen(famobi_analytics.SCREEN_LEVELRESULT), gameState = "levelFail", playSound("scoreTotal0"), background = new Elements.Background("garageBg"), 1 == audioType && music.fade(music.volume(), .25, 500), oGameData.totalLevelScore = 10 * oGameData.overtakes + 10 * oGameData.speedSecs + oGameData.coins, oGameData.totalLevelCoins = Math.round(oGameData.coins) + oGameData.overtakes + oGameData.speedSecs, totalScore = Math.min(totalScore + oGameData.totalLevelScore, 99999), totalCoins = Math.min(totalCoins + oGameData.totalLevelCoins, 99999), saveDataHandler.setTotalScore(totalScore), saveDataHandler.setTotalCoins(totalCoins), saveDataHandler.saveData(), playSound("levelFail"), userInput.removeHitArea("mute");
    var a, t, e, i;
    if (totalCoins < 50) {
        a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 130],
            align: [.5, .5],
            id: oImageIds.retryBut,
            scale: 1e-4
        }, t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [50, -40],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0,
            scale: 1e-4
        }, e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-140, -40],
            align: [1, 1],
            id: oImageIds.shopBut,
            noMove: !0,
            scale: 1e-4
        };
        var i;
        i = saveDataHandler.getLatestBike() < 8 && totalCoins >= aBikeData[saveDataHandler.getLatestBike() + 1].cost ? {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-50, -55],
            align: [1, 1],
            id: oImageIds.newBikeBut,
            noMove: !0,
            scale: 1e-4
        } : {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-50, -40],
            align: [1, 1],
            id: oImageIds.bikeBut,
            noMove: !0,
            scale: 1e-4
        }
    } else {
        a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 130],
            align: [.5, .5],
            id: oImageIds.retryBut,
            noMove: !0,
            scale: 1e-4
        }, t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [50, -40],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0,
            scale: 1e-4
        }, e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-140, -40],
            align: [1, 1],
            id: oImageIds.shopBut,
            scale: 1e-4
        };
        var i;
        i = saveDataHandler.getLatestBike() < 8 && totalCoins >= aBikeData[saveDataHandler.getLatestBike() + 1].cost ? {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-50, -55],
            align: [1, 1],
            id: oImageIds.newBikeBut,
            scale: 1e-4
        } : {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-50, -40],
            align: [1, 1],
            id: oImageIds.bikeBut,
            noMove: !0,
            scale: 1e-4
        }
    }
    for (var s = new Array(a, e, i, t), o = 0; o < s.length; o++) "undefined" == typeof s[o].noMove && (s[o].doMove = !0), s[o].noMove = !0;
    addMuteBut(s), panel = new Elements.Panel(gameState, s), panel.startLevelCompleteTween(), previousTime = (new Date).getTime();
    var r = function() {
        for (var o = 0; o < s.length; o++) s[o].doMove && (s[o].noMove = !1), s[o].scale = 1;
        userInput.addHitArea("playFromLevelFail", butEventHandler, null, "image", a), userInput.addHitArea("backFromLevelFail", butEventHandler, null, "image", t), userInput.addHitArea("shopFromLevelFail", butEventHandler, null, "image", e), userInput.addHitArea("bikeFromLevelFail", butEventHandler, null, "image", i)
    };
    setTimeout(function() {
        Promise.all([window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELFAIL, {
            levelName: (levelNum + 1).toString(),
            reason: "timeout"
        }), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_LEVELSCORE, {
            levelName: (levelNum + 1).toString(),
            levelScore: oGameData.totalLevelScore
        }), window.famobi_analytics.trackEvent(famobi_analytics.EVENT_TOTALSCORE, {
            totalScore: totalScore
        })]).then(function() {
            r()
        }, function() {
            r()
        })
    }, 2e3), updateLevelFail()
}

function addVehicle(a) {
    if ("undefined" == typeof a && (a = vehicleStartRowNum), aVehicles.length < 20) {
        var t;
        t = 1 * Math.random() < .25 || isBonusLevel && 1 * Math.random() < .25 ? isBonusLevel ? new Elements.Coin("bonusCoin") : 1 * Math.random() < .85 ? new Elements.Coin("coin") : new Elements.Coin("bonusCoin") : new Elements.Vehicle, t.rowNum = a;
        for (var e = Math.floor(4 * Math.random()), i = !1, s = 0; !i;) {
            if (s > 3) return;
            i = !0;
            for (var o = 0; o < aVehicleLanes[e].length; o++)
                if (aVehicleLanes[e][o].rowNum < t.rowNum + 25 && aVehicleLanes[e][o].rowNum > t.rowNum - 25) {
                    i = !1, e = Math.floor(4 * Math.random()), s++;
                    break
                }
        }
        t.sideMultiplier = aLanePos[e] + .06 * Math.random() - .03, t.lane = e, aVehicleLanes[e].push(t), t.speed = oLaneSpeeds["lane" + e], aVehicles.push(t)
    }
}

function raceOver(a) {
    sound.stop(), playSound(a ? "stageSuccess" : "raceFail"), playSound("rev1"), rightSteer = leftSteer = 0, levelOver = !0, clearControl(), userInput.removeHitArea("pause"), isAccelerating = !1, road.curveTween && road.curveTween.kill(), a ? (hud.chequeredFlagX = -canvas.width, hud.raceEndState = 0, TweenLite.to(hud, .3, {
        chequeredFlagX: 0,
        ease: "Back.easeOut"
    }), TweenLite.to(road, 2, {
        speed: .1 * aBikeData[curBike].minSpeed,
        ease: "Quad.easeOut",
        onComplete: function() {
            initLevelComplete()
        }
    })) : (hud.chequeredFlagX = -canvas.width, hud.raceEndState = 1, TweenLite.to(hud, .3, {
        chequeredFlagX: 0,
        ease: "Back.easeOut"
    }), TweenLite.to(this.road, 2, {
        speed: .1 * aBikeData[curBike].minSpeed,
        ease: "Quad.easeOut",
        onComplete: function() {
            initLevelFail()
        }
    }))
}

function updateGameEvent() {
    "game" == gameState && (delta = getDelta(), engineInc -= delta, engineInc <= 0 && !levelOver && (playSound("engine" + aBikeData[curBike].audio), engineInc = 1.5 * Math.random() + 6.5), levelOver || (curTime = Math.max(Math.round(curTime - 100 * delta), 0)), 0 != curTime || levelOver || raceOver(!1), vehicleRate += road.speed * delta, vehicleRate >= vehicleRelease && (addVehicle(), vehicleRelease = 130 * Math.random(), vehicleRate = 0), isBonusLevel ? (ctx.fillStyle = aSkyColours[aLevelData[bonusLevelNum].sky], ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.fillStyle = aGroundColours[Math.floor(bonusLevelNum / 6)], ctx.fillRect(0, road.horizon, canvas.width, canvas.height)) : (ctx.fillStyle = aSkyColours[aLevelData[levelNum].sky], ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.fillStyle = aGroundColours[Math.floor(levelNum / 6)], ctx.fillRect(0, road.horizon, canvas.width, canvas.height)), road.update(), road.render(), bike.update(), bike.render(), hud.update(), hud.render(), panel.render(), requestAnimFrame(updateGameEvent))
}

function updateCreditsScreenEvent() {
    "credits" == gameState && (delta = getDelta(), background.render(), panel.update(), panel.render(), ctx.fillStyle = "#ffffff", ctx.textAlign = "center", ctx.font = "15px Helvetica", ctx.fillText("v1.0.1", canvas.width / 2, canvas.height - 20), requestAnimFrame(updateCreditsScreenEvent))
}

function updateMapScreenEvent() {
    "map" == gameState && (delta = getDelta(), panel.update(), panel.render(), requestAnimFrame(updateMapScreenEvent))
}

function updateTutEvent() {
    "tut" == gameState && (delta = getDelta(), background.render(), panel.update(), panel.render(), requestAnimFrame(updateTutEvent))
}

function updateLevelComplete() {
    "levelComplete" == gameState && (delta = getDelta(), background.render(), panel.update(), panel.render(), requestAnimFrame(updateLevelComplete))
}

function updateLevelFail() {
    "levelFail" == gameState && (delta = getDelta(), background.render(), panel.update(), panel.render(), requestAnimFrame(updateLevelFail))
}

function updateSplashScreenEvent() {
    if ("splash" == gameState) {
        if (delta = getDelta(), splashTimer += delta, splashTimer > .1) return 1 != audioType || muted || (playMusic(), hasFocus || music.pause()), void initStartScreen();
        background.render(), panel.update(), panel.render(), requestAnimFrame(updateSplashScreenEvent)
    }
}

function updateStartScreenEvent() {
    "start" == gameState && (delta = getDelta(), background.render(), panel.update(), panel.render(), requestAnimFrame(updateStartScreenEvent))
}

function updateUpgradeScreenEvent() {
    "upgrade" == gameState && (delta = getDelta(), background.render(), panel.update(), panel.render(), requestAnimFrame(updateUpgradeScreenEvent))
}

function updateBikeShopScreenEvent() {
    "bikeShop" == gameState && (delta = getDelta(), background.render(), panel.update(), panel.render(), requestAnimFrame(updateBikeShopScreenEvent))
}

function updateLoaderEvent() {
    "load" == gameState && (delta = getDelta(), assetLib.render(), requestAnimFrame(updateLoaderEvent))
}

function updatePauseEvent() {
    "pause" == gameState && (delta = getDelta(), background.render(), panel.render(), requestAnimFrame(updatePauseEvent))
}

function getDelta() {
    var a = (new Date).getTime(),
        t = (a - previousTime) / 1e3;
    return previousTime = a, t > .5 && (t = 0), t
}

function checkSpriteCollision(a, t) {
    var e = a.x,
        i = a.y,
        s = t.x,
        o = t.y,
        r = (e - s) * (e - s) + (i - o) * (i - o),
        h = a.radius * t.radius;
    return r < h
}

function getScaleImageToMax(a, t) {
    var e;
    return e = a.isSpriteSheet ? t[0] / a.oData.spriteWidth < t[1] / a.oData.spriteHeight ? Math.min(t[0] / a.oData.spriteWidth, 1) : Math.min(t[1] / a.oData.spriteHeight, 1) : t[0] / a.img.width < t[1] / a.img.height ? Math.min(t[0] / a.img.width, 1) : Math.min(t[1] / a.img.height, 1)
}

function getCentreFromTopLeft(a, t, e) {
    var i = new Array;
    return i.push(a[0] + t.oData.spriteWidth / 2 * e), i.push(a[1] + t.oData.spriteHeight / 2 * e), i
}

function loadPreAssets() {
    if (aLangs.length > 1) {
        for (var a = new Array, t = 0; t < aLangs.length; t++) a.push({
            id: "lang" + aLangs[t],
            file: "images/lang" + aLangs[t] + ".png"
        });
        preAssetLib = new Utils.AssetLoader(curLang, a, ctx, canvas.width, canvas.height, (!1)), preAssetLib.onReady(initLangSelect)
    } else curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "loader",
        file: "images/loader.png"
    }, {
        id: "loadSpinner",
        file: "images/loadSpinner.png"
    }], ctx, canvas.width, canvas.height, (!1)), preAssetLib.onReady(initLoadAssets)
}

function initLangSelect() {
    for (var a, t, e, i = 10, s = 0, o = 0, r = 1, h = 0; h < aLangs.length && (a = preAssetLib.getData("lang" + aLangs[h]), (h + 1) * (a.img.width * r) + (h + 2) * i < canvas.width); h++) s++;
    o = Math.ceil(aLangs.length / s);
    for (var h = 0; h < aLangs.length; h++) {
        a = preAssetLib.getData("lang" + aLangs[h]), t = canvas.width / 2 - s / 2 * (a.img.width * r) - (s - 1) / 2 * i, t += h % s * (a.img.width * r + i), e = canvas.height / 2 - o / 2 * (a.img.height * r) - (o - 1) / 2 * i, e += Math.floor(h / s) % o * (a.img.height * r + i), ctx.drawImage(a.img, 0, 0, a.img.width, a.img.height, t, e, a.img.width * r, a.img.height * r);
        var n = {
            oImgData: a,
            aPos: [t + a.img.width * r / 2, e + a.img.height * r / 2],
            scale: r,
            id: "none",
            noMove: !0
        };
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[h]
        }, "image", n)
    }
}

function initLoadAssets() {
    window.famobi_analytics.trackScreen("SCREEN_SPLASH"), loadAssets()
}

function loadAssets() {
    var a;
    try {
        a = window.famobi.getMoreGamesButtonImage()
    } catch (t) {
        a = "images/BrandingPlaceholderButton.png"
    }
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "titleBg",
        file: "images/titleBg.jpg"
    }, {
        id: "splashLogo",
        file: "images/splashLogo.png"
    }, {
        id: "flare",
        file: "images/flare.png"
    }, {
        id: "uiButs",
        file: "images/uiButs.png",
        oAtlasData: {
            id0: {
                x: 142,
                y: 447,
                width: 48,
                height: 48
            },
            id1: {
                x: 411,
                y: 185,
                width: 48,
                height: 48
            },
            id10: {
                x: 411,
                y: 235,
                width: 48,
                height: 48
            },
            id11: {
                x: 0,
                y: 126,
                width: 164,
                height: 124
            },
            id12: {
                x: 92,
                y: 447,
                width: 48,
                height: 48
            },
            id13: {
                x: 137,
                y: 330,
                width: 135,
                height: 115
            },
            id14: {
                x: 274,
                y: 215,
                width: 135,
                height: 115
            },
            id15: {
                x: 167,
                y: 0,
                width: 135,
                height: 116
            },
            id16: {
                x: 274,
                y: 421,
                width: 87,
                height: 52
            },
            id17: {
                x: 303,
                y: 118,
                width: 87,
                height: 52
            },
            id18: {
                x: 0,
                y: 330,
                width: 135,
                height: 87
            },
            id19: {
                x: 166,
                y: 126,
                width: 135,
                height: 87
            },
            id2: {
                x: 192,
                y: 447,
                width: 48,
                height: 48
            },
            id20: {
                x: 274,
                y: 332,
                width: 135,
                height: 87
            },
            id21: {
                x: 304,
                y: 0,
                width: 87,
                height: 105
            },
            id3: {
                x: 0,
                y: 0,
                width: 165,
                height: 124
            },
            id4: {
                x: 0,
                y: 252,
                width: 142,
                height: 76
            },
            id5: {
                x: 363,
                y: 421,
                width: 87,
                height: 75
            },
            id6: {
                x: 393,
                y: 0,
                width: 87,
                height: 76
            },
            id7: {
                x: 392,
                y: 107,
                width: 87,
                height: 76
            },
            id8: {
                x: 144,
                y: 252,
                width: 90,
                height: 70
            },
            id9: {
                x: 0,
                y: 419,
                width: 90,
                height: 70
            }
        }
    }, {
        id: "uiElements",
        file: "images/uiElements.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 0,
                width: 640,
                height: 179
            },
            id1: {
                x: 1101,
                y: 1108,
                width: 45,
                height: 47
            },
            id10: {
                x: 922,
                y: 397,
                width: 128,
                height: 92
            },
            id11: {
                x: 0,
                y: 483,
                width: 459,
                height: 200
            },
            id12: {
                x: 1052,
                y: 303,
                width: 116,
                height: 155
            },
            id13: {
                x: 0,
                y: 685,
                width: 459,
                height: 300
            },
            id14: {
                x: 429,
                y: 987,
                width: 190,
                height: 135
            },
            id15: {
                x: 642,
                y: 0,
                width: 190,
                height: 135
            },
            id16: {
                x: 461,
                y: 785,
                width: 190,
                height: 135
            },
            id17: {
                x: 845,
                y: 785,
                width: 190,
                height: 135
            },
            id18: {
                x: 237,
                y: 987,
                width: 190,
                height: 135
            },
            id19: {
                x: 813,
                y: 922,
                width: 190,
                height: 135
            },
            id2: {
                x: 1053,
                y: 1108,
                width: 46,
                height: 46
            },
            id20: {
                x: 621,
                y: 922,
                width: 190,
                height: 135
            },
            id21: {
                x: 653,
                y: 785,
                width: 190,
                height: 135
            },
            id22: {
                x: 834,
                y: 0,
                width: 190,
                height: 135
            },
            id23: {
                x: 642,
                y: 137,
                width: 128,
                height: 22
            },
            id24: {
                x: 1026,
                y: 72,
                width: 101,
                height: 22
            },
            id25: {
                x: 1026,
                y: 48,
                width: 102,
                height: 22
            },
            id26: {
                x: 1005,
                y: 1020,
                width: 121,
                height: 22
            },
            id27: {
                x: 788,
                y: 1153,
                width: 126,
                height: 22
            },
            id28: {
                x: 192,
                y: 1155,
                width: 170,
                height: 22
            },
            id29: {
                x: 0,
                y: 1155,
                width: 190,
                height: 22
            },
            id3: {
                x: 922,
                y: 137,
                width: 161,
                height: 164
            },
            id30: {
                x: 364,
                y: 1124,
                width: 162,
                height: 22
            },
            id31: {
                x: 461,
                y: 946,
                width: 138,
                height: 22
            },
            id32: {
                x: 1005,
                y: 922,
                width: 124,
                height: 47
            },
            id33: {
                x: 1005,
                y: 971,
                width: 124,
                height: 47
            },
            id34: {
                x: 461,
                y: 483,
                width: 459,
                height: 300
            },
            id35: {
                x: 528,
                y: 1138,
                width: 129,
                height: 22
            },
            id36: {
                x: 1026,
                y: 24,
                width: 102,
                height: 22
            },
            id37: {
                x: 1026,
                y: 0,
                width: 104,
                height: 22
            },
            id38: {
                x: 916,
                y: 1153,
                width: 121,
                height: 22
            },
            id39: {
                x: 772,
                y: 137,
                width: 126,
                height: 22
            },
            id4: {
                x: 0,
                y: 181,
                width: 459,
                height: 300
            },
            id40: {
                x: 192,
                y: 1131,
                width: 170,
                height: 22
            },
            id41: {
                x: 0,
                y: 1131,
                width: 190,
                height: 22
            },
            id42: {
                x: 364,
                y: 1148,
                width: 162,
                height: 22
            },
            id43: {
                x: 461,
                y: 922,
                width: 140,
                height: 22
            },
            id44: {
                x: 0,
                y: 987,
                width: 235,
                height: 70
            },
            id45: {
                x: 0,
                y: 1059,
                width: 235,
                height: 70
            },
            id46: {
                x: 461,
                y: 181,
                width: 459,
                height: 300
            },
            id47: {
                x: 621,
                y: 1059,
                width: 149,
                height: 77
            },
            id48: {
                x: 1053,
                y: 1044,
                width: 73,
                height: 62
            },
            id49: {
                x: 1128,
                y: 1020,
                width: 37,
                height: 38
            },
            id5: {
                x: 922,
                y: 679,
                width: 128,
                height: 92
            },
            id50: {
                x: 1130,
                y: 24,
                width: 37,
                height: 38
            },
            id51: {
                x: 1128,
                y: 1060,
                width: 37,
                height: 38
            },
            id52: {
                x: 1026,
                y: 96,
                width: 37,
                height: 37
            },
            id53: {
                x: 772,
                y: 1059,
                width: 149,
                height: 77
            },
            id54: {
                x: 1052,
                y: 600,
                width: 81,
                height: 140
            },
            id55: {
                x: 1085,
                y: 198,
                width: 65,
                height: 100
            },
            id56: {
                x: 1127,
                y: 742,
                width: 47,
                height: 70
            },
            id57: {
                x: 1052,
                y: 460,
                width: 81,
                height: 138
            },
            id58: {
                x: 1085,
                y: 96,
                width: 65,
                height: 100
            },
            id59: {
                x: 1127,
                y: 814,
                width: 47,
                height: 70
            },
            id6: {
                x: 923,
                y: 1059,
                width: 128,
                height: 92
            },
            id60: {
                x: 659,
                y: 1138,
                width: 127,
                height: 19
            },
            id61: {
                x: 1052,
                y: 742,
                width: 31,
                height: 29
            },
            id62: {
                x: 1037,
                y: 773,
                width: 88,
                height: 130
            },
            id7: {
                x: 922,
                y: 303,
                width: 128,
                height: 92
            },
            id8: {
                x: 922,
                y: 491,
                width: 128,
                height: 92
            },
            id9: {
                x: 922,
                y: 585,
                width: 128,
                height: 92
            }
        }
    }, {
        id: "hudElements",
        file: "images/hudElements.png",
        oAtlasData: {
            id0: {
                x: 547,
                y: 0,
                width: 153,
                height: 69
            },
            id1: {
                x: 0,
                y: 321,
                width: 232,
                height: 27
            },
            id10: {
                x: 0,
                y: 350,
                width: 230,
                height: 316
            },
            id11: {
                x: 232,
                y: 350,
                width: 229,
                height: 316
            },
            id2: {
                x: 0,
                y: 678,
                width: 33,
                height: 20
            },
            id3: {
                x: 0,
                y: 668,
                width: 194,
                height: 8
            },
            id4: {
                x: 463,
                y: 566,
                width: 178,
                height: 69
            },
            id5: {
                x: 0,
                y: 0,
                width: 545,
                height: 319
            },
            id6: {
                x: 463,
                y: 321,
                width: 217,
                height: 243
            },
            id7: {
                x: 502,
                y: 637,
                width: 37,
                height: 38
            },
            id8: {
                x: 463,
                y: 637,
                width: 37,
                height: 38
            },
            id9: {
                x: 541,
                y: 637,
                width: 37,
                height: 38
            }
        }
    }, {
        id: "road0",
        file: "images/road0.jpg"
    }, {
        id: "road1",
        file: "images/road1.jpg"
    }, {
        id: "road2",
        file: "images/road2.jpg"
    }, {
        id: "road3",
        file: "images/road3.jpg"
    }, {
        id: "road4",
        file: "images/road4.jpg"
    }, {
        id: "bike0",
        file: "images/bike0.png"
    }, {
        id: "bike1",
        file: "images/bike1.png"
    }, {
        id: "bike2",
        file: "images/bike2.png"
    }, {
        id: "bike3",
        file: "images/bike3.png"
    }, {
        id: "bike4",
        file: "images/bike4.png"
    }, {
        id: "bike5",
        file: "images/bike5.png"
    }, {
        id: "bike6",
        file: "images/bike6.png"
    }, {
        id: "bike7",
        file: "images/bike7.png"
    }, {
        id: "bike8",
        file: "images/bike8.png"
    }, {
        id: "vehicle0",
        file: "images/truck0_472x168.png"
    }, {
        id: "sky0",
        file: "images/sky0.png"
    }, {
        id: "sky1",
        file: "images/sky1.png"
    }, {
        id: "sky2",
        file: "images/sky2.png"
    }, {
        id: "sky3",
        file: "images/sky3.png"
    }, {
        id: "sky4",
        file: "images/sky4.png"
    }, {
        id: "numbers",
        file: "images/numbers_41x47.png"
    }, {
        id: "calendarNumbers",
        file: "images/calendarNumbers_13x19.png"
    }, {
        id: "crash",
        file: "images/crash.png"
    }, {
        id: "coin",
        file: "images/coin_89x126.png",
        oAnims: {
            spin: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
    }, {
        id: "bonusCoin",
        file: "images/coin2_88x125.png",
        oAnims: {
            spin: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
    }, {
        id: "whoosh",
        file: "images/whoosh.png"
    }, {
        id: "scenery",
        file: "images/scenery.png",
        oAtlasData: {
            id0: {
                x: 405,
                y: 386,
                width: 24,
                height: 31
            },
            id1: {
                x: 0,
                y: 287,
                width: 403,
                height: 149
            },
            id10: {
                x: 904,
                y: 586,
                width: 70,
                height: 241
            },
            id11: {
                x: 431,
                y: 386,
                width: 24,
                height: 31
            },
            id12: {
                x: 769,
                y: 293,
                width: 149,
                height: 291
            },
            id13: {
                x: 746,
                y: 0,
                width: 149,
                height: 291
            },
            id14: {
                x: 769,
                y: 586,
                width: 133,
                height: 295
            },
            id15: {
                x: 920,
                y: 257,
                width: 55,
                height: 277
            },
            id16: {
                x: 897,
                y: 0,
                width: 71,
                height: 255
            },
            id17: {
                x: 0,
                y: 0,
                width: 682,
                height: 134
            },
            id2: {
                x: 0,
                y: 136,
                width: 404,
                height: 149
            },
            id3: {
                x: 457,
                y: 386,
                width: 24,
                height: 31
            },
            id4: {
                x: 386,
                y: 721,
                width: 380,
                height: 281
            },
            id5: {
                x: 0,
                y: 438,
                width: 385,
                height: 281
            },
            id6: {
                x: 0,
                y: 721,
                width: 384,
                height: 280
            },
            id7: {
                x: 387,
                y: 438,
                width: 380,
                height: 281
            },
            id8: {
                x: 406,
                y: 136,
                width: 173,
                height: 248
            },
            id9: {
                x: 581,
                y: 136,
                width: 163,
                height: 251
            }
        }
    }, {
        id: "map",
        file: "images/map.jpg"
    }, {
        id: "vehicle1",
        file: "images/car0_383x165.png"
    }, {
        id: "vehicle2",
        file: "images/car1_383x165.png"
    }, {
        id: "vehicle3",
        file: "images/car2_392x130.png"
    }, {
        id: "vehicle4",
        file: "images/car3_392x130.png"
    }, {
        id: "vehicle5",
        file: "images/truck1_551x219.png"
    }, {
        id: "sun",
        file: "images/sun.png"
    }, {
        id: "garageBg",
        file: "images/garageBg.jpg"
    }, {
        id: "moreGamesBut",
        file: a
    }], ctx, canvas.width, canvas.height), oImageIds.infoBut = "id0", oImageIds.muteBut0 = "id1", oImageIds.muteBut1 = "id2", oImageIds.playBut = "id3", oImageIds.moreGamesBut = "id4", oImageIds.backBut = "id5", oImageIds.shopBut = "id6", oImageIds.bikeBut = "id7", oImageIds.leftBut = "id8", oImageIds.rightBut = "id9", oImageIds.pauseBut = "id10", oImageIds.retryBut = "id11", oImageIds.resetBut = "id12", oImageIds.controlButOn0 = "id13", oImageIds.controlButOn1 = "id14", oImageIds.controlButOn2 = "id15", oImageIds.smallPlayBut = "id16", oImageIds.quitBut = "id17", oImageIds.controlButOff0 = "id18", oImageIds.controlButOff1 = "id19", oImageIds.controlButOff2 = "id20", oImageIds.newBikeBut = "id21", oImageIds.titleLogo = "id0", oImageIds.scoreIcon = "id1", oImageIds.coinsIcon = "id2", oImageIds.winIcon = "id3", oImageIds.winPanel = "id4", oImageIds.mapArea0 = "id5", oImageIds.mapArea1 = "id6", oImageIds.mapArea2 = "id7", oImageIds.mapArea3 = "id8", oImageIds.mapArea4 = "id9", oImageIds.distIcon = "id10", oImageIds.previewPanel = "id11", oImageIds.loseIcon = "id12", oImageIds.losePanel = "id13", oImageIds.bikeIcon0 = "id14", oImageIds.bikeIcon1 = "id15", oImageIds.bikeIcon2 = "id16", oImageIds.bikeIcon3 = "id17", oImageIds.bikeIcon4 = "id18", oImageIds.bikeIcon5 = "id19", oImageIds.bikeIcon6 = "id20", oImageIds.bikeIcon7 = "id21", oImageIds.bikeIcon8 = "id22", oImageIds.bikeNameBlack0 = "id23", oImageIds.bikeNameBlack1 = "id24", oImageIds.bikeNameBlack2 = "id25", oImageIds.bikeNameBlack3 = "id26", oImageIds.bikeNameBlack4 = "id27", oImageIds.bikeNameBlack5 = "id28", oImageIds.bikeNameBlack6 = "id29", oImageIds.bikeNameBlack7 = "id30", oImageIds.bikeNameBlack8 = "id31", oImageIds.smallBuyButOn = "id32", oImageIds.smallBuyButOff = "id33", oImageIds.upgradePanel = "id34", oImageIds.bikeNameWhite0 = "id35", oImageIds.bikeNameWhite1 = "id36", oImageIds.bikeNameWhite2 = "id37", oImageIds.bikeNameWhite3 = "id38", oImageIds.bikeNameWhite4 = "id39", oImageIds.bikeNameWhite5 = "id40", oImageIds.bikeNameWhite6 = "id41", oImageIds.bikeNameWhite7 = "id42", oImageIds.bikeNameWhite8 = "id43", oImageIds.bigBuyButOn = "id44", oImageIds.bigBuyButOff = "id45", oImageIds.bikeShopPanel = "id46", oImageIds.calendarBut = "id47", oImageIds.tick = "id48", oImageIds.smallTimeIcon = "id49", oImageIds.smallOvertakesIcon = "id50", oImageIds.smallSpeedSecsIcon = "id51", oImageIds.smallCoinsIcon = "id52", oImageIds.calendarLockedBut = "id53", oImageIds.mapBut1 = "id54", oImageIds.mapBut2 = "id55", oImageIds.mapBut0 = "id56", oImageIds.mapBut1Flip = "id57", oImageIds.mapBut2Flip = "id58", oImageIds.mapBut0Flip = "id59", oImageIds.bikeStatBar = "id60", oImageIds.bikeUpgradeBar = "id61", oImageIds.fingerPoint = "id62", oImageIds.speedoPanel = "id0", oImageIds.distPanel = "id1", oImageIds.bikeDistIcon = "id2", oImageIds.distBar = "id3", oImageIds.coinsPanel = "id4", oImageIds.raceEndMessage0 = "id5", oImageIds.raceEndMessage1 = "id6", oImageIds.smallTimeIconHud = "id7", oImageIds.smallOvertakesIconHud = "id8", oImageIds.smallSpeedSecsIconHud = "id9", oImageIds.tutDesktop0 = "id10", oImageIds.tutDesktop1 = "id11", oImageIds.bollard2 = "id0", oImageIds.scenery00 = "id1", oImageIds.scenery01 = "id2", oImageIds.bollard0 = "id3", oImageIds.bollard1 = "id3", oImageIds.scenery10r = "id4", oImageIds.scenery11r = "id5", oImageIds.scenery10l = "id6", oImageIds.scenery11l = "id7", oImageIds.scenery20 = "id8", oImageIds.scenery21 = "id9", oImageIds.scenery30 = "id10", oImageIds.bollard3 = "id11", oImageIds.bollard4 = "id0", oImageIds.scenery40 = "id12", oImageIds.scenery41 = "id13", oImageIds.scenery31 = "id14", oImageIds.scenery32 = "id15", oImageIds.scenery33 = "id16", oImageIds.bridge = "id17", assetLib.onReady(initTiltCheck), gameState = "load", previousTime = (new Date).getTime(), updateLoaderEvent()
}

function resizeCanvas() {
    var a = window.innerWidth,
        t = window.innerHeight;
    if (canvas.height = t, canvas.width = a, canvas.style.width = a + "px", canvas.style.height = t + "px", a > t ? canvas.height < minSquareSize ? (canvas.height = minSquareSize, canvas.width = minSquareSize * (a / t), canvasScale = minSquareSize / t) : canvas.height > maxSquareSize ? (canvas.height = maxSquareSize, canvas.width = maxSquareSize * (a / t), canvasScale = maxSquareSize / t) : canvasScale = 1 : canvas.width < minSquareSize ? (canvas.width = minSquareSize, canvas.height = minSquareSize * (t / a), canvasScale = minSquareSize / a) : canvas.width > maxSquareSize ? (canvas.width = maxSquareSize, canvas.height = maxSquareSize * (t / a), canvasScale = maxSquareSize / a) : canvasScale = 1, "game" == gameState) userInput.removeHitArea("steerRight"), userInput.removeHitArea("steerLeft"), userInput.removeHitArea("steerTouch"), userInput.removeKey("steerRight"), userInput.removeKey("steerLeft"), setControl();
    else if ("map" == gameState) {
        userInput.removeHitArea("mapTouch"), userInput.removeHitArea("calendarFromMap"), userInput.addHitArea("mapTouch", butEventHandler, {
            isDraggable: !0,
            multiTouch: !0
        }, "rect", {
            aRect: [0, 50, canvas.width, canvas.height - 80]
        }, !0), saveDataHandler.getCalendarStatus() && levelNum > 0 && userInput.addHitArea("calendarFromMap", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 80 - 50, canvas.height - 40 - 41, canvas.width / 2 + 80 - 50, canvas.height + 40 - 41]
        }, !0), panel.mapScale = 1, canvas.width > 1600 && (panel.mapScale = canvas.width / 1600), canvas.height > 1111 && (panel.mapScale = Math.max(canvas.height / 1111, panel.mapScale));
        var e = Math.min(saveDataHandler.getLastUnlockedLevel(), aLevelData.length - 1);
        panel.mapPosX = panel.mapPosRealX = Math.max(Math.min(aLevelData[e].x - canvas.width / 2, 1600 - canvas.width), 0), panel.mapPosY = panel.mapPosRealY = Math.max(Math.min(aLevelData[e].y - canvas.height / 2, 1111 - canvas.height), 0)
    } else if ("upgrade" == gameState) {
        userInput.removeHitArea("upgradeLeft"), userInput.removeHitArea("upgradeRight"), userInput.removeHitArea("buyUpgrade"), userInput.removeHitArea("playFromUpgrade"), userInput.addHitArea("playFromUpgrade", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 60, canvas.height / 2 + 145 - 43, canvas.width / 2 + 60, canvas.height / 2 + 145 + 43]
        }, !0), userInput.addHitArea("upgradeLeft", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 - 175 + 45, canvas.height / 2 + 135 + 30]
        }, !0), userInput.addHitArea("upgradeRight", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 + 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 + 175 + 45, canvas.height / 2 + 135 + 30]
        }, !0);
        for (var i = new Array({
                x: canvas.width / 2 - 90,
                y: canvas.height / 2 - 5
            }, {
                x: canvas.width / 2 + 120,
                y: canvas.height / 2 - 5
            }, {
                x: canvas.width / 2 - 90,
                y: canvas.height / 2 + 65
            }, {
                x: canvas.width / 2 + 120,
                y: canvas.height / 2 + 65
            }), s = 0; s < i.length; s++) userInput.addHitArea("buyUpgrade", butEventHandler, {
            id: s
        }, "rect", {
            aRect: [i[s].x - 60, i[s].y - 25, i[s].x + 60, i[s].y + 25]
        }, !1)
    } else if ("bikeShop" == gameState) userInput.removeHitArea("bikeShopLeft"), userInput.removeHitArea("bikeShopRight"), userInput.removeHitArea("buyBike"), userInput.removeHitArea("playFromBikeShop"), userInput.addHitArea("playFromBikeShop", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 60, canvas.height / 2 + 145 - 43, canvas.width / 2 + 60, canvas.height / 2 + 145 + 43]
    }, !0), userInput.addHitArea("bikeShopLeft", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 - 175 + 45, canvas.height / 2 + 135 + 30]
    }, !0), userInput.addHitArea("bikeShopRight", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 + 175 - 45, canvas.height / 2 + 135 - 30, canvas.width / 2 + 175 + 45, canvas.height / 2 + 135 + 30]
    }, !0), userInput.addHitArea("buyBike", butEventHandler, null, "rect", {
        aRect: [canvas.width / 2 - 115, canvas.height / 2 + 72 - 30, canvas.width / 2 + 115, canvas.height / 2 + 72 + 30]
    }, !1);
    else if ("tut" == gameState) {
        if (userInput.removeHitArea("controlBut0"), userInput.removeHitArea("controlBut1"), userInput.removeHitArea("controlBut2"), isMobile) {
            var o = -75;
            hasTilt && (o = 0), userInput.addHitArea("controlBut0", butEventHandler, null, "rect", {
                aRect: [canvas.width / 2 - 150 - 65 + o, canvas.height / 2 + 50 - 85, canvas.width / 2 - 150 + 65 + o, canvas.height / 2 + 50]
            }, !0), userInput.addHitArea("controlBut1", butEventHandler, null, "rect", {
                aRect: [canvas.width / 2 - 65 + o, canvas.height / 2 + 50 - 85, canvas.width / 2 + 65 + o, canvas.height / 2 + 50]
            }, !0), userInput.addHitArea("controlBut2", butEventHandler, null, "rect", {
                aRect: [canvas.width / 2 + 150 - 65 + o, canvas.height / 2 + 50 - 85, canvas.width / 2 + 150 + 65 + o, canvas.height / 2 + 50]
            }, !1)
        }
    } else if ("pause" == gameState && (userInput.removeHitArea("controlBut0"), userInput.removeHitArea("controlBut1"), userInput.removeHitArea("controlBut2"), isMobile)) {
        var o = -75;
        hasTilt && (o = 0), userInput.addHitArea("controlBut0", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 150 - 65 + o, canvas.height / 2 + 50 - 85, canvas.width / 2 - 150 + 65 + o, canvas.height / 2 + 50]
        }, !0), userInput.addHitArea("controlBut1", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 - 65 + o, canvas.height / 2 + 50 - 85, canvas.width / 2 + 65 + o, canvas.height / 2 + 50]
        }, !0), userInput.addHitArea("controlBut2", butEventHandler, null, "rect", {
            aRect: [canvas.width / 2 + 150 - 65 + o, canvas.height / 2 + 50 - 85, canvas.width / 2 + 150 + 65 + o, canvas.height / 2 + 50]
        }, !1)
    }
    window.scrollTo(0, 0)
}

function playSound(a) {
    1 == audioType && sound.play(a)
}

function toggleMute() {
    muted = !muted, 1 == audioType ? muted ? (Howler.mute(!0), music.pause()) : (Howler.mute(!1), playMusic(), "game" == gameState ? music.volume(.5) : music.volume(.25)) : 2 == audioType && (muted ? music.pause() : playMusic())
}
var Utils;
! function(a) {
    var t = function() {
        function a(a, t, e, i, s, o) {
            "undefined" == typeof o && (o = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.textData = {}, this.spinnerRot = 0, this.totalAssets = t.length, this.showBar = o;
            for (var r = 0; r < t.length; r++) t[r].file.indexOf(".json") != -1 ? this.loadJSON(t[r]) : this.loadImage(t[r]);
            o && (this.oLoaderImgData = preAssetLib.getData("loader"), this.oLoadSpinnerImgData = preAssetLib.getData("loadSpinner"))
        }
        return a.prototype.render = function() {
            ctx.fillStyle = "rgba(0, 0, 0, 1)", ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.fillStyle = "#FFFFFF", ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 + 20, 300 / this.totalAssets * this.assetsLoaded, 30), ctx.drawImage(this.oLoaderImgData.img, canvas.width / 2 - this.oLoaderImgData.img.width / 2, canvas.height / 2 - this.oLoaderImgData.img.height / 2), this.spinnerRot += 3 * delta, ctx.save(), ctx.translate(canvas.width / 2 - 30, canvas.height / 2 - 16), ctx.rotate(this.spinnerRot), ctx.drawImage(this.oLoadSpinnerImgData.img, -this.oLoadSpinnerImgData.img.width / 2, -this.oLoadSpinnerImgData.img.height / 2), ctx.restore(), this.displayNumbers()
        }, a.prototype.displayNumbers = function() {
            ctx.textAlign = "left", ctx.font = "bold 40px arial", ctx.fillStyle = "#ffffff", ctx.fillText(Math.round(this.assetsLoaded / this.totalAssets * 100) + "%", canvas.width / 2 + 0, canvas.height / 2 - 1)
        }, a.prototype.loadExtraAssets = function(a, t) {
            this.showBar = !1, this.totalAssets = t.length, this.assetsLoaded = 0, this.loadedCallback = a;
            for (var e = 0; e < t.length; e++) t[e].file.indexOf(".json") != -1 ? this.loadJSON(t[e]) : this.loadImage(t[e])
        }, a.prototype.loadJSON = function(a) {
            var t = this,
                e = new XMLHttpRequest;
            e.open("GET", a.file, !0), e.onreadystatechange = function() {
                4 == e.readyState && 200 == e.status && (t.textData[a.id] = JSON.parse(e.responseText), ++t.assetsLoaded, t.checkLoadComplete())
            }, e.send(null)
        }, a.prototype.loadImage = function(a) {
            var t = this,
                e = new Image;
            e.onload = function() {
                t.oAssetData[a.id] = {}, t.oAssetData[a.id].img = e, t.oAssetData[a.id].oData = {};
                var i = t.getSpriteSize(a.file);
                0 != i[0] ? (t.oAssetData[a.id].oData.spriteWidth = i[0], t.oAssetData[a.id].oData.spriteHeight = i[1]) : (t.oAssetData[a.id].oData.spriteWidth = t.oAssetData[a.id].img.width, t.oAssetData[a.id].oData.spriteHeight = t.oAssetData[a.id].img.height), a.oAnims && (t.oAssetData[a.id].oData.oAnims = a.oAnims), a.oAtlasData ? t.oAssetData[a.id].oData.oAtlasData = a.oAtlasData : t.oAssetData[a.id].oData.oAtlasData = {
                    none: {
                        x: 0,
                        y: 0,
                        width: t.oAssetData[a.id].oData.spriteWidth,
                        height: t.oAssetData[a.id].oData.spriteHeight
                    }
                }, ++t.assetsLoaded, t.checkLoadComplete()
            }, e.src = a.file
        }, a.prototype.getSpriteSize = function(a) {
            for (var t = new Array, e = "", i = "", s = 0, o = a.lastIndexOf("."), r = !0; r;) o--, 0 == s && this.isNumber(a.charAt(o)) ? e = a.charAt(o) + e : 0 == s && e.length > 0 && "x" == a.charAt(o) ? (o--, s = 1, i = a.charAt(o) + i) : 1 == s && this.isNumber(a.charAt(o)) ? i = a.charAt(o) + i : 1 == s && i.length > 0 && "_" == a.charAt(o) ? (r = !1, t = [parseInt(i), parseInt(e)]) : (r = !1, t = [0, 0]);
            return t
        }, a.prototype.isNumber = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, a.prototype.checkLoadComplete = function() {
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, a.prototype.onReady = function(a) {
            this.loadedCallback = a
        }, a.prototype.getImg = function(a) {
            return this.oAssetData[a].img
        }, a.prototype.getData = function(a) {
            return this.oAssetData[a]
        }, a
    }();
    a.AssetLoader = t
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var t = function() {
        function a(a, t, e, i) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.alpha = 1, this.oImgData = a, this.oAnims = this.oImgData.oData.oAnims, this.fps = t, this.radius = e, this.animId = i, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2)
        }
        return a.prototype.updateAnimation = function(a) {
            this.frameInc += this.fps * a
        }, a.prototype.changeImgData = function(a, t) {
            this.oImgData = a, this.oAnims = this.oImgData.oData.oAnims, this.animId = t, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2), this.resetAnim()
        }, a.prototype.resetAnim = function() {
            this.frameInc = 0
        }, a.prototype.setFrame = function(a) {
            this.fixedFrame = a
        }, a.prototype.setAnimType = function(a, t, e) {
            switch ("undefined" == typeof e && (e = !0), this.animId = t, this.animType = a, e && this.resetAnim(), a) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, a.prototype.render = function(a) {
            if (a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY), a.globalAlpha = this.alpha, null != this.animId) {
                var t = this.oAnims[this.animId].length,
                    e = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][e % t];
                var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && e > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][t - 1], this.animId = null, null != this.animEndedFunc && this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), a.restore()
        }, a.prototype.renderSimple = function(a) {
            if (null != this.animId) {
                var t = this.oAnims[this.animId].length,
                    e = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][e % t];
                var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && e > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][t - 1], this.animId = null, null != this.animEndedFunc && this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY)
        }, a
    }();
    a.AnimSprite = t
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var t = function() {
        function a(a, t, e) {
            "undefined" == typeof e && (e = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = a, this.radius = t, this.setFrame(e)
        }
        return a.prototype.setFrame = function(a) {
            this.frameNum = a
        }, a.prototype.render = function(a) {
            a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY);
            var t = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                e = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, t, e, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), a.restore()
        }, a
    }();
    a.BasicSprite = t
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var t = function() {
        function a(a, t) {
            var e = this;
            this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isBugBrowser = t, this.keyDownEvtFunc = function(a) {
                e.keyDown(a)
            }, this.keyUpEvtFunc = function(a) {
                e.keyUp(a)
            }, a.addEventListener("touchstart", function(a) {
                for (var t = 0; t < a.changedTouches.length; t++) e.hitDown(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier)
            }, !1), a.addEventListener("touchend", function(a) {
                for (var t = 0; t < a.changedTouches.length; t++) e.hitUp(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier)
            }, !1), a.addEventListener("touchcancel", function(a) {
                for (var t = 0; t < a.changedTouches.length; t++) e.hitCancel(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier)
            }, !1), a.addEventListener("touchmove", function(a) {
                for (var t = 0; t < a.changedTouches.length; t++) e.move(a, a.changedTouches[t].pageX, a.changedTouches[t].pageY, a.changedTouches[t].identifier, !0)
            }, !1), a.addEventListener("mousedown", function(a) {
                e.isDown = !0, e.hitDown(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mouseup", function(a) {
                e.isDown = !1, e.hitUp(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mousemove", function(a) {
                e.move(a, a.pageX, a.pageY, 1, e.isDown)
            }, !1), a.addEventListener("mouseout", function(a) {
                e.isDown = !1, e.hitUp(a, Math.abs(a.pageX), Math.abs(a.pageY), 1)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }
        return a.prototype.hitDown = function(a, t, e, i) {
            if (a.preventDefault(), a.stopPropagation(), hasFocus || visibleResume(), !this.pauseIsOn) {
                var s = (new Date).getTime();
                t *= canvasScale, e *= canvasScale;
                for (var o = 0; o < this.aHitAreas.length; o++)
                    if (this.aHitAreas[o].rect) {
                        var r = canvas.width * this.aHitAreas[o].align[0],
                            h = canvas.height * this.aHitAreas[o].align[1];
                        if (t > r + this.aHitAreas[o].area[0] && e > h + this.aHitAreas[o].area[1] && t < r + this.aHitAreas[o].area[2] && e < h + this.aHitAreas[o].area[3]) {
                            if (this.aHitAreas[o].aTouchIdentifiers.push(i), this.aHitAreas[o].oData.hasLeft = !1, !this.aHitAreas[o].oData.isDown) {
                                if (this.aHitAreas[o].oData.isDown = !0, this.aHitAreas[o].oData.isBeingDragged = !1, this.aHitAreas[o].oData.x = t, this.aHitAreas[o].oData.y = e, s - this.prevHitTime < 500 && ("game" != gameState || "pause" == this.aHitAreas[o].id) && isBugBrowser) return;
                                this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData)
                            }
                            break
                        }
                    }
                this.prevHitTime = s
            }
        }, a.prototype.hitUp = function(a, t, e, i) {
            if (ios9FirstTouch || (playSound("silence"), ios9FirstTouch = !0), !this.pauseIsOn) {
                a.preventDefault(), a.stopPropagation(), t *= canvasScale, e *= canvasScale;
                for (var s = 0; s < this.aHitAreas.length; s++)
                    if (this.aHitAreas[s].rect) {
                        var o = canvas.width * this.aHitAreas[s].align[0],
                            r = canvas.height * this.aHitAreas[s].align[1];
                        if (t > o + this.aHitAreas[s].area[0] && e > r + this.aHitAreas[s].area[1] && t < o + this.aHitAreas[s].area[2] && e < r + this.aHitAreas[s].area[3]) {
                            for (var h = 0; h < this.aHitAreas[s].aTouchIdentifiers.length; h++) this.aHitAreas[s].aTouchIdentifiers[h] == i && (this.aHitAreas[s].aTouchIdentifiers.splice(h, 1), h -= 1);
                            0 == this.aHitAreas[s].aTouchIdentifiers.length && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].oData.multiTouch && (this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = e, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)));
                            break
                        }
                    }
            }
        }, a.prototype.hitCancel = function(a, t, e, i) {
            a.preventDefault(), a.stopPropagation(), t *= canvasScale, e *= canvasScale;
            for (var s = 0; s < this.aHitAreas.length; s++) this.aHitAreas[s].oData.isDown && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].aTouchIdentifiers = new Array, this.aHitAreas[s].oData.multiTouch && (this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = e, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)))
        }, a.prototype.move = function(a, t, e, i, s) {
            if (!this.pauseIsOn && s) {
                t *= canvasScale, e *= canvasScale;
                for (var o = 0; o < this.aHitAreas.length; o++)
                    if (this.aHitAreas[o].rect) {
                        var r = canvas.width * this.aHitAreas[o].align[0],
                            h = canvas.height * this.aHitAreas[o].align[1];
                        if (t > r + this.aHitAreas[o].area[0] && e > h + this.aHitAreas[o].area[1] && t < r + this.aHitAreas[o].area[2] && e < h + this.aHitAreas[o].area[3]) this.aHitAreas[o].oData.hasLeft = !1, this.aHitAreas[o].oData.isDraggable && !this.aHitAreas[o].oData.isDown && (this.aHitAreas[o].oData.isDown = !0, this.aHitAreas[o].oData.x = t, this.aHitAreas[o].oData.y = e, this.aHitAreas[o].aTouchIdentifiers.push(i), this.aHitAreas[o].oData.multiTouch && this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData)), this.aHitAreas[o].oData.isDraggable && (this.aHitAreas[o].oData.isBeingDragged = !0, this.aHitAreas[o].oData.x = t, this.aHitAreas[o].oData.y = e, this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData), this.aHitAreas[o] && (this.aHitAreas[o].oData.isBeingDragged = !1));
                        else if (this.aHitAreas[o].oData.isDown && !this.aHitAreas[o].oData.hasLeft) {
                            for (var n = 0; n < this.aHitAreas[o].aTouchIdentifiers.length; n++) this.aHitAreas[o].aTouchIdentifiers[n] == i && (this.aHitAreas[o].aTouchIdentifiers.splice(n, 1), n -= 1);
                            0 == this.aHitAreas[o].aTouchIdentifiers.length && (this.aHitAreas[o].oData.hasLeft = !0, this.aHitAreas[o].oData.isBeingDragged || (this.aHitAreas[o].oData.isDown = !1), this.aHitAreas[o].oData.multiTouch && this.aHitAreas[o].callback(this.aHitAreas[o].id, this.aHitAreas[o].oData))
                        }
                    }
            }
        }, a.prototype.keyDown = function(a) {
            for (var t = 0; t < this.aKeys.length; t++) a.keyCode == this.aKeys[t].keyCode && (a.preventDefault(), this.aKeys[t].oData.isDown = !0, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
        }, a.prototype.keyUp = function(a) {
            for (var t = 0; t < this.aKeys.length; t++) a.keyCode == this.aKeys[t].keyCode && (a.preventDefault(), this.aKeys[t].oData.isDown = !1, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
        }, a.prototype.checkKeyFocus = function() {
            window.focus(), this.aKeys.length > 0 && (window.removeEventListener("keydown", this.keyDownEvtFunc, !1), window.removeEventListener("keyup", this.keyUpEvtFunc, !1), window.addEventListener("keydown", this.keyDownEvtFunc, !1), window.addEventListener("keyup", this.keyUpEvtFunc, !1))
        }, a.prototype.addKey = function(a, t, e, i) {
            null == e && (e = new Object), this.aKeys.push({
                id: a,
                callback: t,
                oData: e,
                keyCode: i
            }), this.checkKeyFocus()
        }, a.prototype.removeKey = function(a) {
            for (var t = 0; t < this.aKeys.length; t++) this.aKeys[t].id == a && (this.aKeys.splice(t, 1), t -= 1)
        }, a.prototype.addHitArea = function(a, t, e, i, s, o) {
            "undefined" == typeof o && (o = !1), null == e && (e = new Object), o && this.removeHitArea(a), s.scale || (s.scale = 1), s.align || (s.align = [0, 0]);
            var r = new Array;
            switch (i) {
                case "image":
                    var h;
                    h = new Array(s.aPos[0] - s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, s.aPos[1] - s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale, s.aPos[0] + s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, s.aPos[1] + s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale), this.aHitAreas.push({
                        id: a,
                        aTouchIdentifiers: r,
                        callback: t,
                        oData: e,
                        rect: !0,
                        area: h,
                        align: s.align
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: a,
                        aTouchIdentifiers: r,
                        callback: t,
                        oData: e,
                        rect: !0,
                        area: s.aRect,
                        align: s.align
                    })
            }
        }, a.prototype.removeHitArea = function(a) {
            for (var t = 0; t < this.aHitAreas.length; t++) this.aHitAreas[t].id == a && (this.aHitAreas.splice(t, 1), t -= 1)
        }, a.prototype.resetAll = function() {
            for (var a = 0; a < this.aHitAreas.length; a++) this.aHitAreas[a].oData.isDown = !1, this.aHitAreas[a].oData.isBeingDragged = !1, this.aHitAreas[a].aTouchIdentifiers = new Array;
            this.isDown = !1
        }, a
    }();
    a.UserInput = t
}(Utils || (Utils = {}));
var Utils;
! function(a) {
    var t = function() {
        function a(a) {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function(a) {
                this.frameAverage += this.delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), a.textAlign = "left", ctx.font = "10px Helvetica", a.fillStyle = "#333333", a.beginPath(), a.rect(0, this.canvasHeight - 15, 40, 15), a.closePath(), a.fill(), a.fillStyle = "#ffffff", a.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
            }, this.canvasHeight = a
        }
        return a.prototype.update = function(a) {
            this.delta = a
        }, a
    }();
    a.FpsMeter = t
}(Utils || (Utils = {}));
var Elements;
! function(a) {
    var t = function() {
        function a(a) {
            this.x = 0, this.y = 0, this.targY = 0, this.incY = 0, this.renderState = null, this.typeId = a, this.oImgData = assetLib.getData(this.typeId)
        }
        return a.prototype.render = function() {
            "titleBg" == this.typeId ? canvas.width > canvas.height ? ctx.drawImage(this.oImgData.img, 0, (1 - canvas.height / canvas.width) / 2 * this.oImgData.img.height, this.oImgData.img.width, canvas.height / canvas.width * this.oImgData.img.height, 0, 0, canvas.width, canvas.height) : ctx.drawImage(this.oImgData.img, (1 - canvas.width / canvas.height) / 2 * this.oImgData.img.width, 0, canvas.width / canvas.height * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height) : canvas.width > canvas.height ? ctx.drawImage(this.oImgData.img, 0, (1 - canvas.height / canvas.width) / 2 * this.oImgData.img.height, this.oImgData.img.width, canvas.height / canvas.width * this.oImgData.img.height, 0, 0, canvas.width, canvas.height) : ctx.drawImage(this.oImgData.img, 0, 0, canvas.width / canvas.height * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height)
        }, a
    }();
    a.Background = t
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var t = function() {
        function a(a, t) {
            this.timer = .3, this.endTime = 0, this.posY = 0, this.numberSpace = 17, this.incY = 0, this.flareRot = 0, this.mapScale = 1, this.incTut = 0, this.aTiltTut = new Array(0, 1, 2, 1), this.oSplashLogoImgData = assetLib.getData("splashLogo"), this.oUiElementsImgData = assetLib.getData("uiElements"), this.oHudElementsImgData = assetLib.getData("hudElements"), this.oUiButsImgData = assetLib.getData("uiButs"), this.oNumbersImgData = assetLib.getData("numbers"), this.oCalendarNumbersImgData = assetLib.getData("calendarNumbers"), this.panelType = a, this.aButs = t, this.oTopFlareImgData = assetLib.getData("flare"), this.oMapImgData = assetLib.getData("map")
        }
        return a.prototype.update = function() {
            this.incY += 10 * delta, this.flareRot += delta / 3
        }, a.prototype.startTween1 = function() {
            this.posY = 500, TweenLite.to(this, .5, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, a.prototype.startLevelCompleteTween = function() {
            this.posY = 500, TweenLite.to(this, .5, {
                posY: 0,
                ease: "Back.easeOut"
            }), this.endIconX0 = this.endIconX1 = this.endIconX2 = this.endIconX3 = canvas.width / 2, this.endIconX4 = canvas.width, TweenLite.to(this, .3, {
                endIconX0: 0,
                delay: .2,
                ease: "Quint.easeOut"
            }), TweenLite.to(this, .3, {
                endIconX1: 0,
                delay: .4,
                ease: "Quint.easeOut"
            }), TweenLite.to(this, .3, {
                endIconX2: 0,
                delay: .6,
                ease: "Quint.easeOut"
            }), TweenLite.to(this, .3, {
                endIconX3: 0,
                delay: .8,
                ease: "Quint.easeOut"
            }), TweenLite.to(this, .3, {
                endIconX4: 0,
                delay: 1,
                ease: "Quint.easeOut",
                onComplete: function() {
                    playSound("scoreTotal1")
                }
            })
        }, a.prototype.switchBut = function(a, t, e, i) {
            "undefined" == typeof e && (e = null), "undefined" == typeof i && (i = null);
            for (var s = null, o = 0; o < this.aButs.length; o++)
                if (this.aButs[o].id == a) {
                    this.aButs[o].id = t, s = this.aButs[o], e && (this.aButs[o].aPos = e), i && (this.aButs[o].align = i);
                    break
                }
            return s
        }, a.prototype.render = function(a) {
            switch ("undefined" == typeof a && (a = !0), a || this.addButs(ctx), this.panelType) {
                case "splash":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)", ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                    break;
                case "start":
                    var t = .7;
                    ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height * t), ctx.scale(.75, .5), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height * t), ctx.scale(1, .75), ctx.rotate(-this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore();
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleLogo].height,
                        r = Math.max(500 / s, .75 * canvas.width / s);
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 * r - this.posY + 5, .3 * canvas.height - o / 2 * r, s * r, o * r);
                    break;
                case "credits":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)", ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.drawImage(this.oSplashLogoImgData.img, canvas.width / 2 - this.oSplashLogoImgData.img.width / 2, canvas.height / 2 - this.oSplashLogoImgData.img.height / 2 - this.posY);
                    break;
                case "map":
                    this.mapPosRealY -= 8 * (this.mapPosRealY - this.mapPosY) * delta, this.mapPosRealX -= 8 * (this.mapPosRealX - this.mapPosX) * delta, ctx.drawImage(this.oMapImgData.img, this.mapPosRealX, this.mapPosRealY, canvas.width, canvas.height, 0, 0, canvas.width * this.mapScale, canvas.height * this.mapScale);
                    var h = saveDataHandler.getLastUnlockedLevel();
                    if (h < aLevelData.length) {
                        var n = -80;
                        aLevelData[h].y < 200 && (n = 80), ctx.save(), ctx.translate((aLevelData[h].x - this.mapPosRealX) * this.mapScale, (aLevelData[h].y - this.mapPosRealY + n) * this.mapScale), ctx.scale(.75, .75), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate((aLevelData[h].x - this.mapPosRealX) * this.mapScale, (aLevelData[h].y - this.mapPosRealY + n) * this.mapScale), ctx.scale(1, 1), ctx.rotate(-this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore()
                    }
                    for (var m = 0; m < aLevelData.length; m++) {
                        var l = oImageIds.mapBut0,
                            n = -30;
                        m == h ? (l = oImageIds.mapBut1, n = -50) : m < h && (l = oImageIds.mapBut2, n = -42), aLevelData[m].y < 200 && (l = oImageIds.mapBut0Flip, n = 30, m == h ? (l = oImageIds.mapBut1Flip, n = 50) : m < h && (l = oImageIds.mapBut2Flip, n = 42));
                        var e = this.oUiElementsImgData.oData.oAtlasData[l].x,
                            i = this.oUiElementsImgData.oData.oAtlasData[l].y,
                            s = this.oUiElementsImgData.oData.oAtlasData[l].width,
                            o = this.oUiElementsImgData.oData.oAtlasData[l].height;
                        ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, (aLevelData[m].x - s / 2 - this.mapPosRealX + 2) * this.mapScale, (aLevelData[m].y - o / 2 - this.mapPosRealY + n) * this.mapScale, s * this.mapScale, o * this.mapScale)
                    }
                    if (0 == saveDataHandler.getLastUnlockedLevel()) {
                        var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].x,
                            i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].y,
                            s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].width,
                            o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.fingerPoint].height;
                        ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, (aLevelData[0].x - s / 2 - this.mapPosRealX + 4) * this.mapScale, (aLevelData[0].y - o / 2 - this.mapPosRealY - 160 + 10 * Math.sin(this.incY)) * this.mapScale, s * this.mapScale, o * this.mapScale)
                    }
                    if (ctx.fillStyle = "rgba(0, 0, 0, 0.5)", ctx.fillRect(0, 0, canvas.width, 36), ctx.fillRect(0, canvas.height - 36, canvas.width, canvas.height), this.displayScoreCoins(), saveDataHandler.getCalendarStatus() && saveDataHandler.getLastUnlockedLevel() > 0 && (ctx.save(), ctx.translate(canvas.width / 2 - 40 + this.posY, canvas.height - 41), ctx.scale(1, .75), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore()), saveDataHandler.getLastUnlockedLevel() > 0) {
                        var d = oImageIds.calendarBut,
                            g = new Date;
                        saveDataHandler.getCalendarStatus() || (d = oImageIds.calendarLockedBut, g = new Date((new Date).getTime() + 864e5));
                        var e = this.oUiElementsImgData.oData.oAtlasData[d].x,
                            i = this.oUiElementsImgData.oData.oAtlasData[d].y,
                            s = this.oUiElementsImgData.oData.oAtlasData[d].width,
                            o = this.oUiElementsImgData.oData.oAtlasData[d].height;
                        ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 - 50 + this.posY, canvas.height - o / 2 - 41, s, o);
                        var c = g.getDate(),
                            u = c.toString();
                        u.length < 2 && (u = "0" + u);
                        for (var r = 1, I = 0; I < u.length; I++) {
                            var p = parseFloat(u.charAt(I)),
                                D = p * this.oCalendarNumbersImgData.oData.spriteWidth % this.oCalendarNumbersImgData.img.width,
                                v = Math.floor(p / (this.oCalendarNumbersImgData.img.width / this.oCalendarNumbersImgData.oData.spriteWidth)) * this.oCalendarNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oCalendarNumbersImgData.img, D, v, this.oCalendarNumbersImgData.oData.spriteWidth, this.oCalendarNumbersImgData.oData.spriteHeight, canvas.width / 2 - 110 + I * (13 * r) + this.posY, canvas.height - 46, this.oCalendarNumbersImgData.oData.spriteWidth * r, this.oCalendarNumbersImgData.oData.spriteHeight * r)
                        }
                    }
                    break;
                case "tut":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)", ctx.fillRect(0, 0, canvas.width, canvas.height), this.incTut += delta;
                    var w, f;
                    if (isMobile) {
                        var b, S = -75;
                        if (hasTilt) {
                            S = 0, b = 0 == controlMethod ? "controlButOn0" : "controlButOff0";
                            var e = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].x,
                                i = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].y,
                                s = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].width,
                                o = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].height;
                            ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY - 150 + S, canvas.height / 2 - o + 50, s, o)
                        }
                        b = 1 == controlMethod ? "controlButOn1" : "controlButOff1";
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY + S, canvas.height / 2 - o + 50, s, o), b = 2 == controlMethod ? "controlButOn2" : "controlButOff2";
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY + 150 + S, canvas.height / 2 - o + 50, s, o)
                    } else {
                        w = Math.floor(this.incTut) % 2, f = -2.75, 1 == w && (f = 2.75);
                        var e = this.oHudElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + w]].x,
                            i = this.oHudElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + w]].y,
                            s = this.oHudElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + w]].width,
                            o = this.oHudElementsImgData.oData.oAtlasData[oImageIds["tutDesktop" + w]].height;
                        ctx.drawImage(this.oHudElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY + f, canvas.height / 2 - o / 2 + 15, s, o)
                    }
                    ctx.save(), ctx.translate(canvas.width + this.posY - 77, canvas.height - 57), ctx.scale(.5, .5), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate(canvas.width + this.posY - 77, canvas.height - 57), ctx.scale(.6, .5), ctx.rotate(-this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore();
                    break;
                case "game":
                    break;
                case "levelComplete":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)", ctx.fillRect(0, 0, canvas.width, canvas.height);
                    var y = Math.min(levelNum, aLevelData.length - 1);
                    this.displayScoreCoins();
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winPanel].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winPanel].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winPanel].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY, canvas.height / 2 - o / 2 - 25, s, o);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(y / 6)]].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(y / 6)]].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(y / 6)]].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(y / 6)]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 130 + this.posY, canvas.height / 2 - 140, s, o);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.winIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 215 + this.posY, canvas.height / 2 - 170, s, o);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallTimeIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallTimeIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallTimeIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallTimeIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 20 + this.endIconX0, canvas.height / 2 - 165, s, o), this.displayTime(canvas.width / 2 + 58 + this.endIconX0, canvas.height / 2 - 162);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 20 + this.endIconX1, canvas.height / 2 - 125, s, o);
                    for (var u = oGameData.overtakes.toString(), r = .75, I = 0; I < u.length; I++) {
                        var p = parseFloat(u.charAt(I)),
                            D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 58 + this.endIconX1 + I * (numberSpace * r), canvas.height / 2 - 122, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 20 + this.endIconX2, canvas.height / 2 - 85, s, o);
                    for (var u = oGameData.speedSecs.toString(), r = .75, I = 0; I < u.length; I++) {
                        var p = parseFloat(u.charAt(I)),
                            D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 58 + this.endIconX2 + I * (numberSpace * r), canvas.height / 2 - 82, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 20 + this.endIconX3, canvas.height / 2 - 45, s, o);
                    for (var u = oGameData.coins.toString(), r = .75, I = 0; I < u.length; I++) {
                        var p = parseFloat(u.charAt(I)),
                            D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 58 + this.endIconX3 + I * (numberSpace * r), canvas.height / 2 - 42, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var u = oGameData.totalLevelScore.toString(),
                        r = .85;
                    for ("0" == u && (u = "|"); u.length < 5;) u = "|" + u;
                    for (var I = 0; I < u.length; I++) {
                        var p;
                        p = "|" == u.charAt(I) ? 14 : parseFloat(u.charAt(I));
                        var D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 - 146 + this.endIconX4 + I * (numberSpace * r), canvas.height / 2 + 10, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var u = oGameData.totalLevelCoins.toString(),
                        r = .85;
                    for ("0" == u && (u = "|"); u.length < 5;) u = "|" + u;
                    for (var I = 0; I < u.length; I++) {
                        var p;
                        p = "|" == u.charAt(I) ? 14 : parseFloat(u.charAt(I));
                        var D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 63 + this.endIconX4 + I * (numberSpace * r), canvas.height / 2 + 10, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var t = .7;
                    ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height / 2 + 130), ctx.rotate(this.flareRot), ctx.scale(.85, .6), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height / 2 + 130), ctx.scale(.9, .7), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore();
                    break;
                case "levelFail":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)", ctx.fillRect(0, 0, canvas.width, canvas.height), this.displayScoreCoins();
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.losePanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY, canvas.height / 2 - o / 2 - 25, s, o);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(levelNum / 6)]].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(levelNum / 6)]].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(levelNum / 6)]].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds["mapArea" + Math.floor(levelNum / 6)]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 130 + this.posY, canvas.height / 2 - 140, s, o);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.loseIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.loseIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.loseIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.loseIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 215 + this.posY, canvas.height / 2 - 160, s, o);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallOvertakesIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 20 + this.endIconX1, canvas.height / 2 - 145, s, o);
                    for (var u = oGameData.overtakes.toString(), r = .75, I = 0; I < u.length; I++) {
                        var p = parseFloat(u.charAt(I)),
                            D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 58 + this.endIconX1 + I * (numberSpace * r), canvas.height / 2 - 142, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 20 + this.endIconX2, canvas.height / 2 - 105, s, o);
                    for (var u = oGameData.speedSecs.toString(), r = .75, I = 0; I < u.length; I++) {
                        var p = parseFloat(u.charAt(I)),
                            D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 58 + this.endIconX2 + I * (numberSpace * r), canvas.height / 2 - 102, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.smallCoinsIcon].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 20 + this.endIconX3, canvas.height / 2 - 65, s, o);
                    for (var u = oGameData.coins.toString(), r = .75, I = 0; I < u.length; I++) {
                        var p = parseFloat(u.charAt(I)),
                            D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 58 + this.endIconX3 + I * (numberSpace * r), canvas.height / 2 - 62, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var u = oGameData.totalLevelScore.toString(),
                        r = .85;
                    for ("0" == u && (u = "|"); u.length < 5;) u = "|" + u;
                    for (var I = 0; I < u.length; I++) {
                        var p;
                        p = "|" == u.charAt(I) ? 14 : parseFloat(u.charAt(I));
                        var D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 - 146 + this.endIconX4 + I * (numberSpace * r), canvas.height / 2 + 10, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    var u = oGameData.totalLevelCoins.toString(),
                        r = .85;
                    for ("0" == u && (u = "|"); u.length < 5;) u = "|" + u;
                    for (var I = 0; I < u.length; I++) {
                        var p;
                        p = "|" == u.charAt(I) ? 14 : parseFloat(u.charAt(I));
                        var D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 63 + this.endIconX4 + I * (numberSpace * r), canvas.height / 2 + 10, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                    }
                    if (totalCoins < 50) {
                        var t = .7;
                        ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height / 2 + 130), ctx.scale(.85, .6), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2),
                            ctx.restore(), ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height / 2 + 130), ctx.scale(.9, .7), ctx.rotate(-this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore()
                    } else {
                        var t = .7;
                        ctx.save(), ctx.translate(canvas.width - 95 + this.posY, canvas.height - 40), ctx.scale(1, .6), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate(canvas.width - 95 + this.posY, canvas.height - 40), ctx.scale(1.2, .7), ctx.rotate(-this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore()
                    }
                    break;
                case "upgrade":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)", ctx.fillRect(0, 0, canvas.width, canvas.height), this.displayScoreCoins();
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.upgradePanel].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.upgradePanel].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.upgradePanel].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.upgradePanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY, canvas.height / 2 - o / 2, s, o);
                    var r = .5,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 120 + this.posY, canvas.height / 2 - 130, s * r, o * r);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameWhite" + curBike]].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameWhite" + curBike]].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameWhite" + curBike]].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameWhite" + curBike]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 17 + this.posY, canvas.height / 2 - 105, s, o);
                    for (var A = new Array({
                            x: canvas.width / 2 - 156,
                            y: canvas.height / 2 - 45.5
                        }, {
                            x: canvas.width / 2 + 52,
                            y: canvas.height / 2 - 45.5
                        }, {
                            x: canvas.width / 2 - 156,
                            y: canvas.height / 2 + 24.5
                        }, {
                            x: canvas.width / 2 + 52,
                            y: canvas.height / 2 + 24.5
                        }), m = 0; m < A.length; m++)
                        for (var I = 0; I < saveDataHandler.getBikeUpgrade(curBike, m); I++) {
                            var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeUpgradeBar].x,
                                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeUpgradeBar].y,
                                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeUpgradeBar].width,
                                o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeUpgradeBar].height;
                            ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, A[m].x + 26 * I + this.posY, A[m].y, s, o)
                        }
                    A = new Array({
                        x: canvas.width / 2 - 90,
                        y: canvas.height / 2 - 5
                    }, {
                        x: canvas.width / 2 + 120,
                        y: canvas.height / 2 - 5
                    }, {
                        x: canvas.width / 2 - 90,
                        y: canvas.height / 2 + 65
                    }, {
                        x: canvas.width / 2 + 120,
                        y: canvas.height / 2 + 65
                    });
                    for (var m = 0; m < A.length; m++)
                        if (saveDataHandler.getBikeUpgrade(curBike, m) < 5) {
                            var k = oImageIds.smallBuyButOff,
                                x = upgradeBaseCost + upgradeInc * saveDataHandler.getBikeUpgrade(curBike, m) + curBike * upgradeBikeInc;
                            totalCoins >= x && (k = oImageIds.smallBuyButOn, ctx.save(), ctx.translate(A[m].x + this.posY, A[m].y), ctx.scale(.6, .2), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate(A[m].x + this.posY, A[m].y), ctx.scale(.6, .2), ctx.rotate(-this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore());
                            var e = this.oUiElementsImgData.oData.oAtlasData[k].x,
                                i = this.oUiElementsImgData.oData.oAtlasData[k].y,
                                s = this.oUiElementsImgData.oData.oAtlasData[k].width,
                                o = this.oUiElementsImgData.oData.oAtlasData[k].height;
                            ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, A[m].x - s / 2 + this.posY, A[m].y - o / 2, s, o);
                            for (var u = x.toString(), r = .5, I = 0; I < u.length; I++) {
                                var p = parseFloat(u.charAt(I)),
                                    D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                                    v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                                ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, A[m].x + I * (numberSpace * r) + this.posY - 22, A[m].y - 12, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                            }
                        }
                    if (curBike > 0) {
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 - 175 + this.posY, canvas.height / 2 - o / 2 + 135, s, o)
                    }
                    var H = saveDataHandler.getLatestBike();
                    if (curBike < H) {
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + 175 + this.posY, canvas.height / 2 - o / 2 + 135, s, o)
                    }
                    var r = .75,
                        e = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].x,
                        i = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].y,
                        s = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].width,
                        o = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].height;
                    ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 * r + this.posY, canvas.height / 2 - o / 2 * r + 145, s * r, o * r);
                    break;
                case "bikeShop":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.35)", ctx.fillRect(0, 0, canvas.width, canvas.height), this.displayScoreCoins();
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeShopPanel].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeShopPanel].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeShopPanel].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeShopPanel].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY, canvas.height / 2 - o / 2, s, o);
                    var r = 1,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBikeShopId]].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBikeShopId]].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBikeShopId]].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBikeShopId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 200 + this.posY, canvas.height / 2 - 105, s * r, o * r);
                    var e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameBlack" + curBikeShopId]].x,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameBlack" + curBikeShopId]].y,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameBlack" + curBikeShopId]].width,
                        o = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeNameBlack" + curBikeShopId]].height;
                    ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - 200 + this.posY, canvas.height / 2 - 130, s, o);
                    for (var B = new Array("maxSpeed", "accRate", "maxSteer", "steerRate"), L = new Array(.07, .03, .05, .01), m = 0; m < 4; m++) {
                        var E = aBikeData[aBikeData.length - 1][B[m]] - aBikeData[0][B[m]],
                            T = .1 + (aBikeData[curBikeShopId][B[m]] - aBikeData[0][B[m]]) / E * .8 + L[m],
                            e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeStatBar].x,
                            i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeStatBar].y,
                            s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeStatBar].width,
                            o = this.oUiElementsImgData.oData.oAtlasData[oImageIds.bikeStatBar].height;
                        ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 + 54 + this.posY, canvas.height / 2 - 103 + 35 * m, s * T, o)
                    }
                    if (saveDataHandler.hasBike(curBikeShopId)) {
                        var r = .75,
                            e = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds.playBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 * r + this.posY, canvas.height / 2 - o / 2 * r + 145, s * r, o * r)
                    } else {
                        var k = oImageIds.bigBuyButOff,
                            x = aBikeData[curBikeShopId].cost;
                        if (totalCoins >= x) {
                            k = oImageIds.bigBuyButOn;
                            var t = .7;
                            ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height / 2 + 72), ctx.scale(1, .5), ctx.rotate(this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore(), ctx.save(), ctx.translate(canvas.width / 2 + this.posY, canvas.height / 2 + 72), ctx.scale(1, .5), ctx.rotate(-this.flareRot), ctx.drawImage(this.oTopFlareImgData.img, -this.oTopFlareImgData.img.width / 2, -this.oTopFlareImgData.img.height / 2), ctx.restore()
                        }
                        var e = this.oUiElementsImgData.oData.oAtlasData[k].x,
                            i = this.oUiElementsImgData.oData.oAtlasData[k].y,
                            s = this.oUiElementsImgData.oData.oAtlasData[k].width,
                            o = this.oUiElementsImgData.oData.oAtlasData[k].height;
                        ctx.drawImage(this.oUiElementsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY, canvas.height / 2 - o / 2 + 72, s, o);
                        for (var u = x.toString(), r = 1, I = 0; I < u.length; I++) {
                            var p = parseFloat(u.charAt(I)),
                                D = p * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                                v = Math.floor(p / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                            ctx.drawImage(this.oNumbersImgData.img, D, v, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + I * (numberSpace * r) + this.posY - 55, canvas.height / 2 + 48, this.oNumbersImgData.oData.spriteWidth * r, this.oNumbersImgData.oData.spriteHeight * r)
                        }
                    }
                    if (curBikeShopId > 0) {
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds.leftBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 - 175 + this.posY, canvas.height / 2 - o / 2 + 135, s, o)
                    }
                    if (curBikeShopId < aBikeData.length - 1) {
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds.rightBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + 175 + this.posY, canvas.height / 2 - o / 2 + 135, s, o)
                    }
                    break;
                case "pause":
                    if (ctx.fillStyle = "rgba(0, 0, 0, 0.5)", ctx.fillRect(0, 0, canvas.width, canvas.height), isMobile) {
                        var b, S = -75;
                        if (hasTilt) {
                            S = 0, b = 0 == controlMethod ? "controlButOn0" : "controlButOff0";
                            var e = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].x,
                                i = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].y,
                                s = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].width,
                                o = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].height;
                            ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY - 150 + S, canvas.height / 2 - o + 50, s, o)
                        }
                        b = 1 == controlMethod ? "controlButOn1" : "controlButOff1";
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY + S, canvas.height / 2 - o + 50, s, o), b = 2 == controlMethod ? "controlButOn2" : "controlButOff2";
                        var e = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].x,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].y,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].width,
                            o = this.oUiButsImgData.oData.oAtlasData[oImageIds[b]].height;
                        ctx.drawImage(this.oUiButsImgData.img, e, i, s, o, canvas.width / 2 - s / 2 + this.posY + 150 + S, canvas.height / 2 - o + 50, s, o)
                    }
            }
            a && this.addButs(ctx)
        }, a.prototype.displayTime = function(a, t) {
            var e = .75;
            curTime = Math.max(curTime, 0);
            var i, s = Math.floor(curTime / 6e3).toString(),
                o = Math.floor((curTime - 6e3 * Math.floor(curTime / 6e3)) / 100).toString();
            o.length < 2 && (o = "0" + o);
            var r = curTime.toString().charAt(curTime.toString().length - 2) + curTime.toString().charAt(curTime.toString().length - 1);
            r.length < 2 && (r = "0" + r);
            for (var h = 0; h < 2; h++) {
                if (i = parseFloat(s.charAt(h)), s.length < 2) {
                    if (0 == h) continue;
                    i = parseFloat(s.charAt(0))
                }
                var n = i * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    m = Math.floor(i / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, n, m, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, a, t, this.oNumbersImgData.oData.spriteWidth * e, this.oNumbersImgData.oData.spriteHeight * e)
            }
            i = 10;
            var n = i * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                m = Math.floor(i / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
            ctx.drawImage(this.oNumbersImgData.img, n, m, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, a + numberSpace * e, t, this.oNumbersImgData.oData.spriteWidth * e, this.oNumbersImgData.oData.spriteHeight * e);
            for (var h = 0; h < 2; h++) {
                i = parseFloat(o.charAt(h));
                var n = i * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    m = Math.floor(i / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, n, m, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, a + (numberSpace + 28 + h * numberSpace) * e, t, this.oNumbersImgData.oData.spriteWidth * e, this.oNumbersImgData.oData.spriteHeight * e)
            }
            for (var h = 0; h < 2; h++) {
                i = parseFloat(r.charAt(h));
                var n = i * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    m = Math.floor(i / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, n, m, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, a + (3 * numberSpace + 38 + h * numberSpace * .5) * e, t, .5 * this.oNumbersImgData.oData.spriteWidth * e, .5 * this.oNumbersImgData.oData.spriteHeight * e)
            }
        }, a.prototype.displayScoreCoins = function() {
            var a = .35,
                t = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].x,
                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].y,
                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].width,
                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["bikeIcon" + curBike]].height;
            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - i / 2 * a - this.posY - 27, 6, i * a, s * a);
            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].x,
                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].y,
                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].width,
                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.scoreIcon].height;
            for (ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - 222 - this.posY - 27, 6, i, s), m = totalScore.toString(), "0" == m && (m = "|"); m.length < 5;) m = "|" + m;
            for (var a = .9, o = 0; o < m.length; o++) {
                var r;
                r = "|" == m.charAt(o) ? 14 : parseFloat(m.charAt(o));
                var h = r * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    n = Math.floor(r / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, h, n, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 - 180 + o * (numberSpace * a) - this.posY - 27, 10, this.oNumbersImgData.oData.spriteWidth * a, this.oNumbersImgData.oData.spriteHeight * a)
            }
            var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.coinsIcon].x,
                e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.coinsIcon].y,
                i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.coinsIcon].width,
                s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.coinsIcon].height;
            ctx.drawImage(this.oUiElementsImgData.img, t, e, i, s, canvas.width / 2 - this.posY + 37 - 27, 6, i, s);
            var m = totalCoins.toString();
            for ("0" == m && (m = "|"); m.length < 5;) m = "|" + m;
            for (var o = 0; o < m.length; o++) {
                var r;
                r = "|" == m.charAt(o) ? 14 : parseFloat(m.charAt(o));
                var h = r * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    n = Math.floor(r / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, h, n, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 + 42 + o * (numberSpace * a) - this.posY + 37 - 27, 10, this.oNumbersImgData.oData.spriteWidth * a, this.oNumbersImgData.oData.spriteHeight * a)
            }
        }, a.prototype.addButs = function(a) {
            for (var t = 0; t < this.aButs.length; t++) {
                var e = this.posY,
                    i = 0;
                0 == this.incY || this.aButs[t].noMove || (i = 3 * Math.sin(this.incY + 45 * t)), this.aButs[t].scale || (this.aButs[t].scale = 1);
                var s = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].x,
                    o = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].y,
                    r = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].width,
                    h = this.aButs[t].oImgData.oData.oAtlasData[this.aButs[t].id].height,
                    n = canvas.width * this.aButs[t].align[0],
                    m = canvas.height * this.aButs[t].align[1];
                a.drawImage(this.aButs[t].oImgData.img, s, o, r, h, n + this.aButs[t].aPos[0] - r / 2 * this.aButs[t].scale + e - i / 2, m + this.aButs[t].aPos[1] - h / 2 * this.aButs[t].scale + i / 2, r * this.aButs[t].scale + i, h * this.aButs[t].scale - i)
            }
        }, a
    }();
    a.Panel = t
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var t = function() {
        function t() {
            this.segNum = 600, this.horizon = 0, this.roadTileHeight = 500, this.scrollY = 0, this.steerXcentre = -1539, this.steerEaseX = 0, this.roadHeight = 380, this.roadScaleMultiplier = 1, this.wheelie = 0, this.curve = 0, this.curveInc = 0, this.lane = 0, this.aScenery = new Array, this.sceneryInc = 0, this.sceneryDir = 0, this.scrollX = 0, this.scrollInc = 0, this.skyScale = 1, isBonusLevel ? (this.oRoadImgData = assetLib.getData("road" + Math.floor(bonusLevelNum / 6)), this.oSkyImgData = assetLib.getData("sky" + aLevelData[bonusLevelNum].sky)) : (this.oRoadImgData = assetLib.getData("road" + Math.floor(levelNum / 6)), this.oSkyImgData = assetLib.getData("sky" + aLevelData[levelNum].sky)), this.aRowData = new Array;
            for (var a = 0; a < this.segNum; a++) this.aRowData.push({
                height: 0,
                scale: 0
            });
            for (var t = 30, a = 0; a < t; a++) this.addScenery(), this.aScenery[a].rowNum = (this.segNum - vehicleStartRowNum) / t * (t - 1 - a) + vehicleStartRowNum;
            this.minSpeed = aBikeData[curBike].minSpeed + .9 * saveDataHandler.getBikeUpgrade(curBike, 0), this.maxSpeed = aBikeData[curBike].maxSpeed + .9 * saveDataHandler.getBikeUpgrade(curBike, 1), this.accRate = aBikeData[curBike].accRate + .1 * saveDataHandler.getBikeUpgrade(curBike, 2), this.steerRate = aBikeData[curBike].steerRate + 100 * saveDataHandler.getBikeUpgrade(curBike, 3), this.maxSteer = aBikeData[curBike].maxSteer, this.raceDist = getRaceDist(), 0 != levelNum || isBonusLevel ? this.speed = this.minSpeed : this.speed = this.minSpeed, this.steerX = this.steerXcentre, this.changeCurve()
        }
        return t.prototype.addScenery = function() {
            var t;
            this.sceneryDir++, t = new a.Scenery(assetLib.getData("scenery"), this.sceneryDir % 2), t.y = this.horizon, this.aScenery.push(t)
        }, t.prototype.changeCurve = function() {
            var a = this;
            this.curveTween = TweenLite.to(this, 4 * Math.random() + 4, {
                curve: 2 * Math.random() - 1,
                ease: "Quad.easeInOut",
                onComplete: function() {
                    a.changeCurve()
                }
            })
        }, t.prototype.update = function() {
            this.speed;
            this.sceneryInc += this.speed * delta, this.sceneryInc > 5.7 && (this.sceneryInc = 0, this.addScenery()), isAccelerating ? this.speed -= (this.speed - this.maxSpeed) * (this.accRate * delta) : this.speed -= (this.speed - this.minSpeed) * (this.accRate * delta), oGameData.dist += this.speed / this.raceDist / 18e4 * (60 * delta), 0 == oGameData.levelStage && oGameData.dist >= 1 / 3 && !levelOver ? (hud.hitCheckPoint(), oGameData.levelStage = 1) : 1 == oGameData.levelStage && oGameData.dist >= 2 / 3 && !levelOver ? (hud.hitCheckPoint(), oGameData.levelStage = 2) : 2 == oGameData.levelStage && oGameData.dist >= 1 && !levelOver && raceOver(!0), this.scrollY -= 1.5 * this.speed * delta, this.scrollY < 0 && (this.scrollY += 500), 1 == controlMethod ? rightSteer + leftSteer == 1 ? this.steerEaseX = Math.min(this.steerEaseX + this.steerRate * delta, this.maxSteer) : rightSteer + leftSteer == -1 ? this.steerEaseX = Math.max(this.steerEaseX - this.steerRate * delta, -this.maxSteer) : this.steerEaseX < 0 ? this.steerEaseX = Math.min(this.steerEaseX + this.steerRate * delta, 0) : this.steerEaseX = Math.max(this.steerEaseX - this.steerRate * delta, 0) : 0 != controlMethod && 2 != controlMethod || (0 == manualSteering || levelOver ? this.steerEaseX < 0 ? this.steerEaseX = Math.min(this.steerEaseX + this.steerRate * delta, 0) : this.steerEaseX = Math.max(this.steerEaseX - this.steerRate * delta, 0) : this.steerEaseX = Math.max(Math.min(this.steerEaseX + manualSteering * this.steerRate * delta, Math.abs(manualSteering) * this.maxSteer), -Math.abs(manualSteering) * this.maxSteer)), this.aRowData[this.segNum - 1].x - (canvas.width / 2 + bike.x) < -3900 ? (0 == hud.crashAlpha && hasCrashed(), this.steerEaseX = this.maxSteer) : this.aRowData[this.segNum - 1].x - (canvas.width / 2 + bike.x) > -120 && (0 == hud.crashAlpha && hasCrashed(), this.steerEaseX = -this.maxSteer), this.steerX += (this.steerEaseX + road.curve * (6 * this.speed)) * delta, this.roadHeight = 380 - 20 * this.wheelie - bike.crashY, this.horizon = canvas.height - this.roadHeight, this.lane = Math.floor((this.aRowData[this.segNum - 1].x - (canvas.width / 2 + bike.x) + 120) / -945), this.scrollInc = this.curve * (.75 * this.speed) * delta, this.scrollX += this.scrollInc, this.scrollX < 0 && (this.scrollX += 525)
        }, t.prototype.render = function() {
            var a = this.roadTileHeight / this.segNum,
                t = 0;
            this.aRowData[0].curve = this.curve;
            for (var e = 0; e < this.segNum; e++) this.tempInc = e, this.easeInc = 1 * (this.tempInc /= this.segNum) * Math.pow(this.tempInc, 15), this.nextRow = e + 1, this.segHeightAfter = 1 * (this.nextRow /= this.segNum) * Math.pow(this.nextRow, 15) - this.easeInc, this.aRowData[e].x = this.steerX * this.easeInc + canvas.width / 2 - 2 * (this.easeInc + this.segHeightAfter) * this.oRoadImgData.oData.spriteWidth / 2 - 25 + (this.segNum - e) * this.curve, this.aRowData[e].y = this.horizon + this.easeInc * this.roadHeight, this.aRowData[e].scale = 8 * (this.easeInc + this.segHeightAfter) * this.oRoadImgData.oData.spriteWidth + 50, 0 == t && (this.rowId = e), t += this.segHeightAfter * this.roadHeight, t > 1 && (ctx.drawImage(this.oRoadImgData.img, 0, this.rowId * a + this.scrollY, this.oRoadImgData.oData.spriteWidth, a, this.aRowData[this.rowId].x, this.aRowData[this.rowId].y, this.aRowData[this.rowId].scale, t + 1), t = 0);
            this.skyScale = canvas.width / (this.oSkyImgData.img.width / 2), ctx.drawImage(this.oSkyImgData.img, this.scrollX % 525, 0, this.oSkyImgData.img.width, this.oSkyImgData.img.height, 0, canvas.height - road.roadHeight - this.oSkyImgData.img.height * this.skyScale + 131.25 * this.skyScale, this.oSkyImgData.img.width * this.skyScale, this.oSkyImgData.img.height * this.skyScale), isBonusLevel ? ctx.fillStyle = aFenceColours[Math.floor(bonusLevelNum / 6)] : ctx.fillStyle = aFenceColours[Math.floor(levelNum / 6)];
            for (var i, s, o, r, h, n, e = this.aScenery.length - 1; e >= 0; e--) this.aScenery[e].x = this.aRowData[Math.floor(this.aScenery[e].rowNum)].x + this.aRowData[Math.floor(this.aScenery[e].rowNum)].scale * this.aScenery[e].sideMultiplier, this.aScenery[e].bollardX = this.aRowData[Math.floor(this.aScenery[e].rowNum)].x + this.aRowData[Math.floor(this.aScenery[e].rowNum)].scale * this.aScenery[e].bollardSideMultiplier, this.aScenery[e].y = this.aRowData[Math.floor(this.aScenery[e].rowNum)].y, this.aScenery[e].scale = (this.aRowData[Math.floor(this.aScenery[e].rowNum)].scale - 40) / 275, this.aScenery[e].tempInc = this.aScenery[e].rowNum - vehicleStartRowNum, this.aScenery[e].perspSpeed = 1 * (this.aScenery[e].tempInc /= this.segNum - vehicleStartRowNum) * Math.pow(this.aScenery[e].tempInc, 5) + 0, this.aScenery[e].scale > .04 && (this.aScenery[e].render(), 1 == this.aScenery[e].bollardSideMultiplier ? (ctx.beginPath(), ctx.moveTo(s, o - 15 * i), ctx.lineTo(this.aScenery[e].bollardX, this.aScenery[e].y - 15 * this.aScenery[e].scale), ctx.lineTo(this.aScenery[e].bollardX, this.aScenery[e].y - 10 * this.aScenery[e].scale), ctx.lineTo(s, o - 10 * i), ctx.closePath(), ctx.fill()) : 0 == this.aScenery[e].bollardSideMultiplier && (ctx.beginPath(), ctx.moveTo(h, n - 15 * r), ctx.lineTo(this.aScenery[e].bollardX, this.aScenery[e].y - 15 * this.aScenery[e].scale), ctx.lineTo(this.aScenery[e].bollardX, this.aScenery[e].y - 10 * this.aScenery[e].scale), ctx.lineTo(h, n - 10 * r), ctx.closePath(), ctx.fill()), this.aScenery[e].renderBollard()), 1 == this.aScenery[e].bollardSideMultiplier ? (i = this.aScenery[e].scale, s = this.aScenery[e].bollardX, o = this.aScenery[e].y) : 0 == this.aScenery[e].bollardSideMultiplier && (r = this.aScenery[e].scale, h = this.aScenery[e].bollardX, n = this.aScenery[e].y), this.aScenery[e].rowNum += (this.speed + 150 * this.aScenery[e].perspSpeed) * delta * 1, this.aScenery[e].rowNum >= this.segNum && this.aScenery.splice(e, 1);
            aVehicles.sort(function(a, t) {
                return a.y - t.y
            });
            for (var e = 0; e < aVehicles.length; e++) {
                if (aVehicles[e].x = this.aRowData[Math.floor(aVehicles[e].rowNum)].x + this.aRowData[Math.floor(aVehicles[e].rowNum)].scale * aVehicles[e].sideMultiplier, aVehicles[e].y = this.aRowData[Math.floor(aVehicles[e].rowNum)].y, aVehicles[e].scale = (this.aRowData[Math.floor(aVehicles[e].rowNum)].scale - 30) * this.roadScaleMultiplier / 1e3, aVehicles[e].tempInc = aVehicles[e].rowNum - vehicleStartRowNum, aVehicles[e].perspSpeed = 1 * (aVehicles[e].tempInc /= this.segNum - vehicleStartRowNum) * Math.pow(aVehicles[e].tempInc, 5) + 0, aVehicles[e].rowNum += (this.speed / 2 - aVehicles[e].speed + 150 * aVehicles[e].perspSpeed) * delta * 1.6, aVehicles[e].update(), aVehicles[e].scale > .03 && aVehicles[e].render(), aVehicles[e].rowNum >= this.segNum) {
                    for (var m = 0; m < aVehicleLanes[aVehicles[e].lane].length; m++) aVehicleLanes[aVehicles[e].lane][m] == aVehicles[e] && aVehicleLanes[aVehicles[e].lane].splice(m, 1);
                    "vehicle" != aVehicles[e].typeId || aVehicles[e].overtaken || playSound("overtake" + Math.floor(3 * Math.random())), aVehicles.splice(e, 1), e -= 1
                }
                if (aVehicles[e].rowNum < vehicleStartRowNum - 10) {
                    for (var m = 0; m < aVehicleLanes[aVehicles[e].lane].length; m++) aVehicleLanes[aVehicles[e].lane][m] == aVehicles[e] && aVehicleLanes[aVehicles[e].lane].splice(m, 1);
                    aVehicles.splice(e, 1), e -= 1
                }
            }
        }, t
    }();
    a.Road = t
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var t = function() {
        function a() {
            switch (this.x = 0, this.y = 0, this.changeLaneInc = 0, this.overtaken = !1, this.typeId = "vehicle", this.hasWhooshed = !1, this.id = Math.floor(6 * Math.random()), this.oVehicleImgData = assetLib.getData("vehicle" + this.id), this.id) {
                case 0:
                    this.offsetY = -13;
                    break;
                case 1:
                case 2:
                    this.offsetY = -13;
                    break;
                case 3:
                case 4:
                    this.offsetY = -13;
                    break;
                case 5:
                    this.offsetY = -13
            }
            this.scale = .01, this.changeLaneTime = 10 * Math.random() + 1
        }
        return a.prototype.getNewLane = function() {
            var a = this.lane;
            switch (this.lane) {
                case 0:
                    a = this.laneFree(1);
                    break;
                case 1:
                    a = Math.random() > .5 ? this.laneFree(0) : this.laneFree(2);
                    break;
                case 2:
                    a = Math.random() > .5 ? this.laneFree(1) : this.laneFree(3);
                    break;
                case 3:
                    a = this.laneFree(2)
            }
            return a
        }, a.prototype.laneFree = function(a) {
            var t = a;
            if (oLaneSpeeds[a] < oLaneSpeeds[this.lane] - 5 || oLaneSpeeds[a] > oLaneSpeeds[this.lane] + 5) return t = this.lane;
            for (var e = 0; e < aVehicleLanes[a].length; e++)
                if (aVehicleLanes[a][e].rowNum < this.rowNum + 40 && aVehicleLanes[a][e].rowNum > this.rowNum - 40) {
                    t = this.lane;
                    break
                }
            for (var e = 0; e < aVehicleLanes[this.lane].length; e++)
                if (aVehicleLanes[this.lane][e] != this && aVehicleLanes[this.lane][e].rowNum < this.rowNum + 40 && aVehicleLanes[this.lane][e].rowNum > this.rowNum - 40) {
                    t = this.lane;
                    break
                }
            return t
        }, a.prototype.update = function() {
            if (this.changeLaneInc += delta, this.changeLaneInc >= this.changeLaneTime && this.rowNum < road.segNum - 85) {
                this.changeLaneInc = 0, this.changeLaneTime = 10 * Math.random() + 3;
                var a = this.getNewLane();
                if (a != this.lane) {
                    for (var t = 0; t < aVehicleLanes[this.lane].length; t++)
                        if (aVehicleLanes[this.lane][t] == this) {
                            aVehicleLanes[this.lane].splice(t, 1), aVehicleLanes[a].push(this);
                            break
                        }
                    this.lane = a, TweenLite.to(this, 3, {
                        sideMultiplier: aLanePos[this.lane],
                        ease: "Quad.easeInOut"
                    }), TweenLite.to(this, 2, {
                        speed: this["laneSpeed" + this.lane],
                        ease: "Quad.easeOut"
                    })
                }
            }
            this.speed = oLaneSpeeds["lane" + this.lane], this.rowNum > road.segNum - 150 && this.lane == road.lane && 0 == hud.crashAlpha && !levelOver ? (hud.showWhoosh((1 - (road.segNum - this.rowNum) / 150) / 2 + .5), this.hasWhooshed || lastWhooshLane == this.lane || (playSound("inDraft"), this.hasWhooshed = !0, lastWhooshLane = this.lane)) : this.hasWhooshed = !1, this.rowNum > road.segNum - 5 && !levelOver && (this.x > canvas.width / 2 + bike.x - 300 && this.x < canvas.width / 2 + bike.x + 300 && 0 == hud.crashAlpha ? (hasCrashed(), this.overtaken = !0) : this.x > canvas.width / 2 + bike.x - 600 && this.x < canvas.width / 2 + bike.x + 600 && !this.overtaken && (this.overtaken = !0, hud.addBanner("overtakes")))
        }, a.prototype.render = function() {
            var a = (road.steerX - road.steerXcentre) / 135,
                t = (this.x - canvas.width / 2) / 400,
                e = road.curve / -25 * (road.segNum - Math.min(this.rowNum, road.segNum));
            this.frame = Math.min(Math.max(Math.round(30 * (1 - this.sideMultiplier) - a - t - e), 0), 30);
            var i = this.frame * this.oVehicleImgData.oData.spriteWidth % this.oVehicleImgData.img.width,
                s = Math.floor(this.frame / (this.oVehicleImgData.img.width / this.oVehicleImgData.oData.spriteWidth)) * this.oVehicleImgData.oData.spriteHeight;
            this.scale *= .75, ctx.drawImage(this.oVehicleImgData.img, i, s, this.oVehicleImgData.oData.spriteWidth, this.oVehicleImgData.oData.spriteHeight, this.x - this.scale * this.oVehicleImgData.oData.spriteWidth / 2, this.y - this.scale * (this.oVehicleImgData.oData.spriteHeight + this.offsetY), this.scale * this.oVehicleImgData.oData.spriteWidth, this.scale * this.oVehicleImgData.oData.spriteHeight)
        }, a
    }();
    a.Vehicle = t
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var t = function() {
        function a() {
            this.rotation = 0, this.lastSteer = 0, this.x = 0, this.rotEase = 0, this.crashY = 0, this.aOffsetY = new Array((-10), 20, (-20), (-20), 0, (-20), 50, 10, 20), this.jiggleY = 0, this.oBikeImgData = assetLib.getData("bike" + curBike)
        }
        return a.prototype.showCrash = function() {
            this.crashTween && this.crashTween.kill(), this.crashY = 150, this.crashTween = TweenLite.to(this, 3, {
                crashY: 0,
                ease: "Elastic.easeOut"
            })
        }, a.prototype.update = function() {
            this.jiggleY = 2 * Math.random() - 1, 1 == controlMethod ? rightSteer + leftSteer == 1 && 1 != this.lastSteer ? (this.rotTween && this.rotTween.kill(), this.rotTween = TweenLite.to(this, .5, {
                rotation: -8 * radian,
                ease: "Back.easeOut"
            }), this.strafeTween && this.strafeTween.kill(), this.strafeTween = TweenLite.to(this, 1, {
                x: 60,
                ease: "Quad.easeOut"
            }), this.lastSteer = rightSteer + leftSteer) : rightSteer + leftSteer == -1 && this.lastSteer != -1 ? (this.rotTween && this.rotTween.kill(), this.rotTween = TweenLite.to(this, .5, {
                rotation: 8 * radian,
                ease: "Back.easeOut"
            }), this.strafeTween && this.strafeTween.kill(), this.strafeTween = TweenLite.to(this, 1, {
                x: -60,
                ease: "Quad.easeOut"
            }), this.lastSteer = rightSteer + leftSteer) : rightSteer + leftSteer == 0 && 0 != this.lastSteer && (this.rotTween && this.rotTween.kill(), this.rotTween = TweenLite.to(this, 1, {
                rotation: 0,
                ease: "Back.easeOut"
            }), this.strafeTween && this.strafeTween.kill(), this.strafeTween = TweenLite.to(this, 1, {
                x: 0,
                ease: "Back.easeOut"
            }), this.lastSteer = rightSteer + leftSteer) : 0 != controlMethod && 2 != controlMethod || (0 == manualSteering || levelOver ? (this.rotation -= (this.rotation - 0) * (3 * delta), this.x -= (this.x - 0) * (3 * delta)) : (this.rotation -= (this.rotation - 10 * -manualSteering * radian) * (10 * delta), this.x -= (this.x - 60 * manualSteering) * (5 * delta)))
        }, a.prototype.render = function() {
            ctx.save(), ctx.translate(canvas.width / 2 + this.x, canvas.height + this.crashY + this.jiggleY), ctx.rotate(this.rotation), ctx.scale(1.5, 1.5), ctx.drawImage(this.oBikeImgData.img, -this.oBikeImgData.img.width / 2, -this.oBikeImgData.img.height + 170 + this.aOffsetY[curBike]), ctx.restore()
        }, a
    }();
    a.Bike = t
}(Elements || (Elements = {}));
var Utils;
! function(a) {
    var t = function() {
        function a() {
            this.oTextData = {}, this.inc = 0, this.createTextObjects()
        }
        return a.prototype.createTextObjects = function() {
            for (var a in assetLib.textData.langText.text[curLang]) this.oTextData[a] = {}, this.oTextData[a].aLineData = this.getCharData(assetLib.textData.langText.text[curLang][a]["@text"], assetLib.textData.langText.text[curLang][a]["@fontId"]), this.oTextData[a].aLineWidths = this.getLineWidths(this.oTextData[a].aLineData), this.oTextData[a].blockWidth = this.getBlockWidth(this.oTextData[a].aLineData), this.oTextData[a].blockHeight = this.getBlockHeight(this.oTextData[a].aLineData, assetLib.textData.langText.text[curLang][a]["@fontId"]), this.oTextData[a].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][a]["@fontId"]].text.common["@lineHeight"]), this.oTextData[a].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][a]["@fontId"])
        }, a.prototype.getLineWidths = function(a) {
            for (var t, e = new Array, i = 0; i < a.length; i++) {
                t = 0;
                for (var s = 0; s < a[i].length; s++) t += parseInt(a[i][s]["@xadvance"]), 0 == s ? t -= parseInt(a[i][s]["@xoffset"]) : s == a[i].length - 1 && (t += parseInt(a[i][s]["@xoffset"]));
                e.push(t)
            }
            return e
        }, a.prototype.getBlockWidth = function(a) {
            for (var t, e = 0, i = 0; i < a.length; i++) {
                t = 0;
                for (var s = 0; s < a[i].length; s++) t += parseInt(a[i][s]["@xadvance"]), 0 == s ? t -= parseInt(a[i][s]["@xoffset"]) : s == a[i].length - 1 && (t += parseInt(a[i][s]["@xoffset"]));
                t > e && (e = t)
            }
            return e
        }, a.prototype.getBlockHeight = function(a, t) {
            return a.length * parseInt(assetLib.textData["fontData" + t].text.common["@lineHeight"])
        }, a.prototype.getCharData = function(a, t) {
            for (var e = new Array, i = 0; i < a.length; i++) {
                e[i] = new Array;
                for (var s = 0; s < a[i].length; s++)
                    for (var o = 0; o < assetLib.textData["fontData" + t].text.chars["char"].length; o++) a[i][s].charCodeAt() == assetLib.textData["fontData" + t].text.chars["char"][o]["@id"] && e[i].push(assetLib.textData["fontData" + t].text.chars["char"][o])
            }
            return e
        }, a.prototype.renderText = function(a) {
            var t, e = this.oTextData[a.text].aLineData,
                i = this.oTextData[a.text].oFontImgData,
                s = 0,
                o = 0,
                r = 0,
                h = 1,
                n = 0;
            a.lineOffsetY && (r = a.lineOffsetY), a.scale && (h = a.scale);
            var m = 1 * h;
            a.maxWidth && this.oTextData[a.text].blockWidth * h > a.maxWidth && (m = a.maxWidth / this.oTextData[a.text].blockWidth), a.anim && (this.inc += 7 * delta);
            for (var l = 0; l < e.length; l++) {
                t = 0, "centre" == a.alignX && (s = this.oTextData[a.text].aLineWidths[l] / 2), "centre" == a.alignY && (o = this.oTextData[a.text].blockHeight / 2 + r * (e.length - 1) / 2);
                for (var d = 0; d < e[l].length; d++) {
                    var g = e[l][d]["@x"],
                        c = e[l][d]["@y"],
                        u = e[l][d]["@width"],
                        I = e[l][d]["@height"];
                    a.anim && (n = Math.sin(this.inc + d / 2) * (I / 15 * m)), ctx.drawImage(i.img, g, c, u, I, a.x + (t + parseInt(e[l][d]["@xoffset"]) - s) * m, a.y + (parseInt(e[l][d]["@yoffset"]) + l * this.oTextData[a.text].lineHeight + l * r - o) * m + n, u * m, I * m), t += parseInt(e[l][d]["@xadvance"])
                }
            }
        }, a
    }();
    a.TextDisplay = t
}(Utils || (Utils = {}));
var Elements;
! function(a) {
    var t = function() {
        function a() {
            this.crashAlpha = 0, this.whooshAlpha = 0, this.speedSecsTimer = 0, this.bannerId = 0, this.bonusTimeX = -200, this.bonusTimeY = 95, this.coinJiggle = 0, this.chequeredFlagX = -1e3, this.scrollX = canvas.width * Math.random() * .8 + .1, this.beepTimeTarg = 600, this.oImgData = assetLib.getData("hudElements"), this.oNumbersImgData = assetLib.getData("numbers"), this.oCrashImgData = assetLib.getData("crash"), this.oWhooshImgData = assetLib.getData("whoosh"), this.oSunImgData = assetLib.getData("sun"), this.aBanners = new Array
        }
        return a.prototype.getBonusTime = function() {
            return 100 * Math.ceil(.85 * oGameData.time / 100)
        }, a.prototype.hitCheckPoint = function() {
            curTime += this.getBonusTime(), this.bonusType = 1, this.bonusTime = this.getBonusTime(), playSound("stageSuccess")
        }, a.prototype.setBonusTimeTween = function() {
            var a, t = this;
            canvas.width > 1.5 * canvas.height ? (this.bonusTimeY = 60, a = canvas.width / 2 + 82) : (this.bonusTimeY = 95, a = canvas.width / 2 - 45), this.bonusTimeX = -200, this.bonusTween && this.bonusTween.kill(), this.bonusTween = TweenLite.to(this, .3, {
                bonusTimeX: a,
                ease: "Back.easeOut",
                onComplete: function() {
                    t.bonusTween = TweenLite.to(t, .3, {
                        bonusTimeX: canvas.width + 200,
                        ease: "Back.easeIn",
                        delay: 1,
                        onComplete: function() {
                            t.bonusTimeX = -200
                        }
                    })
                }
            })
        }, a.prototype.addBanner = function(a) {
            switch (a) {
                case "coin":
                    playSound("coin0"), oGameData.coins += 25, this.coinJiggle = -200, TweenLite.to(this, 1, {
                        coinJiggle: 0,
                        ease: "Elastic.easeOut"
                    });
                    break;
                case "bonusCoin":
                    playSound("coin1"), oGameData.coins += 50, this.coinJiggle = -200, TweenLite.to(this, 1, {
                        coinJiggle: 0,
                        ease: "Elastic.easeOut"
                    });
                    break;
                case "overtakes":
                    playSound("closePass" + Math.floor(3 * Math.random())), 10 * Math.random() < 1 && playSound("horn" + Math.floor(2 * Math.random())), oGameData.overtakes += 1, curTime += 25, this.bonusType = 0, this.bonusTime = 25, this.setBonusTimeTween();
                    break;
                case "speedSecs":
                    oGameData.speedSecs += 1
            }
        }, a.prototype.showCrash = function() {
            this.crashAlpha = 1, this.whooshAlpha = 0, TweenLite.to(this, 1, {
                crashAlpha: 0,
                ease: "Quad.easeIn",
                delay: .5
            })
        }, a.prototype.showWhoosh = function(a) {
            this.whooshAlpha = Math.random() * (.2 * a) + .8 * a, isAccelerating = !0
        }, a.prototype.update = function() {
            isAccelerating ? (this.speedSecsTimer += delta, this.speedSecsTimer > 1 && (this.speedSecsTimer = 0, this.addBanner("speedSecs"))) : this.speedSecsTimer = 0
        }, a.prototype.render = function() {
            this.scrollX -= road.scrollInc * road.skyScale, this.scrollX < 1 * -canvas.width ? this.scrollX = 2 * canvas.width : this.scrollX > 2 * canvas.width && (this.scrollX = 1 * -canvas.width);
            var a = (canvas.width / 2 - Math.abs(this.scrollX - canvas.width / 2)) / (canvas.width / 2) * .5 + .5;
            if (ctx.drawImage(this.oSunImgData.img, 0, 0, this.oSunImgData.img.width, this.oSunImgData.img.height, this.scrollX - canvas.width / 2 * a, 0, canvas.width * a, canvas.height * a), this.whooshAlpha > 0) {
                ctx.save(), ctx.globalAlpha = this.whooshAlpha, this.whooshAlpha = .95 * this.whooshAlpha, this.whooshAlpha < .05 && (this.whooshAlpha = 0);
                var t, e;
                road.horizon <= canvas.height / 2 ? (t = 2 * (canvas.height - road.horizon), e = canvas.height - t) : (t = 2 * road.horizon, e = 0), ctx.drawImage(this.oWhooshImgData.img, 0, 0, this.oWhooshImgData.img.width, this.oWhooshImgData.img.height, 0, e, canvas.width, t), ctx.restore()
            } else isAccelerating = !1;
            var i = 0;
            isAccelerating && (i = 4 * Math.random() - 2);
            var s = this.oImgData.oData.oAtlasData[oImageIds.speedoPanel].x,
                o = this.oImgData.oData.oAtlasData[oImageIds.speedoPanel].y,
                r = this.oImgData.oData.oAtlasData[oImageIds.speedoPanel].width,
                h = this.oImgData.oData.oAtlasData[oImageIds.speedoPanel].height;
            if (ctx.drawImage(this.oImgData.img, s, o, r, h, canvas.width - r, 65 + i, r, h), isAccelerating) {
                var s = this.oImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIconHud].x,
                    o = this.oImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIconHud].y,
                    r = this.oImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIconHud].width,
                    h = this.oImgData.oData.oAtlasData[oImageIds.smallSpeedSecsIconHud].height;
                ctx.drawImage(this.oImgData.img, s, o, r, h, canvas.width - 50, 60 + i, r, h)
            }
            for (var n = Math.round(road.speed).toString(), a = .85, m = 0; m < n.length; m++) {
                var l = parseFloat(n.charAt(m)),
                    d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width + m * (numberSpace * a) - n.length * (numberSpace * a) - 63, 82 + i, this.oNumbersImgData.oData.spriteWidth * a, this.oNumbersImgData.oData.spriteHeight * a)
            }
            var s = this.oImgData.oData.oAtlasData[oImageIds.coinsPanel].x,
                o = this.oImgData.oData.oAtlasData[oImageIds.coinsPanel].y,
                r = this.oImgData.oData.oAtlasData[oImageIds.coinsPanel].width,
                h = this.oImgData.oData.oAtlasData[oImageIds.coinsPanel].height;
            ctx.drawImage(this.oImgData.img, s, o, r, h, 0, 65 + this.coinJiggle, r, h);
            for (var n = oGameData.coins.toString(), a = .85, m = 0; m < n.length; m++) {
                var l = parseFloat(n.charAt(m)),
                    d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 53 + m * (numberSpace * a), 82 + this.coinJiggle, this.oNumbersImgData.oData.spriteWidth * a, this.oNumbersImgData.oData.spriteHeight * a)
            }
            var s = this.oImgData.oData.oAtlasData[oImageIds.distPanel].x,
                o = this.oImgData.oData.oAtlasData[oImageIds.distPanel].y,
                r = this.oImgData.oData.oAtlasData[oImageIds.distPanel].width,
                h = this.oImgData.oData.oAtlasData[oImageIds.distPanel].height;
            if (ctx.drawImage(this.oImgData.img, s, o, r, h, canvas.width / 2 - r / 2, 5, r, h), curTime > 500 || Math.round(curTime / 25) % 2 == 0) {
                curTime <= this.beepTimeTarg && (playSound("beep"), this.beepTimeTarg -= 100);
                var l, c = Math.floor(curTime / 6e3).toString(),
                    u = Math.floor((curTime - 6e3 * Math.floor(curTime / 6e3)) / 100).toString();
                u.length < 2 && (u = "0" + u);
                var I = curTime.toString().charAt(curTime.toString().length - 2) + curTime.toString().charAt(curTime.toString().length - 1);
                I.length < 2 && (I = "0" + I);
                for (var m = 0; m < 2; m++) {
                    if (l = parseFloat(c.charAt(m)), c.length < 2) {
                        if (0 == m) continue;
                        l = parseFloat(c.charAt(0))
                    }
                    var d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                        g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 - 75, 46, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                }
                l = 10;
                var d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 - 75 + numberSpace, 46, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight);
                for (var m = 0; m < 2; m++) {
                    l = parseFloat(u.charAt(m));
                    var d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                        g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 - 75 + numberSpace + 28 + m * numberSpace, 46, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                }
                for (var m = 0; m < 2; m++) {
                    l = parseFloat(I.charAt(m));
                    var d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                        g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, canvas.width / 2 - 75 + 3 * numberSpace + 38 + m * numberSpace * .5, 46, .5 * this.oNumbersImgData.oData.spriteWidth, .5 * this.oNumbersImgData.oData.spriteHeight)
                }
            }
            var s = this.oImgData.oData.oAtlasData[oImageIds.bikeDistIcon].x,
                o = this.oImgData.oData.oAtlasData[oImageIds.bikeDistIcon].y,
                r = this.oImgData.oData.oAtlasData[oImageIds.bikeDistIcon].width,
                h = this.oImgData.oData.oAtlasData[oImageIds.bikeDistIcon].height;
            if (ctx.drawImage(this.oImgData.img, s, o, r, h, canvas.width / 2 - r / 2 - 95 + Math.min(189 * oGameData.dist, 189), 8.5, r, h), this.bonusTimeX > -100 && this.bonusTimeX < canvas.width + 100) {
                if (0 == this.bonusType) {
                    var s = this.oImgData.oData.oAtlasData[oImageIds.smallOvertakesIconHud].x,
                        o = this.oImgData.oData.oAtlasData[oImageIds.smallOvertakesIconHud].y,
                        r = this.oImgData.oData.oAtlasData[oImageIds.smallOvertakesIconHud].width,
                        h = this.oImgData.oData.oAtlasData[oImageIds.smallOvertakesIconHud].height;
                    ctx.drawImage(this.oImgData.img, s, o, r, h, this.bonusTimeX + 117, this.bonusTimeY, r, h)
                }
                var a = .75,
                    l = 13,
                    d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.bonusTimeX, this.bonusTimeY, this.oNumbersImgData.oData.spriteWidth * a, this.oNumbersImgData.oData.spriteHeight * a);
                var n = (this.bonusTime / 100).toString();
                n.length < 2 && (n = "0" + n);
                for (var p = 0; p < n.length; p++) {
                    var l;
                    l = "." == n.charAt(p) ? 11 : parseFloat(n.charAt(p));
                    var d = l * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                        g = Math.floor(l / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    ctx.drawImage(this.oNumbersImgData.img, d, g, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.bonusTimeX + p * (numberSpace * a) + numberSpace * a, this.bonusTimeY, this.oNumbersImgData.oData.spriteWidth * a, this.oNumbersImgData.oData.spriteHeight * a)
                }
            }
            if (levelOver) {
                var s = this.oImgData.oData.oAtlasData[oImageIds["raceEndMessage" + this.raceEndState]].x,
                    o = this.oImgData.oData.oAtlasData[oImageIds["raceEndMessage" + this.raceEndState]].y,
                    r = this.oImgData.oData.oAtlasData[oImageIds["raceEndMessage" + this.raceEndState]].width,
                    h = this.oImgData.oData.oAtlasData[oImageIds["raceEndMessage" + this.raceEndState]].height;
                ctx.drawImage(this.oImgData.img, s, o, r, h, canvas.width / 2 + this.chequeredFlagX - r / 2, canvas.height / 2 - h / 2 - 50, r, h)
            }
            this.crashAlpha > 0 && (ctx.save(), ctx.globalAlpha = this.crashAlpha, ctx.drawImage(this.oCrashImgData.img, 0, 0, this.oCrashImgData.img.width, this.oCrashImgData.img.height, 0, 0, canvas.width, canvas.height), ctx.restore())
        }, a
    }();
    a.Hud = t
}(Elements || (Elements = {}));
var __extends = this.__extends || function(a, t) {
        function e() {
            this.constructor = a
        }
        e.prototype = t.prototype, a.prototype = new e
    },
    Elements;
! function(a) {
    var t = function(a) {
        function t(t) {
            a.call(this, assetLib.getData(t), 20, 10, "spin"), this.coinHit = !1, this.typeId = "coin", this.coinId = t, this.offsetY = -60, this.scale = .01
        }
        return __extends(t, a), t.prototype.update = function() {
            a.prototype.updateAnimation.call(this, delta), this.speed = oLaneSpeeds["lane" + this.lane], this.rowNum > road.segNum - 5 && this.x > canvas.width / 2 + bike.x - 300 && this.x < canvas.width / 2 + bike.x + 300 && !this.coinHit && (this.coinHit = !0, hud.addBanner(this.coinId))
        }, t.prototype.render = function() {
            this.scaleX = this.scaleY = this.scale, a.prototype.renderSimple.call(this, ctx)
        }, t
    }(Utils.AnimSprite);
    a.Coin = t
}(Elements || (Elements = {}));
var Elements;
! function(a) {
    var t = function() {
        function a(a, t) {
            this.oImgData = a, sceneryInc++;
            var e = oGameData.aSceneryOrderLeft[Math.min(Math.floor(10 * oGameData.dist), 9)];
            switch (1 == t && (e = oGameData.aSceneryOrderRight[Math.min(Math.floor(10 * oGameData.dist), 9)]), e) {
                case 0:
                    0 == t ? (this.sideMultiplier = 0 * -Math.random() - .1, this.bollardSideMultiplier = 1, this.offsetX = 1) : 1 == t ? (this.sideMultiplier = 0 * Math.random() + 1.1, this.bollardSideMultiplier = 0, this.offsetX = 0) : this.sideMultiplier = .5, this.shadowOffsetY = 0, this.offsetScale = 2 * Math.random() + 1, this.id = oImageIds["scenery" + e + Math.floor(2 * Math.random())];
                    break;
                case 1:
                    0 == t ? (this.sideMultiplier = .2 * -Math.random() - .1, this.bollardSideMultiplier = 1, this.offsetX = 2 / 3, this.id = oImageIds["scenery" + e + Math.floor(2 * Math.random()) + "l"]) : 1 == t ? (this.sideMultiplier = .2 * Math.random() + 1.1, this.bollardSideMultiplier = 0, this.offsetX = 1 / 3, this.id = oImageIds["scenery" + e + Math.floor(2 * Math.random()) + "r"]) : this.sideMultiplier = .5, this.shadowOffsetY = 0, this.offsetScale = 1 * Math.random() + .5;
                    break;
                case 2:
                    0 == t ? (this.sideMultiplier = 1 * -Math.random() - .1, this.bollardSideMultiplier = 1, this.offsetX = .5, this.id = oImageIds["scenery" + e + Math.floor(2 * Math.random())]) : 1 == t ? (this.sideMultiplier = 1 * Math.random() + 1.1, this.bollardSideMultiplier = 0, this.offsetX = .5, this.id = oImageIds["scenery" + e + Math.floor(2 * Math.random())]) : this.sideMultiplier = .5, this.shadowOffsetY = 0, this.offsetScale = .5 * Math.random() + .5;
                    break;
                case 3:
                    0 == t ? (this.sideMultiplier = 1.5 * -Math.random() - .1, this.bollardSideMultiplier = 1, this.offsetX = .5) : 1 == t ? (this.sideMultiplier = 1.5 * Math.random() + 1.1, this.bollardSideMultiplier = 0, this.offsetX = .5) : this.sideMultiplier = .5, this.id = oImageIds["scenery" + e + Math.floor(4 * Math.random())], this.shadowOffsetY = 0, this.offsetScale = .4 * Math.random() + .4;
                    break;
                case 4:
                    0 == t ? (this.sideMultiplier = .5 * -Math.random() - .2, this.bollardSideMultiplier = 1, this.offsetX = .5, this.id = oImageIds["scenery" + e + Math.floor(2 * Math.random())]) : 1 == t ? (this.sideMultiplier = .5 * Math.random() + 1.2, this.bollardSideMultiplier = 0, this.offsetX = .5, this.id = oImageIds["scenery" + e + Math.floor(2 * Math.random())]) : this.sideMultiplier = .5, this.shadowOffsetY = 0, this.offsetScale = .5 * Math.random() + .5
            }
            sceneryInc > 200 && (this.id = oImageIds.bridge, this.sideMultiplier = .5, this.offsetX = .5, this.offsetScale = 1, sceneryInc = 0), isBonusLevel ? this.bollardId = oImageIds["bollard" + Math.floor(bonusLevelNum / 6)] : this.bollardId = oImageIds["bollard" + Math.floor(levelNum / 6)], this.scale = .01, this.rowNum = vehicleStartRowNum
        }
        return a.prototype.render = function() {
            var a = this.oImgData.oData.oAtlasData[this.id].x,
                t = this.oImgData.oData.oAtlasData[this.id].y,
                e = this.oImgData.oData.oAtlasData[this.id].width,
                i = this.oImgData.oData.oAtlasData[this.id].height;
            ctx.drawImage(this.oImgData.img, a, t, e, i, this.x - this.scale * this.offsetScale * this.offsetX * e, this.y - this.scale * this.offsetScale * (i - this.shadowOffsetY), this.scale * this.offsetScale * e, this.scale * this.offsetScale * i)
        }, a.prototype.renderBollard = function() {
            var a = this.oImgData.oData.oAtlasData[this.bollardId].x,
                t = this.oImgData.oData.oAtlasData[this.bollardId].y,
                e = this.oImgData.oData.oAtlasData[this.bollardId].width,
                i = this.oImgData.oData.oAtlasData[this.bollardId].height;
            ctx.drawImage(this.oImgData.img, a, t, e, i, this.bollardX - .75 * this.scale * e / 2, this.y - .75 * this.scale * (i - 2), .75 * this.scale * e, .75 * this.scale * i)
        }, a
    }();
    a.Scenery = t
}(Elements || (Elements = {}));
var Utils;
! function(a) {
    var t = function() {
        function a(a) {
            this.dataGroupNum = 2, this.saveDataId = a, window.famobi = window.famobi ? window.famobi : {}, window.famobi.localStorage = window.famobi.localStorage ? window.famobi.localStorage : window.localStorage, window.famobi.sessionStorage = window.famobi.sessionStorage ? window.famobi.sessionStorage : window.sessionStorage, this.clearData(), this.setInitialData()
        }
        return a.prototype.clearData = function() {
            this.aLevelStore = new Array, this.aLevelStore.push(0), this.aLevelStore.push(0), this.aLevelStore.push(0), this.aLevelStore.push(0), this.aLevelStore.push(3), this.aLevelStore.push(1, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0), this.aLevelStore.push(0, 0, 0, 0, 0)
        }, a.prototype.resetData = function() {
            this.clearData(), this.saveData()
        }, a.prototype.getBikeUpgrade = function(a, t) {
            return this.aLevelStore[5 * a + 5 + t + 1]
        }, a.prototype.getControlState = function() {
            return this.aLevelStore[4]
        }, a.prototype.setControlState = function(a) {
            this.aLevelStore[4] = a
        }, a.prototype.getLatestBike = function() {
            for (var a = 0, t = 0; t < 9; t++) 1 == this.aLevelStore[5 * t + 5] && (a = t);
            return a
        }, a.prototype.getCalendarStatus = function() {
            var a = new Date;
            return this.aLevelStore[2] != a.getDate()
        }, a.prototype.setCalendarComplete = function() {
            var a = new Date;
            this.aLevelStore[2] = a.getDate()
        }, a.prototype.getLastUnlockedLevel = function() {
            return this.aLevelStore[3]
        }, a.prototype.setLevelComplete = function(a) {
            a + 1 > this.aLevelStore[3] && (this.aLevelStore[3] = a + 1)
        }, a.prototype.hasBike = function(a) {
            var t = !1;
            return 1 == this.aLevelStore[5 * a + 5] && (t = !0), t
        }, a.prototype.setTotalScore = function(a) {
            this.aLevelStore[0] = a
        }, a.prototype.setTotalCoins = function(a) {
            this.aLevelStore[1] = a
        }, a.prototype.addUpgrade = function(a, t) {
            this.aLevelStore[5 * a + 5 + t + 1]++
        }, a.prototype.addBike = function(a) {
            this.aLevelStore[5 * a + 5] = 1
        }, a.prototype.setInitialData = function() {
            if (null != window.famobi.localStorage.getItem(this.saveDataId) && "" != window.famobi.localStorage.getItem(this.saveDataId)) {
                this.aLevelStore = window.famobi.localStorage.getItem(this.saveDataId).split(",");
                for (var a in this.aLevelStore) this.aLevelStore[a] = parseInt(this.aLevelStore[a])
            } else this.saveData()
        }, a.prototype.setData = function(a, t) {
            for (var e = 0; e < t.length; e++)
                if (0 == this.aLevelStore.length || this.aLevelStore.length <= a * this.dataGroupNum + e) {
                    for (var i = 0; i < a * this.dataGroupNum + e - this.aLevelStore.length - 1; i++) this.aLevelStore.push(0);
                    this.aLevelStore.push(t[e])
                } else this.aLevelStore[a * this.dataGroupNum + e] = t[e]
        }, a.prototype.getData = function(a, t) {
            return this.aLevelStore[a * this.dataGroupNum + t]
        }, a.prototype.saveData = function() {
            for (var a = "", t = 0; t < this.aLevelStore.length; t++) a += this.aLevelStore[t], t < this.aLevelStore.length - 1 && (a += ",");
            window.famobi.localStorage.setItem(this.saveDataId, a)
        }, a
    }();
    a.SaveDataHandler = t
}(Utils || (Utils = {}));
var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60, (new Date).getTime())
        }
    }(),
    previousTime, canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    minSquareSize = 500,
    maxSquareSize = 700,
    canvasX, canvasY, canvasScale, div = document.getElementById("canvas-wrapper"),
    sound, music, audioType = 0,
    muted = !1,
    splashTimer = 0,
    assetLib, preAssetLib, isMobile = !1,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    isIE10 = !1,
    delta, radian = Math.PI / 180,
    ios9FirstTouch = !1,
    hasFocus = !0,
    saveDataHandler = new Utils.SaveDataHandler("famobihrev4"),
    famobiPauseActive = !1;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas(), window.onresize = function() {
    setTimeout(function() {
        resizeCanvas()
    }, 1)
}, window.onpageshow = function() {
    famobiPauseActive || (hasFocus || (userInput && userInput.checkKeyFocus(), muted || "pause" == gameState || "splash" == gameState || "loading" == gameState || (Howler.mute(!1), playMusic())), hasFocus = !0)
}, window.onpagehide = function() {
    famobiPauseActive || (hasFocus = !1, Howler.mute(!0), music.pause())
}, window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas()
    }, 0), window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            resizeCanvas()
        }, 500), setTimeout(function() {
            resizeCanvas()
        }, 2e3)
    }, !1)
});
var ua = navigator.userAgent,
    isSharpStock = /SHL24|SH-01F/i.test(ua) && isStock(),
    isXperiaAStock = /SO-04E/i.test(ua) && isStock(),
    isFujitsuStock = /F-01F/i.test(ua) && isStock();
isIE10 || isSharpStock || isXperiaAStock || isFujitsuStock || "undefined" == typeof window.AudioContext && "undefined" == typeof window.webkitAudioContext && navigator.userAgent.indexOf("Android") != -1 ? audioType = 0 : (audioType = 1, sound = new Howl({
    src: ["audio/sfx.mp3"],
    sprite: {
        beep: [0, 300],
        crash0: [500, 900],
        crash1: [1500, 900],
        scoreTotal1: [2500, 1400],
        overtake0: [4e3, 900],
        overtake1: [5500, 1300],
        overtake2: [7e3, 900],
        rev0: [8e3, 2200],
        horn0: [10500, 600],
        horn1: [11500, 600],
        buyUpgrade: [12500, 1e3],
        engine0: [14e3, 1e4],
        buyBike: [24500, 2700],
        rev1: [27500, 4e3],
        raceFail: [32e3, 1500],
        mapBut: [34e3, 2e3],
        closePass0: [36500, 1500],
        closePass1: [38500, 1500],
        closePass2: [40500, 1500],
        stageSuccess: [42500, 1800],
        inDraft: [44500, 1500],
        coin0: [46500, 1200],
        engine1: [48e3, 1e4],
        engine2: [58500, 1e4],
        click: [69e3, 700],
        scoreTotal0: [7e4, 2e3],
        raceStart: [72500, 2500],
        coin1: [75500, 1200],
        silence: [5e3, 200]
    }
}), music = new Howl({
    src: ["audio/music.mp3"],
    volume: 0,
    loop: !0
}));
var panel, background, totalScore = 0,
    totalCoins = 0,
    levelScore = 0,
    levelNum = 0,
    aTutorials = new Array,
    panelFrame, oLogoData = {},
    oLogoBut, musicTween, oImageIds = {},
    road, bike, leftSteer, rightSteer, controlMethod = 1,
    manualSteering = 0,
    dragState = 0,
    startDragX = 0,
    oTiltData = {
        gamma: 0,
        beta: 0,
        alpha: 0
    },
    hasTilt = !1,
    orientTestInc = 0,
    vehicleRate, vehicleRelease, aVehicles, aVehicleLanes, aLanePos = new Array(.15, .38, .62, .85),
    laneSpeed0, laneSpeed1, laneSpeed2, laneSpeed3, oLaneSpeeds, isAccelerating, hud, aBikeData = new Array({
        minSpeed: 120,
        maxSpeed: 135,
        steerRate: 6e3,
        accRate: .5,
        maxSteer: 1800,
        cost: 0,
        audio: 0
    }, {
        minSpeed: 125,
        maxSpeed: 140,
        steerRate: 7e3,
        accRate: .8,
        maxSteer: 1850,
        cost: 899,
        audio: 1
    }, {
        minSpeed: 130,
        maxSpeed: 145,
        steerRate: 8e3,
        accRate: 1,
        maxSteer: 2e3,
        cost: 2699,
        audio: 0
    }, {
        minSpeed: 137,
        maxSpeed: 147,
        steerRate: 8500,
        accRate: 1,
        maxSteer: 1900,
        cost: 4999,
        audio: 2
    }, {
        minSpeed: 140,
        maxSpeed: 155,
        steerRate: 9e3,
        accRate: 1.2,
        maxSteer: 2e3,
        cost: 7299,
        audio: 0
    }, {
        minSpeed: 145,
        maxSpeed: 160,
        steerRate: 8500,
        accRate: 1.7,
        maxSteer: 2e3,
        cost: 9999,
        audio: 2
    }, {
        minSpeed: 150,
        maxSpeed: 165,
        steerRate: 1e4,
        accRate: 2,
        maxSteer: 2200,
        cost: 12199,
        audio: 2
    }, {
        minSpeed: 155,
        maxSpeed: 170,
        steerRate: 11e3,
        accRate: 2.6,
        maxSteer: 2300,
        cost: 14999,
        audio: 1
    }, {
        minSpeed: 160,
        maxSpeed: 180,
        steerRate: 12e3,
        accRate: 3,
        maxSteer: 2500,
        cost: 17999,
        audio: 0
    }),
    aLevelData = new Array({
        dist: 2,
        area: 0,
        x: 137,
        y: 645,
        sky: 0,
        aScenery: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    }, {
        dist: 2,
        area: 0,
        x: 326,
        y: 688,
        sky: 1,
        aScenery: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2]
    }, {
        dist: 2,
        area: 0,
        x: 418,
        y: 858,
        sky: 2,
        aScenery: [0, 0, 0, 0, 0, 1, 1, 2, 3, 3]
    }, {
        dist: 2,
        area: 0,
        x: 168,
        y: 836,
        sky: 3,
        aScenery: [0, 0, 0, 0, 0, 0, 0, 2, 2, 2]
    }, {
        dist: 2,
        area: 0,
        x: 244,
        y: 993,
        sky: 4,
        aScenery: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3]
    }, {
        dist: 2,
        area: 0,
        x: 514,
        y: 980,
        sky: 0,
        aScenery: [0, 0, 0, 0, 0, 1, 1, 1, 3, 3]
    }, {
        dist: 2,
        area: 0,
        x: 677,
        y: 956,
        sky: 1,
        aScenery: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    }, {
        dist: 2,
        area: 0,
        x: 781,
        y: 990,
        sky: 2,
        aScenery: [1, 1, 1, 1, 1, 1, 0, 2, 2, 3]
    }, {
        dist: 2,
        area: 0,
        x: 851,
        y: 851,
        sky: 3,
        aScenery: [1, 1, 1, 1, 1, 1, 0, 0, 3, 3]
    }, {
        dist: 2,
        area: 0,
        x: 951,
        y: 932,
        sky: 4,
        aScenery: [1, 1, 1, 1, 1, 1, 0, 2, 2, 2]
    }, {
        dist: 2,
        area: 0,
        x: 1071,
        y: 987,
        sky: 0,
        aScenery: [1, 1, 1, 1, 1, 1, 2, 2, 3, 3]
    }, {
        dist: 2,
        area: 0,
        x: 1195,
        y: 903,
        sky: 1,
        aScenery: [1, 1, 1, 1, 1, 1, 0, 2, 3, 3]
    }, {
        dist: 2,
        area: 0,
        x: 1327,
        y: 843,
        sky: 2,
        aScenery: [2, 2, 2, 2, 2, 2, 2, 1, 1, 1]
    }, {
        dist: 2,
        area: 0,
        x: 1176,
        y: 683,
        sky: 3,
        aScenery: [2, 2, 2, 2, 2, 2, 0, 1, 3, 3]
    }, {
        dist: 2,
        area: 0,
        x: 1085,
        y: 497,
        sky: 4,
        aScenery: [2, 2, 2, 2, 2, 2, 0, 0, 4, 4]
    }, {
        dist: 2,
        area: 0,
        x: 913,
        y: 595,
        sky: 0,
        aScenery: [2, 2, 2, 2, 2, 2, 0, 1, 2, 2]
    }, {
        dist: 2,
        area: 0,
        x: 770,
        y: 677,
        sky: 1,
        aScenery: [2, 2, 2, 2, 2, 2, 0, 1, 4, 4]
    }, {
        dist: 2,
        area: 0,
        x: 684,
        y: 563,
        sky: 2,
        aScenery: [2, 2, 2, 2, 2, 2, 0, 0, 1, 1]
    }, {
        dist: 2,
        area: 0,
        x: 440,
        y: 483,
        sky: 3,
        aScenery: [3, 3, 3, 3, 3, 3, 3, 2, 2, 2]
    }, {
        dist: 2,
        area: 0,
        x: 228,
        y: 445,
        sky: 4,
        aScenery: [3, 3, 3, 3, 3, 3, 0, 0, 1, 2]
    }, {
        dist: 2,
        area: 0,
        x: 105,
        y: 334,
        sky: 0,
        aScenery: [3, 3, 3, 3, 3, 0, 0, 1, 1, 1]
    }, {
        dist: 2,
        area: 0,
        x: 308,
        y: 161,
        sky: 1,
        aScenery: [3, 3, 3, 3, 3, 3, 3, 3, 0, 0]
    }, {
        dist: 2,
        area: 0,
        x: 483,
        y: 177,
        sky: 2,
        aScenery: [3, 3, 3, 3, 3, 0, 1, 1, 2, 2]
    }, {
        dist: 2,
        area: 0,
        x: 677,
        y: 327,
        sky: 3,
        aScenery: [3, 3, 3, 3, 3, 3, 0, 1, 1, 2]
    }, {
        dist: 2,
        area: 0,
        x: 811,
        y: 99,
        sky: 4,
        aScenery: [4, 4, 4, 4, 4, 4, 4, 4, 2, 2]
    }, {
        dist: 2,
        area: 0,
        x: 933,
        y: 140,
        sky: 0,
        aScenery: [4, 4, 4, 4, 4, 4, 4, 4, 1, 2]
    }, {
        dist: 2,
        area: 0,
        x: 1083,
        y: 72,
        sky: 1,
        aScenery: [4, 4, 4, 4, 4, 4, 4, 4, 1, 1]
    }, {
        dist: 2,
        area: 0,
        x: 1249,
        y: 223,
        sky: 2,
        aScenery: [4, 4, 4, 4, 4, 4, 1, 1, 2, 2]
    }, {
        dist: 2,
        area: 0,
        x: 1370,
        y: 186,
        sky: 3,
        aScenery: [4, 4, 4, 4, 4, 4, 4, 4, 1, 2]
    }, {
        dist: 2,
        area: 0,
        x: 1511,
        y: 253,
        sky: 4,
        aScenery: [4, 4, 4, 4, 4, 4, 4, 1, 1, 1]
    }),
    oGameData = {},
    curTime, numberSpace = 29,
    curBike = 0,
    upgradeBaseCost = 50,
    upgradeInc = 5,
    upgradeBikeInc = 25,
    curBikeShopId = 0,
    aSkyColours = new Array("rgba(61, 84, 96, 1)", "rgba(13, 70, 153, 1)", "rgba(147, 167, 212, 1)", "#456aa1", "#134183"),
    aGroundColours = new Array("rgba(196, 139, 84, 1)", "rgba(114, 119, 70, 1)", "rgba(68, 49, 34, 1)", "#f4b76c", "#ffffff"),
    aFenceColours = new Array("#E0DFDE", "#E0DFDE", "#856034", "#3E362E", "#856034"),
    mapTouchFirst = !1,
    levelOver, isBonusLevel, bonusLevelNum, vehicleStartRowNum = 360,
    firstRun = !0,
    engineInc, lastWhooshLane = -1,
    laneTween0, laneTween1, laneTween2, laneTween3, sceneryInc;