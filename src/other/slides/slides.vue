<template>
    <div class="vi-slides">
        <div class="vi-slides-window">
            <div ref="content" class="vi-slides-inner">
                <slot></slot>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ViSlides",
        created() {
            setTimeout(()=>{
                this.$refs.content.style.transform = `translateX(-100px)`
            },3000)
        }
    }
</script>

<style lang="scss" scoped>
    .vi-slides {
        .vi-slides-window {
            width: 100px;
            overflow: hidden;
            .vi-slides-inner {
                display: flex;

                & > * {
                    width: 100%;
                    flex-shrink: 0;
                }
            }
        }
    }
</style>