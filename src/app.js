import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('vi-button', Button)
Vue.component('vi-icon', Icon)
Vue.component('vi-button-group', ButtonGroup)
Vue.component('vi-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})