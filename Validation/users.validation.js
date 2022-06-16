import Joi from 'joi';

const userValidation = (body) => {
  const userSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }).required(),
    password: Joi.string(),
    repeat_password: Joi.ref('password'),
    access_token: [
      Joi.string(),
      Joi.number()
  ],
  })
    .with('username', 'Name')
    .xor('password', 'access_token')
    .with('password', 'repeat_password');

  return userSchema.validate(body);
}
export default userValidation;

//.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))