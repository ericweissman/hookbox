import React from 'react';

const Card = ({id, title, description, removeIdea}) => {
  const handleClick = () => {
    removeIdea(id);
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => handleClick()}>X</button>
    </div>
  )
}

export default Card;
