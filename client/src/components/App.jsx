import React, { useState } from 'react';

export default function App() {
  const [url, setUrl] = useState('');

  const handleRepoUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submit Clicked');
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
    </div>
  );
}
