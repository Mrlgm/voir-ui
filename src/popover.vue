<template>
    <div class="popover" ref="popover">
        <div ref="content" class="content-wrapper" v-if="visible"
             :class=`position-${position}`>
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="trigger" style="display:inline-block;">
             <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "ViPopover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                visible: false,
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if (this.trigger === 'click') {
                console.log('1');
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },

        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.content)
                let contentHeight = this.$refs.content.getBoundingClientRect().height
                let {width, height, top, right, bottom, left} = this.$refs.trigger.getBoundingClientRect()
                let positions = {
                    top: {
                        left: left + window.scrollX + 'px',
                        top: top + window.scrollY + 'px'
                    },
                    bottom: {
                        left: left + window.scrollX + 'px',
                        top: bottom + window.scrollY + 'px'
                    },
                    left: {
                        left: left + window.scrollX + 'px',
                        top: top + (height - contentHeight) / 2 + window.scrollY + 'px'
                    },
                    right: {
                        left: right + window.scrollX + 'px',
                        top: top + window.scrollY + (height - contentHeight) / 2 + 'px'
                    }
                }
                this.$refs.content.style.left = positions[this.position].left
                this.$refs.content.style.top = positions[this.position].top
            },
            onClickDocument(e) {
                if (this.$refs.popover.contains(e.target)) {
                    return
                }
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
                border-bottom: none;
                top: 100%;
            }

            &::after {
                border-top-color: white;
                border-bottom: none;
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
                border-top: none;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: white;
                border-top: none;
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
                border-left: none;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                border-left: none;
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
                border-right: none;
                left: 100%;
            }

            &::after {
                border-left-color: white;
                border-right: none;
                left: calc(100% - 1px);
            }
        }

    }
</style>