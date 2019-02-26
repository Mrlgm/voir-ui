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
            },
            autoPlay: {
                type: Boolean,
                default: true
            }
        },
        created() {

        },
        mounted() {
            this.updateChildren()
            this.playAutomatically()
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            updateChildren() {
                let selected = this.getSelected()
                this.$children.forEach((vm) => {
                    vm.selected = selected
                })
            },
            getSelected() {
                let first = this.$children[0]
                return this.selected || first.name
            },
            playAutomatically() {
                const names = this.$children.map(vm => vm.name)
                let index = names.indexOf(this.getSelected())
                setInterval(() => {
                    if (index === names.length) {
                        index = 0
                    }
                    console.log(index)
                    this.$emit('update:selected', names[index + 1])
                    index++
                }, 3000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-slides {
        display: inline-block;
        border: 1px solid black;

        &-wrapper {
            position: relative;
        }
    }
</style>