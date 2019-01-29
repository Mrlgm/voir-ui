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
            </vi-tabs-content>
        </vi-tabs>
    </div>
</template>

<script>
    import Tabs from './navigation/tabs/tabs'
    import TabsContent from './navigation/tabs/tabs-content'
    import TabsItem from './navigation/tabs/tabs-item'
    import TabsNav from './navigation/tabs/tabs-nav'
    import TabsPane from './navigation/tabs/tabs-pane'

    export default {
        name: 'demo',
        components: {
            'vi-tabs': Tabs,
            'vi-tabs-content': TabsContent,
            'vi-tabs-item': TabsItem,
            'vi-tabs-nav': TabsNav,
            'vi-tabs-pane': TabsPane
        },
        data() {
            return {
                arr1:['finance', 'sports', 'beauty'],
                arr2:['finance']
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

    :root {
        --font-size: 14px;
    }

    body {
        font-size: var(--font-size);
    }

    .demo {
        margin-top: 100px;
        margin-left: 100px;
        width: 700px;
    }
</style>