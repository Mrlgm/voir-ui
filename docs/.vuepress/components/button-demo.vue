<template>
    <div class="demo">
        <vi-button>默认按钮</vi-button>
        <vi-button icon="settings">设置</vi-button>
        <vi-button :loading="true">加载</vi-button>
        <vi-button isRipple>波纹</vi-button>
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
        padding: 10px;
    }

</style>
