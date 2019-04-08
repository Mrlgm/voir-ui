import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import validate from '../../src/validate';

const expect = chai.expect;

chai.use(sinonChai)

describe('validate', () => {
    it('存在.', () => {
        expect(validate).to.exist
    })

    it('test 1', () => {
        let data = {
            email: ''
        }

        let rules = [{
            key: 'email',
            required: true
        }]

        let errors = validate(data, rules)

        expect(errors.email.required).to.eq('必填')
    })

    it('test 1', () => {
        let data = {
            email: 0
        }

        let rules = [{
            key: 'email',
            required: true
        }]

        let errors = validate(data, rules)

        expect(errors.email).to.not.exist
    })
})