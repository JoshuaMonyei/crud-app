const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 

// Mongoose set-up
const mongoose = require('mongoose');
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9jym5.mongodb.net/crudObject?retryWrites=true&w=majority`   

// Initialize Express middleware
app.use(express.json({extended: false}));

const PORT = process.env.PORT || 4000;

//connection string to database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:  false
}, (err) => {
    if (err) {
        console.log(err);
    } else {console.log('Database connection established')}
})

// Creating database schema with the required input
const internSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true}
})
const Intern = mongoose.model('Intern', internSchema)

//  POST request to /interns to create a new intern
app.post('/interns', (req, res) => {
    //  Retrieving data from the POST request
    Intern.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newIntern) => {
        if (err) {
            return res.status(500).json({message: "Insert intern full details", err})
        } else {
            return res.status(200).json({message: "New intern created", newIntern})
        }
    })
})

// GET request to the database
app.get('/', (req, res) => {
    return res.send("Welcome to Crud App using Node.js ")
})

// GET request to /interns to fetch all interns
app.get('/interns', (req, res) => {
    Intern.find({}, (err, interns) => {
        if (err) {
            return res.status(500).json({message: 'Request not successful', err})
        } else {
            return res.status(200).json({interns})
        }
    })  
}) 

app.get('/interns/:id', (req, res) => {
    Intern.findOne({ _id: req.params.id}, (err, intern) => {
        if (!intern) {
            return res.status(404).json({message: 'Intern not found'})
        }
        else if (err) {
            return res.status(404).json({message: err})
        }
        else {
            return res.status(200).json({intern})
        }
    })
})

app.put('/interns/:id', (req, res) => {
    Intern.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, intern) => {
        if (!intern) {
            return res.status(404).json({message: 'Intern not found'})
        }
        else if (err) {
            return res.status(500).json({message: err})
        }
        else {
            intern.save((err, savedIntern) => {
                if (err) {
                    return res.status(500).json({message: err})
                } else {
                    return res.status(200).json({message: 'Intern updated successfully'})
                }
            }) 
        }  
    })
})

app.delete('/interns/:id', (req, res) => {
    Intern.findByIdAndDelete(req.params.id, (err, intern) => {
        if (!intern) {
            return res.status(404).json({message: 'Intern was not found'})
        }
        else if (err) {
            return res.status(500).json({message: err})
        }
        else {
            return res.status(200).json({message: 'Intern deleted successfully'})
        }
    })
})



app.listen(PORT, () => console.log(`Server up and running at ${PORT}`))