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
            //this.$emit('update:selected', 'xxx')
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'ViTabsNav') {
                    vm.$children.forEach((item) => {
                        if (item.$options.name === 'ViTabsItem' && item.name === this.selected) {
                            this.eventBus.$emit('updated:selected', this.selected, item)
                        }
                    })
                }
            })

        }
    }
</script>

<style scoped>

</style>