import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'

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


new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
        message: 'hi'
    },
    created() {
        this.$toast('我是 message', {
            position: 'middle',
            autoCloseDelay: 50
        })
    },
    methods: {
        showToast() {
            this.$toast('我是 message')
        }
    }
})