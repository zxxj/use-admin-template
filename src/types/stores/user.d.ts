import { RouteRecordRaw } from 'vue-router';

export interface IUserState {
  token: string | null;
  constantRoutes: RouteRecordRaw[];
}
