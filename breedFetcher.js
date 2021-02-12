const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    const data = JSON.parse(body);
    if (error || data.length === 0) {
      return callback(error, null);
    }
    console.log(data);
    const desc = data[0].description;
    callback(null, desc);
  });
};
module.exports = { fetchBreedDescription };

