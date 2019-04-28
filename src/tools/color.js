/*
 * @Author: Edmond.Shi
 * @Date: 2018-06-25 20:33:05
 * @Last Modified by: Edmond.Shi
 * @Last Modified time: 2018-06-25 21:13:32
 */

const formatColorValue = (value = '') => {
  while (value.length < 6) {
    value = `0${value}`;
  }
  return `#${value}`;
};

const getVelocity = (c1, c3, h) => {
  const c1Ten = parseInt(c1.substring(1), 16);
  const c3Ten = parseInt(c3.substring(1), 16);
  const v = (c3Ten - c1Ten) / h;
  return v;
};

const getColors = (c1, c2, ch, v) => {
  const c1Ten = parseInt(c1.substring(1), 16);
  const c2Ten = parseInt(c2.substring(1), 16);
  const resC1 = formatColorValue((parseInt(c1Ten + (v * ch), 10)).toString(16));
  const resC2 = formatColorValue((parseInt(c2Ten + (v * ch), 10)).toString(16));

  return ({
    c1: resC1,
    c2: resC2,
  });
};

export { formatColorValue, getVelocity, getColors };
