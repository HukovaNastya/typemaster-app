import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../Theme/Theme';
import {HomeAppBar} from './Header.styles';

const Header:React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <HomeAppBar>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item>
              <img src="/img/logo.svg" alt="logo" />
            </Grid>  
            <Grid item>
              <h1>Hello Word!!</h1>
            </Grid>  
          </Grid>
        </Container>
      </HomeAppBar>
    </ThemeProvider>
  )
}

export default Header;