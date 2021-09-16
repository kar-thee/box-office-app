import React, { useState } from 'react';

import MainPageLayout from '../components/MainPageLayout';
import { searchForQuery } from '../misc/config';

const Home = () => {
  const [inputState, setInputState] = useState('');
  const [resultState, setResultState] = useState(null);
  const [searchCategory, setSearchCategory] = useState('shows');

  const isShows = searchCategory === 'shows';
  console.log(isShows);
  const inputChange = ev => {
    setInputState(ev.target.value);
    console.log(ev.target.value);
  };

  const searchBtn = async () => {
    const queryparams = `search/${searchCategory}?q=${inputState}`;
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
          {resultState[0].show
            ? resultState.map(element => (
                <h5 key={element.show.id}>{element.show.name}</h5>
              ))
            : resultState.map(element => (
                <h5 key={element.person.id}>{element.person.name}</h5>
              ))}
        </>
      );
    }
    if (resultState && resultState.length === 0) {
      return <h4>Sorry, No Results Found</h4>;
    }

    return null;
  };

  const changeCategory = ev => {
    console.log(ev.target.value, 'Result state ->', resultState);
    setSearchCategory(ev.target.value);
  };

  console.log('SearchCategory', searchCategory);

  return (
    <>
      <MainPageLayout>
        <input
          type="text"
          onChange={inputChange}
          value={inputState}
          onKeyDown={enterBtn}
          placeholder="Search for something.."
        />
        <button type="button" onClick={searchBtn}>
          Search
        </button>
        <div>
          <label htmlFor="shows">
            <input
              type="radio"
              id="shows"
              value="shows"
              //   name="category"
              checked={isShows}
              onChange={changeCategory}
            />
            Shows
          </label>
          <label htmlFor="people">
            <input
              type="radio"
              id="people"
              value="people"
              //   name="category"
              checked={!isShows}
              onChange={changeCategory}
            />
            Actors
          </label>
        </div>

        {displayResults()}
      </MainPageLayout>
    </>
  );
};

export default Home;
