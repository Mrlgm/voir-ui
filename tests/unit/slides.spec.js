import chai from 'chai'
import Vue from 'vue'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Slides from '@/other/slides/slides';
import SlidesItem from '@/other/slides/slides-item';

const expect = chai.expect;

chai.use(sinonChai)

describe('Slides', () => {
    it('存在.', () => {
        expect(Slides).to.exist
    })
    it('接受 ViSlidesItems，默认展示第一个', (done) => {

        Vue.component('ViSlidesItem', SlidesItem)

        const wrapper = mount(Slides, {
            slots: {
                default: `
                <vi-slides-item name="1">
                    <div class="box1">1</div>
                </vi-slides-item>
                <vi-slides-item name="2">
                    <div class="box2">2</div>
                </vi-slides-item>
                <vi-slides-item name="3">
                    <div class="box3">3</div>
                </vi-slides-item>
                `
            },
        })
        setTimeout(() => {
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        })
    })
    it('selected 是几，选中的就是几', (done) => {
        Vue.component('ViSlidesItem', SlidesItem)

        const wrapper = mount(Slides, {
            slots: {
                default: `
                <vi-slides-item name="1">
                    <div class="box1">1</div>
                </vi-slides-item>
                <vi-slides-item name="2">
                    <div class="box2">2</div>
                </vi-slides-item>
                <vi-slides-item name="3">
                    <div class="box3">3</div>
                </vi-slides-item>
                `
            },
            propsData: {
                selected: '2'
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').exists()).to.be.true
            done()
        })
    });
    it('点击第二个就展示第二个', (done) => {
        Vue.component('ViSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            slots: {
                default: `
                <vi-slides-item name="1">
                    <div class="box1">1</div>
                </vi-slides-item>
                <vi-slides-item name="2">
                    <div class="box2">2</div>
                </vi-slides-item>
                <vi-slides-item name="3">
                    <div class="box3">3</div>
                </vi-slides-item>
                `
            },
            propsData: {
                selected: '1'
            },
            listeners: {
                'update:selected': (x) => {
                    expect(x).to.eq('2')
                }
            }
        })
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click')
            done()
        })
    });
    it('会自动播放', (done) => {
        Vue.component('ViSlidesItem', SlidesItem)
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            slots: {
                default: `
                <vi-slides-item name="1">
                    <div class="box1">1</div>
                </vi-slides-item>
                <vi-slides-item name="2">
                    <div class="box2">2</div>
                </vi-slides-item>
                <vi-slides-item name="3">
                    <div class="box3">3</div>
                </vi-slides-item>
                `
            },
            propsData: {
                selected: '1',
                autoPlay: true,
                autoPlayDelay: 20
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('2')
            done()
        }, 20)
    });
})
