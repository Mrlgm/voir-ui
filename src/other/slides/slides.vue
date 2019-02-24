<template>
    <div class="vi-slides">
        <div ref="window" class="vi-slides-window">
            <div class="vi-slides-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViSlides",
        props: {
            selected: {
                type: String,
            }
        },
        created() {

        },
        mounted() {
            let first = this.$children[0]
            this.updateChildren(this.selected || first.name)

        },
        updated() {
            this.updateChildren(this.selected)
        },
        methods: {
            updateChildren(selected) {
                this.$children.forEach((vm) => {
                    vm.selected = selected
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-slides {
        display: inline-block;
        border: 1px solid red;

        &-wrapper {
            position: relative;
        }
    }
</style>