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

    it('required: true 通过', () => {
        let data = {email: ''}

        let rules = [{key: 'email', required: true}]

        let errors = validate(data, rules)

        expect(errors.email.required).to.eq('必填')
    })

    it('test email is 0', () => {
        let data = {email: 0}

        let rules = [{key: 'email', required: true}]

        let errors = validate(data, rules)

        expect(errors.email).to.not.exist
    })

    it('格式不正确', () => {
        let data = {email: '@foxmail.com'}

        let rules = [{key: 'email', pattern: /^.+@.+$/}]

        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })

    it('格式正确', () => {
        let data = {email: '1@foxmail.com'}

        let rules = [{key: 'email', pattern: /^.+@.+$/}]

        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('email格式不正确', () => {
        let data = {email: '@foxmail.com'}

        let rules = [{key: 'email', pattern: 'email'}]

        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })

    it('email格式正确', () => {
        let data = {email: '1@foxmail.com'}

        let rules = [{key: 'email', pattern: 'email'}]

        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('pattern & required', () => {
        let data = {email: ''}

        let rules = [{key: 'email', pattern: 'email', required: true}]

        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
        expect(errors.email.pattern).to.not.exist
    })

    it('pattern & minLength', () => {
        let data = {email: ''}

        let rules = [{key: 'email', pattern: 'email', minLength: 6}]

        let errors = validate(data, rules)
        expect(errors.email.minLength).to.exist
        expect(errors.email.pattern).to.exist
    })
})