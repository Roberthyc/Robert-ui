<template>
    <input
        :type="type"
        :placeholder="placeholder"
        
        :value="value"
    />
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        type: {
            validator (value) {
                return [
                    'text',
                    'password',
                    'email',
                    'number'
                ].includes(value); // 验证要求输入的参数必须是数组中的值
            }
        },
        placeholder: String,
        value: String | Number
    },
    methods: {
        // setValue (e) {
        //     const _value = e.target.value;

        //     if (_value.length > 0) {
        //         this.$emit('input', _value);
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>

</style>