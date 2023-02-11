// import axios, { isCancel, AxiosError } from "axios";

// const axios = require("axios");

const axios = require("axios"); // browser commonJS bundle (ES2017)
// const axios = require('axios/dist/node/axios.cjs'); // node commonJS bundle (ES2017)

// mainWindow = new BrowserWindow({
//   webPreferences: {
//     nodeIntegration: true,
//   },
// });

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
