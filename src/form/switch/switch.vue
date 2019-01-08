<template>
    <div class="vi-switch" @click="switchValue">
        <input @change="handleChange" ref="input" class="vi-switch_input" type="checkbox">
        <span class="vi-switch_core" :class="{'is-checked': checked }" ref="core"></span>
    </div>
</template>

<script>
    export default {
        name: "ViSwitch",

        props: {
            value: {
                type: [Boolean, String, Number],
                default: false
            },
            activeColor: {
                type: String,
                default: '#dddddd'
            },
            inactiveColor: {
                type: String,
                default: '#000'
            },
            activeValue: {
                type: [Boolean, String, Number],
                default: true
            },
            inactiveValue: {
                type: [Boolean, String, Number],
                default: false
            }
        },
        computed: {
            checked() {
                return this.value === this.activeValue;
            },
        },
        watch: {
            checked() {
                this.$refs.input.checked = this.checked;
                if (this.activeColor || this.inactiveColor) {
                    this.setBackgroundColor();
                }
            }
        },
        methods: {
            handleChange(event) {
                this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
                this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
                this.$nextTick(() => {
                    // set input's checked property
                    // in case parent refuses to change component's value
                    this.$refs.input.checked = this.checked;
                });
            },
            switchValue() {
                this.handleChange();
            },
            setBackgroundColor() {
                let newColor = this.checked ? this.activeColor : this.inactiveColor;
                this.$refs.core.style.borderColor = newColor;
                this.$refs.core.style.backgroundColor = newColor;
            },
        },
        mounted() {
            /* istanbul ignore if */
            if (this.activeColor || this.inactiveColor) {
                this.setBackgroundColor();
            }
            this.$refs.input.checked = this.checked;
        }

    }
</script>

<style lang="scss" scoped>
    .vi-switch {
        display: inline-flex;
        position: relative;

        .vi-switch_input {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
            margin: 0;
        }

        .vi-switch_core {
            width: 40px;
            height: 20px;
            background: #dcdfe6;
            border-radius: 10px;
            cursor: pointer;
            border: 1px solid #ccc;
            &.is-checked::after {
                left: 100%;
                margin-left: -18px;
            }

            &::after {
                content: '';
                display: block;
                background-color: #fff;
                width: 16px;
                height: 16px;
                position: absolute;
                transition: all .3s;
                top: 2px;
                left: 2px;
                border-radius: 50%;
            }
        }
    }

</style>