/*
 * @Author: ShiQuan
 * @Date: 2019-04-26 23:06:28
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-27 00:36:16
 */

import AsyncStorage from '@react-native-community/async-storage';
import { API_HOST, cachedKeys } from '../global/constants';

class ResponseError extends Error {
  constructor(message, code, origin) {
    super(message);
    this.code = code;
    this.origin = origin;
  }
}

const queryStringSpliceReducer = (acc, cur) => (cur[1] === undefined
  ? acc
  : `${acc}${acc === '?' ? '' : '&'}${encodeURIComponent(
    cur[0],
  )}=${encodeURIComponent(cur[1])}`);

export default async ({
  apiHost = API_HOST,
  path = '/',
  method, query,
}) => {
  let url = apiHost + path;
  const options = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  if (query) {
    // handle query params if exists
    const queryEntries = Object.entries(query);
    // custom fetch options
    if (options.method === 'GET') {
      // handle GET
      url = `${url}${queryEntries.reduce(queryStringSpliceReducer, '?')}`;
    } else {
      // handle POST, PUT, DELETE...
      const params = {};
      for (const [key, value] of queryEntries) {
        if (value !== undefined) {
          params[key] = value;
        }
      }
      options.body = JSON.stringify(params);
    }
  }

  // get token and language from local storage
  const token = await AsyncStorage.getItem(cachedKeys.token);

  // setup token headers if has token stored
  if (token) {
    options.headers.token = token;
  } else {
    delete options.headers.token;
  }

  const resp = await fetch(url, options);
  const json = await resp.json();

  // 如果请求失败
  if (resp.status !== 200) {
    if (resp.status === 401) {
      console.log(resp.status);
    }
    console.log('ErrorResp:', JSON.stringify(json));
    throw new ResponseError(json.message, resp.status, json);
  }
  // 服务不可用
  if (json.firstErrorMessage || json.message) {
    console.log('ErrorResp:', JSON.stringify(json));
    throw new ResponseError(json.firstErrorMessage || json.message, resp.status, json);
  }
  console.log('RESP:', json);
  return json;
};
