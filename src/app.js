import Vue from 'vue'
import Button from './basic/button/button'
import Icon from './basic/icon/icon'
import ButtonGroup from './basic/button-group/button-group'
import Input from './form/input/input'
import Row from './layout/grid/row'
import Col from './layout/grid/col'
import Layout from './layout/container/layout'
import Header from './layout/container/header'
import Content from './layout/container/content'
import Footer from './layout/container/footer'
import Sider from './layout/container/sider'
import Toast from './notice/toast/toast'
import Plugin from './notice/toast/plugin'
import Tabs from './navigation/tabs/tabs'
import TabsNav from './navigation/tabs/tabs-nav'
import TabsItem from './navigation/tabs/tabs-item'
import TabsContent from './navigation/tabs/tabs-content'
import TabsPane from './navigation/tabs/tabs-pane'
import Popover from './other/popover/popover'
import Collapse from './layout/collapse/collapse'
import CollapseItem from './layout/collapse/collapse-item'

Vue.component('vi-button', Button)
Vue.component('vi-icon', Icon)
Vue.component('vi-button-group', ButtonGroup)
Vue.component('vi-input', Input)
Vue.component('vi-row', Row)
Vue.component('vi-col', Col)
Vue.component('vi-layout', Layout)
Vue.component('vi-header', Header)
Vue.component('vi-content', Content)
Vue.component('vi-footer', Footer)
Vue.component('vi-sider', Sider)
Vue.component('vi-toast', Toast)
Vue.use(Plugin)
Vue.component('vi-tabs', Tabs)
Vue.component('vi-tabs-nav', TabsNav)
Vue.component('vi-tabs-item', TabsItem)
Vue.component('vi-tabs-content', TabsContent)
Vue.component('vi-tabs-pane', TabsPane)
Vue.component('vi-popover', Popover)
Vue.component('vi-collapse', Collapse)
Vue.component('vi-collapse-item', CollapseItem)


new Vue({
    el: '#app',
    data: {
        selectedTab:['1']
    }
})