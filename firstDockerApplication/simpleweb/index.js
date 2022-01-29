const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send("Hi Nodejs application"); 
});


app.listen(8080, () => {
    console.log("Listening to the port 8080");  
});