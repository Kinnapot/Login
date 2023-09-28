require('dotenv').config();

const db = require('./models');
const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./route/user');
const dashboardRoute = require('./route/dashboard')

require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoute)
app.use('/dasdboards', dashboardRoute)

db.sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    });
});