<template>
    <div class="vi-slides">
        <div ref="window" class="vi-slides-window" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
            <div class="vi-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="vi-slides-dots">
            <span v-for="n in  childrenLength" :class="{active:selectedIndex === n - 1}" @click="select(n - 1)">
                {{n - 1 }}
            </span>
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
                default: false
            }
        },
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timerId: undefined
            }
        },
        computed: {
            selectedIndex() {
                return this.names.indexOf(this.selected) || 0
            },
            names() {
                return this.$children.map(vm => vm.name)
            }
        },
        mounted() {
            this.updateChildren()
            this.playAutomatically()
            this.childrenLength = this.$children.length
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            onMouseEnter() {
                this.pause()
            },
            onMouseLeave() {
                this.playAutomatically()
            },
            updateChildren() {
                let selected = this.getSelected()
                this.$children.forEach((vm) => {
                    vm.reverse = this.selectedIndex < this.lastSelectedIndex
                    this.$nextTick(() => {
                        vm.selected = selected
                    })
                })
            },
            select(index) {
                this.lastSelectedIndex = this.selectedIndex
                this.$emit('update:selected', this.names[index])
            },
            getSelected() {
                let first = this.$children[0]
                return this.selected || first.name
            },
            playAutomatically() {
                //用setTimeout模拟setInterval
                if (this.timerId) {
                    return
                }
                let run = () => {
                    let index = this.names.indexOf(this.getSelected())
                    let newIndex = index - 1
                    if (newIndex === -1) {
                        newIndex = this.names.length - 1
                    }
                    if (newIndex === this.names.length) {
                        newIndex = 0
                    }
                    this.select(newIndex)
                    this.timerId = setTimeout(run, 3000)
                }
                this.timerId = setTimeout(run, 3000)

            },
            pause() {
                window.clearTimeout(this.timerId)
                this.timerId = undefined
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-slides {
        border: 1px solid black;

        &-window {
            overflow: hidden;
        }

        &-wrapper {
            position: relative;
        }

        .vi-slides-dots {
            > span {
                &.active {
                    background-color: red;
                }
            }

        }
    }
</style>