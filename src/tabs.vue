<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "ViTabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            if (this.$children.length === 0){
                console.warn('tabs的子组件是 tabs-nav 和 tabs-content，请添加子组件')
            }
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'ViTabsNav') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'ViTabsItem' && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })

        }
    }
</script>

<style scoped>

</style>