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
                    const names = this.$children.map(vm => vm.name)
                    let newIndex = names.indexOf(selected)
                    let oldIndex = names.indexOf(vm.selected)
                    vm.reverse = newIndex <= oldIndex
                })
            },
            getSelected() {
                let first = this.$children[0]
                return this.selected || first.name
            },
            playAutomatically() {
                const names = this.$children.map(vm => vm.name)
                let index = names.indexOf(this.getSelected())
                //用setTimeout模拟setInterval
                let run = () => {
                    let newIndex = index - 1
                    if (newIndex === -1) {
                        newIndex = names.length - 1
                    }
                    if (newIndex === names.length) {
                        newIndex = 0
                    }
                    this.$emit('update:selected', names[newIndex])
                    setTimeout(run, 3000)
                }
                setTimeout(run, 3000)

            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-slides {
        border: 1px solid black;
        &-window{
            overflow: hidden;
        }
        &-wrapper {
            position: relative;
        }
    }
</style>