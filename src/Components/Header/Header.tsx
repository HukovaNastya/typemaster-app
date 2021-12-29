import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../Theme/Theme';
import {HomeAppBar} from './Header.styles';
import HeaderButton from '../../Components/HeaderButton/HeaderButton';

const Header:React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <HomeAppBar position="relative" >
        <Container maxWidth="lg">
          <Grid container  justifyContent="space-between" alignItems="center">
            <Grid item>
              <img src="/img/logo.svg" alt="logo" />
            </Grid>  
            <Grid item>
              <HeaderButton/>
            </Grid>  
          </Grid>
        </Container>
      </HomeAppBar>
    </ThemeProvider>
  )
}

export default Header;