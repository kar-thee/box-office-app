import React from 'react';
// import { Link } from 'react-router-dom';
// {url ? <Link to={url}>Know more about</Link> : null}

const ActorCard = ({
  name,
  url,
  country,
  image,
  gender,
  birthday,
  deathday,
}) => (
  <div>
    <div>
      <img src={image} alt="actor" />
    </div>
    <h1>
      {name} {gender ? `(${gender})` : null}
    </h1>
    <p>{country ? `Comes from ${country}` : 'No country known'}</p>
    {birthday ? <p>Born {birthday}</p> : null}
    <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
  </div>
);

export default ActorCard;
