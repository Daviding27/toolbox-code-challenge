import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { useEffect } from 'react';

import Swal from 'sweetalert2';


export const TableLinesPage = () => {

  const { errorMessage,tableLines } = useSelector((state) => state.files);



  useEffect(() => {
    if (errorMessage !== undefined && errorMessage !== null) {
      Swal.fire('Error', errorMessage, 'error');
    }
  }, [errorMessage]);


  return (
    <Grid container spacing={2}> 
      <Grid item xs={12}> 
      
        <Navbar />
        {tableLines.map((data, count) => (
          <div key={count}>
            {data.name.toString()}
          </div>
        ))}
      </Grid>
    </Grid>
  );
};