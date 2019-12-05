import React, { useState, useEffect } from 'react';
import Ideas from '../Ideas/Ideas';
import './App.css';

const App = () => {
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

  const fetchIdeas = () => {
    fetch('http://localhost:3001/api/v1/ideas')
    .then(res => res.json())
    .then(ideas => setIdeas(ideas))
  }

  useEffect(() => {
    fetchIdeas();
  }, [])

  return (
    <main className="App">
      <h1>hookbox</h1>
      <Ideas
        removeIdea={deleteIdea}
        ideas={ideas} />
    </main>
  );
}

export default App;
