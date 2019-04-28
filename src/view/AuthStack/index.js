import { createStackNavigator } from 'react-navigation';
import routes from '../../global/routes';
import LoginScreen from './Login';

const RouteConfig = {
  [routes.login]: LoginScreen,
};

const NavigatorConfig = {
  initialRouteName: routes.login,
  mode: 'card',
  headerMode: 'none',
};

export default createStackNavigator(RouteConfig, NavigatorConfig);
