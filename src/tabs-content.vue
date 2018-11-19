<template>
    <div class="tabs-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ViTabsContent",
        inject:['eventBus'],

    }
</script>

<style scoped>

</style>