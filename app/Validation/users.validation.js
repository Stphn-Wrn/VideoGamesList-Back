import Joi from 'joi';

const userValidation = (body) => {
  const userSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }).required(),
    password: Joi.string().required(),
  })


  return userSchema.validate(body);
}
export default userValidation;

