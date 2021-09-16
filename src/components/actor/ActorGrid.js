import React from 'react';
import ActorCard from './ActorCard';

const ActorGrid = ({ data }) => {
  console.log(data, 'Data');
  return (
    <>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          id={person.id}
          gender={person.gender || null}
          country={person.country ? person.country.name : null}
          image={person.image ? person.image.medium : null}
        />
      ))}
    </>
  );
};

export default ActorGrid;

// resultState.map(element => (
//     <h5 key={element.person.id}>{element.person.name}</h5>
//   ))
