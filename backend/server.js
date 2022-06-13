const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

require('./server/database/database')();

app.use('/user', require('./server/router/userRouter'))

app.listen(PORT, () => {
    console.log("Server started at http://localhost:9000");  
})


