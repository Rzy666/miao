
// const endTime =new Date(2022,3,2,16,55,55)//倒计时截至时间
var curShowTimeSeconds = 0 //到截至时间还有多少秒

var balls = [] //记录小球
const colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"]

window.onload = function () {
  WINDOW_width = document.body.clientWidth //获取宽度
  WINDOW_height= document.body.clientHeight//获取高度
  RADIUS = Math.round(WINDOW_width * 4 / 5 / 108) - 1 //获取圆的半径  占屏幕4/5
  LEFT = Math.round(WINDOW_width / 10) //左边开始的位置
  TOP = Math.round(WINDOW_height / 5) //开始的高度


  var canvas = document.getElementById('canvas') //找到画板

  var context = canvas.getContext('2d') //选择2d绘画
  canvas.width = WINDOW_width //画板宽高
  canvas.height =WINDOW_height

  curShowTimeSeconds = getCurrentShowTimeSeconds() // 获取当前时间


  setInterval(() => {

    render(context) //绘制画布
    update() //负责数据改变时间跟小球
  }, 50);
 }

function getCurrentShowTimeSeconds() {
  var curTime = new Date() // 当前时间
 //   var ret = endTime.getTime() - curTime.getTime() //截至时间减去当前时间的毫秒数/1000
 //   ret = Math.round(ret / 1000)

 //  return ret >=0? ret: 0

  var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds() //当前时间过了多少秒

  return ret
}
function update() {//记录时间的变化
  var nextShowTimeSeconds = getCurrentShowTimeSeconds() //记录下一秒的时间
  var nextHours = parseInt(nextShowTimeSeconds / 3600)
  var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60)
  var nextSeconds = nextShowTimeSeconds % 60

  var curHours = parseInt(curShowTimeSeconds / 3600)//旧的时间
  var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60)
  var curSeconds = curShowTimeSeconds % 60

  if (nextSeconds != curSeconds) {
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
        addBalls(LEFT, TOP ,parseInt(curHours/10))
    }
     if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
       addBalls(LEFT + 15*(RADIUS + 1), TOP, parseInt(curHours / 10))
     }

    if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
      addBalls(LEFT+ 39*(RADIUS+1),TOP , parseInt(curMinutes/10))
    }
    if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
      addBalls(LEFT + 54 * (RADIUS + 1), TOP, parseInt(curMinutes % 10))
    }

    if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
      addBalls(LEFT + 78 * (RADIUS + 1), TOP, parseInt(curSeconds / 10))
    }
    if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
      addBalls(LEFT + 93 * (RADIUS + 1), TOP, parseInt(curSeconds % 10))
    }
    curShowTimeSeconds = nextShowTimeSeconds
  }
  updateBalls()//对所有已经存在的小球的状态改变
}

function updateBalls() { //小球弹起状态
  for (var i = 0; i < balls.length; i++){
    balls[i].x += balls[i].vx //x轴的位置加x轴的速度值
    balls[i].y += balls[i].vy // y轴的位置加y轴的速度值
    balls[i].vy += balls[i].g// y的速度受到重力影响

    if (balls[i].y >= WINDOW_height - RADIUS) { //地板碰撞判定
      balls[i].y = WINDOW_height - RADIUS
      balls[i].vy = -balls[i].vy*0.75
    }
  }
  var cnt = 0
  for (var i = 0; i < balls.length; i++){ //如果在画面中的小球，记录下来重新赋值
    if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_width) {
      balls[cnt++] =balls[i]
    }
  }
  while (balls.length > Math.min(300, cnt)) { //如果小球超出画面中的小球就删掉
    balls.pop()
  }
}

function addBalls(x, y, num) { //每个小球变化的位置
  for (var i = 0; i < digit[num].length; i++){
    for (var j = 0; j < digit[num][i].length; j++){
      if (digit[num][i][j] == 1) {
        var aBall = {//创建动态小球
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          vy: -5,
          color: colors[Math.floor(Math.random()*colors.length)]
        }
        balls.push(aBall)
      }
    }
  }
}


function render(cxt) { //绘制画布

  cxt.clearRect(0,0,WINDOW_width,WINDOW_height) //对一个矩形空间进行刷新操作

  //得到时间的数字
  var hours = parseInt(curShowTimeSeconds/3600)
  var minutes = parseInt((curShowTimeSeconds - hours*3600)/60)
  var secends = parseInt(curShowTimeSeconds % 60)
  //
  renderDigit(LEFT, TOP, parseInt(hours / 10), cxt) //小时的十位 数字于数字之间差15个半径
  renderDigit(LEFT + 15 * (RADIUS + 1), TOP, parseInt(hours % 10), cxt) //小时的各位 数字于冒号之前差九个半径
  renderDigit(LEFT + 30 * (RADIUS + 1), TOP, 10, cxt) // 冒号

  renderDigit(LEFT + 39 * (RADIUS + 1), TOP, parseInt(minutes / 10), cxt)
  renderDigit(LEFT + 54 * (RADIUS + 1), TOP, parseInt(minutes % 10), cxt)
  renderDigit(LEFT + 69 * (RADIUS + 1), TOP, 10, cxt)

  renderDigit(LEFT + 78 * (RADIUS + 1), TOP, parseInt(secends / 10), cxt)
  renderDigit(LEFT + 93 * (RADIUS + 1), TOP, parseInt(secends % 10), cxt)

  for (var i = 0; i < balls.length; i++){
    cxt.fillStyle = balls[i].color
    cxt.beginPath()
    cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, Math.PI * 2, true)
    cxt.closePath()
    cxt.fill()
  }
 }


function renderDigit(x, y, num, cxt) { //绘制数字
  cxt.fillStyle = "rgb(0,102,153)"
  //遍历数字数组如果是1的话就绘出小球
  for (var i = 0; i < digit[num].length; i++){
    for (var j = 0; j < digit[num][i].length; j++){
      if (digit[num][i][j] == 1) {
        cxt.beginPath()
        cxt.arc(x+j*2*(RADIUS + 1) + (RADIUS+1),y+i*2*(RADIUS+1) +(RADIUS+1), RADIUS , 0 , 2*Math.PI)
        cxt.closePath()

        cxt.fill()
      }
    }
  }
}
