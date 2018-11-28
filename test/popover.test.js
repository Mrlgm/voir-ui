const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/other/popover/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position.', (done) => {
        Vue.component('vi-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <vi-popover position="bottom" ref="a">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
         </vi-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            let {content} = vm.$refs.a.$refs
            expect(content.classList.contains('position-bottom')).to.be.eq(true)
            done()
        })
    })
    xit('可以设置 trigger',(done)=>{
        Vue.component('vi-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <vi-popover trigger="hover" ref="a">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <button>点我</button>
         </vi-popover>
        `
        const vm = new Vue({
            el: div
        })

        let event  = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        vm.$nextTick(()=>{

        })

    })
})