const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/navigation/tabs/tabs'
import TabsNav from '../src/navigation/tabs/tabs-nav'
import TabsItem from '../src/navigation/tabs/tabs-item'
import TabsContent from '../src/navigation/tabs/tabs-content'
import TabsPane from '../src/navigation/tabs/tabs-pane'

Vue.component('vi-tabs', Tabs)
Vue.component('vi-tabs-nav', TabsNav)
Vue.component('vi-tabs-item', TabsItem)
Vue.component('vi-tabs-content', TabsContent)
Vue.component('vi-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    it('接受 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('接受 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        //expect(vm.$el.classList.contains('disabled')).to.eq(true)
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})