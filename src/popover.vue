<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="content" class="content-wrapper" v-if="visible"
             :class=`position-${position}`>
            <slot name="content"></slot>
        </div>
        <span ref="trigger" style="display:inline-block;">
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
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.content)
                let contentHeight = this.$refs.content.getBoundingClientRect().height
                let {width, height, top, right, bottom, left} = this.$refs.trigger.getBoundingClientRect()
                if (this.position === 'top') {
                    this.$refs.content.style.left = left + window.scrollX + 'px'
                    this.$refs.content.style.top = top + window.scrollY + 'px'
                } else if (this.position === 'bottom') {
                    this.$refs.content.style.left = left + window.scrollX + 'px'
                    this.$refs.content.style.top = bottom + window.scrollY + 'px'
                } else if (this.position === 'right') {
                    this.$refs.content.style.left = right + window.scrollX + 'px'
                    this.$refs.content.style.top = top + (height - contentHeight) / 2 + window.scrollY + 'px'
                } else if (this.position === 'left') {
                    this.$refs.content.style.left = left + window.scrollX + 'px'
                    this.$refs.content.style.top = top + window.scrollY + (height - contentHeight) / 2 + 'px'
                }
            },
            onClickDocument(e) {
                if (this.$refs.content.contains(e.target)) {
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
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: .5em 1em;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
        background: white;

        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top-color: black;
                top: 100%;
            }

            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-bottom-color: black;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-right-color: black;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-left-color: black;
                left: 100%;
            }

            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }

    }
</style>