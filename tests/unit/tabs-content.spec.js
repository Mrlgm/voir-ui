import chai from 'chai'
import sinonChai from 'sinon-chai'
import TabsContent from '@/navigation/tabs/tabs-content'

const expect = chai.expect;

chai.use(sinonChai)

describe('TabsContent', () => {
    it('存在.', () => {
        expect(TabsContent).to.exist
    })
})