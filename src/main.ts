import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'animate.css';

const app = createApp(App);

// 启用路由
app.use(router);

app.mount('#app');
