const express = require('express');
let app = express();
const axios = require('axios');




app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Start server");
    }
});

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

const data = app.get('/web:id', (req, response) =>{
    let id = req.params['id'];
    axios.get(`https://btvn-web16s.herokuapp.com/api/web${id}`, {
    }).then(res => {
        console.log(res.data);
        response.send(res.data.students);
    }).catch(err => {
        console.log(err);
    });
});