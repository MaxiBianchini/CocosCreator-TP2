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
    PlayerNode:cc.Node = null;

    @property(cc.Node)
    Fondo:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {}

    update (dt) {

        let target_position = this.PlayerNode.getPosition();
        target_position.x = target_position.x + 200;
        target_position.y = cc.misc.clampf(target_position.y,0,220);

        let current_position = this.node.getPosition();

        current_position.lerp( target_position , 0.1 , current_position );

        this.node.setPosition(current_position);

        this.Fondo.setPosition(current_position.x/2,current_position.y/2);
    }
}
