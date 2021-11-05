import httpRequest from '@/utils/https.ts';
import { EnvType, ParamType } from '@/apis/apiType.ts';
// 基础地址
const baseUrl: EnvType = {
  development: `dev环境接口公共的字段，eg:/saas-app-admin-dev`,
  beta: `beta环境接口公共的字段，eg:/saas-app-admin-beta`,
  production: `prod环境接口公共的字段，eg:/saas-app-admin`
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
