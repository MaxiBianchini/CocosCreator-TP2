window.__require = function t(e, o, r) {
function n(i, a) {
if (!o[i]) {
if (!e[i]) {
var p = i.split("/");
p = p[p.length - 1];
if (!e[p]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(p, !0);
if (c) return c(p, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = p;
}
var u = o[i] = {
exports: {}
};
e[i][0].call(u.exports, function(t) {
return n(e[i][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < r.length; i++) n(r[i]);
return n;
}({
BanderaFinal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4aa99sUWOBP768ui7x1MDtE", "BanderaFinal");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.getComponent(cc.Animation).play();
};
e.prototype.start = function() {};
return c([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
FinalScore: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "802c5qz1v5ITKYbX8Vnycmc", "FinalScore");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = i.property, s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.FileTXT = null;
e.score = null;
return e;
}
e.prototype.onLoad = function() {
this.FileTXT.url = cc.url.raw("assets/Puntaje.txt");
this.score.string = "Final Score: " + this.FileTXT;
};
e.prototype.start = function() {};
c([ p(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
c([ p(cc.Label) ], e.prototype, "score", void 0);
return c([ a ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
Game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "54682B6X6dAWLBfuZRkcB60", "Game");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = i.property, s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Player = null;
e.FileTXT = null;
e.score = null;
e.vida = null;
return e;
}
e.prototype.BajarPuntaje = function() {
this.playerScore -= 5;
this.score.string = "Score: " + this.playerScore.toString();
};
e.prototype.StringVidas = function() {
this.playervidas = this.Player.getComponent("Personaje").Vidas;
this.vida.string = "Vidas: " + this.playervidas.toString();
};
e.prototype.gainScoreMoneda = function() {
this.playerScore += 10;
this.score.string = "Score: " + this.playerScore.toString();
};
e.prototype.GameOver = function() {
this.FileTXT.text = this.playerScore.toString();
this.Player.stopAllActions();
cc.director.loadScene("Game Over");
};
e.prototype.GameWin = function() {
this.FileTXT.text = this.playerScore.toString();
this.Player.stopAllActions();
cc.director.loadScene("Game Win");
};
e.prototype.onLoad = function() {
var t = cc.director.getPhysicsManager();
t.enabled = !0;
t.gravity = cc.v2(0, -2e3);
this.playerScore = 0;
this.playervidas = 0;
};
e.prototype.start = function() {};
e.prototype.update = function() {};
c([ p(cc.Node) ], e.prototype, "Player", void 0);
c([ p(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
c([ p(cc.Label) ], e.prototype, "score", void 0);
c([ p(cc.Label) ], e.prototype, "vida", void 0);
return c([ a ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
InstrButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7f9666xdahA4IS776MKASur", "InstrButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Instructions");
this.node.on("touchstart", function() {
cc.director.loadScene("Instructions");
});
};
e.prototype.start = function() {};
return c([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
MainCamera: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1fcd8/AA9JHwLpJKXOpnbpK", "MainCamera");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = i.property, s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.PlayerNode = null;
e.Fondo = null;
return e;
}
e.prototype.start = function() {};
e.prototype.update = function() {
var t = this.PlayerNode.getPosition();
t.x = t.x + 200;
t.y = cc.misc.clampf(t.y, 0, 220);
var e = this.node.getPosition();
e.lerp(t, .1, e);
this.node.setPosition(e);
this.Fondo.setPosition(e.x / 2, e.y / 2);
};
c([ p(cc.Node) ], e.prototype, "PlayerNode", void 0);
c([ p(cc.Node) ], e.prototype, "Fondo", void 0);
return c([ a ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
MenuButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "04b2cLJO2hNY7d+M/HJMgQO", "MenuButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Menu");
this.node.on("touchstart", function() {
cc.director.loadScene("Menu");
});
};
e.prototype.start = function() {};
return c([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
Moneda: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c698399bfVBvIgcvFwLs5B9", "Moneda");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t) {
if (0 == t.tag) {
this.node.parent.parent.getComponent("Game").gainScoreMoneda();
this.node.destroy();
}
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
e.prototype.onDestroy = function() {};
return c([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
Personaje: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e9dd3I0kj9ADYUBaiFlK1oz", "Personaje");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.right:
this.Acelerar = 1;
this.MaxVelocidad = 300;
break;

case cc.macro.KEY.space:
this.Saltar = 1;
}
};
e.prototype.PararPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.right:
this.Acelerar = 0;
this.MaxVelocidad = 150;
break;

case cc.macro.KEY.space:
this.Saltar = 0;
}
};
e.prototype.onBeginContact = function(t, e, o) {
2 == e.tag && (this.TocandoSuelo = !0);
1 != o.tag && 0 != e.tag || (this.Morir = !0);
};
e.prototype.onCollisionEnter = function(t) {
if (4 == t.tag) {
this.Morir = !0;
this.node.parent.getComponent("Game").GameWin();
}
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
this.Vidas = 3;
this.Saltar = 0;
this.Acelerar = 0;
this.MaxVelocidad = 150;
this.FuerzaSalto = 85e3;
this.FuerzaCaminar = 2e3;
this.TocandoSuelo = !1;
this.Morir = !1;
this.Rigid_Body = this.node.getComponent(cc.RigidBody);
};
e.prototype.start = function() {};
e.prototype.update = function() {
this.Rigid_Body.linearVelocity.x < this.MaxVelocidad && this.Rigid_Body.applyForceToCenter(cc.v2(1 * this.FuerzaCaminar, 0), !0);
0 == this.Acelerar && this.Rigid_Body.linearVelocity.x >= this.MaxVelocidad && this.Rigid_Body.applyForceToCenter(cc.v2(-1 * this.FuerzaCaminar, 0), !0);
if (this.TocandoSuelo && 1 == this.Saltar) {
this.Rigid_Body.applyForceToCenter(cc.v2(0, this.FuerzaSalto), !0);
this.TocandoSuelo = !1;
}
if (this.Morir) {
this.node.setPosition(cc.v2(-4720, -190));
this.Vidas -= 1;
this.Morir = !1;
this.node.parent.getComponent("Game").BajarPuntaje();
this.node.parent.getComponent("Game").StringVidas();
0 == this.Vidas && this.node.parent.getComponent("Game").GameOver();
}
};
return c([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ],
PlayButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "70d03q0SE5F5LTaxIQT1IR2", "PlayButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, i = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (i = (c < 3 ? n(i) : c > 3 ? n(e, o, i) : n(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Game");
this.node.on("touchstart", function() {
cc.director.loadScene("Game");
});
};
e.prototype.start = function() {};
return c([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "BanderaFinal", "FinalScore", "Game", "InstrButton", "MainCamera", "MenuButton", "Moneda", "Personaje", "PlayButton" ]);