<template>
    <button class="vi-button" :class="{[`icon-${iconPosition}`]:true,'ripple':isRipple || allRipple}"
            @click="$emit('click')">
        <vi-icon class="icon" v-if="icon&&!loading" :name="icon"></vi-icon>
        <vi-icon class="loading icon" v-if="loading" name="loading"></vi-icon>
        <div class="vi-button-content">
            <slot>按钮</slot>
        </div>
    </button>
</template>

<script>
    import Icon from '../icon/icon'

    export default {
        name:'ViButton',
        components: {
            'vi-icon': Icon
        },
        data(){
            return{
                allRipple: false
            }
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            isRipple: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    //属性检查器
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/var";
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .vi-button {
        font-size: $font-size;
        height: $button--height;
        padding: 0 1.1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background-color: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &.ripple {
            position: relative;
            overflow: hidden;
            &:after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                background: radial-gradient(circle, #666 10%, transparent 10.01%) no-repeat 50%;
                transform: scale(10, 10);
                opacity: 0;
                transition: transform .3s, opacity .5s;
            }

            &:active:after {
                transform: scale(0, 0);
                opacity: .3;
                transition: 0s;
            }
        }
        &:hover {
            border-color: $border-color-hover;

        }
        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        > .vi-button-content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .vi-button-content {
                order: 1;
            }

        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>