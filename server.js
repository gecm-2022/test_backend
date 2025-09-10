require('dotenv').config()
const express = require('express');
const app = express();
const port = 5000 ;

app.get('/', (req, res) => {
    res.send(`Hello World i am harsh:${port}`);
})

app.listen(port ,()=>{
    console.log(`Server is running on ${port}`);
    
})
