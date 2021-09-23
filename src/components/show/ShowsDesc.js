import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { searchForQuery } from '../../misc/config';

const ShowsDesc = () => {
  const { id } = useParams();
  console.log('id is', id);
  const [showDesc, setShowDesc] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(null);
  const showDescUrl = `shows/${id}?embed[]=cast&embed[]=seasons`;

  useEffect(() => {
    const apiGet = async () => {
      try {
        const res = await searchForQuery(showDescUrl);
        setShowDesc(res.data);
        setisLoading(false);
        setisError(false);
      } catch (err) {
        setisError(err.message);
        setisLoading(false);
      }
    };
    apiGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // ********if we use multiple asynchrnous process then we should
  // use a variable in unmount(return)
  // so, setstate happens only when that variable is true...
  // i didn't faced this issue...but with fetch and .then it may!******

  //   console.log(showDesc, 'showDesc');
  //   console.log(isError, 'isError');

  if (isLoading) {
    return <p>Loading ......</p>;
  }
  if (isError) {
    return (
      <p>
        Sorry ! Error in ID
        <br /> Message : {isError}
      </p> // error message
    );
  }

  return (
    <>
      {showDesc.name}
      {id}
      <p>Show id</p>
      {/* {showDesc} */}
      <p>desc</p>
    </>
  );
};

export default ShowsDesc;
