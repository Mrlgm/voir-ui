<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'ViContent'
    }
</script>

<style scoped>
.content{
    flex-grow: 1;
}
</style>