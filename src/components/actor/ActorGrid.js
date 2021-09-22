import React from 'react';
import ActorCard from './ActorCard';

import notFoundImg from '../../Images/not-found.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => {
  console.log(data, 'Data');
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          url={person.url ? person.url : null}
          name={person.name}
          gender={person.gender}
          country={person.country ? person.country.name : null}
          image={person.image ? person.image.medium : notFoundImg}
          birthday={person.birthday}
          deathday={person.deathday}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;

// resultState.map(element => (
//     <h5 key={element.person.id}>{element.person.name}</h5>
//   ))
