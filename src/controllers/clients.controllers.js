import { clientsRepository } from "../repositories/clients.repository.js";

async function postClient(req, res) {
    const { name, address, phone } = req.body;

    try {
        await clientsRepository.insertClient( name, address, phone );

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    };
};

export { postClient };