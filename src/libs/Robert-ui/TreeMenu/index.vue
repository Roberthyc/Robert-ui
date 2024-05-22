<template>
    <div class="tree-menu">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TreeMenu"
}
</script>

<style lang="scss" scoped>
    .tree-menu {
        background-color: aliceblue;
        width: 100%;
        color: red;
    }
</style>