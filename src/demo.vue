<template>
    <div class="demo">
        <vi-slides>
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
        </vi-slides>
    </div>
</template>

<script>
    import slides from './other/slides/slides'

    export default {
        name: 'demo',
        components: {
            "vi-slides": slides
        },
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --font-size: 14px;
    }

    body {
        font-size: var(--font-size);
    }

    .demo {
        margin-top: 100px;
        margin-left: 100px;
        width: 700px;
    }

    .box{
        height: 100px;
        width: 100px;
        background-color: #ddd;
        border: 1px solid red;
    }
</style>