const mongoose = require('mongoose'); // This is the library that allows us to connect to MongoDB


function connectToDb(){
 mongoose.connect(process.env.DB_CONNECT) // This will connect to the database
 .then(() => {
    console.log('Connected to DB');
    
}).catch((err) => {
    console.log('Error connecting to DB: ', err);                          
    
});

}

module.exports = connectToDb;