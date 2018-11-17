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

app.get('/web10', (req,res) => {
    axios ({
        method: 'GET',
        url: 'https://btvn-web16s.herokuapp.com/api/web10',
    }).then(({data}) => {
        const {student} = data;
        let studentHTML = studentHTML + "<li>" + student[i] + "</li>";
    }
    // console.log(studentHTML);
    res.send("<ol>" + studentHTML + "</ol>")
});
});