import Joi from 'joi';

const gameValidation = (body) => {
  const gameSchema = Joi.object({
    title: Joi.string().min(3).max(40).trim().required(),
    editor: Joi.string().min(3).max(30).trim(),
    platform: Joi.string().min(3).max(20).trim(),
    description: Joi.string().min(5).max(300).trim(),
  });
  return gameSchema.validate(body);
}
export default gameValidation;