import chai from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Row from '@/layout/grid/row'
import Col from '@/layout/grid/col'

const expect = chai.expect;

chai.use(sinonChai)

describe('Row', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(Row).to.exist
    })
    xit('接收 gutter 属性', () => {
        Vue.component('vi-row', Row)
        Vue.component('vi-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <vi-row gutter="20">
            <vi-col span="12"></vi-col>
            <vi-col span="12"></vi-col>
        </vi-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    xit('接收 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('center')
        div.remove()
        vm.$destroy()
    })
})