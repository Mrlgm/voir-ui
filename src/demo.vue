<template>
    <div class="demo">
        <vi-cascader popover-height="200px" :source="source" :selected.sync="selected"></vi-cascader>
        2222
        <vi-button>hhhh</vi-button>
    </div>
</template>

<script>
    import Cascader from './form/cascader/cascader'
    import Button from './basic/button/button'
    import db from './db'


    function ajax(parentId = 0) {
        return db.filter((item) => item.parent_id == parentId)
    }

    console.log(ajax());

    export default {
        name: "demo",
        components: {
            'vi-cascader': Cascader,
            'vi-button': Button
        },
        data() {
            return {
                selected: [],
                source: ajax()
            }
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