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

async function collectOrders (req, res, next) {
  const { date } = req.body;
  let orders = await ordersRepository.findAllOrders();
 
  if (date) orders = await ordersRepository.findDayOrders(date);

  if (orders.length === 0) return res.status(404).send([]);

  orders = orders.map(order => order.result);

  res.locals.body = orders;
  
  next();
}

async function collectOrderById (req, res, next) {
  const { id } = req.params;
  const order = await ordersRepository.findOrderById(id);
  
  if (order.length === 0) return res.sendStatus(404);

  res.locals.body = order[0].result;
    
  next();
}

export { validateOrder, collectOrders, collectOrderById };