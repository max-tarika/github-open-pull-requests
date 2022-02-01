const axios = require('axios');

const getCommits = (pullReq, config) => {
  // eslint-disable-next-line camelcase
  const { commits_url, title } = pullReq;

  return axios.get(commits_url, config)
    .then(({ data }) => (
      {
        pullRequestTitle: title,
        commits: data.length,
      }
    ))
    .catch((err) => err);
};

module.exports = getCommits;
