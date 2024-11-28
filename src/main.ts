import { createApp } from 'vue';
// global css
import 'uno.css';
// main.ts
import 'virtual:uno.css';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/assets/styles/index.scss';

// App、router、store
import App from './App.vue';
import store from './store';
import router from './router';

// // 自定义指令
// import directive from './directive';

// // 注册插件
// import plugins from './plugins/index'; // plugins

// svg图标
import 'virtual:svg-icons-register';
// import ElementIcons from '@/plugins/svgicon';

// 国际化
import i18n from '@/lang/index';

import VueVirtualScroller from 'vue-virtual-scroller';

const app = createApp(App);
app.use(VueVirtualScroller);
// app.use(ElementIcons);
app.use(router);
app.use(store);
app.use(i18n);
// app.use(plugins);
// 自定义指令
// directive(app);

app.mount('#app');
