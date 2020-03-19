const readline = require('readline');

let grid;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function main() {
    rl.question('enter the string ', (str) => {
        // TODO: Log the answer in a database
        console.log(`you have entered a string`, str);
        var ar = str.split("")
        ar.reverse(); 
        var finalAr = []
        
        while(ar.length > 0) {
            var popItm = ar.pop()
            if (popItm === "#" ) {
                finalAr.pop();
            } else {
                finalAr.push(popItm);
            }
        }
        console.log('output:: ', finalAr.join(''));
    });

  
    rl.on('SIGINT', () => {
        rl.question('Are you sure you want to exit? ', (answer) => {
          if (answer.match(/^y(es)?$/i)) rl.pause();
        });
       
    });
} 

main();