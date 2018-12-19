<template>
    <div class="demo">
        <div>
            <vi-cascader popover-height="200px" :source.sync="source" :selected.sync="selected"
                         :load-data="loadData"></vi-cascader>
        </div>
       <vi-popover>
           <template>
               <button>点我</button>
           </template>
           <template slot="content">
               弹出内容
           </template>
       </vi-popover>

    </div>
</template>

<script>
    import Cascader from './form/cascader/cascader'
    import Button from './basic/button/button'
    import db from './db'
    import Popover from './other/popover/popover'

    function ajax(parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parent_id === parentId)
                result.map(node => {
                    if (db.filter(item => item.parent_id === node.id).length > 0) {
                        node.isLeaf = false
                    } else {
                        node.isLeaf = true
                    }
                })
                success(result)
            }, 200)
        })
    }

    export default {
        name: "demo",
        components: {
            'vi-cascader': Cascader,
            'vi-button': Button,
            'vi-popover': Popover
        },
        data() {
            return {
                selected: [],
                source: []
            }
        },
        created() {
            ajax(0).then((result) => {
                this.source = result
            })
        },
        methods: {
            loadData(node, callback) {
                let {name, id, parent_id} = node
                ajax(id).then(result => {
                    callback(result)//调用一下
                })
            },
            xxx() {
                console.log()
                ajax(this.selected[0].id).then((result) => {
                    console.log(result)
                    let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
                    //lastLevelSelected.children = result
                    this.$set(lastLevelSelected, 'children', result)
                })
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