<template>
    <div class="no-data-tip">
        - 没有搜索到数据 -
    </div>
</template>

<script>
export default {
    name: 'NoDataTip'
}
</script>

<style lang="scss" scoped>
    .no-data-tip {
        height: 300px;
        line-height: 300px;
        font-size: 12px;
        color: #666;
        text-align: center;
    }
</style>