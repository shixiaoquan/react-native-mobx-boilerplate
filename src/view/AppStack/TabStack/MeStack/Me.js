/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 21:31:30
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-26 21:33:28
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../../../../component/Container';
import Header from '../../../../component/Header';

type Props = {}
type State = {
  a: string
}
class Me extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      a: 'State Flow check',
    };
  }

  render() {
    const { state: { a } } = this;
    const HeaderProps = {
      fontColor: 'white',
      center: 'Me',
      backgroundColor: '#0A0C1D',
      noBorder: true,
      noShadow: true,
    };
    return (
      <Container>
        <Header {...HeaderProps} />
        <Text>{a}</Text>
        <Text> ME </Text>
        <Text> ME </Text>
        <Text> ME </Text>
        <Text> ME </Text>
        <Text> ME </Text>
        <Text> ME </Text>
        <Text> ME </Text>
        <Text> ME </Text>
      </Container>
    );
  }
}

export default Me;
