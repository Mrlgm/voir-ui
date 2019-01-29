<template>
    <div class="demo">
        <vi-popover>
            <vi-button>上方弹出</vi-button>
            <template slot="content">
                弹出内容
            </template>
        </vi-popover>
        <vi-popover position="bottom">
            <vi-button>下方弹出</vi-button>
            <template slot="content">
                弹出内容
            </template>
        </vi-popover>
        <vi-popover position="left">
            <vi-button>左边弹出</vi-button>
            <template slot="content">
                弹出内容
            </template>
        </vi-popover>
        <vi-popover position="right">
            <vi-button>右边弹出</vi-button>
            <template slot="content">
                弹出内容
            </template>
        </vi-popover>
    </div>
</template>

<script>
    import Popover from '../../../src/other/popover/popover'
    import Button from '../../../src/basic/button/button'

    export default {
        components: {
            'vi-popover': Popover,
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