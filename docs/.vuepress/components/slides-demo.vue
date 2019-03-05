<template>
    <div>
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
    import ViSlides from '../../../src/other/slides/slides'
    import ViSlidesItem from '../../../src/other/slides/slides-item'
    export default {
        name: "slides-demo",
        components: {
            ViSlides,
            ViSlidesItem
        },
        data() {
            return {
                selected: '1'
            }
        },
    }
</script>

<style lang="scss" scoped>
    .box {
        height: 400px;
        background-color: #ddd;
    }
</style>