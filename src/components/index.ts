import useSvgIconVue from './useSvgIcon.vue';
import { App, Component } from 'vue';

const components: { [name: string]: Component } = { useSvgIconVue };

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
