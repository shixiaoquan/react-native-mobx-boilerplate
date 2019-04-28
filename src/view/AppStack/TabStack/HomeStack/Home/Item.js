/*
 * @Author: ShiQuan
 * @Date: 2019-04-27 21:40:29
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-27 21:55:11
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  padding: 15px;
`;

const Title = styled.Text``;

type Props = {
  data: {
    author: string,
    link: string,
    superChapterName: string,
    title: string,
  }
}
const Item = (props: Props) => {
  const {
    data: {
      title,
    },
  } = props;
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Item;
