const express = require('express');
const crud = express.Router();
const internController = require('../controllers/internsController')

//  POST request to /interns to create a new intern
crud.post('/interns', internController.createNewIntern)

// GET request to the database
crud.get('/', (req, res) => {
    return res.send("Welcome to Crud App using Node.js ")
})

// GET request to /interns to fetch all interns
crud.get('/interns', internController.fecthInterns) 

// GET request to /interns to fetch a single intern
crud.get('/interns/:id', internController.fetchSingleIntern)

// PUT request to update a single intern
crud.put('/interns/:id', internController.updateSingleIntern)

// DELETE request to delete a single intern
crud.delete('/interns/:id', internController.deleteSingleIntern)

module.exports = crud
