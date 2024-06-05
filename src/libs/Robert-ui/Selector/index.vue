<template>
    <div class="selector" v-focus>
        <selector-input
          :placeholder="placeholder"
          :value="inputValue"
          @searchOptions="searchOptions"
        />
        <selector-menu 
          :data="data"
          @setItemValue="setItemValue"
          :searchValue="searchValue"
        />
    </div>
</template>

<script>
import SelectorInput from './Input';
import focus from '../directives/focus'
import SelectorMenu from './Menu'
import { reactive, toRefs } from 'vue';

export default {
    name: 'Selector',
    directives: {
        focus
    },
    components: {
        SelectorInput,
        SelectorMenu
    },
    props: {
        placeholder: String,
        data: Array
    },
    setup (props, ctx) {
        const state = reactive({
            inputValue: '',
            searchValue: ''
        })

        const setItemValue = (item) => {
            state.inputValue = item.text;
            ctx.emit('setItemValue', item.value);
        }

        const searchOptions = (value) => {
            state.searchValue = value;
        }

        return {
            ...toRefs(state),
            setItemValue,
            searchOptions
        }
    }
}
</script>

<style>
    .selector {
        position: relative;
        width: 300px;
    }
</style>