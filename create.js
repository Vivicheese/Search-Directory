let search = prompt("Enter the name of file or directory");
console.log(search);
const fs = require('fs');

const fileExists = fs.existsSync('vivian.js');
console.log({
  fileExists: fileExists,
});
if (fileExists) {
      console.log('File exists!');
    } else {
      console.log('File does not exist!');
    }
    
