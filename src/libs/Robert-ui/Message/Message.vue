<template>
    <transition name="message-ui-fade">
        <div 
        :class="styleClass"
        v-show="visible"
        :style=" {
            top: top + 'px'
        }"
        >{{ message }}</div>
    </transition>
</template>

<script setup>
import types from './types.js';
import { computed } from 'vue';
import { reactive, toRefs } from 'vue';

let t = null;

const state = reactive ({
    visible: false,
    top: 0
})

const props = defineProps({
    type: {
        type: String,
        default: types.MESSAGE,
        // 验证该type是否正确
        validator(value) {
            return Object.values(types).includes(value);
        }
    },
    message: {
        type: String,
        default: types.MESSAGE
    },
    duration: {
        type: Number,
        default: 5000
    },
});

const setVisible = (isVisible) => {
    // state.visible = isVisible;
    // 使用异步方法promise来实现，方便退场动画的展示
    return new Promise(resolve => {
        state.visible = isVisible;
        t= setTimeout(() => {
            clearTimeout(t);
            t = null;
            resolve('');
        }, 300);
    });
}

const setTop = (top) => {
    state.top = top;
    return top;
}

const styleClass = computed(() => ['message-ui', props.type])
const { visible, top } = toRefs(state);

// 将该方法暴露出去
defineExpose({
    setVisible,
    setTop,
    height: 40,
    margin: 20,
})
</script>

<style lang="scss" scoped>
    .message-ui {
        position: fixed;
        left: 50%;
        width: 380px;
        height: 40px;
        z-index: 9999;
        margin-left: -190px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        border-radius: 5px;
        transition: top .3s ease-out;

        &.success {
            background-color: #f0f9eb;
            color: #67c23a;
        }

        &.warning {
            background-color: #fdf6ec;
            color: #b88230;
        }

        &.message {
            background-color: #f4f4f5;
            color: #73767a;
        }

        &.error {
            background-color: #fef0f0;
            color: #f56c6c;
        }
    }

    .message-ui-fade-enter-active {
        transition: all .3s ease-in;
    }

    .message-ui-fade-leave-active {
        transition: all .3s ease-out;
    }

    .message-ui-fade-enter-from,
    .message-ui-fade-leave-to {
        transition: translateY(-20px);
        opacity: 0;
    }
</style>