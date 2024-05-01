import React from 'react';

/*export const FetchingDataView = ({ message = '' }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <Grid container direction="row" justifyContent="center">
          <CircularProgress color="warning" />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          Loading {message} ...
        </Grid>
      </Grid>
    </>
  );
};*/

export const FetchingDataView = ({ message = '' }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#D91438', padding: '2rem' }}>
      <div className="text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-light mt-3 primary-color ">Loading {message} ...</p>
      </div>
    </div>
  );
};
