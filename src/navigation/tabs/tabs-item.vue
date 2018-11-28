<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ViTabsItem",
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name;
                })
            }
        },
        methods: {
            onClick() {
                if (this.disabled) {
                    return
                }
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click',this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $blue: #409EFF;
    $disabled-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
            color: $blue;
        }
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-color;
            cursor: not-allowed;
            opacity: 0.6;
        }
    }
</style>