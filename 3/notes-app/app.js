const fs = require('fs');

fs.writeFileSync('note.txt', 'My name is shahrokh.');
fs.appendFileSync('./note.txt', '\nThis is append data.');
