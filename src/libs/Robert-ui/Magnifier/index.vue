<template>
  <div
    v-magnifier
    class="img-wrap"
    :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px',
    }"
  >
    <!-- 放大镜内部的图片 -->
    <a
        class="mag-wrap"
        :href="link"
        :target="blank ? '_blank' : ''"
        :style="{
            width: magWidth + 'px',
            height: magHeight + 'px',
        }"
    >
        <img 
            class="mag-img"
            :src="imgUrl"
            :alt="imgAlt"
            :style="{
                width: imgWidth + 'px',
                height: imgHeight + 'px',
            }"
        />
    </a>
    <!-- 放大镜外部的静态图片 -->
    <a 
        class="img-lk"
        :href="link"  
    >
        <img 
            class="static-img"
            :src="imgUrl"
            :alt="imgAlt"
        /> 
    </a>
  </div>
</template>

<script>
import { magnifier } from '../Magnifier/directives';

export default {
  name: "Magnifier",
  // 注册magnifier组件
  directives: {
    magnifier
  },
  
  props: {
    imgWidth: {
        type: Number,
        default: 500
    },
    imgHeight: {
        type: Number,
        default: 1000
    },
    magWidth: {
        type: Number,
        default: 150
    },
    magHeight: {
        type: Number,
        default: 100
    },
    blank: {
        type: Boolean,
        default: false
    },
    link: {
        type: String,
        default: ''
    },
    imgUrl: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
    .img-wrap {
        position: relative;
        border: 1px solid #ddd;
        box-shadow: 0 0 5px #999;

        .static-img {
            width: 100%; 
        }

        .mag-wrap {
            display: none; // 初始隐藏
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            background-color: #fff;
            box-shadow: 0 0 3px #ccc;
            border-radius: 50%;
            cursor: move;
            overflow: hidden;

            &.show {
                display: block;
                transform: scale(1.5); // 增加1.5倍
            }

            .mag-img {
                position: absolute;
                top: 0; 
                left: 0;
            }
        } 
    }

</style>