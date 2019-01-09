<template>
    <div  class="vi-input" >
        <icon v-if="icon" :name="icon" class="vi-input-icon"></icon>
        <input :class="{error}" type="text" :value="value"
               :disabled="disabled" :readonly="readonly"
               :placeholder="placeholder"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)">
        <icon v-if="error" name="error" class="icon-error"></icon>
    </div>
</template>

<script>
    import Icon from '../../basic/icon/icon'

    export default {
        components: {
            Icon
        },
        name: 'ViInput',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String
            },
            icon: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/var";

    .vi-input {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        position: relative;

        .vi-input-icon + input {
            padding-left: 32px;

        }

        .vi-input-icon {
            position: absolute;
            width: 16px;
            height: 16px;
            top: 8px;
            left: 8px;
            line-height: 32px;
            text-align: center;
        }

        > input {
            height: $input-height;
            padding: 0 8px;
            font-size: inherit;
            border: 1px solid $border-color;
            border-radius: $border-radius;

            &:focus,
            &:hover {
                border-color: $border-color-hover;
            }

            &[disabled],
            &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }

            &:focus {
                outline: none;
                box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
            }

            &.error {
                border-color: $red;
            }
        }

        .icon-error + input{
            padding-right: 32px;
        }

        .icon-error {
            fill: $red;
            position: absolute;
            width: 16px;
            height: 16px;
            top: 8px;
            right: 8px;
            line-height: 32px;
            text-align: center;
        }

    }

</style>