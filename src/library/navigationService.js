/*
 * @Author: ShiQuan 
 * @Date: 2019-04-26 15:59:15 
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-26 16:03:44
 * 
 */

/**
 * Use this approach to route when cannot access navigation prop
 */

import * as  React from 'react';
import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;// eslint-disable-line

let waiting = false;
const waitDuration = 100;

const registerTopNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const reset = (routeName, params) => {
  if (waiting) return;
  waiting = true;
  _navigator.props.dispatch(StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName,
        params,
      }),
    ],
  }));
  setTimeout(() => { waiting = false; }, waitDuration);
};

const replace = ({
  key,
  newKey = null,
  routeName,
  params = null,
  action = null,
  immediate = null,
}) => {
  if (waiting) return;
  waiting = true;
  _navigator.props.dispatch(StackActions.replace({
    key,
    newKey,
    routeName,
    params,
    action,
    immediate,
  }));
  setTimeout(() => { waiting = false; }, waitDuration);
};

const push = (routeName, params) => {
  if (waiting) return;
  waiting = true;
  _navigator.props.dispatch(StackActions.push({
    routeName,
    params,
  }));
  setTimeout(() => { waiting = false; }, waitDuration);
};

const pop = (n) => {
  if (waiting) return;
  waiting = true;
  _navigator.props.dispatch(StackActions.pop({
    n,
  }));
  setTimeout(() => { waiting = false; }, waitDuration);
};

const navigate = (routeName, params) => {
  if (waiting) return;
  waiting = true;
  _navigator.props.dispatch(NavigationActions.navigate({
    routeName,
    params,
  }));
  setTimeout(() => { waiting = false; }, waitDuration);
};

/**
 * Notice! behavior is not always same with props.navigation.goBack in View component
 * in the case of nested navigators, use props.navigation.goBack instead!
 */
const goBack = (key = null) => {
  if (waiting) return;
  waiting = true;
  _navigator.props.dispatch(NavigationActions.back({ key }));
  // _navigator.currentNavProp.goBack(null);
  // _navigator.getCurrentNavigation().goBack(null);
  setTimeout(() => { waiting = false; }, waitDuration);
};

// add other navigation functions that you need and export them
export {
  reset,
  replace,
  push,
  pop,
  navigate,
  goBack,
  registerTopNavigator,
};
