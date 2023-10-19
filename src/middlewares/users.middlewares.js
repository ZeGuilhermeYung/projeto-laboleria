import { authRepository } from "../repositories/auth.repository.js";

async function validateUser(req, res, next) {
  const { email, photo } = res.locals.body;
  const defaultUserImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/768px-User-avatar.svg.png";

  if (!photo) res.locals.body.photo = defaultUserImage;

  try {
    const emailExists = await authRepository.userRegistered(email);

    if (emailExists) {
      res.sendStatus(409);
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { validateUser };