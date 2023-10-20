import db from "../database/db.js";

async function insertClient(name, address, phone) {
  const query = `INSERT INTO clients (name, address, phone) VALUES ( $1, $2, $3 );`;
  return db.query(query, [name, address, phone]);
}

async function findClient(id) {
  const query = `SELECT * FROM clients WHERE id = $1;`;
  const result = await db.query(query, [id]);
  return result.rows[0];
}

async function findClientOrders(id) {
  const query = `SELECT o."id" AS "orderId", o."quantity", o."createdAt", o."totalPrice", c."name" AS "cakeName"
  FROM orders o
  JOIN cakes c ON o."cakeId" = c."id"
  WHERE o."clientId" = $1;`;
  const result = await db.query(query, [id]);
  return result.rows;
}

const clientsRepository = {
  insertClient,
  findClient,
  findClientOrders
};

export { clientsRepository };