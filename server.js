const express = require('express')
const sequelize = require('./config/db.config')
const schoolRoutes = require('./routes/schoolRoutes');

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const PORT = 8065

app.use('/api', schoolRoutes);
app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    })
})
/*app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});