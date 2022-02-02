const express = require('express');
const request = require('supertest');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const router = require('../routes.js');
const {
  testOnePullResponse,
  marriotCommitsResponse,
  ritzCommitsResponse,
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
    const expectedResponse = [
      { pullRequestTitle: 'marriot', commits: 3 },
      { pullRequestTitle: 'ritz', commits: 2 },
    ];

    mock.onGet('https://api.github.com/repos/testOne/testOneRepo/pulls').reply(200, testOnePullResponse);
    mock.onGet('marriot').reply(200, marriotCommitsResponse);
    mock.onGet('ritz').reply(200, ritzCommitsResponse);

    const actualResponse = await request(app)
      .get('/pullReqs')
      .query({ url: 'https://github.com/testOne/testOneRepo' });

    expect(actualResponse.statusCode).toBe(200);
    expect(actualResponse.type).toBe('application/json');
    expect(Array.isArray(actualResponse.body)).toBe(true);
    expect(actualResponse.body).toEqual(expectedResponse);
  });

  test('Should respond to GET requests with an invalid URL with a 400 status code', async () => {
    const res = await request(app)
      .get('/pullReqs')
      .query({ url: 'invalid url' });

    expect(res.statusCode).toBe(400);
    expect(res.text).toEqual('Invalid URL');
  });
});
