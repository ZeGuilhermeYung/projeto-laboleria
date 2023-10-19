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

async function changePost (req, res) {
    const { id, description } = res.locals.body;

    try {
        await postsRepository.updatePost(id, description);

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    };
};

async function removePost (req, res) {
    const { id } = res.locals.body;

    try {
        await postsRepository.deletePost(id);

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    };
};

async function getAllPosts (req, res) {
    try {
        const posts = await postsRepository.getPosts();

        return res.status(201).send(posts);
    } catch (error) {
        return res.status(500).send(error);
    };
};

export { postOrder, changePost, removePost, getAllPosts };