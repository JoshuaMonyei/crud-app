// Mongoose set-up
const mongoose = require('mongoose');
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9jym5.mongodb.net/crudObject?retryWrites=true&w=majority`   


//connection string to database
function connectDB() {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:  false,
        useCreateIndex: true
    }, (err) => {
        if (err) {
            console.log(err);
        } else {console.log('Database connection established')}
    })
}

module.exports = connectDB;