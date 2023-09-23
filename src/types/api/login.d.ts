// 登录接口参数类型
export interface ILoginFormData {
  username: string;
  password: string;
}

// 登录接口返回类型
interface data {
  token?: string;
  message?: string;
}
export interface ILoginResult {
  code: number;
  data: data;
}

// 用户信息接口返回类型
interface info {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

interface user {
  checkUser: info;
}
export interface IUserInfoResult {
  code: number;
  data: user;
}
