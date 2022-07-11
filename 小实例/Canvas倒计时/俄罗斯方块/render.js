/**
 * 绘图函数
 */

//渲染全部游戏画面
function render() {
  clear();
  drawSidebar();
  let curPoints = data.curShape ? shape2points(data.curShape) : null;
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (data.board[r][c] === BLANK) drawBox(r, c, 'black', 'gray');
      else if (data.board[r][c] != BLANK) {
        //将当前控制的shape绘制为白色
        if (hasPoint(r, c, curPoints) && data.isMoving) {
          drawBox(r, c, 'white', 'gray');
        }
        //其他绘制为绿色
        else {
          drawBox(r, c, 'rgb(0,140,80)', 'black');
        }
      }
    }
  }
  if (data.isOver && data.lastTime != 0) drawGameoverBar();
}


//绘制侧边栏
function drawSidebar() {
  context.save();
  context.beginPath();
  let skyStyle = context.createRadialGradient(BOARD_WIDTH + 0.5 * SIDEBAR_WIDTH, CANVAS_HEIGHT, 0,
    BOARD_WIDTH + 0.5 * SIDEBAR_WIDTH, CANVAS_HEIGHT, CANVAS_HEIGHT);
  skyStyle.addColorStop(0, '#035');
  skyStyle.addColorStop(1, 'black');
  context.fillStyle = skyStyle;
  context.fillRect(BOARD_WIDTH, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //基准点
  let markX = BOARD_WIDTH + 5;
  let markY = 70;
  let dist = 100;
  drawText('NEXT:', markX, markY, 25, true);
  drawText('SCORE:', markX, markY + 1.5 * dist, 20);
  drawText('CLEANS:', markX, markY + 2.5 * dist, 20);
  drawText('TIME:', markX, markY + 3.5 * dist, 20);
  if (data.nextShape) drawNextShape();
  drawScore();
  drawCleans();
  drawTime();
  context.restore();
}

//绘制侧边栏文字
function drawText(text, x, y, fontSize = 20, isItalic = false, fillStyle = 'pink', textAlign = 'left') {
  context.save();
  context.textAlign = textAlign;
  context.textBaseLine = 'middle';
  let curFont = 'bold ' + fontSize + 'px' + ' Arial';
  if (isItalic) curFont = 'Italic ' + curFont;
  context.font = curFont;
  console.log(text, curFont)
  context.fillStyle = fillStyle; //#058
  context.fillText(text, x, y)
  context.restore();
}

//绘制分数
function drawScore() {
  let x = CANVAS_WIDTH - 5;
  let y = BOX_SIZE * 10;
  drawText(String(data.score), x, y, 25, false, 'yellow', 'right')
}

//绘制清空的层数
function drawCleans() {
  let x = CANVAS_WIDTH - 5;
  let y = BOX_SIZE * 14;
  drawText(String(data.cleans), x, y, 25, false, 'yellow', 'right')
}

//绘制游戏进行的时间
function drawTime() {
  if (data.isResetting || data.isOver) return;
  context.save();
  context.beginPath();
  context.beginPath();
  let newTime = String(new Date()).slice(16, 24);
  let x = BOARD_WIDTH + 0.5 * SIDEBAR_WIDTH;
  let y = 18 * BOX_SIZE;
  drawText(newTime, x, y, 20, false, 'white', 'center');
}

//在侧边栏绘制nextShape
function drawNextShape(fillStyle = 'rgb(95,80,70)') {
  if (!data.nextShape) return;
  let nextShape = {};
  nextShape.type = data.nextShape.type;
  nextShape.form = 0;
  nextShape.r = 4;
  nextShape.c = 11;
  let points = shape2points(nextShape);
  for (const [r, c] of points) {
    drawBox(r, c, fillStyle, 'white');
  }
}

//绘制矩形框
function strokeRect(x, y, w, h, strokeStyle = 'black', lineWidth = 1) {
  context.save();
  if (lineWidth) context.lineWidth = lineWidth;
  if (strokeStyle) context.strokeStyle = strokeStyle;
  context.strokeRect(x, y, w, h);
  context.restore();
}

//填充矩形
function fillRect(x, y, w, h, fillStyle = 'black') {
  context.save();
  if (fillStyle) context.fillStyle = fillStyle;
  context.fillRect(x, y, w, h);
  context.restore();
}

//绘制board[r][c]的小方块box
function drawBox(r, c, fillStyle = 'black', strokeStyle = 'white', lineWidth = 1) {
  let [x, y] = board2canvas(r, c);
  context.save();
  context.beginPath();
  fillRect(x, y, BOX_SIZE, BOX_SIZE, fillStyle);
  strokeRect(x, y, BOX_SIZE, BOX_SIZE, strokeStyle, lineWidth);
  context.fill();
  context.stroke();
  context.restore();
}



//绘制gameOver
function drawGameoverBar() {
  let x = 0.5 * BOARD_WIDTH;
  let y = 0.5 * CANVAS_HEIGHT;
  drawText('Game Over', x, y, 40, false, 'blue', 'center');
}

//清空canvas
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}