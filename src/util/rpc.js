/*
 * @Author: ShiQuan
 * @Date: 2019-04-27 00:08:37
 * @Last Modified by: ShiQuan
 * @Last Modified time: 2019-04-27 00:09:35
 */

let config = {
  apiUrl: null,
  app_key: null,
  secret: null,
  uploadUrl: null,
};

export const init = function (data) {
  config = data;
};

class ResponseError extends Error {
  constructor(message, code, origin) {
    super(message);
    this.code = code;
    this.origin = origin;
  }
}

// 上传
export async function upload(file) {
  // config.apiUrl
  const body = new FormData();
  body.append('File', file);
  body.append('Type', 'PHOTO');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body,
  };
  // console.log(body);
  const resp = await fetch(`${config.uploadUrl}`, options);
  const json = await resp.json();
  console.log('RESP:', json);
  // 如果请求失败
  if (resp.status !== 200) {
    throw new ResponseError(json.message, resp.status, json);
  }
  // 服务不可用
  if (json.firstErrorMessage || json.message) {
    console.log('ErrorResp:', JSON.stringify(json));
    throw new ResponseError(json.firstErrorMessage || json.message, resp.status, json);
  }
  return json;
}

// 上传图片
export async function uploadImage(formData) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  };
  console.log('REQ:', `${config.uploadUrl}`, options);
  const resp = await fetch(`${config.uploadUrl}`, options);
  const json = await resp.json();
  console.log('RESP:', json);
  // 如果请求失败
  if (resp.status !== 200) {
    throw new ResponseError(json.message, resp.status, json);
  }
  if (json.firstErrorMessage || json.message) {
    console.log('ErrorResp:', JSON.stringify(json));
    throw new ResponseError(json.firstErrorMessage || json.message, resp.status, json);
  }
  return json;
}
