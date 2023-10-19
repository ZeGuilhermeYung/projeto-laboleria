import joi from 'joi';

const numberRegex = new RegExp(/^\d+$/);

const clientsSchemas = joi.object({
  name: joi.string().required(),
  address: joi.string().required(),
  phone: joi.string().pattern(numberRegex).min(10).max(11).required()
});

export { clientsSchemas };