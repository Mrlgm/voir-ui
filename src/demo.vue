<template>
    <div class="demo">
        <vi-collapse :selected.sync="arr1">
            <vi-collapse-item title="财经" name="finance"> 这是财经的内容</vi-collapse-item>
            <vi-collapse-item title="体育" name="sports"> 这是体育的内容</vi-collapse-item>
            <vi-collapse-item title="美女" name="beauty"> 这是美女的内容</vi-collapse-item>
        </vi-collapse>
        {{arr1}}
        <vi-collapse :selected.sync="arr2" single>
            <vi-collapse-item title="财经" name="finance"> 这是财经的内容</vi-collapse-item>
            <vi-collapse-item title="体育" name="sports"> 这是体育的内容</vi-collapse-item>
            <vi-collapse-item title="美女" name="beauty"> 这是美女的内容</vi-collapse-item>
        </vi-collapse>
        {{arr2}}
    </div>
</template>

<script>
    import Switch from './form/switch/switch'
    import Input from './form/input/input'
    import Collapse from '@/layout/collapse/collapse'
    import CollapseItem from '@/layout/collapse/collapse-item'

    export default {
        name: 'demo',
        components: {
            'vi-switch': Switch,
            'vi-input': Input,
            'vi-collapse': Collapse,
            'vi-collapse-item': CollapseItem,
        },
        data() {
            return {
                arr1:['finance', 'sports', 'beauty'],
                arr2:['finance']
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

    .demo {
        margin-top: 100px;
        margin-left: 100px;
        width: 700px;
    }
</style>