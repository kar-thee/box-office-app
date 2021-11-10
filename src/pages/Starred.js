/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/CustomHooks';
import { searchForQuery } from '../misc/config';
// import ShowCard from '../components/show/ShowCard';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {
  const [state] = useShows();
  console.log(state, 'state from starred');
  const [starred, setStarred] = useState();

  useEffect(() => {
    const promiseArray = state.map(id => searchForQuery(`shows/${id}`));
    Promise.all(promiseArray)
      .then(result => setStarred(result.map(star => ({ show: star.data }))))
      .catch(e => console.log(e.message, 'error'));
    // we store every data within a object with key value of "show"- so we can reuse showgrid component again to display data
    // instead of sending request onebyone, we send in a single instance and resolve all promise(Promise.all expects and returns a array)
  }, [state]);

  return (
    <>
      <MainPageLayout>
        <h3 style={{ textAlign: 'center' }}>starred Movies</h3>
        {starred && <ShowGrid data={starred} />}
      </MainPageLayout>
    </>
  );
};

export default Starred;
