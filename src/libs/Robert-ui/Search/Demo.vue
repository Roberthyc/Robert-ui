<template>
    <div class="search-component">
        <div class="input-box">
            <input 
                type="number"
                placeholder="请输入分数"
                @input="setScore"
                :value="searchedScore"
            >
            <button 
                @click="setFilterRegular('up')"
                :class="['regular-btn', { active: filterRegular === 'up'}]"
            >较高</button>
            <button 
                @click="setFilterRegular('down')"
                :class="['regular-btn', { active: filterRegular === 'down'}]"
            >较低</button>
        </div>
        <div class="menu" v-show="menuShow">
            <ul>
                <li
                    v-for="item of menuList"
                    :key="item.id"
                >
                    <input 
                        type="checkbox"
                        @click="setChecked(item)"
                        :checked="getChecked(item.id)"
                    />
                    <span>{{ item.name }}</span>
                    <span>{{ item.score }}</span>
                </li>
            </ul>
        </div>
        <div class="checked-list">
            <ul>
                <li
                    v-for="item of checkedList"
                    :key="item.id"
                >
                    <input 
                        type="checkbox"
                        @click="setChecked(item)"
                        :checked="getChecked(item.id)"
                    />
                    <span>{{ item.name }}</span>
                    <span>{{ item.score }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import students from '../../../data/students'

export default {
    name: 'Demo',
    data() {
        return {
            searchedScore: 0,
            filterRegular: 'up',
            menuShow: false,
            menuList: [],
            checkedList: []
        }
    },
    methods: {
        setScore(e) {
            this.searchedScore = Number(e.target.value);
            this.filterStudents();
        },
        setFilterRegular(regular) {
            this.filterRegular = regular;
            this.filterStudents();
        },
        // 判断CheckBox里面是否有数据
        getChecked(id) {
            return this.checkedList.some(item => item.id === id);
        },
        setChecked(info) {
            const hasThisItem = this.getChecked(info.id);
            if (hasThisItem) {
                // 删除
                this.checkedList = this.checkedList.filter(item => item.id !== info.id);
            } else {
                // 添加
                this.checkedList.push(info);
            }
        },
        filterStudents () {
            switch (this.filterRegular) {
                case 'up':
                    // 注意这里的函数是小括号而不是大括号
                    this.menuList = students.filter((item) => (
                        item.score >= this.searchedScore
                    ));
                    break;
                case 'down':
                    this.menuList = students.filter((item) => (
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
    .active {
        background-color: #000;
        color: #fff;
    }
</style>