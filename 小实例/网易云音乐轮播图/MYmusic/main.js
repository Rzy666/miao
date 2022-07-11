let current_index = -1 //当前轮播图编号
let swipe_time = null // 自动播放的定时器
let links = [{
  'image': '../网易云/1.jpg',
  'target': '#1'
}, {
  'image': '../网易云/2.jpg',
  'target': '#2'
}, {
  'image': '../网易云/3.jpg',
  'target': '#3'
}, {
  'image': '../网易云/4.png',
  'target': '#4'
}, {
  'image': '../网易云/5.jpg',
  'target': '#5'
}, {
  'image': '../网易云/6.jpg',
  'target': '#6'
}] // 图片的链接
//操作需要用的元素
var swipe = document.getElementById('swipe')
var swipe_bg = document.getElementById('swipe_bg')
var swipe_img_box = document.getElementById('swipe_img_box')
var swipe_link = document.getElementById('swipe_link')
var swipe_img = document.getElementById('swipe_img')
var swipe_select = document.getElementById('swipe_select')
var swipe_btn_left = document.getElementById('swipe_btn_left')
var swipe_btn_right = document.getElementById('swipe_btn_right')


let Select = (index) => { //切换图片
  stop() // 切换新图片
  index = Number(index) //图片编号转数字
  if (index >= links.length) {
    return
  }
  if (current_index == index) {
    return
  }
  if (current_index > -1) { //如果大于-1 就取消默认选中的样式
    swipe_select.children[current_index].classList.remove('checked')
  }
  current_index = index //图片编号变成选入的序号

  let current_link = links[current_index] // 根据序号得到要切换的图片信息

  swipe_bg.style.backgroundImage = 'url(' + current_link.image + ')' //更换背景图片
  swipe_img.setAttribute('src', current_link.image) // 更换轮播图的图片
  swipe_link.setAttribute('href', current_link.target) // 更换轮播图的链接
  swipe_select.children[current_index].classList.add('checked') // 图片下面对应的点 显示被点击
}


//自动切换图片
let autoSelect = (index) => {
  index = Number(index) // 图片序列号转为数字
  if (index >= links.length) { //边缘情况！如果大于图片的长度返回
    return
  }
  if (current_index == index) { //边缘情况！如果是当前图片返回
    return
  }
  swipe_select.children[current_index].classList.remove('checked') //取消之前图片的被点击状态
  current_index = index //得到新的序列号
  let current_link = links[current_index] //得到新图片

  swipe_img.style.transition = 'opacity 0.5s ease-in 0s'  //图片变化时候的模糊渐变
  swipe_img.style.opacity = 0.2 // 透明度变为.2

  setTimeout(() => { //自动播放
    swipe_bg.style.backgroundImage = 'url(' + current_link.image + ')' //背景图片转换
    swipe_img.setAttribute('src', current_link.image)//展示图片更换属性，设置渐变
    swipe_img.setAttribute('href', current_link.target)
    swipe_img.style.transition = 'opacity 0.7s ease-in 0s' //过度动画
    swipe_img.style.opacity = 1 //新图片显示不透明

    if (!document.querySelector('.swipe .checked')) {
      swipe_select.children[current_index].style.transition = 'background-color 0.5s' //指示器颜色变化
      swipe_select.children[current_index].classList.add('checked') //指示器
    }
  }, 500)

}

let play = () => {
  swipe_time = setInterval(() => { //每隔三秒自动播放
    let index = current_index + 1 // 图片序号
    if (index >= links.length) { //如果超过最后一张 返回第一张
      index = 0
    }
    autoSelect(index) //自动播放
  }, 3000)
}
let stop = () => {//如果有时间，清空时间，
  if (swipe_time) {
    clearInterval(swipe_time)
    swipe_time = null
  }
}

let init = () => {
  for (let i = 0; i < links.length; i++) { //根据图片的数量 建立小指示器
    let item = document.createElement('a') //创建指示器
    item.setAttribute('class', 'item')
    item.setAttribute('href', '#')
    item.setAttribute('data-index', i) //指示器跟图片编号建立连接
    swipe_select.appendChild(item); //加入指示器
  }
  Select(0)
  bind() //绑定按键功能
  play()
}

let bind = () => {
  swipe_btn_left.addEventListener('click', () => { //绑定左边按钮
    let index = current_index - 1
    if (index < 0) {
      index = links.length - 1
    }
    Select(index)
  })
  swipe_btn_right.addEventListener('click', () => {//绑定右边按钮
    let index = current_index + 1
    if (index >= links.length) {
      index = 0
    }
    Select(index)
  })

  //循环给每一个指示器绑定click事件 点击切换图片
  for (let i = 0; i < links.length; i++){
    let element = swipe_select.children[i]
    element.addEventListener('click', (e) => {
      e.preventDefault()
      Select(e.target.dataset.index)
    })
  }
  swipe.addEventListener('mouseover', (e) => { //鼠标移进停止变化
    if (e.relatedTarget) {
      stop()
    }
  })

  swipe.addEventListener('mouseout', (e) => { //鼠标移出 开始播放
    if (e.relatedTarget) {
      play()
    }
  })
  swipe.addEventListener('mousemove', (e) => {
    stop()
  })
}

window.addEventListener('load', () => { //页面加载初始化
  init()
})
