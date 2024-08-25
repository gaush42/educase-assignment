const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// /addSchool: This endpoint allows adding a new school to the system using a POST request.
router.post('/addSchool', schoolController.addSchool);

// /listSchools: This endpoint allows retrieving a list of existing schools using a GET request.
router.get('/listSchools', schoolController.listSchools);

module.exports = router;