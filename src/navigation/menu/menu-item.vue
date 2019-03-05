<template>
    <div class="vi-menu-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ViMenuItem",
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
        methods: {
            onClick() {
                this.$emit('add:selected',this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-menu-item {
        padding: 10px 20px;

        &.selected {
            background-color: red;
        }
    }
</style>