import React from 'react';
import styled from 'styled-components';
import RootToast from '../components/Toast';
import { moderateScale } from './device';

// static source
import succeedIcon from '../static/images/succeed.png';
import warningIcon from '../static/images/warning.png';
import errorIcon from '../static/images/error.png';

const ContainerView = styled.View`
  width: ${moderateScale(181)};
  min-height: ${moderateScale(105)};
  justify-content: center;
  align-items: center;
`;

const ImageIcon = styled.Image`
  width: ${moderateScale(39)};
  height: ${moderateScale(39)};
`;

const MessageText = styled.Text`
  color: #fff;
  margin-top: ${moderateScale(12)};
  text-align: center;
  line-height: ${moderateScale(15)};
`;

const SuccessText = styled(MessageText)`
  color: #000000;
`;

const Toast = {
  toast: null,
  close(callback) {
    if (!this.toast) return;
    RootToast.hide(this.toast);
    this.toast = null;
    if (typeof callback === 'function' && callback) {
      callback();
    }
  },
  clearTime() {
    if (!this.timer) return;
    clearTimeout(this.timer);
    this.timer = null;
  },
  /** 基础Toast配置
   * @param content 内容
   * @param options 配置
   * @param callback 回调函数
  * */
  basicToast(content, { position = 0, duration = 2000, ...restProps } = {}, callback) {
    // only show one
    if (this.toast) return;
    this.toast = RootToast.show(content, {
      position,
      duration,
      onHidden: () => {
        this.close(callback);
        this.clearTime();
      },
      ...restProps,
    });
    // not auto close
    if (duration === 0) return;
    this.timer = setTimeout(() => {
      this.close(callback);
    }, duration);
  },
  showText(msg, options, callback) {
    if (!(typeof msg === 'number' || typeof msg === 'string')) {
      throw new TypeError('type only support number or string');
    }
    msg = msg.toString();
    if (!msg) {
      throw new Error('params cannot include any spaces');
    }
    this.basicToast(msg, options, callback);
  },
  showSuccess(node, options, callback) {
    if (!node && node !== 0) {
      throw new Error('params cannot include any spaces');
    }
    if (!React.isValidElement(node)) {
      node = (
        <ContainerView>
          <ImageIcon source={succeedIcon} />
          <SuccessText>{node}</SuccessText>
        </ContainerView>
      );
    }
    this.basicToast(node, {
      // position: RootToast.positions.CENTER,
      position: 105,
      backgroundColor: '#ffffff',
      opacity: 1,
      ...options,
    }, callback);
  },
  showWarning(node, options, callback) {
    if (!node && node !== 0) {
      throw new Error('params cannot include any spaces');
    }
    if (!React.isValidElement(node)) {
      node = (
        <ContainerView>
          <ImageIcon source={warningIcon} />
          <MessageText>{node}</MessageText>
        </ContainerView>
      );
    }
    this.basicToast(node, {
      // position: RootToast.positions.CENTER,
      position: 105,
      ...options,
    }, callback);
  },
  showError(node, options, callback) {
    if (!node && node !== 0) {
      throw new Error('params cannot include any spaces');
    }
    if (!React.isValidElement(node)) {
      node = (
        <ContainerView>
          <ImageIcon source={errorIcon} />
          <MessageText>{node}</MessageText>
        </ContainerView>
      );
    }
    this.basicToast(node, {
      // position: RootToast.positions.CENTER,
      position: 105,
      backgroundColor: '#000000',
      ...options,
    }, callback);
  },
};

export default Toast;
