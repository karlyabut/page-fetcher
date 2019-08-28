const args = process.argv.slice(2);
const fs = require('fs');

// console.log("==>", args[0]);

const request = require('request');
request(args[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(args[1], body, (error) => {
    if(error) throw error;
    console.log(`Downloaded and saved`);
  });
});