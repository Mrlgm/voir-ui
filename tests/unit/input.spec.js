import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Input from '@/form/input/input'

const expect = chai.expect;

chai.use(sinonChai)

describe('Input', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        it('接收 value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '1234'
                }
            })
            const input = wrapper.find('input')
            expect(input.element.value).to.equal('1234')
        })
        it('接收 disabled', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            })
            const input = wrapper.find('input')
            expect(input.element.disabled).to.equal(true)
        })
        it('接收 readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    readonly: true
                }
            })
            const input = wrapper.find('input')
            expect(input.element.readOnly).to.equal(true)
        })
        it('接收 error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: 'wrong'
                }
            })
            const errorMessage = wrapper.find('.errorMessage')
            expect(errorMessage.text()).to.equal('wrong')
            const useElement = wrapper.find('use')
            expect(useElement.attributes('href')).to.equal('#i-error')
        })
    })
    describe('事件', () => {
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                const wrapper = mount(Input, {})
                const vm = wrapper.vm
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                //触发input change事件
                let event = new Event(eventName)
                Object.defineProperty(
                    event, 'target',
                    {value: {value: 'hi'}, enumerable: true}
                )
                const inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })

        })
    })
})