<template>
    <div class="vi-submenu" :class="{active}" v-click-outside="close">
        <span @click="onClick">
             <slot name="title"></slot>
        </span>
        <div class="vi-submenu-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ClickOutside from './click-outside'

    export default {
        name: "ViSubmenu",
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

        > span {
            padding: 10px 20px;
            display: block;
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

    .vi-submenu .vi-submenu .vi-submenu-popover {
        top: 0;
        left: 100%;
        margin-left: 4px;
    }
</style>