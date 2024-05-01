/*import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { redTheme } from './redTheme';

export const AppTheme = ({ children }) => {

  return (
    <ThemeProvider theme={redTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
*/

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './styles.css';

export const AppTheme = ({ children }) => {
  return (
    <div className="primary-color">
      {/* Añade clases de Bootstrap según sea necesario */}
      {children}
    </div>
  );
};
