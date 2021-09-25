import React from 'react';

const ShowDetails = ({ status, premiered, network }) => (
  <div>
    <p>
      Status: <span>{status}</span>
    </p>
    <p>
      Premiered {premiered} {network ? `on ${network.name}` : null}
    </p>
  </div>
);

export default ShowDetails;
