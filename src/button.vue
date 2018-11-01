<template>
    <button class="vi-button">按钮</button>
</template>

<script>

    export default {
    }
</script>

<style lang="scss" scoped>
    .vi-button {
        font-style: var(--font-size);
        height: var(--button--height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>