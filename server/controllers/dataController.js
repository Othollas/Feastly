const DataModel = require(`../models/dataModel`);


const DataController = {
  async fetchAll(req, res) {
    const { table } = req.params;
    try {
      const data = await DataModel.getAllFromTable(table);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to fetch data` });
    }
  },

  async getCheckboxStates(req, res) {
    const { table, id } = req.params; // Extraction des paramètres table et id depuis la requête

    try {
      const data = await DataModel.getCheckboxStates(table, id); // Appel au modèle pour obtenir les données
      res.json(data); // Renvoi des données au client
    } catch (error) {
      console.error('Erreur lors de la récupération des états des checkboxes:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
    }
  },

  async  getGuest (req, res) {
    const { table, id } = req.params; // Extraction des paramètres table et id depuis la requête
    
    try {
      const data = await DataModel.getGuest(table, id); // Appel au modèle pour obtenir les données
      res.json(data); // Renvoi des données au client
    } catch (error) {
      console.error('Erreur lors de la récupération des états des checkboxes:', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
    }
  },

  async updateParticipants(req, res) {
    const { table, id } = req.params;
    const updateData = req.body;

    console.log('Données reçues par le serveur :', updateData);

    try {
      const result = await DataModel.updateParticipants(table, id, updateData);
      res.json({ succes: true, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to update participants` });
    }
  },
  
  async updateCheckbox(req, res) {
    const { table, id, restaurant } = req.params;
    const { data } = req.body;

    try {
      const result = await DataModel.updateCheckbox(table, id, restaurant, data);
      res.json({ succes: true, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Failed to update checkbox` });
    }
  },


  async insertRow(req, res) {
    const { table } = req.params;
    const data = req.body;
    try {
      await DataModel.insertIntoTable(table, data);
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to insert data' });
    }
  },

};


module.exports = DataController;