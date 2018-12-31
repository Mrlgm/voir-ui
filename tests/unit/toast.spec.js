import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Toast from '../../src/notice/toast/toast'

const expect = chai.expect;

chai.use(sinonChai)

describe('Toast', () => {
    // BDD 行为测试驱动

    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props', function () {
        it('接受 autoClose', function (done) {
            const  wrapper = mount(Toast,{
                propsData: {
                    autoClose: 1,
                }
            })
            expect(wrapper.exists()).to.eq(true)
            setTimeout(() => {
                expect(wrapper.exists()).to.eq(false)
                done()
            }, 1000)
        })
        xit('接受 closeButton', function () {
            const callback = sinon.fake()
            const  wrapper = mount(Toast,{
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    }
                }
            })
            const closeButton = wrapper.find('.close')
            console.log(closeButton.text())
            expect(closeButton.text().trim()).to.eq('关闭吧')
            closeButton.trigger('click')
            expect(callback.called).to.eq(true)
        })
        xit('接受 enableHtml', function () {
            const  wrapper = mount(Toast,{
                propsData: {
                    enableHtml: true
                },
                slots:{
                    default:{template:`<strong id="test">hi</strong>`}
                }
            })
            const strong = wrapper.find('#test')
            expect(strong).to.exist
        })
        it('接受 position ', function () {
            const  wrapper = mount(Toast,{
                propsData: {
                    position: 'bottom'
                }
            })
            expect(wrapper.classes()).to.includes('position-bottom')
        });
    })
})