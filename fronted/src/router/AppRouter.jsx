import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FilesRoutes } from '../shared';

export const AppRouter = () => {

  return (

    <Routes>
         <Route path="/*" element={<FilesRoutes />} />
    </Routes>
  );
};
