import db from "../database/db.js";

const findOrders =`SELECT
jsonb_build_object(
  'client', jsonb_build_object('id', cl."id", 'name', cl."name", 'address', cl."address", 'phone', cl."phone"),
  'cake', jsonb_build_object('id', ca."id", 'name', ca."name", 'price', ca."price", 'description', ca."description", 'image', ca."image"),
  'orderId', o."id",
  'createdAt', o."createdAt",
  'quantity', o."quantity",
  'totalPrice', o."totalPrice"
) AS result
FROM orders o
JOIN clients cl ON o."clientId" = cl."id"
JOIN cakes ca ON o."cakeId" = ca."id"`;

async function insertOrder(clientId, cakeId, quantity, totalPrice) {
    const query = `INSERT INTO orders
      ("clientId", "cakeId" , quantity, "totalPrice")
      VALUES ( $1, $2, $3, $4 );`;
    return db.query(query, [clientId, cakeId, quantity, totalPrice]);
}
  
async function findDayOrders(date) {
  const query = `${findOrders} 
    WHERE SUBSTRING(TO_CHAR("createdAt", 'YYYY-MM-DD HH24:MI:SS')
    FROM 1 FOR 10) = $1;`;
  const result = await db.query(query, [date]);
  return result.rows;
}

async function findOrderById(id) {
  const query = `${findOrders} WHERE o.id = $1;`;
  const result = await db.query(query, [id]);
  return result.rows;
}

async function findAllOrders() {
  const query = findOrders;
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