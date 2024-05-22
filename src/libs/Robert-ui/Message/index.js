import types from './types';
import MessageComponent from './Message.vue';
import { createApp, ref, watch } from 'vue';
import { findIndex } from './util'

const messageArr = ref([]);

const Message = (options) => {
    const messageApp = createApp(MessageComponent, options);
    showMessage(messageApp);
}

// 该方法需要学习，告诉你如何调用方法里的方法
Object.values(types).forEach(type => {
    Message[type] = (options) => {
        // 调用 Message 组件的实例方法,例如Message.success()
        options.type = type;
        return Message(options);
    }
});

// 显示弹窗信息
function showMessage(app, duration) {
    const oFrag = document.createDocumentFragment(); // 这里获取文档碎片
    const vm = app.mount(oFrag); // 这里不可以直接挂载#app,因为会覆盖掉原先的div
    messageArr.value.push(vm);
    document.body.appendChild(oFrag);
    vm.setVisible(true);

    setTop(vm);
    // 监视messageArr，只要更改就重新执行setTop
    watch(messageArr, () => setTop(vm));
    hideMessage(app, vm, duration);
}

// 隐藏弹窗信息
function hideMessage(app, vm, duration) {
    vm.timer = setTimeout(async () => {
        await vm.setVisible(false); // 使用异步让退场动画不是突然消失
        app.unmount();
        messageArr.value = messageArr.value.filter(item => item !== vm);
        clearTimeout(vm.timer);
        vm.timer = null;
    }, duration || 3000);
}

function setTop (vm) {
    const { setTop, height, margin } = vm;
    const currentIndex = findIndex(messageArr.value, vm);
    setTop(margin * (currentIndex + 1) + height * currentIndex);
}

export {
    types
}
export default Message;