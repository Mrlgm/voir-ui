<template>
    <div class="vi-cascader-items">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <vi-cascader-items :items="rightItems"></vi-cascader-items>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViCascaderItems",
        props: {
            items: {
                type: Array
            }
        },
        data() {
            return {
                leftSelected: null
            }
        },
        computed:{
            rightItems(){
                if(this.leftSelected && this.leftSelected.children){
                    return this.leftSelected.children
                }else{
                    return null
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .vi-cascader-items {
        border: 1px solid red;
        margin: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
</style>