import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const KeyboardSectionTitleWrapper = styled(Box)({
  marginLeft: '130px',
});

export const KeyboardSectionTitleStyles = styled(Typography)(
    ({ theme }) => `
      font-family: ${ theme.typography.fontFamily};
      font-weight: ${theme.typography.h2.fontWeight};
      font-size: ${theme.typography.h2.fontSize};
      color: ${theme.typography.h2.color};
      width:  ${theme.typography.h2.width};
      text-transform: uppercase;
    `,
);
    