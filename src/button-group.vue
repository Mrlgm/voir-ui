<template>
    <div class="vi-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'ViButtonGroup',
        props:{
            allRipple:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
           for(let node of this.$el.children){
               let name = node.nodeName.toLowerCase()
               if(name !== 'button'){
                   console.warn(`vi-button-group 的子元素应该全是 vi-button，但你写的是${name}`)
               }
           }
           this.$children.forEach((vm)=>{
               vm.allRipple = this.allRipple
           })
        }
    }
</script>

<style lang="scss" scoped>
    .vi-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .vi-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }

</style>