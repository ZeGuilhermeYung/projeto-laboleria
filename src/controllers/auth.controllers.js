import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import { authRepository } from '../repositories/auth.repository.js';

async function signUp (req, res) {
    const { username, email, password, photo } = res.locals.body;

    try {
        const passwordHash = bcrypt.hashSync(password, 10);

        await authRepository.signUpAuth(username, email, passwordHash, photo);

        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    };
};

async function signIn (req, res) {
    try {
        const { userId, username, photo } = res.locals.user;
        
        const token = uuid();

        await authRepository.signInAuth(userId, token);

        return res.status(200).send({ token, username, photo });
    } catch (error) {
        return res.status(500).send(error);
    };
};

export { signUp, signIn };