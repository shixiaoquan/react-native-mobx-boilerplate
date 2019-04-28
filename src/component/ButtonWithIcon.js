/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 20:28:59
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 12:47:09
 *
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';
import theme from '../global/theme';

const Container = styled.TouchableOpacity`
  padding: ${theme.sizeOf(8)}px ${theme.sizeOf(8)}px;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  margin: 0px ${theme.sizeOf(8)}px;
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
`;

type Props = {
  icon?: React.Node,
  title?: string | number | React.Node,
  color?: string,
  fontSize?: number,
  fontWeight?: number,
  fontFamily?: string,
  onPress?: () => mixed,
  reverse?: boolean,
  disabled?: bool,
}

const ButtonWithIcon = (props: Props) => {
  const {
    icon, title, color, onPress, reverse, fontWeight, fontSize, fontFamily, disabled,
  } = props;
  return (
    <Container
      onPress={onPress}
      disabled={!onPress || disabled}
      reverse={reverse}
    >
      {icon}
      <Title
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        fontSize={fontSize}
        color={color}
      >
        {title}
      </Title>
    </Container>
  );
};

export default ButtonWithIcon;

ButtonWithIcon.defaultProps = {
  icon: null,
  title: 'Back',
  color: theme.textColor,
  onPress: () => { },
  reverse: false,
  fontSize: theme.fontSize16,
  fontWeight: 700,
  fontFamily: theme.primaryFontFamily,
  disabled: false,
};
