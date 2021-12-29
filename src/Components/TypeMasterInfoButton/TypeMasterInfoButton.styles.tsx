import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const TypeMasterInfoButtonWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      padding: '0px'
    },
    [theme.breakpoints.up('sm')]: {
      width: '175px',
      padding: '0px'
    },
  }));
  
  export const TypeMasterInfoButtonStyles  = styled(Button )(
    ({ theme }) => `
      background-color: ${theme.palette.info.main};
      font-family: ${ theme.typography.fontFamily};
      font-weight: ${theme.typography.button.fontWeight};
      font-size: ${theme.typography.button.fontSize};
      color: ${theme.palette.primary.main};
      &:hover {
      background-color: ${theme.palette.info.light}; 
      color: ${theme.palette.primary.main};
      }
    `,
  );
  