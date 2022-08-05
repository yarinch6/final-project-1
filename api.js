const axios = require('axios')

const BASE_URL = "http://localhost:3000"
api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },

  withCredentials: true,
});

module.exports = api