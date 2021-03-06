import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [url, setUrl] = useState('');
  const [pullReqData, setPullReqData] = useState([]);

  const handleRepoUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get('/pullReqs', { params: { url } })
      .then(({ data }) => {
        setPullReqData(data);
      })
      .catch((err) => {
        if (err.response.data === 'Invalid URL') {
          alert('Please submit a valid GitHub repo URL');
        } else {
          console.error(err);
        }
      });
  };

  return (
    <div>
      <h1>GitHub Repo Open Pull Requests</h1>
      <form id="repo-url-form" onSubmit={handleSubmit}>
        <label htmlFor="repo-url-input">
          Enter Repo URL Here:
          <input type="text" id="repo-url-input" onChange={handleRepoUrlChange} value={url} />
        </label>
        <button type="submit" id="repo-url-submit">Submit</button>
      </form>
      <div id="pull-request-feed">
        <h3>Results: </h3>
        {pullReqData.map((pr) => (
          <div className="pr-wrapper">
            <div className="pr-title">
              <strong>Pull Request Title:</strong>
              {' '}
              {pr.pullRequestTitle}
            </div>
            <div className="pr-commits">
              <strong>Number of Commits:</strong>
              {' '}
              {pr.commits}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
