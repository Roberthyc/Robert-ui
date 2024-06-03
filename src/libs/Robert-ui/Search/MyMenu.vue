<template>
    <div class="my-menu" v-show="show">
        <my-check-box
            v-for="item of data"
            :key="item.id"
            :id="item.id"
        >
            <span>{{ item.name }}</span>
            <span>{{ item.score }}</span>
        </my-check-box>
    </div>
</template>

<script>
import MyCheckBox from './MyCheckBox'

export default {
    name: "MyMenu",
    components: {
        MyCheckBox
    },
    props: {
        data: Array,
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-menu {
        width: 260px;
        border: 1px solid #000;
    }
</style>