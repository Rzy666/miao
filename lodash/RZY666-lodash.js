var rzy666 = {
  chunk: function (array, size) {
    var len = array.length
    if (len <= size) return array
    var result = []//设置两个空数组
        temp = []
    for (var i = 0; i < len; i++){
      temp.push(array[i])//前面的数字存到第一个数组里
      if (temp.length == size) {//如果到了size个，就进入要输出的数组，之后在建立一个新数组
        result.push(temp)
        temp = []
      }
    }
     if (temp.length != 0) {//如果最后有剩余，不到size个push进去
       result.push(temp)
     }
    return result
  }

}
