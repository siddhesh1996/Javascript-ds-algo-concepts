const fs = require('fs');

const writer = fs.createWriteStream('log.txt', { flags: 'a' });
let date_ob = new Date();

//Current date
//adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// Current Month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// Current year
let year = date_ob.getFullYear();

// Current hours
let hours = date_ob.getHours();

// Current minutes
let minutes = date_ob.getMinutes();

// Current 
writer.write('Logs\n');