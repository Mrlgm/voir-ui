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
    .vi-submenu {
        position: relative;

        >span{
            padding: 10px 20px;
            display: block;
        }

        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
        }
    }

    .vi-submenu .vi-submenu .vi-submenu-popover{

        top: 0;
        left: 100%;
    }
</style>