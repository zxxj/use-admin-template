import { createApp } from 'vue';
import App from '@/App.vue';
import 'virtual:svg-icons-register';
import 'normalize.css';
import globalComponents from './components/index';

const app = createApp(App);
app.use(globalComponents);
app.mount('#app');
