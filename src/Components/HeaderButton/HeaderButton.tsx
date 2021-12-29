import React from 'react';
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