<template>
    <div class="tabs-nav" ref="nav">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ViTabsNav",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                this.updateLinePosition(vm)
            })
        },
        methods:{
            updateLinePosition (selectedVm) {
                let {width, left} = selectedVm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.nav.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            }
        }
    }
</script>

<style lang="scss" scoped>
   @import "../../assets/var";
    .tabs-nav {
        display: flex;
        justify-content: flex-start;
        height: $tab-height;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid $blue;
            transition: all 350ms;
            margin-bottom: -1px;
        }
        > .actions {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>