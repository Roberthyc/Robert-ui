 <template>
    <button
        :class="['my-btn', type, { active }]"
    ><slot></slot></button>
 </template>

 <script>
// primary blue 
// success green
// danger red
// warning orange
export default {
    name: 'MyButton',
    props: {
        type: {
            default: 'primary',
            validator (value) {
                return [
                    'primary',
                    'success',
                    'danger',
                    'warning',
                ].includes(value);
            }
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}

</script>

<style lang="scss" scoped>
    .mybtn {
        
        &.primary {
            background-color: rgba(30, 30, 207, 0.658);
            color: #fff;
        }
        &.success {
            background-color: rgba(10, 125, 5, 0.658);
            color: #fff;
        }
        &.danger {
            background-color: rgba(207, 30, 30, 0.658);
            color: #fff;
        }
        &.warning {
            background-color: rgba(255, 140, 0, 0.658);
            color: #333;
        }
        &.active {
            background-color: #fff;
            color: #333;
        }
    }
</style>