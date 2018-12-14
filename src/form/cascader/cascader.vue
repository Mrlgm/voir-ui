<template>
    <div class="vi-cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
                <vi-cascader-item :sourceItem="item"></vi-cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
    import CascaderItem from './cascader-item'

    export default {
        name: "ViCascader",
        components: {
            'vi-cascader-item': CascaderItem
        },
        props: {
            source: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vi-cascader {

    }

</style>