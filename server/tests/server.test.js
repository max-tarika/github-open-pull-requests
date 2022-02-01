const express = require('express');
const request = require('supertest');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const router = require('../routes.js');
const {
  testOnePullResponse,
  marriotCommitsResponse,
  ritzCommitsResponse,
  testTwoPullResponse,
  hiltonCommitsResponse,
} = require('./mockData/mockData.js');

const app = express();
app.use(router);

describe('Pull Request API Function', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  test('Should respond to GET requests for /pullReqs with pull request & commit data', async () => {
    const expectedResponse = JSON.stringify([
      { pullRequestTitle: 'marriot', commits: 3 },
      { pullRequestTitle: 'ritz', commits: 2 },
    ]);

    mock.onGet('https://api.github.com/repos/testOne/testOneRepo/pulls').reply(200, testOnePullResponse);
    mock.onGet('marriot').reply(200, marriotCommitsResponse);
    mock.onGet('ritz').reply(200, ritzCommitsResponse);

    const actualResponse = await request(app)
      .get('/pullReqs')
      .query({ url: 'https://github.com/testOne/testOneRepo' });

    expect(actualResponse.statusCode).toBe(200);
    expect(actualResponse.text).toEqual(expectedResponse);
  });
});
