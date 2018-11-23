<template>
    <div class="popover" @click="onClick" ref="popover">
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
            positionContent() {
                document.body.appendChild(this.$refs.content)
                let {top, right, bottom, left} = this.$refs.trigger.getBoundingClientRect()
                this.$refs.content.style.left = left + window.scrollX + 'px'
                this.$refs.content.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.content.contains(e.target)) {
                    console.log('不管')
                    return;
                }
                this.close()
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.trigger.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
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