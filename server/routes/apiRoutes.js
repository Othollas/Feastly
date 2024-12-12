const express = require('express');
const DataController = require('../controllers/dataController');

const router = express.Router();

router.get('/data/:table', DataController.fetchAll);
router.get('/data/:table/:id', DataController.getCheckboxStates);
router.get('/data/:table/:id', DataController.getGuest);
router.post('/data/:table', DataController.insertRow);
router.put('/data/:table/:id', DataController.updateParticipants);
router.put('/data/:table/:id/:restaurant', DataController.updateCheckbox);
console.log('Update function:', DataController.updateParticipants);

module.exports = router;