import joi from 'joi';

const ordersSchemas = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().required()
});

export default ordersSchemas;