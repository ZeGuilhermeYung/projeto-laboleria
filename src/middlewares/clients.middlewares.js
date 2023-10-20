import { clientsRepository } from "../repositories/clients.repository.js";

async function collectClientOrders (req, res, next) {
  const { id } = req.params;
  const client = await clientsRepository.findClient(id);
  console.log(client);
  const orders = await clientsRepository.findClientOrders(id);

  if (!client || orders.length === 0) {
    res.sendStatus(404);
    return;
  }
  
  res.locals.body = orders;

  next();
}

export default collectClientOrders;