import React, { useState } from 'react';

import MainPageLayout from '../components/MainPageLayout';
import { searchForQuery } from '../misc/config';

const Home = () => {
  const [inputState, setInputState] = useState('');
  const [resultState, setResultState] = useState(null);

  const inputChange = ev => {
    setInputState(ev.target.value);
    console.log(ev.target.value);
  };

  const searchBtn = async () => {
    const queryparams = `search/shows?q=${inputState}`;
    const { data } = await searchForQuery(queryparams);

    setResultState(data);
    console.log(data);
  };

  const enterBtn = ev => {
    if (ev.keyCode === 13) {
      searchBtn();
    }
  };

  const displayResults = () => {
    if (resultState && resultState.length > 0) {
      return (
        <>
          {resultState.map(element => (
            <h5 key={element.show.id}>{element.show.name}</h5>
          ))}
        </>
      );
    }
    if (resultState && resultState.length === 0) {
      return <h4>Sorry, No Results Found</h4>;
    }

    return null;
  };

  return (
    <>
      <MainPageLayout>
        <input
          type="text"
          onChange={inputChange}
          value={inputState}
          onKeyDown={enterBtn}
        />
        <button type="button" onClick={searchBtn}>
          Search
        </button>
        {displayResults()}
      </MainPageLayout>
    </>
  );
};

export default Home;
