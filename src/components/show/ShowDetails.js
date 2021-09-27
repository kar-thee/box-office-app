import React from 'react';

import { DetailsWrapper } from './ShowDetails.styled';

const ShowDetails = ({ status, premiered, network }) => (
  <DetailsWrapper>
    <p>
      Status: <span>{status}</span>
    </p>
    <p>
      Premiered {premiered} {network ? `on ${network.name}` : null}
    </p>
  </DetailsWrapper>
);

export default ShowDetails;
