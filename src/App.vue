<!-- 轮播图组件 -->
<!-- <template>
  <div id="app">
    <div class="container">
      <carousel
        :autoplay="true"
        :duration="2000"
        :initial="0"
        :hasDot="true"
        :hasDirector="true"
      >
        <car-item 
          v-for="(item, index) in carData" 
          :key="index"
        >
          <img :src="require(`./assets/img/${item.img_name}`)"/>
        </car-item>
      </carousel>
    </div>
  </div>

  
</template> 

<script>
import carData from '@/data/Carousel'

export default {
  name: 'App',
  setup () {
    return {
      carData  
    }
  }
}

</script>

<style lang="scss" scoped>
  .container {
    width: 520px;
    height: 280px;
    margin: 150px auto;
  }
</style> -->

<!-- 放大镜组件 -->
<!-- <template>
  <div class="wrapper">
    <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    />
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F22%2F20180722104435_pskfs.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1718273085&t=4af36499e86e1d24391113ed2f125b61',
      imgAlt: '裴秀智',
      blank: true,
      link: 'https://www.baidu.com',
      imgWidth: 500,
      imgHeight: 748,
      magWidth: 150,
      magHeight: 150,
    });
    
    return {
      ...toRefs(state) // 平铺state中的所有属性
    }
  }
}
</script>

<style lang="scss" >
  .wrapper {
      width: 500px;
      height: 748px;
      margin: 100px auto;
  }
</style> -->

<!-- 递归菜单组件 -->
<!-- <template>
  <div id="app">
    <div class="side-bar">
      <tree-menu>
        <div v-for="item of menuData"> -->
          <!-- // 如果没有孩子才会执行menuitem，否则执行ReSubMenu -->
          <!-- <menu-item
            v-if="!item.children"
            :key="item.id"
          >
            <a href="">{{ item.title }}</a>
          </menu-item>
          <re-sub-menu
            :key="item.id"
            :data="item"
            v-else
          ></re-sub-menu>
        </div>
      </tree-menu>
    </div>
  </div>
</template>

<script>
import menuData from '@/data/menu'
export default { 
  name: 'App',
  setup () {
    return {
      menuData
    }
  }
}
</script>

<style lang="scss" scoped>
  .side-bar {
    width: 300px;
  }
</style> -->

<!-- <template>
  <div> -->
    <!-- <message-ui
      type="message"
      message="This is a warning text"
      :duration="3000"
    ></message-ui> -->
    <!--<button @click="Message.success({
      message: 'This is a success text'
    })"> Show Success</button>
    <button @click="Message.warning({
      message: 'This is a warning text'
    })"> Show Warning</button>
    <button @click="Message({
      type: types.MESSAGE,
      message: 'This is a message text'
    })"> Show Message</button>
    <button @click="Message({
      type: types.ERROR,
      message: 'This is a error text'
    })"> Show Error</button>
  </div>
</template>

<script setup>
  import Message, {types} from './libs/Robert-ui/Message';
  // import MessageUi from './libs/Robert-ui/Message/Message.vue'
</script>

<style>

</style> -->

<!-- MessageBox组件 -->
<!-- <template>
  <div>
    <button @click="showMessageBox"> Show MessageBox</button>
    <button @click="showConfirmMessage"> Show Confirm MessageBox</button>
    <button @click="showPromptMessageBox"> Show Prompt MessageBox</button>
  </div>
</template>

<script setup>
  import { MessageBox } from './libs/Robert-ui/index.js'

  const showMessageBox = () => {
    MessageBox({
      confirmBtnText: '确定',
      title: 'MessageBox',
      content: 'This is a content.'
    }).then(() => {
      console.log('MessageBox resolve');
    }).catch(() => {
      console.log('MessageBox reject');
    });
  }

  const showConfirmMessage = () => {
    MessageBox.confirm({
      showCancelBtn: true,
      title: 'Confirm MessageBox',
      cancelBtnText: '取消',
      content: 'This is a ConfirmMessageBox content.'
    }).then(() => {
      console.log('ConfirmMessageBox resolve');
    }).catch(() => {
      console.log('ConfirmMessageBox reject');
    });
  }

  const showPromptMessageBox = () => {
    MessageBox.prompt({
      showCancelBtn: true,
      title: 'Prompt MessageBox',
      confirmBtnText: '确定',
      cancelBtnText: '取消',
      content: 'This is a PromptMessageBox content.'
    }).then((value) => {
      console.log('PromptMessageBox resolve', value);
    }).catch(() => {
      console.log('PromptMessageBox reject');
    });
  }
</script>

<style lang="scss" scoped>

</style> -->

<!-- <template>
  <div id="app">-->
    <!-- <demo></demo> -->
    <!--<search></search>
  </div>
</template>

<script>
import Demo from './libs/Robert-ui/Search/Demo.vue';
import Search from './libs/Robert-ui/Search/Search.vue'
import students from '../src/data/students'

export default {
  name: 'App',
  components: {
    // Demo
    Search
  },
  data() {
    return {
      students
    }
  },
}
</script>

<style lang="scss" scoped>

</style> -->

<template>
  <div class="wrapper">
    <Stars 
      :num="num" 
      :size="size"
      @getStarNum="getStarNum"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'App',
  setup () {
    const state = reactive({
      num: 1,
      size: 50
    })

    // 在这里我们拿到了点亮的星星数量，之后就可以通过这个来开展相应的业务逻辑了，比如传递给后端数据库进行统计等等
    const getStarNum = (num) => {
      console.log(num); 
    }

    return {
      getStarNum,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 375px;
    margin: 100px auto;
  }
</style>
