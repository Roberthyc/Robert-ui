<template>
    <div class="my-button-group">
        <my-button
            v-for="item of regulars"
            :key="item.regular"
            :type="type"
            :active="current === item.regular"
            @click.native="setCurrent(item.regular)"
        >{{ item.text }}</my-button>
    </div>
</template>

<script>
import MyButton from './MyButton'

export default {
    name: 'MyButtonGroup',
    components: {
        MyButton
    },
    props: {
        regulars: Array, 
        /*
            [{
                regular: 'up',
                text: '以上'
            },
            {
                regular: 'down',
                text: '以下'
            }]
        */
        type: {
            type: String,
            default: 'primary'
        },
        current: String
    },
    methods: {
        setCurrent (regular) {
            this.$emit('click', regular);
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-button-group {
        display: inline-block;
    }
</style>