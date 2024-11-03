'use client';

import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Input from '@/components/atoms/Input/Input';
import Box from '@mui/material/Box';
import CustomAutocomplete from '@/components/atoms/Autocomplete/Autocomplete';
import { useForm, Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import pokemonSearchData from '@/data/pokemonData.json';
import { useSearchPokemonQuery } from '@/store/pokemonApi';
import Fuse from 'fuse.js';
import { Card } from '@mui/material';
import SuccessDialog from '@/components/atoms/Dialog/Dialog';
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton';
import SoftButton from '@/components/atoms/SoftButton/SoftButton';
import PokemonCard from '../PokemonCardContent/PokemonCardContent';

export interface FormValues {
  trainerName: string;
  trainerAge: string;
  pokemon: string;
}

interface Pokemon {
  id: number;
  name: string;
}

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      trainerName: '',
      trainerAge: '',
      pokemon: '',
    },
  });

  const pokemonList: Pokemon[] = pokemonSearchData.data;
  const [filteredPokemon, setFilteredPokemon] =
    useState<Pokemon[]>(pokemonList);
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
    null
  );

  const fuse = new Fuse(pokemonList, {
    keys: ['name'],
    threshold: 0.3,
  });

  const handlePokemonSearch = (query: string) => {
    if (query) {
      const results = fuse.search(query);
      setFilteredPokemon(results.map((result) => result.item));
    } else {
      setFilteredPokemon(pokemonList);
    }
  };
  const { data: pokemonData, isLoading } = useSearchPokemonQuery(
    selectedPokemonId as number,
    {
      skip: selectedPokemonId === null,
    }
  );
  console.log(pokemonData, 'pokemonData');

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFormSubmit = (data: FormValues) => {
    setDialogOpen(true);
    console.log('Form data:', data);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    reset({
      trainerName: '',
      trainerAge: '',
      pokemon: '',
    });
    setSelectedPokemonId(null);
    setFilteredPokemon(pokemonList);
  };
  const pokemonInfo = selectedPokemonId && pokemonData;

  const renderContent = () => {
    if (isLoading) {
      return <Typography>Loading...</Typography>;
    }
    if (pokemonInfo) {
      return (
        <PokemonCard
          types={pokemonData.types}
          name={pokemonData.name}
          id={pokemonData.id}
          baseExperience={pokemonData.base_experience}
          imageUrl={pokemonData.sprites.front_default}
        />
      );
    }
    return <Typography>Your Pokemon</Typography>;
  };
  return (
    <>
      {/* Success Dialog */}
      <SuccessDialog open={dialogOpen} onClose={handleCloseDialog} />

      <Wrapper>
        <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
          <Typography>Date</Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name='trainerName'
                control={control}
                defaultValue=''
                rules={{ required: 'Trainer name is required' }}
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
                  required: 'Trainer age is required',
                  min: { value: 16, message: 'Age must be at least 16' },
                  max: {
                    value: 99,
                    message: 'Age must be less than or equal to 99',
                  },
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
          <Box sx={{ marginTop: 2 }}>
            <Controller
              name='pokemon'
              control={control}
              defaultValue=''
              rules={{ required: 'Please select a Pokémon' }}
              render={({ field: { onChange, value } }) => (
                <CustomAutocomplete
                  options={filteredPokemon}
                  onInputChange={(_, newValue) => {
                    handlePokemonSearch(newValue);
                    const selectedPokemon = filteredPokemon.find(
                      (p) => p.name === newValue
                    );
                    onChange(selectedPokemon ? selectedPokemon.name : '');
                    setSelectedPokemonId(
                      selectedPokemon ? selectedPokemon.id : null
                    );
                  }}
                  value={value}
                  errors={errors}
                />
              )}
            />
          </Box>

          {/* Pokémon Details Display */}
          <Card
            variant='outlined'
            elevation={0}
            sx={{
              height: 300,
              padding: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {renderContent()}
          </Card>
          <Box
            display='flex'
            gap={2}
            sx={{
              display: 'flex',
              justifyContent: 'right',
            }}
          >
            <SoftButton
              variant='outlined'
              type='reset'
              onClick={() => {
                reset({
                  trainerName: '',
                  trainerAge: '',
                  pokemon: '',
                });
                setSelectedPokemonId(null);
                setFilteredPokemon(pokemonList);
              }}
            >
              Reset
            </SoftButton>
            <PrimaryButton variant='contained' color='primary' type='submit'>
              Submit
            </PrimaryButton>
          </Box>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default Form;
