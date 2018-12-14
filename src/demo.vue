<template>
    <div>
        <vi-button>你好</vi-button>
    </div>
</template>

<script>
    import Button from './basic/button/button'
    export default {
        name: "demo",
        components:{
            'vi-button':Button
        }
    }
</script>

<style lang="scss" scoped>
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
    #app{
        margin-top: 100px;
        margin-left: 100px;
        width: 700px;
    }
</style>