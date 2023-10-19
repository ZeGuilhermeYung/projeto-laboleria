import { ordersRepository } from "../repositories/orders.repository.js";
import { cakesRepository } from "../repositories/cakes.repository.js";
import { clientsRepository } from "../repositories/clients.repository.js";

async function validateOrder (req, res, next) {
  const { clientId, cakeId, quantity } = req.body;
  const cakeExists = await cakesRepository.findCake(cakeId);
  const clientExists = await clientsRepository.findClient(clientId);

  if (!cakeExists || !clientExists) {
    res.sendStatus(404);
    return;
  }

  if (quantity <= 0 || quantity >= 5) {
    res.sendStatus(400);
    return;
  }

  const totalPrice = (quantity * Number(cakeExists.price)).toFixed(2);
  
  res.locals.body = {
    clientId,
    cakeId,
    quantity,
    totalPrice
  }

  next();
}

export { validateOrder };