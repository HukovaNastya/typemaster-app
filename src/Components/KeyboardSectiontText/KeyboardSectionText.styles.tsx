import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const KeyboardTextWrapper = styled(Box)({
  paddingTop: "30px",
  marginLeft: '130px'
});

export const KeyboardTextStyles = styled(Typography)(
  ({ theme }) => `
    font-family: ${ theme.typography.fontFamily};
    font-weight: ${theme.typography.body2.fontWeight};
    fontSize: ${theme.typography.body2.fontSize};
    color: ${theme.palette.secondary.main};
    width: ${theme.typography.body2.width};
  `
);