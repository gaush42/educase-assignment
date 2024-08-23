const express = require('express')
const sequelize = require('./config/db.config')
const schoolRoutes = require('./routes/schoolRoutes');

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const PORT = 4000

app.use('/api', schoolRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});