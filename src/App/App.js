import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [hasErrored, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch('http://localhost:3001/api/v1/ideas')
    .then(res => res.json())
    .then(ideas => setIdeas(ideas))
  })

  return (
    <div className="App">
      <h1>hookbox</h1>
    </div>
  );
}

export default App;
