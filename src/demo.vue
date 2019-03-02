<template>
    <div class="demo">
        <vi-slides class="wrapper" :selected.sync="selected">
            <vi-slides-item name="1">
                <div class="box">1</div>
            </vi-slides-item>
            <vi-slides-item name="2">
                <div class="box">2</div>
            </vi-slides-item>
            <vi-slides-item name="3">
                <div class="box">3</div>
            </vi-slides-item>
        </vi-slides>
    </div>
</template>

<script>
    import ViSlides from './other/slides/slides'
    import ViSlidesItem from './other/slides/slides-item'

    export default {
        name: 'demo',
        components: {
            ViSlides,
            ViSlidesItem
        },
        data() {
            return {
                selected: '1'
            }
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

    .wrapper {
        margin: 40px;
    }

    .box {
        height: 400px;
        background-color: #ddd;
    }
</style>