import Joi from 'joi';

const userRegisterValidation = (body) => {
  const userSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }).required(),
    password: Joi.string().required(),
    firstname: Joi.string().required(),
    name: Joi.string().required()
  })


  return userSchema.validate(body);
}

const userLoginValidation = (body) => {
  const userSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }).required(),
    password: Joi.string().required(),
  })


  return userSchema.validate(body);
}
export { userRegisterValidation, userLoginValidation };

