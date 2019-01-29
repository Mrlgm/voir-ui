<template>
    <div class="demo">
        <vi-button @click="$toast('点击弹出提示',{autoClose:false})">上方弹出</vi-button>
        <vi-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</vi-button>
        <vi-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</vi-button>
    </div>
</template>

<script>
    import Button from '../../../src/basic/button/button'
    import plugin from '../../../src/notice/toast/plugin'
    import Vue from 'vue'

    Vue.use(plugin)

    export default {
        components: {
            'vi-button': Button
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

</style>

<style>
    .vi-toast {
        z-index: 30 !important;
    }
</style>