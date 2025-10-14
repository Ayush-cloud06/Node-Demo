
const fs = require('fs');

const textIn = fs.readFileSync('./input.txt', 'utf-8');


const textOut = `nad i'd win if i fought naruto with my eyes closed said a man calmly: ${textIn} . \n created on ${Date.now()}`;
fs.writeFileSync('./output.txt', textOut);

const newText = fs.readFileSync('./output.txt', 'utf-8');


//non-blocking, async way
fs.readFile('./input.txt', 'utf-8', (err, data) => {
    fs.readFile(`./${data}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
    });
    if (err) return console.log('error');
    console.log(data);
});

console.log('will read file!');