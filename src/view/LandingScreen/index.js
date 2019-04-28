/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 17:14:38
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 13:48:51
 * @flow
 */

import * as React from 'react';
import { observer } from 'mobx-react/native';
import AsyncStorage from '@react-native-community/async-storage';
import routes from '../../global/routes';
import { cachedKeys } from '../../global/constants';
import globalStore from '../../mobx/global';

type Props = {
  navigation: {
    dispatch: any => void,
    navigate: string => void,
    goBack: (?string) => void,
    setParams: string => void,
    state: { key: string, routeName: string, params?: { [string]: any } },
  },
}

@observer
class Landing extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const { navigation: { navigate } } = this.props;
    const { initLanguage } = globalStore;
    const userToken = await AsyncStorage.getItem(cachedKeys.token);
    if (userToken) {
      // await loadCachedToken(userToken);
      // await userInfoReq();
      await navigate(routes.appStack);
    } else {
      await navigate(routes.authStack);
    }
    await initLanguage();
  };

  render = () => null;
}

export default Landing;
