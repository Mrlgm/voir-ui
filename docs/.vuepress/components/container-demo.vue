<template>
    <div class="demo">
        <vi-layout class="layout">
            <vi-header class="header"></vi-header>
            <vi-content class="content"></vi-content>
            <vi-footer class="footer"></vi-footer>
        </vi-layout>
    </div>
</template>

<script>
    import Content from '../../../src/layout/container/content'
    import Footer from '../../../src/layout/container/footer'
    import Header from '../../../src/layout/container/header'
    import Layout from '../../../src/layout/container/layout'
    import Sider from '../../../src/layout/container/sider'

    export default {
        components: {
            'vi-content': Content,
            'vi-footer': Footer,
            'vi-header': Header,
            'vi-layout': Layout,
            'vi-sider': Sider
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;

        .layout {
            width: 100%;
            .header{
                background-color: #ddd;
                width: 100%;
                height: 100px;
            }
        }
    }
</style>