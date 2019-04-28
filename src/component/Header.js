/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 20:27:33
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 12:49:37
 *
 * @flow
 */

import * as React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../global/theme';
import { goBack } from '../library/navigationService';
import { getStatusBarHeight, moderateScale } from '../tools/device';
import ButtonWithIcon from './ButtonWithIcon';
import BackImageSource from '../static/images/back.png';

const Container = styled(Animated.View)`
  height: ${getStatusBarHeight() + theme.headerHeight}px;
  /* background-color: ${props => props.backgroundColor}; */
  border-bottom-width: ${props => (props.noBorder ? 0 : 0.3)}px;
  border-bottom-color: #A7A7AA;
  justify-content: flex-end;
  align-items: center;
  shadow-opacity: ${props => (props.noShadow ? 0 : 0.2)};
  shadow-radius: ${props => (props.noShadow ? 0 : 2)}px;
  shadow-color: ${props => (props.noShadow ? 'transparent' : '#999')};
  shadow-offset: 0px ${props => (props.noShadow ? 0 : 2)}px;
  /* z-index: ${props => (props.noShadow ? 0 : props.zIndex)};
  elevation: ${props => (props.noShadow ? 0 : props.elevation)}; */
`;

const GradientContainer = styled(LinearGradient)`
  height: ${getStatusBarHeight() + theme.headerHeight}px;
  border-bottom-width: ${props => (props.noBorder ? 0 : 0.3)}px;
  border-bottom-color: #A7A7AA;
  justify-content: flex-end;
  align-items: center;
  shadow-opacity: ${props => (props.noShadow ? 0 : 0.2)};
  shadow-radius: ${props => (props.noShadow ? 0 : 2)}px;
  shadow-color: ${props => (props.noShadow ? 'transparent' : '#999')};
  shadow-offset: 0px ${props => (props.noShadow ? 0 : 2)}px;
  z-index: ${props => (props.noShadow ? 0 : props.zIndex)};
  elevation: ${props => (props.noShadow ? 0 : props.elevation)};
`;

const ActionBar = styled.View`
  height: ${theme.sizeOf(44)}px;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const LeftArea = styled.View`
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: ${theme.sizeOf(15)}px;
`;

const BackIcon = styled.Image.attrs({
  source: BackImageSource,
})`
  width: ${moderateScale(11)};
  height: ${moderateScale(19)};
`;

const CenterArea = styled.View`
  flex: ${props => props.flex};
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 ${theme.sizeOf(8)}px;
`;

const RightArea = styled.View`
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${theme.sizeOf(15)}px;
`;

const ActionBtn = styled.TouchableOpacity`
  padding: ${theme.sizeOf(2)}px ${theme.sizeOf(3)}px;
`;

const Label = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
`;

type Props = {
  noShadow?: boolean,
  noBorder?: boolean,
  zIndex?: number,
  elevation?: number,
  backgroundColor?: string | string[] | Object,
  fontColor?: string,
  fontSize?: number,
  rightFontSize?: number,
  rightFontColor?: string,
  fontWeight?: number,
  fontFamily?: string,
  titleFontColor?: string,
  titleFontWeight?: number,
  titleFontSize?: number,
  showBackArrow?: boolean,
  showFollowArrow?: boolean,
  left?: string | React.Node,
  center?: string | React.Node,
  centerFlex?: 1 | 2 | 3 | 4,
  right?: string | React.Node,
  onLeftPress?: () => mixed,
  onCenterPress?: () => mixed,
  onRightPress?: () => mixed,
  rightPressDisabled?: boolean,
}

const Header = (props: Props) => {
  const {
    noBorder,
    noShadow,
    zIndex,
    elevation,
    backgroundColor,
    fontColor,
    fontSize,
    fontWeight,
    fontFamily,
    titleFontColor,
    titleFontSize,
    titleFontWeight,
    showFollowArrow,
    left,
    center,
    centerFlex,
    right,
    onLeftPress,
    onCenterPress,
    onRightPress,
    rightPressDisabled,
    showBackArrow,
    rightFontColor,
    rightFontSize,
  } = props;

  const actionBar = (
    <ActionBar>
      <LeftArea>
        {(typeof left === 'string' || showBackArrow)
          ? (
            <ButtonWithIcon
              icon={
                showBackArrow ? <BackIcon /> : null
              }
              onPress={onLeftPress || (() => goBack())}
              title={left}
              color={fontColor}
              fontSize={fontSize}
              fontWeight={fontWeight}
            />
          )
          : left
        }
      </LeftArea>
      <CenterArea flex={centerFlex}>
        {typeof center === 'string'
          ? (
            <ButtonWithIcon
              icon={showFollowArrow ? <Icon name="ios-arrow-down" size={theme.fontSize18} color={fontColor} /> : null}
              title={center}
              color={titleFontColor || fontColor}
              fontSize={titleFontSize}
              fontWeight={titleFontWeight}
              onPress={onCenterPress}
              reverse
            />
          )
          : center}
      </CenterArea>
      <RightArea>
        {typeof right === 'string'
          ? (
            <ActionBtn disabled={rightPressDisabled} onPress={onRightPress}>
              <Label
                color={rightFontColor || fontColor}
                fontSize={rightFontSize || fontSize}
                fontWeight={fontWeight}
                fontFamily={fontFamily}
              >
                {right}
              </Label>
            </ActionBtn>
          )
          : right}
      </RightArea>
    </ActionBar>
  );

  if (Array.isArray(backgroundColor)) {
    return (
      <GradientContainer
        colors={backgroundColor}
        noShadow={noShadow}
        noBorder={noBorder}
        zIndex={zIndex}
        elevation={elevation}
      >
        {actionBar}
      </GradientContainer>
    );
  }

  return (
    <Container
      style={{
        backgroundColor,
        zIndex: noShadow ? 0 : zIndex,
        elevation: noShadow ? 0 : elevation,
      }}
      // backgroundColor={backgroundColor}
      noShadow={noShadow}
      noBorder={noBorder}
    >
      {actionBar}
    </Container>
  );
};

export default Header;

Header.defaultProps = {
  noShadow: true,
  noBorder: true,
  zIndex: theme.headerZIndex,
  elevation: theme.headerElevation,
  backgroundColor: theme.accentColor,
  titleFontColor: 'white',
  titleFontSize: theme.fontSize16,
  titleFontWeight: 500,
  fontColor: theme.textColor,
  fontFamily: theme.primaryFontFamily,
  fontSize: theme.fontSize14,
  rightFontSize: theme.fontSize14,
  rightFontColor: 'white',
  fontWeight: 400,
  left: '',
  center: null,
  centerFlex: 2,
  right: null,
  onLeftPress: () => { },
  onCenterPress: () => { },
  onRightPress: () => { },
  showBackArrow: false,
  showFollowArrow: false,
  rightPressDisabled: false,
};
