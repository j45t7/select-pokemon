'use client';

import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const StyledSoftButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '10px 24px',
  lineHeight: 1.5,
  borderRadius: '2px',
  backgroundColor: '#EEEEEE',
  borderColor: '#EEEEEE',
  color: '#2A2A2A',
  '&:hover': {
    backgroundColor: '#E4E4E4',
    borderColor: '#E4E4E4',
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #9747FF40',
  },
});

const SoftButton: React.FC<React.ComponentProps<typeof Button>> = (props) => {
  return <StyledSoftButton disableRipple variant='contained' {...props} />;
};

export default SoftButton;
