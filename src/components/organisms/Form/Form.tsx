'use client';

import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import pokemonSearchData from '@/data/pokemonData.json';
import { useSearchPokemonQuery } from '@/store/pokemonApi';
import Fuse from 'fuse.js';
import SuccessDialog from '@/components/atoms/Dialog/Dialog';
import TrainerInfoFields from '@/components/molecules/TrainerInfoFields/TrainerInfoFields';
import PokemonDisplay from '@/components/molecules/PokemonDisplay/PokemonDisplay';
import PokemonSearch from '@/components/molecules/PokemonSearch/PokemonSearch';
import FormButtons from '@/components/molecules/FormButtons/FormButtons';
import CurrentDate from '@/components/atoms/CurrentDate/CurrentDate';

export interface FormValues {
  trainerName: string;
  trainerAge: string;
  pokemon: string;
}

export interface Pokemon {
  id: number;
  name: string;
}

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const Form: React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      trainerName: '',
      trainerAge: '',
      pokemon: '',
    },
  });

  const { handleSubmit, reset } = methods;

  const pokemonList: Pokemon[] = pokemonSearchData.data;

  const [filteredPokemon, setFilteredPokemon] =
    useState<Pokemon[]>(pokemonList);
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: pokemonData, isLoading } = useSearchPokemonQuery(
    selectedPokemonId as number,
    {
      skip: selectedPokemonId === null,
    }
  );

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

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

  const handleFormSubmit = () => {
    setDialogOpen(true);
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

  return (
    <>
      {/* Success Dialog */}
      <SuccessDialog open={dialogOpen} onClose={handleCloseDialog} />

      <Wrapper>
        <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
          <FormProvider {...methods}>
            <CurrentDate timeZone={timeZone} />
            <TrainerInfoFields />
            <Box sx={{ marginTop: 2 }}>
              <PokemonSearch
                filteredPokemon={filteredPokemon}
                handlePokemonSearch={handlePokemonSearch}
                setSelectedPokemonId={setSelectedPokemonId}
              />
            </Box>
            <Box sx={{ marginTop: 2 }}>
              <PokemonDisplay
                isLoading={isLoading}
                pokemonData={pokemonData}
                selectedPokemonId={selectedPokemonId}
              />
            </Box>
            <FormButtons
              reset={reset}
              setSelectedPokemonId={setSelectedPokemonId}
            />
          </FormProvider>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default Form;
