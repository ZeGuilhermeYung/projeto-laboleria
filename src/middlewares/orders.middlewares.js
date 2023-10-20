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

async function mountOrders (orders) {

  const orderPromises = orders.map(async (order) => {
    const client = await clientsRepository.findClient(order.clientId);
    const cake = await cakesRepository.findCake(order.cakeId);

    return {
      client,
      cake,
      order: {
        orderId: order.id,
        createdAt: order.createdAt,
        quantity: order.quantity,
        totalPrice: order.totalPrice
      }
    };
  });

  const completeOrders = await Promise.all(orderPromises);

  return completeOrders;
}

async function collectOrders (req, res, next) {
  const { date } = req.body;
  let orders = await ordersRepository.findAllOrders();

  if (date) orders = await ordersRepository.findDayOrders(date);

  if (!orders) {
    res.send("").status(404);
    return;
  }

  res.locals.body = await mountOrders(orders);
  
  next();
}

async function collectOrdersById (req, res, next) {
  const { id } = req.params;
  const orders = await ordersRepository.findOrdersById(id);

  if (!orders) {
    res.sendStatus(404);
    return;
  }

  res.locals.body = await mountOrders(orders);
    
  next();
}

export { validateOrder, collectOrders, collectOrdersById };