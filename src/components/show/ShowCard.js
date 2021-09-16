import React from 'react';

const ShowCard = ({ name, id, summary, image }) => (
  <div>
    <div>
      <img src={image} alt={name} />
    </div>
    <h2>{name}</h2>
    <p>{summary}</p>
    <subtitle>{id}</subtitle>
  </div>
);

export default ShowCard;
