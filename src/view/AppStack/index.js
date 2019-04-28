import { createStackNavigator } from 'react-navigation';
import routes from '../../global/routes';
import TabStack from './TabStack';

const RouteConfigs = {
  [routes.tabStack]: TabStack,
};

const NavigatorConfig = {
  initialRouteName: routes.tabStack,
  headerMode: 'none',
};

export default createStackNavigator(RouteConfigs, NavigatorConfig);
