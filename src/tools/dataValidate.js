/*
 * @Author: Terry Zhang
 * @Date: 2018-06-28 11:35:34
 * @Last Modified by: Terry Zhang
 * @Last Modified time: 2018-08-10 10:20:12
 */
const email = (val) => {
  const re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return re.test(val);
};

// 8-32位大小写字母加数字的组合
const password = (val) => {
  const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,32}$/;
  return re.test(val);
};

const phone = (val) => {
  const re = /^1[34578]\d{9}$/;
  return re.test(val);
};

const allNumber = (val) => {
  const reg = /^\+?[1-9][0-9]*$/;
  if (reg.test(val)) {
    return true;
  }
  return false;
};

const allCNChar = (val) => {
  const re = /^[\u4E00-\u9FA5]+$/;
  return re.test(val);
};

const hasCNChar = (val) => {
  const re = /.*[\u4e00-\u9fa5]+.*$/;
  return re.test(val);
};

const hasIllegalChar = val => /[^A-Za-z0-9]/.test(val);

const sizeOfByte = (str, charset) => {
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

const lastInputCharIsValid = (value) => {
  if (!value) {
    return true;
  }
  const numberCodeSet = new Set([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',
  ]);
  const lastInputChar = value[value.length - 1];
  return numberCodeSet.has(lastInputChar) && value.split('.').length < 3;
};

const isNumber = obj => typeof obj === 'number' && !Number.isNaN(obj);

export {
  email,
  password,
  phone,
  allCNChar,
  hasCNChar,
  allNumber,
  sizeOfByte,
  lastInputCharIsValid,
  isNumber,
  hasIllegalChar,
};
