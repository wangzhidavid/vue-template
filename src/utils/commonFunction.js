
class CommonFunction {
  /**
   *判断数据类型
  */
  static judgment_type(typeParams){
    return Object.prototype.toString.call(typeParams);   
    // example 
    // console.log(Object.prototype.toString.call("jerry"));//[object String]
    // console.log(Object.prototype.toString.call(12));//[object Number]
    // console.log(Object.prototype.toString.call(true));//[object Boolean]
    // console.log(Object.prototype.toString.call(undefined));//[object Undefined]
    // console.log(Object.prototype.toString.call(null));//[object Null]
    // console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
    // console.log(Object.prototype.toString.call(function(){}));//[object Function]
    // console.log(Object.prototype.toString.call([]));//[object Array]
    // console.log(Object.prototype.toString.call(new Date));//[object Date]
    // console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
    // function Person(){}; console.log(Object.prototype.toString.call(new Person));//[object Object]
  }
  /**
    *格式化时间
    *yyyy-MM-dd hh:mm:ss
  */
  static formatDate(time, fmt) {
    if (time === undefined || '') {
      return
    }
    const date = new Date(time)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : `${('00' + str).substr(str.length)}`)
      }
    }
    return fmt
  }
}

export default CommonFunction;