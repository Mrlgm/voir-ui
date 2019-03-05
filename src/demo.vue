<template>
    <div class="demo">
        <vi-menu :selected.sync="selected" :multiple="false">
            <vi-menu-item name="home">首页</vi-menu-item>
            <vi-menu-item name="about">关于</vi-menu-item>
            <vi-menu-item name="hire">招聘</vi-menu-item>
        </vi-menu>
    </div>
</template>

<script>
    import ViMenu from './navigation/menu/menu'
    import ViMenuItem from './navigation/menu/menu-item'
    import ViSubmenu from './navigation/menu/submenu'

    export default {
        name: 'demo',
        components: {
            ViMenu,
            ViMenuItem,
            ViSubmenu
        },
        data() {
            return {
                selected: ['home']
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
</style>