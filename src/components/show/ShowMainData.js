/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import IMG_PLACEHOLDER from '../../Images/not-found.png';

import { Star } from '../styled';

const ShowMainData = ({ name, rating, summary, tags, image }) => (
  <div>
    <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
    <div>
      <div>
        <h1>{name}</h1>
        <div>
          <Star />
          <span>{rating.average || 'N/A'}</span>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />{' '}
      {/* for running summary as a markup itself since it has <p> tag */}
      <div>
        Tags:{' '}
        <div>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ShowMainData;
