import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const TypeMasterInfoTitleWrapper = styled(Box)({
    paddingBottom: '20px'
});

export const TypeMasterInfoTitleStyles  = styled(Typography)(
  ({ theme }) => `
    font-family: ${ theme.typography.fontFamily};
    font-weight: ${theme.typography.h1.fontWeight};
    fontSize: ${theme.typography.h1.fontSize};
    color: ${theme.typography.h1.color};
    maxWidth:  ${theme.typography.h1.width};
  `,
  );
  
  // @media (max-width: ${theme.breakpoints.values.sm}) {
  //   font-weight: '400;
  //   fontSize: '12px';
  // }