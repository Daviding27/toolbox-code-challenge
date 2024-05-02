import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Navbar } from '../components/Navbar';
import { TableComponent } from '../components/TableComponent';
import { SearchFileComponent } from '../components/SearchFileComponent';
import { FetchingDataView } from '../components/FetchingDataView';

export const TableLinesPage = () => {
  const { isFetching, errorMessage } = useSelector((state) => state.files);

  useEffect(() => {
    if (errorMessage && errorMessage != '') {
      Swal.fire('Error', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div style={{ display: 'block', width: '100%', padding: '0px' }}>
      <Navbar />
      <SearchFileComponent />
      {isFetching ? <FetchingDataView /> : <TableComponent />}
    </div>
  );
};
