const path = require('path');

// Basename file name

console.log(path.basename(__filename)); // path_demo

// Directory name
console.log(path.dirname(__filename)); // /Users/seyoungkim/Desktop/basic_nodejs/reference

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));