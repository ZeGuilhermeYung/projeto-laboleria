import { cakesRepository } from "../repositories/cakes.repository.js";

async function validateCake (req, res, next) {
  const { name, price } = req.body;

  try {
    const cakeExists = await cakesRepository.cakeRegistered(name);

    if (cakeExists) {
      res.sendStatus(409);
      return;
    }

    if (Number(price) <= 0) {
      res.sendStatus(400);
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default validateCake;