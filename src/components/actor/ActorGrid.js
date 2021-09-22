import React from 'react';
import ActorCard from './ActorCard';

import notFoundImg from '../../Images/not-found.png';

const ActorGrid = ({ data }) => {
  console.log(data, 'Data');
  return (
    <>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          gender={person.gender}
          country={person.country ? person.country.name : null}
          image={person.image ? person.image.medium : notFoundImg}
          birthday={person.birthday}
          deathday={person.deathday}
        />
      ))}
    </>
  );
};

export default ActorGrid;

// resultState.map(element => (
//     <h5 key={element.person.id}>{element.person.name}</h5>
//   ))
