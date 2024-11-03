'use client';

import React from 'react';
import { Autocomplete } from '@mui/material';
import styled from '@emotion/styled';

import Input from '../Input/Input';
import { FieldErrors } from 'react-hook-form';
import { FormValues } from '@/components/organisms/Form/Form';
import { capitalizeFirstLetter } from '@/utils/text-utils';

type OptionType = {
  id: number;
  name: string;
};

interface CustomAutocompleteProps {
  options: OptionType[];
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  onInputChange: (event: React.ChangeEvent<{}>, newValue: string) => void;
  value: string;
  errors: FieldErrors<FormValues>;
  fullWidth?: boolean;
}

const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused': {
    '&:hover': {
      backgroundColor: '#9747FF40',
    },
    '&.Mui-focused': {
      backgroundColor: '#D4A4FF',
    },
    '&[data-focus="true"]': {
      backgroundColor: '#9747FF40',
    },
    '&[aria-selected="true"].Mui-focused': {
      backgroundColor: '#9747FF',
    },
  },
});

const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({
  options,
  onInputChange,
  value,
  errors,
  fullWidth = true,
}) => {
  return (
    <StyledAutocomplete
      options={options.map((pokemon) => capitalizeFirstLetter(pokemon.name))}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <Input
          {...params}
          label='Pokémon Name'
          error={!!errors.pokemon}
          helperText={errors.pokemon?.message}
          variant='outlined'
          fullWidth={fullWidth}
        />
      )}
      value={value}
      fullWidth={fullWidth}
    />
  );
};

export default CustomAutocomplete;
