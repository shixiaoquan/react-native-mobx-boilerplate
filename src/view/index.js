/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 16:05:07
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-27 10:11:24
 *
 */

import { createSwitchNavigator } from 'react-navigation';
import routes from '../global/routes';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import LandingScreen from './LandingScreen';

const routeConfig = {
  [routes.landing]: LandingScreen,
  [routes.authStack]: AuthStack,
  [routes.appStack]: AppStack,
};

const navigatorConfig = {
  initialRouteName: routes.appStack,
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'none',
};

export default createSwitchNavigator(routeConfig, navigatorConfig);
