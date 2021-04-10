// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Score extends cc.Component {

  @property([cc.SpriteFrame])
  scoreFrame: cc.SpriteFrame[] = [];

  private ScoreNum: number = 0;
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}
  start() { }

  /**
   * 設定分數型態 0為一般分數 1為特殊分數
   * @param type 
   */
  setType(type: number) {
    this.node.getComponent(cc.Sprite).spriteFrame = this.scoreFrame[type];
    this.ScoreNum = (type === 0) ? 1 : 5;
  }

  public get scoreNum() {
    return this.ScoreNum;
  }

  // update (dt) {}
}
