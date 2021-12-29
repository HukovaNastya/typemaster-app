import React from 'react';
import {TypeMasterInfoWrapper, TypeMasterInfoButtonWrapper} from './TypeMasterInfo.styles';
import TypeMasterInfoTitle from '../TypeMasterInfoTitle/TypeMasterInfoTitle';
import TypeMasterInfoText from '../TypeMasterInfoText/TypeMasterInfoText';
import TypeMasterInfoButton from '../TypeMasterInfoButton/TypeMasterInfoButton';
import TypeMasterInfoRelize from '../TypeMasterInfoRelize/TypeMasterInfoRelize';
import Grid from '@mui/material/Grid';

const TypeMasterInfo:React.FC = () => {
  return (
    <TypeMasterInfoWrapper>
      <TypeMasterInfoTitle/>
      <TypeMasterInfoText/>
      <TypeMasterInfoButtonWrapper>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item >
          <TypeMasterInfoButton/>
        </Grid>
        <Grid item >
          <TypeMasterInfoRelize/>
        </Grid>
      </Grid>
      </TypeMasterInfoButtonWrapper>
    </TypeMasterInfoWrapper>
  )
}

export default TypeMasterInfo;