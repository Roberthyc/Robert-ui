<template>
    <div class="sub-menu"
      @mouseenter="showSubMenu"
      @mouseleave="hideSubMenu"
    >
      <div class="title">
        <slot name="title"></slot>
        <span class="icon">&gt;</span>
      </div>
      <div class="sub-item" v-show="subMenuShow">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
      name: "SubMenu",
      setup () {
        const subMenuShow = ref(false);

        const showSubMenu = () => {
          subMenuShow.value = true;
        }

        const hideSubMenu = () => {
          subMenuShow.value = false;
        }

        return {
          subMenuShow,
          showSubMenu,
          hideSubMenu
        }
      }
  }
    
  </script>
  
  <style lang="scss" scoped>
      .sub-menu {
        position: relative;
        // height: 50px;

        .title {
            position: relative;
            height: 50px;
            line-height: 50px;
            text-align: center;

            .icon {
                position: absolute;
                right: 15px;
                top: 0;
            }
        }

        .sub-item {
            position: absolute;
            left: 100%;
            top: 0;
            width: 100%;
            background-color: rgba(0, 0, 255, 0.158);
        }
      }
  </style>