var rzy666 = function () {
    function chunk(array, size) {
      var len = array.length
      if (len <= size) return array
      var result = [] //设置两个空数组
      temp = []
      for (var i = 0; i < len; i++) {
        temp.push(array[i]) //前面的数字存到第一个数组里
        if (temp.length == size) { //如果到了size个，就进入要输出的数组，之后在建立一个新数组
          result.push(temp)
          temp = []
        }
      }
      if (temp.length != 0) { //如果最后有剩余，不到size个push进去
        result.push(temp)
      }
      return result
    }

    function compact(array) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          result.push(array[i])
        }
      }
      return result
    }

    function difference(array, ...values) {
      var result = []

    }

    function drop(array, n = 1) {
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

    function dropRight(array, n = 1) {
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

    function flatten(array) {
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

    function flatten(ary) {
      return ary.reduce((result, item) => {
        if (Array.isArray(item)) {
          result.push(...item)
        } else {
          result.push(item)
        }
        return result
      }, [])
    }

    function flattenDeep(array) {
      var result = []
      for (var i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
          result.push(array[i])
        } else {
          var time = flattenDeep(array[i])
          for (var j = 0; j < time.length; j++) {
            result.push(time[j])
          }
        }
      }
      return result
    }

    function flattenDepth(array, depth = 1) {
      if (depth == 0) {
        return array.slice()
      }
      var res = []
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          var item = flattenDepth(array[i], depth - 1)
          for (var j = 0; j < item.length; j++) {
            res.push(item[j])
          }
        } else {
          res.push(array[i])
        }
      }
      return res

    }

    function head(array) {
      return array[0]
    }

    function indexOf(array, value, fromIndex = 0) {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }
      }
      return -1
    }

    function initial(array) {
      var res = []
      for (var i = 0; i < array.length - 1; i++) {
        res.push(array[i])
      }
      return res
    }

    function fill(array, value, start = 0, end = array.length) {
      for (var i = start; i < end; i++) {
        array[i] = value
      }
      return array
    }

    function join(array, separator = ',') {
      var str = ''
      for (var i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
          str = str + array[i]
        } else {
          str = str + array[i] + separator
        }
      }
      return str
    }

    function last(array) {
      var len = array.length - 1
      return array[len]
    }

    function lastIndexOf(array, value, fromIndex = array.length - 1) {
      for (var i = fromIndex; i >= 0; i--) {
        if (array[i] == value) {
          return i
        }
      }
      return -1
    }

    function pull(array, values) {
      var res = []
      for (var i = 0; i < array.length; i++) {
        if (array[i] !== values) {
          res.push(array[i])
        }
      }
      return res
    }

    function reverse(array) {
      var res = []
      for (var i = 0; i < array.length; i++) {
        res.unshift(array[i])
      }
      return res
    }

    function tail(array) {
      var res = []
      for (var i = 1; i < array.length; i++) {
        res.push(array[i])
      }
      return res
    }

    function take(array, n = 1) {
      var res = []
      if (array.length <= n) {
        return array
      }
      for (var i = 0; i < n; i++) {
        res.push(array[i])
      }
      return res
    }

    function takeRight(array, n = 1) {
      if (n > array.length) {
        return array
      }
      var res = []
      for (var i = array.length - 1; i >= array.length - n; i--) {
        res.unshift(array[i])
      }
      return res
    }

    function uniq(array) { //数组去重、
      var map = {}
      var res = []
      for (var i = 0; i < array.length; i++) {
        if (array[i] in map) {
          map[array[i]]++
        } else {
          map[array[i]] = 1
          res.push(array[i])
        }
      }
      return res
    }
    uniq: (ary) => Array.from(new Set(ary)),
      function without(array, ...val) {
        var res = []
        array.forEach(item => { //遍历出数组的每一项
          if (!val.includes(item)) { //item的值不在val中
            res.push(item)
          }
        })
        return res
      }

    function zip() {
      let res = []
      for (var i = 0; i < arguments[0].length; i++) {
        res[i] = []
        for (var j = 0; j < arguments.length; j++) {
          res[i][j] = arguments[j][i]
        }
      }
      return res
    }

    function reduce(collection, iteratee = _.identity, accumulator) {
      let result = accumulator ? ? 0
      for (let key in collection) {
        let valuer = collection[key]
        result = iteratee(result, valuer, key)
      }
      return result
    }

    function size(collection) {
      let sum = 0
      for (let key in collection) {
        sum++
      }
      return sum
    }

    function isBoolean(values) {
      let val = typeof (values)
      if (values === null) {
        return false
      }
      return val == "boolean"
    }

    function isEmpty(value) {

    }

    function toArray(value) {
      let res = []
      for (let key in value) {
        res.push(value[key])
      }
      return res
    }

    function max(array) {
      var max = array[0]
      if (max == null) {
        return undefined
      }
      for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i]
        }
      }
      return max
    }

    function sum(array) {
      return array.reduce((sum, val) => sum += val)
    }

    function isNil(value) {
      return value == null || value == undefined
    }

    function isNull(value) {
      return value == null
    }

    function isNUmber(value) {
      return typeof (value) === 'number'
    }

    function toArray(value) {
      var res = []
      for (let key in value) {
        res.push(value[key])
      }
      return res
    }

    function max(array) {
      if (array == null) {
        return undefined
      }
      var max = -Infinity
      for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i]
        }
      }
      return max
    }

    function repeat(string = '', n = 1) {
      let result = ''
      for (var i = 0; i < string.length; i++) {
        result += string
      }
      return result
    }

    function concat(array, ...ary) {
      for (var i in ary) {
        var p = ary[i]
        if (Array.isArray(p)) {
          for (let j in p {
              array.push(p[j])
            }
          }
          else {
            array.push(p)
          }
        }
        return array
      }

      function nth(array, n = 0) {
        if (n >= 0) {
          return array[n]
        } else {
          return array[array.length + n]
        }
      }



      return {

        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight,
        flatten: flatten,
        flattenDeep: flattenDeep,
        flattenDepth : flattenDepth,
        head: head,
        indexOf:indexOf,
        initial:initial,
        fill:fill,
        join:join,
        last:last,
        lastIndexOf:lastIndexOf,
        nth:nth,
        pull:pull,

        reverse : reverse,
        tail : tail,
        take : take,
        takeRight : takeRight,
        uniq : uniq,
        without : without,
        zip : zip,
        reduce : reduce,
        size : size,
        isBoolean : isBoolean,
        isEmpty : isEmpty,
        toArray : toArray,
        max : max,
        sum : sum,
        isNil : isNil,
        isNull : isNull,
        isNumber : isNumber,

        repeat : repeat,
        concat : concat

      }
    }()
