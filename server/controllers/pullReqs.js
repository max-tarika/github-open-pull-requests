require('dotenv').config();
const getCommits = require('../helpers/getCommits.js');
const getPulls = require('../helpers/getPulls.js');

module.exports = {
  get: async (req, res) => {
    const { url } = req.query;
    const repo = url.slice(url.indexOf('.com/') + 5);
    const commitsPromises = [];

    const config = {
      headers: {
        Authorization: `Token ${process.env.TOKEN}`,
      },
    };

    const pulls = await getPulls(repo, config);

    for (let i = 0; i < pulls.length; i += 1) {
      commitsPromises.push(getCommits(pulls[i], config));
    }

    Promise.all(commitsPromises)
      .then((openPRData) => res.status(200).send(openPRData))
      .catch((err) => res.send(err));
  },
};
