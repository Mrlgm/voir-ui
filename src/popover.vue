<template>
    <div class="popover" @click.stop="xxx">
        <div ref="content" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="trigger">
             <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "ViPopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            xxx() {
                this.visible = !this.visible
                if (this.visible === true) {
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.content)
                        let {top, right, bottom, left} = this.$refs.trigger.getBoundingClientRect()
                        this.$refs.content.style.left = left + window.scrollX + 'px'
                        this.$refs.content.style.top = top + window.scrollY + 'px'
                        let eventHandler = () => {
                            this.visible = false
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
                }
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>