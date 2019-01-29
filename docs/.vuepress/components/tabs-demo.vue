<template>
    <div class="demo">
        <vi-tabs selected="beauty">
            <vi-tabs-nav>
                <vi-tabs-item name="beauty">
                    美女
                </vi-tabs-item>
                <vi-tabs-item name="finance">
                    财经
                </vi-tabs-item>
                <vi-tabs-item name="sports">
                    体育
                </vi-tabs-item>
                <vi-tabs-item name="disable" disabled>
                    禁用
                </vi-tabs-item>
            </vi-tabs-nav>
            <vi-tabs-content>
                <vi-tabs-pane name="beauty">
                    这是美女的内容
                </vi-tabs-pane>
                <vi-tabs-pane name="finance">
                    这是财经的内容
                </vi-tabs-pane>
                <vi-tabs-pane name="sports">
                    这是体育的内容
                </vi-tabs-pane>
                <vi-tabs-pane name="disable">
                    这是禁用的内容
                </vi-tabs-pane>
            </vi-tabs-content>
        </vi-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/navigation/tabs/tabs'
    import TabsContent from '../../../src/navigation/tabs/tabs-content'
    import TabsItem from '../../../src/navigation/tabs/tabs-item'
    import TabsNav from '../../../src/navigation/tabs/tabs-nav'
    import TabsPane from '../../../src/navigation/tabs/tabs-pane'

    export default {
        components: {
            'vi-tabs': Tabs,
            'vi-tabs-content': TabsContent,
            'vi-tabs-item': TabsItem,
            'vi-tabs-nav': TabsNav,
            'vi-tabs-pane': TabsPane
        },
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