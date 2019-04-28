/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 15:54:21
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 13:44:01
 *
 * @flow
 */
import * as React from 'react';
import { observer } from 'mobx-react/native';
import { createAppContainer } from 'react-navigation';
import { toJS } from 'mobx';
import { registerTopNavigator } from './library/navigationService';
import AppNavigator from './view';
import globalStore from './mobx/global';

const AppContainer = createAppContainer(AppNavigator);

type Props = {}

@observer
class App extends React.Component<Props> {
  render() {
    const { i18n } = globalStore;
    return (
      <AppContainer
        ref={navigatorRef => registerTopNavigator(navigatorRef)}
        screenProps={{ i18n: toJS(i18n) }}
      />
    );
  }
}

export default App;
