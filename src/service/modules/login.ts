import request from '../index';
import ENUM from '@/enum/api/login';
import type {
  ILoginFormData,
  ILoginResult,
  IUserInfoResult,
} from '@/types/api/login';

export const login = (data: ILoginFormData) =>
  request.post<ILoginResult>(ENUM.login, data);

export const getUserInfo = () => request.get<IUserInfoResult>(ENUM.userInfo);
