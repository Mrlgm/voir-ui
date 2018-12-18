<template>
    <div class="vi-cascader-items" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                <span class="name">{{item.name}}</span>
                <icon class="icon" v-if="rightArrowVisible(item)" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <vi-cascader-items :height="height" :selected="selected" :items="rightItems"
                               :level="level+1" @update:selected="onUpdateSelected" :load-data="loadData"></vi-cascader-items>
        </div>
    </div>
</template>

<script>
    import Icon from '../../basic/icon/icon'

    export default {
        name: "ViCascaderItems",
        components: {Icon},
        props: {
            items: {
                type: Array
            },
            height: {
                type: String
            },
            selected: {
                type: Array,
                default: () => {
                    return []
                }
            },
            level: {
                type: Number,
                default: 0
            },
            loadData:{
                type:Function
            }
        },
        computed: {
            rightItems() {
                if (this.selected[this.level]) {
                    let item = this.items.filter(item => item.name === this.selected[this.level].name)
                    if (item && item[0].children && item[0].children.length > 0) {
                        return item[0].children
                    } else {
                        return null
                    }
                }
            }
        },
        methods: {
            onClickLabel(item) {
                //this.selected[this.level] = item
                //this.selected.push(item)
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level + 1)
                this.$emit('update:selected', copy)
            },
            onUpdateSelected(newSelected) {
                this.$emit('update:selected', newSelected)
            },
            rightArrowVisible(item){
                return this.loadData ? !item.isLeaf : item.children
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../assets/var';

    .vi-cascader-items {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;

        .left {
            height: 100%;
            padding: .3em 0;
            overflow: auto;
        }

        .right {
            border-left: 1px solid $border-color-light;
            height: 100%;
        }

        .label {
            padding: .5em 1em;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover{
                background: $grey;
            }
            .name {
                margin-right: 1em;
                /*user-select: none;*/
            }

            .icon {
                margin-left: auto;
                height: 15px;
                width: 15px;
            }
        }
    }
</style>