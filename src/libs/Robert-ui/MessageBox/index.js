import MessageBoxComponent from './MessageBox.vue'
import { createApp, watch } from 'vue';

export const fields = ['confirm', 'prompt'];

// 在本代码中，构造MessageBox.confirm()和MessageBox.prompt()方法，分别调用MessageBox的方法很巧妙，需记住
const MessageBox = (options) => {
    const MessageBoxApp = createApp(MessageBoxComponent, options);

    return new Promise((resolve, reject) => {
        showMessageBox(MessageBoxApp, { resolve, reject });
    }) 
}

fields.forEach(field => {
    MessageBox[field] = (options) => {
        options.field = field;
        return MessageBox(options);
    }
})

const showMessageBox = (app, { resolve, reject }) => {
    const oFrgment = document.createDocumentFragment();
    const vm = app.mount(oFrgment);
    document.body.appendChild(oFrgment);
    vm.setVisible(true);

    watch(vm.state, (state) => {
        if (!state.visible) {
            switch (state.type) {
                case 'cancel':
                    reject();
                    break;
                case 'confirm':
                    resolve(state.promptValue);
                    break;
                default:
                    break;
            }

            hideMessageBox(app);
        }
    })
}

const hideMessageBox = (app) => {
    app.unmount();
}

export default MessageBox;