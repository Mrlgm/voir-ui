<template>
    <div class="vi-submenu">
        <slot name="title"></slot>
        <div class="vi-submenu-popover">
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
                selected: false
            }
        },
        methods: {
            onClick() {
                this.$emit('add:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-submenu {
        position: relative;
        padding: 10px 20px;

        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
        }
    }
</style>