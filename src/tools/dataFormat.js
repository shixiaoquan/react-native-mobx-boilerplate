/*
 * @Author: Terry Zhang
 * @Date: 2018-06-28 11:35:02
 * @Last modified by:   Boyce
 * @Last modified time: 2018-07-06 14:03:02
 */
import moment from 'moment';
import { langCode } from '@/global/constants';

export const sizeOfByte = (str, charset) => {
  let total = 0;
  let charCode = '';
  const charSet = charset ? charset.toLowerCase() : '';
  if (charSet === 'utf-16' || charSet === 'utf16') {
    const len = str.length;
    for (let i = 0; i < len; i += 1) {
      charCode = str.charCodeAt(i);
      if (charCode <= 0xffff) {
        total += 2;
      } else {
        total += 4;
      }
    }
  } else {
    const len = str.length;
    for (let i = 0; i < len; i += 1) {
      charCode = str.charCodeAt(i);
      if (charCode <= 0x007f) {
        total += 1;
      } else if (charCode <= 0x07ff) {
        total += 2;
      } else if (charCode <= 0xffff) {
        total += 3;
      } else {
        total += 4;
      }
    }
  }
  return total;
};

export const formatLongString = (str, byteSizeLimit) => {
  if (sizeOfByte(str) > byteSizeLimit) {
    return `${str.substr(0, byteSizeLimit - 3)}...`;
  }
  return str;
};

export const numberFormat = (val, len) => {
  let num = val;
  let minus = '';
  if (typeof num !== 'number') {
    num = parseFloat(num);
    if (Number.isNaN(num)) {
      return '';
    }
  }
  if (num < 0) {
    minus = '-';
    num = 0 - num;
  }
  const parsedArr = num.toString().split('.');
  const integer = parsedArr[0];
  let fraction = parsedArr[1] || '';
  let withFraction = '';
  if (len && len > 1) {
    fraction = fraction.length > len ? fraction.substring(0, len) : fraction.padEnd(len, '0');
    withFraction = `.${fraction}`;
  }
  if (integer.length <= 3) {
    return `${minus}${integer}${withFraction}`;
  }
  const numArr = integer.split('');
  const postInt = numArr.map((digit, index) => ((numArr.length - index) % 3 === 0 && index !== 0 ? `,${digit}` : digit)).join('');
  return `${minus}${postInt}${withFraction}`;
};

export const dateFormat = (date = new Date(), language) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let dateText = '';
  if (language === langCode.zhCN) {
    dateText = `${year}年${month}月${day}日`;
  } else {
    dateText = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format('LL');
  }
  return ({
    dateValue: `${year}-${month}-${day}`,
    dateText,
  });
};

export const mobileBlur = (mobile) => {
  if (typeof mobile !== 'number' && typeof mobile !== 'string') {
    return '****';
  }
  const value = mobile.toString();
  if (value.length < 8) {
    return '****';
  }
  return `${value.slice(0, value.length - 8)}****${value.slice(value.length - 4)}`;
};

export const getYMDDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}${month < 10 ? `0${month}` : month}${day < 10 ? `0${day}` : day}`;
};
