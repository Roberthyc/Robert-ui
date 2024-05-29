import Carousel from './Carousel/index.vue';
import CarouselItem from './Carousel/item.vue'
import Magnifier from './Magnifier/index.vue';
import TreeMenu from './TreeMenu/index.vue'
import MenuItem from './TreeMenu/MenuItem.vue';
import SubMenu from './TreeMenu/SubMenu.vue';
import ReSubMenu from './TreeMenu/ReSubMenu.vue';
import './resets.css' // 告诉你实际上可以在这里定义部分标签的全局css样式
import MessageBox from './MessageBox'


// 先声明一个自定义UI的容器
let RobertUI = {
    
}; 

RobertUI.install = function (Vue) {
    Vue.component(Carousel.name, Carousel); // 注册轮播图组件
    Vue.component(CarouselItem.name, CarouselItem); // 注册轮播图子组件
    Vue.component(Magnifier.name, Magnifier); // 注册放大镜组件
    Vue.component(TreeMenu.name, TreeMenu); // 注册多级菜单组件
    Vue.component(MenuItem.name, MenuItem); 
    Vue.component(SubMenu.name, SubMenu);
    Vue.component(ReSubMenu.name, ReSubMenu);
}

export default RobertUI;
export {MessageBox};