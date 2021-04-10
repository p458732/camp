import Main from './main';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Hero extends cc.Component {

  @property(Main)
  private gameManager: Main = null;

  private anim: cc.Animation;

  private stepX: number = 0;

  private stepY: number = 0;



  async onLoad() { }

  public setStep(x: number, y: number) {
    this.stepX = x;
    this.stepY = y;
  }

  /**
 * 碰撞產生時調用
 * @param  {Collider} other 
 * @param  {Collider} self  
 */
  onCollisionEnter(other, self) {
    if (other.node.group === "Score") {
      this.gameManager.addScore(other.node.getComponent("score").scoreNum);
      other.node.removeFromParent();
    }
  }

  async rightMove() {
    return new Promise((resolve, reject) => {
      this.anim = this.node.getComponent(cc.Animation);

      this.anim.play("right");
      cc.tween(this.node)
        .to(0.5, { position: cc.v3(this.node.x + this.stepX, this.node.y, 0) })
        .delay(0.5)
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
      cc.tween(this.node)
        .to(0.5, { position: cc.v3(this.node.x, this.node.y - this.stepY, 0) })
        .delay(0.5)
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
      cc.tween(this.node)
        .to(0.5, { position: cc.v3(this.node.x, this.node.y + this.stepY, 0) })
        .delay(0.5)
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
      cc.tween(this.node)
        .to(0.5, { position: cc.v3(this.node.x - this.stepX, this.node.y, 0) })
        .delay(0.5)
        .call(() => {
          resolve(0);
        })
        .start();
    });
  }

  // update (dt) {}
}
