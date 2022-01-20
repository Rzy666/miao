var rzy666 = function() {
  chunk: function chunk(array, size) {
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
  }

  compact: function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }

  difference: function difference(array, ...values) {
    var result = []

  }
  drop: function drop(array, n = 1) {
    let len = array.length
    var result = []
    if (n >= len) {
      return result
    }
    for (var i = n; i < len; i++) {
      result.push(array[i])
    }
    return result
  }
  dropRight: function dropRight(array, n = 1) {
    let len = array.length
    var result = []
    if (n >= len) {
      return result
    }
    for (var i = 0; i < len - n; i++) {
      result.push(array[i])
    }
    return result
  }
  flatten: function flatten(array) {
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
  }
  flatten: function flatten(ary){
    return ary.reduce((result , item) => {
      if (Array.isArray(item)) {
        result.push(...item)
      } else {
        result.push(item)
      }
      return result
    },[])
  }
  flattenDeep: function flattenDeep(array) {
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
  }
  flattenDepth: function flattenDepth(array, depth = 1) {
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

  }
  head: function head(array) {
    return array[0]
  }
  indexOf: function indexOf(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++){
      if (array[i] == value) {
          return i
        }
    }
    return -1
  }
  initial: function (array) {
    var res = []
    for (var i = 0; i < array.length - 1; i++){
      res.push(array[i])
    }
    return res
  }
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++){
      array[i] = value
    }
    return array
  }
  join: function (array, separator = ',') {
    var str = ''
    for (var i = 0; i < array.length; i++){
      if (i == array.length - 1) {
         str = str + array[i]
      } else {
        str = str + array[i] + separator
      }
    }
    return str
  }
  last: function (array) {
    var len = array.length - 1
    return array[len ]
  }
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--){
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
  pull :function (array, values) {
    var res = []
    for (var i = 0; i < array.length; i++){
      if (array[i] !== values) {
        res.push(array[i])
      }
    }
    return res
  }
  reverse: function (array) {
    var res  =  []
    for (var i = 0; i < array.length; i++){
      res.unshift(array[i])
    }
    return res
  }
  tail: function (array) {
    var res  = []
    for (var i = 1; i < array.length; i++){
      res.push(array[i])
    }
    return res
  }
  take: function (array, n = 1) {
    var res = []
    if (array.length <= n) {
      return array
    }
    for (var i = 0; i < n; i++){
    res.push(array[i])
    }
    return res
  }
  takeRight: function (array,n = 1) {
    if (n > array.length) {
      return array
    }
    var res = []
    for (var i = array.length - 1; i >= array.length - n; i--){
      res.unshift(array[i])
    }
    return res
  }
  uniq: function (array) {
    var map = {}
    var res = []
    for (var i = 0; i < array.length; i++){
      if (array[i] in map) {
       map[array[i]]++
      } else {
       map[array[i]] = 1
       res.push(array[i])
      }
    }
    return res
  }
  uniq : (ary) => Array.from( new Set(ary)),
  without: function (array, ...val) {
    var res = []
    array.forEach(item => {//遍历出数组的每一项
      if (!val.includes(item)){ //item的值不在val中
        res.push(item)
      }
    })
    return res
  }
  zip: function () {
    let res = []
    for (var i = 0; i < arguments[0].length; i++){
      res[i] = []
      for (var j = 0; j < arguments.length; j++){
        res[i][j] = arguments[j][i]
      }
    }
    return res
  }
  reduce: function (collection, iteratee = _.identity, accumulator) {
    let result = accumulator ?? 0
    for (let key in collection) {
      let valuer = collection[key]
      result = iteratee(result , valuer , key)
    }
    return result
  }
  size: function (collection) {
    let sum = 0
    for (let key in collection) {
      sum++
    }
    return sum
  }
  isBoolean: function (values) {
    let val = typeof(values)
    if (values === null) {
      return false
    }
    return val == "boolean"
  }
  isEmpty: function (value) {

  }
  toArray: function (value) {
    let res = []
    for (let key in value) {
      res.push(value[key])
    }
    return  res
  }
  max: function (array) {
    var max = array[0]
    if (max == null) {
      return undefined
    }
    for (var i = 0; i < array.length; i++){
      if (array[i] > max) {
        max = array[i]
      }
    }
     return max
  }
  sum: function(array) {
  return array.reduce((sum , val) => sum += val)
  }
  isNil: function (value) {
    return value == null|| value == undefined
  }
  isNull: function (value) {
    return value == null
  }
  isNumber: function (value) {
     return  typeof(value) === 'number'
  }
  toArray: function (value) {
    var res = []
    for (let key in value) {
      res.push(value[key])
    }
    return res
  }
  max: function(array) {
    if (array == null) {
      return undefined
    }
    var max = -Infinity
    for (var i = 0; i < array.length; i++){
      if (array[i] > max) {
              max =array[i]
      }
    }
    return max
  }
  repeat: (string = '', n = 1){
    let result =''
    for (var i = 0; i < string.length; i++) {
      result += string
    }
    return result
  }
  concat: function (array, ...ary) {
    for (var i in ary) {
      var p = ary[i]
      if (Array.isArray(p)) {
        for (let j in p {
        array.push(p[j])
      }
      } else {
        array.push(p)
    }
    }
    return array
  }
  union: function (...array) {
    var
  }

  return {
    chunk, compact, difference, drop, dropRight, flatten, flattenDeep, flattenDepth,
    head, indexOf, initial, fill, join, last, lastIndexOf, pull,
    reverse, tail, take, takeRight, uniq, without, zip, reduce, size, isBoolean, isEmpty, toArray, max, sum, isNil, isNull, isNumber,
    repeat, concat, union
  }

}()



