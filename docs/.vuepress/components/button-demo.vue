<template>
    <div class="demo">
        <vi-button class="button">默认按钮</vi-button>
        <vi-button class="button" icon="settings">设置</vi-button>
        <vi-button class="button" icon="settings" iconPosition="right">设置</vi-button>
        <vi-button class="button" :loading="true">加载</vi-button>
        <vi-button class="button" isRipple>波纹</vi-button>
    </div>
</template>

<script>
    import Button from '../../../src/basic/button/button'

    export default {
        components: {
            'vi-button': Button
        }
    }
</script>

<style lang="scss" scoped>
    .demo{
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        .button{
            margin-right: 10px;
        }
    }

</style>
