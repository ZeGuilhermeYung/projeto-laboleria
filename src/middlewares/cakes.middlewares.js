import { cakeRepository } from "../repositories/cakes.repository.js";

async function validateCake (req, res, next) {
  const { name, price } = req.body;

  try {
    const cakeExists = await cakeRepository.cakeRegistered(name);

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

export { validateCake };