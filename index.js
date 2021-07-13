const fs = require('fs');
//Creating a folder
fs.mkdirSync("Task9");

//Creating a file
fs.writeFileSync('Task9/T9.txt' , "Hello World");

//Updating a file
fs.appendFileSync("Task9/T9.txt" , ". This is Surbhi.");

//Reading the file
const a = fs.readFileSync('Task9/T9.txt' , 'utf8');
console.log(a.toString());

//Renaming the file
// fs.renameSync("Task9/T9.txt" , "Task9/Surbhi.txt");

// //deleting the existing file and folder
// fs.unlinkSync("Task9/Surbhi.txt");
// fs.rmdirSync("Task9");
