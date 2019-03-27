import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Menu from '../../src/navigation/menu/menu'
import MenuItem from '../../src/navigation/menu/menu-item'
import Submenu from '../../src/navigation/menu/submenu'
import Vue from 'vue'

const expect = chai.expect;

chai.use(sinonChai)

describe('Menu', () => {
    it('存在.', () => {
        expect(Menu).to.exist
    })
    it('支持selected属性', () => {
        Vue.component('vi-menu-item', MenuItem)
        Vue.component('vi-submenu', Submenu)
        const wrapper = mount(Menu, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
            <vi-menu-item name="home">首页</vi-menu-item>
            <vi-menu-item name="hire">招聘</vi-menu-item>
                `
            }
        })

        setTimeout(() => {
            expect(wrapper.find('[data-name="home"].selected').exists()).to.eql(true)
        }, 0)
    })
    it('触发 update:selected 事件', () => {
        const callback = sinon.fake()
        Vue.component('vi-menu-item', MenuItem)
        Vue.component('vi-submenu', Submenu)
        const wrapper = mount(Menu, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
            <vi-menu-item name="home">首页</vi-menu-item>
            <vi-submenu name="about">
                <template slot="title">关于</template>
                <vi-menu-item name="developers">开发团队</vi-menu-item>
            </vi-submenu>
            <vi-menu-item name="hire">招聘</vi-menu-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })

        setTimeout(() => {
            wrapper.find('[data-name="developers"]').trigger('click')
            expect(callback).to.have.been.calledWith('developers')
        }, 0)
    })
})
