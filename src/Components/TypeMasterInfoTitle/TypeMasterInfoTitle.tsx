import React from 'react';
import {TypeMasterInfoTitleWrapper, TypeMasterInfoTitleStyles} from './TypeMasterInfoTitle.styles';

const TypeMasterInfoTitle:React.FC = () => {
  return (
    <TypeMasterInfoTitleWrapper>
      <TypeMasterInfoTitleStyles variant='h1'>
        Typemaster Keyboard 
      </TypeMasterInfoTitleStyles>
    </TypeMasterInfoTitleWrapper>
  )
}

export default TypeMasterInfoTitle;