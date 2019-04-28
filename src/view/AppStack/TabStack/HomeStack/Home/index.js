/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 20:59:23
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 13:34:41
 * @flow
 */

import React from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react/native';
import { toJS } from 'mobx';
import Container from '../../../../../component/Container';
import Header from '../../../../../component/Header';
import articListStore from '../../../../../mobx/articleList';
import Item from './Item';

type Props = {}
type State = {
  a: string
}
type Article = {
  id: string | number,
  author: string,
  link: string,
  superChapterName: string,
  title: string,
}

@observer
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      a: 'State Flow Check',
    };
  }

  componentDidMount() {
    articListStore.getArticleListReq({ pageIndex: 1 });
  }

  keyExtractor = (item: Article) => `${item.id}`;

  renderItem = ({ item }: { item: Article }) => (<Item data={item} />)

  render() {
    const { state: { a } } = this;
    const HeaderProps = {
      fontColor: 'white',
      center: a,
      backgroundColor: '#0A0C1D',
      noBorder: true,
      noShadow: true,
    };
    const clone = toJS(articListStore.articleList);
    return (
      <Container>
        <Header {...HeaderProps} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={clone}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

export default Home;
