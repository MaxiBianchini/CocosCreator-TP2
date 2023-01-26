// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    Player:cc.Node  = null;

    @property(cc.TextAsset)
    FileTXT:cc.TextAsset = null;

    @property(cc.Label)
    score:cc.Label = null;

    @property(cc.Label)
    vida:cc.Label = null;

    playerScore:number;
    playervidas:number;


    BajarPuntaje(){

        this.playerScore -= 5;
        this.score.string = 'Score: '+ this.playerScore.toString();
    }

    StringVidas(){

        this.playervidas = this.Player.getComponent('Personaje').Vidas;
        this.vida.string = 'Vidas: '+ this.playervidas.toString();
        
    }

    gainScoreMoneda(){

        this.playerScore += 10;
        this.score.string = 'Score: '+ this.playerScore.toString();
    }

    GameOver(){

        this.FileTXT.text =  this.playerScore.toString();
        this.Player.stopAllActions();
        cc.director.loadScene('Game Over');
    }

    GameWin(){

        this.FileTXT.text =  this.playerScore.toString();
        this.Player.stopAllActions();
        cc.director.loadScene('Game Win');
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        let physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2 (0,-2000);

        this.playerScore = 0;;
        this.playervidas = 0;
    }

    start () {}

    update (dt) {}
}
