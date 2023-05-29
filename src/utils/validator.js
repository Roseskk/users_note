export function validator(data, config) {
    const errors= {}
    function validate(validateMethod,data,config) {
        let statusValidat;
        switch (validateMethod){
            case "isRequired":
                statusValidat = data === ""
                break;
            case "isEmail":{
                const emailRegExp = /^\S+@\S+\.\S+$/g
                if (data) {
                    statusValidat = !emailRegExp.test(data)
                }
                break;
            }
            case "isCapital": {
                const capital = /[A-Z]+/g
                statusValidat = !capital.test(data)
                break;
            }
            case "isContainDigit": {
                const digitRegExpt = /\d+/g
                statusValidat = !digitRegExpt.test(data)
            }
            default:
                break;
        }
        if (statusValidat) return config.message
    }
    for (const fieldName in data) {
        for  (const validateMethod in config[fieldName]) {
            const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
            if (errors) {
                errors[fieldName] = error
            }
        }
    }
    return errors
}