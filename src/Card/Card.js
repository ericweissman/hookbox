import React from 'react';

const Card = ({id, title, description}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card;
