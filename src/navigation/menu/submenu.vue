<template>
    <div class="vi-submenu">
        <span @click="onClick">
             <slot name="title"></slot>
        </span>
        <div class="vi-submenu-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViSubmenu",
        props: {
            name: {
                type: String,

            }
        },
        data() {
            return {
                selected: false,
                open: false
            }
        },
        methods: {
            onClick() {
                this.open = !this.open
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/_var";

    .vi-submenu {
        position: relative;

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