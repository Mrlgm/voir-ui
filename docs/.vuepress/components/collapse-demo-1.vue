<template>
    <div class="demo">
        <vi-collapse single :selected="['finance']">
            <vi-collapse-item title="财经" name="finance"> 这是财经的内容</vi-collapse-item>
            <vi-collapse-item title="体育" name="sports"> 这是体育的内容</vi-collapse-item>
            <vi-collapse-item title="美女" name="beauty"> 这是美女的内容</vi-collapse-item>
        </vi-collapse>
    </div>
</template>

<script>
    import Collapse from '../../../src/layout/collapse/collapse'
    import CollapseItem from '../../../src/layout/collapse/collapse-item'

    export default {
        components: {
            'vi-collapse': Collapse,
            'vi-collapse-item': CollapseItem,
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