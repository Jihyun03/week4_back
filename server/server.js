const cors = require('cors');
const express = require('express');
const app = express();
const user_inform = require('./routes/user_inform');
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        console.log('[REQUEST-CORS] Request from origin: ', origin);
        if (!origin || whitelist.indexOf(origin) !== -1) callback(null, true)
        else callback(new Error('Not Allowed by CORS'));
    },
    credentials: true,
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use('/user_inform', user_inform);

 
const port = 80;
app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));
