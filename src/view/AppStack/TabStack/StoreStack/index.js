/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 17:26:33
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 13:41:00
 */

import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import icon from '../../../../static/images/tabbar/store.png';
import activeIcon from '../../../../static/images/tabbar/store-choose.png';
import routes from '../../../../global/routes';
import theme from '../../../../global/theme';
import StoreScreen from './Store';

const RouteConfig = {
  [routes.store]: StoreScreen,
};

const navigatorConfig = {
  initialRouteName: routes.store,
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'none',
  transitionConfig: theme.transitionConfig,
  navigationOptions: () => ({
    gesturesEnabled: true,
  }),
};

const HomeStack = createStackNavigator(RouteConfig, navigatorConfig);

const tabBarIcon = ({ focused }) => (
  <Image
    source={focused ? activeIcon : icon}
    style={{ height: theme.sizeOf(22), width: theme.sizeOf(28) }}
    resizeMode="contain"
  />
);

HomeStack.navigationOptions = ({ navigation, screenProps }) => {
  const { i18n: { root_app_tabs_store: tabBarLabel } } = screenProps;
  const { index } = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel,
    tabBarIcon,
  };
};

export default HomeStack;
