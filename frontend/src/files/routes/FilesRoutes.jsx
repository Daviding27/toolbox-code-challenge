import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TableLinesPage } from '../pages/TablePage';
import { useDispatch, useSelector } from 'react-redux';
import { FetchingDataView } from '../components/FetchingDataView';
import { getAllFiles } from '../../store';

export const FilesRoutes = () => {
  const dispatch = useDispatch();
  const { tableLines } = useSelector((state) => state.files);

  useEffect(() => {
    if (!tableLines) dispatch(getAllFiles());
  }, []);

  if (!tableLines) {
    return <FetchingDataView />;
  }

  return (
    <Routes>
      <Route path="table" element={<TableLinesPage />} />
      <Route path="/*" element={<Navigate to="/table" />} />
    </Routes>
  );
};
