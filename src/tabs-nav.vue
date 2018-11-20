<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ViTabsNav",
        inject: ['eventBus']
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-nav {
        display: flex;
        justify-content: flex-start;

        height: $tab-height;
        border: 1px solid red;
        > .actions {
            margin-left: auto;
        }
    }
</style>