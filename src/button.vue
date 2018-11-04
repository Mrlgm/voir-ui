<template>
    <button class="vi-button" :class="{[`icon-${iconPosition}`]:true,'ripple':isRipple || allRipple}"
            @click="$emit('click')">
        <vi-icon class="icon" v-if="icon&&!loading" :name="icon"></vi-icon>
        <vi-icon class="loading icon" v-if="loading" name="loading"></vi-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'

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
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .vi-button {
        font-style: var(--font-size);
        height: var(--button--height);
        padding: 0 1.1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
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
                background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
                background-repeat: no-repeat;
                background-position: 50%;
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
            border-color: var(--border-color-hover);

        }
        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content {
                order: 1;
            }

        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>