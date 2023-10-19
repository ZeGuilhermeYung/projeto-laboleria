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

async function deletePost(id) {
  const query = `DELETE FROM posts WHERE id = $1;`;
  return db.query(query, [id]);
}

async function updatePost(id, description) {
  const query = `UPDATE posts SET "description" = $2 WHERE id = $1;`;
  return db.query(query, [id, description]);
}

const clientsRepository = {
  insertClient,
  findClient,
  deletePost,
  updatePost,
};

export { clientsRepository };