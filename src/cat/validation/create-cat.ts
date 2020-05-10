const Joi = require('@hapi/joi');

const CreateCatValidation = Joi.object({
  name: Joi
    .string()
    .required(),
    
  age: Joi
    .number()
    .required()
});

export { CreateCatValidation };
