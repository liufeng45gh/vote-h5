import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/index.css';
import 'lib-flexible/flexible';
import { Swipe, SwipeItem } from 'vant';

createApp(App).use(store).use(router).use(Swipe).use(SwipeItem).mount('#app');


