<!-- 专门用来写递归逻辑的组件 -->
<template>
  <sub-menu>
    <!-- <template v-slot:title></template> -->
    <template #title>{{ data.title }}</template>
    <!-- subitem -->
    <div 
        v-for="c of data.children"
    >
        <menu-item
            :key="c.id"
            v-if="!c.children"
        >{{ c.title }}</menu-item>
        <re-sub-menu 
            v-else 
            :key="c.id"
            :data="c"
        ></re-sub-menu>
    </div>
  </sub-menu>
</template>

<script>
export default {
    name: 'ReSubMenu',
    props: {
        data: Object
    }
}
</script>

<style>

</style>