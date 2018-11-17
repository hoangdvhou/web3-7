const fs = require('fs');

let writeData = {
    name : "Huy",
    age : "18"
}
console.log("Start write file");
fs.writeFile("test.txt",JSON.stringify(writeData),(err) => {
    console.log("Done");
});
 console.log("End write file!");

console.log("Start write file sync");
let fileDataSync = fs.readFile("test.txt", {encoding: "utf-8"});
console.log("Data :" , fileDataSync);
console.log("End write file! sync");

console.log("Start write file assync");
let fileData = fs.readFile("test.txt", {encoding: "utf-8"},(error,dataABC) => {
    let dataObj = JSON.parse(dataABC);
    console.log(`toi la ${dataObj["name"]},tuoi cua toi la ${dataObj["age"]}`);
    return data;
}
);
console.log("Data :" , fileData);
console.log("End write file! sync");