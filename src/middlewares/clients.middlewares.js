import { authRepository } from "../repositories/auth.repository.js";
import bcrypt from 'bcrypt';

async function validateLogin (req, res, next) {
  const { email, password } = req.body;
  const user = await authRepository.userRegistered(email);

  if (!user) {
    res.sendStatus(401);
    return;
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);


  if (!isValidPassword) {
      res.sendStatus(401);
      return;
  }

  res.locals.user = {
    userId: user.id,
    username: user.username,
    photo: user.photo
  };
  next();
}

async function validateAuth (req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
      res.sendStatus(401);
      return;
  }

  try {
    const session = await authRepository.findSession(token);

    if (!session) {
      res.sendStatus(404);
      return;
    }

    res.locals.userId = session.userId;
    
    next();

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export { validateAuth, validateLogin };