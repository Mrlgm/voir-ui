<template>
    <div class="demo">
        <vi-icon class="icon" name="settings"></vi-icon>
        <vi-icon class="icon" name="loading"></vi-icon>
        <vi-icon class="icon" name="info"></vi-icon>
        <vi-icon class="icon" name="error"></vi-icon>
        <vi-icon class="icon" name="like"></vi-icon>
    </div>
</template>

<script>
    import Icon from '../../../src/basic/icon/icon'

    export default {
        components: {
            'vi-icon': Icon
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        .icon{
            margin-right: 10px;
        }
    }
</style>