<template>
    <div class="vi-menu" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ViMenu",
        provide() {
            return {
                root: this,
                vertical: this.vertical
            }
        },
        props: {
            selected: {
                type: String
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                items: [],
                namePath: []
            }
        },
        mounted() {
            this.updateChildren()
            this.listenToChildren()
        },
        updated() {
            this.updateChildren()
        },
        computed: {},
        methods: {
            addItem(vm) {
                this.items.push(vm)
            },
            updateChildren() {
                this.items.forEach((vm) => {
                    vm.selected = this.selected === vm.name;

                })
            },
            listenToChildren() {
                this.items.forEach((vm) => {
                    vm.$on('update:selected', (name) => {
                        this.$emit('update:selected', name)
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/_var";

    .vi-menu {
        display: flex;
        border-bottom: 1px solid $grey;
        cursor: default;

        &.vertical {
            flex-direction: column;
            border: 1px solid $grey;
        }
    }
</style>