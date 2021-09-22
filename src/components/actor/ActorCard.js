import React from 'react';
// import { Link } from 'react-router-dom';
// {url ? <Link to={url}>Know more about</Link> : null}

import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({
  name,
  url,
  country,
  image,
  gender,
  birthday,
  deathday,
}) => (
  <StyledActorCard>
    <div className="img-wrapper">
      <img src={image} alt="actor" />
    </div>
    <h2>
      {name} {gender ? `(${gender})` : null}
    </h2>
    <p>{country ? `Comes from ${country}` : 'No country known'}</p>
    {birthday ? <p>Born {birthday}</p> : null}
    <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
    {url ? (
      <a href={url} target="_blank" rel="noreferrer">
        Know more about {name}
      </a>
    ) : null}
  </StyledActorCard>
);

export default ActorCard;
