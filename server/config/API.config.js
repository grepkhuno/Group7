const thirdrdAPI = require("../usaJobsAPI.model");

var request = require("request");

var host = "data.usajobs.gov";
var userAgent = "your@email.address";
var authKey = "YourAPIKey";
module.exports.api = (req, res, next) => {
  request(
    {
      url: "https://data.usajobs.gov/api/search",
      method: "GET",
      headers: {
        Host: host,
        "User-Agent": userAgent,
        "Authorization-Key": authKey,
      },
    },
    function (error, response, body) {
      var data = JSON.parse(body);
    }
  );
};
