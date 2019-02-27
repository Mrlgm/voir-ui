<template>
    <transition name="slide">
        <div class="vi-slides-item" v-if="visible" :class="{reverse}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ViSlidesItem",
        props: {
            name: {
                type: String,
                required:true
            }
        },
        data() {
            return {
                selected:undefined,
                reverse:false
            }
        },
        computed:{
            visible(){
                return this.selected === this.name
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }

    .slide-leave-active {
        position: absolute;
        top: 0;
        left: 0;
    }

    .slide-enter {
        transform: translateX(100%);
    }
    .slide-enter.reverse{
        transform: translateX(-100%);
    }

    .slide-leave-to {
        transform: translateX(-100%);
    }
    .slide-leave-to.reverse{
        transform: translateX(100%);
    }

    .vi-slides-item {

    }
</style>