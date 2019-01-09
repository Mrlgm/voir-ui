<template>
    <div class="demo">
        <vi-input v-model="message" placeholder="你好啊" error></vi-input>{{message}}
    </div>
</template>

<script>
    import Switch from './form/switch/switch'
    import Input from './form/input/input'

    export default {
        name: 'demo',
        components: {
            'vi-switch': Switch,
            'vi-input': Input
        },
        data() {
            return {
                value: true,
                message:''
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --font-size: 14px;
    }

    body {
        font-size: var(--font-size);
    }

    .demo {
        margin-top: 100px;
        margin-left: 100px;
        width: 700px;
    }
</style>