import Carousel from './index.vue';
import CarouselItem from './item.vue'

// 先声明一个自定义UI的容器
let RobertUI = {
    
}; 

RobertUI.install = function (Vue) {
    Vue.component(Carousel.name, Carousel); // 注册轮播图组件
    Vue.component(CarouselItem.name, CarouselItem); // 注册轮播图子组件
}

export default RobertUI;