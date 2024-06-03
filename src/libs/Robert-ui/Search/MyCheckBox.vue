<template> 
    <div class="my-checkbox">
        <label :for="id" class="my-checkbox-lbl">
            <input type="checkbox" :id="id" @click="doCheck"/>
            <span class="icon"></span>
        </label>
        <span class="text">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'MyCheckBox',
    props: {
        id: String | Number
    },
    methods: {
        doCheck() {
            this.$emit('click', this.id);
        }
    }
}
</script>

<style lang="scss" scoped>
        
    .my-checkbox-lbl {
        display: inline-block;
        position: relative;
        width: 12px;
        height: 12px;
        border: 1px solid #333;
        border-radius: 50%;
        margin-right: 5px;
        vertical-align: -5px;

        input {
            visibility: hidden;

            &:checked + .icon {
                display: block;
            }
        }

        .icon {
            display: none;
            position: absolute;
            top: 3px;
            left: 3px;
            width: 6px;
            height: 6px;
            background-color: blue;
            border-radius: 50%;
            
        }
    }
</style>