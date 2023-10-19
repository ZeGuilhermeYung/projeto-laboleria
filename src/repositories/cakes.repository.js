import db from "../database/db.js";

async function insertCake(name, price, image, description) {
  const query = `INSERT INTO cakes (name, price , image, description) VALUES ( $1, $2, $3, $4 );`;
  return db.query(query, [name, price, image, description]);
}

async function sessionAuth(userId, token) {
  const query = `SELECT * FROM sessions WHERE "userId" = $1 AND token = $2;`;
  return db.query(query, [userId, token]);
}

async function findSession(token) {
  const query = `SELECT * FROM sessions WHERE token = $1;`;
  const result = await db.query(query, [token]);
  return result.rows[0];
}

async function cakeRegistered(name) {
  const query = `SELECT * FROM cakes WHERE name = $1;`;
  const result = await db.query(query, [name]);
  return result.rows[0];
}

const cakeRepository = {
  insertCake,
  signInAuth,
  sessionAuth,
  findSession,
  cakeRegistered  
};

export { cakeRepository };