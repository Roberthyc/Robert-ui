<template>
  <div class="menu-item">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "MenuItem"
}
  
</script>

<style lang="scss" scoped>
    .menu-item {
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
</style>