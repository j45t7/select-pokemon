import React from 'react';
import Box from '@mui/material/Box';
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton';
import SoftButton from '@/components/atoms/SoftButton/SoftButton';
import { UseFormReset } from 'react-hook-form';
import { FormValues } from '@/components/organisms/Form/Form';

interface FormButtonsProps {
  reset: UseFormReset<FormValues>;
  setSelectedPokemonId: React.Dispatch<React.SetStateAction<number | null>>;
}

const FormButtons: React.FC<FormButtonsProps> = ({
  reset,
  setSelectedPokemonId,
}) => (
  <Box display='flex' gap={2} justifyContent='right'>
    <SoftButton
      variant='outlined'
      type='reset'
      onClick={() => {
        reset({ trainerName: '', trainerAge: '', pokemon: '' });
        setSelectedPokemonId(null);
      }}
    >
      Reset
    </SoftButton>
    <PrimaryButton variant='contained' color='primary' type='submit'>
      Submit
    </PrimaryButton>
  </Box>
);

export default FormButtons;
