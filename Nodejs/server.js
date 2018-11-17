const express = require('express');
let app = express();
const path = require('path');

app.use(express.static("btBuoi2-navMenu"));

app.get("/about",(Request,Response) => {
    console.log(path.resolve(__dirname));
    Response.sendFile(path.resolve(__dirname , "/btBuoi2-navMenu/index.html"));
});



app.listen(6976,(err) => {
    if(err) console.log(err)
    else console.log("Server start success");
}
);
// app.get("url"(request,response) => {

// });

//http://10.10.1.138:6996/