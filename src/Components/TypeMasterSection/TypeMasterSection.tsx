import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../Theme/Theme';
import TypeMasterInfo from '../TypeMasterInfo/TypeMasterInfo';
import { TypeMasterImg} from './TypeMasterSection.styles';

const TypeMasterSection:React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item>
              <TypeMasterInfo/>
            </Grid>  
            <Grid item>
              <TypeMasterImg>
                <img src="/img/typeMasterImg.png" alt="typeMasterImg"/>
              </ TypeMasterImg>
            </Grid>  
          </Grid>
        </Container>
    </ThemeProvider>
  )
}

export default TypeMasterSection;