import Magnifier from './index.vue';

// 先声明一个自定义UI的容器
let RobertUI = {
    
}; 

RobertUI.install = function (Vue) {
    Vue.component(Magnifier.name, Magnifier);
}

export default RobertUI;