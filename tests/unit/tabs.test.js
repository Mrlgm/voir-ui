const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../../src/navigation/tabs/tabs'
import TabsNav from '../../src/navigation/tabs/tabs-nav'
import TabsItem from '../../src/navigation/tabs/tabs-item'
import TabsContent from '../../src/navigation/tabs/tabs-content'
import TabsPane from '../../src/navigation/tabs/tabs-pane'

Vue.component('vi-tabs', Tabs)
Vue.component('vi-tabs-nav', TabsNav)
Vue.component('vi-tabs-item', TabsItem)
Vue.component('vi-tabs-content', TabsContent)
Vue.component('vi-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    // BDD 行为测试驱动
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接受 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <vi-tabs selected="girl">
        <vi-tabs-nav>
            <vi-tabs-item name="girl">
                美女
            </vi-tabs-item>
            <vi-tabs-item name="finance" >
                财经
            </vi-tabs-item>
        </vi-tabs-nav>
        <vi-tabs-content>
            <vi-tabs-pane name="girl">
                美女资讯
            </vi-tabs-pane>
            <vi-tabs-pane name="finance">
                财经资讯
            </vi-tabs-pane>
        </vi-tabs-content>
    </vi-tabs>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector('.tabs-item[data-name="girl"]')
            expect(x.classList.contains('active')).to.eq(true)
            done()
        })
    })
    it('接受 direction 属性', () => {})
})