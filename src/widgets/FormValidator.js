import validator from 'validator';

class FormValidator {

    constructor(validation){
        this.validation = validation;
    }

    validate(state) {
        
        const campoValor = state[this.validation.field.toString()];
        const metodoValidacao = validator[this.validation.method];

        if(metodoValidacao(campoValor, [], state))
            return false;
        else
            return true;
        
    }

}
export default FormValidator;