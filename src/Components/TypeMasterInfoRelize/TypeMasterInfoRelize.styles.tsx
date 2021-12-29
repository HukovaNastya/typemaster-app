import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const TypeMasterInfoRelizeStyles = styled(Typography)(
    ({ theme }) => `
    font-family: ${ theme.typography.fontFamily};
    font-weight: ${theme.typography.body1.fontWeight};
    fontSize: ${theme.typography.body1.fontSize};
    color: ${theme.palette.secondary.main};
    width: ${theme.typography.body1.width};
    text-transform: uppercase;
  `,
);