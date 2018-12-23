<template>
    <div class="vi-cascader" ref="cascader" v-click-outside="close">
        <div class="trigger" @click="toggle">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <vi-cascader-items class="popover" :load-data="loadData" :selected="selected" :height="popoverHeight"
                               :items="source" :loading-item="loadingItem"
                               @update:selected="onUpdateSelected"></vi-cascader-items>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'
    import ClickOutside from './click-outside'

    export default {
        name: "ViCascader",
        components: {
            'vi-cascader-items': CascaderItems
        },
        directives: {ClickOutside},
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
                loadingItem: {}
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
            open() {
                this.popoverVisible = true
            },
            close() {
                this.popoverVisible = false
            },
            toggle() {
                if (this.popoverVisible === true) {
                    this.close()
                } else {
                    this.open()
                }
            },
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
                    this.loadingItem = {}
                    let copy = JSON.parse(JSON.stringify(this.source))
                    let toUpdate = found(copy, lastItem.id)
                    console.log(toUpdate)
                    toUpdate.children = result
                    //this.$set(toUpdate,'children',result)
                    this.$emit('update:source', copy)
                }
                if (!lastItem.isLeaf && this.loadData) {
                    this.loadData(lastItem, updateSource)//回调，把别人传给我的函数调用一下
                    this.loadingItem = lastItem
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/var";

    .vi-cascader {
        display: inline-flex;
        position: relative;

        .trigger {
            background-color: #fff;
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
            z-index: 1;
        }
    }

</style>