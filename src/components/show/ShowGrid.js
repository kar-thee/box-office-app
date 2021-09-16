/* eslint-disable no-unused-vars */
import React from 'react';
import ShowCard from './ShowCard';

const ShowGrid = ({ data }) => {
  console.log(data, 'Data');
  return (
    <>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          name={show.name}
          id={show.id}
          summary={show.summary}
          image={show.image.medium || null}
        />
      ))}
    </>
  );
  // <h1>ShowGrid</h1>
};

export default ShowGrid;

// resultState.map(element => (
//     <h5 key={element.show.id}>{element.show.name}</h5>
//   ))
