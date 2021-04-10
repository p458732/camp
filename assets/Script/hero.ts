// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Hero extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  @property(cc.Node)
  hero: cc.Node = null;
  private anim: cc.Animation;
  async onLoad() {}

  start() {}
  async rightMove() {
    return new Promise((resolve, reject) => {
      this.anim = this.node.getComponent(cc.Animation);

      this.anim.play("right");
      cc.tween(this.hero)
        .to(1, { position: cc.v3(this.node.x + 50, this.node.y, 0) })
        .call(() => {
          resolve(0);
        })
        .start();
    });
  }
  async downMove() {
    return new Promise((resolve, reject) => {
      this.anim = this.node.getComponent(cc.Animation);

      this.anim.play("down");
      cc.tween(this.hero)
        .to(1, { position: cc.v3(this.node.x, this.node.y - 50, 0) })
        .call(() => {
          resolve(0);
        })
        .start();
    });
  }
  async upMove() {
    return new Promise((resolve, reject) => {
      this.anim = this.node.getComponent(cc.Animation);

      this.anim.play("up");
      cc.tween(this.hero)
        .to(1, { position: cc.v3(this.node.x, this.node.y - 50, 0) })
        .call(() => {
          resolve(0);
        })
        .start();
    });
  }
  async leftMove() {
    return new Promise((resolve, reject) => {
      this.anim = this.node.getComponent(cc.Animation);

      this.anim.play("left");
      cc.tween(this.hero)
        .to(1, { position: cc.v3(this.node.x, this.node.y - 50, 0) })
        .call(() => {
          resolve(0);
        })
        .start();
    });
  }

  // update (dt) {}
}
