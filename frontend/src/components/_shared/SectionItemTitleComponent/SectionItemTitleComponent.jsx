import { Box } from '@mui/material';
import { memo } from 'react';
import styled from 'styled-components';

function SectionItemTitleComponent({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default memo(SectionItemTitleComponent)

const MainContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    borderBottom: `1px solid ${theme.palette.border.secondary}`,
    paddingBottom: theme.paddingBottom,
    fontWeight: 700,
    fontFamily: theme.typography.fontFamilyNano,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }));