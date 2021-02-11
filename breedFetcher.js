const request = require('request');
const args = process.argv.slice(2);
const breedName = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  const data = JSON.parse(body);
  console.log(data[0].description);
});