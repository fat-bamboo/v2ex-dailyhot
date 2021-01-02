/**
 * 根据时间戳返回特殊格式化后的字符串，例如 2020-12-21
 * @param timestamp 时间戳，单位毫秒
 */
export function formatDate(timestamp: number): string {
  const tempData = new Date(timestamp);

  const year = tempData.getFullYear();
  let month: number | string = tempData.getMonth() + 1;
  let date: number | string = tempData.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }

  return `${year}-${month}-${date}`;
}

/** 返回此时时间戳，以毫秒为单位 */
export function getCurrentTimeStamp(): number {
  const currentDate = new Date(Date.now() + getTimezoneMsOffset());

  return currentDate.getTime();
}

/** 返回时区差值，以毫秒为单位 */
export function getTimezoneMsOffset(): number {
  return new Date().getTimezoneOffset() * 60 * 1000;
}
