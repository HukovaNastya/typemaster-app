import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

export const HomeAppBar  = styled(AppBar)(
  ({ theme }) => `
    background-color: ${ theme.palette.primary.main};
    box-shadow: none;
    padding-top: 40px;
`,
);