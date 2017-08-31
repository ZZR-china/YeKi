/**
 * Module description: 时间处理模块
 */
const moment = require('moment');
const localTime = require('moment-timezone');

/**
 * [使用moment和localTime获取当前时间]
 * @return {[type]} [description]
 */
export function getTime() {
    return localTime.tz(moment(), "Asia/Shanghai");
}

/**
 * [获取当前的时间戳]
 * @return {[type]} [description]
 */
export function getTimeStampDefault() {
    let time = localTime.tz(moment(), "Asia/Shanghai").format("YYYY-MM-DD");
    return new Date(time).getTime()
}

/**
 * [获取当前的详细时间]
 * @return {[type]} [description]
 */
export function getTimeDetail() {
    const time = localTime.tz(moment(), "Asia/Shanghai"),
        year = time.format("YYYY"),
        month = time.format("MM"),
        day = time.format("DD")
    let format_time = {}
    format_time.year = Number(year)
    format_time.month = Number(month)
    format_time.day = Number(day)
    format_time.full = year + "-" + month + "-" + day
    return format_time
}

/**
 * [获取几天后时间]
 * @return {[type]} [description]
 */
export function getDateStr(AddDayCount, date) {
    let time = date ? new Date(date) : new Date()
    time.setDate(time.getDate() + AddDayCount)
    const y = time.getFullYear()
    const m = time.getMonth() + 1
    const d = time.getDate()
    return y + '-' + m + '-' + d;
}

/**
 * [判断两个时间那个靠后]
 * @return {[type]} [description]
 */
export function checkTwoDate(t1, t2) {
    t1 = new Date(t1).getTime()
    t2 = new Date(t2).getTime()
    return t1 > t2;
}

/**
 * [根据输入的time获取时间戳]
 * @return {[type]} [description]
 */
export function getTimeStamp(time) {
    time = isNaN(new Date(time).getTime()) ? 0 : new Date(time).getTime()
    return time;
}

/**
 * [格式化时间 like:2017-03-02 21:12]
 * @return {[type]} [description]
 */
export function manageString(str) {
  let date = new Date(str);
  let formate_time = {
      year: Number(date.getFullYear()),
      month: Number(date.getMonth()) + 1,
      day: Number(date.getMonth()),
      hour: Number(date.getHours()),
      minute: Number(date.getMinutes()),
      full: str
  };
  return formate_time;
}
