var board = new Array()
var score = 0
var hasConflicted = new Array()
$(document).ready(function () {
  newgame()
})
function newgame() {
  init()
  generateOneNumber()
  generateOneNumber()
}

function init() {
for (var i = 0; i < 4; i++) { //对16个小格子进行赋值
    for (var j = 0; j < 4; j++) {
      var gridCell = $("#grid-cell-" + i + "-" + j) // 拿到相应的格子，取到其id
      gridCell.css("top", getPosTop(i, j))
      gridCell.css("left", getPosLeft(i, j))
    }
  }
  for (var i = 0; i < 4; i++){
    board[i] = new Array()
    hasConflicted[i] = new Array()
    for (var j = 0; j < 4; j++){
      board[i][j] = 0
      hasConflicted[i][j] = false
    }
  }
  updateBoardView()
  score = 0
  updateScore(score)
}
function updateBoardView() { //改变数字切换颜色
  $(".number-cell").remove()
  for (var i = 0; i < 4; i++){
    for (var j = 0; j < 4; j++){
      $("#grid-main").append('<div class = "number-cell" id = "number-cell-' + i + '-' + j + '"></div>')
      var theNumberCell = $("#number-cell-" + i + '-' + j)
      if (board[i][j] == 0) {
        theNumberCell.css('width', '0px')
        theNumberCell.css('height', '0px')
        theNumberCell.css('top', getPosTop(i, j) + 50)
        theNumberCell.css('left' ,getPosLeft(i,j) + 50)
      } else {
        theNumberCell.css('width', '100px')
        theNumberCell.css('height', '100px')
        theNumberCell.css('top',getPosTop(i, j))
        theNumberCell.css('left', getPosLeft(i, j))
        theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]))
        theNumberCell.css('color', getNumberColor(board[i][j]))
        theNumberCell.text(board[i][j])
      }
      hasConflicted[i][j] = false
    }
  }
}
function generateOneNumber() {
  if (nospace(board)) {
    return false
  }
  var randx = parseInt(Math.floor(Math.random() * 4))
  var randy = parseInt(Math.floor(Math.random() * 4))
  while (true) {
    if (board[randx][randy] == 0) {
      break
    }
    randx = parseInt(Math.floor(Math.random() * 4))
   randy = parseInt(Math.floor(Math.random() * 4))
  }
  var randNumber = Math.random() > 0.5 ? 2 : 4

  board[randx][randy] = randNumber
  showNumberWithAnimation(randx, randy, randNumber)
  return true
}



$(document).keydown(function (event) {
  switch (event.keyCode) {
    case 37:
      if (moveLeft()) {
        setTimeout("generateOneNumber()", 210)
        setTimeout("isgameover()", 300)
      }
      break;
    case 38:
      if (moveUp()) {
        setTimeout("generateOneNumber()", 210)
        setTimeout("isgameover()", 300)
      }
      break;
    case 39:
      if (moveRight()) {
        setTimeout("generateOneNumber()", 210)
        setTimeout("isgameover()", 300)
      }
      break;
    case 40:
      if (moveDown()) {
        setTimeout("generateOneNumber()", 210)
        setTimeout("isgameover()", 300)
      }
      break;
    default: break;
  }
})

function moveLeft() {
  if (!canMoveLeft(board)) {
    return false
  }

  for (var i = 0; i < 4; i++){
    for (var j = 1; j < 4; j++){
      if (board[i][j] != 0) {
        for (var k = 0; k < j; k++){
          if (board[i][k] == 0 && noBlockHorizontal(i, k, j, board)) {
            showMoveAnimation(i, j, i, k)
            board[i][k] = board[i][j]
            board[i][j] = 0
            continue
          } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicted[i][k]) {
            showMoveAnimation(i, j,i,k)
            board[i][k] += board[i][j]
            board[i][j] = 0
            score += board[i][k]
            updateScore(score)
            hasConflicted[i][k] = true
            continue
          }
        }
      }
    }
  }

  setTimeout("updateBoardView()", 200)
  return true
}

function isgameover() {
  if (nospace(board) && nomove(board)) {
    gameover()
  }
}
function gameover() {
  alert("Game over")
  console.log('123456789')
}

function moveRight() {
  if (!canMoveRight(board)) {
    return false
  }
  for (var i = 0; i < 4; i++){
    for (var j = 2; j >= 0; j--){
      if (board[i][j] != 0) {
        for (var k = 3; k > j; k--){
          if (board[i][k] == 0 && noBlockHorizontal(i, j, k, board)) {
            showMoveAnimation(i, j, i, k)
            board[i][k] = board[i][j]
            board[i][j] = 0
            continue
          } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, j, k, board) && !hasConflicted[i][k]) {
             showMoveAnimation(i, j, i, k)
             board[i][k] += board[i][j]
            board[i][j] = 0
            score += board[i][k]
            updateScore(score)
            hasConflicted[i][k] = true
            continue
          }
        }
      }
    }
  }
  setTimeout("updateBoardView()", 200);
  return true
}

function moveUp() {
  if (!canMoveUp(board)) {
    return false
  }
  for (var j = 0; j < 4; j++){
    for (var i = 1; i < 4; i++){
      if (board[i][j] != 0) {
         for (var k = 0; k < i; k++) { //遍历上面的每一项
          if (board[k][j] == 0 && noBlockVertical(j, k, i, board)) { //如果上面没有障碍物
            showMoveAnimation(i, j, k, j)
            board[k][j] = board[i][j]
            board[i][j] = 0
            continue
          } else if (board[k][j] == board[i][j] && noBlockVertical(j, k, i, board) && !hasConflicted[i][k]) { // 大的在后面
            showMoveAnimation(i, j, k, j)
            board[k][j] += board[i][j]
            board[i][j] = 0
            score += board[i][k]
            updateScore(score)
            hasConflicted[i][k] = true
            continue
          }
        }
      }
    }
  }
    setTimeout("updateBoardView()", 200)
    return true
}

function moveDown() {
  if (!canMoveDown(board)) {
    return false
  }
  for (var j = 0; j < 4; j++) {
    for (var i = 2; i >= 0; i--) {
      if (board[i][j] != 0) {
        for (var k = 3; k > i; k--) {
          if (board[k][j] == 0 && noBlockVertical(j, i, k, board)) {
            showMoveAnimation(i, j, k, j)
            board[k][j] = board[i][j]
            board[i][j] = 0
            continue
          } else if (board[k][j] == board[i][j] && noBlockVertical(j, k, i, board) && !hasConflicted[i][k]) {
            showMoveAnimation(i, j, k, j)
            board[k][j] += board[i][j]
            board[i][j] = 0
            score += board[i][k]
            updateScore(score)
            hasConflicted[i][k] = true

            continue
          }
        }
      }
    }
  }
  setTimeout("updateBoardView()", 200)
  return true

}
setInterval(() => {
  const NUMBERCELL = document.getElementsByClassName('number-cell')
  for (let i = 0; i < NUMBERCELL.length; i++) {
    if (NUMBERCELL[i].innerText.length >= 3) {
      NUMBERCELL[i].style.fontSize = '35px'
    }
  }
}, 1);
