<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item {
        $blue: #409EFF;
        flex-shrink: 0;
        border: 1px solid red;
        padding: 0 2em;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.active {
            color: $blue;
            font-weight: bold;
        }
    }
</style>