/*
 * @Author: Terry Zhang
 * @Date: 2018-06-28 11:35:09
 * @Last Modified by:   Terry Zhang
 * @Last Modified time: 2018-06-28 11:35:09
 */
export const startCountdown = ({ seconds, loopFunc, doneFunc }) => {
  if (Number.isNaN(Number(seconds))) throw Error('First parameter cannot be converted to number');
  if (typeof loopFunc !== 'function') throw Error('Second Parameter should be a function');
  if (typeof doneFunc !== 'function') throw Error('Third Parameter should be a function');
  let countdown = seconds;
  return setTimeout(function timeout() {
    countdown -= 1;
    if (countdown > 0) {
      loopFunc(countdown, setTimeout(timeout, 1000));
    } else {
      doneFunc();
    }
  }, 1000);
};

export const startCycle = ({ seconds, loopFunc }) => {
  if (Number.isNaN(Number(seconds))) throw Error('First parameter cannot be converted to number');
  if (typeof loopFunc !== 'function') throw Error('Second Parameter should be a function');
  const miniSeconds = 1000 * parseInt(seconds, 10);
  const cycle = () => {
    loopFunc(setTimeout(cycle, miniSeconds));
  };
  cycle();
};
