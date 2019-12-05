import React from 'react';
import Card from '../Card/Card';


const Ideas = ({ideas, removeIdea}) => {
  const ideaCards = ideas.map(idea => <Card key={idea.id} removeIdea={removeIdea} {...idea} />)
  return(
    <section>
      {ideaCards}
    </section>
  )
}

export default Ideas;
