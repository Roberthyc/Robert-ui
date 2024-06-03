<template>
    <div class="stars-ui">
        <span
            v-for="num in 5"
            :key="num"
            :class="[
                'iconfont icon-stars',
                num <= starNum ? 'active' : ''
            ]"
            :style="{ fontSize: size + 'px' }"
            @click="setStarNum(num)"
        ></span>
    </div>
</template>

<script>
import { useStars } from '../hooks'

export default {
    name: 'Stars',
    props: {
        num: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 16
        }
    },

    setup (props, ctx) {
        const [starNum, setStarNum] = useStars(props.num, () => {
            ctx.emit('getStarNum', starNum.value);
        })

        return {
            starNum,
            setStarNum
        }
    }
}
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: "iconfont"; /* Project id 4566846 */
        src: url('//at.alicdn.com/t/c/font_4566846_x8gq5nu8ok.woff2?t=1717420961075') format('woff2'),
            url('//at.alicdn.com/t/c/font_4566846_x8gq5nu8ok.woff?t=1717420961075') format('woff'),
            url('//at.alicdn.com/t/c/font_4566846_x8gq5nu8ok.ttf?t=1717420961075') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #999;

        &.icon-stars {
            transition: color .3s;
        }

        &.icon-stars:before {
            content: "\e724";
        }

        &.icon-close:before {
            content: "\e693";
        }

        &.active {
            color: red;
        }
    }

</style>