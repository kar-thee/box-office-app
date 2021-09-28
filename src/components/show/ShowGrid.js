/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
import React from 'react';
import ShowCard from './ShowCard';

import notFoundImg from '../../Images/not-found.png';
import { FlexGrid } from '../styled';
import { useShows } from '../../misc/CustomHooks';

const ShowGrid = ({ data }) => {
  // console.log(data, 'Data');
  const [state, dispatch] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        console.log(state, 'state');
        let isStarred = false;
        const starClicker = () => {
          if (state && state.length > 0) {
            isStarred = state.includes(show.id);
          }
          if (isStarred) {
            dispatch({ type: 'REMOVE', showId: show.id });
          } else {
            dispatch({ type: 'ADD', showId: show.id });
          }
        };
        return (
          <ShowCard
            key={show.id}
            name={show.name}
            id={show.id}
            summary={show.summary}
            image={show.image ? show.image.medium : notFoundImg} // this is to get if that data have image or not
            starClicker={starClicker}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
  // <h1>ShowGrid</h1>
};

export default ShowGrid;

// resultState.map(element => (
//     <h5 key={element.show.id}>{element.show.name}</h5>
//   ))
