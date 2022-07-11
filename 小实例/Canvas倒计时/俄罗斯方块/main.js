/**
 * 实现游戏主逻辑
 */

//先绘制board
render();

start();


//开始游戏
function start() {
  data = new TetrisData();
  data.isContinue = true;
  data.isMoving = true;
  data.isOver = false;
  requestAnimationFrame(play)
}

//游戏主逻辑
async function play(time) {
  if (data.isContinue && !data.curShape && !data.nextShape) {
    data.curShape = generateShape();
    data.nextShape = generateShape();
    addShape(data.curShape);
    render();
  }
  //每隔INTERVAL下落一格
  if (time - data.lastTime >= INTERVAL && data.isMoving && data.isContinue) {
    //console.log(data.curShape)
    data.lastTime = time;
    removeShape(data.curShape);
    //未碰撞时，下移shape
    if (!hasBottomCollision(data.curShape)) {
      data.curShape.r++;
    }
    addShape(data.curShape);
    //发生底部碰撞时
    if (hasBottomCollision(data.curShape)) {
      if (!data.bottomCollisionTime) data.bottomCollisionTime = Date.now();
      //活动时间
      else if (Date.now() - data.bottomCollisionTime >= 500) {
        data.isMoving = false;
        addShape(data.curShape);
        render();
        await sleep(20);
        clean();
        //执行清除
        data.bottomCollisionTime = null;
      }
      //如果shape的上部同时在上界外，则游戏结束
      if (hasTopCollision(data.curShape)) {
        //将最后一个shape加载到board上
        addShape(data.curShape);
        render();
        data.isContinue = false;
        data.isOver = true;
        data.isMoving = false;
      }
      //否则游戏仍然继续。当前shape放置完毕且完成消除后，放置下一个
      else if (!data.isMoving) {
        await sleep(300);
        if (data.isContinue) data.curShape = data.nextShape;
        data.nextShape = generateShape();
        data.isMoving = true;
      }
    }
    render();
  }
  if (!data.isOver) requestAnimationFrame(play)
}