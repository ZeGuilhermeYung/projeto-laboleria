import { ordersRepository } from "../repositories/orders.repository.js";

async function postOrder (req, res) {
    const { clientId, cakeId, quantity, totalPrice } = res.locals.body;

    try {
        await ordersRepository.insertOrder(clientId, cakeId, quantity, totalPrice);

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    };
};

async function getOrders (req, res) {
    try {
        return res.status(200).send(res.locals.body);
    } catch (error) {
        return res.status(500).send(error);
    };
};

export { postOrder, getOrders };