const { sql, poolPromise } = require("../config/db");

async function getAll() {
  const pool = await poolPromise;
  const result = await pool.request().query("SELECT * FROM custom_table");
  return result.recordset;
}

async function create({ name, email, phone }) {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input("name", sql.NVarChar, name)
    .input("email", sql.NVarChar, email)
    .input("phone", sql.NVarChar, phone)
    .query(
      "INSERT INTO custom_table (name, email, phone) VALUES (@name, @email, @phone); SELECT SCOPE_IDENTITY() as id;"
    );
  return { id: result.recordset[0].id, name, email, phone };
}

async function update(id, { name, email, phone }) {
  const pool = await poolPromise;
  await pool
    .request()
    .input("id", sql.Int, id)
    .input("name", sql.NVarChar, name)
    .input("email", sql.NVarChar, email)
    .input("phone", sql.NVarChar, phone)
    .query(
      "UPDATE custom_table SET name=@name, email=@email, phone=@phone WHERE id=@id"
    );
}

async function remove(id) {
  const pool = await poolPromise;
  await pool.request().input("id", sql.Int, id).query("DELETE FROM custom_table WHERE id=@id");
}

module.exports = { getAll, create, update, remove };
