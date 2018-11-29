<template>
    <div class="demo">
        <vi-button-group class="button-group">
            <vi-button icon="left">上一页</vi-button>
            <vi-button>1</vi-button>
            <vi-button>2</vi-button>
            <vi-button>3</vi-button>
            <vi-button icon="right" icon-position="right">下一页</vi-button>
        </vi-button-group>
        <vi-button-group allRipple>
            <vi-button icon="left">上一页</vi-button>
            <vi-button>1</vi-button>
            <vi-button>2</vi-button>
            <vi-button>3</vi-button>
            <vi-button icon="right" icon-position="right">下一页</vi-button>
        </vi-button-group>
    </div>
</template>

<script>
    import Button from '../../../src/basic/button/button'
    import ButtonGroup from '../../../src/basic/button-group/button-group'

    export default {
        components: {
            'vi-button': Button,
            'vi-button-group': ButtonGroup
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        .button-group{
            margin-right: 10px;
        }
    }
</style>