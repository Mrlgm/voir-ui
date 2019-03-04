import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import TabsItem from '../../src/navigation/tabs/tabs-item'

const expect = chai.expect;

chai.use(sinonChai)

describe('TabsItem', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    it('接受 name 属性', () => {
        const  wrapper = mount(TabsItem,{
            propsData: {
                name: 'xxx'
            }
        })
        expect(wrapper.attributes('data-name')).to.eq('xxx')
    })
    it('接受 disabled 属性', () => {
        const  wrapper = mount(TabsItem,{
            propsData: {
                disabled: true
            }
        })
        const vm = wrapper.vm
        const callback = sinon.fake()
        vm.$on('click', callback)
        wrapper.trigger('click')
        expect(callback.called).to.eq(false)
    })
})