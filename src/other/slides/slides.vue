<template>
    <div class="vi-slides"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @touchstart="onTouchStart"
         @touchmove="onTouchMove"
         @touchend="onTouchEnd">
        <div ref="window" class="vi-slides-window">
            <div class="vi-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="vi-slides-dots">
            <span v-for="n in  childrenLength" :key="n" :data-index="n-1" :class="{active:selectedIndex === n - 1}"
                  @click="select(n - 1)">

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
            },
            autoPlayDelay:{
                type:Number,
                default: 3000
            }
        },
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timerId: undefined,
                startTouch: undefined
            }
        },
        computed: {
            selectedIndex() {
                let index = this.names.indexOf(this.selected)
                return index === -1 ? 0 : index
            },
            names() {
                return this.items.map(vm => vm.name)
            },
            items() {
                return this.$children.filter(vm => vm.$options.name === 'ViSlidesItem')
            }
        },
        mounted() {
            this.updateChildren()
            if (this.autoPlay) {
                this.playAutomatically()
            }
            this.childrenLength = this.items.length
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
            onTouchStart(e) {
                this.pause()
                if (!e.touches.length) {
                    return
                }
                this.startTouch = e.touches[0]
            },
            onTouchMove() {

            },
            onTouchEnd(e) {
                let {clientX: x1, clientY: y1} = this.startTouch
                let {clientX: x2, clientY: y2} = e.changedTouches[0]

                let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
                let deltaY = Math.abs(y2 - y1)
                let rate = distance / deltaY
                if (rate > 2) {
                    if (x2 > x1) {
                        this.select(this.selectedIndex - 1)
                    } else {
                        this.select(this.selectedIndex + 1)
                    }
                }
                this.$nextTick(() => {
                    this.playAutomatically()
                })
            },
            updateChildren() {
                let selected = this.getSelected()
                this.items.forEach((vm) => {
                    let reverse = this.selectedIndex < this.lastSelectedIndex
                    if (this.timerId) {
                        if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
                            reverse = false
                        }
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
                            reverse = true
                        }
                    }
                    vm.reverse = reverse
                    this.$nextTick(() => {
                        vm.selected = selected
                    })
                })
            },
            select(newIndex) {
                this.lastSelectedIndex = this.selectedIndex
                if (newIndex === -1) {
                    newIndex = this.names.length - 1
                }
                if (newIndex === this.names.length) {
                    newIndex = 0
                }
                this.$emit('update:selected', this.names[newIndex])
            },
            getSelected() {
                let first = this.items[0]
                return this.selected || first.name
            },
            playAutomatically() {
                //用setTimeout模拟setInterval
                if (this.timerId) {
                    return
                }
                let run = () => {
                    let index = this.names.indexOf(this.getSelected())
                    let newIndex = index + 1

                    this.select(newIndex)
                    this.timerId = setTimeout(run, this.autoPlayDelay)
                }
                this.timerId = setTimeout(run, this.autoPlayDelay)

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
        position: relative;

        &-window {
            overflow: hidden;
        }

        &-wrapper {
            position: relative;
        }

        .vi-slides-dots {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);

            > span {
                transition: all .5s;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #ddd;
                display: inline-flex;
                box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.75);
                opacity: 0.5;
                margin: 0 8px;
                cursor: pointer;

                &.active {
                    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.75);
                    width: 12px;
                    height: 12px;
                }
            }

        }
    }
</style>