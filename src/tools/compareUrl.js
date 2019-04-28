/**
 * compareUrl
 * ported from https://github.com/facebook/react-native/issues/7602
 * @param  {String} [u1=''] [description]
 * @param  {String} [u2=''] [description]
 * @return {Bool}         [description]
 */
export default (u1 = '', u2 = '') => u1.split('?')[0].replace(/\/$/, '') === u2.split('?')[0].replace(/\/$/, '');
