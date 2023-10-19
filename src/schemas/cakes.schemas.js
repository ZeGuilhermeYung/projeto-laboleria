import joi from 'joi';

const photoRegex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;

const cakesSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().required(),
    description: joi.string().empty(''),
    image: joi.string().pattern(photoRegex).required()
});

export default cakesSchema;