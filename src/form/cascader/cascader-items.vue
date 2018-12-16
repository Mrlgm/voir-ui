<template>
    <div class="vi-cascader-items" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                {{item.name}}
                <icon class="icon" v-if="item.children" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <vi-cascader-items :height="height" :selected="selected" :items="rightItems"
                               :level="level+1" @update:selected="onUpdateSelected"></vi-cascader-items>
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
            }
        },
        computed: {
            rightItems() {
                let currentSelected = this.selected[this.level]
                if (currentSelected && currentSelected.children) {
                    return currentSelected.children
                } else {
                    return null
                }
            }
        },
        methods: {
            onClickLabel(item) {
                //this.selected[this.level] = item
                //this.selected.push(item)
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                this.$emit('update:selected', copy)
            },
            onUpdateSelected(newSelected){
                this.$emit('update:selected', newSelected)
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

        }

        .right {
            border-left: 1px solid $border-color-light;
            height: 100%;
        }

        .label {
            padding: .3em 1em;
            display: flex;
            align-items: center;

            .icon {
                margin-left: 1em;
                height: 15px;
                width: 15px;
            }
        }
    }
</style>