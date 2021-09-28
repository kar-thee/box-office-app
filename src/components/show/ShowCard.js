import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '../styled';

import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ name, id, summary, image }) => {
  const summaryTxt = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No Description'; // regular expression to remove html tag from summary
  console.log(summaryTxt);

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{summaryTxt}</p>
      <div className="btns">
        <Link to={`/shows/${id}`}>Read more</Link>
        <button type="button">
          <Star />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
