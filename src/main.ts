import { createApp } from 'vue';
import router from './router';
import pinia from '@/stores';
import App from '@/App.vue';
import 'virtual:svg-icons-register';
import 'normalize.css';
import '@/design/antdesign.scss';
import globalComponents from './components/index';

const app = createApp(App);
app.use(globalComponents);
app.use(router);
app.use(pinia);
app.mount('#app');
