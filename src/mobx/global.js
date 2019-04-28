/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 22:06:22
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 13:28:39
 *
 * @flow
 */

import {
  action, observable, runInAction, configure,
} from 'mobx/';
import autobind from 'autobind-decorator';
import AsyncStorage from '@react-native-community/async-storage';
import ToastUtil from '../util/toast';
import { getSystemLangCode } from '../tools/device';
import zhCN from '../i18n/zhCN';
import enUS from '../i18n/enUS';
import { langCode, cachedKeys } from '../global/constants';

configure({
  enforceActions: 'observed',
});

@autobind
class GlobalStore {
  // language
  @observable language = getSystemLangCode();

  // i18n
  @observable i18n = zhCN;

  /**
   * language initialization
   */
  @action async initLanguage() {
    try {
      const systemLang = await getSystemLangCode();
      const localeLang = await AsyncStorage.getItem(cachedKeys.language);

      const lang = localeLang || systemLang;
      runInAction(() => {
        this.language = lang;
      });
    } catch (e) {
      ToastUtil.showError(e.message);
    }
  }

  /**
   * change language
   */
  @action async changeLanguage({ code }: { code: string }) {
    try {
      const l = code;
      let i;
      switch (code) {
        case langCode.enUS:
          i = enUS;
          break;
        case langCode.zhCN:
          i = zhCN;
          break;
        default:
          i = zhCN;
          break;
      }
      runInAction(() => {
        this.language = l;
        this.i18n = i;
      });
    } catch (error) {
      ToastUtil.showError(error.message);
    }
  }
}

export default new GlobalStore();
