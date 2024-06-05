import { mounted } from "vue";

export default {
    mounted (el) {
        const oSelectorInput = el.querySelector('.selector-input'),
              oSelectorMenu = el.querySelector('.selector-menu');

        const oInput = oSelectorInput.querySelector('input'),
              oPlaceHolder = oSelectorInput.querySelector('label'),
              oIcon = oSelectorInput.querySelector('span');

        oInput.addEventListener('focus', function() {
            oPlaceHolder.style.display = 'none';
            oIcon.className = 'iconfont icon-search';
            
            // 这里必须使用延迟操作来实现异步效果，否则点击菜单的东西将无法触发事件，只会直接隐藏
            setTimeout(() => {
                oSelectorMenu.style.display = 'block';
            }, 200)
        }, false)

        oInput.addEventListener('blur', function() {
            oIcon.className = 'iconfont icon-arrow-down';

            setTimeout(() => {
                oSelectorMenu.style.display = 'none';
                if (this.value.length === 0) {
                    oPlaceHolder.style.display = 'block';
                }
            }, 200)
        }, false)
    }
}