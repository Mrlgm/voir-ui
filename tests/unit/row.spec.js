import chai from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Row from '../../src/layout/grid/row'
import Col from '../../src/layout/grid/col'
import Vue from 'vue'

const expect = chai.expect;

chai.use(sinonChai)

describe('Row', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(Row).to.exist
    })

    it('接收 gutter 属性', (done) => {
        Vue.component('vi-row', Row)
        Vue.component('vi-col', Col)
        const wrapper = mount(Row, {
            attachToDocument: true,
            propsData: {
                gutter: "20"
            },
            slots: {
                default: ['<vi-col span="12"></vi-col>', '<vi-col span="12"></vi-col>']
            }
        })
        setTimeout(() => {
            const row = wrapper.find('.row')
            const col1 = wrapper.findAll('.col').at(0)
            const col2 = wrapper.findAll('.col').at(1)
            expect(getComputedStyle(row.vm.$el).marginRight).to.eq('-10px')
            expect(getComputedStyle(row.vm.$el).marginLeft).to.eq('-10px')
            expect(getComputedStyle(col1.vm.$el).paddingRight).to.eq('10px')
            expect(getComputedStyle(col2.vm.$el).paddingLeft).to.eq('10px')
            done()
        })

    })

    it('接收 align 属性', () => {
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