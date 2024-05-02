import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFiles } from '../../store';
import { findDataByFilename } from '../../store/files/thunks';

export const SearchFileComponent = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery != '') dispatch(findDataByFilename(searchQuery));
  };

  const handleReloadAllData = () => {
    dispatch(getAllFiles());
  };

  return (
    <div className="container mt-4" style={{ padding: '40px 0px 0px' }}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type the file name"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="button" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-secondary" type="button" onClick={handleReloadAllData}>
          Reload all data
        </button>
      </div>
    </div>
  );
};
