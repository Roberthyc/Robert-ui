<template>
  <Transition>
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </Transition>
</template>

<script>
  import { 
    getCurrentInstance,
    reactive,
    toRefs, 
    watch
  } from 'vue';

  export default {
    name: 'CarItem',
    setup () {
      const instance = getCurrentInstance();
      // console.log(instance);
      
      const state = reactive({
        selfIndex: instance.vnode.key,
        currentIndex: instance.parent.ctx.currentIndex,
      });

      watch(() => {
        return instance.parent.ctx.currentIndex
      }, (value) => {
        state.currentIndex = value;
      });

      const props = instance.vnode.props;

      return {
        ...toRefs(state),
        props
      };
    }
  };
</script>

<style lang="scss" scoped>
  .car-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s linear;
  }

  .v-enter-active {
    transform: translateX(100%);
  }

  .v-enter-to {
    transform: translateX(0);
  }

  .v-leave-active {
    transform: translateX(0);
  }

  .v-leave-to {
    transform: translateX(-100%);
  }

</style>