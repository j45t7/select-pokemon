'use client';

import React, { forwardRef } from 'react';
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

interface LabeledInputProps extends Omit<TextFieldProps, 'label' | 'type'> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, LabeledInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <>
        <InputLabel>{label}</InputLabel>
        <StyledTextField type='text' inputRef={ref} {...props} />
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
