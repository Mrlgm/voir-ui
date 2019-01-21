<template>
    <div class="demo">
        <vi-layout class="layout">
            <vi-header class="header">header</vi-header>
            <vi-layout class="layout">
                <vi-sider class="sider">sider</vi-sider>
                <vi-content class="content">content</vi-content>
            </vi-layout>
            <vi-footer class="footer">footer</vi-footer>
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
            overflow: hidden;
            .sider {
                width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: #555;
            }

            .header {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: #555;
                width: 100%;
                height: 50px;
            }

            .content {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: #666;
                width: 100%;
            }

            .footer {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: #999;
                width: 100%;
                height: 50px;
            }
        }
    }
</style>