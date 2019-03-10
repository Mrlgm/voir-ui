<template>
    <div class="demo">
        <vi-menu :selected.sync="selected" :multiple="false">
            <vi-menu-item name="home">首页</vi-menu-item>
            <vi-submenu>
                <template slot="title">关于</template>
                <vi-menu-item name="culture">企业文化</vi-menu-item>
                <vi-menu-item name="developers">开发团队</vi-menu-item>
                <vi-menu-item name="contacts">联系电话</vi-menu-item>
            </vi-submenu>
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
                selected: ['culture']
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