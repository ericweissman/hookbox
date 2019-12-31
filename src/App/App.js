import React, { useState, useEffect } from 'react';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';
import { fetchIdeas } from '../utils/apiCalls'
import './App.css';

const App = () => {
  const [ideas, setIdeas] = useState([]);
  const [hasErrored, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const addIdea = idea => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(idea)
    }
    fetchIdeas('http://localhost:3001/api/v1/ideas', options)
    .then(idea => setIdeas([...ideas, idea]))
  }

  const addIdeaSync = idea => {
    setIdeas([...ideas, idea])
  }
  const deleteIdeaSync = id => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredIdeas);
  }

  const deleteIdea = id => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    };
    setIdeas(filteredIdeas);
    fetchIdeas(`http://localhost:3001/api/v1/ideas/${id}`, options);
  }

  useEffect(() => {
    fetchIdeas('http://localhost:3001/api/v1/ideas')
      .then(ideas => setIdeas(ideas));
  }, [])

  return (
    <main className="App">
      <h1>hookbox</h1>
      <Form addIdea={addIdea}/>
      <Ideas
        removeIdea={deleteIdea}
        ideas={ideas} />
    </main>
  );
}

export default App;
