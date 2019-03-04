import chai from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Col from '../../src/layout/grid/col'

const expect = chai.expect;

chai.use(sinonChai)

describe('Col', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                span: 1
            }
        })
        expect(wrapper.classes()).to.includes('col-1')
    })
    it('接收 offset 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                offset: 1
            }
        })
        expect(wrapper.classes()).to.includes('offset-1')
    })
    it('接收 pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                pc: {
                    offset: 1,
                    span: 1
                }
            }
        })
        expect(wrapper.classes()).to.includes('col-pc-1')
        expect(wrapper.classes()).to.includes('offset-pc-1')
    })
    it('接收 ipad 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                ipad: {
                    offset: 1,
                    span: 1
                }
            }
        })
        expect(wrapper.classes()).to.includes('col-ipad-1')
        expect(wrapper.classes()).to.includes('offset-ipad-1')
    })
    it('接收 narrowPc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                narrowPc: {
                    offset: 1,
                    span: 1
                }
            }
        })
        expect(wrapper.classes()).to.includes('col-narrow-pc-1')
        expect(wrapper.classes()).to.includes('offset-narrow-pc-1')
    })
    it('接收 widePc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                widePc: {
                    offset: 1,
                    span: 1
                }
            }
        })
        expect(wrapper.classes()).to.includes('col-wide-pc-1')
        expect(wrapper.classes()).to.includes('offset-wide-pc-1')
    })
})