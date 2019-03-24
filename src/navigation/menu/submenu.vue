<template>
    <div class="vi-submenu" :class="{active}" v-click-outside="close">
        <span class="vi-submenu-label" @click="onClick">
             <slot name="title"></slot>
            <span class="vi-submenu-icon" :class="{open}">
                <vi-icon name="right"></vi-icon>
            </span>
        </span>
        <template v-if="vertical">
            <transition @after-enter="afterEnter" @enter="enter" @leave="leave" @after-leave="afterLeave">
                <div class="vi-submenu-popover" v-show="open" :class="{vertical}">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="vi-submenu-popover" v-show="open" :class="{vertical}">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
    import ClickOutside from './click-outside'
    import ViIcon from '../../basic/icon/icon'

    export default {
        name: "ViSubmenu",
        components: {ViIcon},
        directives: {ClickOutside},
        inject: ['root', 'vertical'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        },
        computed: {
            active() {
                return this.root.namePath.indexOf(this.name) >= 0
            }
        },
        methods: {
            onClick() {
                this.open = !this.open
            },
            updateNamePath() {
                this.root.namePath.unshift(this.name)
                if (this.$parent.updateNamePath) {
                    this.$parent.updateNamePath()
                }
            },
            close() {
                this.open = false
            },
            enter(el, done) {
                el.style.height = 'auto'
                let {height} = el.getBoundingClientRect()
                el.style.height = '0'
                el.getBoundingClientRect() //避免浏览器只渲染一次，'0'和'height'合并
                el.style.height = `${height}px`
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterEnter(el) {
                el.style.height = 'auto'
            },
            leave(el, done) {
                let {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.getBoundingClientRect() //避免浏览器只渲染一次，'0'和'height'合并
                el.style.height = '0'
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterLeave(el) {
                el.style.height = 'auto'
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/_var";

    .vi-submenu {
        position: relative;

        &.active {
            &::after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                border-bottom: 2px solid $blue;
            }
        }


        &-label {
            padding: 10px 20px;
            display: block;
        }

        &-icon {
            display: none;
        }

        &-popover {
            position: absolute;
            background-color: #fff;
            font-size: $font-size;
            color: $light-color;
            top: 100%;
            left: 0;
            margin-top: 4px;
            min-width: 8em;
            white-space: nowrap;
            box-shadow: 0 0 3px $grey;
            border-radius: $border-radius;

            &.vertical {
                position: static;
                border-radius: 0;
                border: none;
                box-shadow: none;
                transition: height .25s;
                overflow: hidden;
            }
        }
    }

    .vi-submenu .vi-submenu {
        &.active {
            &::after {
                display: none;
            }
        }

        .vi-submenu-popover {
            top: 0;
            left: 100%;
            margin-left: 8px;
        }

        .vi-submenu-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .vi-submenu-icon {
            display: inline-flex;
            margin-left: 1em;

            svg {
                fill: $light-color;
            }

            transition: transform .25s;

            &.open {
                transform: rotate(180deg);
            }
        }

    }
</style>