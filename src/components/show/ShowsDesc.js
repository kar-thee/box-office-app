import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import { searchForQuery } from '../../misc/config';

const ShowsDesc = () => {
  const { id } = useParams();
  console.log('id is', id);

  const initialState = {
    showDesc: null,
    isLoading: null,
    isError: null,
  };
  const reducerfunction = (prevState, dispatchActions) => {
    // dispatchActions have object of type and payLoad
    switch (dispatchActions.type) {
      case 'data-success': {
        return {
          showDesc: dispatchActions.payLoad,
          isError: null,
          isLoading: null,
        };
      }
      case 'data-failed': {
        return { ...prevState, isError: dispatchActions.payLoad };
      }
      // both ways of using spread operator(...)and not using are ok to use
      default:
        return null;
    }
  };
  const [{ showDesc, isError, isLoading }, dispatcher] = useReducer(
    reducerfunction,
    initialState
  );
  // const [showDesc, setShowDesc] = useState(null);
  // const [isLoading, setisLoading] = useState(true);
  // const [isError, setisError] = useState(null);
  const showDescUrl = `shows/${id}?embed[]=cast&embed[]=seasons`;

  useEffect(() => {
    const apiGet = async () => {
      try {
        const res = await searchForQuery(showDescUrl);
        dispatcher({ type: 'data-success', payLoad: res.data });
        // setShowDesc(res.data);
        // setisLoading(false);
        // setisError(false);
      } catch (err) {
        dispatcher({ type: 'data-failed', payLoad: err.message });
        // setisError(err.message);
        // setisLoading(false);
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
  console.log(showDesc, 'state');

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
      {/* {showDesc.map(el => (
        <p>{el}</p>
      ))} */}
      {/* <p>{showDesc.id}</p> */}
      <p>{id}</p>
      <p>Show id</p>
      <p>desc</p>
      {showDesc && showDesc.name}{' '}
      {/* this conditional rendering is needed becaz,
      while state renders from null to data, it may not reflect here,
       so we want name only if data is loaded from async func */}
    </>
  );
};

export default ShowsDesc;
