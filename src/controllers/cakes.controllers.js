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

async function signIn (req, res) {
    try {
        const { userId, username, photo } = res.locals.user;
        
        const token = uuid();

        await cakesRepository.signIncakes(userId, token);

        return res.status(200).send({ token, username, photo });
    } catch (error) {
        return res.status(500).send(error);
    };
};

export { postCake, signIn };