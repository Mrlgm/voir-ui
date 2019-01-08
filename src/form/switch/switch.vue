<template>
    <div class="vi-switch">
        <input v-bind:value="value" class="vi-switch_input" type="checkbox">
        <span class="vi-switch_core" @click="isValue"></span>
    </div>
</template>

<script>
    export default {
        name: "ViSwitch",
        props: {
            value: {
                type: Boolean,
                default: false
            },
            activeColor: {
                type: String,
                default: ''
            },
            inactiveColor: {
                type: String,
                default: ''
            }
        },
        methods: {
            isValue() {
                console.log(this.value)
            }
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
            background: #000;
            border-radius: 10px;
            cursor: pointer;

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