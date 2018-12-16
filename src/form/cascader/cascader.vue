<template>
    <div class="vi-cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <vi-cascader-items class="popover" :selected="selected" :height="popoverHeight" :items="source" @update:selected="onUpdateSelected"></vi-cascader-items>
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
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        computed: {
            result(){
                return this.selected.map((item)=>{
                    return item.name
                }).join('/')
            }
        },
        methods:{
            onUpdateSelected(newSelected){
                this.$emit('update:selected',newSelected)
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