# GitHub Open Pull Requests API

## Overview

This API is designed to return the open pull requests for a given repo and the amount of commits for each pull request.

## Code Example

Example API response using Postman:


Example API response using the application interface:

## Installation
1. Clone the repo:
   ```
   $ git clone https://github.com/max-tarika/github-open-pull-requests.git
   ```
2. Optional: Create a GitHub Personal Access Token, to allow for up to 5,000 requests per hour to the GitHub REST API. Note: Without a personal access token, the rate limit is 60 requests per hour.
   * More information about GitHub's rate limiting can be found here: https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
   * More information about creating a GitHub personal access token can be found here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
3. Optional: Create a `.env` file in the project root directory, and specify a port to listen on and your GitHub personal access token (if you have one). Example:
   ```
   PORT=3000
   TOKEN="personal access token"
   ```
4. Install dependencies:
   ```
   $ npm install
   ```
5. Setup user interface:
   ```
   $ npm run build
   ```
6. Start the server:
   ```
   $ npm run start
   ```

## Tests
To run the test suite, run `npm test` on the command line.
