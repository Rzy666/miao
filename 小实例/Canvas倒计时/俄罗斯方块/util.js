/**
 * 辅助函数
 */

//判断当前点(r,c)是否在board上
function isPointInBoard(r, c) {
  return r >= 0 && r < M && c >= 0 && c < N;
}

//判断当前shape是否在board上
function isShapeInBoard(shape) {
  let points = shape2points(shape);
  for (const [r, c] of points) {
    if (!isPointInBoard(r, c)) return false;
  }
  return true;
}

//将board[r][c]转换为canvas坐标系下下左上顶点坐标(x,y)
function board2canvas(r, c) {
  let y = r * BOX_SIZE;
  let x = c * BOX_SIZE;
  return [x, y];
}

//随机生成shape，以[type,form,r,c]的形式存储  
function generateShape() {
  let shape = {};
  let type = Math.floor(Math.random() * 7) + 1;
  //初始中心坐标
  let [r, c] = [0, 0];
  //I
  if (type === I) {
    c = Math.floor((N - 4) / 2) + 1;
  }
  //O
  else if (type === O) {
    c = Math.floor((N - 2) / 2);
  }
  //S
  else if (type === S) {
    c = Math.floor((N - 3) / 2) + 2;
  }
  //其他
  else {
    c = Math.floor((N - 3) / 2) + 1;
  }
  shape.type = type;
  shape.form = 0;
  shape.r = r;
  shape.c = c;
  return shape;
}

//将图形信息[type,form,r,c]转化为4个box的board坐标,并返回
function shape2points(shape) {
  if (!shape) return null;
  let {
    type,
    form,
    r,
    c
  } = shape;
  //I
  if (type === I) {
    if (form === 0) {
      return [
        [r, c - 1],
        [r, c],
        [r, c + 1],
        [r, c + 2]
      ];
    }
    if (form === 1) {
      return [
        [r - 2, c],
        [r - 1, c],
        [r, c],
        [r + 1, c]
      ]
    }
  }
  //O
  if (type === O) {
    return [
      [r - 1, c],
      [r - 1, c + 1],
      [r, c],
      [r, c + 1]
    ]
  }
  //T
  if (type === T) {
    if (form === 0) {
      return [
        [r - 1, c],
        [r, c - 1],
        [r, c],
        [r, c + 1],
      ]
    }
    if (form === 1) {
      return [
        [r - 1, c],
        [r, c - 1],
        [r, c],
        [r + 1, c]
      ]
    }
    if (form === 2) {
      return [
        [r, c - 1],
        [r, c],
        [r, c + 1],
        [r + 1, c]
      ]
    }
    if (form === 3) {
      return [
        [r - 1, c],
        [r, c],
        [r, c + 1],
        [r + 1, c]
      ]
    }
  }
  //S
  if (type === S) {
    if (form === 0) {
      return [
        [r - 1, c],
        [r - 1, c + 1],
        [r, c - 1],
        [r, c]
      ]
    }
    if (form === 1) {
      return [
        [r - 1, c - 1],
        [r, c - 1],
        [r, c],
        [r + 1, c]
      ]
    }
  }
  //Z
  if (type === Z) {
    if (form === 0) {
      return [
        [r - 1, c - 1],
        [r - 1, c],
        [r, c],
        [r, c + 1]
      ]
    }
    if (form === 1) {
      return [
        [r - 1, c],
        [r, c - 1],
        [r, c],
        [r + 1, c - 1]
      ]
    }
  }
  //J
  if (type === J) {
    if (form === 0) {
      return [
        [r - 1, c - 1],
        [r, c - 1],
        [r, c],
        [r, c + 1]
      ]
    }
    if (form === 1) {
      return [
        [r - 1, c],
        [r, c],
        [r + 1, c - 1],
        [r + 1, c]
      ]
    }
    if (form === 2) {
      return [
        [r, c - 1],
        [r, c],
        [r, c + 1],
        [r + 1, c + 1]
      ]
    }
    if (form === 3) {
      return [
        [r - 1, c],
        [r - 1, c + 1],
        [r, c],
        [r + 1, c]
      ]
    }
  }
  //L
  if (type === L) {
    if (form === 0) {
      return [
        [r - 1, c + 1],
        [r, c - 1],
        [r, c],
        [r, c + 1]
      ]
    }
    if (form === 1) {
      return [
        [r - 1, c - 1],
        [r - 1, c],
        [r, c],
        [r + 1, c]
      ]
    }
    if (form === 2) {
      return [
        [r, c - 1],
        [r, c],
        [r, c + 1],
        [r + 1, c - 1]
      ]
    }
    if (form === 3) {
      return [
        [r - 1, c],
        [r, c],
        [r + 1, c],
        [r + 1, c + 1]
      ]
    }
  }
}


//将shape添加到board数组中
function addShape(shape) {
  let points = shape2points(shape);
  for (const [r, c] of points) {
    if (isPointInBoard(r, c)) {
      data.board[r][c] = shape.type;
    }
  }
}

//board数组抹去shape信息
function removeShape(shape) {
  let points = shape2points(shape);
  for (const [r, c] of points) {
    if (isPointInBoard(r, c)) {
      data.board[r][c] = BLANK;
    }
  }
}

