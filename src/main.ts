import { createApp } from 'vue';
import router from './router';
import App from '@/App.vue';
import 'virtual:svg-icons-register';
import 'normalize.css';
import globalComponents from './components/index';

const app = createApp(App);
app.use(globalComponents);
app.use(router);
app.mount('#app');
