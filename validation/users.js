const Joi = require('@hapi/joi');

// Register validation
const registerValidation = async (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
    });

	try {
        await schema.validateAsync(data);
    } catch (error) {
        return error.details[0].message;
    }
}

// Login validation
const loginValidation = async (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
    });

	try {
        await schema.validateAsync(data);
    } catch (error) {
        return error.details[0].message;
    }
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;