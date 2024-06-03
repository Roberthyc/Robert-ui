<template>
    <div class="search-component">
        <div class="search-input">
            <my-input
                type="number"
                placeholder="请输入分数"
                @input.native="setScore"
                :value="searchedScore"
            ></my-input>
            <my-button-group
                :regulars="regulars"
                :current="currentRegular"
                @click="setCurrentRegular"
            ></my-button-group>
            <my-menu
                :show="menuShow"
                :data="menuList"
            ></my-menu>
        </div>
        
    </div>
</template>

<script>
import MyInput from './MyInput';
import MyButtonGroup from './MyButtonGroup';
import MyMenu from './MyMenu'

export default {
    name: 'Search',
    components: {
        MyInput,
        MyButtonGroup,
        MyMenu
    },
    props: {
        data: Array
    },
    data () {
        return {
            searchedScore: 0,
            currentRegular: 'up',
            menuList: [],
            menuShow: false,
            regulars: [{
                regular: 'up',
                text: '以上'
            },
            {
                regular: 'down',
                text: '以下'
            }]
        }
    },
    methods: {
        setScore (e) {
            const _value = e.target.value;
            if (_value.length > 0) {
                this.searchedScore = Number(_value);
                this.filterStudents();m 
            }
        },
        setCurrentRegular (regular) {
            this.currentRegular = regular;
            this.filterStudents();
        },
        filterStudents () {
            switch (this.currentRegular) {
                case 'up':
                    // 注意这里的函数是小括号而不是大括号
                    this.menuList = (this.data || []).filter((item) => (
                        item.score >= this.searchedScore
                    ));
                    break;
                case 'down':
                    this.menuList = (this.data || []).filter((item) => (
                        item.score < this.searchedScore
                    ));
                    break;
                default:
                    break;
            } 
            
            this.menuShow = this.menuList.length > 0;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>