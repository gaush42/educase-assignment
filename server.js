const express = require('express')
const sequelize = require('./config/db.config')
const schoolRoutes = require('./routes/schoolRoutes');

//This line creates an instance of an Express application
const app = express()

//This line sets up middleware to parse incoming requests with URL-encoded payloads.
app.use(express.urlencoded({extended: false}))

//This line sets up middleware to parse incoming requests with JSON payloads.
app.use(express.json())

const PORT = 4000

//sets up routing middleware in an Express application,
//so that all requests starting with /api are handled by the routes defined in schoolRoutes.
app.use('/api', schoolRoutes);


//This code synchronizes Sequelize models with the database and, 
//if successful, starts the Express server on the specified port. 
//If there's an error during synchronization, it logs the error to the console.
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});