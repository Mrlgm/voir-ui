<template>
    <div class="demo">
        <vi-button @click="onClickButton">上方弹出</vi-button>
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
        },
        methods: {
            onClickButton() {
                this.$toast('你知道1+1等于几吗？', {
                    closeButton: {
                        text: '知道',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            }
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