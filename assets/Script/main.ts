const { ccclass, property } = cc._decorator;
import Hero from "./hero";
@ccclass
export default class Main extends cc.Component {
  @property(cc.Node)
  hero: cc.Node = null;

  @property(cc.Node)
  scores: cc.Node = null;

  @property(cc.Prefab)
  scorePrefab: cc.Prefab = null;

  @property(cc.Label)
  ScoreLabel: cc.Label = null;

  @property
  private stepX: number = 52;

  @property
  private stepY: number = 50;

  private heroManager: Hero = null;

  private totalScore: number = 0;

  onLoad() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true;
    this.generateScores();
    this.heroManager = this.hero.getComponent("hero");
    this.heroManager.setStep(this.stepX, this.stepY);
  }

  start() {
    this.totalScore = 0;
    this.ScoreLabel.string = `Score: ${this.totalScore}`;
    // init logic
  }

  // 學員控制
  async move() {
    for (let time = 0; time < 10; time = time + 1) {
      if (time === 5) {
        await this.downMove();
      } else {
        await this.rightMove();
      }
    }
  }

  public addScore(num: number) {
    this.totalScore += num;
    this.ScoreLabel.string = `Score: ${this.totalScore}`;
  }

  public resetScores() {
    this.scores.children.forEach((singleScore) => {
      singleScore.opacity = 255;
    });
  }
  // 生成分數位置
  private generateScores() {
    const startPos: cc.Vec3 = this.hero.position;
    for (let i = 1; i < 25; i++) {
      const score = cc.instantiate(this.scorePrefab);
      const type = i % 9 === 0 ? 1 : 0;
      score.getComponent("score").setType(type);
      if (i < 14)
        score.position = new cc.Vec3(
          startPos.x + this.stepX * i,
          startPos.y,
          startPos.z
        );
      else if (i < 19)
        score.position = new cc.Vec3(
          startPos.x + 13 * this.stepX,
          startPos.y - this.stepY * (i - 13),
          startPos.z
        );
      else
        score.position = new cc.Vec3(
          startPos.x + (31 - i) * this.stepX,
          startPos.y - this.stepY * 5,
          startPos.z
        );
      this.scores.addChild(score);
    }
  }
  private async rightMove() {
    await this.hero.getComponent("hero").rightMove();
  }
  private async upMove() {
    await this.hero.getComponent("hero").upMove();
  }
  private async downMove() {
    await this.hero.getComponent("hero").downMove();
  }
  private async leftMove() {
    await this.hero.getComponent("hero").leftMove();
  }
}
