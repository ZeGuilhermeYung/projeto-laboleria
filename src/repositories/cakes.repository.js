import db from "../database/db.js";

async function insertCake(name, price, image, description) {
  const query = `INSERT INTO cakes (name, price , image, description) VALUES ( $1, $2, $3, $4 );`;
  return db.query(query, [name, price, image, description]);
}

async function signInAuth(id, token) {
const query = `INSERT INTO sessions ("userId", token) VALUES ($1, $2);`;
  return db.query(query, [id, token]);
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

async function userRegistered(email) {
  const query = `SELECT * FROM users WHERE email = $1;`;
  const result = await db.query(query, [email]);
  return result.rows[0];
}

const cakeRepository = {
  insertCake,
  signInAuth,
  sessionAuth,
  findSession,
  userRegistered  
};

export { cakeRepository };