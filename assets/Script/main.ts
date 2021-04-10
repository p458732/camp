const { ccclass, property } = cc._decorator;
import Hero from "./hero";
@ccclass
export default class Helloworld extends cc.Component {
  @property(cc.Node)
  hero: cc.Node = null;
  @property(cc.Node)
  scores: cc.Node = null;

  async onLoad() {
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        await this.hero.getComponent("hero").downMove();
      } else {
        await this.hero.getComponent("hero").rightMove();
      }
    }
  }
  start() {
    // init logic
  }
}
