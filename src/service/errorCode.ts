import { message } from 'ant-design-vue';

const httpError = (errorCode: number) => {
  switch (errorCode) {
    case 201:
      message.error('账号或密码验证错误!');
      break;
    case 401:
      message.error('TOKEN已过期,请重新登录!');
      break;
    case 403:
      message.error('服务器拒绝了本次请求!');
      break;
    case 404:
      message.error('服务器找不到请求的网页!');
      break;
    case 500:
      message.error('服务器内部错误!');
      break;
    case 503:
      message.error('服务器目前无法使用!');
      break;
    case 504:
      message.error('网关超时!');
  }
};

export { httpError };
