/*
 * @Author: ShiQuan
 * @Date: 2019-04-28 13:00:33
 * @Last Modified by:   ShiQuan
 * @Last Modified time: 2019-04-28 13:00:33
 */

import {
  Platform, Dimensions, StatusBar, NativeModules,
} from 'react-native';
import { langCode } from '../global/constants';

/**
 * device info
 */
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const isAndroid = platform === 'android';

// iPhoneX Xs
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhoneXR XsMax
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

/**
 * Device scale
 * Ported from https://blog.solutotlv.com/size-matters/
 */
// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => Math.ceil((deviceWidth / guidelineBaseWidth) * size);
const verticalScale = size => Math.ceil((deviceHeight / guidelineBaseHeight) * size);

const moderateScale = (size, factor = 0.5) => {
  if (size < 3) return size;
  return Math.ceil(size + ((scale(size) - size) * factor));
};

// const moderateScale = size => size;

/**
 * check if device is iphone X or iphone Xs
 */
const isIphoneX = () => platform === 'ios' && ((deviceHeight >= X_HEIGHT && deviceWidth >= X_WIDTH) || (deviceHeight >= X_WIDTH && deviceWidth >= X_HEIGHT));

/**
 * check if device is iphone XR or iphone XsMax
 */
const isIphoneXR = () => Platform.OS === 'ios' && ((deviceHeight === XR_HEIGHT && deviceWidth === XR_WIDTH) || (deviceHeight === XR_WIDTH && deviceWidth === XR_HEIGHT));
/**
 * get header Tool Bar height
 */
const getToolBarHeight = () => {
  if (platform === 'ios') {
    if (isIphoneX()) {
      return 89;
    }
    return 64;
  }
  return 56;
};

/**
 * get footer (action bar , tab bar .etc) height
 */
const getFooterHeight = () => {
  if (isIphoneX()) {
    return 89;
  }
  return 55;
};

const getBottomPadding = () => {
  if (isIphoneX() || isIphoneXR()) {
    return 34;
  }
  return 0;
};

/**
 * get StatusBar Height
 */
const getStatusBarHeight = () => {
  if (platform === 'ios') {
    if (isIphoneX() || isIphoneXR()) {
      return 44;
    }
    return 20;
  }
  return StatusBar.currentHeight;
};

/**
 * Get system default language
 * @return {string}
 */
const getSystemLangCode = () => {
  let systemLang = langCode.zhCN;

  if (isAndroid) {
    systemLang = NativeModules.I18nManager.localeIdentifier;
  } else {
    systemLang = NativeModules.SettingsManager.settings.AppleLocale;
  }

  if (systemLang !== langCode.zhCN) {
    return langCode.enUS;
  }
  return langCode.zhCN;
};

/**
 * login top height
 */
const LoginTopHeight = Math.ceil((1531 / 2646) * deviceWidth);

/**
 * Login Form height
 */
const LoginFormHeight = moderateScale(203);

/**
 * Login Bottom height
 */
const LoginBottomHeight = deviceHeight - LoginTopHeight - LoginFormHeight;


export {
  isIphoneX,
  isIphoneXR,
  isAndroid,
  deviceWidth,
  deviceHeight,
  getToolBarHeight,
  getFooterHeight,
  LoginTopHeight,
  LoginFormHeight,
  LoginBottomHeight,
  getStatusBarHeight,
  getBottomPadding,
  getSystemLangCode,
  scale,
  verticalScale,
  moderateScale,
};
