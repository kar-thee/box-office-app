/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React from 'react';
import ShowCard from './ShowCard';

import notFoundImg from '../../Images/not-found.png';
import { FlexGrid } from '../styled';

const ShowGrid = ({ data }) => {
  console.log(data, 'Data');

  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          name={show.name}
          id={show.id}
          summary={show.summary}
          image={show.image ? show.image.medium : notFoundImg} // this is to get if that data have image or not
        />
      ))}
    </FlexGrid>
  );
  // <h1>ShowGrid</h1>
};

export default ShowGrid;

// resultState.map(element => (
//     <h5 key={element.show.id}>{element.show.name}</h5>
//   ))
