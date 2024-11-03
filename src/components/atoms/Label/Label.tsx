'use client';

import React from 'react';
import Chip from '@mui/material/Chip';
import styled from '@emotion/styled';

const CustomChip = styled(Chip)({
  backgroundColor: '#9747ff40',
  color: ' #000000',
});

interface LabelProps {
  label: string;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
  return <CustomChip label={label} />;
};
