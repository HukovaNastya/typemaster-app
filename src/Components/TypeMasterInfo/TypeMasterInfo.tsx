import React from 'react';
import {TypeMasterInfoWrapper} from './TypeMasterInfo.styles';

import TypeMasterInfoTitle from '../TypeMasterInfoTitle/TypeMasterInfoTitle';

const TypeMasterInfo:React.FC = () => {
  return (
    <TypeMasterInfoWrapper>
      <TypeMasterInfoTitle/>
    </TypeMasterInfoWrapper>
  )
}

export default TypeMasterInfo;