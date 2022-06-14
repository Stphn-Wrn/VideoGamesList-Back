import Joi from 'joi';

const userValidation = (body) => {
  const userSchema = Joi.object({
    UserName: Joi.string().alphanum().min(3).max(30).required(),
    Name: Joi.string().min(3).max(30).trim(),
    FirstName: Joi.string().min(3).max(40).trim(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: true } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
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