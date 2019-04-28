import moment from 'moment';

export const formatDateType = 'YYYY-MM-DD';
// 格式化
export function formatDateByMoment(str, formatType = 'YYYY-MM-DD HH:mm:ss') {
  if (!str) return null;
  // if (typeof str === 'string') {
  //   if (Number.isNaN(Number(str))) return str;
  //   str = Number(str);
  // }
  return moment(str).format(formatType);
}
