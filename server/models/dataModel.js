const db = require('../config/db');


const DataModel = {
    async getAllFromTable(tableName) {
        const [rows] = await db.query(`SELECT * FROM ??`, [tableName]);
        return rows
    },

    async getCheckboxStates(tableName, id) {
        const query = `SELECT * FROM ?? WHERE name = ?`;
        const [rows] = await db.query(query, [tableName, id]);
        return rows[0]; // Retourne un objet avec toutes les colonnes
      },
      async getGuest(tableName, id) {
        const query = `SELECT * FROM ?? WHERE name = ?`;
        const [rows] = await db.query(query, [tableName, id]);
        return rows[0]; // Retourne un objet avec toutes les colonnes
      },

    async updateParticipants(tableName, id, update_data) {
        const query = `UPDATE ?? SET nb_adulte = ?, nb_enfant = ? where NAME = ?`;
        const { nb_adulte, nb_enfant } = update_data;
        console.log(nb_adulte, nb_enfant)
        const [result] = await db.query(query, [tableName, nb_adulte, nb_enfant, id]);
        return result;
    }, 
    async updateCheckbox(tableName, id, restaurantName, value) {
        console.log('Requête MySQL :', tableName, restaurantName, value, id);
        const [result] = await db.query(`UPDATE ?? SET ?? = ? WHERE name = ?`, [tableName, restaurantName, value, id]);
        return result;
    },
    async insertIntoTable(tableName, data) {
        const  [result] = await db.query(`INSERT INTO ?? SET ?`, [tableName, data]);
        return result
    }
}

module.exports = DataModel;