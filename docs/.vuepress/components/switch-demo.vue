<template>
    <div class="demo">
        <vi-switch v-model="switchValue1"></vi-switch>
        <vi-switch active-color="#13ce66" inactive-color="#ff4949" v-model="switchValue2"></vi-switch>
        <vi-switch v-model="switchValue3" disabled></vi-switch>
    </div>
</template>

<script>
    import Switch from '../../../src/form/switch/switch'

    export default {
        components: {
            'vi-switch': Switch
        },
        data() {
            return {
                switchValue1: false,
                switchValue2: false,
                switchValue3: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>