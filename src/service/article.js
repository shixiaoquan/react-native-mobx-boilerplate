/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 22:08:09
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-26 23:20:16
 */

import request from '../util/request';
import post from '../util/rpc';
import { API_HOST } from '../global/constants';

export function getArticleList({
  pageIndex,
} = {}) {
  return request({
    apiHost: API_HOST,
    path: `/article/list/${pageIndex}/json`,
    method: 'GET',
    query: {},
  });
}

/** 查看产品产品资料，相关信息
 * @add by zhao
 * @params options
 * {
 * id 主键Id must
 * }
 * @return Promise<Object>
 */
export function getProduct({
  id,
} = {}) {
  return post({
    method: 'api.customerrelations.product.get',
    id,
  });
}


/** 产品导出
 * @add by zhao
 * @params options
 * {
 * isMyFollow 是否是我关注的产品
 * status 是否有效 must
 * }
 * @return Promise<Object>
 */
export function exportProduct({
  isMyFollow,
  status,
} = {}) {
  return post({
    method: 'api.customerrelations.product.export',
    isMyFollow,
    status,
  });
}


/** 编辑产品
 * @add by zhao
 * @params options
 * {
 * id 主键Id must
 * productClazzId 产品类目ID must
 * departmentId 部门ID must
 * name 产品名称 must
 * price 产品价格 must
 * salesUnit 销售单位 must
 * describe 产品描述 must
 * status 启用状态:0:启用 1:禁用 must
 * }
 * @return Promise<Object>
 */
export function updateProduct({
  id,
  productClazzId,
  departmentId,
  name,
  price,
  salesUnit,
  describe,
  status,
} = {}) {
  return post({
    method: 'api.customerrelations.product.update',
    id,
    productClazzId,
    departmentId,
    name,
    price,
    salesUnit,
    describe,
    status,
  });
}


/** 创建产品
 * @add by zhao
 * @params options
 * {
 * productClazzId 产品类目ID must
 * departmentId 部门ID must
 * name 产品名称 must
 * price 产品价格 must
 * salesUnit 销售单位 must
 * describe 产品描述 must
 * status 启用状态:0:启用 1:禁用 must
 * }
 * @return Promise<Object>
 */
export function createProduct({
  productClazzId,
  departmentId,
  name,
  price,
  salesUnit,
  describe,
  status,
} = {}) {
  return post({
    method: 'api.customerrelations.product.create',
    productClazzId,
    departmentId,
    name,
    price,
    salesUnit,
    describe,
    status,
  });
}
