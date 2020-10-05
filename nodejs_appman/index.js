const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input Some String : ", function(data) {
    let number = data.match(/\d/g); //regx remove non digits charactor
    number = number.join(""); //seperate with empty
    console.log(`Covert to Int : ${number}`);
    rl.close();
});