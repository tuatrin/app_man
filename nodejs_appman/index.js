const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input Some String : ", data => {

    let num_data = "";

    for (let i of data) {
        switch(i) {
            case "0":
                num_data += i;
                break;
            case "1":
                num_data += i;
                break;
            case "2":
                num_data += i;
                break;
            case "3":
                num_data += i;
                break;
            case "4":
                num_data += i;
                break;
            case "5":
                num_data += i;
                break;
            case "6":
                num_data += i;
                break;
            case "7":
                num_data += i;
                break;
            case "8":
                num_data += i;
                break;
            case "9":
                num_data += i;
                break;
            default:
                break;
          }
      }

    int_data = 0; fac = 1;

    for (let a = num_data.length - 1; a >= 0; a--) {
        int_data += (num_data.charAt(a) - '0') * fac;
        fac *= 10;
      }

    console.log(`Get Only Int : ${int_data}`);
    rl.close();
})
