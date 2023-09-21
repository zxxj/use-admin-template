import { createApp } from 'vue';
import App from '@/App.vue';
import 'virtual:svg-icons-register';
import 'normalize.css';
import axios from 'axios';
import globalComponents from './components/index';

axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
});

const app = createApp(App);
app.use(globalComponents);
app.mount('#app');
