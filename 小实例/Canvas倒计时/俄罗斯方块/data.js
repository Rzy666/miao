/**
 * 游戏数据
 */

class TetrisData {
  constructor() {
    this.board = new Array(M).fill(0).map(() => new Array(K).fill(0));
    this.isContinue = false; //游戏是否继续
    this.isOver = true; //是否游戏结束
    this.curShape = null; //当前控制的图形 [axisX,axisY,type,form]
    this.nextShape = null; //下一个将生成的图形
    this.isMoving = false; //当前控制的图形是否在运动
    this.lastTime = 0;
    this.bottomCollisionTime = null; //上一次curShape与地面碰撞的时间
    this.score = 0;
    this.cleans = 0;
    this.isResetting = false;
    this.stars = null;
  }

}


let data = new TetrisData();