<template>
    <div class="demo_div"></div>
</template>

<script>
    export default {
        name: "box-sizing"
    }
</script>

<style lang="scss">
    .demo {
        *, *::after, *::before {
            box-sizing: border-box;
        }
    }
    .demo_div{
        margin: 0;
        padding: 0;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        right: 0;
    }
</style>