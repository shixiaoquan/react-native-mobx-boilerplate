import { createBottomTabNavigator } from 'react-navigation';

import routes from '../../../global/routes';
import theme from '../../../global/theme';
import HomeStack from './HomeStack';
import StoreStack from './StoreStack';
import MeStack from './MeStack';

const RouteConfig = {
  [routes.homeStack]: HomeStack,
  [routes.storeStack]: StoreStack,
  [routes.meStack]: MeStack,
};

const navigatorConfig = {
  initialRouteName: routes.gamesStack,
  tabBarOptions: {
    style: {
      height: theme.sizeOf(49),
      backgroundColor: '#070a16',
    },
    tabStyle: {
      borderTopWidth: 1,
      borderColor: '#212845',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'center',
    },
    labelStyle: {
      fontSize: theme.fontSize10,
      color: theme.tabLabelColor,
      marginLeft: 0,
    },
  },
};

const TabStack = createBottomTabNavigator(RouteConfig, navigatorConfig);

TabStack.navigationOptions = {
  header: null,
};

export default TabStack;
