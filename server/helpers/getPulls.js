const axios = require('axios');

const getPulls = (repo, config) => {
  const apiURL = `https://api.github.com/repos/${repo}/pulls`;

  return axios.get(apiURL, config)
    .then(({ data }) => data)
    .catch((err) => err);
};

module.exports = getPulls;
