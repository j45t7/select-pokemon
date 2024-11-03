import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Grid from '@mui/material/Grid2';
import Input from '@/components/atoms/Input/Input';
import { FormValues } from '../Form/Form';

const TrainerInfoFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name='trainerName'
          control={control}
          rules={{
            required: 'Required from 2 to 20 symbols',
            validate: {
              length: (value) => {
                if (!value) {
                  return true;
                }
                if (value.length < 2 || value.length > 20) {
                  return 'Required from 2 to 20 symbols';
                }
                return true;
              },
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              error={!!errors.trainerName}
              helperText={errors.trainerName?.message}
              label="Trainer's Name"
              variant='outlined'
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Controller
          name='trainerAge'
          control={control}
          rules={{
            required: 'Required rage from 16-99',
            min: { value: 16, message: 'Required rage from 16-99' },
            max: { value: 99, message: 'Required rage from 16-99' },
            validate: {
              isNumber: (value) =>
                !isNaN(Number(value)) || 'Age must be a number',
            },
          }}
          render={({ field }) => (
            <Input
              label="Trainer's Age"
              variant='outlined'
              fullWidth
              {...field}
              error={!!errors.trainerAge}
              helperText={errors.trainerAge?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default TrainerInfoFields;
