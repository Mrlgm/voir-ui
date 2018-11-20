<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ViTabsNav",
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (item, vm) => {

            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: #409EFF;
    .tabs-nav {
        display: flex;
        justify-content: flex-start;
        height: $tab-height;
        border: 1px solid red;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            width: 100px;
        }
        > .actions {
            margin-left: auto;
        }
    }
</style>