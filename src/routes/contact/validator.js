const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
    sendEmailvalidator(){
        return [
            check("email")
            .isEmail()
            .withMessage("email is invalid"),

            check("name")
            .not()
            .isEmpty()
            .withMessage('name cant be empty'),

            check("phone")
            .not()
            .isEmpty()
            .withMessage("phone cant be empty")  ,

            check("comment")
            .not()
            .isEmpty()
            .withMessage("comment cant be empty") 
        ]
    }
}