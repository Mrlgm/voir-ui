<template>
    <div class="vi-submenu" :class="{active}" v-click-outside="close">
        <span class="vi-submenu-label" @click="onClick">
             <slot name="title"></slot>
            <span class="vi-submenu-icon" :class="{open}">
                <vi-icon  name="right"></vi-icon>
            </span>
        </span>
        <div class="vi-submenu-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ClickOutside from './click-outside'
    import ViIcon from '../../basic/icon/icon'

    export default {
        name: "ViSubmenu",
        components: {ViIcon},
        directives: {ClickOutside},
        inject: ['root'],
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
            }
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