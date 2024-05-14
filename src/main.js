import { createApp } from 'vue'
import App from './App.vue'

import RobertUI from './libs/Robert-ui/Carousel';

// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

createApp(App).use(RobertUI).mount('#app')

