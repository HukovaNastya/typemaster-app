import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const ButtonWrapper  = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '150px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '175px',
  },
}));

export const HeaderButtonStyles  = styled(Button )(
  ({ theme }) => `
    background-color: ${ theme.palette.secondary.light};
    box-shadow: none;
    font-family: ${ theme.typography.fontFamily};
    font-weight: ${theme.typography.button.fontWeight};
    fontSize: ${theme.typography.button.fontSize};
    color: ${theme.palette.secondary.dark};
    &:hover {
    background-color: ${ theme.palette.secondary.dark}; 
    color: ${theme.palette.primary.main};
  `,
);

