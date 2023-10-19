import db from "../database/db.js";

async function insertOrder(clientId, cakeId, quantity, totalPrice) {
    const query = `INSERT INTO orders ("clientId", "cakeId" , quantity, "totalPrice") VALUES ( $1, $2, $3, $4 );`;
    return db.query(query, [clientId, cakeId, quantity, totalPrice]);
  }
  
  async function getPosts() {
    const query = `SELECT * FROM posts ORDER BY id DESC LIMIT 20;`;
    const result = await db.query(query);
    return result.rows;
  }
  
  async function deletePost(id) {
    const query = `DELETE FROM posts WHERE id = $1;`;
    return db.query(query, [id]);
  }
  
  async function updatePost(id, description) {
    const query = `UPDATE posts SET "description" = $2 WHERE id = $1;`;
    return db.query(query, [id, description]);
  }
  
  const ordersRepository = {
    insertOrder,
    deletePost,
    updatePost,
  };
  
  export { ordersRepository };