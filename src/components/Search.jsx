import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setQuery } from '../store/action';

const Search = ({ query, onSearch }) => {
  const [input, setInput] = useState(query || '');
  const dispatch = useDispatch();

  const handleChange = (search) => {
    setInput(search.target.value);
  };

  const handleSearch = (search) => {
    search.preventDefault();
    dispatch(setQuery(input));
    onSearch(input);
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <div className="input-group">
        <input type="text" className="form-control" value={input} onChange={handleChange} placeholder="Search for movies..."/>
        <button type="submit" className="btn btn-outline-info ms-1">
          Search
        </button>
      </div>
    </form>
  );
};

Search.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
