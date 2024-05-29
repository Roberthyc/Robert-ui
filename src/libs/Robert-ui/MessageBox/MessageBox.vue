<script setup>
 import { reactive, toRefs, h } from 'vue'
 import { fields } from './index'

 const state = reactive({
     visible: false,
     promptValue: '',
     type: 'confirm'
 });

 const props = defineProps({
    title: {
        type: String,
        default: 'Message'
    },
    content: {
        type: String,
        default: 'Message content'
    },
    showCancelBtn: {
        type: Boolean,
        default: false
    },
    confirmBtnText: {
        type: String,
        default: 'Confirm'
    },
    cancelBtnText: {
        type: String,
        default: 'Cancel'
    }, 
    field: {
        type: String,
        default: 'confirm',
        validator: (value) => {
            return fields.includes(value);
        }
    }
 });

 const { visible } = toRefs(state);

 const setVisible = (isVisible) => {
     state.visible = isVisible;
 }

 const confirmBtnClick = () => {
    setVisible(false);
    state.type = 'confirm';
 } 

 const cancelBtnClick = () => {
    setVisible(false);
    state.type = 'cancel';
 } 

 const ContentView = ({ field }) => {
    switch (field) {
        case !field || 'confirm':
            return h('p', null, props.content);
        case 'prompt': 
            return h('input', {
                value: state.promptValue,
                onInput: e => state.promptValue = e.target.value,
                class: 'message-input'
            });
        default:
            return '';
    }
 }

 defineExpose({
    setVisible,
    state
 });
</script>

<template>
  <transition name="messagebox-fade">
    <div 
        class="message-box"
        v-show="visible"    
        @click="cancelBtnClick"
    >
        <div 
            class="message-box-wrapper"
            @click.stop
        >
            <div class="message-box-title">
                <h1>{{ title }}</h1>
                <span 
                    class="iconfont icon-close"
                    @click="cancelBtnClick"
                ></span>
            </div>
            <div class="message-box-content">
                <content-view :field="field"></content-view>
            </div>
            <div class="message-box-btns">
                <button 
                    class="btn btn-primary"
                    @click="confirmBtnClick"
                >{{ confirmBtnText }}</button>
                <button 
                    class="btn btn-default"
                    @click="cancelBtnClick"
                    v-if="showCancelBtn"
                >{{ cancelBtnText }}</button>
            </div>
        </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
    @font-face {
        font-family: "iconfont"; /* Project id 4566846 */
        src: url('//at.alicdn.com/t/c/font_4566846_owvyvqui9gi.woff2?t=1716986735105') format('woff2'),
            url('//at.alicdn.com/t/c/font_4566846_owvyvqui9gi.woff?t=1716986735105') format('woff'),
            url('//at.alicdn.com/t/c/font_4566846_owvyvqui9gi.ttf?t=1716986735105') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-close:before {
        content: "\e693";
    }

    .messagebox-fade-enter-from,
    .messagebox-fade-leave-to {
        opacity: 0;
    }

    .messagebox-fade-enter-active {
        transition: opacity .2s ease-in;
    }

    .messagebox-fade-leave-active {
        transition: opacity .2s ease-out;
    }

    .message-box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        
        .message-box-wrapper {
            width: 420px;
            height: 200px;
            position: absolute;
            top: 50%;
            left : 50%;
            margin: -100px 0 0 -210px;
            background-color: #fff;
            border-radius: 3px;

            h1,
            p {
                margin: 0;
                font-weight: normal;
            }

            .message-box-title {
                padding: 15px 15px 10px;

                h1 {
                    display: inline-block;
                    font-size: 18px;
                }

                .icon-close {
                    float: right;
                    font-size: 12px;
                    color: #999;
                }
            }

            .message-box-content {
                padding: 10px 15px;
                p {
                    font-size: 14px;
                }
            }

            .message-box-btns {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                padding: 5px 15px 15px;
                box-sizing: border-box;

                button {
                    float: right;
                }
            }
        }

        .btn {
            border: none;
            outline: none;
            height: 32px;
            padding: 8px 15px;
            border-radius: 3px;

            &.btn-primary {
                background-color: #4093ff;
                color: #fff;
                margin: 10px;
            }

            &.btn-default {
                background-color: #fff;
                border: 1px solid #ddd;
                margin: 10px -5px;
            }
        }

        .message-input {
            border: none;
            outline: none;
            width: 100%;
            border: 1px solid #ddd;
            height: 32px;
            box-sizing: border-box;
        }
    }
</style>