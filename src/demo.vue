<template>
    <div id="gg" class="demo">
        <vi-switch v-model="value" disabled></vi-switch>
    </div>
</template>

<script>
    import Switch from './form/switch/switch'

    export default {
        name: 'demo',
        components: {
            'vi-switch': Switch
        },
        data() {
            return {
                value: true
            }
        },
        mounted() {
            gg.addEventListener('click',()=>{
                console.log(this.value)
            })
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