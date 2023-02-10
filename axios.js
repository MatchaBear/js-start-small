// import axios, { isCancel, AxiosError } from "axios";

// const axios = require("axios");

const axios = require("axios/dist/browser/axios.cjs"); // browser commonJS bundle (ES2017)
// const axios = require('axios/dist/node/axios.cjs'); // node commonJS bundle (ES2017)

mainWindow = new BrowserWindow({
  webPreferences: {
    nodeIntegration: true,
  },
});

axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
