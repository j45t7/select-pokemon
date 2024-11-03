'use client';

import React from 'react';
import { TextField, InputLabel, TextFieldProps } from '@mui/material';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#9B51E0',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#9747FF',
    },
    '&.Mui-focused': {
      boxShadow: '0 0 0 0.2rem #9747FF40',
    },
  },
});

// Define the props for the LabeledInput component
interface LabeledInputProps extends Omit<TextFieldProps, 'label' | 'type'> {
  label: string; // The label for the input field
}

const Input: React.FC<LabeledInputProps> = ({ label, ...props }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <StyledTextField type='text' {...props} />
    </div>
  );
};

export default Input;
