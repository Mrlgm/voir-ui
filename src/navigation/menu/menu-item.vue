<template>
    <div class="vi-menu-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ViMenuItem",
        inject: ['root'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                selected: false
            }
        },
        created() {
            this.root.addItem(this)
        },
        methods: {
            onClick() {
                this.root.namePath = []
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit('add:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/_var";

    .vi-menu-item {
        padding: 10px 20px;
        position: relative;

        &.selected {
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
    }

    .vi-submenu .vi-menu-item {
        &.selected {
            background-color: $grey;
            color: #000;

            &::after {
                display: none;
            }
        }
    }
</style>