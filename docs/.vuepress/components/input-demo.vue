<template>
    <div class="demo">
        <vi-input class="input" placeholder="默认状态"></vi-input>
        <vi-input class="input" value="初始内容"></vi-input>
        <vi-input icon="like" class="input" placeholder="添加icon"></vi-input>
        <span><vi-input  class="input" v-model="message"></vi-input>{{message}}</span>
        <vi-input class="input" placeholder="禁用状态" disabled></vi-input>
        <vi-input class="input" placeholder="只读状态" readonly></vi-input>
        <vi-input class="input" placeholder="错误状态" error></vi-input>
    </div>
</template>

<script>
    import Input from '../../../src/form/input/input'
    export default {
        components: {
            'vi-input': Input
        },
        data(){
            return{
                message:'双向绑定'
            }
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
            margin-bottom: 30px;
            width: 300px;
            margin-right: 10px;
        }
    }
</style>