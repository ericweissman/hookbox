import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [hasErrored, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const addIdea = idea => {
    setIdeas([...ideas, idea])
  }

  const deleteIdea = id => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredIdeas);
  }

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
