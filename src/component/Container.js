/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 20:27:41
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 10:14:12
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import defaultBackgroundImage from '../static/images/background.png';
import { getBottomPadding } from '../tools/device';

const ContainerView = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  background-color: ${props => props.backgroundColor};
  padding-bottom: ${props => props.paddingBottom};
`;

const ContainerImage = styled.ImageBackground`
  flex: 1;
  padding-bottom: ${props => (props.noPaddingBottom ? 0 : getBottomPadding())};
`;

const ContainerLinearGradient = styled(LinearGradient)`
  flex: 1;
  padding-bottom: ${props => (props.noPaddingBottom ? 0 : getBottomPadding())};
`;

function getChildren({
  backgroundColor, backgroundImage, children, noPaddingBottom,
}) {
  if (backgroundImage) {
    return (
      <ContainerImage
        source={backgroundImage}
        defaultSource={defaultBackgroundImage}
        noPaddingBottom={noPaddingBottom}
      >
        {children}
      </ContainerImage>
    );
  }
  if (Array.isArray(backgroundColor)) {
    return (
      <ContainerLinearGradient
        colors={backgroundColor}
        noShadow
        noBorder
        noPaddingBottom={noPaddingBottom}
      >
        {children}
      </ContainerLinearGradient>
    );
  }
  return children;
}

type Props = {
  children?: React.Node,
  disabled?: boolean,
  onPress?: () => mixed,
  backgroundImage?: number,
  backgroundColor?: string,
  noPaddingBottom?: boolean,
}

const Container = (props: Props) => {
  const {
    children,
    disabled,
    onPress,
    backgroundImage,
    backgroundColor,
    noPaddingBottom,
  } = props;
  return (
    <ContainerView
      disabled={disabled}
      onPress={onPress}
      backgroundColor={Array.isArray(backgroundColor) ? 'transparent' : backgroundColor}
      paddingBottom={(noPaddingBottom || backgroundImage || Array.isArray(backgroundColor)) ? 0 : getBottomPadding()}
    >
      {getChildren({
        backgroundColor, backgroundImage, children, noPaddingBottom,
      })}
    </ContainerView>
  );
};
Container.defaultProps = {
  children: null,
  disabled: true,
  onPress: () => { },
  backgroundImage: 0,
  backgroundColor: 'transparent',
  noPaddingBottom: false,
};

export default Container;
