<template>
    <div class="selector-input">
        <label class="placeholder">{{ placeholder }}</label>
        <input 
            class="input" 
            type="text"
            :value="value"
            ref="inputValue"
            @input="searchOptions($event)"
            @focus="searchOptions($event)"
            @blur="setValue(value)"
        />
        <span class="iconfont icon-arrow-down"></span>
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
    name: 'SelectorInput',
    props: {
        placeholder: {
            type: String,
            default: '请选择'
        },
        value: String
    },
    setup (props, ctx) {
        const instance = getCurrentInstance();

        const searchOptions = (e) => {
             ctx.emit('searchOptions', e.target.value)
        }

        // 记忆功能，如果你没有选择value，那么失去焦点时，它会自动填充上一次的value
        const setValue = (value) => {
            const _input = instance.refs.inputValue;

            if (_input.value.length > 0) {
                _input.value = value;
            }
        }

        return {
            searchOptions,
            setValue
        }
    }
}
</script>

<style lang="scss" scoped>
    .selector-input {
        position: relative;
        width: 100%;
        height: 38px;

        .input {
            width: 100%;
            height: 100%;
            padding: 0 15px;
            box-sizing: border-box;
            border: 1px solid #999;
            border-radius: 5px;
            outline: none;
            transition: all .2s linear;

            &:focus {
                border-color: #1890ff;
                box-shadow: 0 0 3px #1890ff;
            }
        }

        .placeholder,
        .iconfont {
            position: absolute;
        }

        .placeholder {
            left: 15px;
            top: 8px;
            color: #999;
        }

        .icon-font {
            right: 15px;
            top: 12px;
            color: #999;

            &.icon-search {
                font-size: 22px;
                top: 8px;
            }
        }
    }
</style>