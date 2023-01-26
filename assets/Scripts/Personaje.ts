// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    Vidas:number;

    Saltar:number;
    Acelerar:number;
    
    FuerzaSalto:number;
    MaxVelocidad:number;  
    FuerzaCaminar:number; 

    TocandoSuelo:boolean;
    Morir:boolean;

    Rigid_Body:cc.RigidBody;

    MoverPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.right:
                this.Acelerar = 1;
                this.MaxVelocidad = 300;
                break;
            case cc.macro.KEY.space:
                this.Saltar = 1;
                break;
        }
    }

    PararPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.right:
                this.Acelerar = 0;
                this.MaxVelocidad = 150;
                break;
            case cc.macro.KEY.space:
                this.Saltar = 0;
                break;
        }
    }

    onBeginContact(contact, selfCollider, otherCollider){

        if(selfCollider.tag == 2){
            this.TocandoSuelo = true;
        }

        if(otherCollider.tag == 1 || selfCollider.tag == 0){
            this.Morir = true;
        } 
    }

    onCollisionEnter(otherCollider,selfCollider){

        if(otherCollider.tag == 4){
            this.Morir = true;
            this.node.parent.getComponent('Game').GameWin();
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.PararPlayer,this);
        
        this.Vidas = 3;

        this.Saltar = 0;
        this.Acelerar = 0;
    
        this.MaxVelocidad = 150; 
        this.FuerzaSalto = 85000;
        this.FuerzaCaminar = 2000; 
    
        this.TocandoSuelo = false;
        this.Morir = false;

        this.Rigid_Body = this.node.getComponent(cc.RigidBody);
    }

    start () {}

    update (dt) {

        
        if(this.Rigid_Body.linearVelocity.x < this.MaxVelocidad){
           this.Rigid_Body.applyForceToCenter( cc.v2(1 * this.FuerzaCaminar,0), true);
        } 

        if(this.Acelerar == 0 && this.Rigid_Body.linearVelocity.x >= this.MaxVelocidad){
            this.Rigid_Body.applyForceToCenter( cc.v2((-1) * this.FuerzaCaminar,0), true);
        }

        if(this.TocandoSuelo && this.Saltar == 1){
            this.Rigid_Body.applyForceToCenter( cc.v2(0,this.FuerzaSalto) , true );
            this.TocandoSuelo = false;
        }
 
        if(this.Morir){

            this.node.setPosition(cc.v2 (-4720,-190));
            this.Vidas -= 1;
            this.Morir=false;
            this.node.parent.getComponent('Game').BajarPuntaje();
            this.node.parent.getComponent('Game').StringVidas();

            if(this.Vidas == 0){
                this.node.parent.getComponent('Game').GameOver();
            }
        }
    }
}
