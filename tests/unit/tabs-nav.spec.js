import chai from 'chai'
import sinonChai from 'sinon-chai'
import TabsNav from '@/navigation/tabs/tabs-nav'

const expect = chai.expect;

chai.use(sinonChai)

describe('TabsNav', () => {
    it('存在.', () => {
        expect(TabsNav).to.exist
    })
})