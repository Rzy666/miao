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

  function pull(array, ...values) {
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      for (var key in values) {
        var k = values[key]
        if (k == item) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
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
  uniq: (ary) => Array.from(new Set(ary))

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

  function reduce(collection, iteratee, accumulator) {
    let result = accumulator ?? 0
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

  function isNumber(value) {
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
        for (let j in p) {
          array.push(p[j])
        }
      } else {
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

  function sortedIndex(array, value) {
    if (value <= array[0]) {
      return 0
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] < value && value <= array[i + 1]) {
        return i + 1
      }
    }
  }

  function isMatch(object, source) {
    for (var key in source) {
      if (source[key] && source[key] == 'object') {
        if (!isMatch(object[key], source[key])) {
          return false
        }
      } else {
        if (object[key] !== source[key]) {
          return false
        }
      }
    }
    return true
  }

  function property(name) {
    return function (obj) {
      return function (obj) {
        return obj[name]
      }
    }
  }

  function identity(val) {
    return val
  }

  function intersectionBy(array1, array2, predicate = _.identity) {
    var result = []
    var set = new Set(array2.map(predicate))
    for (var i = 0; i < array1.length; i++) {
      if (set.has(predicate(array1[i]))) {
        result.push(array1[i])
      }
    }
    return result
  }

  function intersection(array1, array2) {
    return intersectionBy(array1, array2)
  }

  function intersectionWith(array1, array2, comparor) {
    var result = []
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (comparor(array1[i], array2[j])) {
          result.push(array1[i])
        }
      }
    }
    return result
  }

  function filter(ary, predicate) {
    if (typeof predicate === 'string') {
      predicate = property(predicate)
    }
    if (Array.isArray(predicate)) {
      predicate = matchesProperty(...predicate)
    }
    if (predicate && typeof predicate === 'object') {
      predicate = matches(predicate)
    }
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (predicate(ary[i]), i) {
        result.push(ary[i])
      }
    }
    return result
  }

  function matches(target) {
    return function (obj) {
      for (var key in target) {
        if (obj[key] !== target[key]) {
          return false
        }
      }
      return true
    }
  }

  function iteratee(predicate) {
    if (typeof predicate === 'string') {
      predicate = property(predicate)
    }
    if (Array.isArray(predicate)) {
      predicate = matchesProperty(...predicate)
    }
    if (predicate && typeof predicate === 'object') {
      predicate = matches(predicate)
    }
    return predicate
  }

  function transformIteratee(f) {
    return function (...args) {
      var last = args.pop()
      var predicate = iteratee(last)
      return f(...args, predicate)
    }
  }

  function findKey(obj, predicate) {
    predicate = iteratee(predicate)

  }

  function matchesProperty(path, val) {
    return function (obj) {
      return isEqual(get(obj, path), val)
    }
  }

  function bind(func, thisArg, ...fixedArgs) {
    return function (...args) {
      var bindedArgs = fixedArgs.slice()
      var i = 0
      for (var j = 0; j < bindedArgs.length; j++) {
        if (bindedArgs[j] === _) {
          bindedArgs[j] = args[i++]
        }
      }
      bindedArgs.push(...args.slice(i))
      return func.apply(thisArg, bindedArgs)
    }
  }

  function ary(func, n = func.length) {
    return function (...args) {
      return func.call(this, ...args.slice(0, n))
    }
  }

  function unary(func) {
    return function (...args) {
      return func.call(this, ...args.slice(0, 1))
    }
  }

  function spread(f) {
    return function (ary) {
      return f.apply(null, ary)
    }
  }

  function before(n, func) {
    var c = 0
    var result
    return function (...args) {
      if (c < n) {
        result = func(...args)
        c++
      }
    }
    return result
  }

  function curry(f, n = f.length) { //绑定
    return function (...args) {
      if (args.length < n) {
        return curry(f.bind(null, ...args), n - args.length)
      } else {
        return f(...args)
      }
    }
  }

  function fromPairs(pairs) {
    var res = {}
    for (var key in pairs) {
      res[key[0]] = key[1]
    }
    return res
  }

  function pullAll(array, values) {
    return pull(array, ...values)
  }

  function pullAllWith(array, values, comparator) {
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      for (var j in values) {
        if (comparator(item, values[j])) {
          array.splice(i, 1)
          i--
        }
      }
    }
    return array
  }

  function sortedUniq(array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (!res.includes(array[i])) {
        res.push(array[i])
      }
    }
    return res
  }

  function sortedUniqBy(array, iteratee) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (!res.includes(iteratee(array[i]))) {
        res.push(array[i])
      }
    }
    return res
  }

  function takeRightWhile(array, predicate) {
    var pre = iteratee(predicate)
    var res = []
    for (var i = array.length - 1; i >= 0; i--) {
      if (pre(array[i])) {
        res.unshift(array[i])
      } else {
        break
      }
    }
    return res
  }

  function takeWhile(array, predicate) {
    var pre = iteratee(predicate)
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (pre(array[i])) {
        res.push(array[i])
      } else {
        break
      }
    }
    return res
  }

  function isEqual(value, other) {
    if (value === other) return true //基础类型
    if (value !== value && other !== other) return true //两边都是NaN
    if (Array.isArray(value) && Array.isArray(other)) {
      for (var i = 0; i < value.length; i++) {
        if (!isEqual(value[i], other[i])) return false
      }
      return true
    } // 两边都不是数组，都不是null， 都是对象的情况
    else if (!Array.isArray(value) && !Array.isArray(other) && value && other && typeof value == 'object' &&
      typeof other == 'object') {
      for (let key in value) {
        if (other[key] == undefined) return false
      }
      for (let key in other) {
        if (value[key] == undefined) return false
      }
      for (let key in value) {
        if (!isEqual(value[key], other[key])) return false
      }
      return true
    }
    return false
  }

  function union(...array) {
    var res = []
    for (let item of arguments) { //arguments 相当于吧传的参数作为一个数组
      for (let i of item) {
        if (!res.includes(i)) {
          res.push(i)
        }
      }
    }
    return res
  }

  function add(augend, addend) {
    return augend + addend
  }

  function ceil(number, precision = 0) {
    let base = Math.pow(10, precision)
    number = number * base
    var n = number % 1
    if (n > 0) number = (number >> 0) + 1
    number = number / base
    return number
  }

  function union(...arrays) {
    var res = []
    var a = []
    var ary = a.concat(...arrays)
    for (var i of ary) {
      if (!res.includes(i)) {
        res.push(i)
      }
    }
    return res
  }

  function unzip(array) {
    var res = []
    for (var i = 0; i < array[0].length; i++) {
      res[i] = []
      for (var j = 0; j < array.length; j++) {
        res[i][j] = array[j][i]
      }
    }
    return res
  }

  function countBy(obj, f) {
    var it = iteratee(f)
    var res = {}
    for (var key in obj) {
      var k = it(key)
      if (k in res) {
        res[k]++
      } else {
        res[k] = 1
      }
    }
    return res
  }

  function every(collection, predicate) {
    predicate = iteratee(predicate)
    for (var key in collection) {
      if (!predicate(collection[key])) {
        return false
      }
    }
    return true
  }

  function find(collection, predicate, fromIndex = 0) {
    var pre = iteratee(predicate)
    for (var i = fromPairs; i < collection.length; i++) {
      if (pre(collection[i])) return collection[i]
    }
    return undefined
  }

  function flatMap(collection, iteratee) {
    var res = []
    for (var key of collection) {
      res.push(...iteratee(key))
    }
    return res
  }

  function forEach(array, f) {
    for (var key of array) {
      f(array[i], i, array)
    }
    return array
  }

  function groupBy(collection, predicate) {
    var pre = iteratee(predicate)
    var map = {}
    for (var key in collection) {
      var k = pre(key)
      if (k in map) {
        map[k].push(collection[key])
      } else {
        map[k] = []
        map[k].push(collection[key])
      }
    }
    return map
  }

  function keyBy(collection, predicate = identity) {
    var pre = iteratee(predicate)
    var map = {}
    for (var i = 0; i < collection.length; i++) {
      var k = pre(collection[i])
      map[k] = collection[i]
    }
    return map
  }

  function map(collection, predicate) {
    var pre = iteratee(predicate)
    var res = []
    for (var key of collection) {
      res.push(pre(collection[key]))
    }
    return res
  }

  function partition(collection, predicate) {
    var pre = iteratee(predicate)
    var res = []
    var t = []
    var f = []
    for (var key in collection) {
      t.push(pre(collection[key]))
      f.push(!pre(collection[key]))
    }
    res.push(t, f)
    return res
  }
  function reduce(collection, f, init) {
    var k = object.keys(collection)
    var result = init
    var start = 0
    if (!init) {
      result = collection[k[0]]
      start = 1
    }
    for (var i = start; i < k.length; i++){
      result = f(result ,collection[k[i]] ,k[i])
    }
    return result
  }
  function reduceRight(obj, f, init) {
    var k = object.keys(obj)
    k.reverse()
    var result = init
    var start = 0
    if (!init) {
      result = obj[k[0]]
      start = 1
    }
    for (var i = start; i < k.length; i++){
      result = f(result , obj[k[i]] ,k[i])
    }
    return result
  }
  function reject(collection, predicate) {
    var pre = iteratee(predicate)
    var f = []
    for (var key in collection) {
      if (!pre(collection[key])) {
        f.push(collection[key])
      }
    }
    return f
  }
  function size(collection) {
    return collection.length || object.keys(collection).length
  }
  function some(collection, predicate) {
    var pre = iteratee(predicate)
    for (var key in collection) {
      if (pre(collection[key])) {
        return true
      }
    }
    return false
  }
  function castArray(value) {
    if (value.length === 0) return []
    if (!Array.isArray(value)) {
      return value
    } else {
      return [value]
    }
  }
  function isArguments(value) {
    return object.property.toString.call(value) === '[object Arguments]'
  }
  function isDate(val) {
    return toString.call(val) ===['object Date']
  }
  function isElement(value) {
   return toString.call(value) === 'htmlbodyelement'
  }
  function isEmpty(val) {
    if (typeof val == 'boolean' || typeof val == 'number' || typeof val == 'undefined' || typeof val == null || val != val) {
      return true
    } else {
      if (typeof val == 'object') {
        if (Array.isArray(val)) {
          if (val.length > 0) {
            return false
          } else {
            return true
          }
        } else {
          if (Object.keys(val).length > 0) {
            return false
          } else {
            return true
          }
        }
      }
    }
  }
  function isEqual(value, other) {
    if (value === other) return true
    if (Object.prototype.toString.call(value) == Object.prototype.toString.call(other)) {
      let v = Object.keys(value)
      let o = Object.keys(other)
      if (v.length !== o.length) return false
      for (var key in other) {
        if(!isEqual(value[key] ,other[key])) return false
      }
      return true
    }
    return false
  }
  function isFinite(value) {
    return typeof value == 'number' && value >-Infinity && value < Infinity
  }
  function isFunction(value) {
    return Object.prototype.toString.call(value) == '[object function]'
  }
  function isInteger(value) {
    return typeof value == 'number' && value - Math.floor(value) == 0
  }
  function isLength(value) {
    return isInteger(value) && value >-1
  }
  function isMap(value) {
    return value instanceof Map
  }
  function isMatch(object, source) {
    var k = Object.keys(source)
    for (var i of k) {
      if(!isMatch(object[i] ,source[i])) return false
    }
    return true
  }
   function isNaN(value) {
     if (typeof value == 'object') {
       value = value.valueOf()
     }
     return value != value
  }
  function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  }
  function isObject(val) {
    return  val != null && (typeof val === 'object' || typeof val === 'function')
  }
  function isRegExp(value) {
    return Object.prototype.toString.call(value) ==='[object RegExp]'
  }
  function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]'
  }
  function isUndefined(value) {
    return n === undefined
  }
 function min(array) {
   if (array == null) return undefined
   var mini = Infinity
   for (var k in array) {
     if (array[k] < mini) {
       mini = array[k]
     }
   }
   return mini
  }
  function sumBy(array, predicate) {
    var pre = iteratee(predicate)
    var result = 0
    for (var i = 0; i < array.length; i++){
      result += pre(array[i])
    }
    return result
  }
  function constant(value) {
    return function () {
      return value
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
    flattenDepth: flattenDepth,
    head: head,
    indexOf: indexOf,
    initial: initial,
    fill: fill,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    reverse: reverse,
    tail: tail,
    take: take,
    takeRight: takeRight,
    uniq: uniq,
    without: without,
    zip: zip,
    reduce: reduce,
    size: size,
    isBoolean: isBoolean,
    isEmpty: isEmpty,
    toArray: toArray,
    max: max,
    sum: sum,
    isNil: isNil,
    isNull: isNull,
    isNumber: isNumber,
    repeat: repeat,
    concat: concat,
    sortedIndex: sortedIndex,
    isMatch: isMatch,
    property: property,
    identity: identity,
    intersectionBy: intersectionBy,
    intersection: intersection,
    intersectionWith: intersectionWith,
    filter: filter,
    matches: matches,
    iteratee: iteratee,
    transformIteratee: transformIteratee,
    findKey: findKey,
    matchesProperty: matchesProperty,
    bind: bind,
    ary: ary,
    unary: unary,
    spread: spread,
    before: before,
    fromPairs: fromPairs,
    pullAll: pullAll,
    pullAllWith: pullAllWith,
    sortedUniq: sortedUniq,
    sortedUniqBy: sortedUniqBy,
    takeRightWhile: takeRightWhile,
    takeWhile: takeWhile,
    isEqual: isEqual,
    unzip: unzip,
    every: every,
    countBy: countBy,
    find: find,
    flatMap: flatMap,
    groupBy: groupBy,
    keyBy: keyBy,
    map: map,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    size: size,
    some: some,
    castArray: castArray,
    isArguments: isArguments,
    isDate: isDate,
    isElement: isElement,
    isEmpty: isEmpty,
    isEqual: isEqual,
    isFinite: isFinite,
    isFunction: isFunction,
    isInteger: isInteger,
    isLength: isLength,
    isMap: isMap,
    isMatch: isMatch,
    isNaN: isNaN,
    isNumber: isNumber,
    isObject: isObject,
    isString: isString,
    isRegExp: isRegExp,
    min: min,
    sumBy: sumBy,
    constant: constant

  }
}()
