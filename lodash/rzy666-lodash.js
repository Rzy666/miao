var rzy666 = {
  chunk: function (array, size) {
    var len = array.length
    if (len <= size) return array
    var result = []//设置两个空数组
    temp = []
    for (var i = 0; i < len; i++) {
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
  },

  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  difference: function (array, ...values) {
    var result = []

  },
  drop: function (array, n = 1) {
    let len = array.length
    var result = []
    if (n >= len) {
      return result
    }
    for (var i = n; i < len; i++) {
      result.push(array[i])
    }
    return result
  },
  dropRight: function (array, n = 1) {
    let len = array.length
    var result = []
    if (n >= len) {
      return result
    }
    for (var i = 0; i < len - n; i++) {
      result.push(array[i])
    }
    return result
  },
  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  flattenDeep: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++){
      if (!Array.isArray(array[i])) {
        result.push(array[i])
      } else {
        var time = flattenDeep(array[i])
        for (var j = 0; j < time.length; j++){
          result.push(time[j])
        }
      }
    }
    return result
  },
  flattenDepth: function (array, [depth = 1]) {
    if (depth == 0) {
       return  array.slice()
    }
    var res = []
    for (var i = 0; i < array.length; i++){
      if (Array.isArray(array[i])) {
        var item = flattenDepth(array[i],depth -1)
        for (var j = 0; j < item.length; j++){
          res.push(item[j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res

  },
  head: function (array) {
    return array[0]
  },
  indexOf: function (array, value, [fromIndex = 0]) {
    for (var i = fromIndex; i < array.length; i++){
      if (array[i] == value) {
          return i
        }
    }
    },
}
