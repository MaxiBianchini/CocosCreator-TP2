"use strict";
cc._RF.push(module, 'e9dd3I0kj9ADYUBaiFlK1oz', 'Personaje');
// Scripts/Personaje.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.MoverPlayer = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                this.Acelerar = 1;
                this.MaxVelocidad = 300;
                break;
            case cc.macro.KEY.space:
                this.Saltar = 1;
                break;
        }
    };
    NewClass.prototype.PararPlayer = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                this.Acelerar = 0;
                this.MaxVelocidad = 150;
                break;
            case cc.macro.KEY.space:
                this.Saltar = 0;
                break;
        }
    };
    NewClass.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (selfCollider.tag == 2) {
            this.TocandoSuelo = true;
        }
        if (otherCollider.tag == 1 || selfCollider.tag == 0) {
            this.Morir = true;
        }
    };
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 4) {
            this.Morir = true;
            this.node.parent.getComponent('Game').GameWin();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
        this.Vidas = 3;
        this.Saltar = 0;
        this.Acelerar = 0;
        this.MaxVelocidad = 150;
        this.FuerzaSalto = 85000;
        this.FuerzaCaminar = 2000;
        this.TocandoSuelo = false;
        this.Morir = false;
        this.Rigid_Body = this.node.getComponent(cc.RigidBody);
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if (this.Rigid_Body.linearVelocity.x < this.MaxVelocidad) {
            this.Rigid_Body.applyForceToCenter(cc.v2(1 * this.FuerzaCaminar, 0), true);
        }
        if (this.Acelerar == 0 && this.Rigid_Body.linearVelocity.x >= this.MaxVelocidad) {
            this.Rigid_Body.applyForceToCenter(cc.v2((-1) * this.FuerzaCaminar, 0), true);
        }
        if (this.TocandoSuelo && this.Saltar == 1) {
            this.Rigid_Body.applyForceToCenter(cc.v2(0, this.FuerzaSalto), true);
            this.TocandoSuelo = false;
        }
        if (this.Morir) {
            this.node.setPosition(cc.v2(-4720, -190));
            this.Vidas -= 1;
            this.Morir = false;
            this.node.parent.getComponent('Game').BajarPuntaje();
            this.node.parent.getComponent('Game').StringVidas();
            if (this.Vidas == 0) {
                this.node.parent.getComponent('Game').GameOver();
            }
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();