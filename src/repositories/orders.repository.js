import db from "../database/db.js";

async function insertOrder(clientId, cakeId, quantity, totalPrice) {
    const query = `INSERT INTO orders ("clientId", "cakeId" , quantity, "totalPrice") VALUES ( $1, $2, $3, $4 );`;
    return db.query(query, [clientId, cakeId, quantity, totalPrice]);
}
  
async function findDayOrders(date) {
  const query = `SELECT * FROM orders WHERE SUBSTRING(TO_CHAR("createdAt", 'YYYY-MM-DD HH24:MI:SS') FROM 1 FOR 10) = $1;`;
  const result = await db.query(query, [date]);
  return result.rows;
}

async function findOrderById(id) {
  const query = `SELECT * FROM orders WHERE id = $1;`;
  const result = await db.query(query, [id]);
  return result.rows;
}

async function findAllOrders() {
  const query = `SELECT * FROM orders;`;
  const result = await db.query(query);
  return result.rows;
}

const ordersRepository = {
  insertOrder,
  findDayOrders,
  findOrderById,
  findAllOrders
};
  
  export { ordersRepository };