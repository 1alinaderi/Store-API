const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
    loginvalidator(){
        return [
            check("email")
            .isEmail()
            .withMessage("email is invalid"),

            check("password")
            .not()
            .isEmpty()
            .withMessage("password cant be empty")  
        ]
    }
}