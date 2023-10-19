import { postsRepository } from "../repositories/posts.repository.js";

async function createPost (req, res) {
    const { url, description } = res.locals.body;
    const { userId } = res.locals;

    try {
        await postsRepository.insertPost(url, description, userId);

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

export { createPost, changePost, removePost, getAllPosts };