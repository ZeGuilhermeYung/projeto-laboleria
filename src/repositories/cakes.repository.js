import db from "../database/db.js";

async function insertCake(name, price, image, description) {
  const query = `INSERT INTO cakes (name, price , image, description) VALUES ( $1, $2, $3, $4 );`;
  return db.query(query, [name, price, image, description]);
}

async function findCake(id) {
  const query = `SELECT * FROM cakes WHERE id = $1;`;
  const result = await db.query(query, [id]);
  return result.rows[0];
}

async function cakeRegistered(name) {
  const query = `SELECT * FROM cakes WHERE name = $1;`;
  const result = await db.query(query, [name]);
  return result.rows[0];
}

const cakesRepository = {
  insertCake,
  findCake,
  cakeRegistered  
};

export { cakesRepository };