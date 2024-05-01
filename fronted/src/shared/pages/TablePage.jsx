import { useDispatch, useSelector } from 'react-redux';

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
    <div>
      <Navbar />
      <div>
        {tableLines && tableLines.map((data, count) => (
          <div key={count}> {/* Assuming data has a unique id */}
            {data.name.toString()}
          </div>
        ))}
      </div>
    </div>
  );
};