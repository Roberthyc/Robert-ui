<!-- item.vue实际上并没有在index.vue中出现，其中的数据传递是靠实例实现的，即getCurrentInstance -->
<template>
    <div class="carousel"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
    >
        <div class="inner">
            <CarDot
                :hasDot="hasDot"
                :itemLen="itemLen"
                :currentIndex="currentIndex"
                :dotBgColor="dotBgColor"
                @dotClick="dotClick"
            />
            <CarDirector
                dir="prev"
                @dirClick="dirClick"
            />
            <CarDirector
                dir="next"
                @dirClick="dirClick"
            />
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { 
        reactive, 
        toRefs,
        onMounted,
        onBeforeUnmount,
        getCurrentInstance,
    } from 'vue';

    import CarDot from './Dot.vue';
    import CarDirector from './Director.vue';

    export default {
        name: 'Carousel',
        components: {
            CarDot,
            CarDirector,
        },
        props: {
            autoplay: {
                type: Boolean,
                default: false,
            },
            duration: {
                type: Number,
                default: 2000,
            },
            initial: {
                type: Number,
                default: 0,
            },
            hasDot: {
                type: Boolean,
                default: true,
            },
            hasDirector: {
                type: Boolean,
                default: true,
            },
            dotBgColor: String
        },
        setup (props) {
            const instance = getCurrentInstance();

            const state = reactive ({
                currentIndex: props.initial,
                itemLen: 0,
            });

            let t = null;

            const autoPlay = () => {
                // 定时器
                if (props.autoplay) {
                t = setInterval(() => {
                    setIndex('next');
                    // 更新当前索引
                    // 更新DOM
                    // 更新指示器
                    // 更新按钮状态
                }, props.duration);
                }
            }

            const dotClick = (index) => {
                state.currentIndex = index;
            }

            const dirClick = (dir) => {
                setIndex(dir);
            }

            // 当鼠标进入轮播图时，轮播图停止轮播
            const mouseEnter = () => {
                _clearIntervalFn();
            }
            // 当鼠标离开该范围时，自动开始轮播
            const mouseLeave = () => {
                autoPlay();
            }

            // 轮播时的方向
            const setIndex = (dir) => {
                switch(dir) {
                    case 'next':
                        state.currentIndex++;
                        if (state.currentIndex === state.itemLen) {
                            state.currentIndex = 0;
                        }
                        break;
                    case 'prev':
                        state.currentIndex--;
                        if (state.currentIndex === -1) {
                            state.currentIndex = state.itemLen - 1;
                        }
                        break;
                    default:
                        break;
                }
            }
        
            // 组件挂载时启用autoPlay
            onMounted(() => {
                state.itemLen = instance.slots.default()[0].children.length;
                autoPlay();
            });

            onBeforeUnmount(() => {
                _clearIntervalFn();
            });

            // 清除定时器，停止轮播
            function _clearIntervalFn() {
                clearInterval(t);
                t = null;
            }

            // 视图里出现的函数一定都需要返回才能生效
            return {
                ...toRefs(state),
                dotClick,
                dirClick,
                mouseEnter,
                mouseLeave,
            }
        }
    };
</script>

<style lang="scss" scoped>
    .carousel {
        width: 100%;
        height: 100%;

        .inner {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }
    }
</style>