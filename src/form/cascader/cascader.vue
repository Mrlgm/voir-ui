<template>
    <div class="vi-cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <slot></slot>
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
        computed: {},
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
            border: 1px solid red;
            height: 32px;
        }

        .popover-wrapper {
            @extend .box-shadow;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #fff;
        }
    }

</style>