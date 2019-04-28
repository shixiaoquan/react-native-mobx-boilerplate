export const parseRoutes = (navState) => {
  let state = navState;
  let { routes, index, routeName } = state;
  while (routes && routes.length > index) {
    state = routes[index];
    ({ routes, index, routeName } = state);
  }
  return routeName;
};
