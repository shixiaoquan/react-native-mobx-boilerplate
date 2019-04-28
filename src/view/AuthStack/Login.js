/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 21:49:37
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-26 21:55:46
 *
 * @flow
 */

import React from 'react';
import { Text, Button } from 'react-native';
import routes from '../../global/routes';
import Container from '../../component/Container';


type Props = {
  navigation: {
    dispatch: any => void,
    navigate: string => void,
    goBack: (?string) => void,
    setParams: string => void,
    state: { key: string, routeName: string, params?: { [string]: any } },
  },
}
type State = {
  a: string
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      a: 'State Flow Check',
    };
  }

  render() {
    const {
      props: { navigation: { navigate } },
      state: { a },
    } = this;
    return (
      <Container>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text>{a}</Text>
        <Text> how </Text>
        <Text> are </Text>
        <Text> you </Text>
        <Button title="LOGIN" onPress={() => { navigate(routes.appStack); }} />
      </Container>
    );
  }
}

export default Login;
