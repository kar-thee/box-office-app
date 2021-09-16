import React, { useState } from 'react';
import axios from 'axios';

import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [inputState, setInputState] = useState('');

  const inputChange = ev => {
    setInputState(ev.target.value);
    console.log(ev.target.value);
  };
  const searchBtn = async () => {
    const url = `https://api.tvmaze.com/search/shows?q=${inputState}`;
    const { data } = await axios.get(url);
    console.log(data);
  };
  const enterBtn = ev => {
    if (ev.keyCode === 13) {
      searchBtn();
    }
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
      </MainPageLayout>
    </>
  );
};

export default Home;
