<template>
    <div class="vi-cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <vi-cascader-items class="popover" :load-data="loadData" :selected="selected" :height="popoverHeight" :items="source"
                               @update:selected="onUpdateSelected"></vi-cascader-items>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'

    export default {
        name: "ViCascader",
        components: {
            'vi-cascader-items': CascaderItems
        },
        props: {
            source: {
                type: Array
            },
            popoverHeight: {
                type: String
            },
            selected: {
                type: Array,
                default: () => {
                    return []
                }
            },
            loadData: {
                type: Function
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        computed: {
            result() {
                return this.selected.map((item) => {
                    return item.name
                }).join('/')
            }
        },
        methods: {
            onUpdateSelected(newSelected) {
                this.$emit('update:selected', newSelected)
                let lastItem = newSelected[newSelected.length - 1]
                let found = (node, id) => {
                    let arr = node.filter(item => item.id === id)[0]
                    if (arr) {
                        return arr
                    }
                    for (let i = 0; i < node.length; i++) {
                        if (node[i].children) {
                            arr = found(node[i].children, id)
                        }
                        if (arr) {
                            return arr
                        }
                    }
                    return undefined
                }
                let updateSource = (result) => {
                    //let toUpdate = this.source.filter(item => item.id === lastItem.id)[0]
                    let copy = JSON.parse(JSON.stringify(this.source))
                    let toUpdate = found(copy, lastItem.id)
                    console.log(toUpdate)
                    toUpdate.children = result
                    //this.$set(toUpdate,'children',result)
                    this.$emit('update:source', copy)
                }
                if (!lastItem.isLeaf) {
                   this.loadData && this.loadData(lastItem, updateSource)//回调，把别人传给我的函数调用一下
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/var";

    .vi-cascader {
        position: relative;

        .trigger {
            border: 1px solid $border-color;
            height: $input-height;
            display: inline-flex;
            align-items: center;
            padding: 0 1em;
            min-width: 10em;
            border-radius: $border-radius;
        }

        .popover-wrapper {
            @extend .box-shadow;
            position: absolute;
            top: 100%;
            margin-top: 8px;
            left: 0;
            background-color: #fff;
        }
    }

</style>