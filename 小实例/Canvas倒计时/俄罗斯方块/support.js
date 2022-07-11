/**
 * 交互逻辑
 */


window.addEventListener('keydown', changeShape);
window.addEventListener('keydown', pause);
window.addEventListener('keydown', reset);
window.addEventListener('mousedown', detect);
window.addEventListener('keydown', startGame)

function detect(event) {
  let x = event.clientX - LEFT;
  let y = event.clientY - TOP;
  console.log(x, y)
}


//改变curShape位置或形态
function changeShape(event) {
  if (data.isContinue && data.isMoving && !data.isOver) {
    //旋转
    if (event.code === 'ArrowUp') {
      rotate();
    }
    //下
    if (event.code === 'ArrowDown') {
      if (translate(data.curShape, 1, 0)) render();
    }
    //左
    if (event.code === 'ArrowLeft') {
      if (translate(data.curShape, 0, -1)) render();
    }
    //右
    if (event.code === 'ArrowRight') {
      if (translate(data.curShape, 0, 1)) render();
    }
  }
}

//暂停游戏
function pause(event) {
  if (event.code === 'KeyP') {
    data.isContinue = !data.isContinue;
  }
}

//重新开局
async function reset(event) {
  if (event.code === 'KeyR' && !data.isResetting) {
    data = new TetrisData();
    data.isResetting = true;
    drawSidebar();
    resetAnimation();
  }
}

//绘制重开动画
async function resetAnimation() {
  //层叠效果
  for (let r = M - 1; r >= 0; r--) {
    if (r % 2 === 1) {
      for (let c = 0; c < N; c++) {
        drawBox(r, c, 'cyan', 'black');
        await sleep(10);
      }
    } else if (r % 2 === 0) {
      for (let c = N - 1; c >= 0; c--) {
        drawBox(r, c, 'cyan', 'black');
        await sleep(10);
      }
    }
  }

  //螺旋效果
  //定义四条边界
  let top = 0;
  let bottom = M - 1;
  let left = 0;
  let right = N - 1;
  //记录当前填的是第几个数 (1 ~ n^2) , 其中 i-1 个数已填入
  let i = 1;
  //总共需要填的数个数
  const total = M * N;
  //按层遍历，压缩边界
  while (i <= total) {
    //填最外层上边界
    for (let c = left; c <= right; c++) {
      i++;
      drawBox(top, c, 'black', 'gray');
      await sleep(10);
    }
    //削去上边界
    top++;
    //...右边界
    for (let r = top; r <= bottom; r++) {
      i++;
      drawBox(r, right, 'black', 'gray');
      await sleep(10);
    }
    right--;
    //...下边界
    for (let c = right; c >= left; c--) {
      i++;
      drawBox(bottom, c, 'black', 'gray');
      await sleep(10);
    }
    bottom--;
    //...左边界
    for (let r = bottom; r >= top; r--) {
      i++;
      drawBox(r, left, 'black', 'gray');
      await sleep(10);
    }
    left++;
  }
  //console.log(top, bottom)
  start();
}