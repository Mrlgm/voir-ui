import chai from 'chai'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Popover from '../../src/other/popover/popover'

const expect = chai.expect;

chai.use(sinonChai)

describe('Popover', () => {
    // BDD 行为测试驱动

    it('存在', () => {
        expect(Popover).to.exist
    })
    it('可以设置position', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>点我</button>`},
                content: `<div>popover内容</div>`
            },
            propsData: {
                position: 'bottom'
            }
        })
        wrapper.find('button').trigger('click')
        let classes = wrapper.find('.content-wrapper').classes()
        expect(classes).to.includes('position-bottom')
    })

    it('可以设置 trigger', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>点我</button>`},
                content: `<div>popover内容</div>`
            },
            propsData: {
                trigger: 'hover'
            }
        })
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        wrapper.find('.vi-popover').trigger('mouseenter')
        expect(wrapper.find('.content-wrapper').element).to.exist
    })
})