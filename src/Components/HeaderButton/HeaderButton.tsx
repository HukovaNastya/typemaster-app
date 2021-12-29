import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../Theme/Theme';
import {ButtonWrapper, HeaderButtonStyles} from  './HeaderButton.styles';



const HeaderButton:React.FC = () => {
  return (
      <ButtonWrapper>
         <HeaderButtonStyles>
           Pre-order now
         </HeaderButtonStyles>
      </ButtonWrapper>
  )
}

export default HeaderButton;