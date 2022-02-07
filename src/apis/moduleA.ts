import httpRequest from '@/utils/https.ts';
import { EnvType, ParamType } from '@/apis/apiType.ts';
// 基础地址
const baseUrl: EnvType = {
  development: ``,
  beta: ``,
  production: ``
};

/**
 * 示例： POST请求
 */
export function postRequest(data: ParamType): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/addres1/addres2`,
    method: 'post',
    data: data
  });
}
/**
 * 示例： GET请求
 */
export function getRequest(data: ParamType): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/addres1/addres2`,
    method: 'post',
    params: data
  });
}


/**
 * 示例： GET请求
 */
 export function getResource(): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/resources`,
    method: 'get'
  });
}

export function getCategorys(): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/category/list`,
    method: 'get'
  });
}

export function getCategory(id): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/category/` +id,
    method: 'get'
  });
}

export function getAppreciateListByCategoryId(id): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/appreciate-list/` +id,
    method: 'get'
  });
}

export function getVoteCount(): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/vote-count` ,
    method: 'get'
  });
}

export function voteSubmit(data): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/vote/submit` ,
    method: 'post'
  });
}

export function openWxLogin(): any {
  window.location.href = "https://vote.stack.xin/api/wx/login/"+process.env.VUE_APP_NODE_ENV+"?random="+Math.random();
}

export function getWxConfig(): any {
  return httpRequest({
    url: baseUrl[process.env.VUE_APP_NODE_ENV] + `/api/wx-config` ,
    method: 'post'
  });
}