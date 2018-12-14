<template>
    <div class="vi-cascader-item">
        {{sourceItem.name}}
        <vi-cascader-item v-if="sourceItem.children"
                          v-for="item in sourceItem.children"
                          :sourceItem="item">
        </vi-cascader-item>
    </div>
</template>

<script>
    export default {
        name: "ViCascaderItem",
        props: {
            sourceItem: {
                type: Object
            }
        }
    }

</script>

<style lang="scss" scoped>
.vi-cascader-item{
    border: 1px solid red;
    margin: 10px;
}
</style>