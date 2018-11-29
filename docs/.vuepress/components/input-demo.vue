<template>
    <div class="demo">
        <vi-input class="input"></vi-input>
        <vi-input class="input" value="默认内容"></vi-input>
        <vi-input class="input" disabled></vi-input>
        <vi-input class="input" readonly></vi-input>
        <vi-input class="input" error="错误"></vi-input>
    </div>
</template>

<script>
    import Input from '../../../src/form/input/input'
    export default {
        components: {
            'vi-input': Input
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        margin-top: 10px;
        padding: 10px 10px 0;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        .input{
            margin-bottom: 10px;
        }
    }
</style>