/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import ShowMainData from './ShowMainData';
import { searchForQuery } from '../../misc/config';
import ShowDetails from './ShowDetails';
import ShowSeasons from './ShowSeasons';
import ShowCast from './ShowCast';

const ShowsDesc = () => {
  const { id } = useParams();
  console.log('id is', id);

  const initialState = {
    showDesc: null,
    isLoading: true,
    isError: null,
  };
  const reducerfunction = (prevState, dispatchActions) => {
    // dispatchActions have object of type and payLoad
    switch (dispatchActions.type) {
      case 'data-success': {
        return {
          showDesc: dispatchActions.payLoad,
          isError: null,
          isLoading: false,
        };
      }
      case 'data-failed': {
        return {
          ...prevState,
          isLoading: false,
          isError: dispatchActions.payLoad,
        };
      }
      // both ways of using spread operator(...)and not using are ok to use
      default:
        return prevState;
    }
  };
  const [{ showDesc, isError, isLoading }, dispatcher] = useReducer(
    reducerfunction,
    initialState
  );
  const showDescUrl = `shows/${id}?embed[]=cast&embed[]=seasons`;

  useEffect(() => {
    const apiGet = async () => {
      try {
        const res = await searchForQuery(showDescUrl);
        dispatcher({ type: 'data-success', payLoad: res.data });
      } catch (err) {
        dispatcher({ type: 'data-failed', payLoad: err.message });
      }
    };
    apiGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // ********if we use multiple asynchrnous process then we should
  // use a variable in unmount(return)
  // so, setstate happens only when that variable is true...
  // i didn't faced this issue...but with fetch and .then it may!******

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
      <h2>Main Data</h2>
      <ShowMainData
        name={showDesc.name}
        image={showDesc.image}
        summary={showDesc.summary}
        tags={showDesc.genres}
        rating={showDesc.rating}
      />
      <h2>Details</h2>
      <ShowDetails
        status={showDesc.status}
        premiered={showDesc.premiered}
        network={showDesc.network}
      />
      <h2>Seasons</h2>
      <ShowSeasons seasons={showDesc._embedded.seasons} />
      <h2>Cast</h2>
      <ShowCast cast={showDesc._embedded.cast} />
    </>
  );
};

export default ShowsDesc;
