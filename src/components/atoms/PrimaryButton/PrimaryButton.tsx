'use client';

import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const StyledPrimaryButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '10px 24px',
  border: '1px solid',
  lineHeight: 1.5,
  borderRadius: '2px',
  backgroundColor: '#9747FF',
  borderColor: '#9747FF',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#7135BF',
    borderColor: '#7135BF',
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #9747FF40', // Focus ring
  },
});

const PrimaryButton: React.FC<React.ComponentProps<typeof Button>> = (
  props
) => {
  return <StyledPrimaryButton variant='contained' {...props} />;
};

export default PrimaryButton;
