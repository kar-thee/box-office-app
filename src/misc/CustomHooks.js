import { useReducer, useEffect, useState } from 'react';

const PersistanceHook = (reducerFunc, initialState, key) => {
  const [state, dispatch] = useReducer(
    reducerFunc,
    initialState,
    initialStateValue => {
      const localData = localStorage.getItem(key);

      return localData ? JSON.parse(localData) : initialStateValue;
    }
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  // to synchronize whenever state changes put that value to localStorage

  return [state, dispatch];
};

const showReducerFunc = (prevstate, dispatchActions) => {
  switch (dispatchActions.type) {
    case 'ADD': {
      return [...prevstate, dispatchActions.showId];
    }
    case 'REMOVE': {
      return prevstate.filter(showId => showId !== dispatchActions.showId);
    }
    default:
      return prevstate;
  }
};
export const useShows = (key = 'shows') =>
  PersistanceHook(showReducerFunc, [], key);
// this returns state,dispatch from persistancehook used for preventing repeated calling

export const useSearchState = () => {
  const [state, setState] = useState(() => {
    const isPresent = JSON.parse(sessionStorage.getItem('input'));
    return isPresent || '';
  });
  useEffect(() => {
    sessionStorage.setItem('input', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
