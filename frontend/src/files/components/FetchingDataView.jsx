import React from 'react';

export const FetchingDataView = ({ message = '' }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#D91438', padding: '2rem' }}
    >
      <div className="text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-light mt-3 primary-color ">Loading {message} ...</p>
      </div>
    </div>
  );
};
