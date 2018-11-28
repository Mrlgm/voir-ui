<template>
    <svg class="vi-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name:'ViIcon',
        props:['name']
    }
</script>

<style lang="scss" scoped>
    .vi-icon {
        width: 1.3em;
        height: 1.3em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>