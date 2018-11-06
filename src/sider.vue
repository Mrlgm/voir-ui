<template>
    <transition name="fade">
        <div v-show="show" class="sider">
            <slot></slot>
            <button  @click="isShow">关闭</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'ViSider',
        data(){
            return{
                show:true
            }
        },
        methods: {
            isShow(){
                this.show=!this.show
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }

    .fade-enter, .fade-leave-to {
        margin-left: -200px;
    }
</style>