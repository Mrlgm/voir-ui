<template>
    <div class="vi-cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <vi-cascader-items :items="source"></vi-cascader-items>
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
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/var";

    .vi-cascader {
        .trigger {
            border: 1px solid red;
            height: 32px;
        }

        .popover {
            border: 1px solid red;
            height: 200px;
        }
    }

</style>