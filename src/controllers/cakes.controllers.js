import { cakesRepository } from '../repositories/cakes.repository.js';

async function postCake (req, res) {
    const { name, price, image, description } = req.body;

    try {
        await cakesRepository.insertCake( name, price, image, description );

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    };
};

export { postCake };