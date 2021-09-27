/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import IMG_PLACEHOLDER from '../../Images/not-found.png';

import { Star } from '../styled';

import { MainDataWrapper, Headline, TagList } from './ShowMainData.styled';

const ShowMainData = ({ name, rating, summary, tags, image }) => (
  <MainDataWrapper>
    <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
    <div className="text-side">
      <Headline>
        <h1>{name}</h1>
        <div>
          <Star />
          <span>{rating.average || 'N/A'}</span>
        </div>
      </Headline>
      <div className="summary" dangerouslySetInnerHTML={{ __html: summary }} />{' '}
      {/* for running summary as a markup itself since it has <p> tag in json */}
      <div>
        Tags:{' '}
        <TagList>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </TagList>
      </div>
    </div>
  </MainDataWrapper>
);

export default ShowMainData;
