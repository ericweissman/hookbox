import React from 'react';
import Card from '../Card/Card';


const Ideas = ({ideas}) => {
  const ideaCards = ideas.map(idea => <Card key={idea.id} {...idea} />)
  return(
    <section>
      {ideaCards}
    </section>
  )
}

export default Ideas;
