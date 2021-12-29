import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

export const HomeAppBar  = styled(AppBar)(
  ({ theme }) => `
    background-color: ${ theme.palette.primary.main};
    box-shadow: none;
    padding-top: 40px;
`,
);