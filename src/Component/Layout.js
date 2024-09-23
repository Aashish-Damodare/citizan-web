
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
        <AppBar position="static" sx={{
          borderRadius:40
        }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Citizen 
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <main>{children}</main>
        </Container>
    </div>
  );
};

export default Layout;
