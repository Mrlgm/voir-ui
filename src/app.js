import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('vi-button', Button)
Vue.component('vi-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true
    }
})