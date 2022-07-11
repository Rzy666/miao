const { isArray, result } = require("lodash")

var rzy666 = function () {
  function chunk( array , size = 1) {
    if (array.length < size) {
      return array
    }
    var result = []
    var temp = []
    for (let i = 0; i < array.length; i++){
      temp.push(array[i])
      if (temp.length == size) {
        result.push(temp)
        temp = []
      }
    }
    if (temp.length != 0 ) {
      result.push(temp)
    }
    return result
  }
  function compact(array) {
    var result = []
    for (let i = 0; i < array.length; i++){
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }
  function concat(array, ...values) {
    let result = []
    var val = []
    val.push(...values)
    for (let i = 0; i < array.length; i++){
      result.push(array[i])
    }
    for (let j = 0; j < val.length; j++){

      if (Array.isArray(val[j])) {
        for (var k = 0; k < val[j].length; k++) {
          result.push(val[j][k])
        }
      } else {
        result.push(val[j])
      }
    }
    return result
  }
  function drop(array, n = 1) {
    var result = []
    if (n > array.length) {
      return result
    }
    return array.slice(n)
  }
  function dropRight(array, n = 1) {
    if (array.length < n) {
      return []
    }
    return array.slice(0 ,array.length - (n+1))
  }
  function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++){
      array[i] = value
    }
    return array

  }
  function flatten(ary) {
    return ary.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item)
      } else {
        result.push(item)
      }
      return result
    } , [])
  }
  function flattenDeep(ary) {
    return ary.reduce((result, item) => {
      if (Array.isArray(item)) {
        return result.concat(flattenDeep(item))
      }
      return result.concat(item)
    } ,[])
  }
  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    drop: drop,
    dropRight: dropRight,
    fill : fill,
    flatten: flatten,
  }
}()
