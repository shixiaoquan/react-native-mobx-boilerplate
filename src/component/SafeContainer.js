/*
 * @Author: Terry Zhang
 * @Date: 2018-06-28 19:17:30
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-26 19:50:27
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { getBottomPadding, getStatusBarHeight } from '../tools/device';

const RegularWrapper = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()};
  padding-bottom: ${props => (props.unSafe ? 0 : getBottomPadding())};
  background-color: ${props => props.backgroundColor};
`;

const GradientWrapper = styled(LinearGradient)`
  flex: 1;
  padding-bottom: ${props => (props.unSafe ? 0 : getBottomPadding())};
`;

const SafeContainer = (props) => {
  const {
    children, unSafe, backgroundColor, addonLinearGradientProps,
  } = props;
  if (Array.isArray(backgroundColor)) {
    return (
      <GradientWrapper
        colors={backgroundColor}
        unSafe={unSafe}
        {...addonLinearGradientProps}
      >
        {children}
      </GradientWrapper>
    );
  }
  return (
    <RegularWrapper
      backgroundColor={backgroundColor}
      unSafe={unSafe}
    >
      {children}
    </RegularWrapper>
  );
};

SafeContainer.defaultProps = {
  backgroundColor: 'transparent',
  addonLinearGradientProps: null,
  unSafe: false,
};

SafeContainer.propTypes = {
  backgroundColor: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  addonLinearGradientProps: PropTypes.objectOf(PropTypes.any),
  unSafe: PropTypes.bool,
};

export default SafeContainer;
