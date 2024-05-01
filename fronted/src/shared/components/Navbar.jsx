import static_URLs from '../../config/staticUrls';



export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={static_URLs.logo} alt="Expo Canada" height="40" />
        </a>
      </div>
    </nav>
  );
};


/*import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import static_URLs from '../../config/staticUrls';

export const Navbar = () => {
  

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between">
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button
              //href={url_contactPage}
              //onClick={goToHome}
            >
              <img src={static_URLs.logo} alt="Expo Canada" height="40" />
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
*/