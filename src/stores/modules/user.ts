import { defineStore } from 'pinia';
import router from '@/router';
import { login } from '@/service/modules/login';
import type { IUserState } from '@/types/stores/user';
import type { ILoginFormData } from '@/types/api/login';
import { getLocalStore, setLocalStore } from '@/utils/auth';
import { auth } from '@/enums/auth';
import { message, notification } from 'ant-design-vue';
import { currentTimeMessage } from '@/utils/time';
import { constantRoutes } from '@/router/routes';

const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    token: getLocalStore(auth.TOKEN) ?? null,
    constantRoutes: constantRoutes,
  }),

  actions: {
    async loginAction(loginForm: ILoginFormData) {
      const res = await login(loginForm);
      if (res.code === 200) {
        message.success('登录成功!');
        this.token = res.data.token as string;
        setLocalStore(auth.TOKEN, this.token);
        router.push('/layout');
        notification.success({
          message: '欢迎回来',
          description: currentTimeMessage(),
        });
        return Promise.resolve('ok');
      } else {
        message.error(res.data.message);
        return Promise.reject(res);
      }
    },
  },
});

export default useUserStore;
