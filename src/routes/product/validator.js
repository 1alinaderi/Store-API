const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
    productvalidator(){
        return [
            check("name")
            .not()
            .isEmpty()
            .withMessage('name cant be empty'),

            check("desc")
            .not()
            .isEmpty()
            .withMessage('desc cant be empty'),

            check("image")
            .not()
            .isEmpty()
            .withMessage("image cant be empty"),

            check("price")
            .not()
            .isEmpty()
            .withMessage("price cant be empty")
        ]
    }
}