import React from 'react';
import {KeyboardSectionWrapper, KeyboardSectionImgWrapper} from './KeyboardSection.styles';
import Grid from '@mui/material/Grid';
import KeyboardSectionTitle from '../KeyboardSectionTitle/KeyboardSectionTitle';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../Theme/Theme';
import KeyboardSectionText from '../KeyboardSectiontText/KeyboardSectionText';

const KeyboardSection:React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <KeyboardSectionWrapper maxWidth="lg">
        <Grid container justifyContent="start" alignItems="center">
          <KeyboardSectionImgWrapper item>
            <img src="/img/keyboardSectionImg.png" alt="keyboardSectionImg"/>
          </KeyboardSectionImgWrapper>
          <KeyboardSectionImgWrapper item>
            <img src="/img/keyboardSectionImgLight.png" alt="keyboardSectionImgLight"/>
          </KeyboardSectionImgWrapper>
          <Grid item >
            <KeyboardSectionTitle/>
            <KeyboardSectionText/>
          </Grid>
        </Grid>
      </KeyboardSectionWrapper>
    </ThemeProvider>
  )
}

export default KeyboardSection;