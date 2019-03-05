<template>
    <div class="vi-menu">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ViMenu",
        props: {
            selected: {
                type: Array,
                default: []
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            console.log(this.items);
            this.updateChildren()
            this.listenToChildren()
        },
        updated() {
            this.updateChildren()
        },
        computed: {
            items() {
                return this.$children.filter((vm) => vm.$options.name === 'ViMenuItem')
            }
        },
        methods: {
            updateChildren() {
                this.items.forEach((vm) => {
                    vm.selected = this.selected.indexOf(vm.name) >= 0;
                })
            },
            listenToChildren() {
                this.items.forEach((vm) => {
                    vm.$on('add:selected', (name) => {
                        if (this.multiple) {
                            if (this.selected.indexOf(name) < 0) {
                                let copy = JSON.parse(JSON.stringify(this.selected))
                                copy.push(name)
                                this.$emit('update:selected', copy)
                            }
                        } else {
                            this.$emit('update:selected', [name])
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-menu {
        display: flex;
        border: 1px solid red;
    }
</style>