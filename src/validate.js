export default function validate(data, rules) {
    let errors = {}
    rules.forEach((rule) => {
        let value = data[rule.key]
        if (rule.required) {
            let error = validate.required(value)
            if (error) {
                if (!errors[rule.key]) {
                    errors[rule.key] = {}
                }
                errors[rule.key].required = error
                return
            }
        }
        // for(let key in rule){
        //     if(key !== 'key' && key !== 'required'){
        //         if (rule[key]) {
        //             let error = validate[key](value, rule[key])
        //             if (error) {
        //                 if (!errors[rule.key]) {
        //                     errors[rule.key] = {}
        //                 }
        //                 errors[rule.key].key = error
        //             }
        //         }
        //     }
        // }
        if (rule.pattern) {
            let error = validate.pattern(value, rule.pattern)
            if (error) {
                if (!errors[rule.key]) {
                    errors[rule.key] = {}
                }
                errors[rule.key].pattern = error
            }
        }
        if (rule.minLength) {
            let error = validate.minLength(value, rule.minLength)
            if (error) {
                if (!errors[rule.key]) {
                    errors[rule.key] = {}
                }
                errors[rule.key].minLength = error
            }
        }
    })

    return errors
}

validate.required = (value) => {
    if (!value && value !== 0) {
        return '必填'
    }
}

validate.pattern = (value, pattern) => {
    if (pattern === 'email') {
        pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
        return '格式不正确'
    }
}

validate.minLength = (value, minLength) => {
    if (value.length < minLength) {
        return '太短'
    }
}