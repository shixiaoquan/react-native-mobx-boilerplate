const routes = {
  // initial loading screen
  landing: 'root.landing',

  // auth stack
  authStack: 'root.authStack',
  login: 'root.authStack.login',
  register: 'root.authStack.register',
  forgotPassword: 'root.authStack.forgotPassword',

  // app stack
  appStack: 'root.appStack',

  // tab stack
  tabStack: 'root.appStack.tabStack',

  // home stack
  homeStack: 'root.appStack.homeStack',
  home: 'root.appStack.homeStack.home',

  // store stack
  storeStack: 'root.appStack.storeStack',
  store: 'root.appStack.storeStack.store',

  // me stack
  meStack: 'root.appStack.meStack',
  me: 'root.appStack.meStack.me',

  // common
  cityPicker: 'root.root.common.cityPicker',
};

export default routes;

export const topRoutes = [
  routes.authLoading,
  routes.login,
  routes.games,
  routes.store,
  routes.community,
  routes.mine,
];
