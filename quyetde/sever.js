const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended : false}));
app.get("/ask", (req,res) =>{
    res.sendFile(__dirname + "/view/ask.html");
});

app.post("/ask",(req,res) =>{
        console.log(req.body);
        const questions = JSON.parse(fs.readFileSync('./question.json','utf-8'));
        console.log(questions,questions.length);
        let newQuestion = {
            id: questions.length,
            yes: 0,
            no: 0,
            content: req.body.question
        }
        questions.push(newQuestion);
        fs.writeFileSync('./question.json',JSON.stringify(questions));
        res.redirect("/");
    });

    app.get('/randomquestion', (req, res) => {
        const rnd = Math.floor(Math.random() * questions.length);
        res.send(questions[rnd].content);
    })
    
    app.get('/question/:questionid', (req, res) => {
        const {
            questionid
        } = req.params;
        res.send(questions[questionid].content);
    });
app.get("/",(req,res) => {
    res.send("Hello");
})

app.use(express.static("view"));
app.listen(1605,(err) => {
    if(err) console.log(err)
    else console.log("Success");
}
);