import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeSearch, resetSearch } from 'store/reducers/search';
import { useLocation } from 'react-router-dom';

import S from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(resetSearch());
  }, [dispatch, location.pathname]);

  return (
    <div className={S.search}>
      <input
        className={S.input}
        placeholder="What are you looking for ?"
        value={search}
        onChange={(event) => dispatch(changeSearch(event.target.value))}
      />
    </div>
  );
};

export default Search;
