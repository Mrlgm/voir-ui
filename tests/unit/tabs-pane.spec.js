import chai from 'chai'
import sinonChai from 'sinon-chai'
import TabsPane from '../../src/navigation/tabs/tabs-pane'

const expect = chai.expect;

chai.use(sinonChai)

describe('TabsPane', () => {
    it('存在.', () => {
        expect(TabsPane).to.exist
    })
})