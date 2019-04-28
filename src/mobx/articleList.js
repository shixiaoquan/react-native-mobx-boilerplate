/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 22:06:22
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-28 12:59:34
 */

import {
  action, observable, runInAction, configure,
} from 'mobx/';
import autobind from 'autobind-decorator';
import ToastUtil from '../util/toast';
import {
  getArticleList,
} from '../service/article';

configure({
  enforceActions: 'observed',
});

@autobind
class ArticleListStore {
  // 产品列表
  @observable articleList = [];

  // loading
  @observable loading = false;

  // 获取产品列表
  @action async getArticleListReq({ pageIndex = 1 } = {}) {
    try {
      this.refreshing = true;
      const res = await getArticleList({ pageIndex });
      const {
        data: { datas },
        errorCode = 0,
        errorMg = '',
      } = res;
      if (errorCode !== 0) throw new Error(errorMg);
      runInAction(() => {
        this.articleList = [...datas];
      });
    } catch (e) {
      ToastUtil.showError(e.message);
    } finally {
      runInAction(() => {
        this.refreshing = false;
      });
    }
  }

  //   // 编辑产品
  //   @action async updateProductReq(options, callback) {
  //     try {
  //       await updateProduct(options);
  //       runInAction(() => {
  //         this.getProductClazzListReq();
  //         callback && callback();
  //       });
  //     } catch (e) {
  //       ToastUtil.showError(e.message);
  //     }
  //   }
}

export default new ArticleListStore();
