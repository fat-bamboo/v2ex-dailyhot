/**
 * 根据时间戳返回特殊格式化后的字符串，例如 2020-12-21
 * @param timestamp 时间戳，单位毫秒
 */
export function formatDate(timestamp: number): string{
  const tempData = new Date(timestamp);

  return `${tempData.getFullYear()}-${tempData.getMonth()+1}-${tempData.getDate()}`
}

/** 返回此时时间戳，以毫秒为单位 */
export function getCurrentTimeStamp(): number {
  const currentDate = new Date(Date.now() + getTimezoneMsOffset());

  return currentDate.getTime();
}

/** 返回时区差值，以毫秒为单位 */
export function getTimezoneMsOffset(): number {
  return (new Date()).getTimezoneOffset() * 60 * 1000;
}