//将当前shape平移，返回是否平移成功
function translate(shape, dr, dc) {
  //无法平移
  if (dr > 0 && dc === 0 && hasBottomCollision(shape)) return false; //下
  if (dr === 0 && dc < 0 && hasLeftCollision(shape)) return false; //左
  if (dr === 0 && dc > 0 && hasRightCollision(shape)) return false; //右
  //执行平移
  removeShape(shape);
  shape.r += dr;
  shape.c += dc;
  addShape(shape);
  return true;
}


//将当前shape旋转，每执行一次将curShape变更一次姿态，同时更新canvas
function rotate() {
  let rotatedShape = {};
  rotatedShape.type = data.curShape.type;
  rotatedShape.form = (data.curShape.form + 1) % FORMS[rotatedShape.type];
  rotatedShape.r = data.curShape.r;
  rotatedShape.c = data.curShape.c;
  //无法旋转
  if (isOverlap(rotatedShape)) return false;
  //执行旋转
  removeShape(data.curShape);
  data.curShape = rotatedShape;
  addShape(data.curShape);
  render();
  return true;
}

//判断points是否包含点(r,c)
function hasPoint(r, c, points) {
  if (!points) return false;
  for (const [pr, pc] of points) {
    if (r === pr && c === pc) {
      return true;
    }
  }
  return false;
}


//上碰撞
function hasTopCollision(shape) {
  let points = shape2points(shape);
  for (const [r, c] of points) {
    let newR = r - 1;
    if (newR < 0) return true;
  }
  return false;
}

//下碰撞
function hasBottomCollision(shape) {
  let points = shape2points(shape);
  for (const [r, c] of points) {
    let newR = r + 1;
    let newC = c;
    if (!hasPoint(newR, newC, points)) {
      if (newR >= M || (isPointInBoard(newR, newC) && data.board[newR][newC] != BLANK)) {
        //console.log(newR, newC, data.board[newR][newC])
        return true;
      }
    }
  }
  return false;
}

//左碰撞
function hasLeftCollision(shape) {
  let points = shape2points(shape);
  for (const [r, c] of points) {
    let newR = r;
    let newC = c - 1;
    if (!hasPoint(newR, newC, points)) {
      if (newC < 0 || (isPointInBoard(newR, newC) && data.board[newR][newC] != BLANK)) {
        //console.log(newR, newC, data.board[newR][newC])
        return true;
      }
    }
  }
  return false;
}

//右碰撞
function hasRightCollision(shape) {
  let points = shape2points(shape);
  for (const [r, c] of points) {
    let newR = r;
    let newC = c + 1;
    if (!hasPoint(newR, newC, points)) {
      if (newC >= N || (isPointInBoard(newR, newC) && data.board[newR][newC] != BLANK)) {
        //console.log(newR, newC, data.board[newR][newC])
        return true;
      }
    }
  }
  return false;
}

//检测当前图形是否与其他图形重叠或越界
function isOverlap(shape) {
  let points = shape2points(shape)
  for (const [r, c] of points) {
    if (!hasPoint(r, c, shape2points(data.curShape))) {
      if (!isPointInBoard(r, c) || data.board[r][c] != BLANK) {
        return true;
      }
    }
  }
  return false;
}

//检查当前board，将能消除的行全部消除，修改数组同时更新canvas
async function clean() {
  //存放可消除的行的行号
  let rows = [];
  //标记当前行是否填满
  for (let r = 0; r < M; r++) {
    let isFill = true;
    for (let c = 0; c < N; c++) {
      if (data.board[r][c] === BLANK) {
        //console.log(data.board, r, c)
        isFill = false;
        break;
      }
    }
    if (isFill) rows.push(r);
  }
  //存在可消除行时
  if (rows.length > 0) {
    for (let n = 1; n <= 4; n++) {
      explosion(rows, n);
      await sleep(50);
    }
    for (const r of rows) {
      for (c = 0; c < N; c++) {
        data.board[r][c] = BLANK;
      }
    }
    let minLine = rows[0];
    let maxLine = rows[rows.length - 1];
    let depth = maxLine - minLine + 1;
    for (let r = minLine - 1; r >= 0; r--) {
      for (let c = 0; c < N; c++) {
        if (data.board[r][c] != BLANK) {
          data.board[r + depth][c] = data.board[r][c]
          data.board[r][c] = BLANK;
        }
      }
    }
    data.cleans += rows.length;
    data.score += SCORES[rows.length];
    render();
  }
}

//行消除后的爆炸效果
async function explosion(rows, n) {
  let minR = rows[0];
  let maxR = rows[rows.length - 1];
  for (let r = minR; r <= maxR; r++) {
    for (let c = 0; c < N; c++) {
      drawBox(r, c, 'black', 'gray');
      for (let i = 0; i < Math.floor(100 / n); i++) {
        drawPointsInBox(r, c, n);
      }
    }
  }
}

//绘制爆炸碎片
function drawPointsInBox(r, c, n) {
  let [x, y] = board2canvas(r, c);
  context.save();
  context.beginPath();
  let cx = x + BOX_SIZE * Math.random();
  let cy = y + BOX_SIZE * Math.random();
  let radius = (5 - n) * Math.random();
  context.arc(cx, cy, radius, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();
  context.restore();
}



//休眠
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}