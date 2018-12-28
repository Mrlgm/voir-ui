import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Button from '@/basic/button/button';

chai.use(sinonChai)

const expect = chai.expect;

describe('Button.vue', () => {
    it('存在.', () => {
        expect(Button).to.exist
    })
    it('可以设置icon.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-settings')
    })
    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        const useElements = wrapper.find('use')
        expect(useElements.attributes('href')).to.equal('#i-loading')
    })
    it('可以设置ripple.', () => {
        const wrapper = mount(Button, {
            propsData: {
                isRipple: true
            }
        })
        const vm = wrapper.vm
        expect(vm.$el.classList.contains('ripple')).to.equal(true)
    })
    xit('icon 默认的 order 是 1', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
    })
    xit('设置 iconPosition 可以改变 order', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
    })
    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        })
        const callback = sinon.fake();
        const vm = wrapper.vm
        vm.$on('click',callback)
        wrapper.trigger('click')
        expect(callback.called).to.eq(true)
    })
})
