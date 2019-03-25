<template>
    <div class="demo">
        <vi-menu :selected.sync="selected" :multiple="false">
            <vi-menu-item name="home">首页</vi-menu-item>
            <vi-submenu name="about">
                <template slot="title">关于</template>
                <vi-menu-item name="culture">企业文化</vi-menu-item>
                <vi-menu-item name="developers">开发团队</vi-menu-item>
                <vi-menu-item name="contacts">联系电话</vi-menu-item>
                <vi-submenu name="contact">
                    <template slot="title">联系方式</template>
                    <vi-menu-item name="wechat">微信</vi-menu-item>
                    <vi-menu-item name="qq">QQ</vi-menu-item>
                    <vi-menu-item name="phone">电话</vi-menu-item>
                </vi-submenu>
            </vi-submenu>
            <vi-menu-item name="hire">招聘</vi-menu-item>
        </vi-menu>
    </div>
</template>

<script>
    import ViMenu from '../../../src/navigation/menu/menu'
    import ViMenuItem from '../../../src/navigation/menu/menu-item'
    import ViSubmenu from '../../../src/navigation/menu/submenu'

    export default {
        components: {
            ViMenu,
            ViMenuItem,
            ViSubmenu
        },
        data() {
            return {
                selected: ['culture']
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
    }
</style>