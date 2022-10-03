const axios = require("axios");

axios
  .get("https://usman-recipes.herokuapp.com/api/recipes1")
  .then(function (response) {
    console.log(response);
  })
  .catch(function () {
    console.log("An error has been occured");
  });
