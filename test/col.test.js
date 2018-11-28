const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/layout/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {
                    offset: 1,
                    span: 1
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {
                    offset: 1,
                    span: 1
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-ipad-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrowPc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {
                    offset: 1,
                    span: 1
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 widePc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {
                    offset: 1,
                    span: 1
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-wide-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})