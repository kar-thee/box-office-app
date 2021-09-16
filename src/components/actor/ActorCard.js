import React from 'react';

const ActorCard = ({ name, id, country, image, gender }) => (
  <div>
    <div>
      <img src={image} alt={name} />
    </div>
    <h2>
      {name} - {gender}
    </h2>
    <p>{country ? `Belongs to ${country}` : `Country NotFound`}</p>
    <h6>{id}</h6>
  </div>
);

export default ActorCard;
