const readline = require('readline');

let grid;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function main() {
    rl.question('enter the string to check if its an pangram => ', (str) => {
        // TODO: Log the answer in a database
        console.log(`you have entered a string`, str);
        // first check if the eneterd string length is greater than 26
        if (str.length < 26) {
            console.log('entered string length is less than 26 can not be pangram in any case.');
        } else {
                // lower case the string
                str.toLowerCase();
                // check with regex to find out all unique alphabets.
                let regex = /([a-z])(?!.*\1)/g;
                console.log('output:: ',(str.match(regex) || []).length === 26 ? 'the given string is a pangram string' : 'the given string is not a pangram string');
        }
    });

  
    rl.on('SIGINT', () => {
        rl.question('Are you sure you want to exit? ', (answer) => {
          if (answer.match(/^y(es)?$/i)) rl.pause();
        });
       
    });
} 

main();