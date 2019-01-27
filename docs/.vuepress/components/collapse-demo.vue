<template>
    <vi-collapse single>
        <vi-collapse-item title="财经" name="1"> 这是内容</vi-collapse-item>
    </vi-collapse>
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