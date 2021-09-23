import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { searchForQuery } from '../../misc/config';

const ShowsDesc = () => {
  const { id } = useParams();
  console.log('id is', id);
  const [showDesc, setShowDesc] = useState(null);

  useEffect(() => {
    const showDescUrl = `shows/${id}?embed[]=cast&embed[]=seasons`;
    searchForQuery(showDescUrl).then(response => {
      setShowDesc(response.data);
    });
  }, [id]);

  console.log(showDesc, 'showDesc');
  return (
    <>
      {id}
      <p>Show id</p>
      {/* {showDesc} */}
      <p>desc</p>
    </>
  );
};

export default ShowsDesc;
